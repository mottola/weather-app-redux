import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // es6 to concat to array
      return [ action.payload.data, ...state ];
  }
  return state;
}
