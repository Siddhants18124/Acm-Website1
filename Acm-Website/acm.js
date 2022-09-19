
// Set the date we're counting down to
var countDownDate = new Date("Oct 8, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// Nav-bar shadow 

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 620) {
        navbar.classList.add('nav-shadow');
    } else {
        navbar.classList.remove('nav-shadow');
    }
};



// Team Slide
let cardcontainers=document.querySelectorAll('.teamlist-container');
let prebtns=document.querySelectorAll('.pre-btn');
let nxtbtns=document.querySelectorAll('.nxt-btn');

cardcontainers.forEach((item,i)=>{
    let containerdimensions=item.getBoundingClientRect();
    let containerwidth=containerdimensions.width;
    nxtbtns[i].addEventListener('click',()=>{
        console.log(item.scrollLeft);
        item.scrollLeft += containerwidth;
        console.log(item.scrollLeft);
        console.log(containerwidth);
    })
    
    prebtns[i].addEventListener('click',()=>{
        console.log(containerwidth);
        item.scrollLeft -= containerwidth+400;
    })
})