const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return(
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };
    
    if (isMobile.any()) {
        document.body.classList.add('_touch');
    
        let menuArrows = document.querySelectorAll('.menu__arrow');
    
        if (menuArrows.length > 0){
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener("click", function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }
    
    } else {
        document.body.classList.add('_pc');
    }


// 1 seconds
// 1 minute = 60 seconds
// 1 hour = 3 600 seconds
// 1 day = 86 400 seconds
// 1 year = 31 536 000

function formatDuration (seconds) {
    let start = seconds;
    let second = 0;
    let minute = 0;
    let hour = 0;
    let day = 0;
    let year = 0;
    let result = '';
  
    for(let index = 0; start > 0 ; index++){
        if(start >= 31536000){
            start -= 31536000;
            year++;
        } else {
            break;
        }
    };
  
    for(let index = 0; start > 0 ; index++){
        if(start >= 86400){
            start -= 86400;
            day++;
        } else {
            break;
        }
    };
  
    for(let index = 0; start > 0 ; index++){
        if(start >= 3600){
            start -= 3600;
            hour++;
        } else {
            break;
        }
    };
  
    for(let index = 0; start > 0 ; index++){
        if(start >= 60){
            start -= 60;
            minute++;
        } else {
            break;
        }
    };
  
    for(let index = 0; start > 0 ; index++){
        if(start >= 1){
            start -= 1;
            second++;
        } else {
            break;
        }
    };
  
    if(year > 0){
      
      result = `${year} year,`;
      
      if(year > 1){
        result = `${year} years,`;
      }  
    }
  
    if(day > 0){
      let temporaryLet = (day > 1) ? 'days' : 'day';
  
      result = (year != 0) ? result + ` ${day} ${temporaryLet}` : result + `${day} ${temporaryLet}`;    
    }
    
    if(hour > 0){
      let temporaryLet = (hour > 1) ? 'hours' : 'hour';
  
      result = (day != 0) ? result + `, ${hour} ${temporaryLet}` : result + `${hour} ${temporaryLet}`;
    }
  
    if(minute > 0){
      let temporaryLet = (minute > 1) ? 'minutes' : 'minute';
  
      result = (hour != 0) ? result + `, ${minute} ${temporaryLet}` : result + `${minute} ${temporaryLet}` ;
      
      if(hour == 0){
        result = result.split(' ');
        result[1] = `days, ${minute}`;
        result = result.join(' ')
      }
    }
  
    if(second > 0){
      let temporaryLet = (second > 1) ? 'seconds' : 'second';
      
      result = (minute != 0) ? result + ` and ${second} ${temporaryLet}` : result + `${second} ${temporaryLet}` ;
    }
    
    console.log(result);
    // console.log(result[1]);
    return result;
  }
    // console.log(year)
    // console.log(day)
    // console.log(hour)
    // console.log(minute)
    // console.log(second)
  
  formatDuration (777721);