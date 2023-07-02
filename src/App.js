import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import config from './data/config.json'
import { category_images } from '../src/data/data'
import '../src/css/App.css'

import ErrorMessage from './components/ErrorMessage'

import Kezdolap from './components/pages/Kezdolap'
import Szolgaltatasok from './components/pages/Szolgaltatasok'
import Termekek from './components/pages/Termekek'
import Rolam from './components/pages/Rolam'
import Kapcsolat from './components/pages/Kapcsolat'
import Gyik from './components/pages/Gyik'

import MainNavigation from './components/MainNavigation'

import SubPageSzolg from './components/pages/sub-pages/SubPageSzolg'
import TopNavigation from './components/TopNavigation'

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
        <TopNavigation />
        <MainNavigation />
        <Routes>
          <Route path='/' element={<Kezdolap />}></Route>
          <Route path='/szolgaltatasok' element={<Szolgaltatasok />}></Route>
          <Route path='/szolgaltatasok/noi-felsoruha-keszites' element={<SubPageSzolg szolgTitle="Női felsőruha készítés" />}></Route>
          <Route path='/szolgaltatasok/ruha-javitas-es-atalakitas' element={<SubPageSzolg szolgTitle="Ruha javítás és átalakítás" />}></Route>
          <Route path='/szolgaltatasok/gyermekruha-keszites' element={<SubPageSzolg szolgTitle="Gyermekruha készítés" />}></Route>
          <Route path='/termekek' element={<Termekek data={data} category_images={category_images} />}></Route>
          <Route path='/rolam' element={<Rolam />}></Route>
          <Route path='/kapcsolat' element={<Kapcsolat />}></Route>
          <Route path='/gyik' element={<Gyik />}></Route>
        </Routes>
      </Router>
      {!isLoading && !data &&
        <ErrorMessage errMessage={error.message} errName={error.name} />
      }
    </div>
  )
}

