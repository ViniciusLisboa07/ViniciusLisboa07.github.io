# Configuração de Meta Tags e Favicon

## 🎨 Favicon

### Opção 1: Favicon Estático (Recomendado)
1. Substitua o arquivo `app/favicon.ico` por sua imagem
2. Formato recomendado: `.ico` (32x32px) ou `.png`
3. Para múltiplos tamanhos, adicione arquivos como:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180px)

### Opção 2: Favicon Dinâmico (Atual)
- O arquivo `app/icon.tsx` gera um favicon dinâmico com as iniciais "VL"
- Para personalizar:
  - Altere o texto "VL" para suas iniciais
  - Modifique as cores do gradiente
  - Ajuste o tamanho da fonte

## 📱 Meta Tags para Compartilhamento

### Imagem Geral do Site
- **Arquivo**: `app/layout.tsx`
- **Imagem atual**: `/images/vinicius.jpeg`
- **Dimensões recomendadas**: 1200x630px (formato 16:9)
- **Para alterar**: Substitua o caminho em `openGraph.images[0].url`

### Imagens Específicas de Posts
- **Arquivo**: `app/blog/[slug]/page.tsx`
- **Funciona automaticamente** com `post.meta.imageUrl`
- **Fallback**: Usa a imagem geral se o post não tiver imagem
- **Dimensões recomendadas**: 1200x630px

## 🔧 Personalização

### Cores do Site
- **Tema**: `#22c55e` (verde)
- **Arquivo**: `app/manifest.ts` e `app/icon.tsx`

### URLs
- **Base URL**: `https://viniciuslisboa07.github.io`
- **Arquivos**: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`

### Descrições
- **Título**: "Vinícius Lisboa - Desenvolvedor Web FullStack"
- **Descrição**: "Portfolio pessoal de Vinícius Lisboa, desenvolvedor web fullstack especializado em Ruby on Rails."

## 📋 Arquivos Criados/Modificados

1. **`app/layout.tsx`** - Meta tags gerais do site
2. **`app/blog/[slug]/page.tsx`** - Meta tags específicas de cada post
3. **`app/icon.tsx`** - Favicon dinâmico
4. **`app/manifest.ts`** - Configuração PWA
5. **`app/robots.ts`** - Configuração SEO
6. **`app/sitemap.ts`** - Sitemap automático

## 🚀 Como Testar

1. **Favicon**: Recarregue a página e veja na aba do navegador
2. **Meta Tags**: Use o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) ou [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **Sitemap**: Acesse `https://viniciuslisboa07.github.io/sitemap.xml`

## 💡 Dicas

- **Imagens**: Use formato JPG para melhor compatibilidade
- **Tamanhos**: Mantenha as dimensões 1200x630px para Open Graph
- **Performance**: Comprima as imagens antes de usar
- **SEO**: As meta tags melhoram o ranking nos motores de busca
