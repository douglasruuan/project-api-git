import api from './api'; //Importando api.

class App {
    constructor() {
        this.repositories = []; // Um Array que guarda toda lista do repositorio que eu busca no GIT.

        this.formEl = document.getElementById('repo-form'); //Chamando os IDS de dentro do index.html.
        this.inputEl = document.querySelector('input[name=repository]'); //referenciado o input com nome repository.
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers(); //Ela vai registrar os Eventos, quando o usuario submitar o form.
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) { //Setando um loading para carregar os repositorios.
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove(); //retirando o loading.
        }
    }

    async addRepository(event) { //tornando async.
        //recebe o "event", ele tem que adicionar um novo repositorio dentro do array.
        event.preventDefault();

        const repoInput = this.inputEl.value; //pegando o valor desse input.

        if (repoInput.length === 0) //E ve se tem algo nele escrito se tiver escrito algo, ele continua a execução.
            return; //Se não tiver nada escrito dentro ele para a execução.

        this.setLoading();

        try {
            const response = await api.get(`/users/${repoInput}`);
            // requisão a API.

            //Apos concluido, definir um array.
            //E Destruturação do Array.
            const {
                name,
                location,
                html_url,
                avatar_url,
            } = response.data;


            this.repositories.push({
                name,
                location,
                avatar_url,
                html_url,
                //Deixar apenas o nome das variaveis, sem precisar por "name:name" pois é o mesmo nome.
            });

            this.inputEl.value = ''; //deixando input em branco.
            this.render();
        } catch (err) {
            alert('O Repositório não existe!');
        }
        this.setLoading(false);
    }
    render() {
        this.listEl.innerHTML = '';


        //Porque usaremos forEach e não MAP.
        //Map retorna o resultado que a gente tem dentro dele, ele serve para alterar o array de alguma forma.
        //ForEach ele só percorre não faz alterações.
        this.repositories.forEach(repo => {
            //A gente vai criar os elementos em tela
            //E renderizar em tela.
            let imgEl = document.createElement('img'); //Elemento de imagem
            imgEl.setAttribute('src', repo.avatar_url); //pegando a foto do Git

            let titleEl = document.createElement('strong'); //Elemento de titulo.
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p'); //Elemento de Descrição
            descriptionEl.appendChild(document.createTextNode(repo.location));

            let linkEl = document.createElement('a'); //Elemento de Link
            linkEl.setAttribute('target', '_blank'); //Setando atributo com formação de click.
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar')); //criando o acessar.

            let listItemEl = document.createElement('li'); //Criou uma lista de elementos.
            listItemEl.appendChild(imgEl); //adicionar a imagem
            listItemEl.appendChild(titleEl); //titulo
            listItemEl.appendChild(descriptionEl); //descrição
            listItemEl.appendChild(linkEl); //link

            this.listEl.appendChild(listItemEl);
            //Está dizendo para pegar os "itens" adicionados em listEl e modficalos pelos novos itens  do listitemEl

        });
    }
}

new App(); //Instanciando a classe, pode ser assim sem "var/let" pois não vamos reutilizar.