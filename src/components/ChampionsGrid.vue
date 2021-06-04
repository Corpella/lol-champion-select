<template>
  <div id="cs-container" class="w-full bg-green-400">
    <div class="grid grid-cols-6 mt-10">
      <div
        v-for="(c, i) in champStore.filteredChampions"
        :key="i"
        class="justify-self-center"
      >
        <ChampionsPortrait
          :key="c.name"
          class="mb-2"
          clickable
          :selected="c.id == selectedChampion"
          :disabled="isChampBanned(c.id)"
          @click="clickChampion(c.id)"
          :value="{
            name: c.name,
            image: `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${c.id.toLowerCase()}.png`,
          }"
        />
      </div>
    </div>
  </div>
  <div class="mt-5">
    <button
      @click="banChampion"
      class="text-white font-bold py-2 px-4 rounded"
      :class="
        selectedChampion ? 'bg-blue-500 hover:bg-blue-700' : ' bg-gray-500'
      "
      :disabled="!selectedChampion"
    >
      Ban champion
    </button>
  </div>
</template>

<script lang="ts">
import { useChampions } from '@/store/champions'
import { defineComponent, onBeforeMount, ref } from 'vue'

import ChampionsPortrait from './ChampionPortrait.vue'

export default defineComponent({
  name: 'ChampionsGrid',
  components: { ChampionsPortrait },

  setup() {
    const selectedChampion = ref('')

    const clickChampion = (champId: string): void => {
      if (isChampBanned(champId)) {
        return
      }
      selectedChampion.value = champId
    }

    const champStore = useChampions()

    //TODO Fix name/id confusion around types

    const isChampBanned = (name: string): boolean => {
      return champStore.bannedChampions.includes(name.toLowerCase())
    }

    const banChampion = () => {
      champStore.banChampion('blue', selectedChampion.value.toLowerCase())
      selectedChampion.value = ''
    }

    onBeforeMount(async () => {
      await champStore.getChampionList()
    })
    return {
      champStore,
      selectedChampion,
      clickChampion,
      isChampBanned,
      banChampion,
    }
  },
})
</script>

<style>
#cs-container {
  height: 700px;
  overflow-y: scroll;
}
</style>
