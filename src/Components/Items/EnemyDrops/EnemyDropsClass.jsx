import EnemyDrops from "./EnemyDrops";
import { connect } from "react-redux";
import { setItemsActionCreator } from "../../../Redux/items-reducer";
import React from "react";
import axios from "axios";

class EnemyDropsClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/enemydrops?infoDataSize=all"
      )
      .then((response) => {
        this.props.setItemsActionCreator(response.data.payload.enemyDrops);
      });
  }
  render() {
    return <EnemyDrops items={this.props.items} />;
  }
}

let mapStateToProps = (state) => {
  return {
    items: state.items.items
  };
};

export default connect(mapStateToProps, {
  setItemsActionCreator
})(EnemyDropsClass);
