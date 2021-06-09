<template>
  <div class="flex flex-col self-center mt-5">
    <div
      v-for="(c, i) in props.champions"
      :key="i"
      class="flex mb-5"
      :class="{ 'flex-row-reverse': props.position == 'right' }"
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

import { Side, Champions, Position } from '@/types'
import ChampionsPortrait from './ChampionPortrait.vue'

export default defineComponent({
  name: 'TeamPicks',
  components: { ChampionsPortrait },
  props: {
    side: String as PropType<Side>,
    position: String as PropType<Position>,
    champions: Array as PropType<Champions>,
  },
  setup(props) {
    const firstLetterUppercase = (name: string): string =>
      name.charAt(0).toUpperCase() + name.slice(1)

    return {
      props,
      firstLetterUppercase,
    }
  },
})
</script>

<style></style>
