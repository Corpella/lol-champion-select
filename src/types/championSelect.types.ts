//Champions

export type Side = 'blue' | 'red'

export type Phase = 'pick' | 'ban'

export type Position = 'left' | 'right'

export type Champions = ChampionPortrait[]

export type BanChampion = {
    side: Side
    champ: string
}

export type ChampionPortrait = {
    name: string,
    image: string,
}

export type SingleChampion = {
    name: string,
    id: string,
}


export type TeamPicks = {
    side: Side,
    champions: Champions
}

export type Status = 'BANBLUE' | 'BANRED' | 'PICKBLUE' | 'PICKRED'