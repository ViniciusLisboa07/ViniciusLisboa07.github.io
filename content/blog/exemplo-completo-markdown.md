---
title: "Exemplo Completo de Markdown"
excerpt: "Um guia completo mostrando todas as funcionalidades de formatação disponíveis no blog"
date: "2024-01-15"
imageUrl: "/images/blog/markdown-example.jpg"
tags: ["Markdown", "Tutorial", "Formatação"]
author:
  name: "Vinicius Lisboa"
  imageUrl: "/images/vinicius.jpeg"
---

# Exemplo Completo de Markdown

Este post demonstra todas as funcionalidades de formatação disponíveis no blog usando Markdown.

## Títulos e Subtítulos

### Título H3
#### Título H4
##### Título H5

## Texto e Formatação

Este é um **texto em negrito** e este é um *texto em itálico*. Você também pode usar ***texto em negrito e itálico***.

### Listas

#### Lista não ordenada:
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

#### Lista ordenada:
1. Primeiro item
2. Segundo item
3. Terceiro item

## Código

### Código inline:
Use `console.log('Hello World!')` para imprimir no console.

### Blocos de código:

#### JavaScript:
```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Vinicius'));
```

#### TypeScript:
```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const usuario: Usuario = {
  id: 1,
  nome: 'Vinicius',
  email: 'vinicius@exemplo.com'
};
```

#### Ruby:
```ruby
class Usuario
  attr_accessor :nome, :email
  
  def initialize(nome, email)
    @nome = nome
    @email = email
  end
  
  def saudacao
    "Olá, #{@nome}!"
  end
end

usuario = Usuario.new("Vinicius", "vinicius@exemplo.com")
puts usuario.saudacao
```

#### Bash:
```bash
#!/bin/bash
echo "Instalando dependências..."
npm install
echo "Iniciando servidor..."
npm run dev
```

## Links

[Link para o GitHub](https://github.com/ViniciusLisboa07)
[Link para o LinkedIn](https://linkedin.com/in/vinicius-lisboa)

## Citações

> "A simplicidade é a sofisticação máxima." - Leonardo da Vinci

> Este é um exemplo de citação que pode ser usada para destacar informações importantes ou citações de outras pessoas.

## Tabelas

| Linguagem | Framework | Popularidade |
|-----------|-----------|--------------|
| JavaScript | React | ⭐⭐⭐⭐⭐ |
| TypeScript | Next.js | ⭐⭐⭐⭐⭐ |
| Ruby | Rails | ⭐⭐⭐⭐ |
| Python | Django | ⭐⭐⭐⭐ |

## Imagens

![Exemplo de imagem](/images/blog/example.jpg)

## Linha horizontal

---

## Conclusão

Este post demonstra todas as funcionalidades de formatação disponíveis no blog. O sistema suporta:

- ✅ **Títulos** de diferentes níveis
- ✅ **Formatação de texto** (negrito, itálico)
- ✅ **Listas** ordenadas e não ordenadas
- ✅ **Código** inline e em blocos
- ✅ **Syntax highlighting** para várias linguagens
- ✅ **Links** externos
- ✅ **Citações** destacadas
- ✅ **Tabelas** organizadas
- ✅ **Imagens** com alt text
- ✅ **Linhas horizontais**

*Este artigo foi escrito por Vinicius Lisboa. Para mais conteúdo sobre desenvolvimento web, siga-me nas redes sociais.*
