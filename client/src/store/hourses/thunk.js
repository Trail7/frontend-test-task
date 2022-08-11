import { UPDATE_SCORES } from './types';

export const updateScores = (res) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_SCORES, payload: res });
    };
};