import './App.css';
import AcercaDe from './Componentes/AcercaDe';
import {Routes, Route} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Desarrolladoras from './Componentes/DesarrolladorasUno';
import DesarrolladorasUno from './Componentes/DesarrolladorasUno';
import DesarrolladorasDos from './Componentes/DesarolladorasDos';
import DesarrolladorasTres from './Componentes/DesarrolladorasTres';
import DesarrolladorasCuatro from './DesarrolladorasCuatro';
import DesarrolladorasCinco from './DesarrolladorasCinco';
import DesarrolladorasSeis from './DesarrolldorasSeis';
import Footer from './Componentes/footer';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  return (
    <div className='app'>
      <div>
        <Routes>
          <Route path="/" element={<AcercaDe/>}/>
        </Routes>
        <h1>Desarrolladoras</h1>
      <Carousel responsive={responsive}>
      <DesarrolladorasUno/>
      <DesarrolladorasDos/>
      <DesarrolladorasTres/>
      <DesarrolladorasCuatro/>
      <DesarrolladorasCinco/>
      <DesarrolladorasSeis/>
</Carousel>
<Footer/>
      </div>

    </div>
  );
}

export default App;