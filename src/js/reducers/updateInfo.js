
import * as actions from 'actions';

export default function updateInfo(state, action) {
    switch (action.type) {
    case actions.UPDATE_INFO:
        return (() => {
            let obj = {};
            obj[action.name] = action.data;
            return Object.assign({}, state, obj);
        })();
    default:
        return state || {};
    }
}