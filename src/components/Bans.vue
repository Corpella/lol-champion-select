<template>
    <div class="w-full flex justify-center mt-5" :class="{ 'flex-row-reverse': props.side == 'blue' }">
        <div v-for="i in 5" :key="i" class="ban-box relative bg-black border-2 border-gray-400 mr-2">
            <div v-if="checkBan(i - 1)">
                <img :key="i" :src="props.bans[i - 1].image" :alt="props.bans[i - 1].name" />
            </div>
            <div class="w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" v-else>
                <BanIcon />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Champions, Side } from "@/types/championSelect"
import { defineComponent, PropType } from "vue"
import BanIcon from "./icons/BanIcon.vue"

export default defineComponent({
    name: "Bans",
    components: { BanIcon },
    props: {
        bans: Array as PropType<Champions>,
        side: String as PropType<Side>,
    },
    setup(props) {
        const checkBan = (index: number): string | null | undefined => {
            return props.bans ? props.bans[index]?.name : null
        }
        return { props, checkBan }
    },
})
</script>

<style lang="scss" scoped>
.ban-box {
    width: 40px;
    height: 40px;
}
</style>
