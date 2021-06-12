<template>
  <div class="w-full flex mb-2">
    <div class="w-1/2"></div>
    <div class="flex w-1/2">
      <div class="w-2/5"></div>
      <div class="w-3/5">
        <div class="flex w-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 absolute top-1/2 left-0 ml-1 transform -translate-y-1/2"
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
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
            type="text"
            placeholder="Search"
            v-model="queryFilter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'GridHeader',
  emits: ['queryUpdated'],
  setup(props, { emit }) {
    const queryFilter = ref('')

    watch(
      () => queryFilter.value,
      (val: string): void => {
        emit('queryUpdated', val)
      }
    )

    return { queryFilter }
  },
})
</script>

<style></style>
