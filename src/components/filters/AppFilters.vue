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
    <base-filter>برند</base-filter>
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
export default {
  components: {
    BaseFilter,
  },
  props: {
    brands: {
      type: Array,
    },
  },
};
</script>
