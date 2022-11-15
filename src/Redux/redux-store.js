import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import characterReducer from "./character-reducer";
import tierlistReducer from "./tierlist-reducer";
import weaponsReducer from "./weapons-reducer";
import itemsReducer from "./items-reducer";
import materialsReducer from "./material-reducer";

let reducers = combineReducers({
  main: mainReducer,
  characters: characterReducer,
  tierlist: tierlistReducer,
  weapons: weaponsReducer,
  items: itemsReducer,
  materials: materialsReducer
});

let store = createStore(reducers);

export default store;
