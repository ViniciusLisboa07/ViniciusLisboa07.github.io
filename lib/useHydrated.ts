import { useEffect, useState } from "react"

// true só depois da hidratação: evita divergência entre servidor e cliente
// em valores que dependem do navegador (ex.: idioma detectado)
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  return hydrated
}
