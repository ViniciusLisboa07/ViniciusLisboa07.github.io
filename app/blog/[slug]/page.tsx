import { notFound } from 'next/navigation';
import BlogPost from '../../components/BlogPost';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Como iniciar com React',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
      <h2>Instalação</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <pre><code>npm create react-app my-app</code></pre>
      <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
    `,
    date: '2023-10-15',
    imageUrl: '/images/blog/react-basics.jpg',
    slug: 'como-iniciar-com-react',
    tags: ['React', 'Frontend', 'JavaScript'],
    author: {
      name: 'Vinicius Lisboa',
      imageUrl: '/images/profile.jpg',
    },
  },
];

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params; 
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O artigo que você está procurando não existe',
    };
  }

  return {
    title: `${post.title} | Blog de Vinicius Lisboa`,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; 
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}