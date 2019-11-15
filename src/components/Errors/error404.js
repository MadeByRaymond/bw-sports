import React from 'react';
import {Link} from 'react-router-dom';

 const Error404 = (props) => {
   return (
     <div>
       <div className="ec-mini-header">
           <span className="ec-blue-transparent"></span>
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="ec-mini-title">
                           <h1>404 Error Not Found</h1>
                       </div>
                       <div className="ec-breadcrumb">
                           <ul>
                               <li><Link to="/">Home</Link></li>
                               <li>{props.match.params.id}</li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="ec-main-content">
           <div className="ec-main-section">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           <div className="ec-404page">
                               <div className="ec-404wrap">
                                   <h2>404 not found</h2>
                                   <p>Look Like something wrong! The page you were looking for is not here. Lets just take you <Link to="/">Home</Link></p>
                                   <div className="clear"></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
     </div>
   );
 }

 export default Error404;