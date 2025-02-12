
//preloader
let pltext = gsap.timeline({
    onComplete:function(){
        startprogress();
    }
})  //text 애니메이션이 끝난 후 프로그레스바 진행
  pltext
  .to(".preloader__item.pl1",{opacity: 1, duration: .8})
  .to(".preloader__item.pl1",{opacity: 0, duration: .8})
  .to(".preloader__item.pl2",{opacity: 1, duration: .8})
  .to(".preloader__item.pl2",{opacity: 0, duration: .8})
  .to(".preloader__item.pl3",{opacity: 1, duration: .8})
  .to(".preloader__item.pl3",{opacity: 0, duration: .8})
  .to(".preloader__item.pl4",{opacity: 1, duration: .8})
  .to(".preloader__item.pl4",{opacity: 0, duration: .8})

  function startprogress() {
    let plprogress = gsap.timeline({
        onComplete:function(){
            $('.preloader').remove();
            startIntro();
        } //프로그레스바가 끝나면 프리로더를 지우고 인트로 실행
    }) 
    
plprogress
.to('.progress-bar-color',2,{width: '100%'},0)
.to('.progress-bar',{opacity: 0},1)
}

//header 클릭 시 스크롤이동
$('.header a').on('click', function(event) {
    event.preventDefault();

    const target = $(this).attr('href');
    
    if ($(target).length) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    }
});



//스크롤 시 헤더숨김
let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();
  if (curr > lastScroll) {
    $('.header').addClass('hide')
  } else {
    $('.header').removeClass('hide')
  }
  lastScroll=curr;
})

//intro animation
function startIntro() {
    const introTitleTxt = new SplitType('.intro__title', { types: 'words, chars', });
    const headerLogoTxt = new SplitType('.header__logo a', { types: 'words, chars', });
    const headerContactTxt = new SplitType('.header__contact a', { types: 'words, chars', });

    const intro = gsap.timeline();
    intro
    .fromTo('.header__logo .char',
        {opacity:0, transform: 'translate(0px, 120%)'},
        {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },1
    )
    .fromTo('.header__contact .char',
        {opacity:0, transform: 'translate(0px, 120%)'},
        {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },1
    )
    .fromTo('.intro__title .char',
        {opacity:0, transform: 'translate(0px, 120%)'},
        {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 },1
    )
    .fromTo('.intro__title .line',
        {opacity:0, width: '0px'},
        {opacity:1, width: '120px'}
    )
    .fromTo('.intro__img',{opacity:0},{opacity:'30%'})

}


//intro 마우스 커서에 따라 움직이는 이미지
/* const introImage = document.querySelectorAll('.intro__img');

let mouseX = 0;
let mouseY = 0;
let imageX = 0;
let imageY = 0;
const speed = 0.1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    imageX += (mouseX - imageX) * speed;
    imageY += (mouseY - imageY) * speed;

    gsap.to(introImage, {
        x: imageX,
        y: imageY,
        duration: 0.2,
        ease: "power2.out"
    });
}); */


//about
const aboutTitleTxt = new SplitType('.about__title', { types: 'chars', });

const about = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        end: '30% 40%',
        scrub: 0,
    }
})
about
.fromTo('.about__title .char',
  {opacity: 0, transform: 'translate(0px, 120%)'},
  {opacity:1, transform: 'translate(0px, 0%)', stagger: .05 }
)
.fromTo('.about__description',
    {opacity: 0},
    {opacity: 1}
)


let motion = gsap.matchMedia();
motion.add("(min-width: 768px)", () => {
//lenis
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

gsap.ticker.lagSmoothing(0);

//cursor
const cursor = document.querySelector('.cursor');
const cursorPointer = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
  gsap.set(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: .1,
  });
});
cursorPointer.forEach((el) => {
  el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
          scale: 4,
          duration: .5,
      });
  });

  el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
          scale: 1,
          backgroundColor: '#fff',
          duration: .5,
      });
  });
});


})
