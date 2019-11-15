( function ( $ ) {
    'use strict';
    
    $('#scriptloader').on('run',function() {
      
        if($('.flexslider').length){
             //***************************
             // FlexSlider Function
             //***************************
             
             jQuery('.flexslider').flexslider({
                 animation: "slide",
                 prevText: "<em class='fa fa-angle-left'></em>",
                 nextText: "<em class='fa fa-angle-right'></em>",
                 start: function(slider) {
                     jQuery('body').removeClass('loading');
                 }
             }); 
             
             
             //***************************
             // WordCounter Function
             //***************************
             if (!($(".word-count").hasClass('active'))) {
               jQuery(".word-count").counterUp({
                   delay: 10,
                   time: 1000
               }).addClass('active');
             }
            
             
             
             //***************************
             // Owl Carousel
             //***************************
             jQuery('.ec-sponsored').owlCarousel({
                 loop:true,
                 margin:11,
                 nav:true,
                 navText: [
                     "<i class='fa fa-angle-double-left'></i>",
                     "<i class='fa fa-angle-double-right'></i>"
                 ],
                 responsive:{
                     0:{
                         items:3
                     },
                     600:{
                         items:4
                     },
                     1000:{
                         items:6
                     }
                 }
             });
             
             
             //***************************
             // Start NewsSticker Function
             //***************************
             if (!($('#ec-news').hasClass('active'))) {
               var options = {
                   newsList: "#ec-news",
                   startDelay: 10,
                   placeHolder1: ""
               }
               jQuery().newsTicker(options);
               $("#ec-news").addClass('active');
             }
              
             
          }
             
             //***************************
             // Click to Top Button
             //***************************
             jQuery('.backtop-btn').on("click", function() {
                 jQuery('html, body').animate({
                     scrollTop: 0
                 }, 800);
                 return false;
             });
             

             //***************************
             // Owl Carousel
             //***************************
         		 jQuery('.ec-nextmatch').owlCarousel({
         		    loop:false,
         		    margin:0,
         		    nav:true,
         		    navText: [
                         "<i class='fa fa-angle-left'></i>",
                         "<i class='fa fa-angle-right'></i>"
                     ],
         		    responsive:{
         		        0:{
         		            items:1
         		        },
         		        600:{
         		            items:1
         		        },
         		        1000:{
         		            items:1
         		        }
         		    }
         		});
             
             
             //***************************
             // Countdown Function
             //***************************
             jQuery(function() {
                 $('.ec-match-countdown').each((i) =>{
                   var austDay = new Date();
                   austDay = new Date($('#ec-Countdown'+ (i+1)).attr('date'));
                   jQuery('#ec-Countdown'+ (i+1)).countdown({
                       until: austDay
                   });
                   jQuery('#year').text(austDay.getFullYear());
                 })
             });

    });
    
    
    
 // setTimeout(() =>{
 // 
 //        //***************************
 //        // FlexSlider Function
 //        //***************************
 // 
 //        jQuery('.flexslider').flexslider({
 //            animation: "slide",
 //            prevText: "<em class='fa fa-angle-left'></em>",
 //            nextText: "<em class='fa fa-angle-right'></em>",
 //            start: function(slider) {
 //                jQuery('body').removeClass('loading');
 //            }
 //        });
 // 
 // 
 //        //***************************
 //        // Start NewsSticker Function
 //        //***************************
 //        var options = {
 //            newsList: "#ec-news",
 //            startDelay: 10,
 //            placeHolder1: ""
 //        }
 //        jQuery().newsTicker(options); 
 // 
 // 
 //        //***************************
 //        // Click to Top Button
 //        //***************************
 //        jQuery('.backtop-btn').on("click", function() {
 //            jQuery('html, body').animate({
 //                scrollTop: 0
 //            }, 800);
 //            return false;
 //        });
 // 
 // 
 //        //***************************
 //        // Owl Carousel
 //        //***************************
 //        jQuery('.owl-carousels').owlCarousel({
 //    		    loop:true,
 //    		    margin:11,
 //    		    nav:true,
 //    		    navText: [
 //                    "<i class='fa fa-angle-double-left'></i>",
 //                    "<i class='fa fa-angle-double-right'></i>"
 //                ],
 //    		    responsive:{
 //    		        0:{
 //    		            items:1
 //    		        },
 //    		        600:{
 //    		            items:3
 //    		        },
 //    		        1000:{
 //    		            items:6
 //    		        }
 //    		    }
 //    		});
 //        jQuery('.ec-sponsored').owlCarousel({
 //            loop:true,
 //            margin:11,
 //            nav:true,
 //            navText: [
 //                "<i class='fa fa-angle-double-left'></i>",
 //                "<i class='fa fa-angle-double-right'></i>"
 //            ],
 //            responsive:{
 //                0:{
 //                    items:3
 //                },
 //                600:{
 //                    items:4
 //                },
 //                1000:{
 //                    items:6
 //                }
 //            }
 //        });
 //    		jQuery('.ec-nextmatch').owlCarousel({
 //    		    loop:false,
 //    		    margin:0,
 //    		    nav:true,
 //    		    navText: [
 //                    "<i class='fa fa-angle-left'></i>",
 //                    "<i class='fa fa-angle-right'></i>"
 //                ],
 //    		    responsive:{
 //    		        0:{
 //    		            items:1
 //    		        },
 //    		        600:{
 //    		            items:1
 //    		        },
 //    		        1000:{
 //    		            items:1
 //    		        }
 //    		    }
 //    		});
 // 
 // 
 //        //***************************
 //        // Countdown Function
 //        //***************************
 //        jQuery(function() {
 //            $('.ec-match-countdown').each((i) =>{
 //              var austDay = new Date();
 //              austDay = new Date($('#ec-Countdown'+ (i+1)).attr('date'));
 //              jQuery('#ec-Countdown'+ (i+1)).countdown({
 //                  until: austDay
 //              });
 //              jQuery('#year').text(austDay.getFullYear());
 //            })
 //        });
 // 
 // 
 //        //***************************
 //        // WordCounter Function
 //        //***************************
 //        jQuery(".word-count").counterUp({
 //            delay: 10,
 //            time: 1000
 //        });
 // 
 //  },1000);
        






















          
} ( jQuery ) )

