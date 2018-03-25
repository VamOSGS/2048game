import { TEST, PRESS } from '../constants';
import { Controller, Player } from '../controller';

const controller = new Controller();

const initialState = {
  score: 0,
  grid: controller.create,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRESS:
      const player = new Player(state.grid, action.payload.dir, action.payload.key);
      return {
        ...state,
        grid: player.play,
      };

    case TEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};
