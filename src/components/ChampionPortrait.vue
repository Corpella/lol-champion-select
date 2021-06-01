<template>
  <div>
    <img
      :class="{ grayscale: props.disabled }"
      class="mx-5"
      :src="props.value.image"
      :alt="props.value.name"
      :width="imageSize"
      :height="imageSize"
    />
    <p class="text-sm" v-if="!hideName">{{ props.value.name }}</p>
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
  },

  setup(props) {
    const imageSize = 70
    return { props, imageSize }
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
