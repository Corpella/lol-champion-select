<script lang="ts" setup>
import { PropType } from "vue"

import { Side, Champions, Position } from "~/championSelect"
import ChampionsPortrait from "./ChampionPortrait.vue"
import Divider from "./Divider.vue"

defineProps({
    side: String as PropType<Side>,
    position: String as PropType<Position>,
    champions: Array as PropType<Champions>,
})

const firstLetterUppercase = (name: string): string => name.charAt(0).toUpperCase() + name.slice(1)
</script>

<template>
    <div class="flex w-full flex-col pt-5" :class="side === 'blue' ? 'self-start pl-10 pr-10' : 'self-end pr-10 pl-10'">
        <Divider rhombus-visible :side="side" />
        <template v-for="i in 5" :key="i">
            <div class="flex" :class="{ 'flex-row-reverse': position === 'right' }">
                <ChampionsPortrait v-if="champions?.[i - 1]" hideName rounded :value="champions[i - 1]" :side="side" />
                <div
                    v-else
                    class="mx-5 aspect-square w-20 rounded-full bg-black"
                    :class="{
                        'border-2 border-yellow-400': side == 'blue',
                        'border-2 border-red-700': side == 'red',
                    }"
                />
                <div class="self-center">
                    <h2 class="font-bold">
                        {{ champions?.[i - 1] ? firstLetterUppercase(champions[i - 1].name) : "Something..." }}
                    </h2>
                    <h2 class="">Summoner {{ i }}</h2>
                </div>
            </div>
            <Divider rhombus-visible :side="side" />
        </template>
    </div>
</template>
