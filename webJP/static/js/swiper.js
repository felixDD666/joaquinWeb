  
  $(document).ready(function () {
    //initialize swiper when document ready 
    setTimeout(function(){
    	$('.swiper-pagination-bullet').css("opacity", "0.7");
    	$('.swiper-pagination-bullet').css("background", "white");
	}, 1000); 
    
    
    
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      autoplay: 2500,
      loop: true,
      speed: 1500,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      paginationType: 'bullets',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    })

  });