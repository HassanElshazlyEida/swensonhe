
import { actionTypes } from "../constants/action-types";
import { combineReducers } from "redux";
import { Categories , CategoryItems, Item } from '../actions/ItemActions';
const initialState = {
    categories: [],
    selectedItems: [],
    averageCost: 0,
};
type CategoriesAction = {
  type: string;
  payload: Array <Categories>;
}
type CategoryItemsAction = {
  type: string;
  payload: CategoryItems;
}
type ItemsAction = {
  type: string;
  item: Item;
}
const categoriesReducer = (state = initialState, action: CategoriesAction ) => {
    switch (action.type) {
      case actionTypes.FETCH_CATEGORIES:
        return {
          ...state,
          categories: action.payload
        };    
      default:
        return state;
    }
  };
  
  const itemsReducer = (state = initialState, action: CategoryItemsAction) => {
    switch (action.type) {
      case actionTypes.FETCH_CATEGORY_ITEMS:
        return {
          ...state,
          [action.payload.categoryId]: action.payload.items,
        };
      default:
        return state;
    }
  };
  
  const selectedItemsReducer = (state = [] , action: ItemsAction) => {
    switch (action.type) {
      case actionTypes.ADD_TO_SELECTED_ITEMS:
        const newItem = action.item;
        if (state.hasOwnProperty(action.item.id)) {
          const newState = { ...state };
          delete newState[action.item.id];
          return newState;
        }else {
          return {
            ...state,
            [action.item.id]: newItem
          }
        }
      default:
        return state;
    }
  };
  
 
  const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    selectedItems: selectedItemsReducer,
  });

export default rootReducer;