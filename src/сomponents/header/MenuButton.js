import React from 'react';

function openMenu() {
    const secondNavbar = document.querySelector('.second-navbar');

    secondNavbar.classList.add('--rightZero');
}

export default function MenuButton() {
  return <div className="header__button-wrapper">
            <button onClick={openMenu} className="header__memu-button --opacityZero --displayNone">Меню</button>
         </div>;
}
