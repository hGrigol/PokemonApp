export interface Pokemon {
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

export interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface Sprites {
  front_default: string;
}

export interface PokemonDataGraphQl {
  pokemon: {
    name: string;
    stats: Stat[];
    sprites: Sprites;
  };
}
