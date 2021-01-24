// tendra todos los states de la aplicacion
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// en el store se llama al reducer siempre
import pokeReducer from './pokeDucks';

// aqui es donde se consume los reducers
const rootReducer = combineReducers({
  pokemones: pokeReducer,
});

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
