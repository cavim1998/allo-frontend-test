<template>
  <div class="rocket-list">
    <h1>🚀 SpaceX Rockets</h1>

    <RocketFilter v-model="filterText" />

    <button
      class="add-btn"
      @click="showAdd = true"
    >
      + Add Rocket
    </button>
    <AddRocketDialog v-model:show="showAdd" />

    <div
      v-if="store.loading"
      class="loading"
    >
      Loading rockets...
    </div>

    <div
      v-else-if="store.error"
      class="error"
    >
      {{ store.error }}
      <button @click="store.fetchRockets">
        Retry
      </button>
    </div>

    <div
      v-else
      class="grid"
    >
      <RocketCard
        v-for="rocket in filteredRockets"
        :key="rocket.id"
        :rocket="rocket"
        @click="goDetail(rocket.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRocketStore } from '@/store/rocketStore'
import RocketCard from '@/components/RocketCard.vue'
import RocketFilter from '@/components/RocketFilter.vue'
import AddRocketDialog from '@/components/AddRocketDialog.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useRocketStore()
const filterText = ref('')
const showAdd = ref(false)

onMounted(() => store.fetchRockets())

const filteredRockets = computed(() =>
  store.rockets.filter((r) =>
    r.name.toLowerCase().includes(filterText.value.toLowerCase())
  )
)

function goDetail(id: string) {
  router.push(`/rocket/${id}`)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/rocketList';
</style>
