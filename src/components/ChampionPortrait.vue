<template>
    <div class="relative">
        <div class="flex w-full flex-col justify-center">
            <img
                class="z-10 aspect-square self-center"
                :class="[
                    {
                        grayscale: disabled || selected,
                        'rounded-full': rounded,
                        'border-2 border-yellow-400': side == 'blue',
                        'border-2 border-red-700': side == 'red',
                        'border border-red-700': phase == 'ban',
                    },
                    clickable && phase && `cursor-pointer hover-effects${phase}`,
                ]"
                :key="champion?.name"
                :src="champion?.image"
                :alt="champion?.name"
                :width="imageSize"
            />
            <p class="text-center text-sm" v-if="!hideName">{{ champion?.name }}</p>
            <div
                v-if="selected && phase == 'pick'"
                class="overlay absolute top-0 left-1/2 z-50 aspect-square -translate-x-1/2 cursor-pointer rounded-full border-2 border-yellow-400"
            />
            <HoverIcon
                :width="imageSize"
                v-if="selected"
                class="absolute top-0 left-1/2 z-50 -translate-x-1/2 cursor-pointer"
                :color="phase == 'ban' ? '#b91c1c' : '#fbbf24'"
            />
            <BanIcon
                :width="imageSize"
                v-if="selected && phase == 'ban'"
                class="absolute top-0 left-1/2 z-50 -translate-x-1/2 cursor-pointer"
                :color="'#b91c1c'"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue"

import { ChampionPortrait, Phase, Side } from "@/types/championSelect.types"

import HoverIcon from "./icons/HoverIcon.vue"
import BanIcon from "./icons/BanIcon.vue"

const props = defineProps({
    champion: Object as PropType<ChampionPortrait>,
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
})

//TODO: find a way to handle portrait and overlays size better
const imageSize = 80
const imageSizePx = computed(() => `${imageSize}px`)
</script>

<style lang="scss" scoped>
.overlay {
    width: v-bind(imageSizePx);
}
</style>
