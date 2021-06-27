<template>
  <div id="cs-container" class="w-full px-10" v-if="props.champions">
    <div class="grid grid-cols-6 mt-10">
      <div
        v-for="(c, i) in props.champions"
        :key="i"
        class="justify-self-center"
      >
        <ChampionsPortrait
          class="mb-2"
          :key="c.name"
          clickable
          :phase="props.phase"
          :selected="c.id == selectedChampion"
          :disabled="isChampBanned(c.id)"
          :value="{
            name: c.name,
            image: `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${c.id.toLowerCase()}.png`,
          }"
          @click="clickChampion(c.id)"
        />
      </div>
    </div>
  </div>
  <div class="mt-10 mb-5">
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
import { Phase, SingleChampion } from '@/types/championSelect'
import { defineComponent, PropType, ref } from 'vue'

import ChampionsPortrait from './ChampionPortrait.vue'

export default defineComponent({
  name: 'ChampionsGrid',
  components: { ChampionsPortrait },
  emits: ['bannedChamp'],
  props: {
    champions: Array as PropType<SingleChampion[]>,
    bannedChampions: { type: Array as PropType<string[]>, required: true },
    phase: String as PropType<Phase>,
  },

  setup(props, { emit }) {
    const selectedChampion = ref('')

    const clickChampion = (champId: string): void => {
      if (isChampBanned(champId)) {
        return
      }
      selectedChampion.value = champId
    }

    //TODO Fix name/id confusion around types

    const isChampBanned = (name: string): boolean => {
      return props.bannedChampions.includes(name.toLowerCase())
    }

    const banChampion = () => {
      emit('bannedChamp', {
        side: 'blue',
        champ: selectedChampion.value.toLowerCase(),
      })
      selectedChampion.value = ''
    }

    return {
      props,
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
