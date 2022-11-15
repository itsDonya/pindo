<template>
  <div class="w-60 p-4 rounded-lg shadow-xl flex flex-col items-start gap-2">
    <div class="w-8/12 h-44 mx-auto rounded-lg overflow-hidden">
      <img :src="image" :alt="title" class="w-full min-h-full" />
    </div>
    <h3 class="my-2">{{ title }}</h3>
    <p class="font-bold text-sm">{{ price }} تومان</p>
    <div
      class="flex justify-between items-center gap-1.5 text-xs text-gray-400"
    >
      <p>{{ shareTime }}</p>
      <span class="block w-1 h-1 bg-zinc-300 rounded-full"></span>
      <p>{{ city }}</p>
    </div>
    <p class="font-bold text-sm">{{ shopName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      qreuired: true,
    },
    shareTime: {
      type: String,
      default: "مدتی پیش",
    },
    city: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
    },
  },
};
</script>
