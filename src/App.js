import './App.css';
import Header from './сomponents/Header';



const firstNavbar = document.querySelector('.first-navbar');
const secondNavbar = document.querySelector('.second-navbar');

console.log(firstNavbar);

// setTimeout(function(){
//     firstNavbar.classList.add('--displayNone');
//     secondNavbar.classList.add('--displayFlex');
// }, 2000)

function App() {
  return (
    <div>
      <Header name="я новй пропс" />      
    </div>
  );
}

export default App;
