<template>
    <h1 class="text-2xl">Mixologist</h1>

    <div class="p-4 grid gap-8">
        <ul class="flex flex-wrap gap-1">
            <li v-for="ingredient in allIngredients" :key="ingredient.name">
                <ingredient-checkbox
                    v-model="barIngredients"
                    :value="ingredient.name"
                />
            </li>
        </ul>
        <ul class="grid gap-2">
            <li
                class="border rounded p-2"
                v-for="cocktail in cocktails()"
                :key="cocktail.name"
            >
                <h2>{{ cocktail.name }}</h2>
                <p class="text-gray-500">
                    {{
                        [
                            ...(cocktail.ingredients ?? []),
                            ...(cocktail.optionalIngredients ?? []),
                        ].join(", ")
                    }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import COCKTAILS from "./db/cocktails.json";
import INGREDIENTS from "./db/ingredients.json";

const BAR_INGREDIENTS = JSON.parse(
    localStorage.getItem("bar-ingredients") ?? "[]"
);

// filter the cocktails to only thse that can be made
function filterCocktails(cocktails, ingredients) {
    return cocktails.filter((cocktail) => {
        return cocktail.ingredients.every((i) => ingredients.includes(i));
    });
}

const allIngredients = INGREDIENTS;

const barIngredients = ref(BAR_INGREDIENTS);

function cocktails() {
    return filterCocktails(COCKTAILS, barIngredients.value);
}

function updateLocalStorage() {
    localStorage.setItem(
        "bar-ingredients",
        JSON.stringify(barIngredients.value)
    );
}

watchEffect(updateLocalStorage);
</script>
