import React, {Component} from 'react'
import {connect} from 'react-redux';
import {deletePokemon} from '../redux/actions'

const BorderRadiusImg = ({img,name}) => (
    <div style={{borderRadius:10, background:'red'}}>
        <img src={img} width={100} alt={name}/>
    </div>
)

const Pokemon = ({pokemon}) => {
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

 const _PokePage = ({pokemons, dispatch}) => (
    <div>
        {pokemons.map(p => 
        <div style={{border:'1px solid blue'}}>
            <Pokemon pokemon={p}/>
            <button onClick={()=> dispatch(deletePokemon(p.name))}>Delete me</button>
        </div> )}
    </div>
)

export const PokePage =  connect(state => {
    return {
        pokemons: state.pokemons
    }
})(_PokePage )









