const SETITEMS = "SET-ITEMS";
const SETLOCAL = "SET-LOCAL";

let initialState = {
  items: [],
  local: []
};
const itemsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    items: [...state.items],
    local: [...state.local]
  };
  switch (action.type) {
    case SETITEMS: {
      return {
        ...stateCopy,
        items: [...action.items]
      };
    }
    case SETLOCAL: {
      return {
        ...stateCopy,
        local: [...action.local]
      };
    }
    default:
      return stateCopy;
  }
};
export const setItemsActionCreator = (items) => ({
  type: SETITEMS,
  items
});
export const setLocalActionCreator = (local) => ({
  type: SETLOCAL,
  local
});

export default itemsReducer;
