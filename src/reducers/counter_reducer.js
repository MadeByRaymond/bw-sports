import {GET_TEAMS_COUNT,GET_PLAYERS_COUNT,GET_LEAGUES_COUNT,GET_MATCHES_COUNT} from '../actions/types';

const counter = (state={}, action) =>{
  switch (action.type) {
    case GET_TEAMS_COUNT:
      return {...state, teams:action.payload}
      break;
    case GET_PLAYERS_COUNT:
      return {...state, players:action.payload}
      break;
    case GET_LEAGUES_COUNT:
      return {...state, leagues:action.payload}
      break;
    case GET_MATCHES_COUNT:
      return {...state, matches:action.payload}
      break;
    default:
      return state;
  }
}

export default counter;