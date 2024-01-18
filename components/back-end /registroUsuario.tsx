import styles from '../../styles/inicio.module.css';
import Link from "next/link";


const RegistroUsuario = () => {

    return (
        <>
            <div className="bg-image"
                style={{
                    backgroundImage: 'url("/images/fondoLogin.jpg")',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat',

                }}>

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <Link href="/">
                            <button type="button" className="navbar-brand btn ">
                                <span className={`bi bi-brightness-high-fill ${styles.titulo}`}> JARTEC</span>
                            </button>
                        </Link>

                    </div>
                </nav>

                <div className='text-nowrap  text-center text-warning  '>
                    <h2 className=' fw-lighter  '>Registrate</h2>
                </div>


                <div className='container'>
                    <div className="row p-3 d-flex justify-content-center img-fluid">
                        <div className="col-sm-6  col-md-8 col-lg-6  p-5 text-success shadow-lg bg-image"

                            style={{
                                backgroundImage: 'url("/images/poster1.jpg")',
                                backgroundSize: 'cover',
                            }}>


                            <form>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className={`text-nowrap ${styles.formText}`}>Elige un nombre de usuario </label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className={`text-nowrap ${styles.formText}`}>Elige una contraseña</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className={`text-nowrap ${styles.formText}`}>Repite la contraseña</label>
                                </div>
                                <br />
                                <Link href="/login">
                                    <button className={` text-nowrap w-100 btn btn-sm btn-success ${styles.formText2}`} type="submit">Crea tu cuenta Jartec</button>
                                </Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};
export default RegistroUsuario;