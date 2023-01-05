<script lang="ts" setup>
import { Phase } from "~/championSelect"
import { computed, PropType } from "vue"

const props = defineProps({
    champion: String,
    phase: { type: String as PropType<Phase>, required: true },
})

//TODO: find a better way to handle champion background
const championStyle = computed(
    () =>
        `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/backgrounds/${props.champion?.toLowerCase()}.jpg`,
)
</script>
<template>
    <div class="absolute h-full min-h-screen w-full">
        <img
            class="image absolute h-full w-full"
            :src="champion && phase == 'pick' ? championStyle : 'https://i.imgur.com/2Qyocz8.png'"
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

        <div class="absolute -z-10 h-full w-full" :class="`blur-${phase}`"></div>
    </div>
</template>

<style lang="scss" scoped>
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
    background: -webkit-radial-gradient(circle, transparent, rgba(70, 14, 14, 0.87));
}
</style>
