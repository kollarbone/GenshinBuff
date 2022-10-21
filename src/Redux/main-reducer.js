import banner_1 from "../Components/Images/Banners/banner_1.jpg";
import banner_2 from "../Components/Images/Banners/banner_2.jpg";
import banner_3 from "../Components/Images/Banners/banner_3.jpg";

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
  talents: [
    {
      monday: [
        {
          id: 1,
          name: "свобода",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/1b2/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/2d3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 2,
          name: "процветание",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/869/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        }
      ],
      tuesday: [{}],
      wednesday: [{}],
      thursday: [{}],
      friday: [{}],
      saturday: [{}],
      sunday: [{}]
    }
  ],
  weapons: [
    {
      monday: [
        {
          id: 1,
          name: "Коралловая ветвь внешних морей",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/dda/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Oko-klyatvy.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/4d2/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Akuomaru.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/676/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Vechnoe-lunnoe-siyanie.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/776/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Amenoma_Kageuchi.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/dcc/255_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Koltso-zari.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/16f/255_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Otrazhenie-rassekayushchego-tuman.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/6ed/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Korallovaya-vetv-vneshnikh-morey.png"
        },
        {
          id: 2,
          name: "Медный амулет лесной росы",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/511/acwj88n3a0y6cvpjgsjk09lw72z0ss79/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klyuch-KHadzh_nisut.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/cde/pe6iaqs4cf3nk4u7vls2alk5bt95tc85/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Lunnoe-siyanie-ksifosa.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/6be/8gama49ihlec8hg6nb3md35bpfqj7s83/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Regaliya-lesa.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/d05/5mv7v5o53xa6gf8yq2d9z1t614d12djl/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Derevyannyy-klinok.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/cc1/d7sew2c8u5qcs03zs36e6ee5yi76yjmr/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
        }
      ],
      tuesday: [{}],
      wednesday: [{}],
      thursday: [{}],
      friday: [{}],
      saturday: [{}],
      sunday: [{}]
    }
  ]
};
const mainReducer = initialState;
export default mainReducer;
