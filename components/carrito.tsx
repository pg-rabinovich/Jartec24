import React, { useState } from 'react';

function Carrito() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const agregarAlCarrito = (producto) => {
        setItems([...items, producto]);
        setTotal(total + producto.precio);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.nombre} - ${item.precio}</li>
                ))}
            </ul>
            <p>Total: ${total}</p>
        </div>
    );
}

export default Carrito;
