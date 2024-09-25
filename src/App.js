import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Page from './components/Page';
import Foot from './components/Foot';
import HomePage from './components/HomePage';
import { RotatingLines } from "react-loader-spinner";

const App = () => {
  const [pages, setPages] = useState([]);
  const [menu, setMenu] = useState([]);
  const [settings, setSettings] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    // Fetch pages
    axios.get('https://foundingdev.wcdevelopment.net/cedarofhope_wp/wp-json/wp/v2/pages/')
      .then(response => {
        setPages(response.data); 
        setIsDataLoading(true);
      })
      .catch(error => console.error('Error fetching pages:', error));

    // Fetch menu
    axios.get('https://foundingdev.wcdevelopment.net/cedarofhope_wp/wp-json/menus/v1/menus/main-menu')
      .then(response => {
        setMenu(response.data.items);
        setIsDataLoading(true);
      })
      .catch(error => console.error('Error fetching menu:', error));

    // Fetch settings
    axios.get('https://foundingdev.wcdevelopment.net/cedarofhope_wp/wp-json/custom/v1/general-settings/')
      .then(response => {
        setSettings(response.data);
        setIsDataLoading(true);
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);



  const mystyle = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "#510072",
      zIndex: "999",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  };

  return (
    <Router>
      <>
        {isDataLoading ? (
          <>
            <Head menu={menu} settings={settings} /><Routes>
            {pages.map(page => (
                  <Route key={page.id} path={`/${page.slug}`} element={<Page page={page} settings={settings} />} />
            ))}
            {pages.map(page => (
                  <Route path="/" element={<HomePage page={pages.find(page => page.slug === 'home')} settings={settings} />} />
            ))}
            </Routes><Foot menu={menu} settings={settings} />
          </>
        ) : (
          <div className="loader" style={mystyle}>
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        )}
      </> 
    </Router>
  );
};

export default App;

