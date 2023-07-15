import React from 'react'

export default function Navbar() {
  return (
    <><><div>
          <div className="nav-logo"><href /><img className="nav-logo-img" alt="logo" src="./img/LogoMakr-9QLm5q (1).png"></></a></div>
          <ul className="nav-menu">
              <li className="nav-links"><a href="#">ABOUT <i className="fa-solid fa-caret-down"></i></a>

                  <div className="submenu1">
                      <a href="#">About COLLEGE</a>
                      <a href="#">ORGANAIZATION CHART</a>
                      <a href="#">ADMINISTRATIVE SETUP</a>
                      <a href="#">ADMINISTRATIVE STAFF</a>
                      <a href="#">SRO's/ORDER's</a>
                      <a href="#">AUDIT REPORT</a>
                  </div>

              </li>

              <li className="nav-links"><a href="./library.html">LIBRARY <i className="fa-solid fa-caret-down"></i></a>

              </li>

              <li className="nav-links"><a href="#">RESEARCH <i className="fa-solid fa-caret-down"></i></a>
                  <div className="submenu1">
                      <a href="#">Dean Research Studies</a>
                      <a href="#">Research @ JU</a>
                      <a href="#">Research Policy</a>
                      <a href="#">Research Calandar</a>
                      <a href="#">Research Projects</a>
                  </div>
              </li>
              <li className="nav-links"> <a href="#">STUDENT CORNER <i className="fa-solid fa-caret-down"></i>
              </a>
                  <div className="submenu1">
                      <a href="#">Examinations</a>
                      <a href="#">Online Wi-Fi Connection Form</a>
                      <a href="#">Results</a>
                      <a href="#">Events</a>
                      <a href="#">Scholarships</a>
                  </div>

              </></ul>
          <div className="grid">
              <a className="Email">Email</a>
              <div className="container">
                  <div className="searchInputWrapper">
                      <input className="searchInput" type="text" placeholder='focus here to search'>
                          <i className="searchInputIcon fa fa-search"></i>
                      </input>
                  </div>
              </div>
              <div className="svg hide" id="svg"></div>
              <button className="convocation">admission</button>
              <a href="./library.html" className="admission">DOWNLOAD</a>
          </div>
      </><div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div></>
  )
}
