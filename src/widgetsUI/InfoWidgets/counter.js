import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getTeamsCount,getLeaguesCount,getPlayersCount,getMatchesCount} from '../../actions';

import triggerScript from '../../script/scripts';

 class Counter extends Component{ 
   
   componentWillMount(){
     this.props.dispatch(getTeamsCount());
     this.props.dispatch(getLeaguesCount());
     this.props.dispatch(getPlayersCount());
     this.props.dispatch(getMatchesCount());
   }
   
   componentDidUpdate(){
     triggerScript(document.getElementById('scriptloader'), 'run');
   }
   
   renderCounter = (list) =>{
     if (list.length >= 4 && !list.includes(undefined)) {
       return list.map((item,i) =>(
         <li className="col-md-3" key={i}>
             <i className={item.icon}></i>
             <div className="ec-counter-info">
                 <small>{item.name}</small>
                 <span className="ec-color"><span className="word-count">{item.count}</span>+</span>
             </div>
         </li>
       ))
     }else {
       return null;
     }
     
   }

   render(){
     let counter = this.props.counter;
     return counter.teams ? 
       <div className="ec-main-section ec-full-counter">
           <span className="ec-transparent-bg"></span>
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="ec-counter">
                           <ul className="row">
                              {this.renderCounter(Object.values(counter))}
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
       </div>
     : null
   }

 }
 
 const mapStateToProps = (state) => {
    return {
      counter:state.counter
    }
  }
 
 

 export default connect(mapStateToProps)(Counter);