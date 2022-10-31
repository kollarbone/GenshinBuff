import anemo from "../Components/Images/Elements/anemo.png";
import crio from "../Components/Images/Elements/crio.png";
import dendro from "../Components/Images/Elements/dendro.png";
import electro from "../Components/Images/Elements/electro.png";
import geo from "../Components/Images/Elements/geo.png";
import gidro from "../Components/Images/Elements/gidro.png";
import pyro from "../Components/Images/Elements/pyro.png";

let initialState = {
  elements: [anemo, crio, dendro, electro, geo, gidro, pyro],
  no: [
    {
      SS: {
        dps: [
          {
            id: 13,
            name: "Аято",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 17,
            name: "Итто",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp"
          },
          {
            id: 26,
            name: "Аяка",
            level: "SS",
            color: "#ad7819",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          },
          {
            id: 31,
            name: "Ху Тао",
            color: "#ad7819",
            level: "SS",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp"
          },
          {
            id: 33,
            name: "Гань Юй",
            color: "#ad7819",
            level: "SS",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          }
        ],
        sub: [
          {
            id: 12,
            name: "Е Лань",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 50,
            name: "Син Цю",
            level: "SS",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp"
          }
        ],
        sup: [
          {
            id: 12,
            name: "Е Лань",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 35,
            name: "Чжун Ли",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 58,
            name: "Беннет",
            level: "SS",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp"
          }
        ]
      },
      S: {
        dps: [
          {
            id: 4,
            name: "Сайно",
            level: "S",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cf4/1ixyjboskzkam0q5l1bvrhollmp6t62m/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno.webp"
          },
          {
            id: 7,
            name: "Тигнари",
            level: "S",
            color: "#ad7819",
            element: "dendro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/912/gy6gjnl0a31uq8ylhvok6w2cf7nfbckt/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari.webp"
          },
          {
            id: 12,
            name: "Е Лань",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "S",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 24,
            name: "Ёимия",
            color: "#ad7819",
            level: "S",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp"
          },
          {
            id: 28,
            name: "Эола",
            level: "S",
            color: "#ad7819",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp"
          },
          {
            id: 37,
            name: "Тарталья",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp"
          },
          {
            id: 43,
            name: "Кэ Цин",
            level: "S",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp"
          },
          {
            id: 32,
            name: "Сяо",
            color: "#ad7819",
            level: "S",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp"
          }
        ],
        sub: [
          {
            id: 14,
            name: "Яэ мико",
            level: "S",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png"
          },
          {
            id: 26,
            name: "Аяка",
            level: "S",
            color: "#ad7819",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          },
          {
            id: 48,
            name: "Фишль",
            level: "S",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp"
          },
          {
            id: 49,
            name: "Сян Лин",
            level: "S",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 33,
            name: "Гань Юй",
            level: "S",
            color: "#ad7819",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          },
          {
            id: 40,
            name: "Венти",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp"
          },
          {
            id: 34,
            name: "Альбедо",
            level: "S",
            color: "#ad7819",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          }
        ],
        sup: [
          {
            id: 6,
            name: "Дори",
            level: "S",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e8/dvi6adp97r8hwi4nh0a1m6l200s0flob/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dori.webp"
          },
          {
            id: 9,
            name: "Дендро",
            level: "S",
            color: "#ad7819",
            element: "dendro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 16,
            name: "Юнь Цзынь",
            level: "S",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png"
          },
          {
            id: 15,
            name: "Шэнь Хэ",
            level: "S",
            color: "#ad7819",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png"
          },
          {
            id: 18,
            name: "Горо",
            level: "S",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp"
          },
          {
            id: 51,
            name: "Сахароза",
            level: "S",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp"
          },
          {
            id: 38,
            name: "Диона",
            level: "S",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp"
          },
          {
            id: 45,
            name: "Джинн",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp"
          },
          {
            id: 40,
            name: "Венти",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp"
          }
        ]
      },
      A: {
        dps: [
          {
            id: 10,
            name: "Хейдзо",
            level: "A",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 29,
            name: "Янь Фей",
            level: "A",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp"
          },
          {
            id: 39,
            name: "Кли",
            level: "A",
            color: "#ad7819",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp"
          },
          {
            id: 44,
            name: "Дилюк",
            color: "#ad7819",
            level: "A",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp"
          }
        ],
        sub: [
          {
            id: 5,
            name: "Кандакия",
            level: "A",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 3,
            name: "Нилу",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp"
          },
          {
            id: 8,
            name: "Коллеи",
            level: "A",
            element: "dendro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cac/sjy0935yntt3lat2qivjbykdqxfycqnb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Collei.webp"
          },
          {
            id: 11,
            name: "Синобу",
            level: "A",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
          },
          {
            id: 13,
            name: "Аято",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 19,
            name: "Тома",
            level: "A",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "A",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 35,
            name: "Чжун Ли",
            level: "A",
            color: "#ad7819",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp"
          },
          {
            id: 51,
            name: "Сахароза",
            level: "A",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp"
          },
          {
            id: 57,
            name: "Бей Доу",
            level: "A",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          }
        ],
        sup: [
          {
            id: 5,
            name: "Кандакия",
            level: "A",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 11,
            name: "Синобу",
            level: "A",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
          },
          {
            id: 23,
            name: "Сара",
            level: "A",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp"
          },
          {
            id: 25,
            name: "Саю",
            level: "A",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          },
          {
            id: 41,
            name: "Ци Ци",
            level: "A",
            element: "crio",
            color: "#ad7819",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp"
          },
          {
            id: 59,
            name: "Барбара",
            level: "A",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          }
        ]
      },
      B: {
        dps: [
          {
            id: 5,
            name: "Кандакия",
            level: "B",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 3,
            name: "Нилу",
            level: "B",
            color: "#ad7819",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 52,
            name: "Рейзор",
            level: "B",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp"
          },
          {
            id: 54,
            name: "Нин Гуан",
            level: "B",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp"
          },
          {
            id: 56,
            name: "Кэйа",
            level: "B",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp"
          },
          {
            id: 57,
            name: "Бей Доу",
            level: "B",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          }
        ],
        sub: [
          {
            id: 10,
            name: "Хейдзо",
            level: "B",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png"
          },
          {
            id: 9,
            name: "Дендро",
            level: "B",
            color: "#ad7819",
            element: "dendro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 25,
            name: "Саю",
            level: "B",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 56,
            name: "Кэйа",
            level: "B",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "B",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          },
          {
            id: 55,
            name: "Лиза",
            level: "B",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp"
          },
          {
            id: 45,
            name: "Джинн",
            level: "B",
            element: "anemo",
            color: "#ad7819",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp"
          }
        ],
        sup: [
          {
            id: 19,
            name: "Тома",
            level: "B",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 9,
            name: "Электро",
            level: "B",
            color: "#ad7819",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "B",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "B",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          },
          {
            id: 55,
            name: "Лиза",
            level: "B",
            element: "electro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp"
          },
          {
            id: 34,
            name: "Альбедо",
            level: "B",
            color: "#ad7819",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          }
        ]
      },
      C: {
        dps: [
          {
            id: 22,
            name: "Элой",
            level: "C",
            color: "#ad7819",
            element: "crio",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp"
          },
          {
            id: 53,
            name: "Ноэлль",
            level: "C",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp"
          },
          {
            id: 59,
            name: "Барбара",
            level: "C",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          }
        ],
        sub: [
          {
            id: 46,
            name: "Эмбер",
            level: "C",
            element: "pyro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp"
          },
          {
            id: 9,
            name: "Гео",
            level: "C",
            color: "#ad7819",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 9,
            name: "Анемо",
            level: "C",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          }
        ],
        sup: [
          {
            id: 9,
            name: "Анемо",
            level: "C",
            color: "#ad7819",
            element: "anemo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 50,
            name: "Син Цю",
            level: "C",
            element: "gidro",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp"
          },
          {
            id: 53,
            name: "Ноэлль",
            level: "C",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 54,
            name: "Нин Гуан",
            level: "C",
            element: "geo",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp"
          }
        ]
      }
    }
  ],
  comfort: [
    {
      SS: {
        dps: [
          {
            id: 13,
            name: "Аято",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 17,
            name: "Итто",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp"
          },
          {
            id: 26,
            name: "Аяка",
            level: "SS",
            color: "#ad7819",
            element: "crio",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 31,
            name: "Ху Тао",
            color: "#ad7819",
            level: "SS",
            element: "pyro",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp"
          },
          {
            id: 33,
            name: "Гань Юй",
            color: "#ad7819",
            level: "SS",
            element: "crio",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          }
        ],
        sub: [
          {
            id: 12,
            name: "Е Лань",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 50,
            name: "Син Цю",
            level: "SS",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp"
          },
          {
            id: 49,
            name: "Сян Лин",
            level: "SS",
            element: "pyro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp"
          }
        ],
        sup: [
          {
            id: 12,
            name: "Е Лань",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 35,
            name: "Чжун Ли",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 58,
            name: "Беннет",
            level: "SS",
            element: "pyro",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp"
          }
        ]
      },
      S: {
        dps: [
          {
            id: 4,
            name: "Сайно",
            level: "S",
            color: "#ad7819",
            element: "electro",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cf4/1ixyjboskzkam0q5l1bvrhollmp6t62m/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno.webp"
          },
          {
            id: 7,
            name: "Тигнари",
            level: "S",
            color: "#ad7819",
            element: "dendro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/912/gy6gjnl0a31uq8ylhvok6w2cf7nfbckt/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari.webp"
          },
          {
            id: 12,
            name: "Е Лань",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 24,
            name: "Ёимия",
            color: "#ad7819",
            level: "S",
            element: "pyro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp"
          },
          {
            id: 28,
            name: "Эола",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp"
          },
          {
            id: 37,
            name: "Тарталья",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp"
          },
          {
            id: 43,
            name: "Кэ Цин",
            level: "S",
            color: "#ad7819",
            element: "electro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp"
          },
          {
            id: 32,
            name: "Сяо",
            color: "#ad7819",
            level: "S",
            element: "anemo",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp"
          }
        ],
        sub: [
          {
            id: 14,
            name: "Яэ мико",
            level: "S",
            color: "#ad7819",
            element: "electro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png"
          },
          {
            id: 11,
            name: "Синобу",
            level: "S",
            element: "electro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
          },
          {
            id: 26,
            name: "Аяка",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          },
          {
            id: 48,
            name: "Фишль",
            level: "S",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 33,
            name: "Гань Юй",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          },
          {
            id: 40,
            name: "Венти",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp"
          },
          {
            id: 57,
            name: "Бей Доу",
            level: "S",
            element: "electro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          },
          {
            id: 34,
            name: "Альбедо",
            level: "S",
            color: "#ad7819",
            element: "geo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          }
        ],
        sup: [
          {
            id: 6,
            name: "Дори",
            level: "S",
            element: "electro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e8/dvi6adp97r8hwi4nh0a1m6l200s0flob/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dori.webp"
          },
          {
            id: 9,
            name: "Дендро",
            level: "S",
            color: "#ad7819",
            element: "dendro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 16,
            name: "Юнь Цзынь",
            level: "S",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png"
          },
          {
            id: 15,
            name: "Шэнь Хэ",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png"
          },
          {
            id: 18,
            name: "Горо",
            level: "S",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp"
          },
          {
            id: 23,
            name: "Сара",
            level: "S",
            element: "electro",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp"
          },
          {
            id: 51,
            name: "Сахароза",
            level: "S",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp"
          },
          {
            id: 38,
            name: "Диона",
            level: "S",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp"
          },
          {
            id: 45,
            name: "Джинн",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp"
          },
          {
            id: 40,
            name: "Венти",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp"
          }
        ]
      },
      A: {
        dps: [
          {
            id: 10,
            name: "Хейдзо",
            level: "A",
            element: "anemo",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png"
          },
          {
            id: 3,
            name: "Нилу",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 29,
            name: "Янь Фей",
            level: "A",
            element: "pyro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp"
          },
          {
            id: 39,
            name: "Кли",
            level: "A",
            color: "#ad7819",
            element: "pyro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp"
          },
          {
            id: 54,
            name: "Нин Гуан",
            level: "A",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp"
          },
          {
            id: 53,
            name: "Ноэлль",
            level: "A",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp"
          },
          {
            id: 44,
            name: "Дилюк",
            color: "#ad7819",
            level: "A",
            element: "pyro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp"
          }
        ],
        sub: [
          {
            id: 5,
            name: "Кандакия",
            level: "A",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 3,
            name: "Нилу",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp"
          },
          {
            id: 8,
            name: "Коллеи",
            level: "A",
            element: "dendro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cac/sjy0935yntt3lat2qivjbykdqxfycqnb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Collei.webp"
          },
          {
            id: 13,
            name: "Аято",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 19,
            name: "Тома",
            level: "A",
            element: "pyro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 9,
            name: "Дендро",
            level: "A",
            color: "#ad7819",
            element: "dendro",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "A",
            element: "crio",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 35,
            name: "Чжун Ли",
            level: "A",
            color: "#ad7819",
            element: "geo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp"
          },
          {
            id: 51,
            name: "Сахароза",
            level: "A",
            element: "anemo",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp"
          }
        ],
        sup: [
          {
            id: 5,
            name: "Кандакия",
            level: "A",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 11,
            name: "Синобу",
            level: "A",
            element: "electro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
          },
          {
            id: 25,
            name: "Саю",
            level: "A",
            element: "anemo",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          },
          {
            id: 41,
            name: "Ци Ци",
            level: "A",
            element: "crio",
            color: "#ad7819",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp"
          },
          {
            id: 9,
            name: "Электро",
            level: "A",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 59,
            name: "Барбара",
            level: "A",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          }
        ]
      },
      B: {
        dps: [
          {
            id: 5,
            name: "Кандакия",
            level: "B",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 52,
            name: "Рейзор",
            level: "B",
            element: "electro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp"
          },
          {
            id: 48,
            name: "Фишль",
            level: "B",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp"
          },
          {
            id: 56,
            name: "Кэйа",
            level: "B",
            element: "crio",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp"
          }
        ],
        sub: [
          {
            id: 10,
            name: "Хейдзо",
            level: "B",
            element: "anemo",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 56,
            name: "Кэйа",
            level: "B",
            element: "crio",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "B",
            element: "pyro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          },
          {
            id: 55,
            name: "Лиза",
            level: "B",
            element: "electro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp"
          },
          {
            id: 45,
            name: "Джинн",
            level: "B",
            element: "anemo",
            color: "#ad7819",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp"
          }
        ],
        sup: [
          {
            id: 19,
            name: "Тома",
            level: "B",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "B",
            element: "pyro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          },
          {
            id: 55,
            name: "Лиза",
            level: "B",
            element: "electro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp"
          },
          {
            id: 39,
            name: "Кли",
            level: "B",
            color: "#ad7819",
            element: "pyro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp"
          },
          {
            id: 34,
            name: "Альбедо",
            level: "B",
            color: "#ad7819",
            element: "geo",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          }
        ]
      },
      C: {
        dps: [
          {
            id: 22,
            name: "Элой",
            level: "C",
            color: "#ad7819",
            element: "crio",
            stars: 0,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp"
          },
          {
            id: 16,
            name: "Юнь Цзынь",
            level: "C",
            element: "geo",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png"
          },
          {
            id: 30,
            name: "Розария",
            level: "C",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "C",
            element: "pyro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "C",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 57,
            name: "Бей Доу",
            level: "A",
            element: "electro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          },
          {
            id: 59,
            name: "Барбара",
            level: "C",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          }
        ],
        sub: [
          {
            id: 46,
            name: "Эмбер",
            level: "C",
            element: "pyro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp"
          },
          {
            id: 9,
            name: "Гео",
            level: "C",
            color: "#ad7819",
            element: "geo",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 25,
            name: "Саю",
            level: "C",
            element: "anemo",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          },
          {
            id: 9,
            name: "Анемо",
            level: "C",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          }
        ],
        sup: [
          {
            id: 50,
            name: "Син Цю",
            level: "C",
            element: "gidro",
            stars: 2,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp"
          },
          {
            id: 53,
            name: "Ноэлль",
            level: "C",
            element: "geo",
            stars: 1,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 29,
            name: "Янь Фей",
            level: "C",
            element: "pyro",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp"
          },
          {
            id: 54,
            name: "Нин Гуан",
            level: "C",
            element: "geo",
            stars: 4,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp"
          },
          {
            id: 9,
            name: "Гео",
            level: "C",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          }
        ]
      }
    }
  ],
  max: [
    {
      SS: {
        dps: [
          {
            id: 13,
            name: "Аято",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 17,
            name: "Итто",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp"
          },
          {
            id: 28,
            name: "Эола",
            level: "SS",
            color: "#ad7819",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp"
          },
          {
            id: 26,
            name: "Аяка",
            level: "SS",
            color: "#ad7819",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 32,
            name: "Сяо",
            color: "#ad7819",
            level: "SS",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp"
          },
          {
            id: 31,
            name: "Ху Тао",
            color: "#ad7819",
            level: "SS",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp"
          }
        ],
        sub: [
          {
            id: 12,
            name: "Е Лань",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 40,
            name: "Венти",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp"
          },
          {
            id: 14,
            name: "Яэ мико",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 26,
            name: "Аяка",
            level: "SS",
            color: "#ad7819",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 34,
            name: "Альбедо",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          },
          {
            id: 50,
            name: "Син Цю",
            level: "SS",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp"
          },
          {
            id: 49,
            name: "Сян Лин",
            level: "SS",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp"
          }
        ],
        sup: [
          {
            id: 12,
            name: "Е Лань",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 21,
            name: "Райден",
            level: "SS",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 40,
            name: "Венти",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "SS",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 35,
            name: "Чжун Ли",
            level: "SS",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "SS",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 58,
            name: "Беннет",
            level: "SS",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp"
          }
        ]
      },
      S: {
        dps: [
          {
            id: 4,
            name: "Сайно",
            level: "S",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cf4/1ixyjboskzkam0q5l1bvrhollmp6t62m/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno.webp"
          },
          {
            id: 7,
            name: "Тигнари",
            level: "S",
            color: "#ad7819",
            element: "dendro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/912/gy6gjnl0a31uq8ylhvok6w2cf7nfbckt/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari.webp"
          },
          {
            id: 27,
            name: "Кадзуха",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp"
          },
          {
            id: 33,
            name: "Гань Юй",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          },
          {
            id: 12,
            name: "Е Лань",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp"
          },
          {
            id: 24,
            name: "Ёимия",
            color: "#ad7819",
            level: "S",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp"
          },
          {
            id: 37,
            name: "Тарталья",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp"
          },
          {
            id: 43,
            name: "Кэ Цин",
            level: "S",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp"
          }
        ],
        sub: [
          {
            id: 11,
            name: "Синобу",
            level: "S",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
          },
          {
            id: 5,
            name: "Кандакия",
            level: "S",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 3,
            name: "Нилу",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp"
          },
          {
            id: 13,
            name: "Аято",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 8,
            name: "Коллеи",
            level: "S",
            element: "dendro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cac/sjy0935yntt3lat2qivjbykdqxfycqnb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Collei.webp"
          },
          {
            id: 48,
            name: "Фишль",
            level: "S",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 33,
            name: "Гань Юй",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          },
          {
            id: 57,
            name: "Бей Доу",
            level: "S",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          }
        ],
        sup: [
          {
            id: 6,
            name: "Дори",
            level: "S",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e8/dvi6adp97r8hwi4nh0a1m6l200s0flob/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dori.webp"
          },
          {
            id: 9,
            name: "Дендро",
            level: "S",
            color: "#ad7819",
            element: "dendro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 16,
            name: "Юнь Цзынь",
            level: "S",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png"
          },
          {
            id: 15,
            name: "Шэнь Хэ",
            level: "S",
            color: "#ad7819",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png"
          },
          {
            id: 34,
            name: "Альбедо",
            level: "S",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          },
          {
            id: 18,
            name: "Горо",
            level: "S",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp"
          },
          {
            id: 23,
            name: "Сара",
            level: "S",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp"
          },
          {
            id: 51,
            name: "Сахароза",
            level: "S",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp"
          },
          {
            id: 38,
            name: "Диона",
            level: "S",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp"
          },
          {
            id: 13,
            name: "Аято",
            level: "S",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
          },
          {
            id: 45,
            name: "Джинн",
            level: "S",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp"
          }
        ]
      },
      A: {
        dps: [
          {
            id: 10,
            name: "Хейдзо",
            level: "A",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png"
          },
          {
            id: 3,
            name: "Нилу",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp"
          },
          {
            id: 20,
            name: "Кокоми",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp"
          },
          {
            id: 29,
            name: "Янь Фей",
            level: "A",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp"
          },
          {
            id: 42,
            name: "Мона",
            level: "A",
            color: "#ad7819",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp"
          },
          {
            id: 39,
            name: "Кли",
            level: "A",
            color: "#ad7819",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp"
          },
          {
            id: 54,
            name: "Нин Гуан",
            level: "A",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp"
          },
          {
            id: 53,
            name: "Ноэлль",
            level: "A",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp"
          },
          {
            id: 44,
            name: "Дилюк",
            color: "#ad7819",
            level: "A",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp"
          }
        ],
        sub: [
          {
            id: 19,
            name: "Тома",
            level: "A",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 9,
            name: "Дендро",
            level: "A",
            color: "#ad7819",
            element: "dendro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 25,
            name: "Саю",
            level: "A",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "A",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 35,
            name: "Чжун Ли",
            level: "A",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp"
          },
          {
            id: 51,
            name: "Сахароза",
            level: "A",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp"
          }
        ],
        sup: [
          {
            id: 5,
            name: "Кандакия",
            level: "A",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 11,
            name: "Синобу",
            level: "A",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
          },
          {
            id: 25,
            name: "Саю",
            level: "A",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          },
          {
            id: 41,
            name: "Ци Ци",
            level: "A",
            element: "crio",
            color: "#ad7819",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp"
          },
          {
            id: 9,
            name: "Электро",
            level: "A",
            color: "#ad7819",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 39,
            name: "Кли",
            level: "A",
            color: "#ad7819",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp"
          },
          {
            id: 59,
            name: "Барбара",
            level: "A",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          }
        ]
      },
      B: {
        dps: [
          {
            id: 5,
            name: "Кандакия",
            level: "B",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp"
          },
          {
            id: 52,
            name: "Рейзор",
            level: "B",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp"
          },
          {
            id: 48,
            name: "Фишль",
            level: "B",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp"
          },
          {
            id: 56,
            name: "Кэйа",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp"
          }
        ],
        sub: [
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 56,
            name: "Кэйа",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp"
          },
          {
            id: 55,
            name: "Лиза",
            level: "B",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp"
          },
          {
            id: 45,
            name: "Джинн",
            level: "B",
            element: "anemo",
            color: "#ad7819",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp"
          }
        ],
        sup: [
          {
            id: 19,
            name: "Тома",
            level: "B",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 47,
            name: "Чун Юнь",
            level: "B",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "B",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          }
        ]
      },
      C: {
        dps: [
          {
            id: 16,
            name: "Юнь Цзынь",
            level: "C",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png"
          },
          {
            id: 19,
            name: "Тома",
            level: "C",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp"
          },
          {
            id: 30,
            name: "Розария",
            level: "C",
            element: "crio",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp"
          },
          {
            id: 36,
            name: "Синь Янь",
            level: "C",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp"
          },
          {
            id: 57,
            name: "Бей Доу",
            level: "C",
            element: "electro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          },
          {
            id: 59,
            name: "Барбара",
            level: "C",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp"
          }
        ],
        sub: [
          {
            id: 46,
            name: "Эмбер",
            level: "C",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp"
          },
          {
            id: 9,
            name: "Гео",
            level: "C",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          },
          {
            id: 9,
            name: "Анемо",
            level: "C",
            color: "#ad7819",
            element: "anemo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          }
        ],
        sup: [
          {
            id: 50,
            name: "Син Цю",
            level: "C",
            element: "gidro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp"
          },
          {
            id: 53,
            name: "Ноэлль",
            level: "C",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp"
          },
          {
            id: 29,
            name: "Янь Фей",
            level: "C",
            element: "pyro",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp"
          },
          {
            id: 54,
            name: "Нин Гуан",
            level: "C",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp"
          },
          {
            id: 9,
            name: "Гео",
            level: "C",
            color: "#ad7819",
            element: "geo",
            stars: 6,
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
          }
        ]
      }
    }
  ]
};
const tierlistReducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
};

export default tierlistReducer;
