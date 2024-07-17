import React from 'react';
import './App.css';
import IntroPge from './IntroPge';
import Servicios from './Servicios';
import Team from './Team';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section id="home">
        <IntroPge />
      </section>
      <section id="services">
        <Servicios />
      </section>
      <section id="team">
        <Team />
      </section>
    </div>
  );
}

export default App;
 