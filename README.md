![api-rest](https://user-images.githubusercontent.com/96646020/222029250-7e003bc3-d551-40aa-b934-f0d85af9dcb1.png)

# Sumário
- [Redes](https://github.com/Curtixx/zeta-processo-seletivo#redes)

# Processo seletivo ZETA
:unlock: Link para acessar a api: http://34.151.211.232
## :open_file_folder: Tecnologias utilizadas:
- Node.js
- TypeScript
- TypeORM

## :hammer: Downloads nescessários
- <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
- <a href="https://insomnia.rest/download">Insomnia</a>
- <a href="https://dev.mysql.com/downloads/workbench/">Mysql Workbench</a>
- <a href="https://www.apachefriends.org/download.html">XAMPP</a>
- <a href="https://git-scm.com/download/win">Git</a>
- <a href="https://nodejs.org/en/">Node.js</a>


## :ledger: Usando o insomnia

- Abra o insomnia
- Clique em create no canto superior direito
- Clique na opção "Design Document"
- Coloque o nome de sua preferência
- Clique na opção "Debug" no canto superior da tela
- Clique na setinha do lado do nome e do lado de "Design"
- Vá ate "import/export"
- Selecione "import" data e selecione "from file"
- Escolha o arquivo .har que está na pasta do repositório
- Clique em "Ok" e pronto você importou tudo que e preciso para fazer as requisições para a API

##

## :white_check_mark: Pronto, a API está pronta para ser usada 


## :house: Como rodar a API localmente

- Faça download do repositório (<a href="https://github.com/Curtixx/zeta-processo-seletivo">Download</a>)
- Abra algum terminal na pasta do repositório e rode os comandos:
  - Crie uma nova conexão no MysqlWorkbech com a configuração padrão
  - No arquivo "data-source.ts" que está dentro da pasta "src" retire a senha que está dentro e deixe vazio
  - Rode a seguinte linha de codígo na query do mysql: `create database zeta; use zeta;`
  - `npm i` para baixar as dependências
  - `npm run migration:run` para crias as tabelas no banco
  - `npm run dev` executar o projeto
  

## :warning: Observações
- Para rodar localmente
  - Por padrão ele vem configurado com a url da API que já foi feito o deploy
  - Para mudar troque tudo que está com "http://34.151.211.232" para "http://localhost:3000"
  - Caso ocorra algum erro, verifique se o XAMPP está ligado e se o migration foi rodada corretamente
  - O programa so irá executar quando o banco estiver pronto, se o banco estiver mal configurado ou sem alguma credencial ele 
  executará
- Nas rotas de show, update e delete onde fica a url tem um "ID" apague e coloque o ID do usuário 

##

## :white_check_mark: Pronto, a API está pronta para ser usada localmente

## :computer: Deploy da API
Para o deploy da API foi usado
  - Um servidor linux criado no - <a href="https://cloud.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-BKWS-all-all-trial-e-dr-1605194-LUAC0010101&utm_content=text-ad-none-any-DEV_c-CRE_512285710734-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP_General-KWID_43700062788251524-kwd-301173107504&utm_term=KW_google%20cloud%20platform-ST_Google%20Cloud%20Platform&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8lpKfKSJ0TI3EO_myQIjJpj9zWIVfRijP8b7VkrQxQOVpqtKY6Vh3EaAj8hEALw_wcB&gclsrc=aw.ds&hl=pt-br">Google Cloud Plataform</a>
  - Docker para criação do container do banco de dados mariadb
  - Deixar o IP do servidor fixo
  
## :relaxed: Agradecimentos
- Foi bem legal essa experiência de estudar uma linguagem e ORM que eu nunca utilizei, agregou muito para meu conhecimento, no fim o esforço valeu a pena.
- Obrigado pela a oportunidade Zeta Tecnologia e Inovação.

## Redes :iphone:
- <a href="https://www.linkedin.com/in/henrique-curtis-26325822a/">Linkedin</a>
- <a href="https://github.com/Curtixx">GitHub</a>
