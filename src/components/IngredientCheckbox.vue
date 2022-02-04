<template>
    <label>
        <input
            type="checkbox"
            @input="check"
            :checked="checked"
            class="sr-only peer"
        />
        <div
            class="select-none cursor-pointer border rounded p-2 flex gap-2 items-center peer-checked:border-red-500"
        >
            {{ value }}
        </div>
    </label>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
    value: String,
    modelValue: Array,
});
const emit = defineEmits(["update:modelValue"]);

const checked = computed(() => props.modelValue.includes(props.value));

function check() {
    // copy the names Array to avoid mutating props
    let updatedNames = [...props.modelValue];
    // remove name if checked, else add name
    if (checked.value) {
        updatedNames.splice(updatedNames.indexOf(props.value), 1);
    } else {
        updatedNames.push(props.value);
    }
    // emit the updated names
    emit("update:modelValue", updatedNames);
}
</script>
