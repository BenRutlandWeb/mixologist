interface Ingredient {
    name: string;
}

interface IngredientWithMeasure extends Ingredient {
    measure: number;
}

interface Cocktail {
    name: string;
    ingredients: Ingredient[];
    optionalIngredients?: Ingredient[];
}

export { Ingredient, IngredientWithMeasure, Cocktail };
