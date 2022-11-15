import TalentMaterials from "./TalentMaterials";
import { connect } from "react-redux";
import { setTalentActionCreator } from "../../../Redux/material-reducer";
import React from "react";
import axios from "axios";

class TalentMaterialsClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/talentmaterials?infoDataSize=all"
      )
      .then((response) => {
        this.props.setTalentActionCreator(
          response.data.payload.talentMaterials
        );
      });
  }
  render() {
    return <TalentMaterials talent={this.props.talent} />;
  }
}

let mapStateToProps = (state) => {
  return {
    talent: state.materials.talent
  };
};

export default connect(mapStateToProps, {
  setTalentActionCreator
})(TalentMaterialsClass);
