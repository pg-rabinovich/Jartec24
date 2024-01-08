import styles from '../../styles/inicio.module.css';
import Link from "next/link";


const LoginUsuario = () => {

    return (
        <>

            <div className="bg-image"
                style={{
                    backgroundImage: 'url("/images/fondoLogin.jpg")',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat',

                }}>

                <Link href="/">
                    <button type="button" className={`navbar-brand btn ${styles.titulo}`}>
                        <span className="bi bi-brightness-high-fill"> JARTEC</span>
                    </button>
                </Link>

                <div className='text-nowrap  text-center text-warning opacity-75 '>
                    <h4 className=' fw-lighter '>Iniciar Sesion</h4>
                </div>

                <div className='container'>
                    <div className="row p-5 d-flex justify-content-center img-fluid">
                        <div className="col-sm-6  col-md-8 col-lg-6  p-5 text-success shadow-lg bg-image"

                            style={{
                                backgroundImage: 'url("/images/poster1.jpg")',
                                backgroundSize: 'cover',
                            }}>



                            <form>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className={`text-nowrap ${styles.formText}`}>Email </label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className={`text-nowrap ${styles.formText}`}>Contraseña</label>
                                </div>

                                {/*  <div className="checkbox mb-3" >
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Recordarme
                                        </label>
                                </div> */}

                                <br />

                                <button className={` text-nowrap w-100 btn btn-sm btn-success ${styles.formText2}`} type="submit">Ingresar</button>
                            </form>


                        </div>
                    </div>
                </div>

                <Link href="/registro">
                <div className='text-center text-warning opacity-75'>
                    <h4 className=' fw-lighter'>o</h4>
                     <h2 className=' fw-lighter text-decoration-underline'> Registrate </h2>
                </div>
                </Link>

            </div>


        </>



    );
};

export default LoginUsuario;
