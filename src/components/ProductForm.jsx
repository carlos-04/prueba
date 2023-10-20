import React, { useState } from 'react';
import axios from 'axios';
const  ProductForm = ({model, onSubmit} ) => {
  
  const [product, setProduct] = useState({
    name: '',
    description: '', 
    category: '',    
    stock: 0, 
    price: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:7051/Product', product)
    .then(response => console.log(response))
    .catch(err => console.log(err))
 
  };

  return (
  <>
    <div className="container mt-4">
      <h2>Formulario de Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre del Producto</label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripción del Producto</label>
            <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Categoría del Producto</label>
            <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={product.category}
                onChange={handleInputChange}
            />
            </div>
        <div className="mb-3">
            <label htmlFor="stock" className="form-label">Stock del Producto</label>
            <input
                type="number"
                className="form-control"
                id="stock"
                name="stock"
                value={product.stock}
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Precio del Producto</label>
            <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                required
            />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Producto</button>
      </form>
    </div>
  </>

  );
}

export default ProductForm;
