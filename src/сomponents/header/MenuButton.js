import React from 'react';

function openMenu() {
  document.querySelector('.second-navbar').classList.add('--rightZero');
  document.querySelector('.pageWrapper').classList.add('--menuOn');
  document.querySelector('body').classList.add('--overflovHidden');
}

// function hideAndShow() {
//   let prevScrollpos = window.pageYOffset;
//   window.onscroll = function() {
    
//     let currentScrollPos = window.pageYOffset;
    
//     if (prevScrollpos > currentScrollPos) {
//       document.querySelector(".header__button-wrapper").style.top = "0";
//     } else {
//       document.querySelector(".header__button-wrapper").style.top = "-50px";
//     }
    
//     prevScrollpos = currentScrollPos;
//   }
// }

export default function MenuButton() {
  return <div className="header__button-wrapper">
            <button onClick={openMenu} className="header__memu-button --opacityZero">Меню</button> 
         </div>;
}
