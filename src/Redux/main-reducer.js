import banner_1 from "../Components/Images/Banners/banner_1.jpg";
import banner_2 from "../Components/Images/Banners/banner_2.jpg";
import banner_3 from "../Components/Images/Banners/banner_3.jpg";
const SETTALENTS = "SET-TALENTS";
const SETWEAPONS = "SET-WEAPONS";
const SETEVENTS = "SET-EVENTS";

let initialState = {
  banner_data: [
    {
      id: 1,
      image: banner_1,
      url: ""
    },
    {
      id: 2,
      image: banner_2,
      url: ""
    },
    {
      id: 3,
      image: banner_3,
      url: ""
    }
  ],
  events: [],
  banners: [
    {
      id: 1,
      image:
        "https://genshin.ru/wp-content/uploads/2021/06/banner_kadzuha_2.jpg",
      characters: [
        {
          id: 1,
          name: "Kazuha",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1625656971/genshin-app/characters/kazuha/icon.png"
        },
        {
          id: 2,
          name: "Rosaria",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/rosaria/icon.png"
        },
        {
          id: 3,
          name: "Bennett",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/bennett/icon.png"
        },
        {
          id: 4,
          name: "Razor",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/razor/icon.png"
        }
      ]
    },
    {
      id: 2,
      image: "https://forums.goha.ru/cdn/forum/picture/103/103359.picture",
      characters: [
        {
          id: 1,
          name: "Ganyu",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/ganyu/icon.png"
        },
        {
          id: 2,
          name: "Beidou",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/beidou/icon.png"
        },
        {
          id: 3,
          name: "Barbara",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/barbara/icon.png"
        },
        {
          id: 4,
          name: "Noelle",
          image:
            "https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/noelle/icon.png"
        }
      ]
    }
  ],
  talents: [],
  weapons: [],
  news: [
    {
      id: 1,
      name: "All about Genshin Impact 3.2",
      date: "21.10.2022",
      description:
        "The battle with Scaramucci, the finale of the dendro-archon plot and new promo codes",
      url: "",
      image:
        "https://i.playground.ru/e/q2H-LUL5VxfpDFXK5tnjSg.jpeg.webp?250x140"
    },
    {
      id: 2,
      name: "Developer Stream",
      date: "21.10.2022",
      description:
        "The authors of Genshin Impact will conduct a live broadcast with the announcement of patch 3.2 this Friday",
      url: "",
      image: "https://i.playground.ru/e/KjADJwS6kfoagqS57jdoTw.png.webp?250x140"
    },
    {
      id: 3,
      name: "Genshin Impact Teaser",
      date: "21.10.2022",
      description: "Genshin Impact Story Teaser Reveals Scaramucci's Backstory",
      url: "",
      image:
        "https://i.playground.ru/e/zwXM-5G0pesn_rJ5AuoxwQ.jpeg.webp?250x140"
    },
    {
      id: 4,
      name: "Video about the second anniversary of the game",
      date: "21.10.2022",
      description:
        "Genshin Impact developers have published a touching video about the second anniversary of the game",
      url: "",
      image:
        "https://i.playground.ru/e/lh_21Q0AneaEq0Hr0hlkvg.jpeg.webp?250x140"
    },
    {
      id: 5,
      name: "Version 3.1",
      date: "21.10.2022",
      description:
        "Genshin Impact has been updated to version 3.1, where a new location at Dusk and new heroes have appeared",
      url: "",
      image:
        "https://i.playground.ru/e/K4AMxb7tP1tbXsz2zpKVnQ.jpeg.webp?250x140"
    }
  ]
};
const mainReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    talents: [...state.talents],
    weapons: [...state.weapons],
    events: [...state.events]
  };
  switch (action.type) {
    case SETTALENTS: {
      return {
        ...stateCopy,
        talents: [...action.talents]
      };
    }
    case SETWEAPONS: {
      return {
        ...stateCopy,
        weapons: [...action.weapons]
      };
    }
    case SETEVENTS: {
      return {
        ...stateCopy,
        events: [...action.events]
      };
    }
    default:
      return stateCopy;
  }
};
export const setTalentsActionCreator = (talents) => ({
  type: SETTALENTS,
  talents
});
export const setWeaponsActionCreator = (weapons) => ({
  type: SETWEAPONS,
  weapons
});
export const setEventsActionCreator = (events) => ({
  type: SETEVENTS,
  events
});

export default mainReducer;
