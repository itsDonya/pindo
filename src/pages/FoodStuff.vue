<template>
  <AppFilters @filter="filterProducts" />
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
  provide() {
    return {
      brands: this.brands,
      adsTypes: this.adsTypes,
    };
  },
  created() {
    this.filtered = [...this.products];
  },
  computed: {
    brands() {
      let brands = [];
      this.products.forEach((prod) => {
        const brand = prod.brand;
        if (brands.indexOf(brand) === -1) {
          brands.push(brand);
        }
      });
      return brands;
    },
    adsTypes() {
      let types = [];
      this.products.forEach((prod) => {
        const type = prod.adsType;
        if (types.indexOf(type) === -1) {
          types.push(type);
        }
      });
      return types;
    },
  },
  methods: {
    filterProducts(filters) {
      // Make filtered products list empty
      this.filtered.length = 0;

      const keys = Object.keys(filters);

      this.products.forEach((prod) => {
        for (let i in keys) {
          // Identify keys: because they're gonna be compared with the same name keys in products
          const key = keys[i];
          if (filters[key]) {
            if (filters[key].includes(prod[key])) {
              // Check if the product haven't be added before, then push it
              if (this.filtered.indexOf(prod) === -1) {
                this.filtered.push(prod);
              }
            }
          }
        }
      });

      // If nothing selected, show all products
      if (this.filtered.length === 0) {
        this.filtered = [...this.products];
      }
    },
  },
};
</script>
