<template>
    <div class="relative w-full select-none">
        <Background style="z-index: -1" :phase="phase" :champion="hoveredChampion" />
        <div class="flex w-full text-gray-200 h-full z-50">
            <div id="blue-side" class="w-1/4">
                <div class="w-full px-5 mb-5">
                    <Bans side="blue" :bans="champStore.bans.blue" />
                </div>
                <div class="flex flex-col justify-center">
                    <TeamPicks side="blue" :champions="championsBlue" :position="'left'" />
                </div>
            </div>

            <div id="champion-list" class="w-1/2">
                <div class="w-full text-center mb-5 mt-3">
                    <p class="text-2xl">CHOOSE YOUR CHAMPION!</p>
                    <p class="text-2xl">30</p>
                </div>
                <div>
                    <GridHeader @queryUpdated="updateFilter" />
                </div>
                <div class="w-full text-center overflow-hidden">
                    <ChampionsGrid
                        v-model:hoveredChampion="hoveredChampion"
                        :champions="champStore.filteredChampions"
                        :bannedChampions="champStore.bannedChampions"
                        :phase="phase"
                        @bannedChamp="handleBan"
                    />
                </div>
            </div>

            <div id="red-side" class="w-1/4">
                <div class="w-full px-5 mb-5">
                    <Bans side="red" :bans="champStore.bans.red" />
                </div>
                <div class="flex flex-col justify-center">
                    <TeamPicks side="red" :champions="championsRed" position="right" />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="flex w-7/10 mt-3 justify-between mx-10">
      <button
        @click="addBan('blue', 'viego')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add blueside ban
      </button>
      <button
        @click="addBan('red', 'yuumi')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add redside ban
      </button>
    </div> -->
</template>

<script lang="ts" setup>
import { ref } from "vue"

import { useChampions } from "@/store/champions"
import { BanChampion, Champions, Phase } from "@/types/championSelect.types"

import Bans from "@/components/Bans.vue"
import ChampionsGrid from "@/components/ChampionsGrid.vue"
import GridHeader from "@/components/GridHeader.vue"
import TeamPicks from "@/components/TeamPicks.vue"
import Background from "@/components/Background.vue"

const champStore = useChampions()

const championsBlue: Champions = []
const championsRed: Champions = []

champStore.getChampionList()

const phase = ref<Phase>("pick")

const hoveredChampion = ref<string>("")

const updateFilter = (name: string): void => {
    champStore.setFilter(name)
}

const handleBan = ({ side, champ }: BanChampion): void => {
    champStore.banChampion(side, champ)
    hoveredChampion.value = ""
}
</script>
