import React from 'react';
import PortfolioRowItem from './PortfolioRowItem';

import img1 from './../../img/portfolioImg/portfolio1Row/1.jpg'; 
import img2 from './../../img/portfolioImg/portfolio1Row/2.jpg'; 
import img3 from './../../img/portfolioImg/portfolio1Row/3.jpg'; 

import img4 from './../../img/portfolioImg/portfolio2Row/1.jpg'; 
import img5 from './../../img/portfolioImg/portfolio2Row/2.jpg'; 
import img6 from './../../img/portfolioImg/portfolio2Row/3.jpg'; 

import img7 from './../../img/portfolioImg/portfolio3Row/1.jpg'; 
import img8 from './../../img/portfolioImg/portfolio3Row/2.jpg'; 
import img9 from './../../img/portfolioImg/portfolio3Row/3.jpg'; 

import img10 from './../../img/portfolioImg/portfolio4Row/1.jpg'; 
import img11 from './../../img/portfolioImg/portfolio4Row/2.jpg'; 
import img12 from './../../img/portfolioImg/portfolio4Row/3.jpg'; 

import img13 from './../../img/portfolioImg/portfolio5Row/1.jpg'; 
import img14 from './../../img/portfolioImg/portfolio5Row/2.jpg'; 
import img15 from './../../img/portfolioImg/portfolio5Row/3.jpg'; 

import img16 from './../../img/portfolioImg/portfolio6Row/1.jpg'; 
import img17 from './../../img/portfolioImg/portfolio6Row/2.jpg'; 
import img18 from './../../img/portfolioImg/portfolio6Row/3.jpg'; 

import img19 from './../../img/portfolioImg/portfolio7Row/1.jpg'; 
import img20 from './../../img/portfolioImg/portfolio7Row/2.jpg'; 
import img21 from './../../img/portfolioImg/portfolio7Row/3.jpg';

export default function PortfolioSection() {
  return <div className="portfolioSection"> 

            <div className="portfolioSection__tittle">Портфолио</div>
            <div className="portfolioSection__subtittle">Графика-Дотворк</div>

            <div className="portfolioSection__row1920"> 
                <PortfolioRowItem src={img1} />
                <PortfolioRowItem src={img2} />
                <PortfolioRowItem src={img3} />
            </div>
            <div className="portfolioSection__row1350"> 
                <PortfolioRowItem src={img4} />
                <PortfolioRowItem src={img5} />
                <PortfolioRowItem src={img6} />
            </div>
            <div className="portfolioSection__row1080"> 
                <PortfolioRowItem src={img7} />
                <PortfolioRowItem src={img8} />
                <PortfolioRowItem src={img9} />
            </div>
            <div className="portfolioSection__row1350"> 
                <PortfolioRowItem src={img10} />
                <PortfolioRowItem src={img11} />
                <PortfolioRowItem src={img12} />
            </div>

            <div className="portfolioSection__subtittle">Чернуха</div>

            <div className="portfolioSection__row1350"> 
                <PortfolioRowItem src={img13} />
                <PortfolioRowItem src={img14} />
                <PortfolioRowItem src={img15} />
            </div>
            <div className="portfolioSection__row1080"> 
                <PortfolioRowItem src={img16} />
                <PortfolioRowItem src={img17} />
                <PortfolioRowItem src={img18} />
            </div>
            <div className="portfolioSection__row1350"> 
                <PortfolioRowItem src={img19} />
                <PortfolioRowItem src={img20} />
                <PortfolioRowItem src={img21} />
            </div>

            <div className="portfolioSection__button-wrapper">
              <button className="portfolioSection__button">Больше Работ В Instagram</button>
            </div>

         </div>;
}
