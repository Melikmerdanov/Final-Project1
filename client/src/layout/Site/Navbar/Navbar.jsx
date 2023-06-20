import React, { useState, useEffect } from 'react'
import "./Navbar.scss"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Belirli bir scroll değeri aşıldığında logo görünür hale gelsin
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll olayı dinleyicisini temizleme
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="navbar">
      <div className="navbar__left">
        <a href="/">
          <img src="data:image/png;base64,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" alt=""  style={{ display: isScrolled ? 'block' : 'none' }} />
        </a>
      </div>
      <div className="navbar__middle">
        <ul>
          <li>
            <a href="/pizza">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/icon2p.png" alt=""/>
              <p>Pizza</p>
            </a>
          </li>

          

          <li>
            <a href="/corek">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/icon2hdjfds.png" alt="" />
              <p>Çörək</p>
            </a>
          </li>

          <li>
            <a href="/toyuq">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/icon2ch.png" alt="" />
              <p>Toyuq</p>
            </a>
          </li>

          <li>
            <a href="/salat">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/icon2skjd.png" alt="" />
              <p>Salat</p>
            </a>
          </li>

          <li>
            <a href="/icki">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/icon2dfd.png" alt="" />
              <p>İçki</p>
            </a>
          </li>

          <li>
            <a href="/sirniyyat">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/iconi.png" alt="" />
              <p>Şirniyyat</p>
            </a>
          </li>

          <li>
            <a href="/sous">
              <img src="https://s3.eu-west-3.amazonaws.com/ppost/icon2dd.png" alt="" />
              <p>Sous</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <img src="https://dominospizza.az/static/media/cart-icon.d8fa61ee.webp" alt=""  style={{ display: isScrolled ? 'block' : 'none' }}/>
        <p style={{ display: isScrolled ? 'block' : 'none' }}>Səbət</p>
      </div>
    </div>
    </>
  )
}

export default Navbar