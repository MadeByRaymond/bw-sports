import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import {getNavItems} from '../../actions';

import SideNav from './Sidenav/sidenav';


 class Header extends Component{ 
   state = {
      showNav:false
   } 
   
   componentWillMount(){
     this.props.dispatch(getNavItems());
   }
   
   toggleNav = (status) => {
      this.setState({
        showNav: status
      })
   }
   
   renderNav = (items) =>(
     items.map((item,i) =>(
       <Link to={item.link} className={item.class} key={i}>{item.text}</Link>
     ))
   )

   render(){
     return this.props.navItem.items ?
       <header id="ec-header">       
           <div className="ec-top-strip">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           <ul className="ec-strip-info">
                               <li><i className="fa fa-phone"></i> +234 812 345 6789</li>
                               <li><i className="fa fa-map-marker"></i> Lugbe, Abuja FCT, Nigeria</li>
                               <li><i className="fa fa-envelope-o"></i> <a href="#">info@bwsports.com</a></li>
                           </ul>
                           <div className="ec-login-section">
                               <a href="#" className="ec-login-section-btn ec-bgcolor"><i className="fa fa-user"></i> Login & Rigester</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           
           <div className="ec-main-navsection">
               <div className="container">
                   <Link to="/" className="ec-logo"><img src="/assets/images/logo-1.png" alt="BW Sports" /></Link>
               </div>
               <div className="league-nav-container-wrapper">
                 <div className="container">
                   <div className="navIcon onMS" onClick={() => this.toggleNav(true)}>
                     <i className="fa fa-bars"></i>
                   </div>
                   <div className="onLG">
                     <div className="league-nav">
                       {this.renderNav(this.props.navItem.items)}
                     </div>
                   </div>
               </div>
               </div>
           </div>
           
           <SideNav 
             showNav={this.state.showNav}
             onHideNav={() => this.toggleNav(false)}
             navItems={this.props.navItem.items}
           />
         
       </header>
     : null
   }

 } 
 
  const mapStateToProps = (state) => {
     return {
       navItem:state.navItems
     }
   }
  
  

  export default connect(mapStateToProps)(Header);