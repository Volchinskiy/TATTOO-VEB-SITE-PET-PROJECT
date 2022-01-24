import './App.css';
import Header from './сomponents/Header';

setTimeout(function(){
  const firstNavbar = document.querySelector('.first-navbar');
  const secondNavbar = document.querySelector('.second-navbar');
  // secondNavbar.classList.add('--displayFlex');
  
  firstNavbar.classList.add('--opacityZero');
  setTimeout(function(){
    firstNavbar.classList.add('--displayNone');

  }, 2000);
}, 2000)


function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
