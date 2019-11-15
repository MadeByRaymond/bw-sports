import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {getNavItems, getHighlightedNews} from '../../actions';

 class Footer extends Component{ 
    
   componentWillMount(){
     this.props.dispatch(getNavItems());
     this.props.dispatch(getHighlightedNews());
   }
   
   renderNavItems = (items) =>(
     items.map((item,i) =>(
       <li key={i}><Link to={item.link}>{item.text}</Link></li>
     ))
   )
   
   renderNews = (news) =>(
     news.map((item,i) =>(
       <li key={i}>
           <figure>
               <Link to={item.link}><img src={item.image} alt="blog image"/></Link>
           </figure>
           <section>
               <h6><Link to={item.link}>{item.title}</Link></h6>
               <span><i className="fa fa-clock-o"></i> {item.date}</span>
           </section>
       </li>
     ))
   )
   

   render(){
     return (this.props.news.HighlightedInfo && this.props.navItem.items) ?
       <footer id="ec-footer">
           <div className="ec-footer-widget">
               <div className="container">
                   <div className="row">
                       <aside className="widget col-md-4 ec-recentnews_widget">
                           <div className="ec-section-heading">
                               <h2>Recently News</h2></div>
                           <ul>
                               {this.renderNews(this.props.news.HighlightedInfo)}
                           </ul>
                       </aside>
                       <aside className="widget col-md-4 widget_categories">
                           <div className="ec-section-heading">
                               <h2>Competitions</h2></div>
                           <ul>
                               {this.renderNavItems(this.props.navItem.items)}
                           </ul>
                       </aside>
                       <aside className="widget col-md-4 widget_text_info">
                           <div className="ec-section-heading">
                               <h2>Contact</h2></div>
                           <ul>
                               <li>
                                   <i className="fa fa-map-marker"></i>
                                   <span>Lugbe, Abuja FCT, Nigeria</span>
                               </li>
                               <li>
                                   <i className="fa fa-phone"></i>
                                   <span>+234 812 345 6789</span>
                               </li>
                           </ul>
                       </aside>
                   </div>
               </div>
           </div>
           
           <div className="ec-bottom-section">
               <div className="container">
                   <div className="row">
                       <div className="col-md-5">
                           <Link to="#" className="ec-footer-logo"><img src="/assets/images/footer-logo.png" alt=""/></Link>
                           <div className="ec-copyright">
                               <p>© copyright 2019 BW Sports, all rights reserved</p>
                           </div>
                       </div>
                       <div className="col-md-7">
                           <div className="ec-right-section">
                               <Link to="#" className="backtop-btn">Back to top <i className="fa fa-caret-up"></i></Link>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
     : null
   }

 }
 
 const mapStateToProps = (state) => {
    return {
      news:state.news,
      navItem:state.navItems
    }
  }
 
 

 export default connect(mapStateToProps)(Footer);