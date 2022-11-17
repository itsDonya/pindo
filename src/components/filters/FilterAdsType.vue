<template>
  <base-filter id="filter-type-btn" @click="toggleModal">نوع آگهی</base-filter>
  <!-- Ads types modal -->
  <BaseModal
    :isOpened="typeModalOpened"
    filter-name="type"
    modal-title="نوع آگهی"
    :options="adsTypes"
    @toggle="toggleModal"
    @selected="filterTypes"
  />
</template>

<script>
import BaseFilter from "../UI/BaseFilter.vue";
import BaseModal from "../UI/BaseModal.vue";
export default {
  data() {
    return {
      typeModalOpened: false,
    };
  },
  inject: ["adsTypes"],
  components: {
    BaseFilter,
    BaseModal,
  },
  methods: {
    toggleModal() {
      this.typeModalOpened = !this.typeModalOpened;
    },
    filterTypes(types) {
      this.$emit("filter", types);
    },
  },
};
</script>
