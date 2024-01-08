import Link from "next/link";
import styles from '../styles/inicio.module.css';


const NavBar = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark  ${styles.fondo}`}>
                <div className="container-fluid">

                    <Link href="/">
                        <button type="button" className={`navbar-brand btn ${styles.titulo}`}>
                            <span className="bi bi-brightness-high-fill"> JUEGOS, ARTE & TECNOLOGÍA</span>
                        </button>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link  ${styles.links}`} aria-current="page" href="/index2">Diseños </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link  ${styles.links}`} aria-current="page" href="#jartec2024">Jartec 24 </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.links}`} href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.links}`} href="/login">
                                    <span className="bi bi-box-arrow-in-right"> Login
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;