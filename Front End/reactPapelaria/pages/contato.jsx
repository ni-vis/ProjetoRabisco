import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import CardListFunc from '@/components/CardListFunc'
import { useState, useEffect } from 'react'
import { getFuncionarios } from '@/services/apiReqres'

export default function Contato() {
  // armazenar a lista de funcionarios 
    const [funcionarios, setFuncionarios] = useState([])

    // funcao assincrona que busca os contatos da api
    async function buscaFuncionarios() {
        try {
          // chama a funcao 'getcontatos' para obter os dados dos produtos
            const data = await getFuncionarios()
            // exibimos os dados no console para verificar se foram recebidos 
            console.log(data)
            // atualiza o estado ''funcionarios' com dados recebidos
            // data.data = pois tem dois tipos de dados, poderia ter tratado tambem em apiReqres (linha 11)
            setFuncionarios(data.data)
        } catch (error) {
          // caso houver erro
            console.error('Erro ao buscar funcionários: ', error)
        }
    }
// useEffect usado para realizar efeitos colaterais, como chamadas de api
    useEffect(() => {
      // chama a funcao buscaFuncionarios
        buscaFuncionarios()
        // empo de intervalo a cada  segundos para buscaProdutos
        const atualiza = setInterval(buscaFuncionarios, 5000)
        return () => clearInterval(atualiza)
    }, []) //array vazio = efeito só é executado uma vez apos a montagem  

    // renderiza os componentes na tela 
    return (
        <>
            <Headerb />
            <Titulo texto="Entre em contato conosco!" />
            {funcionarios.length > 0 ? (
        <CardListFunc funcionarios={funcionarios} />
      ) : (
        <p>Carregando produtos...</p>
      )}
            
        </>
    )
}
