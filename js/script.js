$(window).scroll(function(){


  let scroll = $(window).scrollTop();
  let footerPos = $('footer').offset().top;
  let windowHeight = $(window).height();
  console.log(scroll);
  console.log(footerPos);
  
  
  function pageTop() {
    if(scroll >= 150){
      $('.PageTopBtn').fadeIn('slow').addClass('on');
    }else{
      $('.PageTopBtn').fadeOut('slow').removeClass('on');   
    }
    if(scroll >= footerPos - windowHeight + 100){
      $('.PageTop').addClass('active');
    }else{ 
      $('.PageTop').removeClass('active');
    }
  }
  
  pageTop();
  
});

$('.slide').slick({
  autoplay: true,
  pauseOnHover:false,
  autoplaySpeed: 2000,
  speed: 2000,
  dots: true,
  arrows:true,
});
		