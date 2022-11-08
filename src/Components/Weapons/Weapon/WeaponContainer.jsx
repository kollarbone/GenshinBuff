import Weapon from "./Weapon";
import { setWeaponActionCreator } from "../../../Redux/weapons-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class WeaponClass extends React.Component {
  constructor(props) {
    super(props);
    const name = window.location.href.split("/")[4];
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/weapons/info/" +
          [name] +
          "?infoDataSize=all"
      )
      .then((response) => {
        this.props.setWeaponActionCreator(response.data.payload.weapon);
      });
  }
  render() {
    return <Weapon weapon={this.props.weapon} />;
  }
}

let mapStateToProps = (state) => {
  return {
    weapon: state.weapons.weapon
  };
};

export default connect(mapStateToProps, {
  setWeaponActionCreator
})(WeaponClass);
