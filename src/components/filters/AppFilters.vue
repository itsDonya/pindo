<template>
  <section class="relative flex items-center gap-2 w-full p-4">
    <!-- <FilterBrand @filter="filterBrands" />
    <FilterAdsType @filter="filterTypes" /> -->
    <FilterBrand @filter="filterBrands" />
    <FilterAdsType @filter="filterTypes" />
  </section>
</template>

<script>
// Filters
import FilterBrand from "./FilterBrand.vue";
import FilterAdsType from "./FilterAdsType.vue";
export default {
  data() {
    return {
      filters: [{ brand: [] }, { adsType: [] }],
    };
  },
  components: {
    FilterBrand,
    FilterAdsType,
  },
  methods: {
    filterBrands(brands) {
      this.filters.brand = brands;
      this.filter();
    },
    filterTypes(types) {
      this.filters.adsType = types;
      this.filter();
    },
    filter() {
      this.$emit("filter", this.filters);
    },
  },
};
</script>
