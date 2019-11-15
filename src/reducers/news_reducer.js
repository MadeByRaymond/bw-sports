import {
  GET_HIGHLIGHTED_NEWS
} from '../actions/types';

const news = (state={}, action) =>{
  switch (action.type) {
    case GET_HIGHLIGHTED_NEWS:
      return {...state, HighlightedInfo:action.payload}
      break;
    default:
      return state;
  }
}

export default news;