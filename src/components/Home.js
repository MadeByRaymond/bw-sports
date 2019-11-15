import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import Slider from '../widgetsUI/Slider';
import NewsSticker from '../widgetsUI/News/NewsSticker';
import MatchFixtures from '../widgetsUI/InfoWidgets/upcoming_fixtures';
import TablePoints from '../widgetsUI/InfoWidgets/table_points';
import UpcomingMatches from '../widgetsUI/InfoWidgets/upcoming_matches';
import LatestResults from '../widgetsUI/InfoWidgets/latest_results';
import Sponsors from '../widgetsUI/Sponsors';
import Blog from '../widgetsUI/News/Blog';
import Counter from '../widgetsUI/InfoWidgets/counter';

import {getTeams} from '../actions/index';

import triggerScript from '../script/scripts';

 class Home extends Component{
   
   componentDidMount(){
       triggerScript(document.getElementById('scriptloader'), 'run');
   }
   
   componentWillMount(){
     this.props.dispatch(getTeams('CL'));
   }
   
   render(){
     return(
       <div>
        <Slider />
        <div className="ec-main-content">
          
          <NewsSticker />
          
            <div className="ec-main-section ec-promofull">
              <div className="container">
                <div className="row">
                  
                  <MatchFixtures league="CL" season={2019} limit={3} />
                  <TablePoints limit={5} league="CL" />
                
                  <Sponsors />
                  
                  <UpcomingMatches league="CL" season={2019} limit={3} teamsInfo={this.props.teams} />
                  <LatestResults limit={1} league="CL" season={2019} teamsInfo={this.props.teams} />
                  
                </div>
              </div>
            </div>
          <Counter />
          <Blog />
        </div>
       </div>
     );
   }
 }
 
 const mapStateToProps = (state) => {
    return {
      teams:state.teams
    }
  }
 
 

 export default connect(mapStateToProps)(Home);