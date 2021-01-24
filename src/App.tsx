import React from 'react';
import Pokemones from './components/Pokemones';

import { Provider } from 'react-redux'; // npm install --save-dev @types/react-redux
import generateStore from './redux/store';

function App() {

const store = generateStore()

  return (
    // el provider provee la store que hayamos creado, es un HOC
    <Provider store={store}> 
      <Pokemones />
    </Provider>
  );
}

export default App;
