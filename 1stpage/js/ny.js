timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);

function num_word1(today, words){  
	today = Math.abs(today) % 100; 
	var num = today % 10;
	if(today > 10 && today < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0]; 
	return words[2];
}



    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;

    function num_word4(tsec, words){  
        tsec = Math.abs(tsec) % 100; 
        var num = tsec % 10;
        if(tsec > 10 && tsec < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0]; 
        return words[2];
    }

    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;

    function num_word3(tmin, words){  
        tmin = Math.abs(tmin) % 100; 
        var num = tmin % 10;
        if(tmin > 10 && tmin < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0]; 
        return words[2];
    }

    thour=today%24; today=Math.floor(today/24);

    function num_word2(thour, words){  
        thour = Math.abs(thour) % 100; 
        var num = thour % 10;
        if(thour > 10 && thour < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0]; 
        return words[2];
    }
    timestr=today+" "+num_word1(today, ['день', 'дня', 'дней'])+" "+thour+" "+num_word2(thour, ['час', 'часа', 'часов'])+" "+tmin+" "+num_word3(tmin, ['минута', 'минуты', 'минут'])+" "+tsec+" "+num_word4(tsec, ['секунда', 'секунды', 'секунд'])
    if(parseInt(screen.width) > 1140){
        document.getElementById('t').style.fontSize = '20px';
    }
    
    if(parseInt(screen.width) < 750){
        document.getElementById('t').style.fontSize = '10px';
    }
    document.getElementById('t').innerHTML=timestr;
    window.setTimeout("time()",1000);
}

function redirect(link) {document.location.href = link;}