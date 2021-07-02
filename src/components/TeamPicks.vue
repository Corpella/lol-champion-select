<template>
  <div
    class="flex flex-col w-full mt-5"
    :class="
      props.side == 'blue' ? 'ml-10 self-start pr-10' : 'mr-10 self-end pl-10'
    "
  >
    <Divider rhombus-visible :side="props.side" />
    <div v-for="i in 5" :key="i">
      <div
        class="flex"
        :class="{ 'flex-row-reverse': props.position == 'right' }"
      >
        <template v-if="props.champions[i - 1]">
          <div>
            <ChampionsPortrait
              :value="props.champions[i - 1]"
              hideName
              rounded
              :side="side"
            />
          </div>
          <div class="self-center">
            <p class="font-bold">
              {{ firstLetterUppercase(props.champions[i - 1].name) }}
            </p>
            <p class="">Summoner {{ i }}</p>
          </div>
        </template>
        <template v-else>
          <div class="rounded-full bg-black empty-portrait mx-5" />
          <div class="self-center">
            <p class="font-bold">
              Something...
            </p>
            <p class="">Summoner {{ i }}</p>
          </div>
        </template>
      </div>
      <Divider rhombus-visible :side="props.side" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Side, Champions, Position } from '@/types/championSelect'
import ChampionsPortrait from './ChampionPortrait.vue'
import Divider from './Divider.vue'

export default defineComponent({
  name: 'TeamPicks',
  components: { ChampionsPortrait, Divider },
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

<style lang="scss">
.empty-portrait {
  width: 70px;
  height: 70px;
}
</style>
