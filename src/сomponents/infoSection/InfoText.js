import React from 'react';

export default function InfoText(props) {
  return <div className="infoSection__text">
      {props.text1}<br />
      {props.text2}
      </div>;
}
