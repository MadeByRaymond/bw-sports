import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

 const SideNavItems = (props) => {
   
   const navItems = props.navItems;
   
   
   const showItems = () =>(
     navItems.map((item,i) =>(
       <div key={i} className="sidebarItem">
         <Link to={item.link} onClick={props.hideNav}>
           {item.text}
         </Link>
       </div>
     ))
   )
   
   return (
     <div>
        {showItems()}
     </div>
   );
 }

 export default SideNavItems;