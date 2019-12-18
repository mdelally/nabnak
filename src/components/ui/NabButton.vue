<template>
  <button
    :type="type"
    class="button text-white py-2 px-4 font-bold mr-1"
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

  data() {
    return {
      variants: {
        default: "bg-gray-500 hover:bg-gray-600 text-gray-100",
        defaultOutline:
          "bg-transparent hover:bg-gray-600 border-2 border-gray-500 hover:border-gray-600 text-gray-500 hover:text-gray-100",
        primary: "bg-blue-500 hover:bg-blue-600 text-blue-100",
        primaryOutline:
          "bg-transparent hover:bg-blue-600 border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-100",
        success: "bg-green-500 hover:bg-green-600 text-green-100",
        successOutline:
          "bg-transparent hover:bg-green-600 border-2 border-green-500 hover:border-green-600 text-green-500 hover:text-green-100",
        warning: "bg-yellow-500 hover:bg-yellow-600 text-yellow-100",
        warningOutline:
          "bg-transparent hover:bg-yellow-600 border-2 border-yellow-500 hover:border-yellow-600 text-yellow-500 hover:text-yellow-100",
        danger: "bg-red-500 hover:bg-red-600 text-red-100",
        dangerOutline:
          "bg-transparent hover:bg-red-600 border-2 border-red-500 hover:border-red-600 text-red-500 hover:text-red-100"
      }
    };
  },

  computed: {
    classDynamic() {
      let classes = "";

      Object.keys(this.variants).forEach(v => {
        if (v === this.variant) classes += this.variants[v];
      });

      return classes + this.utils;
    }
  }
};
</script>

<style>
.button {
  transition: all 100ms ease-in-out;
}
</style>
