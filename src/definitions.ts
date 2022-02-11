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
  method?: string[];
}

export { Ingredient, IngredientWithMeasure, Cocktail };
