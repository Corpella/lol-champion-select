<script lang="ts" setup>
import { computed, PropType } from "vue"
import { Champions, Side } from "~/championSelect"
import BanIcon from "./icons/BanIcon.vue"

const props = defineProps({
    bans: Array as PropType<Champions>,
    side: String as PropType<Side>,
})

const checkBan = (index: number) => {
    return !!props.bans?.[index]
}

const orderedBans = computed(() => (props.side === "blue" ? props.bans?.slice().reverse() : props.bans))
</script>
<template>
    <div class="flex w-full justify-center pt-5">
        <div
            v-for="i in 5"
            class="relative mr-2 aspect-square w-10 border-2 border-gray-400 bg-black"
            :key="orderedBans?.[i - 1]?.name"
        >
            <div v-if="checkBan(i - 1)">
                <img
                    :key="orderedBans?.[i - 1]?.name"
                    :src="orderedBans?.[i - 1]?.image"
                    :alt="orderedBans?.[i - 1]?.name"
                />
            </div>
            <div class="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2" v-else>
                <BanIcon />
            </div>
        </div>
    </div>
</template>
