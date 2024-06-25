import Link from "next/link"
export default function CardProdutos(props) {
    return (
        // Link para a página do produto com base no ID do produto
        <Link href={`/produtos/${props.id}`}>
    
        <div className="card m-5">
            <img src={`produtos/${props.nome}.png`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.descricao}</p>
                    <a href="#" className="btn btn-primary">R$ {Number(props.preco).toFixed(2)}</a>
                    {/* para resolver problemas do toFixed: colocar o Number ou: const preco = +props.preco */}
                    {/* <a href="#" className="btn btn-primary">R$ {(preco).toFixed(2)}</a> */}
                </div>
                <div className="card-footer">
                    <h5 className="card-text text-success text-center">
                        {props.quantidade} unidade (s) em estoque
                    </h5>
                </div>
        </div>
        </Link>
    )
}
CardProdutos.defaultProps = {
    nome: 'Produto',
    descricao: 'Descrição do produto',
    preco: '0.00',
    quantidade: '0'
}











