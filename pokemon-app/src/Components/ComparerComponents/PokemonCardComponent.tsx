import React from 'react';
import { Pokemon } from '../../Types';


// Props-Interface für die Komponente
interface PokemonCardProps {
  pokemon: Pokemon;
}

// Generisches Bild als Platzhalter
const placeholderImage = 'https://via.placeholder.com/150';

// PokemonCard-Komponente
const PokemonCardComponent: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div style={styles.card}>
      <img src={placeholderImage} alt={pokemon.name.english} style={styles.image} />
      <h2>{pokemon.name.english}</h2>
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
