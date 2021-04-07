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

  state={
    league: this.props.match.params.id,
    teams: [],
    showError: {
      show: false,
      error: ''
    }
  }
   
   componentDidMount(){
     // setTimeout(() =>{
       triggerScript(document.getElementById('scriptloader'), 'run');
     // },3000);
     this.props.dispatch(getTeams(this.props.match.params.id)).then((data)=>{
      console.log("Loaded Data => ", data);
      this.setState({
        league: this.props.match.params.id,
        teams: data.payload.teams ? data.payload.teams : [],
        showError: data.payload.teams ? {show:false} : {
          show: true,
          error: `${data.payload}`
        }
      })
     })
   }
   
  //  componentWillMount(){
  //    this.props.dispatch(getTeams(this.props.match.params.id));
  //  }
   
   componentWillReceiveProps(newprops){
    //  console.log("New Props ==>", newprops);
     if (newprops.match.params.id != this.props.match.params.id) {
       newprops.dispatch(getTeams(newprops.match.params.id)).then((data)=>{
        console.log("Updated Data => ", data);
        this.setState({
          league: newprops.match.params.id,
          teams: data.payload.teams ? data.payload.teams : [],
          showError: data.payload.teams ? {show:false} : {
            show: true,
            error: `${data.payload}`
          }
        })
       })
       
     }
   }
   
   
   render(){
     // console.log(this.props.teams);
     return(
       <div>
        <Header {...this.props} title={`${this.state.league} League`} />
        <div className="ec-main-content">      
            <div className="ec-main-section ec-promofull">
              <div className="container">
                {this.state.showError.show ? <div class="alert alert-warning text-center" style="margin: -60px 0px 60px;">Error Loading League Details</div> :
                  <div className="row">
                  
                    <TablePoints limit={100} league={this.state.league} />
                    <MatchFixtures league={this.state.league} season={2019} limit={5} />
                    
                    <UpcomingMatches league={this.state.league} season={2019} limit={3} teamsInfo={this.state.teams} />
                    <LatestResults limit={1} league={this.state.league} season={2019} teamsInfo={this.state.teams} />
                    
                  </div>
                }
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