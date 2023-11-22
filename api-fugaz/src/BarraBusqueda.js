import React, { useState } from 'react';

function BarraBusqueda({ onBuscar }) {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(busqueda); // Aquí pasas la búsqueda al componente padre
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={busqueda} onChange={handleChange} placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default BarraBusqueda;