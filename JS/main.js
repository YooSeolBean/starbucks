/*요소 찾기*/


// scroll을 일정부분이상 내렸을 때 badges 사라지게 하기*/
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector("#to-top");

/*window : 프로젝트가 나타나있는 브라우저 하나의 탭(화면자체)*/ 

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY>500){
     //배지 숨기기
     gsap.to(badgeEl, .6,{
       opacity:0,
       display:'none'
     });

     /*grap.to(요소,지속시간, 옵션*/
    /* 옵션 : 사용가능한 JS라이브러리 등은 옵션으로 '객체데이터' 사용*/
      
    //BUTTON 보이기!
    gsap.to(toTopEl, .2 , {
      // 옵션
      x: 0 // x축으로 얼마만큼 이동할 것인가-> 100p만큼 이동하겠다
     } );


  }else{
   // 배지 보이기
   gsap.to(badgeEl,.6,{
     opacity:1,
     display:'block'
   });
   
   //BUTTON 숨기기!
   // gsap은 요소로 css를 적어도 잘 찾음
   gsap.to(toTopEl, .2 , {
    // 옵션
    x: 100 // x축으로 얼마만큼 이동할 것인가-> 100p만큼 이동하겠다
   } );

  }
  
},300))

// scroll 버튼 누르면 최상단으로 이동하기
toTopEl.addEventListener("click", function(){
  gsap.to(window,.7,{
    scrollTo : 0  // 화면의 위치를 0(맨위)로 0.7초 만에 올라가도록 처리

  }); //window-페이지가 출력되고 있는 화면 자체

})


//fade-in애니메이션

const fadeEls= document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
      delay:(index+1)*.7,
      opacity:1
    });
 
});

//JS slide swiper-  https://swiperjs.com/get-started//

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container",{
  direction:'vertical', // 수직방향
  autoplay:true, // 자동재생여부
  loop: true // 반복여부 

}); // 생성자(JS클래스함수) new Swiper('css선택자',옵션(객체형식))


// Swiper 2

new Swiper(".promotion .swiper-container",{
  // direction의 기본값 - horizontal(수평) 따라서 굳이 안적어도 됨*/
  slidesPerView:3, // 한번에 보여줄 슬라이드 개수(기본값:1 / 한번에 3개의 슬라이드를 보여주겠다)
  spaceBetween:10, // 슬라이드 사이 여백
  centeredSlides:true, // 1번 슬라이드가 가운데 보이기
                       // 가운데 위치로 온 이미지 클래스에 swiper-slide-active가 자동 추가됨
                       // swiper-slide-active로 CSS꾸며주기
  loop:true, // 반복재생
  autoplay: {
    delay: 5000 // 5초 , 3초에 한번씩 슬라이드가 자동으로 됨*/ 

    }, // 자동재생여부에 객체를 할당해주면 추가적인 옵션 적용 가능
   pagination:{
     el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
     clickable:true // 사용자의 페이지 번호 요소 제어(ul) 기능 여부
   },
   navigation:{
     prevEl:'.promotion .swiper-prev',
     nextEl:'.promotion .swiper-next'
     /*SwiperJS 내부에서 해당하는 요소를 찾아서 
       이전 슬라이드를 볼 수 있는 기능 & 다음 슬라이드를 볼 수 있는 기능 제공*/
    /*CSS로 따로 정리를 해줘야 화면상에서 보임*/
    }
});


//Swiper3 (footer의 awards부분)
new Swiper(".awards .swiper-container",{
  /* direction:horizontal => 수평설정은 기본값이라 안써도 됨*/
  autoplay:true,
  loop:true,
  slidesPerView:5,
  spaceBetween:30, //슬라이드 사이 여백
   // 한번에 보여줄 슬라이드 개수
  /*화살표로 slide 제어*/
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
  
});



/*toggle-promotion 열고닫기*/
const promotionEl = document.querySelector('.promotion');
const promotiontoggleEl = document.querySelector('.toggle-promotion');
/*promotiontoggleEl을 클릭하면 promotionEl 자체를 열거나 닫게끔*/
let isHidePromotion = false; // 보이고 있다.

/* let으로 설정했다는 것은 값이 언제든지 바뀔 수 있다!
   false <==> true*/

promotiontoggleEl.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion 
  /*!isHidepromotion = true / 이렇게 하면 다시 할당했을때는 false가 되기도, true가 되기도 함*/
  /* 즉, 어떤 특정한 값을 지속적으로 '반대값'으로 전환시켜줄 수 있는 방법*/
  if(isHidePromotion){ // true 값인 상태(promotion영역이 숨겨졌니? 응)
      //숨김처리
      promotionEl.classList.add('hide'); // css에서 처리, 화면 안보이게 처리하면 됨

  }else{ //isHidePromotion이 true인 상태에서 버튼을 클릭하면 => false
    // 보임처리
       promotionEl.classList.remove('hide');

  }
})

/*단순하게 CSS로 처리가능한 경우에는 JS에서 class만 만들어주는 것을 추천*/

/* 애니메이션 둥둥 뜨게 처리*/
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay , size){
  //gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, 
    random(1.5,2.5),
 {
      y:size, /*y축으로 얼마만큼 움직이도록 애니메이션을 지정할 것이냐*/
      repeat:-1, /* 무한반복 설정*/
      yoyo:true, /* 위에서 아래로 내려오는 애니메이션이 처리가 되면 다시 위로 올라가지도록 구현*/
              /* yoyo- 한번 재생된 애니메이션을 다시 뒤로 재생하는 변수*/ 
      ease: Power1.easeInOut,  /* 애니메이션이 좀 더 부드럽게 이어짐*/         
      delay:random(0,delay) /*그때그때 지연시간이 달라질 수 있도록.
                            최소시간은 0초부터 최대시간은 각 결과값인 delay로*/
  });
 
}

floatingObject('.floating1',1,15); // floating1번 요소에 애니메이션 처리 , delay 1초 , 위 아래로 움직이는 크기(size)는 15px 추가
floatingObject('.floating2',.5,15); // floating1번 요소에 애니메이션 처리 , delay 1초 , 위 아래로 움직이는 크기(size)는 15px 추가
floatingObject('.floating3',1.5,20); // floating1번 요소에 애니메이션 처리 , delay 1초 , 위 아래로 움직이는 크기(size)는 15px 추가


/*SCROLL MAGIC*/ 
const spyEls = document.querySelectorAll("section.scroll-spy");
/*section태그에 'scroll-spy' 클래스가 있는 문서들을 모두 읽어오는*/
spyEls.forEach(function(spyEl,index){
  /* new 생성자함수 이용해서 scrollMagic이라는 JS 라이브러리를 실행하고자 함*/
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //*triggerElement에 spyEls 중 한 요소가 되는 spyEl를 넣어줌
    /* triggerElement에 감시하고자 하는 요소 하나(spyEl)를 추가했다는 것은
       scrollMagic이라는 JS를 통해서 감시하는 요소가 triggerElemnet에 지정이 되는 것임*/
   /* 보여짐 여부를 감시할 요소 지정*/
   triggerHooK : .8,
   /* 웹페이지를 보면 viewport가 어디에서 시작해서 어디에서 끝나는지를 확인할 수 있고,
      시작하는 부분이 숫자 0, 끝나는 부분이 숫자1로 판단이 됨.
      여기서 .8이라는 값을 부여했는데, 이 값은 1에 가까우므로 
      아래쪽 쯤으로 판단됨
      => 0.8부분에 triggerHooK(갈고리)이 걸려져 있기 때문에,
         보여짐 여부를 감시하는 'trigger' 개념이 걸려있기 때문에, 
         내가 감시하려는 요소가 만약에 위에서 올라오다가 0.8 viewport지점에 걸리면
         그때 어떠한 내용이 실행(trigger)된다.

    ====>  따라서 triggerHook은 내가감시하고 있는 요소가 viewport에 어떤 지점에서
           감시되었다라는 것을 판단할 것인가를 지정해주는 옵션
           =>  그렇게 감시한 옵션을 통해서 해당하는 요소가 화면에 보여진다고 판단이 되면
               그 밑에 있는 setClassToggle()라는 메소드를 실행하는 구조를 가짐*/
          

  })
  .setClassToggle(spyEl,'show') /* 인수 2개 적어줄 수 있음(1. 클래스를 toggle할 그 요소 2. toggle할 클래스 이름 지정)*/
  .addTo(new ScrollMagic.Controller()); //ScrollMagic 자바스크립트를 또 실행해줌
  /* ScrolMagic에서 기본적으로 추가한 옵션들을 내부 컨트롤러에 내용을 할당해서 실제로 
     동작할 수 있는 구조를 만들어주는 용도로 사용됨*/
  /* ScrollMagic이 어떻게 내부적으로 동작하는지 기본적인 로직을 알지 못하면,
     이러한 부분들이 왜 필요한지 이해불가*/

  /*각각의 section태그 부분에 'scroll-spy'라는 클래스가 있어야 querySelectorAll을 통해서 찾아질 수 있음*/
  /* scroll-spy 설정구간
  1) SEASON PRODUCT
  2) RESERVE COFFEE
  3) PICK YOUR FAVORITE
  4) FIND THE STORE
  => 이 영역들은 각 영역의 0.8지점을 지나 스크롤이 되면 .show 라는 클래스가 자동으로 붙음
     다시 영역을 올리면 사라짐
  ====> 즉, scrollMagic이라는 JS라이브러리가 각각에 해당하는 scroll-spy라는 클래스를 가진
        요소들을 지속적으로 감시하고 있다가,
        그 요소가 지정해놓은 해당하는 지점(0.8)을 넘어서 화면에 지정한 순간
        각각의 부분에 'show'라는 class를 추가해주는 것임  
  =====> show 클래스가 있는 경우와 없는 경우에 해당하는 내용의 애니메이션을 제어해주면 됨 
  =====> JS으론 해당하는 요소가 보이는지 그렇지 않은지 판단하고, 그 판단 결과에 따라서 해당하는 요소들의 클래스만 
        넣어주고 빼주는 아주 단순한 작업들만 함
        특히 화면에 보이는 부하가 많이 걸리는 그러한 애니메이션 처리들은 되도록이면 CSS로 처리.
        다만 CSS로 처리를 하다가 너무 복잡해지거나 CSS론 구현하기가 조금 어려운 부분들이 있다면
        그때 JS도움을 받아 애니메이션 처리를 하도록 하자
        이 때 사용 라이브러리 - Gsap   
  */




  /*Scroll Magic이라는 생성자 함수가 실행되는 곳에서 밑으로 한단계씩 
    메소드를 체이닝 형태로 작성함*/  

  /*Scene => ScrollMagic이라는 JS라이브러리를 통해서 특정한 요소를 감시하는
             옵션을 지정해주는 메소드*/ 
 /*제어하려고 하는 특정한 section들이 화면에 보이는지 않는지를 라이브러리의 도움을
   받아서 감시해야 함
   => 감시할 때 필요한 옵션들을 Scene이라는 메소드에 추가해주면 됨
  메소드체이닝을 통해서 Scene()뒤에 추가적으로 setClassToggle()메소드도 삽입 
  =>setClasstoggle :HTML의 속성을 무엇인가로 지정을 할건데, 뒤에 toggle이라는 단어가 붙어있으니까
                    어떤 클래스를 넣었다가 뺐다가 제어해주는 역할
  => addTo()메소드 추가: ScrollMagic 이라는 JS라이브러리가 필요한 '컨트롤러'라는 개념의 내용을 추가하기 위해서
                         추가해야 하는 메소드
   ===>  이러한 명령들을 통해서 감시하려고 하는 몇가지 화면에 보이는 section들에 대한 정보를 입력해줄거임
   ===>   정보를 다 입력해서 마무리를 하면 특정한 section이 화면에 보이기 시작하면 animation을 
          추가해줄 수 있는 기능을 도입할 수 있는 것                                 
                    */   
              
})














       
       


 

