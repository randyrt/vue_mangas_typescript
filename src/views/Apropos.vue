<template>
  <div class="container">
    <div class="mt-5 row">
      <div class="col-6">
        <h1 display-4>A propos du page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nemo dolorum tempora pariatur velit
          ducimus, fugit et officiis voluptates ipsa eius laboriosam ex, facere enim accusantium molestias id amet
          exercitationem fuga. Asperiores esse, sed earum quod odio natus ad laboriosam!
        </p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'Apropos'
});



</script>

<style scoped>
h1,
p {
  color: white !important;
}
</style>