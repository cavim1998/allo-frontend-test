<template>
  <input
    v-model="value"
    type="text"
    placeholder="Filter rockets..."
    class="filter-input"
  >
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Props + Emits (script-setup)
 * - props.modelValue: nilai dari v-model di parent
 * - emit 'update:modelValue': event standard v-model
 */
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

// computed getter/setter: baca dari props, emit saat berubah
const value = computed<string>({
  get: () => props.modelValue ?? '',
  set: (v: string) => {
    emit('update:modelValue', v)
  }
})
</script>

<style scoped lang="scss">
@use '../assets/styles/rocketFilter';
</style>
