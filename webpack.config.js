module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], //Qual o arquivo principal do Projeto.
    output: { //Pra qual lugar/arquivo que eu devo enviar o código convertido
        path: __dirname + '/public', //Variavel global que se refere ao diretorio onde está o diretorio webpack.config.js
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public' //E o caminho onde ele deve abrir o servidor da aplicação.
    },
    module: {
        rules: [ //Rules: ele diz como o webpack deve se comportar quando o usuario querer importar novos arquivos.js
            {
                test: /\.js$/, //Expressão regular pra ver se o arquivo termina com .js e $ significa o final e as 2 Barras são expressão regular.
                exclude: /node_modules/, // Que ele exclua a pasta node_modules porque eu nao quero que o babel executa nem um arquivo de dentro da pasta.
                // Que ele execute só os arquivos de dentro da pasta principal.
                use: {
                    loader: 'babel-loader', //Instalar o babel-loader dentro do terminal.
                    //yarn add babel-loader@8.0.0-beta.0 -D
                }
            }
        ],
    },
};