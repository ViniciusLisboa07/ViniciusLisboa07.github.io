---
title: "Construindo APIs com Ruby on Rails"
excerpt: "Aprenda a criar APIs RESTful eficientes utilizando Ruby on Rails e boas práticas de desenvolvimento"
date: "2023-09-22"
imageUrl: "/images/blog/rails-api.jpg"
tags: ["Ruby", "Rails", "API", "Backend"]
author:
  name: "Vinicius Lisboa"
  imageUrl: "/images/vinicius.jpeg"
---

# Construindo APIs com Ruby on Rails

Ruby on Rails é um framework web robusto e elegante que facilita o desenvolvimento de aplicações web, incluindo APIs RESTful. Neste artigo, vamos explorar como criar APIs eficientes usando Rails.

## Por que Rails para APIs?

Rails oferece várias vantagens para desenvolvimento de APIs:

- **Convenção sobre configuração**: Menos código boilerplate
- **Active Record**: ORM poderoso e intuitivo
- **Roteamento RESTful**: Fácil definição de rotas
- **Segurança**: Proteções built-in contra ataques comuns
- **Testes**: Framework de testes robusto

## Configurando um projeto Rails API

Primeiro, vamos criar um novo projeto Rails focado em API:

```bash
rails new minha-api --api
cd minha-api
```

A flag `--api` remove componentes desnecessários para APIs, como views e assets.

## Criando um Modelo

Vamos criar um modelo para artigos:

```bash
rails generate model Article title:string content:text author:string published:boolean
rails db:migrate
```

## Configurando o Modelo

```ruby
# app/models/article.rb
class Article < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :author, presence: true
  
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }
end
```

## Criando o Controller

```bash
rails generate controller Api::V1::Articles
```

```ruby
# app/controllers/api/v1/articles_controller.rb
class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  def index
    @articles = Article.published.recent
    render json: @articles
  end

  def show
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article.destroy
    head :no_content
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :content, :author, :published)
  end
end
```

## Configurando as Rotas

```ruby
# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end
end
```

## Serializers para JSON

Para melhor controle sobre o JSON retornado, use serializers:

```bash
gem 'active_model_serializers'
```

```ruby
# app/serializers/article_serializer.rb
class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :published, :created_at, :updated_at
  
  def created_at
    object.created_at.strftime('%Y-%m-%d %H:%M:%S')
  end
  
  def updated_at
    object.updated_at.strftime('%Y-%m-%d %H:%M:%S')
  end
end
```

## Autenticação com JWT

Para APIs seguras, implemente autenticação JWT:

```bash
gem 'jwt'
gem 'bcrypt'
```

```ruby
# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  before_action :authenticate_request
  
  private
  
  def authenticate_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    
    begin
      @decoded = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
      @current_user = User.find(@decoded['user_id'])
    rescue ActiveRecord::RecordNotFound, JWT::DecodeError
      render json: { error: 'Token inválido' }, status: :unauthorized
    end
  end
end
```

## Testes com RSpec

```ruby
# spec/requests/api/v1/articles_spec.rb
require 'rails_helper'

RSpec.describe 'Articles API', type: :request do
  describe 'GET /api/v1/articles' do
    it 'returns all articles' do
      get '/api/v1/articles'
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /api/v1/articles' do
    it 'creates a new article' do
      article_params = {
        title: 'Meu Artigo',
        content: 'Conteúdo do artigo',
        author: 'Vinicius Lisboa',
        published: true
      }

      post '/api/v1/articles', params: { article: article_params }
      expect(response).to have_http_status(201)
    end
  end
end
```

## Documentação da API

Use Swagger/OpenAPI para documentar sua API:

```bash
gem 'rswag-api'
gem 'rswag-ui'
```

## Deploy e Monitoramento

### Deploy no Heroku

```bash
heroku create minha-api
git push heroku main
heroku run rails db:migrate
```

### Monitoramento com New Relic

```bash
gem 'newrelic_rpm'
```

## Boas Práticas

1. **Versionamento**: Sempre versione suas APIs
2. **Validação**: Valide dados de entrada
3. **Tratamento de Erros**: Retorne códigos HTTP apropriados
4. **Rate Limiting**: Implemente limites de requisições
5. **Caching**: Use cache para melhorar performance
6. **Logs**: Mantenha logs detalhados
7. **Testes**: Teste todas as funcionalidades

## Exemplo de Rate Limiting

```ruby
# config/application.rb
config.middleware.use Rack::Attack

# config/initializers/rack_attack.rb
class Rack::Attack
  throttle('api/ip', limit: 100, period: 1.minute) do |req|
    req.ip
  end
end
```

## Conclusão

Ruby on Rails é uma excelente escolha para desenvolvimento de APIs. Com suas convenções, ferramentas built-in e ecossistema rico, você pode criar APIs robustas e escaláveis rapidamente.

Lembre-se de seguir as boas práticas, implementar testes adequados e manter a documentação atualizada. A comunidade Rails é muito ativa e sempre há algo novo para aprender!

---

*Este artigo foi escrito por Vinicius Lisboa. Para mais conteúdo sobre desenvolvimento backend, siga-me nas redes sociais.*
