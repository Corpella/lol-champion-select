<template>
  <div class="absolute w-full min-h-screen h-full">
    <img
      class="absolute w-full h-full image"
      :src="
        props.champion && props.phase == 'pick'
          ? championStyle
          : 'https://i.imgur.com/2Qyocz8.png'
      "
    />
    <!-- <img
      v-else
      class="absolute w-full h-full image"
      src="../assets/images/SummonersRift.png"
      alt="summonersRift"
    /> -->
    <!-- <img
      v-else
      class="absolute w-full h-full image"
      src="https://i.imgur.com/2Qyocz8.png"
      alt="summonersRift"
    /> -->

    <div
      class="absolute w-full h-full"
      :class="`blur-${props.phase}`"
      style="z-index: -1;"
    ></div>
  </div>
</template>

<script lang="ts">
import { Phase } from '@/types/championSelect'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Background',
  props: {
    champion: String,
    phase: { type: String as PropType<Phase>, required: true },
  },
  setup(props) {
    const championStyle = computed(
      () =>
        `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/backgrounds/${props.champion?.toLowerCase()}.jpg`
    )

    return {
      props,
      championStyle,
    }
  },
})
</script>
<style lang="postcss">
.image {
  z-index: -10;
  filter: brightness(40%);
}
.blur-pick {
  z-index: -1;
  background: -webkit-radial-gradient(circle, transparent, rgb(14, 12, 44));
}
.blur-ban {
  z-index: -1;
  background: -webkit-radial-gradient(
    circle,
    transparent,
    rgba(70, 14, 14, 0.87)
  );
}
</style>
