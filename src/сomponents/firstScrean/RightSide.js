import React from 'react';
import avatar from './../../img/firstScreen/avatar.jpg';

function scrolToPortfolio() {
    let coordinates = document.querySelector("#portfolio").getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: coordinates,
        behavior: "smooth"
    });
}

function scrolToPrice() {
    let coordinates = document.querySelector("#price").getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: coordinates,
        behavior: "smooth"
    });
}

export default function RightSide() {
  return <div className="first-screen__right-side">
              
            <div className="first-screen__content-wrapper">

                <img className="first-screen__avatar" src={avatar} alt="Кот, который гуляет сам по себе" />
                
                <div className="first-screen__text-wrapper">
                    <div className="first-screen__title">Меня зовут Максим и я делаю татуировки 3 года!</div>
                    <div className="first-screen__text">Pботаю в двух стилях "Графика Дот-ворк" и "Чернуха"</div>
                    <div className="first-screen__title">Киев</div>
                </div>
                
            </div>

            <div className="first-screen__button-wrapper">
                <button 
                    onClick={scrolToPortfolio}
                    className="first-screen__portfolioBtn">
                    Посмотреть Портфлио
                </button>
                
                <button 
                    onClick={scrolToPrice}
                    className="first-screen__costBtn">
                    Узнать Цену
                </button>
            </div>

         </div>;
}
