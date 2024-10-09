<template>
  <section class="mt-3 section-un">
    <div class="container-fluid">
      <swiper :modules="[Autoplay]" :slides-per-view="2" :space-between="30" class="mySwiper" :loop="true"
        :autoplay="{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }">
        <swiper-slide>
          <img v-if="manga?.imagesManga1" :src="manga.imagesManga1" alt="Image du manga" class="image-manga" />
        </swiper-slide>
        <swiper-slide>
          <img v-if="manga?.imagesManga2" :src="manga.imagesManga2" alt="Image du manga" class="image-manga" />
        </swiper-slide>
        <swiper-slide>
          <img v-if="manga?.imagesManga3" :src="manga.imagesManga3" alt="Image du manga" class="image-manga" />
        </swiper-slide>
        <swiper-slide>
          <img v-if="manga?.imagesManga4" :src="manga.imagesManga4" alt="Image du manga" class="image-manga" />
        </swiper-slide>
        <swiper-slide>
          <img v-if="manga?.imagesManga5" :src="manga.imagesManga5" alt="Image du manga" class="image-manga" />
        </swiper-slide>
        <swiper-slide>
          <img v-if="manga?.imagesManga6" :src="manga.imagesManga6" alt="Image du manga" class="image-manga" />
        </swiper-slide>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
    </div>
  </section>
  <section class="section-deux">
    <div class="mt-2 container-fluid ">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="shadow-sm card infos">
            <div class="text-center text-white card-header bg-card">
              <h4>{{ manga?.titre ? manga.titre : "Titre non disponible" }}</h4>
            </div>
            <div class="card-body">
              <p class="my-4">
                <strong> Créateur :</strong>
                <a v-if="manga?.createur" href="https://fr.wikipedia.org/wiki/Masashi_Kishimoto" target="_blank"
                  class="ml-3">
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
              <p v-if="manga?.dateDecreation" class="mb-3">
                <strong>Date de création :</strong> {{ manga.dateDecreation }}
              </p>
              <p v-if="manga?.time" class="mb-3">
                <strong>Heure de création :</strong> {{ manga.time }}
              </p>
              <p v-else class="text-danger">Informations non disponibles...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/styles/pagination.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios'

interface Manga {
  id: number;
  titre: string;
  createur: string;
  dateDeSortie: string;
  nombreDeSaisons: number;
  imagesManga1: string;
  imagesManga2: string;
  imagesManga3: string;
  imagesManga4: string;
  imagesManga5: string;
  imagesManga6: string;
  imagesCreateur: string;
  resume: string;
  dateDecreation: string;
  time: string;
}

export default defineComponent({

  setup() {
    const mangas = ref<Manga[]>([])
    const manga = ref<Manga>()

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/mangas/1')
        manga.value = response.data.data
        console.log(manga.value)
      } catch (error) {
        console.log('Erreur lors de la récupération du message', error)
      }
    });
    return { mangas, manga, Pagination, Navigation, Autoplay }
  },


  name: 'About',
  components: { Swiper, SwiperSlide },
  data() {
    return {

    }
  },
  mounted() {

  },
});

</script>

<style>
.image-manga {
  width: 100% !important;
  height: 380px !important;
  border-radius: 10px;
}

.card-header {
  background-color: #007bff;
  color: white;
}

.section-deux {
  margin-bottom: 100px !important;
}

.section-deux .bg-card {
  background-color: rgb(114, 9, 183);
}

.section-deux p,
.section-deux strong {
  color: white;
  font-size: 17px;
}

.section-deux .infos {
  background-color: rgba(7, 59, 76);
}
</style>