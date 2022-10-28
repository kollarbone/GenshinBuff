import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import characterReducer from "./character-reducer";
import tierlistReducer from "./tierlist-reducer";

let reducers = combineReducers({
  main: mainReducer,
  characters: characterReducer,
  tierlist: tierlistReducer
});

let store = createStore(reducers);

export default store;
