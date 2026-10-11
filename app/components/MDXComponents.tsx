import React from 'react'
import Image from 'next/image'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-4xl font-medium tracking-tight text-ink mb-8 mt-12 first:mt-0" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-3xl font-medium tracking-tight text-ink mb-6 mt-14" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-2xl font-medium text-ink mb-4 mt-10" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="font-serif text-xl font-medium text-ink mb-4 mt-8" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-ink-soft leading-relaxed mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-forest transition-colors" 
      {...props} 
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-ink-soft" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    if (props.className?.includes('language-')) {
      return <code {...props} />
    }
    return (
      <code 
        className="bg-paper-dark text-ink px-1.5 py-0.5 rounded-sm text-[0.85em] font-mono border border-ink/15" 
        {...props} 
      />
    )
  },
              pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
              if (!props.children) {
                return <pre className="bg-ink text-paper p-5 rounded-sm overflow-x-auto mb-8" {...props} />
              }

              const child = React.Children.only(props.children) as React.ReactElement
              const language = (child?.props as { className?: string })?.className?.replace('language-', '') || 'text'

              return (
                <div className="relative mb-8">
                  {language !== 'text' && (
                    <div className="absolute top-0 right-0 bg-forest text-paper font-mono text-[11px] uppercase tracking-[0.15em] px-3 py-1">
                      {language}
                    </div>
                  )}
                  <pre className={`language-${language} bg-ink text-paper p-5 rounded-sm overflow-x-auto pt-10`}>
                    <code className={`language-${language}`}>
                      {(child?.props as { children?: React.ReactNode })?.children}
                    </code>
                  </pre>
                </div>
              )
            },
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote 
      className="border-l-2 border-forest pl-6 font-serif text-xl italic text-ink-soft my-8" 
      {...props} 
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-ink-soft marker:text-forest" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-ink/20 my-12" {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-ink/30" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="bg-paper-dark border border-ink/30 px-4 py-2 text-left font-semibold text-ink" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="border border-ink/30 px-4 py-2 text-ink-soft" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt } = props
    
    if (!src) return null
    
    // Se o src começar com /, é um caminho absoluto do public
    if (src.startsWith('/')) {
      return (
        <span className="my-8 flex justify-center">
          <Image
            src={src}
            alt={alt || ''}
            width={600}
            height={300}
            className="border border-ink/30 bg-paper p-2 max-w-2xl w-full h-auto"
          />
        </span>
      )
    }
    
    // Para URLs externas ou caminhos relativos, usar Image com unoptimized
    return (
      <span className="my-8 flex justify-center">
        <Image
          src={src}
          alt={alt || ''}
          width={600}
          height={300}
          className="border border-ink/30 bg-paper p-2 max-w-2xl w-full h-auto"
          unoptimized
        />
      </span>
    )
  },
}

export default components
