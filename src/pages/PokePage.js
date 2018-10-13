import React, {Component} from 'react'
import axios from 'axios';

const loadPokemon = (pokemonID) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`;
    return axios.get(url).then(res => {
        return {
            name:res.data.name,
            img1: res.data.sprites.front_default,
            img2: res.data.sprites.back_default
        };
    });
}

const BorderRadiusImg = ({img1,img2,name}) => (
    <div style={{borderRadius:10, background:'red', width:100, marginLeft:300}}>
      <img src={img1} alt={name}/>
      <img src={img2} alt={name}/>
    </div>
)

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: null
        }
    }
    componentDidMount(){
        loadPokemon(this.props.id).then( data => this.setState({pokemon:data}));
    }
    render(){
        const {pokemon} = this.state

        if(!pokemon){
            return <div>Loading....</div>;
        }

        return (
        <div>
          <h2>{pokemon.name}</h2>
          <BorderRadiusImg img1={pokemon.img1} img2={pokemon.img2} name={pokemon.name}/>
        </div>
        )
    }
}

export const PokePage = () => (
    <div>
      <Pokemon id={25}/>
      <Pokemon id={25}/>
      <Pokemon id={151}/>
      <Pokemon id={99}/>
    </div>
)
