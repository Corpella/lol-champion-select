//Champions

export type Side = 'blue' | 'red'

export type Position = 'left' | 'right'

export type Champions = ChampionPortrait[]

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
    champions: Champions
}