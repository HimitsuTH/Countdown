const countdown = document.getElementById("countdown");

const days = "00";
const hours = "00";
const minutes = "00";
const seconds = "00";

const countDown_time = setInterval(function() {
    const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

    // Get today's date and time
    const now = new Date().getTime();
  
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Set show days,hours,minutes and seconds 

    const days_text = days < 10 ? `0${days}` : days;
    const hours_text = hours < 10 ? `0${hours}` : hours;
    const minutes_text = minutes < 10 ? `0${minutes}` : minutes;
    const seconds_text = seconds < 10 ? `0${seconds}` : seconds;


    countdown.innerHTML = `
    <article><p class="time">${days_text}</p><p class="date">days</p></article>
    <article><p class="time">${hours_text}</p><p class="date">hours</p></article>
    <article><p class="time">${minutes_text}</p><p class="date">minutes</p></article>
    <article><p class="time">${seconds_text}</p><p class="date">seconds</p></article>
`;

}, 1000);

countdown.innerHTML = `
    <article><p class="time">${days}</p><p class="date">days</p></article>
    <article><p class="time">${days}</p><p class="date">hours</p></article>
    <article><p class="time">${days}</p><p class="date">minutes</p></article>
    <article><p class="time">${days}</p><p class="date">seconds</p></article>
`;

