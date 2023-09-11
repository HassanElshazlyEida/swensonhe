import { actionTypes } from "../constants/action-types";

export type Categories = {
    id: number; 
    title: string;
    image: string;
};
export type Item = {
    id: number; 
    title: string;
    minBudget: number;
    MaxBudget: number;
    avgBudget: number;
    image: string;
};
export type CategoryItems = {
    categoryId: number; 
    items: Array<Item>;
}
export type CategoryItem = {
    categoryId: number; 
    item :Item ;
}

export type ItemAction = {
    categoryId: number; 
    item :Item ;
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

export const addToSelectedItems = (item:ItemAction) => {
    return {
      type: actionTypes.ADD_TO_SELECTED_ITEMS,
      payload: item
    };
};

