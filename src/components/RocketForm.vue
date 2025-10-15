<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
  >
    <template #activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >
        Add Rocket
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Add New Rocket</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="name"
          label="Name"
        />
        <v-textarea
          v-model="description"
          label="Description"
        />
        <v-text-field
          v-model="image"
          label="Image URL"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          @click="submit"
        >
          Add
        </v-btn>
        <v-btn
          text
          @click="dialog = false"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-rocket']);
const dialog = ref(false);
const name = ref('');
const description = ref('');
const image = ref('');

const submit = () => {
  if (!name.value || !description.value || !image.value) return;
  emit('add-rocket', {
    id: Date.now().toString(),
    name: name.value,
    description: description.value,
    flickr_images: [image.value],
  });
  dialog.value = false;
  name.value = '';
  description.value = '';
  image.value = '';
};
</script>
