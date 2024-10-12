<template>
  <section class="section-un">
    <div v-if="paginatedMangas.length" class="container-fluid" data-aos="zoom-in">
      <div v-for="(manga, mangaIndex) in paginatedMangas" :key="mangaIndex" class="mt-3 swiper-container">
        <div class="text-center">
          <p class="text-white fw-bold" style="font-size: 15px">{{ manga.id }} - {{ manga.titre }}</p>
          <button @click="goToDetails(manga.id)" class="mb-2 btn btn-primary">
            Voir les détails
          </button>
        </div>
        <swiper :modules="[Autoplay, Pagination, Navigation]" :slides-per-view="3" :space-between="10" class="mySwiper"
          :loop="true" :autoplay="{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }"
          :pagination="{ clickable: true }">
          <swiper-slide v-for="(image, imageIndex) in manga?.imagesManga" :key="imageIndex">
            <img :src="image" alt="Image du manga" class="image-mangas img-fluid" />
          </swiper-slide>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
    </div>

    <!-- Loader -->
    <div v-else class="container-fluid loading">
      <div class="row">
        <div class="col-12">
          <h4 class="text-center text-white">Chargement en cours...</h4>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-2 pagination-controls d-flex justify-content-center">
      <button @click="previousPage" :disabled="currentPage === 1" class="btn btn-light me-2">Précédent</button>
      <span class="text-white">Page {{ currentPage }} sur {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-light ms-2">Suivant</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/styles/pagination.css';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

interface Mangas {
  imagesManga: string[];
  id: number;
  titre: string;
}

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    const mangas = ref<Mangas[]>([]);
    const currentPage = ref(1);
    const itemsPerPage = 2;
    const router = useRouter();
    const route = useRoute();


    const goToDetails = (id: number) => {
      router.push({ name: 'Manga', params: { id }, query: { page: currentPage.value } });
    };

    onMounted(async () => {
      const pageFromQuery = route.query.page ? parseInt(route.query.page as string, 10) : 1;
      currentPage.value = pageFromQuery;

      try {
        const response = await axios.get('https://vue-mangas-api.onrender.com/api/mangas');
        mangas.value = response.data.data;
      } catch (error) {
        console.log('Erreur lors de la récupération des mangas', error);
      }
    });

    const totalPages = computed(() => {
      return Math.ceil(mangas.value.length / itemsPerPage);
    });

    const paginatedMangas = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return mangas.value.slice(start, end);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        router.replace({ query: { page: currentPage.value } });
      }
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        router.replace({ query: { page: currentPage.value } });
      }
    };

    return {
      mangas,
      paginatedMangas,
      currentPage,
      totalPages,
      nextPage,
      previousPage,
      goToDetails,
      Pagination,
      Navigation,
      Autoplay,
    };
  },
});
</script>


<style scoped>
.image-mangas {
  width: 100% !important;
  height: 290px !important;
  border: 5px solid #F9968B;
  object-fit: cover !important;
  ;
}

.section-un {
  background-color: rgba(119, 74, 54, 0.74);
}

.section-un .fw-bold {
  font-size: 1-px !important;
}

.section-un .loading {
  margin-top: 200px !important;
  min-height: 100vh;
}

.pagination-controls {
  text-align: center;
  padding: 15px;
}

.pagination-controls .text-white {
  font-weight: bold !important;
}

.btn-primary,
.btn-light {
  color: rgb(240, 243, 189) !important;
  background-color: rgb(191, 6, 3) !important;
  border: 1px solid rgb(191, 6, 3) !important;
  font-size: 15px;
  font-weight: bolder;
}

.btn-primary:hover,
.btn-light:hover {
  color: rgb(240, 243, 189) !important;
  background-color: rgba(191, 6, 3, 0.747) !important;
  border: 1px solid rgb(191, 6, 3) !important;
  font-weight: bolder;
}
</style>