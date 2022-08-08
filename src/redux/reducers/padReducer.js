import { actions } from "../constants/constants";

export default function padReducer(state = { pad: "" }, action) {
    switch (action.type) {
        case actions.CLICK_PAD:
            return { pad: action.pad };
        default:
            return state;
    }
}
