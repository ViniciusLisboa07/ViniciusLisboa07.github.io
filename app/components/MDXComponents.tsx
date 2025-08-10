import React from 'react'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-12 first:mt-0" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-bold text-gray-900 mb-4 mt-6" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-green-600 hover:text-green-700 hover:underline transition-colors" 
      {...props} 
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-gray-700" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    if (props.className?.includes('language-')) {
      return <code {...props} />
    }
    return (
      <code 
        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border border-gray-200" 
        {...props} 
      />
    )
  },
              pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
              if (!props.children) {
                return <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
              }

              const child = React.Children.only(props.children) as React.ReactElement
              const language = (child?.props as { className?: string })?.className?.replace('language-', '') || 'text'

              return (
                <div className="relative mb-6">
                  {language !== 'text' && (
                    <div className="absolute top-0 right-0 bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                      {language}
                    </div>
                  )}
                  <pre className={`language-${language} bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto pt-8`}>
                    <code className={`language-${language}`}>
                      {(child?.props as { children?: React.ReactNode })?.children}
                    </code>
                  </pre>
                </div>
              )
            },
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote 
      className="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-6" 
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
    <li className="text-gray-700" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-gray-200 my-8" {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-gray-200 rounded-lg" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="bg-gray-50 border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="border border-gray-200 px-4 py-2 text-gray-700" {...props} />
  ),
}

export default components
