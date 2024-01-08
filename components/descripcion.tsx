import styles from '../styles/inicio.module.css';



const Texto = () => {

    return (
        <>

            <div className={` mx-auto row featurette p-5 ${styles.fondo}`}>
                <div className="col-md-7">
                    <h1 className="fw-light lh-base display-3 mt-5 text-warning fw-lighter">
                        Cada kit presenta cinco hermosos diseños para colorear.</h1>


                    <p className= "fs-1 lh-base mt-5 fw-lighter text-success" > ¡Todos están hechos con suave terciopelo!</p>

                    {/*    <p className="lead">Some great placeholder content for
                  the first featurette here. Imagine some exciting prose here.</p> */}

                </div>
                <div className="col-md-5 placeholder-wave ">
                    <img src="/images/descripcion.jpg" alt="imagen tucan" />
                </div>
            </div>

            



        </>
    );

};

export default Texto;