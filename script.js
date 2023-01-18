const toggleBtn = document.getElementById('toggleTheme')
const body = document.body
const displayTime = document.querySelector('h1')
const displayDate = document.getElementById('date')

const secondEl = document.querySelector('.seconds')
const minuteEl = document.querySelector('.minutes')
const hourEl = document.querySelector('.hours')


const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function updateTime(){

    const date = new Date()

    let day = date.getDate() 
    let weekDay = weekdays[date.getDay()]
    let month = monthArray[date.getMonth()]
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;

    displayTime.innerHTML = `${hour}:<span class="minute">${minutes}</span> <span class="time">${ampm}</span>`
    displayDate.innerHTML = `${weekDay}, ${month} <span class="days">${day}</span>`

    hourEl.style.transform = `rotate(${(hour/12)*360}deg)`
    minuteEl.style.transform = `rotate(${(minutes/60)*360}deg)`
    secondEl.style.transform = `rotate(${(seconds/60)*360}deg)`
    console.log((1/12)*360);
}


setInterval(() => {
    updateTime()
}, 1000);
 
toggleBtn.addEventListener('click',()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        toggleBtn.textContent= "Light Mode"
    }else{
        toggleBtn.textContent= "Dark Mode"
    }
})