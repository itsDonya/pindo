<template>
  <AppFilters :brands="brands" @filter="filterProducts" />
  <!-- Food products -->
  <section class="flex w-full flex-wrap items-center gap-4">
    <BaseProduct
      v-for="(product, i) in filtered"
      :key="i"
      v-bind="product"
      @filter="filterProducts"
    />
  </section>
</template>

<script>
import BaseProduct from "../components/UI/BaseProduct.vue";
import AppFilters from "../components/filters/AppFilters.vue";
export default {
  components: {
    BaseProduct,
    AppFilters,
  },
  data() {
    return {
      brands: ["ماهوند", "کاجینو", "فروشگاه جوان"],

      products: [
        {
          title: "گلاب درجه یک (ماهوند)",
          price: 30000,
          shareTime: "چند ساعت پیش",
          shopName: "عرقیات گیاهی و گلاب (ماهوند)",
          image:
            "https://dkstatics-public.digikala.com/digikala-c2c-advertisements/a2eb66ecebcbaf0d97457cb7e9e8681b1102d5d4_1667242093.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          city: "تهران",
          adsType: "خدمات",
          brand: "ماهوند",
        },
        {
          title: "قهوه میکس",
          price: 200000,
          shareTime: "2 ماه پیش",
          shopName: "کاجینو",
          image:
            "https://dkstatics-public.digikala.com/digikala-c2c-advertisements/175baebc81e465cd899d3c18a5ba0b0e10c0e168_1661873136.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          city: "اصفهان",
          adsType: "معاوضه",
          brand: "کاجینو",
        },
        {
          title: "نوشیدنی ورزشی داینامین",
          price: 180000,
          shareTime: "3 روز پیش",
          shopName: "فروشگاه جوان",
          image:
            "https://dkstatics-public.digikala.com/digikala-c2c-advertisements/35a9f24deed2d44adf9cfd7cfeb11b1143c39379_1666972506.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          city: "کرج",
          adsType: "فروش",
          brand: "جوان",
        },
      ],
      filtered: [],
    };
  },

  created() {
    this.filtered = [...this.products];
  },
  methods: {
    filterProducts(brands) {
      // Check all of the products if it contains the selected brand or not
      if (brands.length > 0) {
        this.filtered.length = 0;
        this.products.forEach((prod) => {
          for (let i in brands) {
            if (prod["brand"] === brands[i]) {
              this.filtered.push(prod);
            }
          }
        });
      } else {
        // check if nothing selected, show all products
        this.filtered = [...this.products];
      }
    },
  },
};
</script>
