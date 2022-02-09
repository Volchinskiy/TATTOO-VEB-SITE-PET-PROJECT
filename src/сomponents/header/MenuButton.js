import React from 'react';

function openMenu() {
  document.querySelector('.second-navbar').classList.add('--rightZero');
  document.querySelector('.pageWrapper').classList.add('--menuOn');
  document.querySelector('body').classList.add('--overflovHidden');
}

function hideAndShowButton() {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header__button-wrapper").classList.remove('--menuButtonHide');
    } else {
      document.querySelector(".header__button-wrapper").classList.add('--menuButtonHide');
    }
    
    prevScrollpos = currentScrollPos;
  });  
}

setTimeout(hideAndShowButton,0);


export default function MenuButton() {
  return <div className="header__button-wrapper">
            <button onClick={openMenu} className="header__memu-button --opacityZero">Меню</button> 
         </div>;
}
