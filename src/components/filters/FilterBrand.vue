<template>
  <base-filter class="test" @click="toggleModal">برند</base-filter>
  <!-- Brands modal  -->
  <transition>
    <keep-alive>
      <div class="modal" v-if="modalOpened">
        <span>برند</span>
        <div>
          <input
            type="text"
            id="brand-search"
            class="search-input"
            placeholder="جستجوی برند"
          />
        </div>
        <div class="options-list">
          <div class="option">
            <input
              type="checkbox"
              v-model="selectedBrands"
              name="brand-name"
              id="mahvand"
              value="ماهوند"
            />
            <label for="mahvand" class="option-title">ماهوند</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              v-model="selectedBrands"
              name="brand-name"
              id="cajino"
              value="کاجینو"
            />
            <label for="cajino" class="option-title">کاجینو</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              v-model="selectedBrands"
              name="brand-name"
              id="javan"
              value="جوان"
            />
            <label for="javan" class="option-title">جوان</label>
          </div>
        </div>
        <router-link
          :to="{ path: '/foodstuff', query: { brand: this.selectedBrands } }"
          @click="filterBrand"
          id="brand-submit"
          class="modal-button"
        >
          فیلتر کن
        </router-link>
      </div>
    </keep-alive>
  </transition>
</template>

<script>
import BaseFilter from "../UI/BaseFilter.vue";
export default {
  data() {
    return {
      modalOpened: false,
      selectedBrands: [],
    };
  },
  components: {
    BaseFilter,
  },
  methods: {
    toggleModal() {
      this.modalOpened = !this.modalOpened;
    },
    filterBrand() {
      this.toggleModal(), this.$emit("filter", this.selectedBrands);
    },
  },
};
</script>
