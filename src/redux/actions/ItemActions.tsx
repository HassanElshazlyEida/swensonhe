import { actionTypes } from "../constants/action-types";

export type Categories = {
    id: number; 
    title: String;
    image: String;
};
export type Item = {
    id: number; 
    title: String;
    minBudget: number;
    MaxBudget: number;
    avgBudget: number;
    image: String;
};
export type CategoryItems = {
    categoryId: number; 
    items: Array<Item>;
}

export const fetchCategories = (items: Array<Categories>) => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        payload: items
    }
}
export const fetchCategoryItems = (item : CategoryItems)=> {
    return {
        type: actionTypes.FETCH_CATEGORY_ITEMS,
        payload: item
    }
}

export const addToSelectedItems = (item:Item) => {
    return {
      type: actionTypes.ADD_TO_SELECTED_ITEMS,
      item
    };
};
