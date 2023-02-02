function getTime() {
    var now= new Date();//? anlik saati alicaz burdan
    var hour=now.getHours()
    var minute=now.getMinutes()
    var second=now.getSeconds()


    var day=now.getDay();
    var month=now.getMonth()+1;//javascript ayi arraylar gibi 0 dan baslatiyor 
    var year=now.getFullYear();

    (hour<10)?  document.getElementById("hour").innerHTML="0"+hour:
                document.getElementById("hour").innerHTML=hour;
    
    (minute<10)? document.getElementById("minute").innerHTML="0"+minute:
                 document.getElementById("minute").innerHTML=minute;
    
    (second<10)? document.getElementById("second").innerHTML="0"+second:
                 document.getElementById("second").innerHTML=second;
                 
      document.getElementById("date").innerHTML=day+"/"+month+"/"+year           
                                    
}

setInterval(function() {getTime();},1000)