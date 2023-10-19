import CaretUp from "../../assets/caret-up.svg";
import CaretDown from "../../assets/caret-down.svg";

export function pickCaret(el) {
  if (el.charAt(0) === "-") {
    return CaretDown;
  } else if (el.length === 1) {
    return null;
  } else {
    return CaretUp;
  }
}
