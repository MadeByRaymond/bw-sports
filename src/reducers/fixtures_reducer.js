import {GET_TABLE_POINTS,GET_FIXTURES,CLEAR_FIX} from '../actions/types';

const fixtures = (state={}, action) =>{
  switch (action.type) {
    case GET_TABLE_POINTS:
      return {...state, table_data:action.payload}
      break;
    case GET_FIXTURES:
      return {...state, match_fix:action.payload}
      break;
    case CLEAR_FIX:
      return {...state, match_result:action.payload,upcoming_matches:action.payload,match_fix:action.payload,table_data:action.payload}
      break;
    default:
      return state;
  }
}

export default fixtures;