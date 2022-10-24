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
        },
        {
          id: 3,
          name: "бренность",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/1b2/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/40a/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ucheniya-o-_Brennosti_.png"
        },
        {
          id: 4,
          name: "наставление",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/cf4/1ixyjboskzkam0q5l1bvrhollmp6t62m/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/912/gy6gjnl0a31uq8ylhvok6w2cf7nfbckt/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/91d/8vc271qn7jckjc2zjvo55u5rujpjgrxy/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
        }
      ],
      tuesday: [
        {
          id: 1,
          name: "борьба",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/e08/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 2,
          name: "усердие",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/b6f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 3,
          name: "изящество",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/b68/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ucheniya-ob-_Izyashchestve_.png"
        },
        {
          id: 4,
          name: "остроумие",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/0e8/dvi6adp97r8hwi4nh0a1m6l200s0flob/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dori.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/c32/yfd2q2f1j9oww9jsvkzxw41jb2tqeqp7/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
        }
      ],
      wednesday: [
        {
          id: 1,
          name: "поэзия",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/e10/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 2,
          name: "золото",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/f1e/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 3,
          name: "свет",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/ef8/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ucheniya-o-_Svete_.png"
        },
        {
          id: 4,
          name: "честность",
          characters: [
            "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/cac/sjy0935yntt3lat2qivjbykdqxfycqnb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Collei.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/9fb/r35srkaw2k2lpl0kyzu5fy5q1wjzr64s/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
        }
      ],
      sunday: [
        "https://genshin-info.ru/upload/resize_cache/iblock/2d3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/869/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/40a/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ucheniya-o-_Brennosti_.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/91d/8vc271qn7jckjc2zjvo55u5rujpjgrxy/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp",
        "https://genshin-info.ru/upload/resize_cache/iblock/e08/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/b6f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/b68/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ucheniya-ob-_Izyashchestve_.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/c32/yfd2q2f1j9oww9jsvkzxw41jb2tqeqp7/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp",
        "https://genshin-info.ru/upload/resize_cache/iblock/e10/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/f1e/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/ef8/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ucheniya-o-_Svete_.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/9fb/r35srkaw2k2lpl0kyzu5fy5q1wjzr64s/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
      ]
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
        },
        {
          id: 3,
          name: "Светящийся песок Гуюнь",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/e55/256_254_1d7a58ff99b324185ccb5ad5dfbdb5e85/Akva-simulyakrum.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/1eb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/f30/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/793/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/8a4/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/a06/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/380/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/c49/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/c89/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/867/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/997/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/431/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/960/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/e3b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/0a9/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/088/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/bf5/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 4,
          name: "Плитка башни Декарабиана",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/8a7/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Kinovarnoe-vereteno.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/818/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Vals-Nirvany-nochi.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/fea/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Pesn-razbitykh-sosen.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/3c4/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/c1a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/7c9/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/4ee/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/8d0/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/1fe/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/221/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/ba3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/d81/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/baa/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/836/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/0cd/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/97a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/2db/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/6ee/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/891/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/0ca/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        }
      ],
      tuesday: [
        {
          id: 1,
          name: "Молочный зуб арктического волка",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/e37/nfp56ejunlocl3qeb3ocwj2e59wzap4q/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Kopye-poslaniya-vetrov.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/d6b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dodoco_Tales.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/fc7/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/7eb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/8dc/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/f9b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/57f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/85f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/636/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/67a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/177/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/50b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/01a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/4e9/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/8d5/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/e03/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/f14/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/e20/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/1c3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/fc8/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/beb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/882/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/b41/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/8bf/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/67e/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/811/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 2,
          name: "Свинцовая пилюля Заоблачного моря",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/5e5/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Usmiritel-bed.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/75b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/b5d/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/17d/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/64f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/f19/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/9be/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/d8c/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/0e5/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/75c/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/5b2/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/2aa/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/5fa/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/1b6/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/116/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/85d/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/cb6/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/fd7/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 3,
          name: "Мудрость Наруками",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/077/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/KHaran-geppaku-futsu.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/919/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Krasnorogiy-kamnerub.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/a46/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Luna-Moun.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/c69/256_238_1d7a58ff99b324185ccb5ad5dfbdb5e85/khishchnik.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/d8b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Katsuragikiri_Nagamasa.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/fe9/255_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Luk-ubiytsy-demonov.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/bd5/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Thundering_Pulse.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/806/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Mudrost-Narukami.png"
        },
        {
          id: 4,
          name: "Воспоминания цветущего оазиса",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/075/2u23i7g8do44pp5mbk7r5s0keyq525x9/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Skitayushchayasya-zvezda.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/2fa/p8axyva1rdjgk2renhhxis84l0jglakf/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Posokh-alykh-peskov.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/83b/ekfaw76quzzsfbmxizfw2ygqpqz5yag8/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Plod-vospolneniya.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/2b2/bax2wyb74r765qaygvucufmghs4rfz57/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Pronzayushchiy-lunu.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/e6d/hk0apr6tmunood4bkf29wvlolndmqk95/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
        }
      ],
      wednesday: [
        {
          id: 1,
          name: "Кандалы львиного клыка",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/8a3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUnost-Boreya.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/e1a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/okhotnik-vo-tme.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/d5c/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/834/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/b71/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/f43/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/a20/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/bd6/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/d89/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/4c2/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/7d8/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/9ad/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/211/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/890/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/489/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/153/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/1f1/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/73d/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/f1c/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/54f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/6bb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/147/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/1e0/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 2,
          name: "Зерно чёрного сидерита",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/fb1/235_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Gasnushchie-sumerki.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/c65/223_228_1d7a58ff99b324185ccb5ad5dfbdb5e85/Blagodatnyy-vladyka-vod.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/c7a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/3ef/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/fb4/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/b87/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/709/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/5bb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/552/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/620/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/bce/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/02f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/d85/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/873/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/511/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/dfb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
        },
        {
          id: 3,
          name: "Маска злого военачальника",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/42e/hbxzstat3mk0qell9g12ksv04bwel5wp/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Demonicheskiy-mech.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/716/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Istina-kagura.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/ae5/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Rezhushchiy-volny-plavnik.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/b44/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Polyarnaya-zvezda.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/a2d/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Siyayushchaya-zhatva.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/6b5/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ulov.png",
            "https://genshin-info.ru/upload/resize_cache/iblock/6e3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Kitain_Cross_Spear.png"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/4ac/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Maska-zlogo-voenachalnika.png"
        },
        {
          id: 4,
          name: "Эхо пылающей мощи",
          weapon: [
            "https://genshin-info.ru/upload/resize_cache/iblock/dbf/o5vcp60hqmqkse6o8a8eugpbsq5xvt6y/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Akvamarin-makhayry.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/b0d/2o0ywbmxzfkqs0ytnhp94jt2zrx3k95s/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Okhotnichya-tropa.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/2e7/a0ndnp84kb6mp0gyn10naco9phqqty8b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Issushitel.webp",
            "https://genshin-info.ru/upload/resize_cache/iblock/970/4meixowwgb09zoh1hfnku9pzyzvluubd/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Priblizhyennyy-korolya.webp"
          ],
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/eeb/lh8t2vomzt1rvthgw9j2misr3n3h25b2/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
        }
      ],
      sunday: [
        "https://genshin-info.ru/upload/resize_cache/iblock/0ca/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/811/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/bf5/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/cc1/d7sew2c8u5qcs03zs36e6ee5yi76yjmr/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp",
        "https://genshin-info.ru/upload/resize_cache/iblock/811/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/fd7/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/806/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Mudrost-Narukami.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/e6d/hk0apr6tmunood4bkf29wvlolndmqk95/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp",
        "https://genshin-info.ru/upload/resize_cache/iblock/1e0/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/dfb/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/4ac/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Maska-zlogo-voenachalnika.png",
        "https://genshin-info.ru/upload/resize_cache/iblock/eeb/lh8t2vomzt1rvthgw9j2misr3n3h25b2/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
      ]
    }
  ],
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
const mainReducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
};

export default mainReducer;
