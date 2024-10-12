<template>
  <section class="section-un">
    <div class="container" data-aos="zoom-in">
      <div class="mt-5 row">
        <div class="col-6">
          <h1 display-4>Actualité sur les mangas</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nemo dolorum tempora pariatur
            velit
            ducimus, fugit et officiis voluptates ipsa eius laboriosam ex, facere enim accusantium molestias id amet
            exercitationem fuga. Asperiores esse, sed earum quod odio natus ad laboriosam!
          </p>
        </div>
      </div>


    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'Actus'
});



</script>

<style scoped>
.section-un .container {
  background-color: rgba(119, 74, 54, 0.74);
}

h1,
p {
  color: white !important;
}
</style>