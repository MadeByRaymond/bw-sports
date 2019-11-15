import React, { Component } from 'react'; 

 class Sponsors extends Component{ 
   state = {
      sponsors:[
        {name:"XTAMIC",logo:"/assets/extra-images/partner-logo-1.jpg"},
        {name:"CBOX",logo:"/assets/extra-images/partner-logo-2.jpg"},
        {name:"LIMAX",logo:"/assets/extra-images/partner-logo-3.jpg"},
        {name:"WOODER",logo:"/assets/extra-images/partner-logo-4.jpg"},
        {name:"ECOGREE",logo:"/assets/extra-images/partner-logo-5.jpg"},
        {name:"WOODER",logo:"/assets/extra-images/partner-logo-6.jpg"},
      ]
   } 
   
   renderSponsors = () =>(
     this.state.sponsors.map((item,i) =>(
       <div className="item" key={i}>
           <div href="#"><img src={item.logo} alt={item.name} /></div>
       </div>
     ))
   )

   render(){
     return(
       <div className="col-md-12">
         <div className="ec-sponsored">
             {this.renderSponsors()}
         </div>
       </div>
     );
   }

 }

 export default Sponsors;