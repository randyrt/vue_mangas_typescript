<template>
  <section v-if="paginatedMangas.length" class="p-2 section-un">
    <div class="container" data-aos="zoom-in">
      <h1 class="text-center text-white display-5">Populaire en ce moment selon Anilist</h1>
      <div class="mt-2" v-if="paginatedMangas.length > 0">
        <!-- Début d'une ligne de mangas -->
        <div class="row">
          <div class="mb-3 col-12 col-sm-6 col-md-4" v-for="manga in paginatedMangas" :key="manga?.id">
            <div class="p-4 card">
              <img :src="manga?.coverImage.large" class=" card-img-top anilistImage" alt="image cover "
                style="height: 250px;">
              <div class="card-body">
                <p class="text-center card-text text-primary description">{{ manga?.title.english }}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <div class="mt-2 pagination-controls d-flex justify-content-center">
      <button @click="previousPage" :disabled="currentPage === 1" class="btn btn-light me-2">Précédent</button>
      <span class="text-white fw-bold">Page {{ currentPage }} sur {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-light ms-2">Suivant</button>
    </div>
  </section>
  <section v-else class="section-deux">
    <div class="row justify-content-center align-items-center">
      <div class="col-mg-12 ">
        <h4 class="text-center text-white">Chargement en cours...</h4>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface MangaAnilist {
  id: number;
  title: {
    romaji: string;
    english: string;
  };
  coverImage: {
    large: string;
  };
  description: string;
}

export default defineComponent({
  name: 'Actus',
  setup() {
    const trendingMangas = ref<MangaAnilist[]>([]);
    const currentPage = ref(1);
    const itemsPerPage = 6;
    const router = useRouter();
    const route = useRoute();


    const fetchTrendingMangas = async () => {
      const pageFromQuery = route.query.page ? parseInt(route.query.page as string, 10) : 1;
      currentPage.value = pageFromQuery;



      const query = `
        query {
          Page(page: 1, perPage: 18) {
            media(sort: TRENDING_DESC, type: MANGA) {
              id
              title {
                english
              }
              coverImage {
                large
              }
              description
            }
          }
        }
      `;

      const url = 'https://graphql.anilist.co';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_ANILIST_API_TOKEN}`,
        },
        body: JSON.stringify({ query })
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        trendingMangas.value = data.data.Page.media
        console.log(trendingMangas.value)
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    onMounted(() => {
      fetchTrendingMangas();
    });


    const totalPages = computed(() => {
      return Math.ceil(trendingMangas.value.length / itemsPerPage);
    });

    const paginatedMangas = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return trendingMangas.value.slice(start, end);
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
      trendingMangas,
      currentPage,
      paginatedMangas,
      itemsPerPage,
      totalPages,
      nextPage,
      previousPage,
    }
  },

});

</script>

<style scoped>
.section-un {
  background-color: rgba(119, 74, 54, 0.74);
  min-height: 100vh;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  font-weight: bolder;
  color: #000 !important;
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

h1 {
  color: rgb(240, 243, 189) !important;
}

.anilistImage {
  border: 5px solid #F9968B !important;
}

.section-deux {
  padding-top: 200px;
  min-height: 100vh;
  background-color: rgba(119, 74, 54, 0.74);
}
</style>