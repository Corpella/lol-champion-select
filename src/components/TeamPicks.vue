<template>
    <div class="mt-5 flex w-full flex-col" :class="side == 'blue' ? 'ml-10 self-start pr-10' : 'mr-10 self-end pl-10'">
        <Divider rhombus-visible :side="side" />
        <div v-for="i in 5" :key="i">
            <div class="flex" :class="{ 'flex-row-reverse': position == 'right' }">
                <template v-if="champions && champions[i - 1]">
                    <div>
                        <ChampionsPortrait hideName rounded :value="champions[i - 1]" :side="side" />
                    </div>
                    <div class="self-center">
                        <p class="font-bold">
                            {{ firstLetterUppercase(champions[i - 1].name) }}
                        </p>
                        <p class="">Summoner {{ i }}</p>
                    </div>
                </template>
                <template v-else>
                    <div
                        class="mx-5 aspect-square w-20 rounded-full bg-black"
                        :class="{
                            'border-2 border-yellow-400': side == 'blue',
                            'border-2 border-red-700': side == 'red',
                        }"
                    />
                    <div class="self-center">
                        <p class="font-bold">Something...</p>
                        <p class="">Summoner {{ i }}</p>
                    </div>
                </template>
            </div>
            <Divider rhombus-visible :side="side" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"

import { Side, Champions, Position } from "@/types/championSelect.types"
import ChampionsPortrait from "./ChampionPortrait.vue"
import Divider from "./Divider.vue"

defineProps({
    side: String as PropType<Side>,
    position: String as PropType<Position>,
    champions: Array as PropType<Champions>,
})

const firstLetterUppercase = (name: string): string => name.charAt(0).toUpperCase() + name.slice(1)
</script>
