<template>
  <transition>
    <!-- <keep-alive> -->
    <div class="modal" v-if="isOpened">
      <span>{{ modalTitle }}</span>
      <div>
        <input
          type="text"
          :id="filterName + '-search'"
          class="search-input"
          :placeholder="'جستجوی ' + modalTitle"
        />
      </div>
      <div class="options-list">
        <BaseCheckbox
          v-for="(option, i) in options"
          :key="i"
          :title="option"
          :inputName="filterName + '_name'"
          v-model="selectedOptions"
        />
      </div>
      <button @click="filter" class="modal-button">فیلتر کن</button>
    </div>
    <!-- </keep-alive> -->
  </transition>
</template>

<script>
import BaseFilter from "../UI/BaseFilter.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
export default {
  data() {
    return {
      selectedOptions: [],
    };
  },
  components: {
    BaseFilter,
    BaseCheckbox,
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
    filterName: {
      type: String,
      required: true,
    },
    modalTitle: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    filter() {
      this.$emit("selected", this.selectedOptions);
      this.$emit("toggle");
    },
    closeModalOnClickOutide() {
      const body = document.querySelector("body");
      body.addEventListener("click", (e) => {
        if (this.isOpened) {
          if (
            !e.target.closest(".modal") &&
            !e.target.closest("#filter-" + this.filterName + "-btn")
          ) {
            this.modalOpened = false;
            this.$emit("toggle");
          }
        }
      });
    },
  },
  created() {
    this.closeModalOnClickOutide();
  },
};
</script>
