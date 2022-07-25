<template>
    <div class="mt-5 flex w-full justify-center" :class="{ 'flex-row-reverse': side == 'blue' }">
        <div v-for="i in 5" :key="i" class="relative mr-2 aspect-square w-10 border-2 border-gray-400 bg-black">
            <div v-if="checkBan(i - 1)">
                <img :key="i" :src="bans?.[i - 1].image" :alt="bans?.[i - 1].name" />
            </div>
            <div class="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2" v-else>
                <BanIcon />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { Champions, Side } from "@/types/championSelect.types"
import BanIcon from "./icons/BanIcon.vue"

const props = defineProps({
    bans: Array as PropType<Champions>,
    side: String as PropType<Side>,
})

const checkBan = (index: number): string | undefined => {
    return props.bans?.[index]?.name
}
</script>
