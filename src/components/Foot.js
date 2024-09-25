import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Foot = ({ menu, settings }) => {
    const location = useLocation();

    if (!menu) return null;

    return (
        <footer className="bg-purple py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-2">
                        <a href="home"><img src={settings.footer_logo} alt="Cedar of Hope Baptist Church" /></a>
                    </div>
                    <div className="col-12 text-center mb-2 social-media-icons">
                        {settings.twitter_url ? (
                            <a target="_blank" rel="noreferrer" href={settings.twitter_url} className="text-decoration-none text-color-white me-3 hover-yellow">
                                <i className="fa-brands fa-square-x-twitter"></i>
                            </a>
                        ) : null}
                        {settings.facebook_url ? (
                            <a target="_blank" rel="noreferrer" href={settings.facebook_url} className="text-decoration-none text-color-white me-3 hover-yellow">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        ) : null}
                        {settings.instagram_url ? (
                            <a target="_blank" rel="noreferrer" href={settings.instagram_url} className="text-decoration-none text-color-white me-3 hover-yellow">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        ) : null}
                        {settings.youtube_url ? (
                            <a target="_blank" rel="noreferrer" href={settings.youtube_url} className="text-decoration-none text-color-white me-0 hover-yellow">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        ) : null}
                    </div>
                    <div className="col-12 text-center mb-3">
                        <p className="text-color-white mb-0 footer-address montserrat-regular">
                            <a target="_blank" rel="noreferrer" href={settings.google_map_url} className="text-color-white hover-yellow text-decoration-none">{settings.address}</a> <br />
                            <span className="d-block d-md-inline">{settings.service_1}</span> <span className="d-none d-md-inline">|</span> 
                            <span className="d-block d-md-inline">{settings.service_2}</span> <span className="d-none d-md-inline">|</span> 
                            <span className="d-block d-md-inline">{settings.service_3}</span>
                            <span className="d-block">
                                <a href={`tel: ${settings.primary_phone_number}`} className="text-color-white hover-yellow text-decoration-none">{settings.primary_phone_number}</a> | 
                                <a href={`tel: ${settings.secondary_phone_number}`} className="text-color-white hover-yellow text-decoration-none">{settings.secondary_phone_number}</a>
                            </span>
                        </p>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                        <ul className="footer-nav d-flex justify-content-center mx-0 my-0">
                            {menu.map(item => (
                                <li key={item.id} className={item.object === "custom" ? "no-border" : `${location.pathname === `/${item.slug}` ? 'selected' : ''}`}>
                                    <Link to={item.object === "custom" ? `${item.url}` : `/${item.slug}`} className={item.object === "page" ? "nav-link text-color-white montserrat-regular text-decoration-none hover-yellow" : "nav-link text-color-purple montserrat-bold text-decoration-none bg-yellow text-uppercase bg-hover-orange hover-white"}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 text-center">
                        <p className="text-color-white mb-0 copyright-text montserrat-regular"><span className="d-block d-md-inline">© Copyright
                            2024</span> <span className="d-none d-md-inline">|</span> <span className="d-block d-md-inline">All Rights
                                Reserved</span> <span className="d-none d-md-inline">|</span> <a href="https://www.thechurchonline.com/"
                                    className="d-block d-md-inline text-color-white hover-yellow text-decoration-none" target="_blank" rel="noreferrer">The Church Online, LLC</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Foot