import { categories, webshop, website } from '../src/data/data';

import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Axios from "axios"
import config from "./data/config.json"

// Website imports
import ErrorMessage from "./components/ErrorMessage"
import Kezdolap from "./components/pages/Kezdolap"
import SzolgEsTerm from "./components/pages/SzolgEsTerm"
import Rolam from "./components/pages/Rolam"
import Kapcsolat from "./components/pages/Kapcsolat"
import Gyik from "./components/pages/Gyik"
import TopNavigation from "./components/TopNavigation"
import MainNavigation from "./components/MainNavigation"
import BottomNavigation from "./components/BottomNavigation"
import Info from "./components/Info"
import Reszletek from "./components/pages/sub-pages/Reszletek"
import Webshop from "./components/webshop/Webshop"

// Style import
import "../src/css/App.css"

export default function App() {
  //console.log(webshopData);

  const url = config.settings.isLocalServer ? config.urls.local : config.urls.heroku;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get(url);
      const data = response.data;
      setData(data);
    }
    catch (err) {
      console.log(err);
      if (config.settings.isLocalServer && err) {
        console.log("You might have forgotten to run local server.");
      };
      setError(err);
    }
    finally {
      setIsLoading(false);
      console.log(`Fetch finished from:\n${url}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Router>
        <header>
          <MainNavigation />
          <TopNavigation />
        </header>
        <main>
          <Routes>
            <Route path="*" element={<h1>Oldal nem található</h1>}></Route>
            <Route path="/" element={<Kezdolap website={website} />}></Route>
            <Route path="/termekek" element={<Reszletek data={website.termekek.data} h1={website.termekek.h1} isRowReverse={false} />}></Route>
            <Route path="/rolam" element={<Rolam rolam={website.rolam} />}></Route>
            <Route path="/szolgaltatasok" element={<Reszletek data={website.szolgaltatasok.data} h1={website.szolgaltatasok.h1} isRowReverse={true} />}></Route>
            <Route path="/gyik" element={<Gyik gyik={website.gyik} />}></Route>
            <Route path="/kapcsolat" element={<Kapcsolat />}></Route>

            <Route path="/webshop" element={
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>A Webshop feltöltés alatt áll!</h1>
                <h3 style={{ marginTop: '2rem' }}>Kérlek látogass vissza később.</h3>
              </div>
            }></Route>

            {false && <Route path="/szolgaltatasok/inactive" element={<SzolgEsTerm data={website.szolgaltatasok.data} h1={"Szolgáltatások"} />}></Route>}
            {false && <Route path="/termekek/inactive" element={<SzolgEsTerm data={website.termekek.data} h1={"Termékek"} />}></Route>}

            {false && Object.keys(webshop).map((caregory, index) =>
              <Route key={index} path={"/webshop/" + caregory} element={<Webshop data={webshop[caregory]} />}></Route>
            )}
            {false && <Route path="/webshop" element={<Webshop data={webshop} />}></Route>}
          </Routes>
        </main>
        <footer>
          <BottomNavigation />
          <Info />
        </footer>
      </Router>
      {!isLoading && !data && <ErrorMessage errMessage={error.message} errName={error.name} />}
    </div>
  )
}
