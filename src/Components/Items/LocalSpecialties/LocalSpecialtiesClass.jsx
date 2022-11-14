import LocalSpecialties from "./LocalSpecialties";
import { connect } from "react-redux";
import { setLocalActionCreator } from "../../../Redux/items-reducer";
import React from "react";
import axios from "axios";

class LocalSpecialtiesClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/localspecialties?infoDataSize=all"
      )

      .then((response) => {
        this.props.setLocalActionCreator(
          response.data.payload.localSpecialties
        );
      });
  }
  render() {
    return <LocalSpecialties local={this.props.local} />;
  }
}

let mapStateToProps = (state) => {
  return {
    local: state.items.local
  };
};

export default connect(mapStateToProps, {
  setLocalActionCreator
})(LocalSpecialtiesClass);
