<template>
  <base-filter @click="toggleModal">نوع آگهی</base-filter>
  <!-- Type modal  -->
  <transition>
    <keep-alive>
      <div class="modal" v-if="modalOpened">
        <span>نوع آگهی</span>
        <div>
          <input
            type="text"
            id="type-search"
            class="search-input"
            placeholder="جستجوی نوع آگهی"
          />
        </div>
        <div class="options-list">
          <div class="option">
            <input
              type="checkbox"
              v-model="selectedTypes"
              name="ads-type"
              id="sell"
              value="فروش"
            />
            <label for="sell" class="option-title">فروش</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              v-model="selectedTypes"
              name="ads-type"
              id="service"
              value="خدمات"
            />
            <label for="service" class="option-title">خدمات</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              v-model="selectedTypes"
              name="ads-type"
              id="exchange"
              value="معاوضه"
            />
            <label for="exchange" class="option-title">معاوضه</label>
          </div>
        </div>
        <button @click="filterType" id="type-submit" class="modal-button">
          فیلتر کن
        </button>
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
      selectedTypes: [],
    };
  },
  components: {
    BaseFilter,
  },
  methods: {
    toggleModal() {
      this.modalOpened = !this.modalOpened;
    },
    filterType() {
      this.$emit("filter", this.selectedTypes);
      this.toggleModal();
    },
  },
};
</script>
