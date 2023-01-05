<script lang="ts" setup>
import { ref, watch } from "vue"
import Divider from "./Divider.vue"

const emit = defineEmits<{ (event: "queryUpdated", value: string): void }>()

const queryFilter = ref("")

watch(queryFilter, (val: string): void => {
    emit("queryUpdated", val)
})
</script>
<template>
    <header class="flex w-full justify-end pb-2">
        <div class="relative flex w-2/5 self-end" role="search">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-1/2 left-0 ml-1 h-6 w-6 -translate-y-1/2"
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
            <label class="sr-only" for="search">Search</label>
            <input
                v-model="queryFilter"
                name="search"
                class="focus:shadow-outline h-8 w-full appearance-none rounded border border-yellow-200 bg-transparent py-2 px-3 pl-10 leading-tight text-gray-200 shadow focus:outline-none"
                type="text"
                placeholder="Search"
            />
        </div>
    </header>
    <Divider class="ml-3" />
</template>
