![api-rest](https://user-images.githubusercontent.com/96646020/222029250-7e003bc3-d551-40aa-b934-f0d85af9dcb1.png)

# Sumário
- [Redes](https://github.com/Curtixx/zeta-processo-seletivo#redes)
- [Deploy](https://github.com/Curtixx/zeta-processo-seletivo#deploy-da-api)
- [Insomnia](https://github.com/Curtixx/zeta-processo-seletivo#usando-o-insomnia)
- [Rotas](https://github.com/Curtixx/zeta-processo-seletivo#rotas-para-uso-da-api)
- [Banco de dados](https://github.com/Curtixx/zeta-processo-seletivo#banco-de-dados)
# Processo seletivo ZETA
<p>
<img src="http://img.shields.io/static/v1?label=STATUS&message=PRONTA%20PRA%20USO&color=GREEN&style=for-the-badge"/>
</p>
:unlock: Link para acessar a api: http://34.151.211.232

## :open_file_folder: Tecnologias utilizadas:
- Node.js
- TypeScript
- TypeORM
- JWT
- Docker

## :hammer: Downloads nescessários para usar a API pública
- <a href="https://github.com/Curtixx/zeta-processo-seletivo">Repisitório do projeto</a>
- <a href="https://insomnia.rest/download">Insomnia</a>

## Usando o insomnia

- Abra o insomnia
  - [x] Clique em "create" no canto superior direito
  - [x] Clique na opção "Design Document"
  - [x] Coloque o nome de sua preferência e confirma
  - [x] Clique na opção "Debug" no meio superior da tela
  - [x] Clique na "setinha" do lado do nome e do lado de "Design"
  - [x] Vá ate "import/export"
  - [x] Selecione "import data" e clique em "from file"
  - [x] Escolha o arquivo .har que está na pasta do repositório
  - [x] Clique em "Ok", pronto você importou tudo que e preciso para fazer as requisições para a API

## Rotas para uso da API

- Na API desenvolvida foram utilizados os seguintes métodos HTTP:
  - `GET`
    - http://34.151.211.232/ : exibe todos os usuários cadastrados
    - http://34.151.211.232/show/< id > : exibe o usuário filtrado pelo ID
  - `POST`
    - http://34.151.211.232/create : realiza o cadastro do usuário (obrigátorio o envio de um JSON no body com as informações: `nome`, `sobrenome`, `idade`, `email` e `senha`
    - http://34.151.211.232/token : faz a criação do token para utilizar nas rotas de `update` e `delete` (obrigátorio o envio de um JSON no body com o `email` e a `senha` do usuário)
  - `PUT`
    - http://34.151.211.232/< id > : realiza a alteração o usuário (obrigátorio o envio de um JSON no body com os campo que deseja alterar e o bearer token de autenticação no header)
  - `DELETE`
    - http://34.151.211.232/< id > : faz a exclusão (obrigátorio o envio do bearer token de autenticação no header)
- [Exemplo de criação de usuário](https://github.com/Curtixx/zeta-processo-seletivo#como-criar-um-usuário-na-api)
- Como colocar o Bearer Token:
  - Vá na aba "Headers" nas rotas put e delete vai possuir um campo chamado "Authorization" e do lado está o seu token, quando criar um novo token você vai apagar tudo que vem depois da palavra "Bearer" e colocar o token
## :white_check_mark: Pronto, a API está pronta para ser usada 


## :house: Como rodar a API localmente
- Instale todas essas dependencias:
  - <a href="https://insomnia.rest/download">Insomnia</a>
  - <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  - <a href="https://dev.mysql.com/downloads/workbench/">Mysql Workbench</a>
  - <a href="https://www.apachefriends.org/download.html">XAMPP</a>
  - <a href="https://git-scm.com/download/win">Git</a>
  - <a href="https://nodejs.org/en/">Node.js</a>
- Faça download do repositório (<a href="https://github.com/Curtixx/zeta-processo-seletivo">Download</a>)
- Crie uma nova conexão no MysqlWorkbech com a configuração padrão
- Rode a seguinte linha de codígo na query do mysql: `create database zeta; use zeta;`
- No arquivo "data-source.ts" que está dentro da pasta "src" retire a senha que está dentro e deixe vazio
- Abra algum terminal na pasta do repositório e rode os comandos:
  - `npm i` para baixar as dependências
  - `npm run migration:run` para crias as tabelas no banco
  - `npm run dev` executar o projeto
  - Agora e so seguir o passo a passo do [Insomnia](https://github.com/Curtixx/zeta-processo-seletivo#usando-o-insomnia)
## :white_check_mark: Pronto, a API está pronta para ser usada localmente

## :warning: Observações
- Para rodar localmente
  - Por padrão ele vem configurado com a url da API que já foi feito o deploy
  - Para mudar troque tudo que está com "http://34.151.211.232" para "http://localhost:3000" no insomnia
  - Caso ocorra algum erro, verifique se o XAMPP está ligado e se o migration foi rodada corretamente
  - `O programa so irá executar quando o banco estiver pronto, se o banco estiver mal configurado ou sem alguma credencial ele não
  executará a aplicação`
- Nas rotas show, update e delete onde fica a url tem um "ID" apague e coloque o ID referente ao usuário 

## Banco de dados
- Para a escolha do banco de dados foi escolhido o MySQL, pela facilidade para utiliza-lo e por ele ser mais rapido que os demais SGBD'S
- No servidor linux (onde foi usado para fazer o deploy da API) foi criado um container mariaDB com o Docker com a porta direcionada para a "3306"
- No MysqlWorkbench a conexão foi mais simples ainda, apenas tive que colocar o IP do servidor no HostName, deixar a porta como "3306" e o UserName para "root"
- Com a conexão estabelecida foi criado o database "zeta"
- Pronto, o banco de dados já estava criado
- A tabela utilizada e a "users" que tem os seguintes campos e tipos:
  - `id:` int, autoincrement
  - `nome:` varchar, not null
  - `sobrenome:` varchar, not null
  - `idade:` int, not null
  - `email:` varchar, not null
  - `senha:` varchar, not null


## Como criar um usuário na API

- Vá na rota `create` e use a seguinte sintaxe no JSON:
  - {
   - "nome": "<nome-do-usuário>",
   - "sobrenome": "<sobrenome-do-usuário>",
   - "idade": <idade-do-usuário>,
   - "email": "<email-do-usuário>",
   - "senha": "<senha-do-usuário>",
  - }

## Deploy da API
Para o deploy da API foi usado
  - Um servidor linux criado no - <a href="https://cloud.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-BKWS-all-all-trial-e-dr-1605194-LUAC0010101&utm_content=text-ad-none-any-DEV_c-CRE_512285710734-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP_General-KWID_43700062788251524-kwd-301173107504&utm_term=KW_google%20cloud%20platform-ST_Google%20Cloud%20Platform&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8lpKfKSJ0TI3EO_myQIjJpj9zWIVfRijP8b7VkrQxQOVpqtKY6Vh3EaAj8hEALw_wcB&gclsrc=aw.ds&hl=pt-br">Google Cloud Plataform</a>
  - Docker para criação do container do banco de dados mariadb
  - Deixar o IP do servidor fixo
  - Criar um regra no firewall para utilização da porta "3306" pois por padrão vem bloqueada
  
## :relaxed: Agradecimentos
- Foi bem legal essa experiência de estudar uma linguagem e ORM nunca utilizada antes, agregou muito para meu conhecimento, no fim o esforço valeu a pena.
- Obrigado pela a oportunidade Zeta Tecnologia e Inovação.

## Redes
- <a href="https://www.linkedin.com/in/henrique-curtis-26325822a/">Linkedin</a>
- <a href="https://github.com/Curtixx">GitHub</a>
