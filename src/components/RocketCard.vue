<template>
  <div class="rocket-card">
    <img
      :src="rocket.image"
      alt="rocket image"
    >
    <h3>{{ rocket.name }}</h3>
    <p>{{ rocket.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Rocket } from '@/types/rocket'
defineProps<{ rocket: Rocket }>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/rocketList';
</style>
