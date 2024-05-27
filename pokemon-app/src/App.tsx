import './App.css';
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import PokemonComparer from './Components/ComparerComponents/PokemonComparer';

const getRandomPokemonId = () => {
  return Math.floor(Math.random() * 898) + 1; // Assuming there are 898 Pokémon
};

const App: React.FC = () => {
  return (
    <div>
      <div 
        style = {{
          margin:'auto',
          width: 800,
          paddingTop: "1rem"
        }}
      >
        <h1 className='title'> GOTTA KNOW 'EM ALL</h1>
      </div>
      <PokemonComparer />
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
    cursor: 'pointer', // Add a pointer cursor to indicate it's a button
    border: 'none', // Remove default button border
  },
};

export default App;
