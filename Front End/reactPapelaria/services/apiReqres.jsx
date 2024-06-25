import axios from 'axios'
// instancia do axios com url
const api = axios.create({ baseURL: 'https://reqres.in' })
// funao assincrona que busca a lista de funcionarios 
export async function getFuncionarios() {
    try {
        // bloco try =  fazemos requisicao GET para o endpoint  '/api/users?page=2' 
        const response = await api.get('/api/users?page=1')
        // se bem sucedida
        return response.data
        // return response.data.data
    } catch (error) {
        // se houver erro
        // mensagem no console
        console.error(`Erro ao buscar produtos: ${error.message}`)
    }
}
