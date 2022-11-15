<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import FoodStuff from "./pages/FoodStuff.vue";
export default {
  components: {
    FoodStuff,
  },
};
</script>
