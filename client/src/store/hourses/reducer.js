import {UPDATE_SCORES} from './types';

const initialState = [];

export default function scoresReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SCORES:
            return [...action.payload];
        default:
            return state;
    }
}