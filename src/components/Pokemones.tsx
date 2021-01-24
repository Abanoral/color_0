import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion } from '../redux/pokeDucks';

const Pokemones = () => {
  // usedispatch para consumir accion
  // useSelector para llamar al state

  const dispatch = useDispatch();
  return (
    <div>
      lista de pokemones
      <button onClick={() => dispatch(obtenerPokemonesAccion())}>
        Get Pokemones
      </button>
    </div>
  );
};

export default Pokemones;
