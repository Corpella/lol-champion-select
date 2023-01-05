<script lang="ts" setup>
import { ref } from "vue"

import { useChampions } from "@/store/useChampion"
import { BanChampion, Champions, Phase } from "~/championSelect"

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

<template>
    <div class="relative w-full select-none">
        <Background style="z-index: -1" :phase="phase" :champion="hoveredChampion" />
        <main class="z-50 flex h-full w-full text-gray-200">
            <section id="blue-side" class="w-1/4">
                <header class="mb-5 w-full px-5">
                    <Bans side="blue" :bans="champStore.bans.blue" />
                </header>
                <div class="flex flex-col justify-center">
                    <TeamPicks side="blue" :champions="championsBlue" :position="'left'" />
                </div>
            </section>

            <section id="champion-list" class="w-1/2">
                <header class="w-full pb-5 pt-3 text-center">
                    <h3 class="text-2xl">CHOOSE YOUR CHAMPION!</h3>
                    <h3 class="text-2xl">30</h3>
                </header>
                <GridHeader @queryUpdated="updateFilter" />
                <ChampionsGrid
                    v-model:hoveredChampion="hoveredChampion"
                    :champions="champStore.filteredChampions"
                    :bannedChampions="champStore.bannedChampions"
                    :phase="phase"
                    @bannedChamp="handleBan"
                />
            </section>

            <section id="red-side" class="w-1/4">
                <header class="mb-5 w-full px-5">
                    <Bans side="red" :bans="champStore.bans.red" />
                </header>
                <div class="flex flex-col justify-center">
                    <TeamPicks side="red" :champions="championsRed" position="right" />
                </div>
            </section>
        </main>
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
