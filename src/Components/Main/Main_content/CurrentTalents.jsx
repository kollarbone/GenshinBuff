import React from "react";
import "./MainContent.css";
import { BsBook } from "react-icons/bs";
import { GiBroadsword } from "react-icons/gi";

export default function CurrentTalents(props) {
  let CharacterData = [
    "https://genshin-info.ru/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/1b2/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp"
  ];
  let CharacterData_2 = [
    "https://genshin-info.ru/upload/resize_cache/iblock/410/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yelan.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp"
  ];
  let WeaponData = [
    "https://genshin-info.ru/upload/resize_cache/iblock/42e/hbxzstat3mk0qell9g12ksv04bwel5wp/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Demonicheskiy-mech.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/716/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Istina-kagura.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/ae5/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Rezhushchiy-volny-plavnik.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/b44/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Polyarnaya-zvezda.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/a2d/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Siyayushchaya-zhatva.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/6b5/256_255_1d7a58ff99b324185ccb5ad5dfbdb5e85/Ulov.png",
    "https://genshin-info.ru/upload/resize_cache/iblock/6e3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Kitain_Cross_Spear.png"
  ];
  let WeaponData_2 = [
    "https://genshin-info.ru/upload/resize_cache/iblock/dbf/o5vcp60hqmqkse6o8a8eugpbsq5xvt6y/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Akvamarin-makhayry.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/b0d/2o0ywbmxzfkqs0ytnhp94jt2zrx3k95s/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Okhotnichya-tropa.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/2e7/a0ndnp84kb6mp0gyn10naco9phqqty8b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Issushitel.webp",
    "https://genshin-info.ru/upload/resize_cache/iblock/970/4meixowwgb09zoh1hfnku9pzyzvluubd/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Priblizhyennyy-korolya.webp"
  ];
  let characters = CharacterData.map((item) => (
    <img src={item} alt="" className="image_talent_character" />
  ));
  let characters_2 = CharacterData_2.map((item) => (
    <img src={item} alt="" className="image_talent_character" />
  ));
  let weapons = WeaponData.map((item) => (
    <img src={item} alt="" className="image_talent_character" />
  ));
  let weapons_2 = WeaponData_2.map((item) => (
    <img src={item} alt="" className="image_talent_character" />
  ));
  return (
    <div className="CurrentTalents">
      <div className="headings">
        <a className="heading_1">Сегоднящние</a>
        <a className="heading_2">таланты</a>
        <div className="calendarIcon">
          <BsBook />
        </div>
      </div>
      <div className="talents">
        <div className="talent">
          <img
            src="https://genshin-info.ru/upload/resize_cache/iblock/2d3/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
            alt=""
            className="image_talent"
          />
        </div>
        <div className="image_character">{characters}</div>
      </div>
      <div className="talents">
        <div className="talent">
          <img
            src="https://genshin-info.ru/upload/resize_cache/iblock/869/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"
            alt=""
            className="image_talent"
          />
        </div>
        <div className="image_character">{characters_2}</div>
      </div>
      <div className="headings">
        <a className="heading_1">Сегоднящние</a>
        <a className="heading_2">предметы</a>
        <div className="calendarIcon">
          <GiBroadsword />
        </div>
      </div>
      <div className="talents">
        <div className="talent">
          <img
            src="https://genshin-info.ru/upload/resize_cache/iblock/4ac/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Maska-zlogo-voenachalnika.png"
            alt=""
            className="image_talent"
          />
        </div>
        <div className="image_character">{weapons}</div>
      </div>
      <div className="talents">
        <div className="talent">
          <img
            src="https://genshin-info.ru/upload/resize_cache/iblock/eeb/lh8t2vomzt1rvthgw9j2misr3n3h25b2/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
            alt=""
            className="image_talent"
          />
        </div>
        <div className="image_character">{weapons_2}</div>
      </div>
      <div className="talents">
        <div className="talent">
          <img
            src="https://genshin-info.ru/upload/resize_cache/iblock/eeb/lh8t2vomzt1rvthgw9j2misr3n3h25b2/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/_.webp"
            alt=""
            className="image_talent"
          />
        </div>
        <div className="image_character">{weapons_2}</div>
      </div>
    </div>
  );
}
