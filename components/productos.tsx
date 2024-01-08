import React from 'react';
import styles from '../styles/inicio.module.css';



interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface ProductosProps {
  agregarALCarrito: (producto: Producto) => void;
}

const Productos: React.FC<ProductosProps> = ({ agregarALCarrito }) => {
  const productos: Producto[] = [
    { id: 1, nombre: 'Bosque Estrellado', precio: 100 },
    { id: 2, nombre: 'Bichitos Juguetones', precio: 100 },
    { id: 3, nombre: 'Maravillas Mágicas', precio: 100 },
    { id: 4, nombre: 'Aves Cantantes', precio: 100 },
  ];

  return (
    <>
      <div className={`mx-auto row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 p-5 ${styles.fondo}`}>
        {productos.map((producto: Producto) => {
          return (
            <div className="col" key={producto.id}>
              <div className= "card text-bg-light mb-3">
                <img src={`/images/card${producto.id}.jpg`} className="card-img-top" alt={`Imagen ${producto.nombre}`} />
                <div className="card-body">
                  <h5 className={styles.cardText}>{producto.nombre}</h5>
                  <p className={styles.cardText}> ${producto.precio}</p>
                  <button type="button" className={`btn btn-outline-info ${styles.cardText}`} onClick={() => agregarALCarrito(producto)}>Agregar al carrito</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Productos;
