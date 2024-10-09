<template>
  <section>
    <div class="mt-5 container-fluid text-container">
      <h1 class="mb-3 display-3">Présentation du projet</h1>
      <p class="mb-4 display-6">Top 20 de meilleurs mangas de tous les temps</p>
      <p>VueRouter, Typescript et Express.js</p>
      <p class="lead">
        Ce projet est une application web moderne développée avec Vue.js pour le frontend, combiné à Vue Router qui
        permet
        la gestion des routes de manière fluide et sans rechargement de page.
        L'utilisation de TypeScript renforce la robustesse du code grâce à un typage statique, facilitant la maintenance
        et la détection des erreurs en amont.
        Vue Router permet de créer une application monopage (SPA), où les différentes pages de l'application sont gérées
        dynamiquement tout en gardant une navigation rapide et fluide.
        Le frontend interagit avec un backend Express.js, qui gère les requêtes API à travers des endpoints bien
        définis.
        Ces endpoints permettent au backend de recevoir des requêtes, traiter les données, et renvoyer les résultats
        sous
        forme de JSON.
        La séparation entre le frontend et le backend permet une architecture modulaire, facilitant l'ajout de nouvelles
        fonctionnalités ou de nouveaux services à l'application.
        L'Express.js utilisé pour gérer les routes API assure un traitement asynchrone efficace, tout en s'intégrant
        facilement avec des bases de données ou services externes.
        Grâce à Vue.js et TypeScript, le code est organisé en composants modulaires et facilement réutilisables, tout en
        utilisant les interfaces pour structurer les données.
        Vue Router, quant à lui, gère les différentes vues de l'application, offrant une navigation instantanée entre
        les
        pages.
        L'ensemble du projet est conçu selon les meilleures pratiques de développement, garantissant performance,
        sécurité, et évolutivité.
      </p>
      <p class="link"><a href="">Voir le code source sur github</a></p>
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
a {
  text-decoration: none !important;
}

.text-container {
  background-color: rgba(7, 59, 76);
  padding: 20px;
  color: #fff;
  border-radius: 10px;
}

.text-container h1 {
  color: rgb(58, 12, 163);
}

.text-container .link {
  padding: 20px;
  background-color: azure;
  text-decoration: none !important;
  max-width: 250px;
  font-weight: bold;
  border-radius: 20px;
}
</style>