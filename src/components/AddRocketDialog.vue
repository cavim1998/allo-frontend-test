<template>
  <div
    v-if="show"
    class="dialog-backdrop"
  >
    <div class="dialog">
      <h2>Add New Rocket</h2>
      <input
        v-model="name"
        placeholder="Rocket Name"
      >
      <textarea
        v-model="description"
        placeholder="Rocket Description"
      />
      <button @click="addRocket">
        Add
      </button>
      <button
        class="cancel"
        @click="emit('update:show', false)"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRocketStore } from '@/store/rocketStore'

defineProps<{ show: boolean }>()
const emit = defineEmits(['update:show'])
const store = useRocketStore()
const name = ref('')
const description = ref('')

function addRocket() {
  if (!name.value.trim()) return
  store.addRocket({
    id: Date.now().toString(),
    name: name.value,
    description: description.value,
    flickr_images: ['https://images2.imgbox.com/94/f2/NN6Ph45r_o.png'],
  })
  emit('update:show', false)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/rocketList';
</style>
