import React from 'react';

const HomePage = ({ page }) => {
    return (
        <>       
            <div id="banner-area" className="z-1 position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mx-0 px-0">
                            <div className="banner-content">
                                <img src={page.meta.desktop_banner} className="w-100 d-none d-none d-sm-block" alt={page.title.rendered} />
                                <img src={page.meta.mobile_banner} className="w-100 d-block d-sm-none" alt={page.title.rendered} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content-area" className="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4 px-0 py-0">
                            <a href={page.meta.cta_1_link} className="text-decoration-none">
                                <div className="d-flex justify-content-center align-items-center bg-yellow h-100 py-2 py-md-4 bg-hover-darkpurple cta-card">
                                    <div className="text-center">
                                        <img src={page.meta.cta_1_image} className="img-fluid mb-2" alt="Icon 1" />
                                        <h3 className="montserrat-bold text-color-white mb-0 text-uppercase">{page.meta.cta_1_text}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 px-0 py-0">
                            <a href={page.meta.cta_2_link} className="text-decoration-none">
                                <div className="d-flex justify-content-center align-items-center bg-orange h-100 py-2 py-md-4 bg-hover-darkpurple cta-card">
                                    <div className="text-center">
                                        <img src={page.meta.cta_2_image} className="img-fluid mb-2" alt="Icon 1" />
                                        <h3 className="montserrat-bold text-color-white mb-0 text-uppercase">{page.meta.cta_2_text}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 px-0 py-0">
                            <a href={page.meta.cta_3_link} className="text-decoration-none">
                                <div className="d-flex justify-content-center align-items-center bg-tangerine h-100 py-2 py-md-4 bg-hover-darkpurple cta-card">
                                    <div className="text-center">
                                        <img src={page.meta.cta_3_image} className="img-fluid mb-2" alt="Icon 1" />
                                        <h3 className="montserrat-bold text-color-white mb-0 text-uppercase">{page.meta.cta_3_text}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;