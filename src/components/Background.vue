<template>
  <div class="absolute w-full min-h-screen h-full background-image" />
</template>

<script lang="ts">
import { Phase } from '@/types/championSelect'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Background',
  props: {
    phase: String as PropType<Phase>,
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>
<style lang="scss">
.background-image {
  z-index: -1;
  background-image: -webkit-radial-gradient(
      circle,
      transparent,
      rgb(21, 18, 71)
    ),
    url('../assets/images/SummonersRift.png');
  background-size: cover;
  filter: brightness(40%);
}
</style>
