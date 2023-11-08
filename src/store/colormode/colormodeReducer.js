export const CHANGE_COLOR_MODE = "CHANGE_COLOR_MODE";

const initialState = {
  colormode: "dark",
};

function colormodeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR_MODE:
      return {
        colormode: state.colormode === "dark" ? "white" : "dark",
      };
    default:
      return state;
  }
}

export default colormodeReducer;
