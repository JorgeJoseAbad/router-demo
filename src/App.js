import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LisaPage } from './pages/LisaPage';
import { HomerPage } from './pages/HomerPage';
import { PokePage } from './pages/PokePage';
import { store } from './redux/store';
import {connect} from 'react-redux';

const Routes = () => {
  return [
    <Route exact path="/" key="r1" component={()=><LisaPage title="Hola"/>} />,
    <Route path="/homer/:name" key="r2" component={HomerPage} />,
    <Route path="/poke" key="r3" component={PokePage} />
  ]
};

const PokemonCounter = connect(state => ({count:state.pokemons.length}))(({count})=>(<span>(Total:{count})</span>))


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              <Link to="/">Portada</Link>
              <Link to="/homer/marc">Pagina de Marc</Link>
              <Link to="/homer/pepe">Pagina de Pepe</Link>
              <Link to="/poke">Poke List</Link>
              <PokemonCounter/>
            </header>
            <div>
              <Routes />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
