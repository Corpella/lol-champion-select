<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :stroke="iconColor"
    :width="iconWidth"
    :height="iconHeight"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'HoverIcon',
  props: {
    width: Number as PropType<number>,
    height: Number as PropType<number>,
    color: {
      type: String as PropType<string>,
      default: 'gray',
    },
  },
  setup(props) {
    return {
      iconWidth: props.width,
      iconHeight: props.height,
      iconColor: props.color,
    }
  },
})
</script>

<style></style>
