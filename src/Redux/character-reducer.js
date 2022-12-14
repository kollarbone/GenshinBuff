import anemo from "../Components/Images/Elements/anemo.png";
import crio from "../Components/Images/Elements/crio.png";
import dendro from "../Components/Images/Elements/dendro.png";
import electro from "../Components/Images/Elements/electro.png";
import geo from "../Components/Images/Elements/geo.png";
import gidro from "../Components/Images/Elements/gidro.png";
import pyro from "../Components/Images/Elements/pyro.png";
const SETCHARACTERS = "SET-CHARACTERS";
const SETCHARACTER = "SET-CHARACTER";

let initialState = {
  elements: [anemo, crio, dendro, electro, geo, gidro, pyro],
  characters: [],
  character: []
};
const characterReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    characters: [...state.characters],
    character: { ...state.character }
  };
  switch (action.type) {
    case SETCHARACTERS: {
      return {
        ...stateCopy,
        characters: [...action.characters]
      };
    }
    case SETCHARACTER: {
      return {
        ...stateCopy,
        character: { ...action.character }
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
export const setCharacterActionCreator = (character) => ({
  type: SETCHARACTER,
  character
});
export default characterReducer;
