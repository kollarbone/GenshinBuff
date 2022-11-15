const SETTALENT = "SET-TALENT";
const SETBOOK = "SET-BOOK";
const SETWEAPONTALENT = "SET-WEAPON-TALENT";

let initialState = {
  talent: [],
  book: [],
  weapon: []
};
const materialsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    talent: [...state.talent],
    book: [...state.book],
    weapon: [...state.weapon]
  };
  switch (action.type) {
    case SETTALENT: {
      return {
        ...stateCopy,
        talent: [...action.talent]
      };
    }
    case SETBOOK: {
      return {
        ...stateCopy,
        book: [...action.book]
      };
    }
    case SETWEAPONTALENT: {
      return {
        ...stateCopy,
        weapon: [...action.weapon]
      };
    }
    default:
      return stateCopy;
  }
};
export const setTalentActionCreator = (talent) => ({
  type: SETTALENT,
  talent
});
export const setBookActionCreator = (book) => ({
  type: SETBOOK,
  book
});
export const setWeaponTalentActionCreator = (weapon) => ({
  type: SETWEAPONTALENT,
  weapon
});
export default materialsReducer;
