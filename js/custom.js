// Revolution Slider
if ( $('.fullscreenbanner').length){
	
    var slider_swidth = 855;
    if( $(window).width() < 360 ) {
      slider_swidth = 2150;
    }
			
		var api =	
		
		$('.fullscreenbanner').revolution(
		{
				delay:9000,
        startwidth:1170,
        startheight:slider_swidth,
        navigationType: 'none',
               
        navigationStyle:"round", 
		    fullWidth:"on",
        forceFullWidth:"on"	
		});
			
			api.revpause();
	}
  //initative WoW.JS
   // new WOW().init();

   // Fun Facts
    function count($this){
      "use strict";
      
      var current = parseInt($this.html(), 10);
      current = current + 1; /* Where 50 is increment */
    
      $this.html(++current);
      if(current > $this.data('count')){
        $this.html($this.data('count'));
      } else {    
        setTimeout(function(){
          "use strict";
          count($this);
        }, 150);
      }
    }        
    var counter_run = false;

    $(window).on('scroll', function(){

      if( $('.stat-count').parents('.wow').css('visibility') == 'visible' && counter_run === false ) {
        
        counter_run = true; 
        $(".stat-count").each(function() {
          $(this).data('count', parseInt($(this).html(), 10));
          $(this).html('0');
          count($(this));
        });
      }
    });

    $(document).ready(function() {

      "use strict";

       $("#main-nav").affix({
          offset: {
              top: 200, 
              bottom: function () {
                  //return (this.bottom = $('.copyrights').outerHeight(true))
              }
          }
      });
      
      $('.helping-slide').hover(function(e){
        var progressbar = $(this).find('.progress-bar');
        var value = progressbar.attr('data-percent');
        progressbar.css('width', value+'%'); 

      }, function(){

        var progressbar = $(this).find('.progress-bar');
        var value = progressbar.attr('data-percent');
        progressbar.css('width', 0);
        
      });
     
      $("#help-now").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [991,2],
          itemsMobile: [489, 1],
          rewindSpeed: 2000,
          slideSpeed: 1000,
          pagination: false,
          navigation: true,
          navigationText:  	["<img src='img/large_left.png'>","<img src='img/large_right.png'>"]
     
      });

      $("#projects-help").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true
     
      });

      $("#under-spotlight").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true,
          rewindSpeed: 2000,
          slideSpeed: 1000,
          pagination: false,
          navigation: true,
          navigationText:  	["<img src='img/large_left.png'>","<img src='img/large_right.png'>"]
     
      });

      $("#join-compaign-slider").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true,
          rewindSpeed: 2000,
          slideSpeed: 1000,
          pagination: false,
          navigation: true,
          navigationText:  	["<img src='img/large_left.png'>","<img src='img/large_right.png'>"]
     
      });

      $("#find-us").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true
     
      });

      $("#twitter-slider").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true,
          rewindSpeed: 2000,
          slideSpeed: 1000,
          pagination: false,
          navigation: true,
          navigationText:   ["<img src='img/t-left.png'>","<img src='img/t-right.png'>"]
     
      });

      $("#my-sponsor").owlCarousel({
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true
      });

       $("#gallery-details").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true
     
      });
       $("#related-products").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem: true,
          rewindSpeed: 2000,
          slideSpeed: 1000,
          pagination: false,
          navigation: true,
          navigationText:   ["<img src='img/large_left.png'>","<img src='img/large_right.png'>"]
     
      });
      $("#project-p").owlCarousel({
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem: true,
          rewindSpeed: 2000,
          slideSpeed: 1000,
          pagination: false,
          navigation: true,
          navigationText:   ["<img src='img/large_left.png'>","<img src='img/large_right.png'>"]
     
      });
      $("#amos").owlCarousel({
          autoPlay: false, //Set AutoPlay to 3 seconds
          singleItem:true
     
      });

    $(function(){
      "use strict";
      // Instantiate MixItUp:
      $('#Container').mixItUp();

    });

    $(function () { 
      "use strict";
      $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    });  

    // $( window ).scroll(function() {   
     // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
      $(".progress-bar").each(function(){
        var each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
      });
           
     //  }  
    // });

    $('.grid').isotope({
      // options
      itemSelector: '.grid-item'
    });

    

});

