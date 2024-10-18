<template>
  <section>
    <div class="container-fluid text-container" data-aos="zoom-in">
      <div class="row">
        <div class="col-12">

          <h1 class="mb-3 display-3">Présentation du projet</h1>
          <p class="mb-4 display-6">Classement des 20 meilleurs mangas de tous les temps</p>
          <p class="tecno"><span class="span">Frontend :</span> Guidé par VueRouter, le changement d'état géré par Vuex,
            typage
            statique par
            Typescript.</p>
          <p class="tecno"><span class="span">Backend :</span> Création d'API, mise en place des endpoints, gérer par le
            framework
            Node.js qui est
            Express.js.
          </p>
          <div class="mb-5 wrapper">
            <div class="line-wrapper"></div>
          </div>
          <p class="lead">
            Ce projet est une application web moderne développée avec Vue.js pour le frontend, combiné à Vue Router qui
            permet
            la gestion des routes de manière fluide et sans rechargement de page.
            L'utilisation de TypeScript renforce la robustesse du code grâce à un typage statique, facilitant la
            maintenance
            et la détection des erreurs en amont.
            Vue Router permet de créer une application monopage (SPA), où les différentes pages de l'application sont
            gérées
            dynamiquement tout en gardant une navigation rapide et fluide.
            Le frontend interagit avec un backend Express.js, qui gère les requêtes API à travers des endpoints bien
            définis.
            Ces endpoints permettent au backend de recevoir des requêtes, traiter les données, et renvoyer les résultats
            sous
            forme de JSON.
            La séparation entre le frontend et le backend permet une architecture modulaire, facilitant l'ajout de
            nouvelles
            fonctionnalités ou de nouveaux services à l'application.
            L'Express.js utilisé pour gérer les routes API assure un traitement asynchrone efficace, tout en s'intégrant
            facilement avec des bases de données ou services externes.
            Grâce à Vue.js et TypeScript, le code est organisé en composants modulaires et facilement réutilisables,
            tout
            en
            utilisant les interfaces pour structurer les données.
            Vue Router, quant à lui, gère les différentes vues de l'application, offrant une navigation instantanée
            entre
            les
            pages.
            L'ensemble du projet est conçu selon les meilleures pratiques de développement, garantissant performance,
            sécurité, et évolutivité.
          </p>
          <div class="p-2 d-flex justify-content-start align-items-center">
            <p class="text-black me-2 m-lg-4 fw-bold">Frontend : </p>
            <a href="https://github.com/randyrt/vue_mangas_typescript" target="_blank" class="me-2">Voir
              le code source</a>
            <p class="text-black me-2 m-lg-4 fw-bold">Backend : </p>
            <a href="https://github.com/randyrt/vue_mangas_api" target="_blank">
              Voir
              le code source</a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },

  name: 'Home',
  data() {
    return {

    }
  },
  mounted() {

  },
});

</script>

<style scoped>
section {
  background-color: rgba(119, 74, 54, 0.74);
  min-height: 100vh;
}

h1 {
  color: rgb(240, 243, 189) !important;
}

a {
  text-decoration: none !important;
}

.text-container {
  padding: 50px;
  color: rgb(240, 243, 189) !important;
  border-radius: 10px;
}

.text-container h1 {
  color: #000;
}

.text-container .tecno {
  font-weight: bold;
}

.text-container span {
  color: #000 !important;
  font-size: 17px;
}

.text-container .line-wrapper {
  background-color: rgb(240, 243, 189) !important;
  height: 2px;
  width: 60%;
}

.text-container a {
  padding: 15px;
  background-color: rgb(191, 6, 3) !important;
  color: rgb(240, 243, 189) !important;
  text-decoration: none !important;
  max-width: 200px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
}

.text-container a:hover {
  color: rgb(240, 243, 189) !important;
  background-color: rgba(191, 6, 3, 0.726) !important;
  text-decoration: none !important;
  max-width: 200px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
}
</style>