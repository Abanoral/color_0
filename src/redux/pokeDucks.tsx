import axios from 'axios';

// constantes estos seran los estados que se recuperan en la aplicacion

export interface PokemonsAPI {
  array: [{ name: string; url: string }];
}

const dataInicial: PokemonsAPI = {
  array: [{ name: '', url: '' }],
};

const GET_OBTENER_POKEMONES: string = 'OBTENER_POKEMONES_EXITO';

// reducer: acepta la lista de pokemons y los envia a las constantes
export default function pokeReducer(
  state = dataInicial,
  action: { type: string, payload: any }
) {
  switch (action.type) {
    case GET_OBTENER_POKEMONES:
      return { ...state, array: action.payload } // revisar qué devuelve el result
    default:
      return state;
  }
}
// actions: consume la api

export const obtenerPokemonesAccion = () => async (dispatch: any, getState: any): Promise<any> => {
  try {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
    // para activar el switch del reducer colocamos aqui el dispatch
    // !important -> revisar qué viene del result
    dispatch({
      type: GET_OBTENER_POKEMONES,
      payload: result.data.result // aqui se cambia el estado por la respuesta de la api
    })
  } catch (error) {
    console.log(error);
  }
};
