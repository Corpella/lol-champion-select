<script lang="ts" setup>
import { computed, PropType } from "vue"

import { ChampionPortrait, Phase, Side } from "~/championSelect"

import HoverIcon from "./icons/HoverIcon.vue"
import BanIcon from "./icons/BanIcon.vue"
defineProps({
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
<template>
    <button class="relative" :disabled="disabled || selected">
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
            <span class="text-center text-sm" v-if="!hideName">{{ champion?.name }}</span>
            <div
                v-if="selected && phase === 'pick'"
                class="overlay absolute top-0 left-1/2 z-50 aspect-square -translate-x-1/2 cursor-pointer rounded-full border-2 border-yellow-400"
            />
            <HoverIcon
                v-if="selected"
                class="absolute top-0 left-1/2 z-50 -translate-x-1/2 cursor-pointer"
                :width="imageSize"
                :color="phase === 'ban' ? '#b91c1c' : '#fbbf24'"
            />
            <BanIcon
                v-if="selected && phase === 'ban'"
                class="absolute top-0 left-1/2 z-50 -translate-x-1/2 cursor-pointer"
                :width="imageSize"
                :color="'#b91c1c'"
            />
        </div>
    </button>
</template>

<style lang="scss" scoped>
.overlay {
    width: v-bind(imageSizePx);
}
</style>
