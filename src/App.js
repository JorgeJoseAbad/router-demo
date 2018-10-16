import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LisaPage } from './pages/LisaPage';
import { HomerPage } from './pages/HomerPage';
import { PokePage } from './pages/PokePage';

const Routes = () => {
  return [
    <Route exact path="/" key="r1" component={()=><LisaPage title="Hola"/>} />,
    <Route path="/homer/:name" key="r2" component={HomerPage} />,
    <Route path="/poke" key="r3" component={PokePage} />
  ]
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Portada</Link>
            <Link to="/homer/marc">Pagina de Marc</Link>
            <Link to="/homer/pepe">Pagina de Pepe</Link>
            <Link to="/poke">Poke List</Link>
          </header>
          <div
            className="classRoutes"
            style={{
              backgroundColor:'hsla(33, 29%, 70%, 1)',
              margin:20
            }}>
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
