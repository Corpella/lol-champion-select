<template>
    <div class="absolute w-full min-h-screen h-full">
        <img
            class="absolute w-full h-full image"
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

        <div class="absolute w-full h-full -z-10" :class="`blur-${phase}`"></div>
    </div>
</template>

<script lang="ts" setup>
import { Phase } from "@/types/championSelect.types"
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
<style lang="scss">
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
