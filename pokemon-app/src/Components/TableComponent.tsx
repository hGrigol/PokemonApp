// PokemonTable.tsx
import React from 'react';

interface Pokemon {
    id: number;
    name: {
        english: string;
        japanese: string;
        chinese: string;
        french: string;
    };
    type: string[];
    base: {
        HP: number;
        Attack: number;
        Defense: number;
        "Sp. Attack": number;
        "Sp. Defense": number;
        Speed: number;
    };
}


interface PokemonTableProps {
  data: Pokemon[];
}

const PokemonTable: React.FC<PokemonTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon, index) => (
          <tr key={index}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
