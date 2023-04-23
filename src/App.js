import './App.css';
import './css/header.css';
import './css/body.css';
import './css/footer.css';
import './css/card-layout.css';
import Granportafolio from './components/granporfotilio'
import Portfoliothumbs from './components/porfotiliothumbs'

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <main >
       <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <Granportafolio/>
        <Portfoliothumbs/>
      </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
