import { createStore } from 'redux'

function reducers(state, action) {
    console.log(state);
    console.log(action);
    if (typeof state === 'undefined') {
      return { 
          pokemons: [{name:"marc", img:"https://www.lifewire.com/thmb/vDB3ply4rHJG_BDWeD0AbuRu-EU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg"}]
      };
    }

    if(action.type == "DELETE_POKEMON"){
        return {
            pokemons:[]
        }
    }
    // For now, don't handle any actions
    // and just return the state given to us.
    return state;
  }

export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());