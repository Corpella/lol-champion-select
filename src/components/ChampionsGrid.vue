<template>
    <div class="w-full px-5" v-if="champions?.length">
        <div id="cs-container" class="grid h-[65vh] auto-rows-max grid-cols-6 gap-1 overflow-y-scroll pt-3">
            <div v-for="(c, i) in champions" :key="i" class="max-h-[6rem]">
                <ChampionsPortrait
                    clickable
                    :key="c.name"
                    :phase="phase"
                    :selected="c.id == hoveredChampion"
                    :disabled="isChampBanned(c.id)"
                    :champion="{
                        name: c.name,
                        image: `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${c.id.toLowerCase()}.png`,
                    }"
                    @click="clickChampion(c.id)"
                />
            </div>
        </div>
    </div>
    <div class="pb-5 pt-10">
        <button
            @click="banChampion"
            class="rounded py-2 px-4 font-bold text-white"
            :class="hoveredChampion ? 'bg-blue-500 hover:bg-blue-700' : ' bg-gray-500'"
            :disabled="!hoveredChampion"
        >
            Ban champion
        </button>
    </div>
</template>

<script lang="ts" setup>
import { Phase, SingleChampion } from "@/types/championSelect.types"
import { PropType } from "vue"

import ChampionsPortrait from "./ChampionPortrait.vue"

const emit = defineEmits(["bannedChamp", "update:hoveredChampion"])
const props = defineProps({
    champions: Array as PropType<SingleChampion[]>,
    bannedChampions: { type: Array as PropType<string[]>, required: true },
    phase: String as PropType<Phase>,
    hoveredChampion: { type: String, default: "" },
})

const clickChampion = (champId: string): void => {
    if (isChampBanned(champId)) {
        return
    }
    emit("update:hoveredChampion", champId)
}

//TODO: Fix name/id confusion around types

const isChampBanned = (name: string): boolean => {
    return props.bannedChampions.includes(name.toLowerCase())
}

const banChampion = () => {
    emit("bannedChamp", {
        side: "blue",
        champ: props.hoveredChampion.toLowerCase(),
    })
    emit("update:hoveredChampion", "")
}
</script>

<style lang="scss" scoped>
#cs-container::-webkit-scrollbar {
    @apply max-h-2 w-2;
}
#cs-container::-webkit-scrollbar-thumb {
    @apply rounded-2xl bg-yellow-500 bg-opacity-60;
}
#cs-container::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0);
}
</style>
