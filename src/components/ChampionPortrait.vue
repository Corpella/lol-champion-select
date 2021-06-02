<template>
  <div>
    <img
      :class="{
        grayscale: props.disabled,
        'rounded-full': props.rounded,
        'border-2 border-yellow-400': side == 'blue',
        'border-2 border-red-700': side == 'red',
      }"
      class="mx-5"
      :key="name"
      :src="image"
      :alt="name"
      :width="imageSize"
      :height="imageSize"
    />
    <p class="text-sm" v-if="!hideName">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { ChampionPortrait } from '../types'

export default defineComponent({
  name: 'ChampionPortrait',
  props: {
    value: Object as PropType<ChampionPortrait>,
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
    side: {
      type: String as PropType<'blue' | 'red'>,
    },
  },

  setup(props) {
    const imageSize = 70
    return {
      props,
      name: props.value?.name,
      image: props.value?.image,
      imageSize,
    }
  },
})
</script>

<style lang="scss" scoped>
.grayscale {
  filter: grayscale(100%);
}
.champ-portrait {
  width: 70px;
}
</style>
