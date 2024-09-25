import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from './HomePage';
import SubPage from './SubPage';

const Page = ({ page, settings }) => {
  return (
    <>
      <Helmet>
            <title>{page.title.rendered} - Cedar of Hope</title>
      </Helmet>
      {page.slug === "home" ? (
        <HomePage page={page} />
      ) : (
        <SubPage page={page} settings={settings} />
      )}
    </>
  );
}; 

export default Page;
