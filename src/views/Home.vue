<template>
  <div class="home">
    <!-- <img
      class="rounded-full"
      width="44"
      height="44"
      :src="
        `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ashe.png`
      "
      alt=""
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useChampions } from '@/store/champions'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const champions = useChampions()
    onMounted(() => {
      // champions.getChampionList()
    })
    return { champions }
  },
})
</script>
