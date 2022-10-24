import anemo from "../Components/Images/Elements/anemo.png";
import crio from "../Components/Images/Elements/crio.png";
import dendro from "../Components/Images/Elements/dendro.png";
import electro from "../Components/Images/Elements/electro.png";
import geo from "../Components/Images/Elements/geo.png";
import gidro from "../Components/Images/Elements/gidro.png";
import pyro from "../Components/Images/Elements/pyro.png";

let initialState = {
  elements: [anemo, crio, dendro, electro, geo, gidro, pyro]
};
const characterReducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
};

export default characterReducer;
