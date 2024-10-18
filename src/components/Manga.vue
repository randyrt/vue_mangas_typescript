<template>
  <main v-if="manga">
    <section class="mt-4 section-un">
      <div class="container-fluid" data-aos="zoom-in">
        <swiper :modules="[Autoplay, Pagination, Navigation]" :slides-per-view="3" :space-between="10" class="mySwiper"
          :loop="true" :autoplay="{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }">

          <swiper-slide v-for="(image, index) in manga?.imagesManga" :key="index">
            <img :src="image" alt="Image du manga" class="image-manga img-fluid" />
          </swiper-slide>

          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
    </section>
    <section class="section-deux" data-aos="zoom-in">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="shadow-sm card infos">
              <div class="text-center text-white card-header bg-card">
                <h4>{{ manga?.titre || "Titre non disponible" }}</h4>
              </div>
              <div class="card-body information">
                <div class="row">
                  <div class="text-center col-lg-3">
                    <img :src="manga?.imagesCreateur" alt="Créateur de l'image" class="creator">
                  </div>
                  <div class="col-lg-9">
                    <p>
                      <strong> Créateur :</strong>
                      <a v-if="manga?.createur" :href="manga?.link" target="_blank" class="ml-3">
                        <strong></strong> {{ manga.createur }}
                      </a>
                    </p>

                    <p v-if="manga?.dateDeSortie" class="mb-3">
                      <strong>Date de sortie :</strong> {{ manga.dateDeSortie }}
                    </p>

                    <p v-if="manga?.nombreDeSaisons" class="mb-3">
                      <strong>Nombre de saison :</strong> {{ manga.nombreDeSaisons }}
                    </p>

                    <p v-if="manga?.resume" class="mb-3">
                      <strong>Résumé :</strong> {{ manga.resume }}
                    </p>
                    <p v-else class="text-danger">Informations non disponibles...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 row d-flex justify-content-center back">
        <div class="text-center col-12">
          <button @click="goToMangasList" class="mt-2 mb-2 btn btn-primary">Retour</button>
        </div>
      </div>
    </section>
  </main>
  <main v-else>
    <section class="section-trois">
      <div class="container-fluid loadpage">
        <div class="row justify-content-center align-items-center">
          <div class="col-12">
            <h4 class="text-center text-white">Chargement en cours...</h4>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRoute, useRouter } from 'vue-router';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios';

interface MangasApi {
  id: number;
  titre: string;
  createur: string;
  dateDeSortie: string;
  link: string;
  secondLink: string;
  nombreDeSaisons: number;
  imagesManga: string[];
  imagesCreateur: string;
  resume: string;
  dateDecreation: string;
  time: string;
}

export default defineComponent({
  name: 'Manga',
  components: { Swiper, SwiperSlide },

  setup() {
    const manga = ref<MangasApi>();


    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;

    const goToMangasList = () => {
      const currentPage = route.query.page || 1;
      router.push({ name: 'Mangas', query: { page: currentPage } });
    };

    onMounted(async () => {
      try {
        const response = await axios.get(`https://vuemangasapi-production.up.railway.app/api/mangas/${id}`);
        manga.value = response.data.data
        console.log(manga.value)
        console.log(manga.value)
      } catch (error) {
        console.error('Erreur lors de la récupération du manga', error);
      }
    });

    return { manga, Pagination, Navigation, Autoplay, goToMangasList };
  },
});
</script>

<style>
main {
  min-height: 100vh;
}

a {
  text-decoration: none !important;

  color: aquamarine;
}

a:hover {
  color: greenyellow;
}



.image-manga {
  width: 100% !important;
  height: 290px !important;
  border: 5px solid #F9968B;
  object-fit: cover !important;
}


.card-header {
  background-color: #007bff;
  color: rgb(240, 243, 189) !important;
}

.section-deux {
  padding: 30px;
}

.section-deux .information {
  padding: 20px;
}

.section-deux .bg-card {
  background-color: rgba(119, 74, 54, 0.527);
}

.section-deux h4 {
  color: rgb(191, 6, 3);
  ;
}

.section-deux strong {
  color: #000;
}

.section-deux p {
  color: rgb(240, 243, 189) !important;
  font-size: 17px;
  font-weight: bold
}


.section-deux .infos {
  background-color: rgba(119, 74, 54, 0.74);
}

.bg-card h4 {
  color: rgb(240, 243, 189) !important;
}

.creator {
  margin-top: 5px;
  border-radius: 5px;
  width: 280px;
  height: 300px;
  border: 5px solid #F9968B;
}

.back .btn-primary {
  padding: 10px;
  background-color: rgb(191, 6, 3) !important;
  color: rgb(240, 243, 189) !important;
  font-weight: bold !important;
  border: 1px solid rgb(191, 6, 3) !important;
  width: 120px;
}

.back .btn-primary:hover {
  padding: 10px;
  background-color: rgba(191, 6, 3, 0.74) !important;
  color: rgb(240, 243, 189) !important;
  border: 1px solid rgb(191, 6, 3) !important;
  width: 120px;
}

.section-trois {
  background-color: rgba(119, 74, 54, 0.527);
}

.section-trois .loadpage {
  margin-top: 10px;
  padding-top: 200px;
  min-height: 100vh;
}
</style>
