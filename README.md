# Forum Backend

Este é o backend de uma aplicação de fórum, desenvolvida com Node.js, Express e MongoDB.

## Funcionalidades

- Registro e autenticação de usuários
- Criação, leitura, atualização e exclusão (CRUD) de tópicos e posts
- Associação de posts a tópicos
- Listagem de posts de um determinado tópico

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Postman (para testes de API)

## Instalação

### Pré-requisitos

- Node.js instalado
- MongoDB instalado e rodando localmente ou configurado em uma URL remota

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/forum-backend.git

2. Instale as dependências:

cd forum-backend
npm install

3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e defina as variáveis necessárias, como a URL do MongoDB.

Exemplo de .env:

PORT=3000
MONGODB_URI=mongodb://localhost/forum-app

4. Inicie o servidor:

npm start

   
