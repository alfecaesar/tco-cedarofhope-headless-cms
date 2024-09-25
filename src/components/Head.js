import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Head = ({ menu, settings }) => {
  const location = useLocation();

  if (!menu) return null; 

  return (
      <header>
          <div className="topbar bg-darkpurple">
              <div className="container">
                  <div className="row">
                      <div className="col-6 col-sm-9 col-lg-12 py-1 d-flex d-lg-block align-items-center">
                          <div className="row justify-content-lg-end">
                              <div className="col-auto col-lg-2 text-left text-lg-end">
                                  <a href={`tel: ${settings.primary_phone_number}`} className="text-color-white montserrat-regular text-decoration-none hover-yellow">{settings.primary_phone_number}</a>
                              </div>
                              <div className="col-auto col-lg-2 d-flex justify-content-sm-end">
                                  {settings.twitter_url ? (
                                  <a target="_blank" rel="noreferrer" href={settings.twitter_url} className="text-decoration-none text-color-white me-2 me-sm-3 hover-yellow">
                                      <i className="fa-brands fa-square-x-twitter"></i>
                                  </a>
                                  ): null}
                                  {settings.facebook_url ? (
                                  <a target="_blank" rel="noreferrer" href={settings.facebook_url} className="text-decoration-none text-color-white me-2 me-sm-3 hover-yellow">
                                      <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  ): null}
                                  {settings.instagram_url ? (
                                  <a target="_blank" rel="noreferrer" href={settings.instagram_url} className="text-decoration-none text-color-white me-2 me-sm-3 hover-yellow">
                                      <i className="fa-brands fa-instagram"></i>
                                  </a>
                                   ): null}
                                   {settings.youtube_url ? (
                                  <a target="_blank" rel="noreferrer" href={settings.youtube_url} className="text-decoration-none text-color-white me-0 hover-yellow">
                                      <i className="fa-brands fa-youtube"></i>
                                  </a>
                                  ): null}
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-sm-3 d-flex d-lg-none justify-content-end align-items-center py-1">
                          <a className="nav-link text-color-purple montserrat-bold text-decoration-none bg-yellow text-uppercase bg-hover-orange hover-white py-1 px-1" href="#">Watch Live</a>
                      </div>
                  </div>

              </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-purple py-2 py-sm-3 py-md-4">
              <div className="container">
                  <a className="navbar-brand" href="/">
                      <img src={settings.header_logo} className="d-inline-block align-top img-fluid" alt="" loading="lazy" />
                          <span className="d-none d-print-none">Cedar of Hope Baptist Church</span>
                  </a>
                  <button className="navbar-toggler text-color-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                      <ul className="navbar-nav mb-2 mb-md-0">
                        {menu.map(item => (
                        <li key={item.id} className={item.object === "page" ? `nav-item ${location.pathname === `/${item.slug}` ? 'selected' : ''}` : "nav-item no-border"}>
                            <Link to={item.object === "custom" ? `${item.url}` : `/${item.slug}` } className={item.object === "page" ? "nav-link text-color-white montserrat-regular text-decoration-none hover-yellow" : "nav-link text-color-purple montserrat-bold text-decoration-none bg-yellow text-uppercase bg-hover-orange hover-white"}>{item.title}</Link>
                        </li>
                        ))}
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  )
}

export default Head