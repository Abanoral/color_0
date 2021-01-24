// tendra todos los states de la aplicacion
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// en el store se llama al reducer siempre
import pokeReducer from './pokeDucks';
import { composeWithDevTools } from 'redux-devtools-extension';

// aqui es donde se consume los reducers
const rootReducer = combineReducers({
  pokemones: pokeReducer, // este es el nombre que aparecera en el redux del navegador y tambien el que llamaremos
});

export default function generateStore() {
  const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
