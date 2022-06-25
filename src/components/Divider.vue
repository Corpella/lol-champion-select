<template>
    <div class="flex w-full my-2" :class="{ 'flex-row-reverse': props.rhombusVisible && props.side == 'red' }">
        <div v-if="props.rhombusVisible" class="rhombus" />
        <div :class="props.side ? `divider-line-${props.side}` : 'divider-line'" />
    </div>
</template>

<script lang="ts">
import { Side } from "@/types/championSelect"
import { defineComponent, PropType } from "vue"

export default defineComponent({
    name: "Background",
    props: {
        rhombusVisible: {
            type: Boolean,
            default: false,
        },
        side: String as PropType<Side>,
    },
    setup(props) {
        return {
            props,
        }
    },
})
</script>
<style lang="postcss" scoped>
.rhombus {
    @apply border border-yellow-200 rotate-45;
    backface-visibility: hidden;
    height: 8px;
    width: 8px;
}
.divider-line {
    @apply w-full bg-yellow-200;
    margin-top: 2.5px;
    height: 1px;
}
.divider-line-blue {
    @apply w-full;
    margin-top: 2.5px;
    height: 1px;
    background: -webkit-gradient(radial, 1% 1%, 0, 50% 50%, 350, from(rgba(253, 230, 138, 1)), to(transparent));
}
.divider-line-red {
    @apply w-full;
    margin-top: 2.5px;
    height: 1px;
    background: -webkit-gradient(radial, 1% 1%, 0, 50% 50%, 350, from(transparent), to(rgba(253, 230, 138, 1)));
}
</style>
