import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import characterReducer from "./character-reducer";
import tierlistReducer from "./tierlist-reducer";
import weaponsReducer from "./weapons-reducer";

let reducers = combineReducers({
  main: mainReducer,
  characters: characterReducer,
  tierlist: tierlistReducer,
  weapons: weaponsReducer
});

let store = createStore(reducers);

export default store;
