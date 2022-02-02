import {
  vodka,
  orangeJuice,
  ice,
  peachSchnapps,
  amaretto,
  tequila,
  grenadine,
} from "./ingredients";

import { withMeasure } from "../functions";

import { Cocktail } from "../schema";

const screwdriver: Cocktail = {
  name: "Screwdriver",
  ingredients: [withMeasure(vodka, 1), withMeasure(orangeJuice, 2), ice],
};
const bocciBall: Cocktail = {
  name: "Bocci Ball",
  ingredients: [withMeasure(amaretto, 1), withMeasure(orangeJuice, 3), ice],
};
const fuzzyNavel: Cocktail = {
  name: "Fuzzy Navel",
  ingredients: [
    withMeasure(peachSchnapps, 1),
    withMeasure(orangeJuice, 3),
    ice,
  ],
};
const tequilaSunrise: Cocktail = {
  name: "Tequila Sunrise",
  ingredients: [
    withMeasure(tequila, 1),
    withMeasure(orangeJuice, 2),
    grenadine,
    ice,
  ],
};

export { screwdriver, bocciBall, fuzzyNavel, tequilaSunrise };

export default [screwdriver, bocciBall, fuzzyNavel, tequilaSunrise];
