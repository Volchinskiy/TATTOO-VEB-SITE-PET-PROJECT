import React from 'react';
import SecondNavBar from './SecondNavBar';
import MenuButton from './MenuButton';

export default function Header() {
  return <header className='header'>
            <SecondNavBar />
            <MenuButton />
         </header>;
}