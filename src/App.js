import './App.css';
import './iconFont/iconFont.css';

import Header from './сomponents/header/Header';
import PageWrapper from './сomponents/pageWrapper/PageWrapper';

setTimeout(function(){
  document.querySelector('.header__memu-button').classList.remove('--opacityZero');
}, 1000)

function App() {
  return (
    <div>
      <Header />
      <PageWrapper />
    </div>
  );
}

export default App;
