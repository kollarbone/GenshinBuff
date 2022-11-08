import Character from "./Character";
import { setCharacterActionCreator } from "../../../Redux/character-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class CharacterClass extends React.Component {
  constructor(props) {
    super(props);
    const name = window.location.href.split("/")[4];
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/characters/info/" +
          [name] +
          "?infoDataSize=all"
      )
      .then((response) => {
        this.props.setCharacterActionCreator(response.data.payload.character);
      });
  }
  render() {
    return <Character character={this.props.character} />;
  }
}

let mapStateToProps = (state) => {
  return {
    character: state.characters.character
  };
};

export default connect(mapStateToProps, {
  setCharacterActionCreator
})(CharacterClass);
