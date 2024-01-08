import React, { useRef } from 'react';
import styles from '../styles/inicio.module.css';



const Contacto = () => {
    const formRef = useRef(null);

    const handleEnviarClick = () => {
        // Lógica para manejar el clic en el botón "Enviar"

        // Reiniciar el formulario
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <>
            <div id="contacto" className="mx-auto row py-5 px-5  p-md-4 d-flex justify-content-center bg-opacity-10 bg-image"
                style={{
                    backgroundImage: 'url("/images/poster1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <br />

                <div className={`col-md-6 border shadow-lg text-center ${styles.fondo}`}>
                    <h5 className={`fw-normal ${styles.titulo2}`}> CONTACTANOS </h5>
                    <br/>

                    <form ref={formRef}>
                        <div className="mb-3">
                            <label className={`form-label ${styles.links2}`}>Nombre y Apellido</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>

                        <div className="mb-3">
                            <label className={`form-label ${styles.links2}`}>Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>

                        <div className="mb-3">
                            <label className={`form-label ${styles.links2}`}>Mensaje</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>

                        <div className={styles.links2}>
                            <button type="button" className="btn btn-outline-success btn-sm" onClick={handleEnviarClick}>Enviar</button>
                        </div> <br/>
                    </form>
                </div>
            </div>

           
        </>
    );
};

export default Contacto;
