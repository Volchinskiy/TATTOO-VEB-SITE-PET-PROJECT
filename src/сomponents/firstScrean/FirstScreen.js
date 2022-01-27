import React from 'react';
import inductionPng from './../../img/inductionPng.png';
import avatar from './../../img/avatar.jpg';

export default function FirstScreen() {
  return <div className="first-screen">
         
         <img className="first-screen__induction" src={inductionPng} />

          <div className="first-screen__content">
              
              <div className="first-screen__content-wrapper">

                <img className="first-screen__avatar" src={avatar} />
                
                <div className="first-screen__text-wrapper">
                  <div className="first-screen__title">Меня зовут Максим и я делаю<br />татуировки 3 года!</div>
                  <div className="first-screen__text">В данный момент раотаю в двух стилях<br /> "Графика Дот-ворк" и "Чернуха"</div>
                </div>
                
              </div>

              <div className="first-screen__button-wrapper">
                <button className="first-screen__portfolioBtn">Посмотреть Портфлио</button>
                <button className="first-screen__costBtn">Узнать Цену</button>
              </div>
          
          </div>
         
         </div>;
}
