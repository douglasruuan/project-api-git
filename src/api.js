import axios from 'axios'; //Importando Axios

const api = axios.create({ 
//Ele vai criar configuração do axios chamada baseURL pra api, apartir que criamos uma baseURL, todas requisições vão partir desse endereço.
    baseURL: 'https://api.github.com',
});

export default api;  //exportando para outros .js