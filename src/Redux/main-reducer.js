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
      url: "",
      name: "Как повысить репутацию в инадзуме"
    },
    {
      id: 2,
      image: banner_2,
      url: "",
      name: "Узнать о празднике фонарей"
    },
    {
      id: 3,
      image: banner_3,
      url: "",
      name: "Узнать о событии Архипелаг"
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
      name: "Все о Genshin Impact 3.2",
      date: "21.10.2022",
      description:
        "Битва со Скарамуччей, финал сюжета дендро-архонта и новые промо-коды",
      url: "",
      image:
        "https://i.playground.ru/e/q2H-LUL5VxfpDFXK5tnjSg.jpeg.webp?250x140"
    },
    {
      id: 2,
      name: "Стрим разработчиков",
      date: "21.10.2022",
      description:
        "Авторы Genshin Impact проведут прямую трансляцию с анонсом патча 3.2 уже в эту пятницу",
      url: "",
      image: "https://i.playground.ru/e/KjADJwS6kfoagqS57jdoTw.png.webp?250x140"
    },
    {
      id: 3,
      name: "Тизер Genshin Impact",
      date: "21.10.2022",
      description:
        "Сюжетный тизер Genshin Impact раскрывает предысторию Скарамуччи",
      url: "",
      image:
        "https://i.playground.ru/e/zwXM-5G0pesn_rJ5AuoxwQ.jpeg.webp?250x140"
    },
    {
      id: 4,
      name: "Видео о второй годовщине игры",
      date: "21.10.2022",
      description:
        "Разработчики Genshin Impact опубликовали трогательное видео о второй годовщине игры",
      url: "",
      image:
        "https://i.playground.ru/e/lh_21Q0AneaEq0Hr0hlkvg.jpeg.webp?250x140"
    },
    {
      id: 5,
      name: "Версии 3.1",
      date: "21.10.2022",
      description:
        "Genshin Impact обновилась до версии 3.1, где появились новая локация в Сумеру и новые герои",
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
