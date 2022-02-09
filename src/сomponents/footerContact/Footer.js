import React from 'react';

export default function Footer() {
  return <footer className="footer" id="contact" >

            <div className="footer__tittle">Контакты</div>

            <div className="footer__icon-wrapper">
              <a href='https://www.instagram.com/vovkttt/' className='footer__link'>
                <div className="footer__icon _icon-instagram"></div>
                <div>Instagram</div>
              </a>
              
              <a href='https://wa.me/380994085886' className='footer__link'>
                <div className="footer__icon _icon-whatsapp"></div>
                <div>WhatsApp</div>
              </a>
              
              <a href='https://t.me/vovkttt' className='footer__link'>
                <div className="footer__icon _icon-telegram"></div>
                <div>Telegram</div>
              </a>
              
              <div className='footer__link'>
                <div className="footer__icon _icon-viber"></div>
                <div>Viber: +380994085886</div>
              </div>

            </div>
         
         </footer>;
}
