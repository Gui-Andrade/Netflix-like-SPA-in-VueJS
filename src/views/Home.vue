<template>
  <div>
    <AllMovies/>
  </div>
</template>

<script>
import AllMovies from "@/components/AllMovies.vue";
export default {
  name: "Home",
  props: {},
  components: {
    AllMovies
  }
};
</script>

<style scoped>
</style>
