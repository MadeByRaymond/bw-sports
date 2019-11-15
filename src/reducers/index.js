import {combineReducers} from 'redux';

import fixtures from './fixtures_reducer';
import slider from './slider_reducer';
import news from './news_reducer';
import counter from './counter_reducer';
import teams from './teams_reducer';
import navItems from './nav_reducer';

const allReducers = combineReducers({
  fixtures, slider, news, counter, teams,navItems
});

export default allReducers;