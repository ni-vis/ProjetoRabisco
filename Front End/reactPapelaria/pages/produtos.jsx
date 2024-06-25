import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '@/components/CardList';
import Headerb from '@/components/Headerb'
import Titulo from '@/components/Titulo'

function Produtos() {
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/produto')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao carregar produtos:', error))
  }, [])
  return (
    <div>
        <Headerb />
        <Titulo texto="Conheça nossos produtos!" />
      {produtos.length > 0 ? (
        <CardList produtos={produtos}/>
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  ) 
}
export default Produtos