import React from 'react';

const ContactPage = ({ page, settings }) => {
    return (
        <>
            <div className="col-12 pt-md-5 pt-3">
                <div className="list-item d-flex justify-content-center align-items-center flex-column mb-2 mb-md-4" dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
            </div>
            <div className="col-12 pb-md-5 pb-3">
                <div className="row">
                    <div className="col-12 col-md-4 bg-tangerine py-2 px-2 py-md-4 px-md-3 text-center d-flex flex-column justify-content-center order-last order-md-first">
                        <div className="icon text-color-white mt-3"><i className="fa-solid fa-location-dot"> </i></div>
                        <p className="montserrat-regular text-color-white"><a className="text-color-white text-decoration-none" href={settings.google_map_url} target="_blank" rel="noopener">{settings.address}</a></p>

                        <div className="icon text-color-white mt-3"><i className="fa-solid fa-phone"> </i></div>
                        <p className="montserrat-regular text-color-white mb-3 mb-md-0"><a className="text-color-white text-decoration-none d-block" href={`tel:${settings.primary_phone_number}`} rel="noopener">{settings.primary_phone_number}</a><a className="text-color-white text-decoration-none d-block" href={`tel:${settings.secondary_phone_number}`}>{settings.secondary_phone_number}</a></p>

                    </div>
                    <div className="col-12 col-md-8 bg-gray px-2 py-2 px-md-4 py-md-4 order-first order-md-last" dangerouslySetInnerHTML={{__html: settings.contact_form_code }}></div>
                </div>
            </div>
        </>
    ); 
};

export default ContactPage;