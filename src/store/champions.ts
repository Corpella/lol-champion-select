import { defineStore } from "pinia";

import { SingleChampion, } from '@/types'

export const useChampions = defineStore({
    id: "useChampions",
    state: () => ({
        queryFilter: "",
        champions: [] as SingleChampion[],
    }),
    getters: {
        filteredChampions(): SingleChampion[] {
            return this.queryFilter ? this.champions.filter((c: SingleChampion) => c.name.toLowerCase().includes(this.queryFilter.toLowerCase())) : this.champions
        }
    },
    actions: {
        setFilter(filter: string): void {
            this.queryFilter = filter
        },
        getChampionList() {
            fetch("http://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json").then(async (res) => {
                const response = await res.json()
                this.champions = Object.values(response.data).map((val: any) => ({ name: val.name, id: val.id })) as []
            })
        },
    }
})