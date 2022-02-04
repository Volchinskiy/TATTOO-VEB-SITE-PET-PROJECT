import React from 'react';
import inductionPng from './../../img/firstScreen/inductionPng.png';

export default function LeftSide() {
  return <div className="first-screen__left-side">
            <img className="first-screen__induction" src={inductionPng} />
         </div>;
}
