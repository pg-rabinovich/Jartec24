
import styles from '../styles/inicio.module.css';
import Link from "next/link";

const Footer1 = () => {
    return (
        <>
            <div className={`row p-5 text-light mx-auto  ${styles.fondo}`}>
                <div className="col border">
                    <div className="row py-4">
                        <div className="col-md-4">
                            <p>
                                Dirección: <br />

                                <i className="bi bi-geo-alt-fill">  Buenos Aires, Argentina.</i>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>Teléfono:<br />
                                <i className="bi bi-telephone-fill">  +54 11 6573 7685</i>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>Email: <br />
                                <i className="bi bi-envelope-fill">  jartec@gmail.com</i>
                            </p>

                        </div>

                    </div>

                    <div className="row py-4">
                        <div className="col">
                            <p>All right reserved. <br />
                                <i className="bi bi-person-workspace">  Portfolio by pg_rabinovich </i>
                            </p>
                        </div>


                        <div className="col-md-4">
                        <p> Ilustraciones y Productos: <br />
                                <i className="bi bi-r-circle-fill"> DJECO</i>
                    </p>
                        </div>

                        <div className="col text-end">

                            <Link href="/">
                                <button type="button" className={`navbar-brand btn  ${styles.titulo}`}>
                                    <span className="bi bi-stars"> JARTEC</span>
                                </button>
                            </Link>
                        </div>
                        {/* <div className="row ">
                    <div className="col text-end">

                    <Link href="/">
                                <button type="button" className={`navbar-brand btn  ${styles.titulo}`}>
                                    <span className="bi bi-stars"> JARTEC</span>
                                </button>
                            </Link>
                    </div> */}
                    </div>
                </div>
            </div>

        </>

    );
};

export default Footer1;