import React,{useState,useEffect} from 'react';
import getAllCountries from './api/api';
import Countries from "./Countries/Countries"; 
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearcedCountries] = useState([]);
  const [searchText , setSearchText] = useState('');

    useEffect(() => {
        async function fetchCountries() {
            const data = await getAllCountries();
            setCountries(data);
            setSearcedCountries(data);
        }
        fetchCountries();
    }, []);

    

    const handleSearch = (value) => {
      setSearchText(value);
      if(value.trim() === ''){
        setSearcedCountries(countries);
      }
      else{
        setSearcedCountries(
          countries.filter((country) => 
            country.common.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    };

  return (
    <div className="App">
      <div className='searchBar'>
        <input type='text' placeholder='Search Countries' value={searchText} onChange={(e) => handleSearch(e.target.value)}/>
      </div>
      <Countries countries={searchedCountries} />
    </div>
  )

  // This is a functional component that serves as the main entry point for the application. It returns a div with the class "App" that contains the Countries component. The Countries component is responsible for fetching and displaying a list of countries.
}

export default App;
