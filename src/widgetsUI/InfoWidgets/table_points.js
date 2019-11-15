import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getTablePoints, clearFix} from '../../actions';


 class TablePoints extends Component{ 
   
   componentWillMount(){
     this.props.dispatch(getTablePoints(this.props.league));
   }
   
   componentWillUnmount(){
     this.props.dispatch(clearFix());
   }
   
   componentWillReceiveProps(newprops){
     if (newprops.league != this.props.league) {
       newprops.dispatch(getTablePoints(newprops.league));
     }
   }
   
   renderTable = (table) =>(
     table.slice(0,this.props.limit).map((item,i) =>(
       <li key={i}>
           <div className="ec-cell">{i+1}</div>
           <div className="ec-cell">{item.team.name}</div>
           <div className="ec-cell">{item.points}</div>
           <div className="ec-cell">{item.won}</div>
           <div className="ec-cell">{item.draw}</div>
           <div className="ec-cell">{item.lost}</div>
       </li>
     ))
   )
   
   render(){
     let fixtures = this.props.fixtures;
     // console.log(fixtures);
     return fixtures.table_data ? 
         <div className="col-md-6">
           <div className="ec-fancy-title">
               <h2>{fixtures.table_data.competition.name} Table Points</h2>
           </div>
           <div className="ec-table-point">
               <ul className="ec-table-head">
                   <li>
                       <div className="ec-cell">S.#</div>
                       <div className="ec-cell">Team</div>
                       <div className="ec-cell">P</div>
                       <div className="ec-cell">W</div>
                       <div className="ec-cell">D</div>
                       <div className="ec-cell">L</div>
                   </li>
               </ul>
               <ul className="ec-table-list">
                   {this.renderTable(fixtures.table_data.standings[0].table)}
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
 
 

 export default connect(mapStateToProps)(TablePoints);