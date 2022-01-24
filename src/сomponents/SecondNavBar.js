import React from 'react';

export default function SecondNavBar() {
  return <div className="second-navbar">
                
            <div className="second-navbar__logo">vovkttt</div>
            
            <nav className="second-navbar__nav">
                <div className="second-navbar__link-wrapper"> <a href="" className="second-navbar__link">Портфолио</a></div>
                <div className="second-navbar__link-wrapper"> <a href="" className="second-navbar__link">Цены</a></div>
                <div className="second-navbar__link-wrapper"> <a href="" className="second-navbar__link">Контакты</a></div>
            </nav>

            <div className="second-navbar__button-wrapper">
                <button className="second-navbar__button">Назад</button>
            </div>

         </div>;
}
