<template>
  <div class="flex flex-col self-center mt-5">
    <div
      v-for="(c, i) in champions"
      :key="i"
      class="flex mb-5"
      :class="{ 'flex-row-reverse': side == 'red' }"
    >
      <div class="">
        <ChampionsPortrait :value="c" hideName rounded :side="side" />
      </div>
      <div class="self-center">
        <p class="font-bold">{{ firstLetterUppercase(c.name) }}</p>
        <p class="">Summoner {{ i + 1 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { TeamPicks } from '@/types'
import ChampionsPortrait from './ChampionPortrait.vue'

export default defineComponent({
  name: 'TeamPicks',
  components: { ChampionsPortrait },
  props: { value: Object as PropType<TeamPicks> },
  setup(props) {
    const firstLetterUppercase = (name: string): string =>
      name.charAt(0).toUpperCase() + name.slice(1)

    return {
      champions: props.value?.champions,
      side: props.value?.side,
      firstLetterUppercase,
    }
  },
})
</script>

<style></style>
