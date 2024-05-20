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

interface PokemonRowProps {
  pokemonData: Pokemon;
}

const PokemonRow: React.FC<PokemonRowProps>=({pokemonData}) => {
  return (
    <tr key={pokemonData.id}>
            <td>{pokemonData.name.english}</td>
            <td>{pokemonData.type.join(",")}</td>
          </tr>
  )
}

const PokemonTable: React.FC<PokemonTableProps> = ({ data }) => {
  return (
    <table className='pokemon-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0,20).map((pokemon) => (
          <PokemonRow pokemonData={pokemon}></PokemonRow>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
