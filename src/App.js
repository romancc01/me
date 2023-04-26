import './App.css';
import './css/header.css';
import './css/body.css';
import './css/footer.css';
import './css/card-layout.css';
import Granportafolio from './components/granportfolio'
import Portfoliothumbs from './components/portfoliothumbs'
import MenuP from './components/menuP'
import { useState } from 'react';


import * as React from 'react';


function App() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleImageClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };
  return (
    <div className="App">
      <header>
        <MenuP/>
      </header>
      <main>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Granportafolio imagenSeleccionada={imagenSeleccionada} />
          <Portfoliothumbs onImageClick={handleImageClick} />
          </div>
      </main>
      <footer>Footer</footer>
  </div>
  );
}

export default App;
