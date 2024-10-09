<template>
  <h1>{{ count }}</h1>
</template>




<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 1
    }
  }

});

</script>