import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import Header from '../widgetsUI/Banner/header_banner';
import MatchFixtures from '../widgetsUI/InfoWidgets/upcoming_fixtures';
import TablePoints from '../widgetsUI/InfoWidgets/table_points';
import UpcomingMatches from '../widgetsUI/InfoWidgets/upcoming_matches';
import LatestResults from '../widgetsUI/InfoWidgets/latest_results';

import {getTeams} from '../actions/index';

import triggerScript from '../script/scripts';

 class League extends Component{
   
   componentDidMount(){
     // setTimeout(() =>{
       triggerScript(document.getElementById('scriptloader'), 'run');
     // },3000);
   }
   
   componentWillMount(){
     this.props.dispatch(getTeams(this.props.match.params.id));
   }
   
   componentWillReceiveProps(newprops){
     if (newprops.match.params.id != this.props.match.params.id) {
       newprops.dispatch(getTeams(newprops.match.params.id));
     }
   }
   
   
   render(){
     // console.log(this.props.teams);
     return(
       <div>
        <Header {...this.props} title={`${this.props.match.params.id} League`} />
        <div className="ec-main-content">      
            <div className="ec-main-section ec-promofull">
              <div className="container">
                <div className="row">
                
                  <TablePoints limit={100} league={this.props.match.params.id} />
                  <MatchFixtures league={this.props.match.params.id} season={2019} limit={5} />
                  
                  <UpcomingMatches league={this.props.match.params.id} season={2019} limit={3} teamsInfo={this.props.teams} />
                  <LatestResults limit={1} league={this.props.match.params.id} season={2019} teamsInfo={this.props.teams} />
                  
                </div>
              </div>
            </div>
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
 
 

 export default connect(mapStateToProps)(League);