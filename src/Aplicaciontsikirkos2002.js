import React from 'react';
import './css/estilos.css'
import {Link, Router} from '@reach/router';
import Distribucion1tsikirkos from './Distribucion1tsikirkos'
import Distribucion2tsikirkos from './Distribucion2tsikirkos'
import Distribucion3tsikirkos from './Distribucion3tsikirkos';


function App() {
  return (
    <div className="App">
    <header>
      <nav className="tsikirkos__Menu">
          <Link to="/Distribucion1">Distribución 1</Link>
         <Link to="/Distribucion2">Distribución 2</Link>
         <Link to="/Distribucion3">Distribución 3</Link>
         
      </nav>
    </header>
    <main>
       <Router>
        <Distribucion1tsikirkos path="/Distribucion1" />
        <Distribucion2tsikirkos path="/Distribucion2" />
         <Distribucion3tsikirkos path="/Distribucion3" />
      </Router> 
    </main>
  </div>
  )
}

export default App;