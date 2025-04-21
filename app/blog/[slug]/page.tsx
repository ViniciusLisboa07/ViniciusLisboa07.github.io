import { notFound } from 'next/navigation'
import BlogPost from '../../components/BlogPost'
import { Metadata } from 'next'

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Inserção de dados em massa em bancos relacionais',
    content: `
     <div class="crayons-article__body text-styles spec__body" data-article-id="2249283" id="article-body">
        <p><em>Texto originalmente publicado em meu antigo medium no dia 5 de Maio de 2023</em></p>
        <blockquote>
        <p>“A eficiência é fazer melhor o que já está sendo feito.” — Peter Drucker</p>
        </blockquote>

        <p>Existem alguns benefícios muito claros pra utilização de inserção de dados em massa, mas acredito que a principal razão pra alguém procurar esta funcionalidade é&nbsp;<strong>performance</strong>.</p>

        <p>Muitos cenários exigem uma grande quantidade de&nbsp;<em>inserções</em>&nbsp;de dados, o que nos leva a duas principais abordagens.</p>

        <p>Num primeiro caso poderíamos inserir um conjunto de dados em uma tabela realizando uma&nbsp;<em>query</em>&nbsp;para cada registro que desejamos adicionar.</p>

        <p>Quando temos um pequeno conjunto de dados essa abordagem pode funcionar bem. Por exemplo, em um banco temos as tabelas de Editoras, Livros e Reviews:</p>

        <p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd2m4scd74qi4h9fv6gbw.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd2m4scd74qi4h9fv6gbw.png" alt="Image description" loading="lazy" width="766" height="281"></a></p>

        <p>Se utilizarmos alguns laços de repetição, teríamos a seguinte quantidade de queries:</p>

        <ul>
        <li>1 query para editoras</li>
        <li>10 queries para livros</li>
        <li>10 query para review</li>
        </ul>

        <p>21 inserções no banco de dados podem ser executadas em um tempo quase que imperceptível e em um custo de processamento baixo.</p>

        <p>Os problemas começam a surgir quando essas ações escalam. Nesse mesmo exemplo se considerarmos os seguintes números:</p>

        <p><a href="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flusu8vscc9zkgw5wuq4f.png" class="article-body-image-wrapper"><img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flusu8vscc9zkgw5wuq4f.png" alt="Image description" loading="lazy" width="799" height="289"></a></p>

        <p>Teremos o seguinte resultado em inserções:</p>

        <ul>
        <li>100 queries para editoras</li>
        <li>1.000.000 (100*10.000) de queries para livros</li>
        <li>3.000.000 (1.000.000*3) de queries para reviews</li>
        </ul>

        <p>Totalizando 4.000.100 queries. Aqui o tempo de execução já é&nbsp;<strong>muito maior</strong>&nbsp;e o custo de processamento também.</p>

        <h2>
          <a name="insert-into" href="#insert-into">
          </a>
          INSERT INTO
        </h2>

        <p>Para essas situações os bancos de dados relacionais nos oferecem uma solução muito inteligente. Temos a possibilidade de utilizar uma declaração SQL que consegue inserir&nbsp;<em>múltiplos</em>&nbsp;<em>registros</em>&nbsp;em uma tabela com uma única&nbsp;<em>query “atômica”</em>.</p>

        <p>No caso anterior, se tratando das três tabelas que totalizavam por volta de 4 milhões de queries, conseguimos, com INSERT INTO, realizar a mesma ação com apenas três&nbsp;<em>queries.</em></p>

        <p>Esse é um exemplo genérico da utilização dessa declaração:<br>
        </p>

        <div class="highlight js-code-highlight">
        <pre class="highlight plaintext"><code>INSERT INTO table_name (column_name1, column_name2, column_name3, column_name4)   
        VALUES   
        (value1, value2, value3, value4),   
        (value1, value2, value3, value4);
        </code></pre>
        <div class="highlight__panel js-actions-panel">
        <div class="highlight__panel-action js-fullscreen-code-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
            <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
        </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
            <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
        </svg>
        </div>
        </div>
        </div>

        <p>Alguns meses atrás utilizei a inserção em massa na refatoração de uma funcionalidade importante, pra isso fizemos alguns estudos e levantamentos de informações, o que acabou se tornando uma magia (capacitação) e agora esse texto.  </p>

        <p>Nessa sintaxe, após o “INSERT INTO”, informamos o nome da tabela, seguido pelas colunas que vão ser preenchidas. Na seção dos VALUES informamos os valores correspondentes as colunas para cada registros que queremos adicionar.</p>

        <p>As queries para nosso exemplo seriam as seguintes:</p>

        <p>Editoras:<br>
        </p>

        <div class="highlight js-code-highlight">
        <pre class="highlight plaintext"><code>INSERT INTO Editoras (id, nome, dono, email)   
        VALUES   
        (1, Sétimo Selo, Pessoa1, email@email.com),   
        (2, Companhia das Letras, Pessoa2, email@email.com),  
        …  
        X100
        </code></pre>
        <div class="highlight__panel js-actions-panel">
        <div class="highlight__panel-action js-fullscreen-code-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
            <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
        </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
            <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
        </svg>

        </div>
        </div>
        </div>
        <p>Livros:<br>
        </p>

        <div class="highlight js-code-highlight">
        <pre class="highlight plaintext"><code>INSERT INTO Livros (id, autor, id_editora)   
        VALUES   
        (1, Livro1, Pessoa1, 1),   
        (2, Livro2, Pessoa2, 2),  
        …  
        X1.000.000
        </code></pre>
        <div class="highlight__panel js-actions-panel">
        <div class="highlight__panel-action js-fullscreen-code-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
            <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
        </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
            <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
        </svg>

        </div>
        </div>
        </div>
        <p>Reviews:<br>
        </p>

        <div class="highlight js-code-highlight">
        <pre class="highlight plaintext"><code>INSERT INTO Review (id, id_usuário, id_livro, comentário)   
        VALUES   
        (1, 1, Pessoa1, 1, “muito bom!”),   
        (2, 2, Pessoa2, 2, “excelente livro!”),  
        …  
        X3.000.000
        </code></pre>
        <div class="highlight__panel js-actions-panel">
        <div class="highlight__panel-action js-fullscreen-code-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
            <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
        </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
            <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
        </svg>

        </div>
        </div>
        </div>



        <p>Reduzir a quantidade de&nbsp;<em>queries</em>&nbsp;pode permitir que o banco de dados otimize a operação. Além disso, quando inserimos múltiplos registros em uma única transação, o banco de dados pode melhorar a integridade dos dados e reduzir a possibilidade de erros de transação, como falhas de conexão ou interrupções.</p>

        <h2>
          <a name="activerecordimport" href="#activerecordimport">
          </a>
          <strong>ActiveRecord-Import</strong>
        </h2>

        <p>Se trouxermos esse conceito para o desenvolvimento web (mais especificamente com Ruby on Rails), a partir do&nbsp;<em>Rails 6</em>&nbsp;já é possível utilizar SQL&nbsp;<em>inserts</em>&nbsp;com métodos nativos do framework, o&nbsp;<a href="https://apidock.com/rails/v6.0.0/ActiveRecord/Persistence/ClassMethods/insert" target="_blank" rel="noopener noreferrer">insert</a>&nbsp;e mais apropriado ao nosso caso o&nbsp;<a href="https://apidock.com/rails/v6.0.0/ActiveRecord/Persistence/ClassMethods/insert_all" target="_blank" rel="noopener noreferrer">insert_all</a>. Ótima solução!</p>

        <p>Ainda não testei esse método (ainda!), por isso vou usar como exemplo pra contextos web a gem&nbsp;<a href="https://github.com/zdennis/activerecord-import" target="_blank" rel="noopener noreferrer">Activerecord-Import</a>&nbsp;que funcionou muito bem com&nbsp;<em>Rails 5.</em></p>

        <p>Continuando com nosso exemplo, ao inserirmos 10 livros com um laço de repetição e uma&nbsp;<em>query</em>&nbsp;para cada registro, teremos um código parecido com este:<br>
        </p>

        <div class="highlight js-code-highlight">
        <pre class="highlight plaintext"><code>10.times do |i|  
          Book.create! name: "book #{i}"  
        end
        </code></pre>
        <div class="highlight__panel js-actions-panel">
        <div class="highlight__panel-action js-fullscreen-code-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
            <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
        </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
            <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
        </svg>

        </div>
        </div>
        </div>



        <p>A gem adiciona para cada Model da nossa aplicação um método chamado&nbsp;<em>import</em>, é por ele que vamos realizar as operações, teríamos algo assim:<br>
        </p>

        <div class="highlight js-code-highlight">
        <pre class="highlight plaintext"><code>books = []  
        10.times do |i|  
          books &lt;&lt; Book.new(name: "book #{i}")  
        end 
        </code></pre>
        <div class="highlight__panel js-actions-panel">
        <div class="highlight__panel-action js-fullscreen-code-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
            <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
        </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
            <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
        </svg>

        </div>
        </div>
        </div>



        <p>Book.import books</p>

        <p>Declaramos um array vazio e preenchemos com os registros criados (ainda não salvos no banco); após isso podemos passar o array como parâmetro do método&nbsp;<em>import</em>&nbsp;que nossa operação será realizada com INSERT INTO.</p>

        <p>A&nbsp;<a href="https://github.com/zdennis/activerecord-import" target="_blank" rel="noopener noreferrer">gem</a>&nbsp;adiciona outras funcionalidades muito interessantes, como parametrização das validações do model, tratativas para registros com chaves duplicas etc.</p>

        <p>É importante dizer também que o ganho em&nbsp;<strong>performance</strong>&nbsp;e outros benefícios podem não se aplicar a todos os casos. Dependendo da quantidade de registros a ser adicionados e da capacidade do banco em lidar com os registros em poucas inserções. Por isso, uma análise deve ser construída considerando cada caso particular. Sempre vale a pena fazer um Benchmark!</p>

        <p><em>Alguns meses atrás utilizamos a inserção em massa na refatoração de uma funcionalidade importante, pra isso fizemos alguns estudos e levantamentos de informações, o que acabou se tornando uma magia (capacitação) e agora esse texto.</em></p>

        <p>Se você chegou até aqui, obrigado!</p>

        <p>E se isso foi de alguma forma instrutivo e te ajudou, ficarei muito feliz em saber.</p>


          </div>
    `,
    date: '2023-10-15',
    imageUrl: '/images/blog/bulkinsert.webp',
    slug: 'insercao-de-dados-em-massa-em-bancos-relacionais',
    tags: ['Banco de dados', 'SQL', 'Inserção de dados'],
    author: {
      name: 'Vinicius Lisboa',
      imageUrl: '/images/profile.jpg'
    }
  },
]

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find(post => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O artigo que você está procurando não existe'
    }
  }
  
  return {
    title: `${post.title} | Blog de Vinicius Lisboa`,
    description: post.content.substring(0, 160)
  }
}

// Remova o async ou corrija a estrutura de parâmetros
export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  return <BlogPost post={post} />
}