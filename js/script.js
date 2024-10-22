$(".family_list").hide()
$(".family_btn").click(function(){
 $(".family_list").slideToggle(150)
})

$(".subbg").hide()
$(".menu>li").mouseover(function(){
 $(this).children(".subbg").stop().slideDown()
})
$(".menu>li").mouseout(function(){
 $(this).children(".subbg").stop().slideUp()
})

/* m_menu 나타나기사라지기 */
$(".m_nav").hide()
$(".m_btn").click(function(){
 $(".m_nav").fadeIn(100)
 $(".m_menu_box").addClass("active")
})
$(".m_close, .m_nav_bg").click(function(){
 $(".m_nav").fadeOut(300)
 $(".m_menu_box").removeClass("active")
 $(".m_sub_bg").hide()//추가, 초기상태로 되돌리기
})

/* sub */
$(".m_sub_bg").hide()
$(".m_menu>li:nth-child(1)").click(function(){
 $(this).children(".m_sub_bg").show()
})
$(".m_sub_close").click(function(){
 $(".m_sub_bg").fadeOut(100)
})

/* slide */
$(".main_wrap>img:nth-child(1)~").hide()
let i=0;
function slide(/* 연산에 필요한 매개변수 정의가능 */){
 i=i==6?0:i+1;
 /* i에 들어가있는 값이=대입연산자 ==그거면, 등호연산자
 6이되면 ? 0이되면 i+1되라 */
 $(".main_wrap>img").eq(i).show()
 $(".main_wrap>img").eq(i).siblings().hide()
}
setInterval(slide, 500);//0.5초마다 슬라이드 함수 호출

//스크롤 애니메이션
AOS.init();

let lastTop=0;/* 전역변수, 나중에 스크롤탑 저장용도 */
$(window).scroll(function(){
 let top=$(this).scrollTop();//지역변수, 스크롤이 움직일때마다 변함 this는 윈도우를 가르킴

 if(top>lastTop){
  $(".header").css({'marginTop': "-100px"})
 }else{//아니면 헤더에 트랜지션
   $(".header").css({'marginTop': "-0px"})
 }

 lastTop=top;

 if(top>100){
  $(".maintitle_top").css({'padding-left':top,'transform':'scale(1.3)','color':'#eab5b8'})
  $(".maintitle_bottom").css({'padding-left':top,'transform':'scale(1.3)','color':'#eab5b8'})

 }else{
  $(".maintitle_top").css({'padding-left':top,'transform':'scale(1)','color':'#fff'})
  $(".maintitle_bottom").css({'padding-left':top,'transform':'scale(1)','color':'#fff'})

 }


})

//스크롤탑
$(document).ready(function(){
  $(".return-top").hide(); // 탑 버튼 숨김
 
   $(function () {
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) { // 스크롤이 100을 넘을면 ▲표시
               $('.return-top').fadeIn();
           } else {
               $('.return-top').fadeOut();
           }
       });
       $('.return-top').click(function () {
           $('body,html').animate({
               scrollTop: 0
           }, 500);  // 탑 이동 스크롤 속도
           return false;
       });
   });
 
  });/* 스크롤탑 끝 */