import React from 'react';
import FirstNavBar from './FirstNavBar';
import SecondNavBar from './SecondNavBar';

export default function Header(props) {
  return <header>
            <FirstNavBar />
                {props.name}
            <SecondNavBar />
         </header>;
}
