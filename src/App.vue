<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Randy.artdev</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Accueil</router-link>
            <router-link class="nav-link" to="/about">Mangas</router-link>
            <router-link class="nav-link" to="/apropos">A propos</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});

</script>

<style>
body {
  font-family: "Poppins", sans-serif !important;
  background: url('../public/bgvue.jpg') !important;
  background-size: cover !important;

}

.navbar {
  padding: 10px;
  background-color: rgba(255, 209, 102, 0.623);
  color: white !important;
}

.collapse .nav-link,
.navbar .navbar-brand {
  color: white !important;
  font-weight: bold;
}
</style>
