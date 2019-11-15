import React from 'react';
import {Link} from 'react-router-dom';

 const Banner = (props) => {
   return (
     <div className="ec-mini-header">
         <span className="ec-blue-transparent"></span>
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="ec-mini-title">
                         <h1>{props.title}</h1>
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
   );
 }

 export default Banner;