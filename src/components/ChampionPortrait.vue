<template>
  <div class="relative">
    <img
      :class="[
        {
          grayscale: props.disabled || selected,
          'rounded-full': props.rounded,
          'border-2 border-yellow-400': side == 'blue',
          'border-2 border-red-700': side == 'red',
          'border border-red-700': props.phase == 'ban',
        },
        hoverBorder,
      ]"
      class="mx-5 z-10"
      :key="name"
      :src="image"
      :alt="name"
      :width="imageSize"
      :height="imageSize"
    />
    <p class="text-sm" v-if="!hideName">{{ name }}</p>
    <div
      v-if="selected && gamePhase == 'pick'"
      class="absolute top-0 left-0 cursor-pointer rounded-full border-2 border-yellow-400 mx-5 overlay"
    />
    <!-- <div
      v-if="selected"
      class="cursor-pointer absolute z-20 border-2 border-yellow-400 mx-5 overlay"
    ></div> -->
    <HoverIcon
      :width="imageSize"
      :height="imageSize"
      v-if="selected"
      class="cursor-pointer absolute top-0 left-0 mx-5"
      :color="gamePhase == 'ban' ? '#b91c1c' : '#fbbf24'"
    />
    <BanIcon
      :width="imageSize"
      :height="imageSize"
      v-if="selected && gamePhase == 'ban'"
      class="cursor-pointer absolute top-0 left-0 mx-5"
      :color="'#b91c1c'"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import { ChampionPortrait, Phase, Side } from '@/types/championSelect'

import HoverIcon from './icons/HoverIcon.vue'
import BanIcon from './icons/BanIcon.vue'

export default defineComponent({
  name: 'ChampionPortrait',
  components: { HoverIcon, BanIcon },
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
    side: String as PropType<Side>,
    phase: String as PropType<Phase>,
  },

  setup(props) {
    // TODO Maybe put image size as a  prop?

    const imageSize = 80
    const imageSizePx = computed(() => `${imageSize}px`)

    const hoverBorder = computed(() =>
      props.clickable
        ? `cursor-pointer hover-effects${props.phase ? '-' + props.phase : ''}`
        : ''
    )

    return {
      props,
      name: props.value?.name,
      image: props.value?.image,
      gamePhase: props.phase,
      hoverBorder,
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
}
.hover-effects-pick:hover {
  @apply border-2 border-yellow-400;
}
.hover-effects-ban:hover {
  @apply border-2 border-red-700;
}
</style>
