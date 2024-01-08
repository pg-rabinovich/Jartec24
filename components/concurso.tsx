import styles from '../styles/inicio.module.css';


const Concurso = () => {
    return (
        <>


            <section id="jartec2024" className={styles.fondo}> {/*corregir margenes */}
                <div className="container ">

                    <div className="row ">
                        <div className="col pb-5 text-center">


                            <video  className="img-fluid " width="1080" autoPlay loop>
                                <source src="/images/concurso.video.mp4" type="video/mp4" />
                               
                            </video>

                        </div>
                    </div>
                </div>
            </section>




        </>
    );
};
export default Concurso;


/* acomodar los margenes */

/* <div id="jartec2024" className={`d-flex justify-content-center align-items-center vh-100 ${styles.fondo}`} */

/* className="img-fluid" */