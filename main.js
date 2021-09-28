/* ----------------------------------------navbar toggler---------------------------- */
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

/* ------------------------------------sticky navbar----------------------------- */

let header = document.querySelector('.header-2');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

/* --------------------------------------------coundown ----------------------------------*/

    let dest = new Date("nov 14 , 2021 10:00:00").getTime();


    let x = setInterval(function(){
    let now = new Date().getTime();

    let diff = dest - now;

    let days =  Math.floor( diff/(1000*60*60*24)) ;
    console.log(days);
    let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    console.log(hours);
    let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    console.log(minutes);
    let seconds = Math.floor((diff % (1000*60)) / (1000));
    console.log(seconds);

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;


},1000)
/* ----------------------------------------------scrooll up button----------------------- */
let toDo = document.querySelector('.todo');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        toDo.classList.add('sticky')
    }
    else{
        toDo.classList.remove('sticky')
    }
})

