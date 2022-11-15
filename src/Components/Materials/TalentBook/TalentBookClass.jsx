import TalentBook from "./TalentBook";
import { connect } from "react-redux";
import { setBookActionCreator } from "../../../Redux/material-reducer";
import React from "react";
import axios from "axios";

class TalentBookClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/talentbooks?infoDataSize=all"
      )
      .then((response) => {
        this.props.setBookActionCreator(response.data.payload.talentBooks);
      });
  }
  render() {
    return <TalentBook book={this.props.book} />;
  }
}

let mapStateToProps = (state) => {
  return {
    book: state.materials.book
  };
};

export default connect(mapStateToProps, {
  setBookActionCreator
})(TalentBookClass);
