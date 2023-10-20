import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';

function App() {
  const [products, setProducts] = useState({
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0

  });
  const [lastId, setLastId] = useState(0);

  // Función para agregar un nuevo producto a la lista
  const addProduct = (newProduct) => {
    const newId = lastId + 1;
    newProduct.id = newId;
    setLastId(newId);
    setProducts([...products, newProduct]);
  };

  const createProduct = async (products) => {
    try {
      console.log(rol.name);
      await axios.post('https://localhost:7051/Product', products);
      // Alert('Creado Correctamente', '', 'success', false, 1500, 'center');
      // getData();

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductForm model={{
            name: "",
            description: "",
            category: "",
            stock: 0,
            price: 0
          }} onSubmit={async values => {
            await createProduct(values);
          }} />} />
          <Route path="/inventario" element={<ProductList products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
