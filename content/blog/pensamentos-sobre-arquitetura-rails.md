---
title: "Pensamentos sobre arquitetura do Rails"
excerpt: "Ou como o Rails enxerga soluções para os problemas classicos da arquitetura"
date: "2025-12-09"
imageUrl: "/images/blog/arquitetura-rails.png"
tags: ["Ruby", "Rails", "DDD", "ActiveRecord", "Arquitetura"]
author:
  name: "Vinicius Lisboa"
  imageUrl: "/images/vinicius.jpeg"
---
Li recentemente um [texto](https://danonrails.wordpress.com/2025/10/14/hexagonal-architecture-in-rails-set-your-business-logic-free/) muito interessante do Daniel Frydman (aliás, um ótimo blog que tenho gostado muito de acompanhar e tem me inspirado a escrever mais.) onde ele aplica os conceitos de arquitetura hexagonal a um projeto Rails. Acredito que a aplicação proposta é uma ótima maneira de enxergar o problema e tem benefícios claros como ele mesmo demonstra em seu texto. 

No entanto esse assunto me deixou com uma pulga atrás da orelha, e eu gostaria de externalizar isso neste texto onde eu pretendo tentar entender os conceitos de arquitetura hexagonal como proposto por Alistair Cockburn e como isso "conflita" com alguns dos pensamentos por trás do conhecido *Rails Way*.

As ideias (ou pelo menos sua difusão) de Cockburn com Hexagonal, Bob Martin com Clean Arch, Eric Evans com DDD parecem partir de um ponto em comum: o domínio da sua aplicação, isto é aquilo que chamamos de lógica de negócio, deve estar isolada das outras camadas camadas da aplicação.

Cockburn especificamente propõe que o domínio deve ser isolada da *infraestrutura*: a lógica de negócio fica no “núcleo”, conectando-se ao mundo externo apenas através de “portas” e “adaptadores”. O núcleo não sabe se está conversando com uma interface gráfica, HTTP ou um banco de dados, tudo isso é abstraído via contratos claros de entrada e saída (os ja mencionados *ports/adapters*), permitindo fácil troca, adaptação e, principalmente, a *testabilidade independente do ambiente externo*.[](https://blog.everestek.com/a-deep-dive-into-hexagonal-architecture-principles-and-practices-2/)

![Image description](/images/blog/hexFig4.png)

O Rails no entanto segue por um outro caminho, e o cerne da questão parece pra mim ao menos, repousar sobre o *ActiveRecord*. Martin Fowler define active record em *Patterns of Enterprise Application Architecture* como:

> An object that wraps a row in a database table or view, encapsulates the database access, and adds domain logic on that data.

![Image description](/images/blog/active-record.png)

Num primeiro momento essa ideia parece estranha. Coisas diferentes parecem melhores se mantidas separadas, cada uma com suas responsabilidades. Por que juntar comportamento de domínio com persistência? Por que um objeto que “representa” uma entidade do negócio deveria também saber como se salvar no banco? Parece uma violação obvia do isolamento de dominio. E de fato isso, como DHH aponta em seus textos, virou quase uma espécie de *dogma arquitetural*.

No entanto ao voltarmos a luz da orientação a objetos para o problema parece que as coisas começam a se encaixar. A ideia de *encapsulação* defendida por autores como Alan Kay (criador do termo OO) e Kent Beck (com o SmallTalk) propoe que objetos devem ter controle seus proprios *estados* e *comportamentos*, assim como no active record. E a separação estrita e mal aplicada dessa dessas duas camadas pode gerar aquilo que o Fowler chamou de [Anemic Domain Model](https://martinfowler.com/bliki/AnemicDomainModel.html), modelos que são meramente conjuntos de dados, sem nenhuma lógica (justamente o que o DDD quer solucionar, ironicamente).

Todo esse problema reside no fato de que nosso banco de dados e nossa aplicação são coisas diferentes que precisam se comunicar. Que precisam encontrar um meio de transportar informação. O active record, diferentemente de muitos ORM's, se importa com ambas as partes, foi desenhado para que a camada de dominio e a persistencia dos dados fiquem juntas.  

Nas palavras de [Jorge Manrubia](https://dev.37signals.com/active-record-nice-and-blended/):

> In a database-powered application, domain logic is indissolubly linked to persistence. Is isolating persistence a goal or mitigation against not having the right ORM (Object Relational Mapping) technology in place? My point of view is that _if_ the ORM perfectly blends with the host language, and _if_ it comes with good answers for persisting your object models, and _if_ it offers good encapsulation mechanisms, then the original question gets restated. Instead of _“how can I isolate persistence from domain logic”_, it becomes _“why would I”_?

Referencias:

[https://danonrails.wordpress.com/2025/10/14/hexagonal-architecture-in-rails-set-your-business-logic-free/](https://danonrails.wordpress.com/2025/10/14/hexagonal-architecture-in-rails-set-your-business-logic-free/)

[https://www.martinfowler.com/eaaCatalog/activeRecord.html](https://www.martinfowler.com/eaaCatalog/activeRecord.html)

[https://martinfowler.com/articles/badri-hexagonal/](https://martinfowler.com/articles/badri-hexagonal/)

[https://dev.37signals.com/active-record-nice-and-blended/](https://dev.37signals.com/active-record-nice-and-blended/)

[https://dev.37signals.com/vanilla-rails-is-plenty/](https://dev.37signals.com/vanilla-rails-is-plenty/)

[https://martinfowler.com/bliki/AnemicDomainModel.html](https://martinfowler.com/bliki/AnemicDomainModel.html)