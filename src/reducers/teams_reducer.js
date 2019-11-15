import {
  GET_TEAMS
} from '../actions/types';

const teams = (state={}, action) =>{
  switch (action.type) {
    case GET_TEAMS:
      return {...state, info:action.payload}
      break;
    default:
      return state;
  }
}

export default teams;