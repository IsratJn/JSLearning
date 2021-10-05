const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
console.log(secondsHand.style.transform);
secondsHand.style.transform = 'rotate(120deg)';
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secToDeg = (seconds/60)*360+90;
    const minToDeg = (minutes/60)*360+90;
    const hourToDeg = (hours/12)*360+90;
    console.log(hourToDeg,minToDeg,secToDeg);
    if(secToDeg >440 || secToDeg < 100)
    {
        secondsHand.style.transition  = 'none';
    }
    else
    {
        secondsHand.style.transition = 'all 0.5s';
    }
    secondsHand.style.transform = `rotate(${secToDeg}deg)`;
    minutesHand.style.transform = `rotate(${minToDeg}deg)`;
    hoursHand.style.transform = `rotate(${hourToDeg}deg)`;

}

setInterval(setDate,1000);