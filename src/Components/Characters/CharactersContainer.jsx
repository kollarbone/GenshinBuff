import AllCharacters from "./AllCharacters";
import { setCharactersActionCreator } from "../../Redux/character-reducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class CharactersClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://genshin-app-api.herokuapp.com/api/characters")
      .then((response) => {
        this.props.setCharactersActionCreator(response.data.payload.characters);
      });
  }
  render() {
    return <AllCharacters characters={this.props.characters} />;
  }
}

let mapStateToProps = (state) => {
  return {
    characters: state.characters.characters
  };
};

export default connect(mapStateToProps, {
  setCharactersActionCreator
})(CharactersClass);
