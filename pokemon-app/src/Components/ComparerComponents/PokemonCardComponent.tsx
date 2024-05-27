import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../Types';


// Props-Interface für die Komponente
interface PokemonCardProps {
  pokemonName: string;
  pokemonImage: string;
}

// Generisches Bild als Platzhalter
const placeholderImage = 'https://via.placeholder.com/150';

// PokemonCard-Komponente
const PokemonCardComponent: React.FC<PokemonCardProps> = ({ pokemonName, pokemonImage }) => {

return (
  <div style={styles.card}>
    <h2>{pokemonName}</h2>
  </div>
);
};

// Einfache CSS-in-JS Styles
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center' as 'center',
    width: '250px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default PokemonCardComponent;
