import React from 'react';

function openMenu() {
    const secondNavbar = document.querySelector('.second-navbar');
    const firstNavbar = document.querySelector('.first-navbar');
    const menuButton = document.querySelector('.header__memu-button');


    secondNavbar.classList.add('--rightZero');
    firstNavbar.classList.add('--opacityZero');
    
    menuButton.classList.remove('--displayNone');
    menuButton.classList.remove('--opacityZero');

    setTimeout(function(){
        firstNavbar.classList.add('--displayNone');
    }, 500)
}

export default function FirstNavBar() {
  return <div className="first-navbar">
                
            <div className="first-navbar__logo">vovkttt</div>
            
            <nav className="first-navbar__nav">
                <div className="first-navbar__link-wrapper"> <a href="#" className="first-navbar__link">Портфолио</a></div>
                <div className="first-navbar__link-wrapper"> <a href="#" className="first-navbar__link">Цены</a></div>
                <div className="first-navbar__link-wrapper"> <a href="#" className="first-navbar__link">Контакты</a></div>
            </nav>

            <div className="first-navbar__button-wrapper">
                <button onClick={openMenu} className="first-navbar__button">Меню</button>
            </div>
         </div>;
}
