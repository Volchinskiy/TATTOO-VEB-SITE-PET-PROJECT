import React from 'react';
import FirstNavBar from './FirstNavBar';
import SecondNavBar from './SecondNavBar';
import MenuButton from './MenuButton';

export default function Header() {
  return <header>
            <FirstNavBar />
            <SecondNavBar />
            <MenuButton />
         </header>;
}