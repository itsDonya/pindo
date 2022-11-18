<template>
  <keep-alive>
    <label class="option">
      <input type="checkbox" :name="inputName" :value="title" v-model="model" />
      <span>{{ title }}</span>
    </label>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      model: this.modelValue,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    inputName: {
      type: String,
    },
    modelValue: {
      type: Array,
      default: "",
    },
  },
  watch: {
    model(currentVal) {
      this.$emit("update:modelValue", currentVal);
    },
  },
};
</script>
