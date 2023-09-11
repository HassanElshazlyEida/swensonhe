
import { actionTypes } from "../constants/action-types";
import { combineReducers } from "redux";
import { Categories , CategoryItems, Item , CategoryItem  } from '../actions/ItemActions';
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
type ItemAction = {
  type: string;
  payload: CategoryItem;
}
interface SelectedItemsState {
  [categoryId: number]: {
    [itemId: number]: Item;
  };
}
type ItemPrice = {
  type: string;
  payload: number;
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
  
  const selectedItemsReducer = (state : SelectedItemsState = {}, action: ItemAction) => {
    switch (action.type) {
      case actionTypes.ADD_TO_SELECTED_ITEMS:
        const { categoryId, item } = action.payload;
  
        if (!state[categoryId]) {
          // dispatch(calculateAverageCost());
          return {
            ...state,
            [categoryId]: {
              [item.id]: item,
            },
          };
        } else {
          const categoryItems = { ...state[categoryId] };
  
          if (categoryItems[item.id]) {
            delete categoryItems[item.id];
          } else {
            categoryItems[item.id] = item;
          }
  
          return {
            ...state,
            [categoryId]: categoryItems,
          };
        }
      default:
        return state;
    }
  };

  const calculateAverageCost = (state = initialState, action: ItemPrice) => {
    switch (action.type) {
      case actionTypes.CALCULATE_AVERAGE_COST:
        return state.averageCost + action.payload;
      default:
        return state;
    } 
  };
  
 

    
  const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    selectedItems: selectedItemsReducer,
    calculateAverageCost:calculateAverageCost,
  });

export default rootReducer;