import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vinícius Lisboa - Portfolio',
    short_name: 'VL Portfolio',
    description: 'Portfolio pessoal de Vinícius Lisboa, desenvolvedor web fullstack',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/images/vinicius.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
