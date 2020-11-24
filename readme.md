# Projeto EcmaScript 6.
## Projeto Consumindo API do GIT.
**Foi utilizado as seguintes tecnlogias no projeto.**
- [x] **Node.JS.**
- [x] **JavaScript.**
- [x] **Axios.**
- [x] **Babel.**
- [x] **Yarn.**  

### Resumo de tudo que foi utilizado no Curso de EcmaScript 6.
**Utilizei recursos do ES6,ES7 e ES8.**
 - Recursos de Classes.
 - ArrowFunctions.
 - Parametros padrão de uma função.
 - Try/Catch
 - Async/Await.
 - Destruturação de Objetos.
 - Short Syntex em Objetos.
 - Template Literals.
 - Consumindo a API do GITHUB.
 - Import/Export.
 - Alteração de Scripts e Dependencies dentro do package.json.
 - Dependência de Desenvolvimento e Produção.
 - Utilizado axios para utilizar a API do GIT.
 - Utilizado bundle.js para reeleitura dos códigos para ser interpretado
   pelos Browsers.
 - Utilizado webpack.config.js para caminhos de diretórios e alterações.
 - Utilizado diversas bibliotecas como: yarn, babel, node, webpack,
   webpeck server.

   # Yarn e Babel.
Instalar o Node no site [https://nodejs.org/](https://nodejs.org/) após instalar consultar no terminal.
					 

    node -v

Instalar o Yarn no site [https://yarnpkg.com](https://yarnpkg.com) após instalar consultar no terminal

     yarn -v.

## Oque é o Yarn?

Yarn e um gerenciador de pacotes do JavaScript ele e utilizado para utilizar ferramentas de outras pessoas e outros projetos no nosso projeto.

Após a instalação do Yarn, criar a pasta do projeto e fazer a instalação do yarn dentro do prompt na raiz do projeto. 

    yarn init

Após a instalação concluida o yarn criara um arquivo chamado **package.json** dentro do projeto.

Oque é o **package.json**: Ele vai armazenar as informações de dependências da nossa aplicação. Como por exemplo o **babel** é uma dependência da nossa aplicação.

Não precisamos alterar nada dentro do **package.json** e tudo feito pelo terminal.

No index.html, quando chamamos o script. Iremos chamar o **bundle.js** que o que o navegador entende, como se fosse o "main" do javascript.

# Instalando Dependências.

    yarn add @babel/cli

 Essa dependência vai dar possibilidade da gente trabalhar com a interface de linha de comando do BABEL, utilizando o Prompt de Comando/CMD.

    yarn add @babel/preset-env

Essa dependência cria um arquivo chamado **yarn.lock** que nunca precisaremos utilizar ou alterar/mexer nele.
Também criou uma pasta chamada “node_modules”, outra pasta que não vai precisar ser alterada. Esta pasta vai armazenar todas as dependências do projeto.

    yarn add @babel/core

 Sem explicação para instalação desta dependência, apenas uma necessidade de ter ela para executar o script do **package.json**.

    yarn add @babel/plugin-proposal-object-rest-spread

Instalando dependência de Rest e Spread.

    yarn add webpack

Atualização do webpack se tiver erros de módulos.



# Configurando o .babelrc

Criamos um arquivo chamado .**babelrc** dentro da raiz do nosso projeto.
**.babelrc** e o arquivo que vai transformar nossas features em uma forma que todos os navegadores leiam e funcionem em todos eles.

```javascript
{
	"presets": ["@babel/preset-env"]
	/**
	*Preset_env ele vai entender qual o ambiente que estamos trabalhando nesse projeto que o browser.
	*Porque, o babel pode ser utilizado também pra node, react native.
	*Preset_env vai entender que estamos trabalhando no navegador e ele vai converter as features do *ES6 ES7 ES8, que os navegadores não entendem ainda.
	*/
}
```

# Scripts no PACKAGE.JSON.

Dentro do **package.json** iremos criar uma nova propriedade chamada scripts.
Esses scripts são uma forma de executar comandos dentro do terminal.

```javascript
	"scripts": {
	"dev": "babel ./main.js -o ./bundle.js -w"
		/**
		*Esse script vai executar, o babel pegando o arquivo main.js e enviando para bundle.js.
		*-w No final do script, ele fica monitorando e atualizando sozinho.
		*Primeiro Script de exemplo, o de baixo e o atual.
		*/
},
{
	"name":  "ES6_Rocketseet",
	"version":  "\t",
	"main":  "index.js",
	"license":  "MIT",
	"devDependencies": {
		/**
		*Essas são dependencias apenas de desenvolvimento, usaremos a Syntax -D.
		*Instalação de novas apis dentro do terminal.
		*Pois no Online o Babel nao precisa fazer nada ele só vaigerar o bundle.js
		*/
		"@babel/cli":  "^7.12.1",
		"@babel/core":  "^7.12.3",
		"@babel/plugin-proposal-object-rest-spread":  "^7.12.1",
		"@babel/preset-env":  "^7.12.1",
		"babel-loader":  "8.0.0-beta.0",
		"webpack":  "^5.4.0",
		"webpack-cli":  "^3.3.12",
		"webpack-dev-server":  "^3.11.0"
},
	"scripts": {
		"dev":  "webpack-dev-server --mode=development",
		/**
		*Script executando webpack em modo de desenvolvimento, monitorando as alterações.
		*/
		"build":  "webpack --mode=production"
		/**
		*Build para rodar o modo de produção criando o bundle dentro da pasta public.
		*/
},
	"dependencies": {
		"axios":  "^0.21.0"
	}
}
```

# Configurando WebPack

### Oque é o WebPack?
Ele e um serviço que vai nos disponibilizar uma forma de trabalhar com vários arquivos .JS ao mesmo tempo.

Instalando o WebPack no terminal dentro da pasta do projeto.

    yarn add webpack webpack-cli -D

Após a instalação do webpack, criar um novo arquivo dentro do projeto, chamado de : **webpack.config.js**
### Configurando o arquivo webpack.config.js

```javascript
module.exports  = {
	entry: ['@babel/polyfill', './src/main.js'],
/**
*Qual o arquivo principal do Projeto.
*/
	output: {
/**
*Pra qual lugar/arquivo que eu devo enviar o código convertido
*/
		path:  __dirname  +  '/public',
/**
*Variavel global que se refere ao diretorio onde está o diretorio webpack.config.js
*/
		filename:  'bundle.js',
	},
	devServer: {
		contentBase:  __dirname  +  '/public',
/**
*E o caminho onde ele deve abrir o servidor da aplicação.
*/
	},

	module: {
		rules: [
/**
*Rules: ele diz como o webpack deve se comportar quando o usuario querer importar novos arquivos.js.
*/
			{
				test:  /\.js$/,
/**
*Expressão regular pra ver se o arquivo termina com .js e $ significa o final e as 2 Barras são expressão regular.
*/
				exclude:  /node_modules/,
/**
*Que ele exclua a pasta node_modules porque eu nao quero que o babel executa nem um arquivo de dentro da pasta,que ele execute só os arquivos de dentro da pasta principal.
*/
			use: {
					loader:  'babel-loader',
/**
*Instalar o babel-loader dentro do terminal.
*/
				}
			}
		],
	},
};
```
Após feita a configuração do **webconfig** instalar dentro da raiz do projeto ao terminal o babel-loader

    yarn add babel-loader@8.0.0-beta.0 -D

# WebPack Server

#### Oque é WebPack Server?
O webpack-dev-server, a cada alteração de arquivo ele atualiza a página automaticamente. Ele roda a aplicação em um pequeno servidor, rodando em localhost.

Instalando WebPack Server no terminal dentro da pasta do projeto.

    yarn add webpack-dev-server -D

Após a instalação inserir uma nova configuração dentro do **webpack.config**.

```javascript
devServer: {
	contentBase: __dirname +  '/public'
	/**
	*E o caminho onde ele deve abrir o servidor da aplicação.
	*/
}

```
Após a instalação configurar o **package.json** na parte de **“scripts”**.
```javascript
"scripts": {
	"dev":  "webpack-dev-server --mode=development",
	"build":  "webpack --mode=production"
}
```
Dev e para rodar o servidor.
Build e para rodar o novo **bundle.js** dentro do diretório da pasta do public.



# Organizando os Arquivos do Projeto.

Crie uma pasta **public** e outra chamada **src** dentro do projeto.
Na pasta **public** ira ter todos os arquivos que a gente não vai utilizar diretamente com webpack.
Na pasta **src** ira ficar todo o código em javascript que o webpack precisa monitorar feitas as mudanças.
Podemos deletar o arquivo /bundle.js pois iremos gerar outro dentro da pasta **public**.
Teremos que alterar o arquivo webpack.config.js pois mudamos alguns arquivos de lugar como o **entry** e o **path**.

![Arquivos do Projeto](https://ibb.co/56yF4QL)

# Async/await.

### Instalando a biblioteca Async/await.

    yarn add @babel/plugin-transform-async-to-generator -D

Dependência para instalar async.

    yarn add @babel/polyfill -D

Dependência para instalar polyfill que é uma biblioteca para adicionar novos conteúdos ao nosso Projeto.
Após a instalação das duas bibliotecas teremos que fazer algumas alterações.	
Teremos que adicionar a primeira biblioteca nos plugins do **.babelrc.**

```javascript
"plugins": [
	"@babel/plugin-proposal-object-rest-spread",
	"@babel/plugin-transform-async-to-generator"
]
```
Após teremos que alterar o **webpack.config.js** transformando **entry** em um array e jogando o polyfill para dentro.
```javascript
entry: ['@babel/polyfill', './src/main.js'],
```

# Trabalhando com Axios.

Utilizando a biblioteca Axios:

A gente vai ter acesso a uma API para ter requisições assíncronas, a protocolos HTTP outras **apis** com servidores **back-end**.
Instalando Axios, como ela não é uma dependência de desenvolvimento não precisamos do **-D** ao final.:

    yarn add axios

Após adicionar a dependência, faremos um exemplo de utilização.

```javascript
import axios from  'axios';
/**
*Importando o axios e declarando o mesmo.
*/

class  Api {
	static  async  getUserInfo(username) {

/**
*Pegando apenas o nome de Usuario assíncrona e estatica.
*/

		try {
			const  response  =  await  axios.get(`https://api.github.com/users/${username}`)

/**
*Criando variavel para acessar a api do git pegando apenas o nome.
*/

			console.log(response);

/**
*Rodando o try se não tiver erro na API.
*/

		} catch (err) {

/**
*Mostrando o erro dentro do log.
*/

			console.warn('ERRO NA API');]

/**
*Mensagem do erro.
*/

		}
	}
}

Api.getUserInfo('douglasruuan')
/**
*Passamos o nome do usuario para buscar dentro do git.
*/
```

### Projeto Criado Junto ao Curso RocketSeat.
[RocketSeat](https://app.rocketseat.com.br/starter/)

### Douglas Coelho.
[GitHub Repositories](https://github.com/douglasruuan?tab=repositories)