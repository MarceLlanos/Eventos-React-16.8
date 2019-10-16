import React from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';

import CategoriasProvider from './component/context/CategoriasContext';

function App() {
  return (
    <CategoriasProvider>
      <Header/>
      <div className="uk-container">
        <Formulario />
      </div>
    </CategoriasProvider>
  );
}

export default App;
