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
                            ...(cocktail.ingredients?.map((i) => i.name) ?? []),
                            ...(cocktail.optionalIngredients?.map(
                                (i) => i.name
                            ) ?? []),
                        ].join(", ")
                    }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";

import COCKTAILS from "./data/cocktails";
import INGREDIENTS from "./data/ingredients";
import { Cocktail } from "./definitions";
import { filterCocktails } from "./functions";

const BAR_INGREDIENTS = JSON.parse(
    window.localStorage.getItem("bar-ingredients") ?? "[]"
);

const allIngredients = INGREDIENTS;

const barIngredients = ref(BAR_INGREDIENTS);

function cocktails(): Cocktail[] {
    return filterCocktails(COCKTAILS, barIngredients.value);
}

function updateLocalStorage(): void {
    window.localStorage.setItem(
        "bar-ingredients",
        JSON.stringify(barIngredients.value)
    );
}

watchEffect(updateLocalStorage);
</script>
