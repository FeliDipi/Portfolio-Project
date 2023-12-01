
export const Work = () =>
{
    var TrandingSlider = new Swiper('.Works-Slide-Gallery',
     {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: 
        {
          rotate: 0,
          stretch: 0,
          depth: 75,
          modifier: 2.5,
        },
        pagination: 
        {
          el: '.swiper-pagination',
          clickable: true,
        }
    });
}