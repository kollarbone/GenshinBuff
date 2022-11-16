import CurrentTalents from "./CurrentTalents";
import { setTalentsActionCreator } from "../../../../Redux/main-reducer";
import { setWeaponsActionCreator } from "../../../../Redux/main-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class MainClass extends React.Component {
  constructor(props) {
    let day = new Date();
    let weekday = "";
    if (day.getDay() === 1) {
      weekday = "Monday";
    } else if (day.getDay() === 2) {
      weekday = "Tuesday";
    } else if (day.getDay() === 3) {
      weekday = "Wednesday";
    } else if (day.getDay() === 4) {
      weekday = "Thursday";
    } else if (day.getDay() === 5) {
      weekday = "Friday";
    } else if (day.getDay() === 6) {
      weekday = "Saturday";
    } else if (day.getDay() === 0) {
      weekday = "Sunday";
    }
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/generalinfo/materials/" +
          [weekday]
      )
      .then((response) => {
        this.props.setTalentsActionCreator(response.data.payload.talentBooks);
        this.props.setWeaponsActionCreator(
          response.data.payload.ascensionMaterials
        );
      });
  }
  render() {
    return (
      <CurrentTalents
        talents={this.props.talents}
        weapons={this.props.weapons}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    talents: state.main.talents,
    weapons: state.main.weapons
  };
};

export default connect(mapStateToProps, {
  setTalentsActionCreator,
  setWeaponsActionCreator
})(MainClass);
