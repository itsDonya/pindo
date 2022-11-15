<template>
  <button
    class="text-xs md:text-sm text-slate-600 border border-zinc-300 rounded-full px-4 py-1 cursor-pointer focus:outline-none"
    @click="filterProducts"
  >
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    filterProducts() {
      this.$emit("filter-products");
    },
  },
};
</script>
