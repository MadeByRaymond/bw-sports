import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getHighlightedNews} from '../../actions';

 class NewsSticker extends Component{ 

   componentWillMount(){
     this.props.dispatch(getHighlightedNews())
   }
   
   renderNews = (info) =>(
     info.map((item,i) =>(
       <li key={i}><a href={item.link}> {item.title} - {item.date} </a></li>
     ))
   )

   render(){
     let news = this.props.news;
     // console.log(this.props);
     return news.HighlightedInfo ? 
     <div className="ec-main-section ec-newsticker-wrap">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="ec-newsticker">
                         <span className="ec-color"><small>Latest News</small></span>
                         <ul id="ec-news">
                             {this.renderNews(news.HighlightedInfo)}
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
      news:state.news
    }
  }
 
 

 export default connect(mapStateToProps)( NewsSticker );