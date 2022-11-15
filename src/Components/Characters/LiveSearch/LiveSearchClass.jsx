import LiveSearch from "./LiveSearch";
import React from "react";
import axios from "axios";

class LiveSearchClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.main = [this.props.main] + "s";
    axios
      .get("https://genshin-app-api.herokuapp.com/api/" + [this.main])
      .then((response) => {
        this.setState({
          data: response.data.payload[this.main]
        });
      });
  }
  render() {
    return <LiveSearch state={this.state.data} main={this.props.main} />;
  }
}

export default LiveSearchClass;
