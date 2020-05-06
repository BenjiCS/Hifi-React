import React from 'react';
import map from './images/top-map.png';
import call from './images/top-call.png';
import mail from './images/top-mail.svg';

function Header() {
  return (
<header className="header">
	<div className="header__info">
	  <img className="info__img" src={map} alt="map"/>
	  <img className="info__img" src={call} alt="call"/>
	  <img className="info__img" src={mail} alt="mail"/>
	</div>
	<nav className="header__nav">
    <ul className="nav__ul">
      <li className="ul__li"><a href="/" className="li__a">HOME</a></li>
      <li className="ul__li"><button href="" className="li__a">ABOUT US</button></li>
      <li className="ul__li"><button href="" className="li__a">BRANDS</button></li>
      <li className="ul__li"><button href="" className="li__a">BLOG</button></li>
      <li className="ul__li"><button href="" className="li__a">EVENTS</button></li>
      <li className="ul__li"><a href="/shop" className="li__a">SHOP</a></li>
      <li className="ul__li"><button href="" className="li__a">CONTACT US</button></li>
    </ul>
  </nav>
  </header>
  );
}

export default Header;
