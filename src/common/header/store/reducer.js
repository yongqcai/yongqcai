import * as constants from './constants';

const defalutStare = {
    focused: false
};

export default (state = defalutStare, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state
}