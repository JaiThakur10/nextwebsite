import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <>
    <Head>
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GCET</title>
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="assests/faviconss/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="assests/faviconss/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="assests/faviconss/favicon-16x16.png"
  />
  <link rel="manifest" href="assests/faviconss/site.webmanifest" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  <link rel="stylesheet" href="./style/main.css" />
</>

    </Head>
  <div className="preloader">
    <ul>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
  <nav>
    <div className="nav-logo">
      <a href="#">
        <img
          className="nav-logo-img"
          alt="logo"
          src="./img/LogoMakr-9QLm5q (1).png"
        />
      </a>
    </div>
    <ul className="nav-menu">
      <li className="nav-links">
        <a href="#">
          ABOUT <i className="fa-solid fa-caret-down" />
        </a>
        <div className="submenu1">
          <a href="#">About COLLEGE</a>
          <a href="#">ORGANAIZATION CHART</a>
          <a href="#">ADMINISTRATIVE SETUP</a>
          <a href="#">ADMINISTRATIVE STAFF</a>
          <a href="#">SRO's/ORDER's</a>
          <a href="#">AUDIT REPORT</a>
        </div>
      </li>
      <li className="nav-links">
        <a href="./library.html">
          DOWNLOAD <i className="fa-solid fa-caret-down" />
        </a>
      </li>
      <li className="nav-links">
        <a href="#">
          ACADEMIC <i className="fa-solid fa-caret-down" />
        </a>
        <div className="submenu1">
          <a href="#">Dean Research Studies</a>
          <a href="#">Research @ JU</a>
          <a href="#">Research Policy</a>
          <a href="#">Research Calandar</a>
          <a href="#">Research Projects</a>
        </div>
      </li>
      <li className="nav-links">
        {" "}
        <a href="#">
          STUDENT CORNER <i className="fa-solid fa-caret-down" />
        </a>
        <div className="submenu1">
          <a href="#">Examinations</a>
          <a href="#">Online Wi-Fi Connection Form</a>
          <a href="#">Results</a>
          <a href="#">Events</a>
          <a href="#">Scholarships</a>
        </div>
      </li>
    </ul>
    <div className="grid">
      <a className="Email">Email</a>
      <div className="container">
        <div className="searchInputWrapper">
          <input
            className="searchInput"
            type="text"
            placeholder="focus here to search"
          />
          <i className="searchInputIcon fa fa-search" />
        </div>
      </div>
      <div className="svg hide" id="svg" />
      <button className="convocation">admission</button>
      <a href="./library.html" className="admission">
        LIBRARY
      </a>
    </div>
    <div className="burger">
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </div>
  </nav>
  <div className="carousel">
    <div className="carousel-item carousel-item-visible">
      <img src="./img/Gcet_CLg.jpg" alt="Photos of University" />
      <div className="img-hero-caption">
        <p>When you have a dream, you've got to grab it and never let go.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img/carousel2.jpg" alt="Photos of University" />
      <div className="img-hero-caption">
        <p>The bad news is time flies. The good news is you're the pilot.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img/carousel3.jpg" alt="Photos of University" />
      <div className="img-hero-caption">
        <p>
          Keep your face always toward the sunshine, and shadows will fall
          behind you.
        </p>
      </div>
    </div>
    <div className="carousel-actions">
      <button id="carousel-button-prev" aria-label="Previous">
        &lt;
      </button>
      <button id="carousel-button-next" aria-label="Next">
        &gt;
      </button>
    </div>
    <div className="carousel-dots">
      <input
        className="dot selected-dot"
        type="radio"
        name="dot"
      />
      <input className="dot" type="radio" name="dot" />
      <input className="dot" type="radio" name="dot" />
    </div>
  </div>
  <section className="news">
    <div className="row">
      <div className="row-news-container">
        <div className="heading">
          <h1>News</h1>
        </div>
        <div className="row-news">
          <div className="column">
            <h2>Today</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quas totam dignissimos beatae error tempore eveniet
              esse provident consequatur, illo, adipisci doloremque
              exercitationem dolorem porro sint sapiente cumque cupiditate.
              Eligendi.
            </p>
          </div>
          <div className="column">
            <h2>Highlight</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quas totam dignissimos beatae error tempore eveniet
              esse provident consequatur, illo, adipisci doloremque
              exercitationem dolorem porro sint sapiente cumque cupiditate.
              Eligendi.
            </p>
          </div>
          <div className="column">
            <h2>Highlight2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quas totam dignissimos beatae error tempore eveniet
              esse provident consequatur, illo, adipisci doloremque
              exercitationem dolorem porro sint sapiente cumque cupiditate.
              Eligendi.
            </p>
          </div>
        </div>
      </div>
      <div className="events">
        <div className="heading">
          <h1>Event</h1>
        </div>
        <div className="event-content">
          <div className="event-content-container">
            <div className="date">
              <h3>15 AUG</h3>
            </div>
            <div className="date-content">
              <p>To celeberate independence Day</p>
            </div>
          </div>
          <div className="event-content-container">
            <div className="date">
              <h3>19 AUG</h3>
            </div>
            <div className="date-content">
              <p>To celeberate Janmashtami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="vc">
    <a href="#" className="vc-tag">
      Message from Principal
    </a>
    <div className="vc-info">
      <img src="./img/LogoMakr-2EvGxJ.png" alt="quotation marks" />
      <i className="fa-solid fa-quote-left" />
      <p>
        I warmly welcome the new entrants to the portals of GCET family, for the
        most memorable journey of their life comprising of quality education,
        state of the art training and multifaceted learning. Technical Education
        is the backbone of every nation and is the stepping stone for a country
        to move into the niche of a developed nation. Engineers play the most
        vital role in nation building. They create new inventions using best
        engineered technologies to make human life more comfortable, secure and
        productive.
      </p>
    </div>
    <div className="vc-pic">
      <img src="./img/damir-kopezhanov-luseu9GtYzM-unsplash.jpg" alt="image" />
      <p>
        DR. SAMERU SHARMA
        <br />
        Principal
        <br />
        GCET Jammu
      </p>
    </div>
  </section>
  <section className="department">
    <h1>ACADEMIC UNIT</h1>
    <div className="row">
      <a href="department.html" />
      <div className="logo">
        <a href="department.html">
          <img src="img/department+.png" alt="img" />
          <div className="layer">
            <h3>DEPARTMENT</h3>
          </div>
        </a>
      </div>
      <div className="logo">
        <a href="library.tsx">
          <img src="img/centre+.png" alt="img" />
          <div className="layer">
            <h3>LIBRARY</h3>
          </div>
        </a>
      </div>
      <div className="logo">
        <a href="c&s.html">
          <img src="img/School+.png" alt="img" />
          <div className="layer">
            <h3>CLUBS &amp; SOCITIES</h3>
          </div>
        </a>
      </div>
      <div className="logo">
        <a href="https://www.coeju.com/">
          <img src="img/cells+.png" alt="img" />
          <div className="layer">
            <h3>RESULT</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
  <div className="hgrid">
    <div className="map">
      <h1>Our Location</h1>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1411.334715468327!2d74.86788637446334!3d32.719573905074505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e849955a0d7cf%3A0x1a5dc7b412505c64!2sUniversity%20Of%20Jammu!5e0!3m2!1sen!2sin!4v1658514167473!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <section className="hcarousel">
      <h1>Photo Gallery</h1>
      <div className="hcarousel-item ">
        <div className="hcarousel-item-card">
          <div className="hcarousel-item-card-pic">
            <img src="./img/mugshot1.jpg" alt="Photo of alumni" />
          </div>
          <div className="hcarousel-item-card-info">
            <p>An Anime character</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="hcarousel-item ">
        <div className="hcarousel-item-card">
          <div className="hcarousel-item-card-pic">
            <img src="./img/mugshot2.jpg" alt="Photo of alumni" />
          </div>
          <div className="hcarousel-item-card-info">
            <p>An Anime character</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="hcarousel-item">
        <div className="hcarousel-item-card">
          <div className="hcarousel-item-card-pic">
            <img src="./img/mugshot3.jpg" alt="Photo of alumni" />
          </div>
          <div className="hcarousel-item-card-info">
            <p>An Anime character</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              repudiandae.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* FOOTER */}
  <footer>
    <div className="footer-bottom">
      <div className="footer5">
        <div className="info4">
          <h3>CONNECT WITH US</h3>
          <a href="#" className="fa-brands fa-facebook" />
          <a href="#" className="fa-brands fa-twitter" />
          <a href="#" className="fa-brands fa-linkedin" />
          <a href="#" className="fa-brands fa-youtube" />
          <a href="#" className="fa-brands fa-instagram" />
        </div>
      </div>
    </div>
    <div className="footer-container">
      <div className="footer-links2">
        <div className="footer6">
          <h3>Central Facilities</h3>
          <a href="#">Library</a>
          <a href="#">Health &amp; Sports</a>
          <a href="#">Auditorium</a>
          <a href="#">Landscape Departments</a>
          <a href="#">Campus Map</a>
          <a href="#">University Works </a>
          <a href="#">Centre for IT</a>
          <a href="#">Others Facilities</a>
        </div>
        <div className="footer4">
          <h3>JU Corner</h3>
          <a href="#">Employee Zone</a>
          <a href="#">Check Mail</a>
          <a href="#">Authorities</a>
          <a href="#">Finance wing </a>
          <a href="#">IT Policy </a>
          <a href="#">Advertisement Policy</a>
          <a href="#">Social Media Guide.</a>
          <a href="#">Others Facilities</a>
        </div>
      </div>
      <div className="footer1">
        <div className="nav-logo">
          <a href="#">
            <img className="nav-logo-img" src="./img/LogoMakr-9QLm5q (1).png" />
          </a>
        </div>
        <div className="info">
          <h4> GCET </h4> <br />
          <h2>JAMMU</h2>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer2">
          <h3>Important Links</h3>
          <a href="#">Apply for Faculty</a>
          <a href="#">Onlimne Forms</a>
          <a href="#">RTI</a>
          <a href="#">Info. for Disabled </a>
          <a href="#">Grievance Cell </a>
          <a href="#">University Works</a>
          <a href="#">Post Your Complaint</a>
          <a href="#">Additional Info. </a>
        </div>
        <div className="footer3">
          <h3>Quick Links</h3>
          <a href="#">Departments</a>
          <a href="#">Centres</a>
          <a href="#">Schools</a>
          <a href="#">Centres Of Excellence</a>
          <a href="#">Anti-sexual Policy</a>
          <a href="#">University Blocks</a>
          <a href="#">Events</a>
          <a href="#">Contact </a>
        </div>
      </div>
    </div>
  </footer>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.4/lottie.min.js"
  integrity="sha512-ilxj730331yM7NbrJAICVJcRmPFErDqQhXJcn+PLbkXdE031JJbcK87Wt4VbAK+YY6/67L+N8p7KdzGoaRjsTg=="
  crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
<script src="./app.js"></script>
</>

  )
}
