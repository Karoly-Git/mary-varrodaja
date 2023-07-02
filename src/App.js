import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import config from './data/config.json'
import { category_images } from '../src/data/data'
import '../src/css/App.css'

export default function App() {

  const url = config.settings.isLocalServer ? config.urls.local : config.urls.heroku;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await Axios.get(url);
      const data = response.data;
      setData(data);
    }
    catch (err) {
      console.log(err);
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
      {!isLoading &&
        data.categories.map((category, index) =>
          <div key={index}>
            <h3>{category.name}</h3>
            <img style={{ width: '150px' }} src={category_images[category.name]} alt={''} ></img>
            <p>{category.description}</p>
          </div>
        )};
    </div>
  )
}

