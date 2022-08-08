import {actions}  from "../constants/constants";

export default function changeVolume(value) {
  return { type: actions.ADJUST_VOLUME, value: value };
}
