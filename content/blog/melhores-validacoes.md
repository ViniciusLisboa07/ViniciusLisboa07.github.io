---
title: "Melhores Validações"
excerpt: "Validando on rails"
date: "2025-12-27"
imageUrl: "/images/blog/validacao.png"
tags: ["Rails"]
author:
  name: "Vinicius Lisboa"
  imageUrl: "/images/vinicius.jpeg"
---

Uma distinção muito simples e interessante trazida pelo livro *Layerd Design for Ruby on Rails Applications* é a de validações de Transação e validações de Consistência. A primeira trata de validações que definem quando e como um estado pode ser alterado e a segunda trata de validações que restringem o que deve ou não ser alterado. No exemplo do livro:

- Uma publicação (de um blog, por exemplo) não pode ser alterada de *rascunho* depois de já ter sido alterada para *publicada* em algum momento.
	- Essa *regra* deve ser entendida como uma regra de transação
- Uma publicação não deve ser criada sem um título
	- Essa *regra* deve ser entendida como uma regra de consistência

O que está por trás dessa distinção é a noção *tempo*. Uma regra de consistência precisa ser valida em qualquer dado momento do ciclo de vida da nossa aplicação. Por sua vez, uma validação de transação só faz sentido num fluxo dinâmico de alterações.

Ambas validações podem ser feitas dentro de um model Rails (ActiveModel) comum através da reserved keyword *validate(s)*.

```ruby
class Post < ApplicationRecord
	  validate :prevent_drafting_published,
	    if: -> { published? && will_save_change_to_draft? }
	    
	  validates :title, presence: true
	  
	  def prevent_drafting_published
	    errors.add(:base, "Switching back to draft is not
	      allowed for published posts")
	  end
end
```

Note como a validação de transação só pode existir apartir de uma *condição*, o que denota sua caracterisca dinâmica. Enquanto a validação de consistência não precisa de condição nenhuma para que seja uma regra necessária.

Esse primeiro tipo de validação, que exige uma condição, normalmente contribui para um problema de quebra de responsabilidade. **Um model deve declarar suas validações mas não deve implementa-las**. Se nos atermos a essa regra vamos perceber que o proprio rails já a segue. Quando usamos o *validates presence: true*, estamos declarando a validação em nosso model e usando uma implementação externa a ele, no caso a classe **[PresenceValidator](https://www.rubydoc.info/docs/rails/ActiveModel/Validations/PresenceValidator)** implementa as regras de presença de atributos. 

Desta mesma forma, o livro nos mostra que podemos implementar nossos proprios métodos de validações, externos aos models e que extendem da mesma classe da qual extendem os metódos de validação padrão do rails.

```ruby
class Post::DraftValidator < ActiveModel::Validator
  def validate(post)
	    return unless post.published?
	    return unless post.will_save_change_to_draft
	    
	    post.errors.add(:base, "Switching back to draft is not
	      allowed for published posts")
	  end
end

class Post < ApplicationRecord
	  validates_with DraftValidator
end
```

Essa refatoração nos permite extrair a implementação das regras de validação para classes separadas em seus proprios contextos enquanto nosso model ainda mantem o mesmo comportamento.

Além dessa refatoração, outra consideração importante apontada é a relacionada aos contextos de validações. Quando diretamente no model as validações são *context-free* ou seja, executam sempre que houve um *commit* (seja um save ou update), independente de qualquer contexto envolto na ação, o que pode tornar muitas validações redundantes. Para isso o ActiveRecord nos fornece a opção *on*, que normalmente é usada para restringir callbacks e validações a criação ou atualização (on: :create ou on: :update), porém também podemos criar nossos próprios contextos em um model. Em nosso exemplo:

```ruby
class Post < ApplicationRecord
	  validates_with DraftValidator, on: :draft
	  
	  def draft
		  self.status = :draft
		  save!(context: :draft)
	  end
end
```

Esse contexto permite remover a linha "return unless post.published?" do validator e torna ele menos dependente do model.

Com essas refatorações nossas validações continuam proximas ao Rails Way e também distantes dos problemas comuns aos adicionarmos validações diretamente nos models.

--

A referência pra essa postagem:

![Image description](/images/blog/layerdDesign.png)