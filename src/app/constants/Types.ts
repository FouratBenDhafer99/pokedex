export const Types={

  "normal" :{
    name: "normal",
    attack:{
      weak: ["rock", "steel"],
      strong: [],
      immune: ["ghost"]
    },
    defense: {
      weak: ["fighting"],
      strong: [],
      immune: ["ghost"]
    },
    palette: {
      badgeBackground: "#A8A878",
    }
  },

   "fire": {
     name: "fire",
    attack:{
      weak: ["fire", "water", "rock", "dragon"],
      strong: ["grass", "ice", "bug", "steel"],
      immune: []
    },
    defense: {
      weak: ["water", "ground", "rock"],
      strong: ["fire", "grass", "ice", "bug", "steel", "fairy"],
      immune: []
    },
    palette: {
      badgeBackground: "#F08030"
    }
  },

  "water": {
    name: "water",
    attack:{
      weak: ["water", "grass", "dragon"],
      strong: ["fire", "ground", "rock"],
      immune: []
    },
    defense: {
      weak: ["electric", "grass"],
      strong: ["fire", "water", "ice", "steel"],
      immune: []
    },
    palette: {
      badgeBackground: "#6890F0"
    }
  },

   "grass": {
     name: "grass",
     attack: {
       weak: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
       strong: ["ground", "rock", "water"],
       immune: []
     },
     defense: {
       weak: ["flying", "poison", "bug", "fire", "ice"],
       strong: ["ground", "water", "grass", "electric"],
       immune: []
     },
     palette: {
       badgeBackground: "#78C850"
     }
  },

   "bug": {
    name: "bug",
    attack:{
      weak: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
      strong: ["grass", "psychic", "dark"],
      immune: []
    },
    defense: {
      weak: ["fire", "flying", "rock"],
      strong: ["grass", "fighting", "ground"],
      immune: []
    },
    palette: {
      badgeBackground: "#A8B820"
    }
  },

   "fighting": {
    name: "fighting",
    attack:{
      weak: ["poison", "flying", "psychic", "bug", "fairy"],
      strong: ["normal", "ice", "rock", "dark", "steel"],
      immune: ["ghost"]
    },
    defense: {
      weak: ["flying", "psychic", "fairy"],
      strong: ["bug", "rock", "dark"],
      immune: []
    },
    palette: {
      badgeBackground: "#C03028"
    }
  },

   "flying": {
    name: "flying",
    attack:{
      weak: ["electric", "rock", "steel"],
      strong: ["grass", "fighting", "bug"],
      immune: []
    },
    defense: {
      weak: ["electric", "ice", "rock"],
      strong: ["grass", "fighting", "bug"],
      immune: ["ground"]
    },
    palette: {
      badgeBackground: "#A890F0"
    }
  },

   "poison": {
    name: "poison",
    attack:{
      weak: ["poison", "ground", "rock", "fairy"],
      strong: ["grass", "fairy"],
      immune: ["steel"]
    },
    defense: {
      weak: ["ground", "psychic"],
      strong: ["fighting", "poison", "bug", "grass", "fairy"],
      immune: []
    },
    palette: {
      badgeBackground: "#A040A0"
    }
  },

   "fairy": {
    name: "fairy",
    attack:{
      weak: ["fire", "poison", "steel"],
      strong: ["fighting", "dragon", "dark"],
      immune: []
    },
    defense: {
      weak: ["poison", "steel"],
      strong: ["fighting", "bug", "dark"],
      immune: ["dragon"]
    },
    palette: {
      badgeBackground: "#EE99AC"
    }
  },

   "dragon": {
    name: "dragon",
    attack:{
      weak: ["steel"],
      strong: ["dragon"],
      immune: ["fairy"]
    },
    defense: {
      weak: ["ice", "dragon", "fairy"],
      strong: ["fire", "water", "electric", "grass"],
      immune: []
    },
    palette: {
      badgeBackground: "#7038F8"
    }
  },

   "electric": {
    name: "electric",
    attack:{
      weak: ["electric", "grass", "dragon"],
      strong: ["water", "flying"],
      immune: ["ground"]
    },
    defense: {
      weak: ["ground"],
      strong: ["electric", "flying", "steel"],
      immune: []
    },
    palette: {
      badgeBackground: "#F8D030"
    }
  },

   "ground": {
    name: "ground",
    attack:{
      weak: ["grass", "bug"],
      strong: ["fire", "electric", "poison", "rock", "steel"],
      immune: ["flying"]
    },
    defense: {
      weak: ["water", "grass", "ice"],
      strong: ["poison", "rock"],
      immune: ["electric"]
    },
    palette: {
      badgeBackground: "#E0C068"
    }
  },

   "rock": {
    name: "rock",
    attack:{
      weak: ["fighting", "ground", "steel"],
      strong: ["fire", "ice", "flying", "bug"],
      immune: []
    },
    defense: {
      weak: ["water", "grass", "fighting", "ground", "steel"],
      strong: ["normal", "fire", "poison", "flying"],
      immune: []
    },
    palette: {
      badgeBackground: "#B8A038"
    }
  },

   "psychic": {
    name: "psychic",
    attack:{
      weak: ["psychic", "steel"],
      strong: ["fighting", "poison"],
      immune: ["dark"]
    },
    defense: {
      weak: ["bug", "ghost", "dark"],
      strong: ["fighting", "psychic"],
      immune: []
    },
    palette: {
      badgeBackground: "#F85888"
    }
  },

   "ice": {
    name: "ice",
    attack:{
      weak: ["fire", "water", "ice", "steel"],
      strong: ["grass", "ground", "flying", "dragon"],
      immune: []
    },
    defense: {
      weak: ["fire", "fighting", "rock", "steel"],
      strong: ["ice"],
      immune: []
    },
    palette: {
      badgeBackground: "#98D8D8"
    }
  },

   "ghost": {
    name: "ghost",
    attack:{
      weak: ["dark"],
      strong: ["psychic", "ghost"],
      immune: ["normal"]
    },
    defense: {
      weak: ["ghost", "dark"],
      strong: ["poison", "bug"],
      immune: ["normal", "fighting"]
    },
    palette: {
      badgeBackground: "#705898"
    }
  },

   "steel": {
    name: "steel",
    attack:{
      weak: ["fire", "water", "electric", "steel"],
      strong: ["ice", "rock", "fairy"],
      immune: []
    },
    defense: {
      weak: ["fire", "fighting", "ground"],
      strong: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
      immune: ["poison"]
    },
    palette: {
      badgeBackground: "#B8B8D0"
    }
  },

   "dark": {
    name: "dark",
    attack:{
      weak: ["fighting", "dark", "fairy"],
      strong: ["psychic", "ghost"],
      immune: []
    },
    defense: {
      weak: ["fighting", "bug", "fairy"],
      strong: ["ghost", "dark"],
      immune: ["psychic"]
    },
  },

}

export enum TypesBadgeColor{

  normal= "#A8A878",
  fire= "#F08030",
  water= "#6890F0",
  grass= "#78C850",
  bug= "#A8B820",
  fighting= "#C03028",
  flying= "#A890F0",
  poison= "#A040A0",
  fairy= "#EE99AC",
  dragon= "#7038F8",
  electric= "#F8D030",
  ground= "#E0C068",
  rock= "#B8A038",
  psychic= "#F85888",
  ice= "#98D8D8",
  ghost= "#705898",
  steel= "#B8B8D0",
  dark= "#705848",
}

export enum TypesBackgroundColor{
  normal= "#efefbc",
  fire= "#EFCFB9",
  water= "#BCDAE2",
  grass= "#bfdfcc",
  bug= "#A4E4A8",
  fighting= "#ecb4b3",
  flying= "#cbc1e5",
  poison= "#e3b5e3",
  fairy= "#ead6db",
  dragon= "#ccbee8",
  electric= "#ecde96",
  ground= "#daceac",
  rock= "#beb693",
  psychic= "#fac2d3",
  ice= "#B5E1DE",
  ghost= "#9b97b6",
  steel= "#C6D8D9",
  dark= "#9a918b",
}
