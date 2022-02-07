import React from 'react';

import FirstScreen from './../firstScrean/FirstScreen';
import PortfolioSection from './../portfolioSection/PortfolioSection';
import InfoSection from './../infoSection/InfoSection';
import Footer from './../footerContact/Footer';

export default function PageWrapper() {
  return <div className='pageWrapper'>
            <FirstScreen />
            <PortfolioSection />
            <InfoSection />
            <Footer />
         </div>;
}
