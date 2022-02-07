import React from 'react';

export default function Footer() {
  return <footer className="footer" id="contact" >

            <div className="footer__tittle">Контакты</div>

            <div className="footer__icon-wrapper">
              <a href='https://www.instagram.com/vovkttt/'><div className="footer__icon _icon-instagram"></div></a>
              <a href='https://t.me/vovkttt'><div className="footer__icon _icon-telegram"></div></a>
              {/* <div className="footer__icon _icon-viber"></div> */}
            </div>
         
         </footer>;
}
