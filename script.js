const hourElement = document.getElementById ("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement =document.getElementById("seconds");
const ampmElement =document.getElementById("ampm");

function updateClock (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h > 12){
        h = h - 12;
        ampm = 'PM';
    }
    /*if (h<10){
        h ="0"+h;
    }
    if (m<10){
        m ="0"+ m;
    }
    if(s<10){
        s ="0"+ s;
    }*/
    h=h<10 ? "0"+h : h;
    m=m<10 ? "0"+m : m;
    s=s<10 ? "0"+s : s;
    hourElement.innerText = h;
    minutesElement.innerText = m;
    secondsElement.innerText = s;
    ampmElement.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1000);
}
updateClock();