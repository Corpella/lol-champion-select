<template>
  <div>
    <div class="flex w-full mt-5">
      <div id="blue-side" class="w-1/4 bg-blue-300">
        <div class="w-full mx-5 mb-5">
          <!-- Ban component -->
          <Bans :side="'blue'" :bans="bansBlue" />
        </div>
        <div class="flex flex-col justify-center">
          <!-- Team champions component  -->
          <TeamPicks
            side="'blue'"
            :champions="championsBlue"
            :position="'left'"
          />
        </div>
      </div>

      <div id="champion-list" class="w-1/2">
        <div class="w-full text-center mb-5">
          <p class="text-2xl mb-2">CHOOSE YOUR CHAMPION!</p>
          <p class="text-2xl">30</p>
        </div>
        <div>
          <GridHeader @queryUpdated="updateFilter" />
        </div>
        <div class="w-full text-center overflow-hidden">
          <!-- Champion pick component -->
          <ChampionsGrid
            :champions="filteredChampions"
            :bannedChampions="bannedChampions"
            @bannedChamp="handleBan"
          />
        </div>
      </div>

      <div id="red-side" class="w-1/4 bg-red-300">
        <div class="w-full mx-5 mb-5">
          <!-- Ban component -->
          <Bans :side="'red'" :bans="bansRed" />
        </div>
        <div class="flex flex-col justify-center">
          <!-- Team champions component  -->
          <TeamPicks
            side="'red'"
            :champions="championsRed"
            :position="'right'"
          />
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
  </div>
</template>

<script lang="ts">
import Bans from '@/components/Bans.vue'
import ChampionsGrid from '@/components/ChampionsGrid.vue'
import GridHeader from '@/components/GridHeader.vue'
import { useChampions } from '@/store/champions'
import { BanChampion } from '@/types/championSelect'
import { computed, defineComponent } from 'vue'

import TeamPicks from '@/components/TeamPicks.vue'

export default defineComponent({
  name: 'ChampionSelect',
  components: { TeamPicks, ChampionsGrid, GridHeader, Bans },
  setup() {
    const championsBlue = [
      {
        name: 'tryndamere',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/tryndamere.png',
      },
      {
        name: 'sejuani',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sejuani.png',
      },
      {
        name: 'anivia',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/anivia.png',
      },
      {
        name: 'ashe',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ashe.png',
      },
      {
        name: 'braum',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/braum.png',
      },
    ]

    const championsRed = [
      {
        name: 'singed',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/singed.png',
      },
      {
        name: 'vi',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/vi.png',
      },
      {
        name: 'viktor',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/viktor.png',
      },
      {
        name: 'jinx',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jinx.png',
      },
      {
        name: 'janna',
        image:
          'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/janna.png',
      },
    ]
    const champStore = useChampions()

    champStore.getChampionList()

    const bansBlue = champStore.bans.blue
    const bansRed = champStore.bans.red

    const filteredChampions = computed(() => champStore.filteredChampions)

    const bannedChampions = computed(() => champStore.bannedChampions)

    const updateFilter = (name: string): void => {
      champStore.setFilter(name)
    }

    const handleBan = ({ side, champ }: BanChampion): void => {
      champStore.banChampion(side, champ)
    }

    return {
      championsBlue,
      championsRed,
      bansBlue,
      bansRed,
      filteredChampions,
      bannedChampions,
      handleBan,
      updateFilter,
    }
  },
})
</script>
