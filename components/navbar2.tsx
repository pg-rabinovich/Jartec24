import Link from "next/link";
import styles from '../styles/inicio.module.css';


const NavBar2 = ({ cantidadEnCarrito, onToggleCarrito }) => {
    return (
        <>
            <nav className={` mx-auto navbar navbar-expand-lg navbar-dark  ${styles.fondo}`}>
                <div className="container-fluid">

                    {/* 
                     <Link href="/">
                        <button type="button" className={`navbar-brand btn  ${styles.titulo}`}>
                            <span className="bi bi-stars"> JARTEC</span>
                        </button>
                    </Link>  */}

                    <Link href="/">
                        <button type="button" className={`navbar-brand btn  ${styles.titulo}`}>
                            <span className="bi bi-stars"> DISEÑOS DESTACADOS</span>
                        </button>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className={`nav-link  ${styles.links}`} aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link  ${styles.links}`} aria-current="page" href="#regalos">
                                    Regalos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.links}`} href="#" onClick={onToggleCarrito}>
                                    <span className="bi bi-cart"> Carrito </span> ({cantidadEnCarrito})
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className={`nav-link ${styles.links}`} href="#">Nosotros</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar2;
