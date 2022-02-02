import { Ingredient, IngredientWithMeasure } from "./schema";

function withMeasure(
  ingredient: Ingredient,
  measure: number
): IngredientWithMeasure {
  return {
    ...ingredient,
    measure,
  };
}

export { withMeasure };
