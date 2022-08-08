import { actions } from "../constants/constants";

export default function toggleBank(categoryNo) {
  return { type: actions.TOGGLE_BANK, categoryNo: categoryNo};
}
