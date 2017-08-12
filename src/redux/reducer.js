import {
    IS_LOADING,
    SET_NAV_LIST,
    SELECT_SUB_MENU,
    SET_HISTORY
} from './action';
// import storejs from 'storejs';

//加载状态
export const isLoading = (state = false,action) => {
    switch(action.type){
        case IS_LOADING:
            return action.isloading;
        default:
            return state;
    }
}


export const navList = (state = [], action) => {
    switch(action.type){
        case SET_NAV_LIST:
            return action.list;
        default:
            return state;
    }
}

export const subMenu = (state = [], action) => {
    switch(action.type){
        case SELECT_SUB_MENU:
            return action.navList[action.key].children;
        default:
            return state;
    }
}

export const _history = (state = '', action) => {
    switch(action.type){
        case SET_HISTORY:
            return action._history;
        default:
            return state;
    }
}
