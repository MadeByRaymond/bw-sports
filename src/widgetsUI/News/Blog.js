import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getHighlightedNews} from '../../actions';

 class NewsSticker extends Component{ 

   componentWillMount(){
     this.props.dispatch(getHighlightedNews())
   }
   
   renderNews = (info) =>(
     info.map((item,i) =>(
       <li className="col-md-4" key={i}>
           <div className="ec-blog-wrap">
               <figure>
                   <a href={item.link}><img src={item.image} alt=""/></a> <span className="ec-featured-star ec-bgcolor"><i className="fa fa-star"></i></span></figure>
               <div className="ec-blog-text">
                   <h2><a href={item.link}>{item.title}</a></h2>
                   <div className="ec-grid-time">
                       <span><i className="fa fa-clock-o"></i> {item.date}</span>
                       <a href={item.link} className="fa fa-angle-right"></a>
                   </div>
               </div>
           </div>
       </li>
     ))
   )

   render(){
     let news = this.props.news;
     // console.log(this.props);
     return news.HighlightedInfo ? 
         <div className="ec-main-section blog-grid-full">
           <div className="container">
             <div className="row">
               <div className="col-md-12">
                 <div className="ec-simple-title">
                   <h2>Latest news</h2>
                   <p>All News Articles and Posts Are Rendered From Redux Actions</p>
                 </div>
               </div>
               <div className="col-md-12">
                 <div className="ec-blog ec-blog-grid">
                   <ul className="row">
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