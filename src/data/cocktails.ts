import * as i from "./ingredients";

import { withMeasure as _ } from "../functions";

import { Cocktail } from "../definitions";

const screwdriver: Cocktail = {
    name: "Screwdriver",
    ingredients: [_(i.vodka, 1), _(i.orangeJuice, 2), i.ice],
    optionalIngredients: [i.orangeSlice],
};
const bocciBall: Cocktail = {
    name: "Bocci Ball",
    ingredients: [_(i.amaretto, 1), _(i.orangeJuice, 3), i.ice],
};
const fuzzyNavel: Cocktail = {
    name: "Fuzzy Navel",
    ingredients: [_(i.peachSchnapps, 1), _(i.orangeJuice, 3), i.ice],
};
const tequilaSunrise: Cocktail = {
    name: "Tequila Sunrise",
    ingredients: [_(i.tequila, 1), _(i.orangeJuice, 2), i.grenadine, i.ice],
    optionalIngredients: [i.cocktailCherry, i.orangeWedge],
};
const margarita: Cocktail = {
    name: "Margarita",
    ingredients: [
        _(i.tequila, 1.75),
        _(i.cointreau, 1),
        _(i.limeJuice, 0.75),
        i.ice,
    ],
};
const sexOnTheBeach: Cocktail = {
    name: "Sex on the Beach",
    ingredients: [
        _(i.vodka, 2),
        _(i.peachSchnapps, 1),
        _(i.orangeJuice, 2),
        _(i.cranberryJuice, 2),
        i.grenadine,
        i.ice,
    ],
    optionalIngredients: [i.orangeWedge],
};

const babyGuiness: Cocktail = {
    name: "Baby Guiness",
    ingredients: [_(i.kahlua, 1), _(i.baileys, 1)],
};

const orgasm: Cocktail = {
    name: "Orgasm",
    ingredients: [_(i.amaretto, 1), _(i.kahlua, 1), _(i.baileys, 1)],
};

const pinaColada: Cocktail = {
    name: "Piña Colada",
    ingredients: [
        _(i.whiteRum, 1),
        _(i.pineappleJuice, 3),
        _(i.coconutCream, 1),
        i.ice,
    ],
    optionalIngredients: [i.cocktailCherry, i.pineappleWedge],
};

const kamikaze: Cocktail = {
    name: "Kamikaze",
    ingredients: [_(i.vodka, 1), _(i.cointreau, 1), _(i.limeJuice, 1), i.ice],
};

export {
    screwdriver,
    bocciBall,
    fuzzyNavel,
    margarita,
    tequilaSunrise,
    sexOnTheBeach,
    babyGuiness,
    orgasm,
    pinaColada,
    kamikaze,
};

export default [
    screwdriver,
    bocciBall,
    fuzzyNavel,
    margarita,
    tequilaSunrise,
    sexOnTheBeach,
    babyGuiness,
    orgasm,
    pinaColada,
    kamikaze,
];
