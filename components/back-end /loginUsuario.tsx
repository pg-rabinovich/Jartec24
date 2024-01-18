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

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <Link href="/">
                            <button type="button" className="navbar-brand btn ">
                                <span className={`bi bi-brightness-high-fill ${styles.titulo}`}> JARTEC</span>
                            </button>
                        </Link>
                        <Link href="/registro">
                            <li  className="navbar-brand btn text-warning
                            bi bi-box-arrow-in-right fs-4 fw-lighter">  Registrate </li>
                            
                        </Link>

                    </div>
                </nav>

                {/*   <Link href="/registro">
                    <div className='navbar-brand  text-end text-light '>
                          <h2 className=' fw-lighter text-decoration-underline'> Registrate </h2>
                    </div>
                </Link> */}

                <div className='text-nowrap  text-center text-warning  '>
                    <h2 className=' fw-lighter  '>Iniciar Sesion</h2>
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
                                    <label className={`text-nowrap ${styles.formText}`}>Usuario </label>
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



            </div>


        </>



    );
};

export default LoginUsuario;
