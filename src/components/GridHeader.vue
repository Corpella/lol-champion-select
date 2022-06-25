<template>
    <div class="w-full flex mb-2">
        <div class="w-1/2" />
        <div class="flex w-1/2">
            <div class="w-2/5"></div>
            <div class="w-3/5 mr-16">
                <div class="flex w-full relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 absolute top-1/2 left-0 ml-1 -translate-y-1/2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="{2}"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        v-model="queryFilter"
                        class="shadow bg-transparent border-yellow-200 appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight h-8 focus:outline-none focus:shadow-outline pl-10"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="mr-16 ml-14">
        <Divider />
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import Divider from "./Divider.vue"

const emit = defineEmits(["queryUpdated"])

const queryFilter = ref("")

watch(queryFilter, (val: string): void => {
    emit("queryUpdated", val)
})
</script>
