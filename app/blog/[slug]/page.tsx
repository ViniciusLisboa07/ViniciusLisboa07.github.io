import { notFound } from 'next/navigation';
import BlogPost from '../../components/BlogPost';
import type { Metadata } from 'next';
import { getPostSlugs, getPostContent } from '../../../lib/posts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostContent(slug);

  if (!postData) {
    return {
      title: 'Post não encontrado',
      description: 'O artigo que você está procurando não existe',
    };
  }

  return {
    title: `${postData.meta.title} | Blog de Vinicius Lisboa`,
    description: postData.meta.excerpt,
    openGraph: {
      title: postData.meta.title,
      description: postData.meta.excerpt,
      type: 'article',
      authors: [postData.meta.author.name],
      publishedTime: postData.meta.date,
      url: `https://viniciuslisboa07.github.io/blog/${slug}`,
      siteName: 'Blog de Vinicius Lisboa',
      images: postData.meta.imageUrl ? [
        {
          url: postData.meta.imageUrl,
          width: 1200,
          height: 630,
          alt: postData.meta.title,
        },
      ] : [
        {
          url: '/images/vinicius.jpeg', // Fallback para posts sem imagem
          width: 1200,
          height: 630,
          alt: 'Vinícius Lisboa - Desenvolvedor Web FullStack',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.meta.title,
      description: postData.meta.excerpt,
      images: postData.meta.imageUrl ? [postData.meta.imageUrl] : ['/images/vinicius.jpeg'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postData = await getPostContent(slug);

  if (!postData) {
    notFound();
  }

  return <BlogPost post={postData} />;
}