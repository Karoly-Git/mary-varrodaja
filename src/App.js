import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Axios from 'axios'
import config from './data/config.json'

import { termekek, szolgaltatasok } from './data/data'
import ErrorMessage from './components/ErrorMessage'
import Kezdolap from './components/pages/Kezdolap'
import SzolgEsTerm from './components/pages/SzolgEsTerm'
import Rolam from './components/pages/Rolam'
import Kapcsolat from './components/pages/Kapcsolat'
import Gyik from './components/pages/Gyik'
import TopNavigation from './components/TopNavigation'
import MainNavigation from './components/MainNavigation'
import BottomNavigation from './components/BottomNavigation'
import Info from './components/Info'
import SzolgaltatasReszletek from './components/pages/sub-pages/SzolgaltatasReszletek'
import Reszletek from './components/pages/sub-pages/Reszletek'

import '../src/css/App.css'

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
        console.log('You might have forgotten to run local server.');
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
    <div className='App'>
      <Router>
        <header>
          <MainNavigation />
          <TopNavigation />
        </header>
        <main>
          <Routes>
            <Route path='*' element={<h1>Oldal nem található</h1>}></Route>
            <Route path='/' element={<Kezdolap />}></Route>

            <Route path='/szolgaltatasok' element={<SzolgEsTerm list={szolgaltatasok} h1={'Szolgáltatások'} />}></Route>
            <Route path='/szolgaltatasok/reszletek' element={<Reszletek data={szolgaltatasok} h1={'A varróműhelyben'} />}></Route>

            <Route path='/termekek' element={<SzolgEsTerm list={termekek} h1={'Termékek'} />}></Route>
            <Route path='/termekek/reszletek' element={<Reszletek data={termekek} h1={'Kézzel kézsített egyedi termékek egyedi dizájnnal'} />}></Route>

            <Route path='/rolam' element={<Rolam />}></Route>
            <Route path='/kapcsolat' element={<Kapcsolat />}></Route>
            <Route path='/gyik' element={<Gyik />}></Route>
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
