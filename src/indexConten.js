import React from 'react';

// import NAME from '';
import logo from './images/logo-white.png';
import facebook from './images/social-facebook.png';
import blog from './images/social-blog.png';
import twitter from './images/social-twitter.png';

function indexConten() {
  return (
<main className="main__contaner">
  <figure className="contaner__figure">
    <img className="figure__img" src={logo} alt="logo" />
  </figure>
  <figure className="contaner__infofigure">
    <figcaption className="infofigure__figcaption"></figcaption>
  </figure>
  <section className="section__sectionGallery">
    <h2 className="sectionGallery__h2">
      PRIMALUNA <br />
      SOUNDS
    </h2>
    <div className="sectionGallery__arrowContainer">
      <ion-icon
        className="arrowContainer__arrowBack"
        name="ios-arrow-back"
      ></ion-icon>
      <ion-icon
        className="arrowContainer__arrowForward"
        name="ios-arrow-forward"
      ></ion-icon>
    </div>
  </section>
  <figure className="figureSome">
    <div className="figureSome__contaner1">
      <img src={facebook} className="figureSome__social" alt="facebook"/>
    </div>
    <div className="figureSome__contaner2">
      <img src={blog} className="figureSome__social" alt="blog"/>
    </div>
    <div className="figureSome__contaner3">
      <img src={twitter} className="figureSome__social"alt="twitter" />
    </div>
  </figure>
  <section className="sectionInfo">
    <div className="sectionInfo__link">
      <button className="sectionInfo__button">HISTORY</button>
      <p>
        ESTABLISHED IN THE LATE 1960S, <br />
        OUR FAMILY OWNED BUSINESS IS <br />
        BASED IN EDINBURGH AND FALKIRK, <br />
        SERVICING CUSTOMERS ACROSS THE <br />
        UK.
      </p>
    </div>
    <div className="sectionInfo__link">
      <button className="sectionInfo__button">NEWS</button>
      <p>
        CHECK OUT OUR LATEST NEWS <br />
        STORIES FOR ALL THE UP TO DATE <br />
        HI-FI CORNER PRODUCTS AND <br />
        LAUNCHES.
      </p>
    </div>
    <div className="sectionInfo__link">
      <button className="sectionInfo__button">SHOP</button>
      <p>
        HAVE A LOOK IN OUR ONLINE SHOP <br />
        FOR GREAT PRODUCTS AND DEALS.
      </p>
    </div>
  </section>
</main>

  );
}

export default indexConten;
