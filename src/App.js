import Navegacion from './Componentes/Navegacion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tittle from './Componentes/Title';
import Conocenos from './Componentes/Conocenos';
import Slider from './Componentes/Slider';
import Formulario from './Componentes/Formulario';
import Cards from './Componentes/Cards';
import LoginModal from './Componentes/SubComponentes/LoginModal';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path="/login" element={<LoginModal />} />
        </Routes>
      </BrowserRouter>
      <Tittle/>
      <Conocenos/>
      <Slider/>
      <Cards/>
      <Formulario/>
      <Footer/>
      
    </div>
  );
}

export default App;
