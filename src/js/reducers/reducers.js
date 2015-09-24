
// @TODO add docs, tests and break out into multiple files
import * as actions from 'actions/actions';

function reducer(state, action) {
    switch (action.type) {
    case actions.UPDATE_INFO:
        return (() => {
            var obj = {};
            obj[action.name] = action.data;
            return Object.assign({}, state, obj);
        })();
    default:
        return state || {};
    }
}

export default reducer;