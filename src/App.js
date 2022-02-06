import './App.css';
import Header from './сomponents/header/Header';
import FirstScreen from './сomponents/firstScrean/FirstScreen';
import PortfolioSection from './сomponents/portfolioSection/PortfolioSection';
import InfoSection from './сomponents/infoSection/InfoSection';

setTimeout(function(){
  const firstNavbar = document.querySelector('.first-navbar');
  const menuButton = document.querySelector('.header__memu-button');
  
  firstNavbar.classList.add('--opacityZero');
  menuButton.classList.remove('--displayNone');

  setTimeout(function(){
    firstNavbar.classList.add('--displayNone');
    menuButton.classList.remove('--opacityZero');

  }, 1000);
}, 2000)


function App() {
  return (
    <div>
      <Header />
      <FirstScreen />
      <PortfolioSection />
      <InfoSection />
    </div>
  );
}

export default App;
