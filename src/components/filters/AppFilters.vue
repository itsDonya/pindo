<template>
  <header class="flex p-4 gap-2 flex-wrap">
    <base-filter class="flex items-center justify-center">
      <img
        class="w-5"
        src="../../assets/img/category-icon.png"
        alt="Category Icon"
      />
      <p>دسته‌بندی‌های مواد غذایی</p>
    </base-filter>

    <!-- Brand modal -->
    <base-filter>
      <p @click="toggleBrandModal">برند</p>
      <transition>
        <keep-alive>
          <BrandModal
            v-if="modals.brand"
            @filter="filter"
            @toggle="toggleBrandModal"
          />
        </keep-alive>
      </transition>
    </base-filter>

    <base-filter>نوع آگهی</base-filter>

    <base-filter>وضعیت کالا</base-filter>
    <base-filter>قیمت</base-filter>
    <base-filter>فقط پرداخت امن</base-filter>
    <base-filter>فقط عکس‌دار</base-filter>
    <base-filter>فقط فروشگاهی</base-filter>
  </header>
</template>

<script>
import BaseFilter from "./BaseFilter.vue";
// Modals
import BrandModal from "../modals/BrandModal.vue";
export default {
  data() {
    return {
      // Check modals are opened(true) or not(false)
      modals: {
        brand: false,
        adsType: false,
      },
    };
  },
  components: {
    BaseFilter,
    BrandModal,
  },
  props: {
    brands: {
      type: Array,
    },
  },
  methods: {
    toggleBrandModal() {
      this.modals.brand = !this.modals.brand;
    },
    filter(brands) {
      this.$emit("filter", brands);
      this.toggleBrandModal();
    },
  },
};
</script>
