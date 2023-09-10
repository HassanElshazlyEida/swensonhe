
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
  payload: Array<Item>;
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
  
  const selectedItemsReducer = (state = [] , action: any) => {
    
  };
  
 
  const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
  
  });

export default rootReducer;