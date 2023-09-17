export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: Sprites;
  types: Types[];
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Types {
  slot: number;
  type: {
    name: 'grass';
    url: string;
  };
}
