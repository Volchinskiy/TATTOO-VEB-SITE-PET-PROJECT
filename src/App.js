import './App.css';
import Header from './сomponents/Header';

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
    </div>
  );
}

export default App;
