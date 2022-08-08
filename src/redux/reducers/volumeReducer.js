import { actions } from "../constants/constants";

export default function volumeReducer(state = { value: 50 }, action) {
    switch (action.type) {
        case actions.ADJUST_VOLUME:
            return { value: action.value };
        default:
            return state;
    }
}
