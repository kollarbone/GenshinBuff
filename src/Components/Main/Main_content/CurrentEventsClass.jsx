import CurrentEvents from "./CurrentEvents";
import { setEventsActionCreator } from "../../../Redux/main-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class CurrentEventsClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://genshin-app-api.herokuapp.com/api/events")
      .then((response) => {
        this.props.setEventsActionCreator(response.data.payload.events);
      });
  }
  render() {
    return <CurrentEvents events={this.props.events} />;
  }
}

let mapStateToProps = (state) => {
  return {
    events: state.main.events
  };
};

export default connect(mapStateToProps, {
  setEventsActionCreator
})(CurrentEventsClass);
