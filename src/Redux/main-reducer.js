import banner_1 from "../Components/Images/Banners/banner_1.jpg";
import banner_2 from "../Components/Images/Banners/banner_2.jpg";
import banner_3 from "../Components/Images/Banners/banner_3.jpg";
const SETTALENTS = "SET-TALENTS";
const SETWEAPONS = "SET-WEAPONS";
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
  events: [
    {
      id: 1,
      start: "20.10.2022",
      end: "30.10.2022",
      image: "https://i.ytimg.com/vi/ykBGw9qo41c/maxresdefault.jpg",
      url: "",
      name: "Белая пыль и снежная тень"
    },
    {
      id: 2,
      start: "10.10.2022",
      end: "25.10.2022",
      image: "https://img2.wtftime.ru/store/2022/03/16/nCE8384s.jpg",
      url: "",
      name: "Зефир буйного сада"
    }
  ],
  banners: [
    {
      id: 1,
      image:
        "https://genshin.ru/wp-content/uploads/2021/06/banner_kadzuha_2.jpg",
      characters: [
        {
          id: 1,
          name: "Кадзуха Каэдахара"
        },
        {
          id: 2,
          name: "Кадзуха Каэдахара"
        },
        {
          id: 3,
          name: "Кадзуха Каэдахара"
        },
        {
          id: 4,
          name: "Кадзуха Каэдахара"
        }
      ]
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/iwN6CBcnHSU/maxresdefault.jpg?7857057827",
      characters: [
        {
          id: 1,
          name: "Кадзуха Каэдахара"
        },
        {
          id: 2,
          name: "Кадзуха Каэдахара"
        },
        {
          id: 3,
          name: "Кадзуха Каэдахара"
        },
        {
          id: 4,
          name: "Кадзуха Каэдахара"
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
    weapons: [...state.weapons]
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
export default mainReducer;
