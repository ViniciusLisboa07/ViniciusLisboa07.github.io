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