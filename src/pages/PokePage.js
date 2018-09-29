import React, {Component} from 'react'
import axios from 'axios';


const loadPokemon = (pokemonID) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`;
    return axios.get(url).then(res => {
        return {
            name:res.data.name,
            img: res.data.sprites.front_default
        };
    });
}


const BorderRadiusImg = ({img,name}) => (
    <div style={{borderRadius:10, background:'red', width:100}}>
        <img src={img} alt={name}/>
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
            <BorderRadiusImg img={pokemon.img} />
        </div>
        )
    }
}

export const PokePage = () => (
    <div>
        <Pokemon id={25}/>
        <Pokemon id={25}/>
        <Pokemon id={151}/>
    </div>
)









