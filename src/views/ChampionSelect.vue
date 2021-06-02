<template>
  <div>
    <div class="flex w-full mt-5">
      <div id="blue-side" class="w-1/4 bg-blue-300">
        <div class="w-full">
          <!-- Ban component -->
          bans
        </div>
        <div class="flex flex-col justify-center">
          <!-- Team champions component  -->
          <TeamPicks :value="{ side: 'blue', champions: championsBlue }" />
        </div>
      </div>

      <div id="champion-list" class="w-1/2">
        <div class="w-full text-center mb-5">
          <p class="text-2xl mb-2">CHOOSE YOUR CHAMPION!</p>
          <p class="text-2xl">30</p>
        </div>
        <div><GridHeader /></div>
        <div class="w-full text-center overflow-hidden">
          <!-- Champion pick component -->
          <ChampionsGrid />
        </div>
      </div>

      <div id="red-side" class="w-1/4 bg-red-300">
        <div class="w-full">
          <!-- Ban component -->
          bans
        </div>
        <div class="flex flex-col justify-center">
          <!-- Team champions component  -->
          <TeamPicks :value="{ side: 'red', champions: championsRed }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ChampionsGrid from '@/components/ChampionsGrid.vue'
import GridHeader from '@/components/GridHeader.vue'
import { defineComponent } from 'vue'

import TeamPicks from '../components/TeamPicks.vue'

export default defineComponent({
  name: 'ChampionSelect',
  components: { TeamPicks, ChampionsGrid, GridHeader },
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
    return { championsBlue, championsRed }
  },
})
</script>
