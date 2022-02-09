import React from 'react';

function closeMenu() {
    document.querySelector('.second-navbar').classList.remove('--rightZero');
    document.querySelector('.pageWrapper').classList.remove('--menuOn');
    document.querySelector('body').classList.remove('--overflovHidden');
}

function scrolToPortfolio() {
    let coordinates = document.querySelector("#portfolio").getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
        top: coordinates,
        behavior: "smooth"
    });
    
    document.querySelector('.second-navbar').classList.remove('--rightZero');
    document.querySelector('.pageWrapper').classList.remove('--menuOn');
    document.querySelector('body').classList.remove('--overflovHidden');
    document.querySelector(".header__button-wrapper").classList.add('--menuButtonHide');
}

function scrolToPrice() {
    let coordinates = document.querySelector("#price").getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
        top: coordinates,
        behavior: "smooth"
    });

    document.querySelector('.second-navbar').classList.remove('--rightZero');
    document.querySelector('.pageWrapper').classList.remove('--menuOn');
    document.querySelector('body').classList.remove('--overflovHidden');
    document.querySelector(".header__button-wrapper").classList.add('--menuButtonHide');   
}

function scrolToСontact() {
    let coordinates = document.querySelector("#contact").getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
        top: coordinates,
        behavior: "smooth"
    });
    
    document.querySelector('.second-navbar').classList.remove('--rightZero');
    document.querySelector('.pageWrapper').classList.remove('--menuOn');
    document.querySelector('body').classList.remove('--overflovHidden');
    document.querySelector(".header__button-wrapper").classList.add('--menuButtonHide');
}

export default function SecondNavBar() {
  return <div className="second-navbar">
                
            <div className="second-navbar__logo">Tattoo</div>
            
            <nav className="second-navbar__nav">
                <button 
                    onClick={scrolToPortfolio}
                    className="second-navbar__nav-button">
                    Портфолио
                </button>
                <button 
                    onClick={scrolToPrice}
                    className="second-navbar__nav-button">
                    Цены
                </button>
                <button 
                    onClick={scrolToСontact}
                    className="second-navbar__nav-button">
                    Контакты
                </button>
            </nav>

            <div className="second-navbar__button-wrapper">
                <button onClick={closeMenu} className="second-navbar__button">Назад</button>
            </div>

         </div>;
}
