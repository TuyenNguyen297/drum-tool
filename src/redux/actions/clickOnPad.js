import {actions} from "../constants/constants";

export default function clickOnPad(pad) {
  return { type: actions.CLICK_PAD, pad: pad };
}
