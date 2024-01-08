import styles from '../styles/inicio.module.css';
import { Box, Text, Flex, Button } from '@chakra-ui/react';



const Regalos = ({ agregarALCarrito }) => {
    const producto = {
        id: 'regalo1',
        nombre: 'Fibras Mágicas + Kit',
        precio: 500,
    };

    return (
        <>
            <div id="regalos" className={`mx-auto row featurette p-4  ${styles.fondo2}`}>
                <div className={`mx-auto row featurette p-5  ${styles.fondo}`}>

                    < div className="col-md-7 order-md-2  text-end text-warning opacity-75 ">
                        <h2 className={styles.letraRegalos}>FIBRAS MAGICAS + KIT ! </h2>
                        <p className="text-sm-end fs-5  fw-lighter">Podés elegir el diseño que más te guste. </p>

                        <button type="button" className="btn btn-outline-success"
                            onClick={() => agregarALCarrito(producto)}>Agregar al carrito</button>
                    </div>

                    <div className={`col-sm-6 col-md-3 col-lg-3 p-4 order-md-1 ${styles.rotacion}`}>
                        <img src="/images/regalo1.jpg" className="img-fluid rounded float-start" alt="Fibras de colores" />
                    </div>




                </div>


            </div>



        

        </>


    );
};
export default Regalos;