import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Axios from "axios"
import config from "./data/config.json"

import {
  termekek as products,
  szolgaltatasok as services
} from "./data/data"

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
            <Route path="/" element={<Kezdolap />}></Route>

            <Route path="/szolgaltatasok" element={<SzolgEsTerm data={services.data} h1={"Szolgáltatások"} />}></Route>
            <Route path="/szolgaltatasok/reszletek" element={<Reszletek data={services.data} h1={services.h1} />}></Route>

            <Route path="/termekek" element={<SzolgEsTerm data={products.data} h1={"Termékek"} />}></Route>
            <Route path="/termekek/reszletek" element={<Reszletek data={products.data} h1={products.h1} />}></Route>

            <Route path="/rolam" element={<Rolam />}></Route>
            <Route path="/kapcsolat" element={<Kapcsolat />}></Route>
            <Route path="/gyik" element={<Gyik />}></Route>

            <Route path="/webshop" element={<Webshop />}></Route>
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
