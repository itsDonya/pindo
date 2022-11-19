<template>
  <section class="relative flex items-center gap-2 w-full p-4">
    <keep-alive>
      <component
        v-for="(filter, i) in usedFilters"
        :key="i"
        :is="'Filter' + filter"
        @filter="sendSelectedFilters"
      ></component>
    </keep-alive>
  </section>
</template>

<script>
// Filters
import FilterBrand from "./FilterBrand.vue";
import FilterAdsType from "./FilterAdsType.vue";
export default {
  data() {
    return {
      filters: { brand: [], adsType: [] },
    };
  },
  props: {
    usedFilters: {
      type: Array,
      required: true,
    },
  },
  components: {
    FilterBrand,
    FilterAdsType,
  },
  methods: {
    sendSelectedFilters(filters) {
      // get the filter name to work with filters' keys (in data)
      const filterName = Object.keys(filters)[0]; //(example = brand)
      this.filters[filterName] = filters[filterName];
      this.$emit("filter", this.filters);
    },
  },
};
</script>
