import styles from '../../styles/inicio.module.css';
import Link from "next/link";


const ArchivoAdjunto = () => {
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


                <br/><br/>




                <div className="row d-flex justify-content-center ">
                    <div className='col-10 p-5 border shadow-lg border-4 border-warning-subtle bg-warning bg-opacity-25'>

                        <div className="row featurette">
                            <div className="col-md-6">

                                <h4 className='text-warning fw-lighter'> Participá del concurso y formá parte de Jartec24.</h4><br/>

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className={`text-nowrap ${styles.formText3}`}>Nombre y Apellido </label>
                                </div><br/>

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className={`text-nowrap ${styles.formText3}`}>Email </label>
                                </div><br/>

                                <div className="input-group">
                                    <input type="file" className={`form-control ${styles.formText3}`} id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    <button className={`btn btn-outline-light ${styles.formText3}`} type="button" id="inputGroupFileAddon04">Enviar</button>
                                </div> <br/>
                            </div>

                            <div className="col-md-6">
                                <video className="img-fluid " width="800" autoPlay loop>
                                    <source src="/images/uploadVideo2.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>


                    </div>
                </div>








            </div>

        </>
    )
}
export default ArchivoAdjunto;