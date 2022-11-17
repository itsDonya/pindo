<template>
  <base-filter id="filter-brand-btn" @click="toggleModal">برند</base-filter>
  <!-- Brands modal  -->
  <BaseModal
    :isOpened="brandModalOpened"
    filter-name="brand"
    modal-title="برند"
    :options="brands"
    @toggle="toggleModal"
    @selected="filterBrands"
  />
</template>

<script>
import BaseFilter from "../UI/BaseFilter.vue";
import BaseModal from "../UI/BaseModal.vue";
export default {
  data() {
    return {
      brandModalOpened: false,
    };
  },
  inject: ["brands"],
  components: {
    BaseModal,
    BaseFilter,
  },
  methods: {
    toggleModal() {
      this.brandModalOpened = !this.brandModalOpened;
    },
    filterBrands(brands) {
      this.$emit("filter", brands);
    },
  },
};
</script>
