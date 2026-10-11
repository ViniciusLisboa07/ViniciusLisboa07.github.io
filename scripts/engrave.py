"""
Gera as ilustrações em estilo gravura (linhas onduladas) usadas no site.

A espessura de cada linha acompanha a escuridão da imagem de origem e as
linhas se curvam levemente com o relevo, imitando gravuras de cédulas.

Uso: python3 scripts/engrave.py
Saída: public/images/engraved/*.png (tinta com fundo transparente)
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "engraved"

INK = {
    "ink": (22, 19, 15),
    "navy": (23, 36, 71),
    "forest": (19, 61, 44),
    "paper": (239, 231, 214),
}


def noise(w, h, scale, seed, octaves=4):
    """Ruído fractal simples: grades aleatórias ampliadas e somadas."""
    rng = np.random.default_rng(seed)
    total = np.zeros((h, w))
    amp, norm = 1.0, 0.0
    for o in range(octaves):
        cells = max(2, int(scale * 2**o))
        grid = rng.random((cells, cells)).astype(np.float32)
        layer = Image.fromarray(grid, mode="F").resize((w, h), Image.BICUBIC)
        total += amp * np.asarray(layer)
        norm += amp
        amp *= 0.5
    total /= norm
    return (total - total.min()) / (total.max() - total.min() + 1e-6)


def engrave(gray, period=7.0, wave_amp=2.2, wavelength=140.0, relief=6.0, min_line=0.07, seed=1):
    """
    gray: array float [0, 1] (0 = preto).
    Retorna a cobertura de tinta [0, 1] por pixel.
    """
    h, w = gray.shape
    dark = np.clip(1.0 - gray, 0.0, 1.0)
    y, x = np.mgrid[0:h, 0:w].astype(np.float32)

    phase = noise(w, h, 3, seed, octaves=2) * 2 * np.pi
    smooth_dark = np.asarray(
        Image.fromarray((dark * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(6))
    ).astype(np.float32) / 255
    yy = y + wave_amp * np.sin(2 * np.pi * x / wavelength + phase) + relief * smooth_dark

    dist = np.abs(yy / period - np.round(yy / period))  # 0 no centro da linha, 0.5 entre linhas
    half_width = min_line / 2 + dark * (0.5 - min_line / 2)
    edge = 0.6 / period  # antialias de ~1px
    return np.clip((half_width - dist) / edge + 0.5, 0.0, 1.0)


def save(coverage, color, name):
    OUT.mkdir(parents=True, exist_ok=True)
    h, w = coverage.shape
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[..., :3] = INK[color]
    rgba[..., 3] = (coverage * 255).astype(np.uint8)
    Image.fromarray(rgba, "RGBA").save(OUT / f"{name}.png", optimize=True)
    print("ok", OUT / f"{name}.png")


def load_gray(path, width, contrast=1.0, gamma=1.0):
    im = ImageOps.grayscale(Image.open(path))
    im = im.resize((width, int(im.height * width / im.width)), Image.LANCZOS)
    im = ImageOps.autocontrast(im, cutoff=1).filter(ImageFilter.GaussianBlur(1.6))
    g = np.asarray(im).astype(np.float32) / 255
    g = np.clip((g - 0.5) * contrast + 0.5, 0, 1)
    return g**gamma


def ridge(w, base, height, seed, rough=5, slope=0.0):
    """Linha de cume de uma montanha (y por coluna); slope > 0 ergue o lado direito."""
    n = noise(w, 1, rough, seed, octaves=5)[0]
    lift = slope * np.linspace(0, 1, w) ** 2
    return base - height * (n + lift)


def landscape(w, h, seed=7):
    """Paisagem procedural: céu claro, sol, três cordilheiras e mar."""
    y, x = np.mgrid[0:h, 0:w].astype(np.float32)
    img = 0.92 - 0.25 * (1 - y / h)  # céu um pouco mais escuro no alto

    sun = np.hypot(x - w * 0.68, y - h * 0.36) < h * 0.13
    img = np.where(sun, 1.0, img)

    tex = noise(w, h, 14, seed + 9, octaves=5)
    layers = [
        (h * 0.60, h * 0.22, 0.66, seed, 0.0),
        (h * 0.76, h * 0.26, 0.42, seed + 1, 0.4),
        (h * 0.98, h * 0.30, 0.18, seed + 2, 1.6),
    ]
    for base, height, tone, s, slope in layers:
        top = ridge(w, base, height, s, slope=slope)
        mask = y > top[None, :]
        # luz vindo do sol: encostas mais claras perto do cume
        depth = np.clip((y - top[None, :]) / (h * 0.25), 0, 1)
        shade = tone + 0.35 * (tex - 0.5) + 0.15 * (1 - depth) - 0.1 * (x / w)
        img = np.where(mask, shade, img)
    return np.clip(img, 0, 1)


def sea(w, h, seed=3):
    """Faixas de ondas que escurecem em direção à base."""
    y, x = np.mgrid[0:h, 0:w].astype(np.float32)
    swell = noise(w, h, 4, seed, octaves=3)
    img = 1.0 - (y / h) ** 1.4 * 0.95 + 0.25 * (swell - 0.5)
    return np.clip(img, 0, 1)


if __name__ == "__main__":
    save(engrave(landscape(1800, 1000), period=7, relief=8, seed=5), "navy", "landscape")
    save(engrave(sea(1800, 700), period=10, wave_amp=3.5, relief=12, seed=8), "forest", "sea")
