import Weapon from "./Weapon";
import { setWeaponsActionCreator } from "../../../Redux/weapons-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class WeaponClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/weapons/info/https://genshin-app-api.herokuapp.com/api/weapons/info/"
      )
      .then((response) => {
        this.props.setCharactersActionCreator(response.data.payload.weapons);
      });
  }
  render() {
    return <Weapon weapons={this.props.weapons} />;
  }
}

let mapStateToProps = (state) => {
  return {
    weapons: state.weapons.weapons
  };
};

export default connect(mapStateToProps, {
  setWeaponsActionCreator
})(WeaponClass);
