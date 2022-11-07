import Character from "./Character";
import { setCharactersActionCreator } from "../../../Redux/character-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class CharacterClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://genshin-app-api.herokuapp.com/api/characters?infoDataSize=all"
      )
      .then((response) => {
        this.props.setCharactersActionCreator(response.data.payload.characters);
      });
  }
  render() {
    return <Character characters={this.props.characters} />;
  }
}

let mapStateToProps = (state) => {
  return {
    characters: state.characters.characters
  };
};

export default connect(mapStateToProps, {
  setCharactersActionCreator
})(CharacterClass);
