import { gql } from "@apollo/client";

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: String!) {
    pokemon(id: $id) {
      name
      stats {
        stat {
          name
        }
        base_stat
      }
      sprites {
        front_default
      }
    }
  }
`;