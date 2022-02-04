import { Cocktail, Ingredient, IngredientWithMeasure } from "./definitions";

function withMeasure(
    ingredient: Ingredient,
    measure: number
): IngredientWithMeasure {
    return {
        ...ingredient,
        measure,
    };
}

function filterCocktails(
    cocktails: Cocktail[],
    ingredients: string[]
): Cocktail[] {
    return cocktails.filter((cocktail) => {
        return cocktail.ingredients
            .map((i: Ingredient): string => i.name)
            .every((n: string): boolean => ingredients.includes(n));
    });
}

export { filterCocktails, withMeasure };
