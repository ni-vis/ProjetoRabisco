export default function CardFuncionarios(props) {
    const { avatar, email, firstName, lastName } = props
    return (
        <div className="card m-5 ">
            <img src={avatar} alt={`${firstName} ${lastName}`} />
            <div className="card-body">
                <h5 className="card-title text-center">{firstName} {lastName}</h5>
            </div>
            <div className="card-footer">
                    <h5 className="card-text text-success text-center">
                    <p className="card-text">{email}</p>
                    </h5>
                </div>
        </div>
    )
}
