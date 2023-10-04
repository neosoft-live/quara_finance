

$('.hero-slider').slick({
    autoplay:true,
    arrows: true,
    dots: true,
    prevArrow:`   
        <a href="" class="slick-arrow-left">   
            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 12H2M2 12L13 1M2 12L13 23" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>        
        <a>
    `,
    nextArrow:`
        <a href="" class="slick-arrow-right"> 
            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 12H31.5M31.5 12L20.5 1M31.5 12L20.5 23" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </a>
    `
});


$(window).on("scroll", function() {
    if ($(window).scrollTop() >= 100) {
      // Do something
        $("header").addClass("active-scroll");
    }else{
        $("header").removeClass("active-scroll");
    }
  });


  $(".tab-list .tab-link").click((e)=>{
        
      $(".tab-content .tab-iteam").removeClass("active");
      $($(e.target).attr("data-target")).addClass("active");
  });