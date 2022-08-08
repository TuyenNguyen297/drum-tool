import {actions} from "../constants/constants";

export default function togglePower(status) {
  return { type: actions.TOGGLE_POWER, status: status };
}
