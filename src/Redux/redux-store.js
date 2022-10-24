import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import characterReducer from "./character-reducer";

let reducers = combineReducers({
  main: mainReducer,
  characters: characterReducer
});

let store = createStore(reducers);

export default store;
