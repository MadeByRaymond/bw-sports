import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getFixtures, clearFix} from '../../actions';


 class UpcomingFixture extends Component{ 
   
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
   
   checkUpcomingMatches = (match) =>{
     let getDate = new Date(match.utcDate);
     let currentDate = new Date();
     return getDate >= currentDate
   }
   
   renderFixtures = (match) =>(
     match.filter(this.checkUpcomingMatches).slice(0,this.props.limit).map((item,i)=>{
       let date = new Date(item.utcDate);
      return ( 
        <li key={i}>
           <div className="ec-cell"><span>{date.toDateString()}</span></div>
           <div className="ec-cell">
               <a href="#" className="ec-fixture-flag"> {item.homeTeam.name}</a>
               <span className="ec-fixture-vs"><small>vs</small></span>
               <a href="#" className="ec-fixture-flag ec-next-flag"> {item.awayTeam.name}</a>
           </div>
        </li>
      )
     })
   )
   
   render(){
     let fixtures = this.props.fixtures;
     
     return fixtures.match_fix ? 
         <div className="col-md-6">
             <div className="ec-fancy-title">
                 <h2>Match Fixture</h2>
             </div>
             <div className="ec-fixture-list">
                 <ul>
                     {this.renderFixtures(fixtures.match_fix.matches)}
                 </ul>
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
 
 

 export default connect(mapStateToProps)(UpcomingFixture);