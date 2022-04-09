'use strict';

// Navbar 맨 위에 있을 때는 투명, 내려오면 분홍색 백그라운드
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--pink');
    } else{
        navbar.classList.remove('navbar--pink');
    }
});


//  navbar 메뉴 건들면 해당 section으로 이동

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event)=> {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    console.log(event.target.dataset.link);

    navbarMenu.classList.remove('open');   // 미디어쿼리에서 네브바가 계속 열려있는 걸 방지

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth'});
});


// 미디어쿼리에서 네브바 누르면 메뉴 뜨는 것

const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });




// ContactMe 클릭 후 section 이동

// const contactMe = document.querySelector('.home__contact');

// contactMe.addEventListener('click', ()=> {
//     const scrollTo = document.querySelector('#contact');
//     scrollTo.scrollIntoView({behavior:'smooth'});
// });


// 스크롤하면 투명하게 넘어가기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    // console.log(`homeHeight : ${homeHeight}`);    해보면 homeHeight은 714.8
    home.style.opacity = 1-window.scrollY/homeHeight;
});



// 포트폴리오 필터

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    
    if (filter == null){
        return;
    }

    // 버튼 누를 때 색깔 해결
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('active');

    projectContainer.classList.add('animation');

 
    setTimeout(()=>{

        projects.forEach((project)=>{
            console.log(project.dataset.type);
            if(filter === '*' || filter===project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
    

        projectContainer.classList.remove('animation'); 
    },300)

});

ㅋ
