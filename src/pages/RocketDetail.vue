<template>
  <div
    v-if="rocket"
    class="rocket-detail"
  >
    <h1>{{ rocket.name }}</h1>
    <img
      :src="rocket.image"
      :alt="rocket.name"
    >
    <p class="desc">
      {{ rocket.description }}
    </p>

    <div class="info">
      <p>💰 Cost per Launch: {{ rocket.cost?.toLocaleString() }} USD</p>
      <p>🌍 Country: {{ rocket.country }}</p>
      <p>🗓 First Flight: {{ rocket.first_flight }}</p>
    </div>
  </div>

  <div
    v-else
    class="error-state"
  >
    <p>Rocket not found</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRocketStore } from '@/store/rocketStore'
import { computed } from 'vue'

const route = useRoute()
const store = useRocketStore()

const rocket = computed(() =>
  store.rockets.find(item => item.id === route.params.id)
)
</script>

<style lang="scss" scoped>
@use '../assets/styles/rocketDetail.scss';
</style>
