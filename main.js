let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate = '01/01/2024 00:00:00';

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculation for days, hours, minutes, and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    // Output the result in element with id
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>"

    // Animate Stroke
    // 365 days in a year
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    // 24hrs in a day
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 60minutes in a hour
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60seconds in a minute
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // If the countdown is over, Write Happy New Year text 
    if(distance < 0){
        clearInterval(x);
        document.getElementById('time' + 'title').style.display = "none";
        document.querySelector(".newYear").style.display = "block";
    }
})