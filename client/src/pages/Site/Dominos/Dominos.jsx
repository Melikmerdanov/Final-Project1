import React from 'react'
import Slider from "./Slider.jsx"
import "./Dominos.scss"
const Dominos = () => {
  return (
    <>
      <div className="section1">
        <div className="section1__left">
          <h5 >DOMINO'S MOBİL TƏTBİQİ</h5>
          <p className='text-red'>TƏTBİQLƏ TEZ VƏ PULSUZ  <br /> ÇATDIRILMA</p>
          <div className='blue'>
            <img src="https://dominospizza.az/static/media/brush-splash.32c4bd0e.webp" alt="" />
          </div>
          <p className='text-grey'>
          sevimli pizzanızı seçin, online sifariş edin. bu indi domino’s tətbiqi ilə <br />
          mümkündür! siz online olaraq öz pizzanızın inqridientlərini, xəmir tipini, <br />
          çörəkləri, qəlyanaltıları, sousları və içkiləri mobil tətbiqdən seçib sifariş edə <br />
          bilərsiniz. zəngin pizza çeşidləri və ən yaxşı dad azərbaycanda!
          </p>
          <div className="downalds">
            <div className="downald">
              <a href="https://play.google.com/store/apps/details?id=com.dominospizza.az">
                <img src="data:image/png;base64,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" alt="" />
              </a>
            </div>
            <div className="downald">
              <a href="https://apps.apple.com/us/app/dominos-pizza-azerbaijan/id1535012493">
                <img src="https://dominospizza.az/static/media/app-store.1b659262.svg" alt="" />
              </a>
            </div>
            <div className="downald">
              <a href="https://appgallery.huawei.com/app/C104470921">
                <img src="https://dominospizza.az/static/media/app-gallery.ff54aa0a.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="section1__right">
          <img src="https://dominospizza.az/static/media/dominos-banner-download-app.9f944170.webp" alt="" />
        </div>
      </div>

      {/* Section 2   */}
      <div className="section2">
        <div className="section2__left">
          <h5>
          İZLƏMƏ
          </h5>
          <p className='text-red'>
          SİFARİŞİN İZLƏNMƏSİ <br /> BARMAĞINIZIN UCUNDADIR
          </p>
          <p className='text-grey'>
         bütün qeyri-müəyyənliklərdən qurtulun. indi sifarişinizin əvvəldən axıra qədər
          izləyin. domino's pizzanın yeni mobil tətbiqini endirin və izləmə xidmətini əldə edin. 
          </p>
          <a href="/izleme">
            <button><i class="fa-solid fa-location-dot"></i> İNDİ İZLƏYİN</button>
          </a>
        </div>
        <div className="section2__right">
          <img src="https://dominospizza.az/static/media/mobile-store-tracking-banner.2c6882d7.webp" alt="" />
        </div>
      </div>

      {/* Section 3 */}

      <div className="section3">
        <div className="section3__left">
          <img src="https://dominospizza.az/static/media/earn-coins.9011d4f3.webp" alt="" />
        </div>
        <div className="section3__right">
          <h5>HƏDİYYƏLƏR</h5>
          <p className='text-blue'>
          HƏR ONLİNE SİFARİŞDƏ  XALLAR <br /> QAZANIN
          </p>
          <p className='text-grey'>
          pizza alıcısı üçün əla təklif . domino’s pizza ilə “hədiyyə xallar” qazanın və<br />
          onları inanılmaz təklif və endirimlərlə əvəzləyin. tələsin və “hədiyyə  <br /> xallarını” dərhal əldə edin.
          </p>
          <a href="/pizza">
            <button><i class="fa-solid fa-cart-shopping"></i> İNDİ SİFARİŞ VERİN</button>
          </a>
        </div>
      </div>

      {/* Section 4 */}

      <div className="section4">
        <img src="https://dominospizza.az/static/media/make-your-own-pizza-az.85b2c4e1.webp" alt="" />
        <button><i class="fa-solid fa-cart-shopping"></i>  İNDİ YARAT</button>
      </div>
    </>
  )
}

export default Dominos