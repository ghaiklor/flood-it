import COLORS from '../constants/colors';

const initialState = {
  colors: COLORS,
  size: 14,
  maxMoves: 20,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
