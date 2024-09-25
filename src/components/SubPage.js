import React from 'react';
import ContactPage from './ContactPage';
import CalendarComponent from './CalendarComponent';

const SubPage = ({ page, settings }) => {
    return (
        <>
            <div id="banner-area" className="z-1 position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mx-0 px-0">
                            <div className="banner-content position-relative">
                                <img src={page.featured_image_url} className="w-100 d-block" alt={page.title.rendered} loading="lazy" />
                                    <div className="banner-text w-100 h-100 position-absolute d-flex justify-content-center">
                                        <h1 className="text-center montserrat-bold text-color-white my-0 align-self-center text-uppercase">{page.title.rendered}</h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content-area">
                <div className="container">
                    <div className="row">
                        {page.slug === "contact" ? (
                            <ContactPage page={page} settings={settings} />
                        ) : page.slug === "calendar" ? (
                            <CalendarComponent page={page} settings={settings} />
                        ) : (
                            <div className="col-12 py-md-5 py-3" dangerouslySetInnerHTML={{__html: page.content.rendered }}></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubPage;