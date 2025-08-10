---
title: "Inserção de dados em massa em bancos relacionais"
excerpt: ""
date: "2023-05-05"
imageUrl: "/images/blog/insercao.jpg"
tags: ["Ruby", "Rails", "Backend", "Banco de dados"]
author:
  name: "Vinicius Lisboa"
  imageUrl: "/images/vinicius.jpeg"
---

_Texto originalmente publicado em meu antigo medium no dia 5 de Maio de 2023_

> “A eficiência é fazer melhor o que já está sendo feito.” — Peter Drucker

Existem alguns benefícios muito claros pra utilização de inserção de dados em massa, mas acredito que a principal razão pra alguém procurar esta funcionalidade é **performance**.

Muitos cenários exigem uma grande quantidade de _inserções_ de dados, o que nos leva a duas principais abordagens.

Num primeiro caso poderíamos inserir um conjunto de dados em uma tabela realizando uma _query_ para cada registro que desejamos adicionar.

Quando temos um pequeno conjunto de dados essa abordagem pode funcionar bem. Por exemplo, em um banco temos as tabelas de Editoras, Livros e Reviews:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2m4scd74qi4h9fv6gbw.png)

Se utilizarmos alguns laços de repetição, teríamos a seguinte quantidade de queries:

- 1 query para editoras
- 10 queries para livros
- 10 query para review

21 inserções no banco de dados podem ser executadas em um tempo quase que imperceptível e em um custo de processamento baixo.

Os problemas começam a surgir quando essas ações escalam. Nesse mesmo exemplo se considerarmos os seguintes números:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lusu8vscc9zkgw5wuq4f.png)

Teremos o seguinte resultado em inserções:

- 100 queries para editoras
- 1.000.000 (100*10.000) de queries para livros
- 3.000.000 (1.000.000*3) de queries para reviews

Totalizando 4.000.100 queries. Aqui o tempo de execução já é **muito maior** e o custo de processamento também.

## INSERT INTO

Para essas situações os bancos de dados relacionais nos oferecem uma solução muito inteligente. Temos a possibilidade de utilizar uma declaração SQL que consegue inserir _múltiplos_ _registros_ em uma tabela com uma única _query “atômica”_.

No caso anterior, se tratando das três tabelas que totalizavam por volta de 4 milhões de queries, conseguimos, com INSERT INTO, realizar a mesma ação com apenas três _queries._

Esse é um exemplo genérico da utilização dessa declaração:

```
INSERT INTO table_name (column_name1, column_name2, column_name3, column_name4)   
VALUES   
(value1, value2, value3, value4),   
(value1, value2, value3, value4);
```

Alguns meses atrás utilizei a inserção em massa na refatoração de uma funcionalidade importante, pra isso fizemos alguns estudos e levantamentos de informações, o que acabou se tornando uma magia (capacitação) e agora esse texto.  
  

Nessa sintaxe, após o “INSERT INTO”, informamos o nome da tabela, seguido pelas colunas que vão ser preenchidas. Na seção dos VALUES informamos os valores correspondentes as colunas para cada registros que queremos adicionar.

As queries para nosso exemplo seriam as seguintes:

Editoras:

```
INSERT INTO Editoras (id, nome, dono, email)   
VALUES   
(1, Sétimo Selo, Pessoa1, email@email.com),   
(2, Companhia das Letras, Pessoa2, email@email.com),  
…  
X100
```

Livros:

```
INSERT INTO Livros (id, autor, id_editora)   
VALUES   
(1, Livro1, Pessoa1, 1),   
(2, Livro2, Pessoa2, 2),  
…  
X1.000.000
```

Reviews:

```
INSERT INTO Review (id, id_usuário, id_livro, comentário)   
VALUES   
(1, 1, Pessoa1, 1, “muito bom!”),   
(2, 2, Pessoa2, 2, “excelente livro!”),  
…  
X3.000.000
```

Reduzir a quantidade de _queries_ pode permitir que o banco de dados otimize a operação. Além disso, quando inserimos múltiplos registros em uma única transação, o banco de dados pode melhorar a integridade dos dados e reduzir a possibilidade de erros de transação, como falhas de conexão ou interrupções.

## **ActiveRecord-Import**

Se trouxermos esse conceito para o desenvolvimento web (mais especificamente com Ruby on Rails), a partir do _Rails 6_ já é possível utilizar SQL _inserts_ com métodos nativos do framework, o [insert](https://apidock.com/rails/v6.0.0/ActiveRecord/Persistence/ClassMethods/insert) e mais apropriado ao nosso caso o [insert_all](https://apidock.com/rails/v6.0.0/ActiveRecord/Persistence/ClassMethods/insert_all). Ótima solução!

Ainda não testei esse método (ainda!), por isso vou usar como exemplo pra contextos web a gem [Activerecord-Import](https://github.com/zdennis/activerecord-import) que funcionou muito bem com _Rails 5._

Continuando com nosso exemplo, ao inserirmos 10 livros com um laço de repetição e uma _query_ para cada registro, teremos um código parecido com este:

```
10.times do |i|  
  Book.create! name: "book #{i}"  
end
```

A gem adiciona para cada Model da nossa aplicação um método chamado _import_, é por ele que vamos realizar as operações, teríamos algo assim:

```
books = []  
10.times do |i|  
  books << Book.new(name: "book #{i}")  
end 
```
 
  
Book.import books

Declaramos um array vazio e preenchemos com os registros criados (ainda não salvos no banco); após isso podemos passar o array como parâmetro do método _import_ que nossa operação será realizada com INSERT INTO.

A [gem](https://github.com/zdennis/activerecord-import) adiciona outras funcionalidades muito interessantes, como parametrização das validações do model, tratativas para registros com chaves duplicas etc.

É importante dizer também que o ganho em **performance** e outros benefícios podem não se aplicar a todos os casos. Dependendo da quantidade de registros a ser adicionados e da capacidade do banco em lidar com os registros em poucas inserções. Por isso, uma análise deve ser construída considerando cada caso particular. Sempre vale a pena fazer um Benchmark!

_Alguns meses atrás utilizamos a inserção em massa na refatoração de uma funcionalidade importante, pra isso fizemos alguns estudos e levantamentos de informações, o que acabou se tornando uma magia (capacitação) e agora esse texto._

Se você chegou até aqui, obrigado!

E se isso foi de alguma forma instrutivo e te ajudou, ficarei muito feliz em saber.