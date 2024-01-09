import NavBar2 from "../components/navbar2";
import Header2 from "../components/header2";
import CarritoDesplegable from "../components/carritoDesplegable";
import Productos from "../components/productos";
import React, { useState, useEffect } from "react";
import Texto from "../components/descripcion";
import Regalos from "../components/regalos";
import Footer1 from '../components/footer1';





function Indexpage2() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  // Función para contar la cantidad total de productos en el carrito
  const contarCantidadTotal = (productosEnCarrito) => {
    return productosEnCarrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  };

  const agregarAlCarrito = (producto) => {
    // Verifica si el producto ya está en el carrito
    const productoExistente = productosEnCarrito.find(
      (p) => p.id === producto.id
    );

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      const nuevosProductos = productosEnCarrito.map((p) => {
        if (p.id === producto.id) {
          return { ...p, cantidad: p.cantidad + 1 };
        }
        return p;
      });
      setProductosEnCarrito(nuevosProductos);
    } else {
      // Si el producto no está en el carrito, agrégalo con una cantidad inicial de 1
      setProductosEnCarrito([
        ...productosEnCarrito,
        { ...producto, cantidad: 1 },
      ]);
    }
  };

  // Definir las funciones utilizadas en CarritoDesplegable
  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    const nuevosProductos = productosEnCarrito.map((p) => {
      if (p.id === productoId) {
        return { ...p, cantidad: nuevaCantidad };
      }
      return p;
    });
    setProductosEnCarrito(nuevosProductos);
  };

  const eliminarTipoProducto = (productoId) => {
    const nuevosProductos = productosEnCarrito.filter((p) => p.id !== productoId);
    setProductosEnCarrito(nuevosProductos);
  };

  return (
    <>
      <Header2 />
      <NavBar2 cantidadEnCarrito={contarCantidadTotal(productosEnCarrito)} onToggleCarrito={toggleCarrito} />
      <Productos agregarALCarrito={agregarAlCarrito} />
      {carritoVisible && (
        <CarritoDesplegable
          productos={productosEnCarrito}
          onClose={toggleCarrito}
          onUpdateCantidad={actualizarCantidad}
          onEliminarTipoProducto={eliminarTipoProducto}
        />
      )}

      <Texto/>
      <Regalos agregarALCarrito={agregarAlCarrito}/>
      <Footer1/>
      
      
    </>
  );
}

export default Indexpage2;
