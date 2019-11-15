import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getFixtures,clearFix} from '../../actions';

import triggerScript from '../../script/scripts'


 class UpcomingMatches extends Component{ 
   
   state = {
     months: ['January','Feburary','March','April','May','June','July','August','September','October','November','December'],
     days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
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
     triggerScript(document.getElementById('scriptloader'), 'run');
   }
   
   checkUpcomingMatches = (match) =>{
     let getDate = new Date(match.utcDate);
     let currentDate = new Date();
     return getDate > currentDate
   }
   
   returnTeamCrest = (id) =>{
     let team =  this.props.teamsInfo.info ? 
       this.props.teamsInfo.info.teams.filter((team) =>{
         return team.id == id
       }) 
     : null
     
      if ( team === undefined || team == null || team.length == 0) {
        return null
      }else {
        return team[0].crestUrl
      }
   }
   
   minutes = (min) =>{
     if(min == 0){
       return '00'
     }else{
       return min
     }
   }
   
   renderFixtures = (match) =>(
     match.filter(this.checkUpcomingMatches).slice(0,this.props.limit).map((item,i)=>{
       // let teamsInfo = this.props.teamsInfo ? this.props.teamsInfo.info.teams : null;
       let date = new Date(item.utcDate);
      return ( 
        <div className="item" key={i}>
            <ul className="ec-team-matches">
                <li>
                    <a href="#"><img src={this.returnTeamCrest(item.homeTeam.id)} alt={item.homeTeam.name} /> <span>{item.homeTeam.name}</span></a>
                </li>
                <li><small>{this.state.days[date.getDay()]}</small>
                    <time className="ec-color" datetime="2008-02-14 20:00">{date.getDate()} {this.state.months[date.getMonth()]}</time> <small>{date.getHours()}:{this.minutes(date.getMinutes())}</small></li>
                <li>
                    <a href="#"><img src={this.returnTeamCrest(item.awayTeam.id)} alt={item.awayTeam.name} /> <span>{item.awayTeam.name}</span></a>
                </li>
            </ul>
            <div id={"ec-Countdown"+ (i+1)} className="ec-match-countdown" date={date.toString()}></div>
            <a href="#" className="ec-ticket-button">Less Than 600 Tickets Left</a>
        </div>
      )
     })
     
   )
   
   render(){
     let fixtures = this.props.fixtures;
     // console.log(fixtures.match_fix);
     return fixtures.match_fix ? 
         <div className="col-md-6">
             <div className="ec-fancy-title">
                 <h2>Upcoming Matches</h2>
             </div>
             <div className="ec-nextmatch">
                {this.renderFixtures(fixtures.match_fix.matches)}
             </div>
         </div>
     : null
   }

 }
 
 const mapStateToProps = (state) => {
    return {
      fixtures:state.fixtures
    }
  }
 
 

 export default connect(mapStateToProps)(UpcomingMatches);