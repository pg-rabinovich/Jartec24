import React from 'react';
import styles from '/styles/inicio.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';

function CarritoDesplegable({ productos, onClose, onUpdateCantidad, onEliminarTipoProducto }) {
    const totalGeneral = productos.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
    }, 0);

    return (
        <div className={styles.carritoDesplegable}>
            <h2 className={styles.titulo3}>Carrito de Compras</h2> <br />
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <div className={styles.productFont2}>
                            <span>
                                {producto.nombre} - ${producto.precio} <br />
                                x {producto.cantidad}
                            </span>
                            <span> ${producto.precio * producto.cantidad}</span> <br />
                            <button className="btn btn-outline-success btn-sm" onClick={() => onUpdateCantidad(producto.id, producto.cantidad + 1)}>+</button> &nbsp;
                            <button className="btn btn-outline-success btn-sm" onClick={() => onUpdateCantidad(producto.id, Math.max(producto.cantidad - 1, 0))}>-</button>&nbsp;&nbsp;
                            <button className="btn btn-outline-success btn-sm" onClick={() => onEliminarTipoProducto(producto.id)}>Eliminar</button><br /><br />
                        </div>
                    </li>
                ))}
            </ul>

            <br />

            <div className={styles.productFont3}>
                Total General: ${totalGeneral}
                <br />
                <Button
                    type="button"
                    className="btn btn-success"
                    onClick={onClose}
                >
                    Cerrar
                </Button> &nbsp;
                <Button
                    type="button"
                    className="btn btn-success"
                    onClick={onClose}
                >
                    Comprar
                </Button>
            </div>
        </div>
    );
}

export default CarritoDesplegable;
