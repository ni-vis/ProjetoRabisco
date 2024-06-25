import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Headerb.module.css';

export default function Headerb(props) {
    const router = useRouter();
    
    // aqui, ele verifica se a barra de pesquisa pode ou deve ser exibida na pagina (com base na rota atual)
    const showSearchBar = router.pathname === '/produtos'; // rota desejada

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <img src="/logo/logo2.png" className={styles.img}/>
                <Link href="/" className="navbar-brand ms-3">Rabisco</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/produtos" className="nav-link active" aria-current="page">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contato" className="nav-link active" aria-current="page">Contato</Link>
                        </li>
                        <li>
                            {props.title}
                        </li>
                    </ul>
                    
                    {showSearchBar && (
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-white" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}
