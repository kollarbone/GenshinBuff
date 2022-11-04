import sword from "../Components/Images/Weapons/sword.png";
import bow from "../Components/Images/Weapons/bow.png";
import big_sword from "../Components/Images/Weapons/big_sword.png";
import catalyst from "../Components/Images/Weapons/catalyst.png";
import spear from "../Components/Images/Weapons/spear.png";

let initialState = {
  type: [sword, bow, big_sword, catalyst, spear],
  weapons: [
    {
      id: 1,
      type: "sword",
      name: "Ключ Хадж-нисут",
      material: {
        id: 1,
        name: "Медный амулет лесной росы",
        image:
          "https://genshin-info.ru/upload/resize_cache/iblock/cc1/d7sew2c8u5qcs03zs36e6ee5yi76yjmr/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
      },
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/511/acwj88n3a0y6cvpjgsjk09lw72z0ss79/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klyuch-KHadzh_nisut.webp",
      color: "#ad7819",
      stars: "5",
      bonus: [
        {
          type: "Сила атаки",
          value: "44.34"
        },
        { type: "HP %", value: "14.4%" }
      ],
      about:
        "Увеличивает НР на 20% . Попадание элементальным навыком на 20 сек. создаёт Великое сказание, которое повышает мастерство стихий экипированного этим оружием персонажа на 0,12% от его макс. HP. Эффект может возникнуть не чаще 1 раза в 0,3 сек. и складывается до 3 раз. После получения 3 уровней или обновления длительности 3 уровня мастерство стихий всех персонажей поблизости увеличится на 0,2% от макс. HP экипированного этим оружием персонажа на 20 сек.",
      characters: [
        {
          id: 3,
          name: "Нилу",
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/ddb/tgdmg4id81dqf02dnea0i37c3fbc52sv/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Nilou.webp",
          color: "#ad7819"
        },
        {
          id: 11,
          name: "Синобу",
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/ddf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.webp"
        }
      ]
    },
    {
      id: 2,
      type: "sword",
      name: "Харан гэппаку фуцу",
      image:
        "https://genshin-info.ru/upload/resize_cache/iblock/077/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/KHaran-geppaku-futsu.webp",
      color: "#ad7819",
      stars: "5",
      characters: [
        {
          id: 13,
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png",
          color: "#ad7819"
        },
        {
          id: 26,
          image:
            "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp",
          color: "#ad7819"
        }
      ]
    }
  ]
};
const weaponsReducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
};

export default weaponsReducer;
