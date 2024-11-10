import bannerImg from '../assets/Feynman.jpg';
import SlogunBanner from '../components/slogun';

function Menu() {
  return (<>
    <a href="/">homepage</a> &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="/list">list</a>
    <p></p>
    
      <img src={ bannerImg } alt="" style={{ width:"100%"}} />
      <SlogunBanner />
  </>);
}

export default Menu;
