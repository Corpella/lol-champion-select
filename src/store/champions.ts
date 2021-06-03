import { defineStore } from "pinia";

import { Champions, Side, SingleChampion, } from '@/types'

export const useChampions = defineStore({
    id: "useChampions",
    state: () => ({
        queryFilter: "",
        champions: [] as SingleChampion[],
        bans: {
            red: [] as Champions,
            blue: [] as Champions
        }
    }),
    getters: {
        filteredChampions(): SingleChampion[] {
            return this.queryFilter ? this.champions.filter((c: SingleChampion) => c.name.toLowerCase().includes(this.queryFilter.toLowerCase())) : this.champions
        }
    },
    actions: {
        getChampionList() {
            fetch("http://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json").then(async (res) => {
                const response = await res.json()
                this.champions = Object.values(response.data).map((val: any) => ({ name: val.name, id: val.id })) as []
            })
        },
        setFilter(filter: string): void {
            this.queryFilter = filter
        },

        banChampion(side: Side, champ: string): void {
            if (this.bans[side].length < 5) {
                this.bans[side].push({ name: champ, image: `https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${champ}.png` })
            }
        }

    }
})