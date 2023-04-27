import './App.css';
import './css/header.css';
import './css/body.css';
import './css/footer.css';
import './css/card-layout.css';
import Granportafolio from './components/granportfolio'
import Portfoliothumbs from './components/portfoliothumbs'
import MenuP from './components/menuP'
import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import "@fontsource/roboto";
import { RiLinkedinBoxFill} from "react-icons/ri";
import Container from '@mui/material/Container';

import * as React from 'react';


function App() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleImageClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };
//   return (

//     <><Container className="App">
//       <CssBaseline />
//       <header>
//         <MenuP />
//       </header>
//       <main>
//         <section style={{ display: 'flex', flexWrap: 'nowrap' }}>
//           <Granportafolio imagenSeleccionada={imagenSeleccionada} />
//           <Portfoliothumbs onImageClick={handleImageClick} />
//         </section>
//       </main>
//     </Container>
//     <footer>Román Contreras <RiLinkedinBoxFill/></footer></>

//   );
// }

// export default App;
return (
  <div className="app-container">
    <CssBaseline />
    <header>
      <MenuP />
    </header>
    <main>
      <Container>
        <section style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Granportafolio imagenSeleccionada={imagenSeleccionada} />
          <Portfoliothumbs onImageClick={handleImageClick} />
        </section>
      </Container>
    </main>
    <footer>Román Contreras <RiLinkedinBoxFill src="https://www.linkedin.com/in/rom%C3%A1n-contreras-campillo-79a15375/"/></footer>
  </div>
);
}

export default App;