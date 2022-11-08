import sword from "../Components/Images/Weapons/sword.png";
import bow from "../Components/Images/Weapons/bow.png";
import big_sword from "../Components/Images/Weapons/big_sword.png";
import catalyst from "../Components/Images/Weapons/catalyst.png";
import spear from "../Components/Images/Weapons/spear.png";
const SETWEAPONS = "SET-WEAPONS";

let initialState = {
  type: [sword, bow, big_sword, catalyst, spear],
  weapons: []
};
const weaponsReducer = (state = initialState, action) => {
  let stateCopy = { ...state, weapons: [...state.weapons] };

  switch (action.type) {
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
export const setWeaponsActionCreator = (weapons) => ({
  type: SETWEAPONS,
  weapons
});
export default weaponsReducer;
