import { defineStore } from "pinia";

export const useChampions = defineStore({
    id: "useChampions",
    state: () => ({
        champions: [],
    }),
    actions: {
        getChampionList() {
            fetch("http://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json").then(async (res) => {
                const response = await res.json()
                this.champions = Object.values(response.data).map((val: any) => ({ name: val.name, id: val.id })) as []
            })
        },
    }
})