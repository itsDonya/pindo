<template>
  <section class="relative flex items-center gap-2 w-full p-4">
    <FilterBrand @filter="filterBrands" />
    <FilterAdsType />
  </section>
</template>

<script>
// Filters
import FilterBrand from "./FilterBrand.vue";
import FilterAdsType from "./FilterAdsType.vue";
export default {
  components: {
    FilterBrand,
    FilterAdsType,
  },
  methods: {
    filterBrands(brands) {
      this.$emit("filter", brands);
    },
  },
};
</script>
