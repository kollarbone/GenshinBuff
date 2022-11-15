import AscensionMaterial from "./AscensionMaterial";
import { connect } from "react-redux";
import { setWeaponTalentActionCreator } from "../../../Redux/material-reducer";
import React from "react";
import axios from "axios";

class AscensionMaterialClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/weaponascensionmaterials?infoDataSize=all"
      )
      .then((response) => {
        this.props.setWeaponTalentActionCreator(
          response.data.payload.weaponAscensionmaterials
        );
      });
  }
  render() {
    return <AscensionMaterial weapon={this.props.weapon} />;
  }
}

let mapStateToProps = (state) => {
  return {
    weapon: state.materials.weapon
  };
};

export default connect(mapStateToProps, {
  setWeaponTalentActionCreator
})(AscensionMaterialClass);
