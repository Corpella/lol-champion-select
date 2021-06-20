<template>
  <div class="relative">
    <img
      :class="{
        grayscale: props.disabled || selected,
        'rounded-full': props.rounded,
        'border-2 border-yellow-400': side == 'blue',
        'border-2 border-red-700': side == 'red',
        'cursor-pointer hover-effects': props.clickable,
      }"
      class="mx-5 z-10"
      :key="name"
      :src="image"
      :alt="name"
      :width="imageSize"
      :height="imageSize"
    />
    <p class="text-sm" v-if="!hideName">{{ name }}</p>
    <div
      v-if="selected"
      class="cursor-pointer absolute z-20 rounded-full border-2 border-yellow-400 mx-5 overlay"
    ></div>
    <!-- <div
      v-if="selected"
      class="cursor-pointer absolute z-20 border-2 border-yellow-400 mx-5 overlay"
    ></div> -->
    <HoverIcon
      v-if="selected"
      class="cursor-pointer absolute z-20 top-0 left-0 mx-5"
      :width="70"
      :height="70"
      :color="'#fbbf24'"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import { ChampionPortrait } from '@/types/championSelect'
import HoverIcon from './icons/HoverIcon.vue'

export default defineComponent({
  name: 'ChampionPortrait',
  components: { HoverIcon },
  props: {
    value: Object as PropType<ChampionPortrait>,
    clickable: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    hideName: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    side: {
      type: String as PropType<'blue' | 'red'>,
    },
  },

  setup(props) {
    // TODO Maybe put image size as a  prop?

    const imageSize = 70
    const imageSizePx = computed(() => `${imageSize}px`)

    return {
      props,
      name: props.value?.name,
      image: props.value?.image,
      imageSize,
      imageSizePx,
    }
  },
})
</script>

<style lang="postcss" scoped>
.grayscale {
  filter: grayscale(100%);
}
.overlay {
  width: v-bind(imageSizePx);
  height: v-bind(imageSizePx);
  top: 0;
  left: 0;
}
.hover-effects:hover {
  @apply border-2;
  @apply border-yellow-400;
}
</style>
