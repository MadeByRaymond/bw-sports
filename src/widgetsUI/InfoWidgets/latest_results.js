import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getFixtures,clearFix} from '../../actions';

// import triggerScript from '../../script/scripts';

 class LatestResult extends Component{ 
   
   state = {
     months: ['January','Feburary','March','April','May','June','July','August','September','October','November','December'],
   }
   
   componentWillMount(){
     this.props.dispatch(getFixtures(this.props.league, this.props.season));
   }
   
   componentWillUnmount(){
     this.props.dispatch(clearFix());
   }
   
   componentWillReceiveProps(newprops){
     if (newprops.league != this.props.league) {
       newprops.dispatch(getFixtures(newprops.league, newprops.season));
     }
   }
   
   componentDidUpdate(){
     // triggerScript(document.getElementById('scriptloader'), 'run');
   }
   
   checkPreviousMatches = (match) =>{
     let getDate = new Date(match.utcDate);
     let currentDate = new Date();
     return getDate <= currentDate
   }
   
   returnTeamCrest = (id) =>{
     let team =  this.props.teamsInfo.info ? 
       this.props.teamsInfo.info.teams.filter((team) =>{
         if (team.id == id ){
           return true 
         }else{ return false}
       }) 
     : null

     if ( team === undefined || team == null || team.length == 0) {
       return null
     }else {
       return team[0].crestUrl
     }
   }
   
   getWinerorLoser(score1,score2){
     if(score1 > score2){return 'Win'}
     else if (score2 > score1) {return 'Loss'}
     else if (score1 == score2){return 'Draw'}
     else {return 'Unknown'}
   }
   
   minutes = (min) =>{
     if(min == 0){
       return '00'
     }else{
       return min
     }
   }
   
   renderResult = (match) =>{
     let selectedMatches = match.filter(this.checkPreviousMatches);
     return selectedMatches.slice((selectedMatches.length - 1), selectedMatches.length).map((item,i) => {
       let date = new Date(item.utcDate);
       return (
        <div className="ec-latest-result-wrap" key={i}>
           <div className="ec-latest-result">
               <ul>
                   <li>
                       <span>{item.homeTeam.name}</span>
                       <img src={this.returnTeamCrest(item.homeTeam.id)} alt={item.homeTeam.name} />
                       <span>{this.getWinerorLoser(item.score.fullTime.homeTeam,item.score.fullTime.awayTeam)}</span>
                   </li>
                   <li>
                       <div className="ec-result-time">
                           <div className="ec-time-wrap">
                               {item.score.fullTime.homeTeam}:{item.score.fullTime.awayTeam}
                               <small>{date.getDate()} {this.state.months[date.getMonth()]} {date.getFullYear()} {date.getHours()}:{this.minutes(date.getMinutes())} (UTC)</small>
                           </div>
                       </div>
                   </li>
                   <li>
                       <span>{item.awayTeam.name}</span>
                       <img src={this.returnTeamCrest(item.awayTeam.id)} alt={item.awayTeam.name} />
                       <span>{this.getWinerorLoser(item.score.fullTime.awayTeam,item.score.fullTime.homeTeam)}</span>
                   </li>
               </ul>
           </div>
         </div>
        )
     })
   }
   
   render(){
     let fixtures = this.props.fixtures;
     // console.log(fixtures);
     return fixtures.match_fix ? 
         <div className="col-md-6">
             <div className="ec-fancy-title">
                 <h2>Latest Result</h2>
                 <span>Finished</span>
             </div>
              {this.renderResult(fixtures.match_fix.matches)}
         </div>
     : null
   }

 }
 
 const mapStateToProps = (state) => {
    return {
      fixtures:state.fixtures
    }
  }
 
 

 export default connect(mapStateToProps)(LatestResult);