import {
  GET_SLIDER
} from '../actions/types';

const slider = (state={}, action) =>{
  switch (action.type) {
    case GET_SLIDER:
      return {...state, SliderInfo:action.payload}
      break;
    default:
      return state;
  }
}

export default slider;