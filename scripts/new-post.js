const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w-]+/g, '') // remove all non-word chars
    .replace(/--+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text
}

async function createPost() {
  console.log('🚀 Criando um novo post...\n');

  const title = await question('Título do post: ');
  const excerpt = await question('Resumo (excerpt): ');
  const tagsInput = await question('Tags (separadas por vírgula): ');
  const imageUrl = await question('Caminho da imagem (ex: /images/blog/post.png) [opcional]: ');

  const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
  const slug = slugify(title);
  const date = new Date().toISOString().split('T')[0];

  const frontmatter = `---
title: "${title}"
excerpt: "${excerpt}"
date: "${date}"
imageUrl: "${imageUrl || '/images/blog/default.png'}"
tags: ${JSON.stringify(tags)}
author:
  name: "Vinicius Lisboa"
  imageUrl: "/images/vinicius.jpeg"
---

Escreva seu post aqui...
`;

  const directoryPath = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(directoryPath, `${slug}.md`);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  if (fs.existsSync(filePath)) {
    console.error(`\n❌ Erro: O arquivo ${slug}.md já existe!`);
    rl.close();
    return;
  }

  fs.writeFileSync(filePath, frontmatter);

  console.log(`\n✅ Post criado com sucesso em: ${filePath}`);
  console.log(`🔗 Slug: ${slug}`);
  
  rl.close();
}

createPost().catch(err => {
  console.error('Erro ao criar o post:', err);
  rl.close();
  process.exit(1);
});

