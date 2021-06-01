<template>
  <div class="flex flex-col self-center mt-5">
    <div v-for="(c, i) in props.value.champions" :key="i" class="flex">
      <div class="mb-5">
        <ChampionsPortrait :value="c" hideName />
      </div>
      <div>
        <p class="font-bold ml-3">{{ firstLetterUppercase(c.name) }}</p>
        <p class="ml-3">Summoner {{ i + 1 }}</p>
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

    return { props, firstLetterUppercase }
  },
})
</script>

<style></style>
