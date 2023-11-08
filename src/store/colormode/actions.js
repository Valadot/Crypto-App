import { CHANGE_COLOR_MODE } from "./colormodeReducer";

export const changeColorMode = (color) => {
  return {
    type: CHANGE_COLOR_MODE,
    payload: color,
  };
};
