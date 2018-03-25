import { TEST, PRESS } from '../constants';

export const test = param => ({
  type: TEST,
  payload,
});

export const press = param => ({
  type: PRESS,
  payload: param,
});
