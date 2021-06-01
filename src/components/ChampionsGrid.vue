<template>
  <div id="cs-container" class="w-full bg-green-400">
    <div class="grid grid-cols-6 mt-10">
      <div
        v-for="(c, i) in champStore.champions"
        :key="i"
        class="justify-self-center"
      >
        <ChampionsPortrait
          class="mb-2"
          :value="{
            name: c.name,
            image: `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${c.id.toLowerCase()}.png`,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useChampions } from '@/store/champions'
import { defineComponent, onBeforeMount } from 'vue'

import ChampionsPortrait from './ChampionPortrait.vue'

export default defineComponent({
  name: 'ChampionsGrid',
  components: { ChampionsPortrait },

  setup() {
    const champStore = useChampions()
    onBeforeMount(async () => {
      await champStore.getChampionList()
    })
    return { champStore }
  },
})
</script>

<style>
#cs-container {
  height: 700px;
  overflow-y: scroll;
}
</style>
