import React from 'react';
import avatar from './../../img/avatar.jpg';

export default function RightSide() {
  return <div className="first-screen__content">
              
            <div className="first-screen__content-wrapper">

                <img className="first-screen__avatar" src={avatar} />
                
                <div className="first-screen__text-wrapper">
                    <div className="first-screen__title">Меня зовут Максим и я делаю<br />татуировки 3 года!</div>
                    <div className="first-screen__text">Pботаю в двух стилях "Графика Дот-ворк" и "Чернуха"</div>
                </div>
                
            </div>

            <div className="first-screen__button-wrapper">
                <button className="first-screen__portfolioBtn">Посмотреть Портфлио</button>
                <button className="first-screen__costBtn">Узнать Цену</button>
            </div>

         </div>;
}
