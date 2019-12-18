<template>
  <button
    :type="type"
    class="button bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 font-bold rounded shadow"
    :class="classDynamic"
    @click="$emit('click')"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "NabButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    variant: {
      type: String,
      default: "default"
    },
    utils: {
      type: String,
      default: ""
    }
  },

  computed: {
    classDynamic() {
      let classes = "";

      if (this.variant === "primary") {
        classes += "bg-blue-500 hover:bg-blue-700";
      }

      if (this.variant === "success") {
        classes += "bg-green-500 hover:bg-green-700";
      }

      if (this.variant === "warning") {
        classes += "bg-yellow-500 hover:bg-yellow-700";
      }

      if (this.variant === "danger") {
        classes += "bg-red-500 hover:bg-red-700";
      }

      return classes + this.utils;
    }
  }
};
</script>

<style>
.button {
  transition: all 150ms ease-in-out;
}
</style>
