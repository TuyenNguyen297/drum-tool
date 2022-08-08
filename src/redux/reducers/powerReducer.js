import { actions } from "../constants/constants";

export default function powerReducer(state = { status: false }, action) {
    switch (action.type) {
        case actions.TOGGLE_POWER:
            return { status: action.status };
        default:
            return state;
    }
}
