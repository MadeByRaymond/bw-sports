import React, { Component } from 'react'; 
import {connect} from 'react-redux';

import {getSlider} from '../actions/index';

 class Slider extends Component{ 
 
   componentWillMount(){
     this.props.dispatch(getSlider());
   }
   
   renderSlides = (info) =>(
     info.map((item,i) =>(
       <li key={i}>
         <img src={item.bgImg} alt="" />
         <span className="ec-transparent-color"></span>
         <div className="ec-caption">
           <div className="container">
             <div className="caption-inner-wrap">
               <time className="ec-bgcolor" >{item.subTitle}</time>
               <div className="clearfix"></div>
               <h1>{item.Title}</h1>
               <p>{item.caption}</p>
             </div>
             <div className="ec-caption-image"> <img src={item.captionImg} alt="" /> </div>
           </div>
         </div>
       </li>
       
     ))
   )
   
   
   render(){
     let slider = this.props.slider;
     // console.log(this.props);
     
     return slider.SliderInfo ? 
        <div className="ec-mainbanner">
          <div className="flexslider">
            <ul className="slides">
              {this.renderSlides(slider.SliderInfo)}
            </ul>
          </div>
        </div>
     : null 
   }

 }

 const mapStateToProps = (state) => {
    return {
      slider:state.slider
    }
  }
 

 export default connect(mapStateToProps)(Slider);