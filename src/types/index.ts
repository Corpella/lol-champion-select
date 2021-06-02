//Champions

type Side = 'blue' | 'red'

export interface ChampionPortrait {
    name: string,
    image: string,
}

export interface SingleChampion {
    name: string,
    id: string,
}


export interface TeamPicks {
    side: Side,
    champions: ChampionPortrait[]
}