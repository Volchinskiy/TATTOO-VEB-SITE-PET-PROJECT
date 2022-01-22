import React from 'react';

export default function FirstNavBar() {
  return <div className="first-navbar">
                
            <div className="first-navbar__logo">vovkttt</div>
            
            <nav className="first-navbar__nav">
                <div className="first-navbar__link-wrapper"> <a href="" className="first-navbar__link">Портфолио</a></div>
                <div className="first-navbar__link-wrapper"> <a href="" className="first-navbar__link">Цены и условя работы</a></div>
                <div className="first-navbar__link-wrapper"> <a href="" className="first-navbar__link">Контакты</a></div>
            </nav>

            <div className="first-navbar__button-wrapper">
                <button className="first-navbar__button">Меню</button>
            </div>
         </div>;
}
