import AllWeapons from "./AllWeapons";
import { setWeaponsActionCreator } from "../../Redux/weapons-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class AllWeaponsClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://genshin-app-api.herokuapp.com/api/weapons?")
      .then((response) => {
        this.props.setWeaponsActionCreator(response.data.payload.weapons);
      });
  }
  render() {
    return <AllWeapons weapons={this.props.weapons} />;
  }
}

let mapStateToProps = (state) => {
  return {
    weapons: state.weapons.weapons
  };
};

export default connect(mapStateToProps, {
  setWeaponsActionCreator
})(AllWeaponsClass);
