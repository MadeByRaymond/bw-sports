import {
  GET_NAVITEMS
} from '../actions/types';

const navItems = (state={}, action) =>{
  switch (action.type) {
    case GET_NAVITEMS:
      return {...state, items:action.payload}
      break;
    default:
      return state;
  }
}

export default navItems;