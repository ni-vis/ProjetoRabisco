import CardFuncionarios from "./CardFuncionarios"

export default function CardListFunc(props) {
    const { funcionarios } = props
    return (
        <div className="container">
            <div className="row">
                {/* estrutura de repetição map */}
                {funcionarios.map((funcionario, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <CardFuncionarios
                            avatar={funcionario.avatar}
                            email={funcionario.email}
                            firstName={funcionario.first_name}
                            lastName={funcionario.last_name}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
