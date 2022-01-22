'use strict'

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

    
const firstNavbar = document.querySelector('.first-navbar');
const secondNavbar = document.querySelector('.second-navbar');

setTimeout(function(){
    firstNavbar.classList.add('--displayNone');
    secondNavbar.classList.add('--displayFlex');
}, 2000)

console.log(firstNavbar);
