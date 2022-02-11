<template>
  <h2>{{ cocktail.name }}</h2>
  <p class="text-gray-500">
    {{
      [
        ...(cocktail.ingredients?.map((i) => i.name) ?? []),
        ...(cocktail.optionalIngredients?.map((i) => i.name) ?? []),
      ].join(", ")
    }}
  </p>
  <button
    type="button"
    @click="open = !open"
    class="p-2 bg-orange-600 text-white rounded shadow uppercase"
  >
    Toggle
  </button>
  <div v-if="open">
    <fieldset>
      <legend>Number of servings</legend>
      <div class="flex">
        <div>
          <input
            type="radio"
            v-model="servings"
            value="1"
            class="sr-only peer"
            id="servings-1"
          />
          <label
            for="servings-1"
            class="
              p-2
              border
              rounded-l
              cursor-pointer
              w-12
              h-12
              grid
              place-items-center
              peer-checked:border-orange-600
            "
            >1
          </label>
        </div>
        <div>
          <input
            type="radio"
            v-model="servings"
            value="2"
            class="sr-only peer"
            id="servings-2"
          />
          <label
            for="servings-2"
            class="
              p-2
              border
              cursor-pointer
              w-12
              h-12
              grid
              place-items-center
              peer-checked:border-orange-600
            "
            >2
          </label>
        </div>
        <div>
          <input
            type="radio"
            v-model="servings"
            value="3"
            class="sr-only peer"
            id="servings-3"
          />
          <label
            for="servings-3"
            class="
              p-2
              border
              cursor-pointer
              w-12
              h-12
              grid
              place-items-center
              peer-checked:border-orange-600
            "
            >3
          </label>
        </div>
        <div>
          <input
            type="radio"
            v-model="servings"
            value="4"
            class="sr-only peer"
            id="servings-4"
          />
          <label
            for="servings-4"
            class="
              p-2
              border
              rounded-r
              cursor-pointer
              w-12
              h-12
              grid
              place-items-center
              peer-checked:border-orange-600
            "
            >4
          </label>
        </div>
      </div>
    </fieldset>

    <h3>Ingredients</h3>
    <ul>
      <li v-for="ingredient in cocktail.ingredients" :key="ingredient.name">
        {{ ingredient.name }}
        <span v-if="ingredient.measure">
          {{ ingredient.measure ? servings * ingredient.measure : null }} parts
        </span>
      </li>
    </ul>

    <h3>Method</h3>
    <ol>
      <li v-for="(step, i) in cocktail.method" :key="i">{{ step }}</li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  cocktail: Object,
});

const open = ref(false);
const servings = ref(1);
</script>
