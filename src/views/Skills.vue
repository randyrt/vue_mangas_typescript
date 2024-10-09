<template>
  <div class="container mt-5">
    <h1 class="display-4">I'm skills</h1>
    <p class="mt-2">{{ skill }}</p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface HomeData {
  skill: string
}

export default defineComponent({
  name: 'Skills',
  data(): HomeData {
    return {
      skill: 'je suis skills'
    }
  }
});
</script>

<style scoped></style>
