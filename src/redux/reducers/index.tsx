
import { actionTypes } from "../constants/action-types";
import { combineReducers } from "redux";
import { Categories , CategoryItems, Item , CategoryItem } from '../actions/ItemActions';
const initialState = {
    categories: [],
    selectedItems: [],
};
type CategoriesAction = {
  type: string;
  payload: Array <Categories>;
}
type CategoryItemsAction = {
  type: string;
  payload: CategoryItems;
}
type ItemAction = {
  type: string;
  payload: CategoryItem;
}
interface SelectedItemsState {
  [categoryId: number]: {
    [itemId: number]: Item;
  };
  calculateAverageCost: number;
}
type ItemPrice = {
  type: string;
  payload: Item;
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
  
  const SelectedItemsReducer = (state : SelectedItemsState = {calculateAverageCost: 0}, action: ItemAction) => {
    switch (action.type) {
      case actionTypes.ADD_TO_SELECTED_ITEMS:
        const { categoryId, item } = action.payload;
  
        if (!state[categoryId]) {
          return {
            ...state,
            [categoryId]: {
              [item.id]: item,
            },
            calculateAverageCost :  state.calculateAverageCost + item.avgBudget
          };
        } else {
          const categoryItems = { ...state[categoryId] };
  
          if (categoryItems[item.id]) {
            delete categoryItems[item.id];
            return {
              ...state,
              [categoryId]: categoryItems,
              calculateAverageCost :  state.calculateAverageCost  - item.avgBudget
            };
          } else {
            categoryItems[item.id] = item;
            return {
              ...state,
              [categoryId]: categoryItems,
              calculateAverageCost :  state.calculateAverageCost + item.avgBudget
            };
          }
  
         
        }
      default:
        return state;
    }
  };


 

    
  const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    selectedItems: SelectedItemsReducer,
  });

export default rootReducer;