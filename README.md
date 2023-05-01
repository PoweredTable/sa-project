# Projeto SA

# Sobre o E-Commerce

# Instalação

Após clonar o repositório em sua máquina e possuir o [Node.Js](https://nodejs.org/en), acesse a pasta `./server` e/ou `./client` e instale as dependências.
```
cd server
npm ci 
```
# Utilização
A aplicação completa (backend e frontend) requer que tanto o cliente quanto o servidor sejam iniciados.
## Backend
Para iniciar o backend do E-Commerce, é necessário rodar o arquivo `server.js` localizado na pasta `server`.

Para iniciar o backend normalmente, utilize o comando abaixo.
```bash
npm start
```
Caso queira iniciar em modo desenvolvimento, é possível utilizar o [nodemon](https://www.npmjs.com/package/nodemon) para monitoramento em tempo real.
```bash
npm run dev
```

### Variáveis de ambiente
Defina as variáveis de ambiente necessárias para iniciar o backend, você pode as definir em um 
**arquivo  .env** (você precisará criar o arquivo) ou editar as variáves de ambiente do sistema.
* `DATABASE_URL`: URL do banco de dados do Postgress

# Links
* [Kanban Trello](https://trello.com/b/FfGwB1HH/lew-livros-e-commerce-sa):  Quadros de atividades do projeto.
* [Protótipo Figma](https://www.figma.com/file/mT4h9dmBV6cnU3IX6Evkmq/projeto--telas-para-o-trabalho?node-id=0-1): Protótipos de tela do E-Commerce.
* [Documentação](https://docs.google.com/document/d/e/2PACX-1vSm8zO3n2SEKnkDS2OwUypv5bYxKDdyVz51Th3fEwcOIT8dNDSOMrMyCJlAd4Iq-EKwTF37oYeemdd0/pub): Requisitos funcionais e não funcionais do projeto.