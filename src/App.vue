<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Randy.artdev</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="pl-5 collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" active-class="active" to="/">Accueil</router-link>
            <router-link class="nav-link" active-class="active" to="/mangas">Classement</router-link>
            <router-link class="nav-link" active-class="active" to="/actus">Actualité</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

export default defineComponent({
  name: 'App',
});

</script>

<style>
html {
  overflow-x: hidden;
}

body {
  font-family: "Poppins", sans-serif !important;
  background-size: cover !important;
  min-height: 100vh !important;
}

.navbar {
  padding: 10px;
  background-color: rgba(250, 151, 140, 0.849);
  color: rgb(240, 243, 189) !important;
}

.collapse .nav-link {
  color: rgb(240, 243, 189) !important;
  font-weight: bold;
  font-size: 16px;
}

.navbar .navbar-brand {
  color: rgb(191, 6, 3) !important;
  font-weight: bold;
  font-size: 20px;
}

.collapse .nav-link {
  margin-left: 20px !important;
}

.collapse .nav-link:hover,
.navbar .navbar-brand:hover {
  color: rgb(119, 73, 54) !important;
}

.collapse .active {
  color: rgb(119, 73, 54) !important;
}
</style>
