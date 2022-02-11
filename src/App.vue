<template>
  <header class="p-4">
    <h1 class="text-2xl">Mixologist</h1>
  </header>
  <main class="p-4">
    <div class="grid gap-8">
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
          <CocktailCard :cocktail="cocktail" />
        </li>
      </ul>
    </div>
  </main>
  <footer></footer>
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

<style lang="postcss" scoped>
header {
  background: linear-gradient(
    90deg,
    rgb(99.608% 73.725% 16.471%) 0%,
    rgb(99.655% 69.926% 19.605%) 6.25%,
    rgb(99.7% 66.373% 22.537%) 12.5%,
    rgb(99.741% 63.064% 25.267%) 18.75%,
    rgb(99.779% 60% 27.794%) 25%,
    rgb(99.815% 57.181% 30.119%) 31.25%,
    rgb(99.847% 54.608% 32.243%) 37.5%,
    rgb(99.876% 52.279% 34.164%) 43.75%,
    rgb(99.902% 50.196% 35.882%) 50%,
    rgb(99.925% 48.358% 37.399%) 56.25%,
    rgb(99.945% 46.765% 38.713%) 62.5%,
    rgb(99.962% 45.417% 39.825%) 68.75%,
    rgb(99.975% 44.314% 40.735%) 75%,
    rgb(99.986% 43.456% 41.443%) 81.25%,
    rgb(99.994% 42.843% 41.949%) 87.5%,
    rgb(99.998% 42.475% 42.252%) 93.75%,
    rgb(100% 42.353% 42.353%) 100%
  );
}
</style>
