import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Axios from 'axios'
import config from './data/config.json'

import { termekek, szolgaltatasok } from './data/data'
import ErrorMessage from './components/ErrorMessage'
import Kezdolap from './components/pages/Kezdolap'
import ServicesAndProducts from './components/pages/ServicesAndProducts'
import Rolam from './components/pages/Rolam'
import Kapcsolat from './components/pages/Kapcsolat'
import Gyik from './components/pages/Gyik'
import SubPageServAndProd from './components/pages/sub-pages/SubPageServAndProd'
import TopNavigation from './components/TopNavigation'
import MainNavigation from './components/MainNavigation'
import BottomNavigation from './components/BottomNavigation'
import Info from './components/Info'

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

            <Route path='/szolgaltatasok' element={<ServicesAndProducts list={szolgaltatasok} h1={'Szolgáltatásaim'} />}></Route>
            <Route path='/szolgaltatasok/noi-felsoruha-keszites' element={<SubPageServAndProd data={szolgaltatasok} szolgTitle="Női felsőruha készítés" />}></Route>
            <Route path='/szolgaltatasok/ruha-javitas-es-atalakitas' element={<SubPageServAndProd data={szolgaltatasok} szolgTitle="Ruha javítás és átalakítás" />}></Route>
            <Route path='/szolgaltatasok/gyermekruha-keszites' element={<SubPageServAndProd data={szolgaltatasok} szolgTitle="Gyermekruha készítés" />}></Route>

            <Route path='/termekek' element={<ServicesAndProducts list={termekek} h1={'Termékeim'} />}></Route>
            <Route path='/termekek/taskak' element={<SubPageServAndProd data={termekek} szolgTitle="Táskák" />}></Route>
            <Route path='/termekek/maszkok' element={<SubPageServAndProd data={termekek} szolgTitle="Maszkok" />}></Route>
            <Route path='/termekek/fehernemuk' element={<SubPageServAndProd data={termekek} szolgTitle="Fehérneműk" />}></Route>
            <Route path='/termekek/oko-termekek' element={<SubPageServAndProd data={termekek} szolgTitle="Öko termékek" />}></Route>
            <Route path='/termekek/gyermekruhak' element={<SubPageServAndProd data={termekek} szolgTitle="Gyermekruhák" />}></Route>
            <Route path='/termekek/konyhai-textilek' element={<SubPageServAndProd data={termekek} szolgTitle="Konyhai textilek" />}></Route>
            <Route path='/termekek/textil-jatekok' element={<SubPageServAndProd data={termekek} szolgTitle="Textil játékok" />}></Route>

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
      {!isLoading && !data &&
        <ErrorMessage errMessage={error.message} errName={error.name} />
      }
    </div>
  )
}
