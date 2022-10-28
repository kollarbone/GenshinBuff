import anemo from "../Components/Images/Elements/anemo.png";
import crio from "../Components/Images/Elements/crio.png";
import dendro from "../Components/Images/Elements/dendro.png";
import electro from "../Components/Images/Elements/electro.png";
import geo from "../Components/Images/Elements/geo.png";
import gidro from "../Components/Images/Elements/gidro.png";
import pyro from "../Components/Images/Elements/pyro.png";

let initialState = {
  elements: [anemo, crio, dendro, electro, geo, gidro, pyro],
  characters: [
    {
      id: 1,
      name: "Нахида",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/407/xtid5thyty6m6ibcm8zey84ismjnam7j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/nahida.webp",
      element: "dendro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "",
          sup: ""
        },
        max: {
          dps: "",
          sub: "",
          sup: ""
        }
      }
    },
    {
      id: 2,
      name: "Лайла",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/8ee/kifhfp7hq786tpak8bjb89u4tmwoqimw/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/layla.webp",
      element: "crio",
      star_for_dps: "",
      star_for_sub: "",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "",
          sup: ""
        },
        max: {
          dps: "",
          sub: "",
          sup: ""
        }
      }
    },
    {
      id: 3,
      name: "Нилу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp",
      element: "gidro",
      color: "#ad7819",
      star_for_dps: "2",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "B",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "A",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "A",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 4,
      name: "Сайно",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/cf4/1ixyjboskzkam0q5l1bvrhollmp6t62m/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno.webp",
      element: "electro",
      color: "#ad7819",
      star_for_dps: "1",
      star_for_sub: "",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "S",
          sub: "",
          sup: ""
        },
        comfort: {
          dps: "S",
          sub: "",
          sup: ""
        },
        max: {
          dps: "S",
          sub: "",
          sup: ""
        }
      }
    },
    {
      id: 5,
      name: "Кандакия",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp",
      element: "gidro",
      star_for_dps: "2",
      star_for_sub: "2",
      star_for_sup: "2",
      tierlist: {
        no: {
          dps: "B",
          sub: "A",
          sup: "A"
        },
        comfort: {
          dps: "B",
          sub: "A",
          sup: "A"
        },
        max: {
          dps: "B",
          sub: "S",
          sup: "A"
        }
      }
    },
    {
      id: 6,
      name: "Дори",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/0e8/dvi6adp97r8hwi4nh0a1m6l200s0flob/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dori.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "",
      star_for_sup: "4",
      tierlist: {
        no: {
          dps: "",
          sub: "",
          sup: "S"
        },
        comfort: {
          dps: "",
          sub: "",
          sup: "S"
        },
        max: {
          dps: "",
          sub: "",
          sup: "S"
        }
      }
    },
    {
      id: 7,
      name: "Тигнари",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/912/gy6gjnl0a31uq8ylhvok6w2cf7nfbckt/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari.webp",
      element: "dendro",
      color: "#ad7819",
      star_for_dps: "2",
      star_for_sub: "",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "S",
          sub: "",
          sup: ""
        },
        comfort: {
          dps: "S",
          sub: "",
          sup: ""
        },
        max: {
          dps: "S",
          sub: "",
          sup: ""
        }
      }
    },
    {
      id: 8,
      name: "Коллеи",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/cac/sjy0935yntt3lat2qivjbykdqxfycqnb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Collei.webp",
      element: "dendro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 9,
      name: "Путешественник",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp",
      element: "all",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 10,
      name: "Хейдзо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png",
      element: "anemo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 11,
      name: "Синобу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 12,
      name: "Е Лань",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp",
      element: "gidro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 13,
      name: "Аято",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png",
      element: "gidro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 14,
      name: "Яэ Мико",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png",
      element: "electro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 15,
      name: "Шэнь Хэ",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png",
      element: "crio",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 16,
      name: "Юнь Цзинь",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png",
      element: "geo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 17,
      name: "Итто",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp",
      element: "geo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 18,
      name: "Горо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp",
      element: "geo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 19,
      name: "Тома",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp",
      element: "pyro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 20,
      name: "Кокоми",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp",
      element: "gidro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 21,
      name: "Райден",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp",
      element: "electro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 22,
      name: "Элой",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp",
      element: "crio",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 23,
      name: "Сара",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 24,
      name: "Ёимия",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp",
      element: "pyro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 25,
      name: "Саю",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp",
      element: "anemo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 26,
      name: "Аяка",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp",
      element: "crio",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 27,
      name: "Кадзуха",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp",
      element: "anemo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 28,
      name: "Эола",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp",
      element: "crio",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 29,
      name: "Янь Фей",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp",
      element: "pyro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 30,
      name: "Розария",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp",
      element: "crio",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 31,
      name: "Ху Тао",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp",
      element: "pyro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 32,
      name: "Сяо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp",
      element: "anemo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 33,
      name: "Гань Юй",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp",
      element: "crio",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 34,
      name: "Альбедо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp",
      element: "geo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 35,
      name: "Чжун Ли",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp",
      element: "geo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 36,
      name: "Синь Янь",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp",
      element: "pyro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 37,
      name: "Тарталья",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp",
      element: "gidro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 38,
      name: "Диона",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp",
      element: "crio",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 39,
      name: "Кли",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp",
      element: "pyro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 40,
      name: "Венти",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp",
      element: "anemo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 41,
      name: "Ци ци",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp",
      element: "crio",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 42,
      name: "Мона",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp",
      element: "gidro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 43,
      name: "Кэ Цин",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp",
      element: "electro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 44,
      name: "Дилюк",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp",
      element: "pyro",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 45,
      name: "Джинн",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp",
      element: "anemo",
      color: "#ad7819",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 46,
      name: "Эмбер",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp",
      element: "pyro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 47,
      name: "Чун Юнь",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp",
      element: "crio",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 48,
      name: "Фишль",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 49,
      name: "Сян Лин",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp",
      element: "pyro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 50,
      name: "Син Цю",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp",
      element: "gidro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 51,
      name: "Сахароза",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp",
      element: "anemo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 52,
      name: "Рейзор",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 53,
      name: "Ноэлль",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp",
      element: "geo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 54,
      name: "Нин Гуан",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp",
      element: "geo",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 55,
      name: "Лиза",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 56,
      name: "Кэйа",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp",
      element: "crio",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 57,
      name: "Бей Доу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp",
      element: "electro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 58,
      name: "Беннет",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp",
      element: "pyro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    },
    {
      id: 59,
      name: "Барбара",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp",
      element: "gidro",
      star_for_dps: "",
      star_for_sub: "2",
      star_for_sup: "",
      tierlist: {
        no: {
          dps: "",
          sub: "A",
          sup: ""
        },
        comfort: {
          dps: "",
          sub: "A",
          sup: ""
        },
        max: {
          dps: "",
          sub: "S",
          sup: ""
        }
      }
    }
  ]
};
const tierlistReducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
};

export default tierlistReducer;
