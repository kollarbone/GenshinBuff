import anemo from "../Components/Images/Elements/anemo.png";
import crio from "../Components/Images/Elements/crio.png";
import dendro from "../Components/Images/Elements/dendro.png";
import electro from "../Components/Images/Elements/electro.png";
import geo from "../Components/Images/Elements/geo.png";
import gidro from "../Components/Images/Elements/gidro.png";
import pyro from "../Components/Images/Elements/pyro.png";
const SETCHARACTERS = "SET-CHARACTERS";

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
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/599/qzy3z16ddlgpvwm5chx7nhtw4km7jjz5/1000_1000_1d7a58ff99b324185ccb5ad5dfbdb5e85/nahida_splash.webp",
      weapon: "Катализтор",
      сombat: "",
      about:
        "Этот персонаж еще не доступен в игре, это означает что приведенная информация может быть неточна и не соответствовать релизной версии игры.",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ],
      birthday: "",
      constellation: "Госпожа Мудрости",
      region: "Сумеру",
      date: "2 ноября 2022",
      titul: "Малая властительница Кусанали",
      stars: "5",
      videos: []
    },
    {
      id: 2,
      name: "Лайла",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/8ee/kifhfp7hq786tpak8bjb89u4tmwoqimw/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/layla.webp",
      element: "crio",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/895/oaw2wncik2a48vsor3m6mhqmyn0p4r1n/902_882_1d7a58ff99b324185ccb5ad5dfbdb5e85/layla_splash.webp",
      weapon: "Меч",
      сombat: "",
      about:
        "Этот персонаж еще не доступен в игре, это означает что приведенная информация может быть неточна и не соответствовать релизной версии игры.",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ],
      birthday: "",
      constellation: "Соловей",
      region: "Сумеру",
      date: "25 ноября 2022",
      titul: "На грани между сном и бодрствованием",
      stars: "4",
      videos: []
    },
    {
      id: 3,
      name: "Нилу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp",
      element: "gidro",
      color: "#ad7819",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/c11/xhhjv3qx9b9u3i6dk7g3h88tuv555m2m/1000_1000_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou_2.webp",
      weapon: "Меч",
      сombat:
        "Нилу — персонаж поддержки. При определённых условиях эффект её элементального навыка меняется, предоставляя отряду различные усиления.В зависимости от танцевальных шагов во время активации элементального навыка она наносит противникам урон Гидро или накладывает статус Мокрый, а её взрыв стихии наносит Гидро урон врагам в области действия.Если отряд состоит из персонажей определённых типов элементов, элементальный навык Нилу наделит всех персонажей поблизости Изобилием золотого кубка. Во время его воздействия персонажи, активируя реакцию Бутонизация, создадут Ядра изобилия, которые быстрее разрываются и обладают большой зоной поражения.",
      about:
        "Нилу — Знаменитая танцовщица Театра Зубаира. Изящная красавица с чистой и открытой душой.",
      rait: [
        {
          common: "A",
          abyss: "—",
          mainDPS: "A",
          subDPS: "A",
          support: "—",
          world: "C"
        }
      ],
      birthday: "3 декабря",
      constellation: "Водяная Лилия",
      region: "Сумеру",
      date: "14 октября 2022",
      titul: "Звезда театра Зубаира",
      stars: "5",
      videos: [
        "https://youtu.be/P5DeAD_uXE0",
        "https://youtu.be/rhvEIQj92w0",
        "https://youtu.be/ASR41LdpTKw"
      ]
    },
    {
      id: 4,
      name: "Сайно",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/cf4/1ixyjboskzkam0q5l1bvrhollmp6t62m/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno.webp",
      element: "electro",
      color: "#ad7819",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/463/zdzwrz4vcrxivfxth4wirfk3biqwcnej/1000_1000_1d7a58ff99b324185ccb5ad5dfbdb5e85/Cyno_2.webp",
      weapon: "Копье",
      сombat:
        "Сайно — персонаж Электро, который наносит непрерывный урон и принесёт больше пользы, если действовать точно.Он способен совершать стремительный выпад вперёд, нанося противникам на пути Электро урон. Взрыв стихии Сайно вводит его в состояние Поклявшийся прокладывать путь, меняющее способ его атаки и повышающее его урон. В таком состоянии эффект элементального навыка наносит Электро урон по площади и увеличивает длительность состояния Поклявшийся прокладывать путь.В состоянии Поклявшийся прокладывать путь можно периодически задействовать элементальный навык Сайно, следуя подсказкам на экране, что вызовет эффект Вынесения приговора, который повышает урон текущего элементального навыка и выпускает 3 Молнии бедствия, наносящие Электро урон.",
      about:
        "Сайно — Генерал махаматра, который осуществляет надзор над всеми учёными Академии. Говорят, в работе он по эффективности превосходит «Великую Ваювьястру» Кшахревара.",
      rait: [
        {
          common: "S",
          abyss: "—",
          mainDPS: "S",
          subDPS: "—",
          support: "—",
          world: "C"
        }
      ],
      birthday: "23 июня",
      constellation: "Золотой шакал",
      region: "Сумеру",
      date: "28 сентября 2022",
      titul: "Генерал махаматра",
      stars: "5",
      videos: [
        "https://youtu.be/HHm6QptfeYU",
        "https://youtu.be/J9WuPBOC_S8",
        "https://youtu.be/2bNgDa4nApQ"
      ]
    },
    {
      id: 5,
      name: "Кандакия",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/6a3/ithj0nijqrkap4h1bs31qc0qwc853nkd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace.webp",
      element: "gidro",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/188/1ktsia4o5uwxk1ror6qghex0wvaesweo/1000_1000_1d7a58ff99b324185ccb5ad5dfbdb5e85/Candace_2.webp",
      weapon: "Копье",
      сombat:
        "Кандакия — Гидро персонаж поддержки, способный поглощать урон.При активации элементального навыка Кандакия поднимает щит и создаёт барьер, после чего выполняет мощную контратаку.Её взрыв стихии повышает элементальный урон обычных атак персонажей, а также выпускает водяной вал, когда персонаж выходит на поле боя. Если персонаж владеет одноручным, двуручным или древковым оружием, он получит инфузию Гидро.",
      about:
        "Кандакия — Защитница деревни Аару, наследница царя Дешрета. Её левый глаз сияет подобно янтарю.",
      rait: [
        {
          common: "A",
          abyss: "—",
          mainDPS: "B",
          subDPS: "A",
          support: "A",
          world: "A"
        }
      ],
      birthday: "3 мая",
      constellation: "Щит Заступницы",
      region: "Сумеру",
      date: "28 сентября 2022",
      titul: "Защитница деревни Аару",
      stars: "4",
      videos: ["https://youtu.be/TCJ_7c6Hil4", "https://youtu.be/-n5ZlOtLzKU"]
    },
    {
      id: 6,
      name: "Дори",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/0e8/dvi6adp97r8hwi4nh0a1m6l200s0flob/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Dori.webp",
      element: "electro",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/c77/5uzcdgkg03emv1zadlxkt3vme46oj2hy/841_962_1d7a58ff99b324185ccb5ad5dfbdb5e85/dori_splash.webp",
      weapon: "Двуручный меч",
      сombat:
        "Дори — персонаж поддержки, который использует Электро Глаз Бога для лечения и восполнения энергии.С помощью своего элементального навыка она восстанавливает собственную энергию. Активировав взрыв стихии, она призывает джинна, который устанавливает связь с персонажем поблизости, восстанавливает его HP и элементальную энергию.",
      about:
        "Дори — Неуловимая негоциантка из Сумеру, которая очень любит блеск монет.",
      rait: [
        {
          common: "S",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "S",
          world: "C"
        }
      ],
      birthday: "21 декабря",
      constellation: "Волшебная Лампа",
      region: "Сумеру",
      date: "09 сентября 2022",
      titul: "Негоциантка из Сумеру",
      stars: "4",
      videos: ["https://youtu.be/cSZ2VnM7nio", "https://youtu.be/P08q5Y7r9Z4"]
    },
    {
      id: 7,
      name: "Тигнари",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/912/gy6gjnl0a31uq8ylhvok6w2cf7nfbckt/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari.webp",
      element: "dendro",
      color: "#ad7819",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/498/osz44wkaf6fd1y1wr7mvq8ivzwdcc803/992_977_1d7a58ff99b324185ccb5ad5dfbdb5e85/tighnari_splash.webp",
      weapon: "Лук",
      сombat:
        "Тигнари — персонаж, способный на периодические атаки с высокой частотой и взрывным уроном.Его стрелы-венцы уровня заряда 2 при попадании создают стрелы соцветия, которые самостоятельно находят цели поблизости.Элементальный навык «Мина виджняны-пхалы» создаёт поле, привлекающее врагов, и существенно сокращает время заряда стрелы-венца. Взрыв стихии «Стрела-лиана жизни» выпускает большое количество стрел-лиан, которые преследуют врагов поблизости, нанося Дендро урон.",
      about:
        "Тигнари — Молодой учёный, хорошо разбирающийся в ботанике. В настоящее время служит лесным стражем в лесу Авидья. Искренний и добросердечный, он умеет обучать даже самых непонятливых учеников.",
      rait: [
        {
          common: "S",
          abyss: "—",
          mainDPS: "S",
          subDPS: "—",
          support: "—",
          world: "S"
        }
      ],
      birthday: "29 декабря",
      constellation: "Фенек",
      region: "Сумеру",
      date: "24 августа 2022",
      titul: "Лесной страж Авидьи и Учёный из Амурты",
      stars: "5",
      videos: [
        "https://youtu.be/InApovOB--o",
        "https://youtu.be/oSSCRUmaquo",
        "https://youtu.be/ox9_6NJP4J4"
      ]
    },
    {
      id: 8,
      name: "Коллеи",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/cac/sjy0935yntt3lat2qivjbykdqxfycqnb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Collei.webp",
      element: "dendro",
      big_image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ea2/0wmxj3576ieectq6zx9jzm6ojqg6s8gt/1000_1000_1d7a58ff99b324185ccb5ad5dfbdb5e85/collei_splash.webp",
      weapon: "Лук",
      сombat:
        "Коллеи — персонаж поддержки, который использует Дендро Глаз Бога.Цветочное кольцо элементального навыка Коллеи проносится по полю боя, нанося врагам Дендро урон. Продолжительный Дендро урон терпят враги, которые оказались в области, созданной её взрывом стихий",
      about:
        "Коллеи — Стажёр Лесного дозора в лесу Авидья. За её страстным характером скрывается довольно закрытая личность.",
      rait: [
        {
          common: "A",
          abyss: "—",
          mainDPS: "—",
          subDPS: "A",
          support: "—",
          world: "A"
        }
      ],
      birthday: "8 мая",
      constellation: "Сервал",
      region: "Сумеру",
      date: "24 августа 2022",
      titul: "Стажёр Лесного дозора Авидьи",
      stars: "4",
      videos: ["https://youtu.be/8Kby6Ky9kUw", "https://youtu.be/J-nGm9BmKtE"]
    },
    {
      id: 9,
      name: "Путешественник",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/558/c6eeu7p73cfzpk6iqpnw6b4t9v0ylw0j/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp",
      element: "all",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 10,
      name: "Хейдзо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/49d/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Heizou.png",
      element: "anemo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 11,
      name: "Синобу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp",
      element: "electro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 12,
      name: "Е Лань",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp",
      element: "gidro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 13,
      name: "Аято",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png",
      element: "gidro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 14,
      name: "Яэ Мико",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png",
      element: "electro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 15,
      name: "Шэнь Хэ",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png",
      element: "crio",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 16,
      name: "Юнь Цзинь",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png",
      element: "geo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 17,
      name: "Итто",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp",
      element: "geo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 18,
      name: "Горо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp",
      element: "geo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 19,
      name: "Тома",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp",
      element: "pyro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 20,
      name: "Кокоми",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp",
      element: "gidro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 21,
      name: "Райден",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp",
      element: "electro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 22,
      name: "Элой",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp",
      element: "crio",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 23,
      name: "Сара",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp",
      element: "electro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 24,
      name: "Ёимия",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp",
      element: "pyro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 25,
      name: "Саю",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp",
      element: "anemo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 26,
      name: "Аяка",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp",
      element: "crio",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 27,
      name: "Кадзуха",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp",
      element: "anemo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 28,
      name: "Эола",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp",
      element: "crio",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 29,
      name: "Янь Фей",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp",
      element: "pyro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 30,
      name: "Розария",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp",
      element: "crio",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 31,
      name: "Ху Тао",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp",
      element: "pyro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 32,
      name: "Сяо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp",
      element: "anemo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 33,
      name: "Гань Юй",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp",
      element: "crio",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 34,
      name: "Альбедо",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp",
      element: "geo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 35,
      name: "Чжун Ли",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp",
      element: "geo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 36,
      name: "Синь Янь",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp",
      element: "pyro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 37,
      name: "Тарталья",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp",
      element: "gidro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 38,
      name: "Диона",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp",
      element: "crio",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 39,
      name: "Кли",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp",
      element: "pyro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 40,
      name: "Венти",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp",
      element: "anemo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 41,
      name: "Ци ци",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp",
      element: "crio",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 42,
      name: "Мона",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp",
      element: "gidro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 43,
      name: "Кэ Цин",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp",
      element: "electro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 44,
      name: "Дилюк",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp",
      element: "pyro",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 45,
      name: "Джинн",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp",
      element: "anemo",
      color: "#ad7819",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 46,
      name: "Эмбер",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp",
      element: "pyro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 47,
      name: "Чун Юнь",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp",
      element: "crio",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 48,
      name: "Фишль",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp",
      element: "electro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 49,
      name: "Сян Лин",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp",
      element: "pyro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 50,
      name: "Син Цю",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp",
      element: "gidro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 51,
      name: "Сахароза",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp",
      element: "anemo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 52,
      name: "Рейзор",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp",
      element: "electro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 53,
      name: "Ноэлль",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp",
      element: "geo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 54,
      name: "Нин Гуан",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp",
      element: "geo",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 55,
      name: "Лиза",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp",
      element: "electro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 56,
      name: "Кэйа",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp",
      element: "crio",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 57,
      name: "Бей Доу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp",
      element: "electro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 58,
      name: "Беннет",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp",
      element: "pyro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    },
    {
      id: 59,
      name: "Барбара",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp",
      element: "gidro",
      rait: [
        {
          common: "—",
          abyss: "—",
          mainDPS: "—",
          subDPS: "—",
          support: "—",
          world: "—"
        }
      ]
    }
  ],
  skills: [
    {
      attack: {
        name: "",
        simple: "",
        charged: "",
        falling: ""
      },
      elemental: {
        name: "",
        about: ""
      },
      explosion: {
        name: "",
        about: ""
      }
    },
    {
      attack: {
        name: "",
        simple: "",
        charged: "",
        falling: ""
      },
      elemental: {
        name: "",
        about: ""
      },
      explosion: {
        name: "",
        about: ""
      }
    },
    {
      attack: {
        name: "Танец шамшира",
        simple: "До трёх быстрых ударов мечом.",
        charged:
          "Удар с вращением, на который тратится определённое количество выносливости.",
        falling:
          "Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади."
      },
      elemental: {
        name: "Танец Хафткаршвар",
        about:
          "Входит в состояние Пируэта и наносит противникам поблизости Гидро урон, пропорциональный макс. HP Нилу.Совершив в состоянии Пируэта обычную атаку или атаку элементальным навыком, Нилу переходит в состояние Танца мечей или Кружащих шагов соответственно. Урон, наносимый в этих состояниях, преобразуется в Гидро урон, который считается уроном элементального навыка и не может быть отменён другими инфузиями.В этих состояниях третий танцевальный шаг Нилу завершает Пируэт и, в зависимости от текущего состояния, производит следующие эффекты:· Танец мечей: выпускает Сияющую иллюзию, которая при соприкосновении с врагами наносит Гидро урон и наделяет Нилу Лунной молитвой. Этот эффект превращает её обычные атаки в техники Танца мечей, а последний удар выпускает Сияющую иллюзию.· Кружащие шаги: Нилу выпускает Водяное колесо, которое наносит Гидро урон по площади и создаёт Ауру покоя, которая следует за активным персонажем и накладывает на врагов в радиусе действия статус Мокрый.Пребывая в состояниях Пируэта и Лунной молитвы, Нилу не может наносить заряженные атаки. Эти состояния исчезают, когда Нилу покидает поле боя."
      },
      explosion: {
        name: "Танец Абзендеги: Далёкие мечты, внемлющий ручей",
        about:
          "Пускается в танец дальних мечтаний и внемлющего ручья, от чего распускается Лотос далёких вод, нанося Гидро урон по площади пропорционально макс. HP Нилу и накладывая на поражённых противников Течение вечности.Вскоре противники под влиянием этого эффекта получают Гидро урон."
      }
    },
    {
      attack: {
        name: "Копьё призывателя",
        simple: "До четырёх ударов копьём.",
        charged:
          "Выпад, наносящий урон противникам на пути, на который тратится определённое количество выносливости.",
        falling:
          "Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади."
      },
      elemental: {
        name: "Тайный обряд: Переправляющий души",
        about:
          "Совершает выпад вперёд, нанося противникам на пути Электро урон.Если Сайно находится в состоянии Поклявшегося прокладывать путь, вызванном Священным обрядом: Проворство шакала взрыва стихий, то вместо выпада он активирует Ритуал погребения, который низвергает силу молний и наносит Электро урон по площади, а также продлевает действие Поклявшегося прокладывать путь."
      },
      explosion: {
        name: "Священный обряд: Проворство шакала",
        about:
          "Взывает к богам и принимает форму Поклявшегося прокладывать путь.Поклявшийся прокладывать путь.Конвертирует урон от обычных атак, заряженных атак и атак в падении в Электро урон, который не может быть отменён другими инфузиями.· Мастерство стихий и сопротивление прерыванию Сайно увеличиваются, и он получает иммунитет к урону от реакции Заряжен.Эффект длится максимум 18 сек. и исчезает, если Сайно покидает поле боя."
      }
    },
    {
      attack: {
        name: "Сверкающее копьё - Оборона",
        simple: "До четырёх ударов копьём.",
        charged:
          "Выпад, наносящий урон противникам на пути, на который тратится определённое количество выносливости.",
        falling:
          "Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади."
      },
      elemental: {
        name: "Священный обряд: Обитель цапли",
        about:
          "Боевой стиль Кандакии позволяет ей противостоять целой волне врагов.",
        fast: "Совершает рывок со щитом вперёд, нанося Гидро урон.",
        long:
          "Поднимает щит, блокируя атаки врагов поблизости, и создаёт барьер. Поглощаемый им урон зависит от максимального HP Кандакии. Барьер поглощает Гидро урон с 250% эффективностью. С активацией элементального навыка действие барьера завершится.Если завершить зарядку, удерживая кнопку навыка некоторое время, то когда кнопка навыка будет отпущена, действие навыка истечёт или барьер будет разрушен, Кандакия выполнит удар в прыжке, который наносит Гидро урон противникам впереди."
      },
      explosion: {
        name: "Священный обряд: Прилив трясогузки",
        about:
          "Подняв оружие над головой, Кандакия призывает благословение свыше, которое наносит Гидро урон по площади пропорционально её макс. HP и предоставляет вашему активному персонажу Молитву алой короны.Молитва алой короны.Обладает следующими свойствами:· При нанесении элементального урона обычной атакой персонажи наносят повышенный урон.· Персонаж, становясь активным, выпускает водяной вал, который наносит Гидро урон врагам поблизости. Количество волн, которые можно вызвать во время действия навыка, ограничено.· Персонаж, владеющий одноручным, двуручным или древковым оружием, во время действия этого эффекта получает инфузию Гидро."
      }
    },
    {
      attack: {
        name: "Чарующий танец мечей",
        simple: "До трёх ударов мечом.",
        charged:
          "Вращающаяся атака по окружающим врагам, на которую непрерывно тратится выносливость.После вращения проводит дополнительную мощную атаку мечом.",
        falling:
          "Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади."
      },
      elemental: {
        name: "Фонарь усмирения духов: Устраняющая проблемы пушка",
        about:
          "Направляет Фонарь усмирения духов и выстреливает во врагов Устраняющим проблемы зарядом, нанося Электро урон.При попадании Устраняющий проблемы заряд создаёт 2 Снаряда гарантийного обслуживания, которые самостоятельно находят цели поблизости и наносят Электро урон."
      },
      explosion: {
        name: "Дотошность Алькасар-сарая",
        about:
          "Призывает джинна, который оказывает клиентам всевозможную помощь.Джинн Устанавливает связь с персонажем поблизости:· Восстанавливает его HP пропорционально макс. HP Дори.· Регенерирует его энергию.· Имеет статус Электро.Кроме того, когда связь между джинном и персонажем касается противника, она каждые 0,4 сек. наносит ему однократный Электро урон.Одновременно может существовать только один джинн."
      }
    },
    {
      attack: {
        name: "Крушащая преграды кханда",
        simple: "До четырёх выстрелов из лука.",
        charged:
          "Более меткий прицельный выстрел с увеличенным уроном.Во время прицеливания наконечник стрелы заряжается силой Дендро. Эффект зависит от длительности заряда стрелы:· Уровень заряда 1: Выпускает стрелу, наполненную силой растений, которая наносит Дендро урон.· Уровень заряда 2: Выпускает стрелу-венец, наносящую Дендро урон. При попадании стрела-венец создаёт 4 стрелы соцветия. Стрелы соцветия самостоятельно находят цель поблизости и наносят Дендро урон.",
        falling:
          "Выпускает град стрел в воздухе, которые при приземлении персонажа наносят урон по площади."
      },
      elemental: {
        name: "Мина виджняны-пхалы",
        about:
          "Тигнари бросает вперёд Сердце бури виджняны, которое наносит Дендро урон по площади и создаёт Поле виджняны-кханды. Поле порождает иллюзию, которая непрерывно привлекает атаки врагов на себя.Вдобавок Тигнари получает эффект Прорыва виджняны, сокращающий время заряда стрелы-венца на 2,4 сек. Эффект рассеивается, когда закончится его длительность или Тигнари выпустит 3 стрелы-венца."
      },
      explosion: {
        name: "Стрела-лиана жизни",
        about:
          "Собрав силу всех семян, выпускает 6 стрел-лиан. Стрелы-лианы самостоятельно находят цель и наносят Дендро урон.При попадании они создают дополнительные стрелы-лианы, которые также самостоятельно находят цель и при попадании наносят Дендро урон."
      }
    },
    {
      attack: {
        name: "Лук молельщицы",
        simple: "До четырёх выстрелов из лука.",
        charged:
          "Более меткий прицельный выстрел с увеличенным уроном.Во время прицеливания наконечник стрелы заряжается стихией Дендро. Полностью заряженная стрела наносит Дендро урон.",
        falling:
          "Выпускает град стрел в воздухе, которые при приземлении персонажа наносят урон по площади."
      },
      elemental: {
        name: "Сметающие цветы",
        about:
          "Бросает Цветочное кольцо, которое наносит однократный Дендро урон врагам, с которыми оно соприкоснулось.Цветочное кольцо через некоторое время возвращается и наносит Дендро урон ещё раз."
      },
      explosion: {
        name: "Кошачье сокровище",
        about:
          "Надёжнейший Куйлейн-Анбар спешит на помощь!Бросает куклу по имени Куйлейн-Анбар, взрыв которой наносит Дендро урон по площади, и создаёт зону Куйлейн-Анбара. Куйлейн-Анбар беспрестанно прыгает внутри неё, нанося Дендро урон по площади."
      }
    }
  ],
  constellation: [
    {
      level_1: {
        name: "",
        about: ""
      },
      level_2: {
        name: "",
        about: ""
      },
      level_3: {
        name: "",
        about: ""
      },
      level_4: {
        name: "",
        about: ""
      },
      level_5: {
        name: "",
        about: ""
      },
      level_6: {
        name: "",
        about: ""
      }
    },
    {
      level_1: {
        name: "",
        about: ""
      },
      level_2: {
        name: "",
        about: ""
      },
      level_3: {
        name: "",
        about: ""
      },
      level_4: {
        name: "",
        about: ""
      },
      level_5: {
        name: "",
        about: ""
      },
      level_6: {
        name: "",
        about: ""
      }
    },
    {
      level_1: {
        name: "Танец убывающей луны",
        about:
          "Танец Хафткаршвар усиливается следующим образом:· Урон Сияющей иллюзии повышается на 65%.· Длительность Ауры покоя увеличивается на 6 сек."
      },
      level_2: {
        name: "Дождь лепестков звёздного неба",
        about:
          "Гидро сопротивление противников, получивших Гидро урон от персонажей под воздействием Изобилия золотого кубка, понижается на 35% на 10 сек. Дендро сопротивление противников, получивших урон от реакции Бутонизация, понижается на 35% на 10 сек.Требуется разблокировать пассивный талант «Зал кружащих лепестков»."
      },
      level_3: {
        name: "Грациозная поступь тени",
        about:
          "Увеличивает уровень навыка Танец Абзендеги: Далёкие мечты, внемлющий ручей на 3.Макс. уровень: 15"
      },
      level_4: {
        name: "Ритм зыби",
        about:
          "Попадание по врагу третьего шага Танца Хафткаршвар во время действия Пируэта восстанавливает 15 ед. энергии Нилу и на 8 сек. увеличивает урон её Танца Абзендеги: Далёкие мечты, внемлющий ручей на 50%."
      },
      level_5: {
        name: "Кружащиеся лунные блики",
        about:
          "Увеличивает уровень навыка Танец Хафткаршвар на 3.Макс. уровень: 15"
      },
      level_6: {
        name: "Мелодия разбитого хлада",
        about:
          "За каждые 1000 ед. макс. HP шанс критического попадания Нилу увеличивается на 0,6%, а её критический урон - на 1,2%.Шанс критического попадания Нилу может таким образом увеличиться на 30%, а критический урон - на 60%."
      }
    },
    {
      level_1: {
        name: "Завет: Беспрестанное бдение",
        about:
          "После активации Священного обряда: Проворство шакала скорость обычной атаки Сайно повышается на 20% на 10 сек. Если во время действия Тайного обряда: Переправляющий души активируется Вынесение приговора пассивного таланта Суд пера, длительность этого эффекта обновится.Требуется разблокировать пассивный талант «Суд пера»."
      },
      level_2: {
        name: "Церемония: Проводы душ",
        about:
          "Попадание Сайно по врагу обычной атакой увеличивает бонус Электро урона на 10% на 4 сек. Эффект может возникнуть не чаще 1 раза в 0,1 сек. и складывается до 5 раз."
      },
      level_3: {
        name: "Указ: Исполнение наказания",
        about:
          "Увеличивает уровень навыка Священный обряд: Проворство шакала на 3.Макс. уровень: 15"
      },
      level_4: {
        name: "Строгая мера: Страж запрета",
        about:
          "Сайно, активируя реакции Заряжен, Сверхпроводник, Перегрузка, Стимуляция, Обострение, Вегетация или Электро Рассеивание во время действия Поклявшегося прокладывать путь Священного обряда: Проворство шакала, восстанавливает 3 ед. энергии всем членам отряда поблизости (кроме самого Сайно).Эффект активируется до 5 раз во время действия одного и того же Священного обряда: Проворство шакала."
      },
      level_5: {
        name: "Погребение: Уходящий свет звёзд",
        about:
          "Увеличивает уровень навыка Тайный обряд: Переправляющий души на 3.Макс. уровень: 15"
      },
      level_6: {
        name: "Церемония пера: Весы справедливости",
        about:
          "Использование Священного обряда: Проворство шакала или активация Вынесения приговора пассивного навыка Суд пера наделяет Сайно 4 уровнями Жертвоприношения шакала. Попав обычной атакой, Сайно расходует 1 уровень Жертвоприношения шакала и выпускает одну Молнию бедствия.Жертвоприношение шакала длится 8 сек. и складывается до 8 раз. С завершением Поклявшегося прокладывать путь Священного обряда: Проворство шакала эффект полностью исчезает.Молнию бедствия таким образом можно выпустить не чаще одного раза в 0,4 сек.Требуется разблокировать пассивный талант «Суд пера»."
      }
    },
    {
      level_1: {
        name: "Возвращение наследницы алых песков",
        about:
          "Длительность Молитвы алой короны Священного обряда: Прилив трясогузки увеличивается на 3 сек."
      },
      level_2: {
        name: "Пронзающее луну сияние",
        about:
          "Попадание Священного обряда: Обитель цапли по врагу увеличивает макс. HP Кандакии на 20% на 15 сек."
      },
      level_3: {
        name: "Подношение охотницы",
        about:
          "Увеличивает уровень навыка Священный обряд: Прилив трясогузки на 3.Макс. уровень: 15"
      },
      level_4: {
        name: "Клятва часового",
        about:
          "Уменьшает время отката заряженного режима Священного обряда: Обитель цапли, делая его равным времени отката незаряженного варианта."
      },
      level_5: {
        name: "Разноцветные глаза",
        about:
          "Увеличивает уровень навыка Священный обряд: Обитель цапли на 3.Макс. уровень: 15"
      },
      level_6: {
        name: "Затопляющий прилив",
        about:
          "Обычные атаки персонажей под воздействием Молитвы алой короны Священного обряда: Прилив трясогузки (кроме самой Кандакии), наносящие элементальный урон, вызывают Водяной вал, который наносит Гидро урон по площади, равный 15% от макс. HP Кандакии.Эффект может возникнуть не чаще 1 раза в 2,3 сек. Урон водяных валов считается уроном взрыва стихии."
      }
    },
    {
      level_1: {
        name: "Дополнительные вложения",
        about:
          "Увеличивает количество Снарядов гарантийного обслуживания, создаваемых Устраняющими проблемы зарядами, на 1"
      },
      level_2: {
        name: "Особая франшиза",
        about:
          "В бою джинн, исцеляя связанного с ним персонажа, выстреливает с его позиции Зарядом джинна, который наносит урон размером 50% от силы атаки Дори."
      },
      level_3: {
        name: "Непрекращающиеся чудеса",
        about:
          "Увеличивает уровень навыка Дотошность Алькасар-сарая на 3.Макс. уровень: 15."
      },
      level_4: {
        name: "Разумное распределение",
        about:
          "Персонаж, у которого установлена связь с джинном, в зависимости от текущего HP и энергии может получить следующие усиления:· Если осталось не более 50% HP, бонус получаемого лечения повышается на 50%.· Если осталось не более 50% энергии, восстановление энергии увеличивается на 30%."
      },
      level_5: {
        name: "Оправданные затраты",
        about:
          "Увеличивает уровень навыка Фонарь усмирения духов: Устраняющая проблемы пушка на 3.Макс. уровень: 15"
      },
      level_6: {
        name: "Расточая богатство",
        about:
          "На 3 сек. после активации навыка Фонарь усмирения духов: Устраняющая проблемы пушка Дори получает следующие эффекты:· Инфузия Электро.· Попадания обычной атакой восстанавливают всем персонажам отряда поблизости HP, равное 4% от макс. HP Дори. Восстановить HP этим способом можно не чаще, чем раз в 0,1 сек."
      }
    },
    {
      level_1: {
        name: "Побеги определяются корнями",
        about:
          "Увеличивает шанс крит. попадания заряженной атакой Тигнари на 15%."
      },
      level_2: {
        name: "Истоки узнаются по стеблю",
        about:
          "Когда в поле виджняны-кханды, созданном Миной виджняны-пхалы, находятся враги, Тигнари получает 20% бонус Дендро урона.Если время действия поля истечёт или в нём не останется врагов, эффект продлится ещё 6 сек."
      },
      level_3: {
        name: "По ветвям постигается сотворение",
        about:
          "Увеличивает уровень навыка Стрелы-лианы жизни на 3.Макс. уровень: 15."
      },
      level_4: {
        name: "В листьях является расцвет и увядание",
        about:
          "Активация навыка Стрела-лиана жизни увеличивает мастерство стихий всех членов отряда поблизости на 60 ед. на 8 сек. Если Стрела-лиана жизни вызовет Горение, Бутонизацию, Стимуляцию или Разрастание, мастерство стихий увеличится ещё на 60 ед., а длительность эффекта обновится."
      },
      level_5: {
        name: "Во цветении осмысливается истина",
        about:
          "Увеличивает уровень навыка Мина виджняны-пхалы на 3.Макс. уровень: 15"
      },
      level_6: {
        name: "Плодом налитым определяется карма",
        about:
          "Сокращает время заряда стрелы-венца на 0,9 сек. и при попадании создаёт 1 дополнительную стрелу соцветия. Эта стрела наносит 150% от силы атаки Тигнари."
      }
    },
    {
      level_1: {
        name: "Охрана чащи",
        about:
          "Когда Коллеи в отряде, но не является активным персонажем, её восстановление энергии повышается на 20%."
      },
      level_2: {
        name: "По горам и лесам",
        about:
          "Пассивный талант «Возвращение цветов» меняется следующим образом:Возвращаясь, Цветочное кольцо наделяет персонажа эффектом Ростка, который наносит врагам поблизости продолжительный Дендро урон, равный 40% от силы атаки Коллеи. Эффект длится 3 сек.Если с момента использования навыка Сметающие цветы до завершения текущего Ростка свой персонаж отряда вызывает Горение, Стимуляцию, Обострение, Разрастание, Бутонизацию, Вегетацию или Цветение, действие Ростка продлится на 3 сек.Продлить действие Ростка таким способом можно только один раз. При повторной активации Ростка текущий эффект снимается. Урон, наносимый эффектом «Росток», считается уроном элементального навыка.Требуется разблокировать пассивный талант «Возвращение цветов»."
      },
      level_3: {
        name: "Благоухание лета",
        about:
          "Увеличивает уровень навыка Сметающие цветы на 3.Макс. уровень: 15."
      },
      level_4: {
        name: "Дар лесов",
        about:
          "Активация Кошачьего сокровища увеличивает мастерство стихий всех членов отряда поблизости (кроме самой Коллеи) на 60 ед. на 12 сек."
      },
      level_5: {
        name: "Всё как угли",
        about:
          "Увеличивает уровень навыка Кошачье сокровище на 3.Макс. уровень: 15"
      },
      level_6: {
        name: "Лес падающих стрел",
        about:
          "Попадание Цветочного кольца создаёт миниатюрного Куйлейн-Анбара, который наносит Дендро урон, равный 200% от силы атаки Коллеи.При каждом использовании Сметающих цветов можно создать только одного миниатюрного Куйлейн-Анбара."
      }
    }
  ],
  bilds: [
    [{}],
    [{}],
    [
      {
        name: "Nilou Main DPS Build - On-field Enabler",
        weapon: {
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/511/acwj88n3a0y6cvpjgsjk09lw72z0ss79/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klyuch-KHadzh_nisut.webp",
          name: "Ключ Хадж-нисут"
        },

        artif: [
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e6f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Stoykost-Millelita.png",
            name: "Стойкость Миллелита x 2"
          },
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c43/73gr66lqttsm6o33qjjotimd3uy2xfh3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Pozolochennye-sny.webp",
            name: "Позолоченные сны x 2"
          }
        ],
        bonus: [
          "Увеличивает НР на 20% . Попадание элементальным навыком на 20 сек. создаёт Великое сказание, которое повышает мастерство стихий экипированного этим оружием персонажа на 0,12% от его макс. HP. Эффект может возникнуть не чаще 1 раза в 0,3 сек. и складывается до 3 раз. После получения 3 уровней или обновления длительности 3 уровня мастерство стихий всех персонажей поблизости увеличится на 0,2% от макс. HP экипированного этим оружием персонажа на 20 сек.",
          "Увеличивает макс. HP на 20%",
          "Увеличивает мастерство стихий на 80 ед."
        ],
        specifications: {
          clock: ["HP %"],
          cup: ["HP %"],
          crown: ["HP %"],
          additionally: ["HP %", "Мастерство стихий", "Восст. энергии"]
        },
        weapon_options: [
          {
            name: "Церемониальный меч",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/73d/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Лунное сияние ксифоса",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cde/pe6iaqs4cf3nk4u7vls2alk5bt95tc85/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Lunnoe-siyanie-ksifosa.webp"
          },
          {
            name: "Стальное жало",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/d85/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          }
        ]
      },
      {
        name: "Nilou Sub-DPS Build - Off-field Enabler",
        weapon: {
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/511/acwj88n3a0y6cvpjgsjk09lw72z0ss79/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klyuch-KHadzh_nisut.webp",
          name: "Ключ Хадж-нисут"
        },
        artif: [
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/e6f/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Stoykost-Millelita.png",
            name: "Стойкость Миллелита x 2"
          },
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c43/73gr66lqttsm6o33qjjotimd3uy2xfh3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Pozolochennye-sny.webp",
            name: "Позолоченные сны x 2"
          }
        ],
        bonus: [
          "Увеличивает НР на 20% . Попадание элементальным навыком на 20 сек. создаёт Великое сказание, которое повышает мастерство стихий экипированного этим оружием персонажа на 0,12% от его макс. HP. Эффект может возникнуть не чаще 1 раза в 0,3 сек. и складывается до 3 раз. После получения 3 уровней или обновления длительности 3 уровня мастерство стихий всех персонажей поблизости увеличится на 0,2% от макс. HP экипированного этим оружием персонажа на 20 сек.",
          "Увеличивает макс. HP на 20%",
          "Увеличивает мастерство стихий на 80 ед."
        ],
        specifications: {
          clock: ["HP %", "Восст. энергии"],
          cup: ["HP %"],
          crown: ["HP %"],
          additionally: ["HP %", "Мастерство стихий", "Восст. энергии"]
        },
        weapon_options: [
          {
            name: "Клятва свободы",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/8a3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUnost-Boreya.png"
          },
          {
            name: "Лунное сияние ксифоса",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/cde/pe6iaqs4cf3nk4u7vls2alk5bt95tc85/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Lunnoe-siyanie-ksifosa.webp"
          },
          {
            name: "Стальное жало",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/d85/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          }
        ]
      }
    ],
    [
      {
        name: "Normal Attack DPS Build",
        weapon: {
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/a06/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
          name: "Нефритовый коршун"
        },

        artif: [
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/f8e/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            name: "Конец гладиатора x 4"
          }
        ],
        bonus: [
          "При попадании увеличивает силу атаки на 3.2/3.9/4.6/5.3/6% в течение 6 сек. Эффект может складываться до 7 раз и возникает не чаще, чем раз в 0.3 сек. На 7 уровне увеличивает урон на 12/15/18/21/24%.",
          "Увеличивает силу атаки на 18%.",
          "Увеличивает урон обычной атаки на 35%, если персонаж использует одноручное, двуручное или древковое оружие."
        ],
        specifications: {
          clock: ["Мастерство стихий", "Сила атаки %"],
          cup: ["Бонус Электро урона"],
          crown: ["Шанс крит. попадания", "Крит. урон"],
          additionally: [
            "Восст. энергии",
            "Шанс крит. попадания",
            "Крит. урон",
            "Мастерство стихий",
            "Сила атаки %"
          ]
        },
        weapon_options: [
          {
            name: "Посох Хомы",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/620/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Белая кисть",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/793/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Крест-копьё Китаин",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/6e3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Kitain_Cross_Spear.png"
          }
        ]
      },
      {
        name: "Thundering Fury Build",
        weapon: {
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/2fa/p8axyva1rdjgk2renhhxis84l0jglakf/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Posokh-alykh-peskov.webp",
          name: "Посох алых песков"
        },
        artif: [
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/ddc/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png",
            name: "Громогласный рёв ярости x 4"
          }
        ],
        bonus: [
          "Увеличивает бонус атаки экипированного этим оружием персонажа на 52% от его мастерства стихий. Попадание по врагу элементальным навыком на 10 сек. наделяет Сном алых песков: бонус атаки экипированного этим оружием персонажа увеличивается на 28% от мастерства стихий. Эффект складывается до 3 раз.",
          "Увеличивает бонус Электро урона на 15%.",
          "Увеличивает урон статусов Перегрузка, Заряжен и Суперпроводник на 40%. Наложение этих статусов уменьшает время отката элементального навыка на 1 се. Может возникнуть раз в 0.8 сек."
        ],
        specifications: {
          clock: ["Мастерство стихий", "Сила атаки %"],
          cup: ["Бонус Электро урона"],
          crown: ["Шанс крит. попадания", "Крит. урон"],
          additionally: [
            "Шанс крит. попадания",
            "Крит. урон",
            "Мастерство стихий",
            "Сила атаки %"
          ]
        },
        weapon_options: [
          {
            name: "Нефритовый коршун",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a06/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Посох Хомы",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/620/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Белая кисть",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/793/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          }
        ]
      },
      {
        name: "Elemental Reaction Build",
        weapon: {
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/2fa/p8axyva1rdjgk2renhhxis84l0jglakf/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Posokh-alykh-peskov.webp",
          name: "Посох алых песков"
        },
        artif: [
          {
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/c43/73gr66lqttsm6o33qjjotimd3uy2xfh3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Pozolochennye-sny.webp",
            name: "Позолоченные сны x 4"
          }
        ],
        bonus: [
          "Увеличивает бонус атаки экипированного этим оружием персонажа на 52% от его мастерства стихий. Попадание по врагу элементальным навыком на 10 сек. наделяет Сном алых песков: бонус атаки экипированного этим оружием персонажа увеличивается на 28% от мастерства стихий. Эффект складывается до 3 раз.",
          "Увеличивает мастерство стихий на 80 ед.",
          "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный персонаж получает следующие усиления:\n· Сила атаки повышается на 14% за каждого персонажа с таким же элементом.\n· Мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. и срабатывает, даже если экипированный персонаж не на поле боя."
        ],
        specifications: {
          clock: ["Мастерство стихий", "Сила атаки %"],
          cup: ["Бонус Электро урона"],
          crown: ["Шанс крит. попадания", "Крит. урон"],
          additionally: [
            "Шанс крит. попадания",
            "Крит. урон",
            "Мастерство стихий",
            "Сила атаки %"
          ]
        },
        weapon_options: [
          {
            name: "Нефритовый коршун",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/a06/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Посох Хомы",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/620/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Смертельный бой",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/67a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          },
          {
            name: "Белая кисть",
            image:
              "https://genshin-info.ru/upload/resize_cache/iblock/793/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
          }
        ]
      }
    ]
  ]
};
const characterReducer = (state = initialState, action) => {
  let stateCopy = { ...state, characters: [...state.characters] };

  switch (action.type) {
    case SETCHARACTERS: {
      return {
        ...stateCopy,
        characters: [...state.characters, ...action.characters]
      };
    }
    default:
      return stateCopy;
  }
};
export const setCharactersActionCreator = (characters) => ({
  type: SETCHARACTERS,
  characters
});
export default characterReducer;
