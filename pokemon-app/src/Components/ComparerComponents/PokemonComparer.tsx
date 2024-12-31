// Components/PokemonComparer.tsx

import React, { useState, useEffect } from 'react';
import PokemonCardComponent from './PokemonCardComponent';
import { CSSProperties } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMON_BY_ID } from '../../graphql/queries';
import { PokemonDataGraphQl } from '../../Types';

const getRandomPokemonId = () => {
  return Math.floor(Math.random() * 898) + 1; // Assuming there are 898 Pokémon
};

interface PokemonData {
  image: string;
  name: string;
}

const PokemonComparer: React.FC = () => {
  const [currentPokemonData, setCurrentPokemonData] = useState<PokemonData[]>([
    { image: '', name: 'Loading...' },
    { image: '', name: 'Loading...' },
  ]);

  const [nextPokemonData, setNextPokemonData] = useState<PokemonData[]>([
    { image: '', name: 'Loading...' },
    { image: '', name: 'Loading...' },
  ]);

  const [getPokemonById, { loading, data, error }] = useLazyQuery<PokemonDataGraphQl>(GET_POKEMON_BY_ID);

  const fetchPokemonDataByGraphQl = async (id: string) => {
    const { data } = await getPokemonById({ variables: { id } });
    if (data) {
      const imageSrc = data.pokemon.sprites.front_default;
      const image = new Image();
      image.src = imageSrc;
      await image.decode();
      return {
        image: imageSrc,
        name: data.pokemon.name.toUpperCase(),
      };
    }
    return { image: '', name: 'Error' };
  };

  const handleVsButtonClick = async () => {
    setCurrentPokemonData(nextPokemonData);
  };

  useEffect(() => {
    const fetchNextPokemon = async () => {
      const [firstId, secondId] = [getRandomPokemonId(), getRandomPokemonId()].map(id => id.toString());

      const [firstPokemon, secondPokemon] = await Promise.all([
        fetchPokemonDataByGraphQl(firstId),
        fetchPokemonDataByGraphQl(secondId),
      ]);

      setNextPokemonData([firstPokemon, secondPokemon]);
    };
    fetchNextPokemon();
  }, [currentPokemonData]);

  useEffect(() => {
    const initializePokemon = async () => {
      const [firstId, secondId] = [getRandomPokemonId(), getRandomPokemonId()].map(id => id.toString());

      const [firstPokemon, secondPokemon] = await Promise.all([
        fetchPokemonDataByGraphQl(firstId),
        fetchPokemonDataByGraphQl(secondId),
      ]);

      setCurrentPokemonData([firstPokemon, secondPokemon]);
    };

    initializePokemon(); // Initial load

  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <PokemonCardComponent pokemonImage={currentPokemonData[0].image} pokemonName={currentPokemonData[0].name} />
        <PokemonCardComponent pokemonImage={currentPokemonData[1].image} pokemonName={currentPokemonData[1].name} />
      </div>
      <button style={styles.vsButton} onClick={handleVsButtonClick} disabled={loading}>VS</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  vsButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    border: 'none',
  },
};

export default PokemonComparer;
