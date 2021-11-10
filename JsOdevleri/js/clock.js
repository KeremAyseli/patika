function showTime(){
    const d=new Date();
    document.getElementById("myClock").innerText=(d.getHours().toString()+":"+d.getMinutes().toString()+":"+d.getSeconds().toString());
     setTimeout(showTime,1000);
}
showTime();

function Onload(){
    document.getElementById("myName").innerText=prompt("İsminiz nedir?").toUpperCase();
}
