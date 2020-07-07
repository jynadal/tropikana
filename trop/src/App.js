import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covidtracker2.png';

//data, 
const App = ({handleCountryChange}) => {
    const [data, setData] = useState({})
    const [fetchCountries, setFetchCountries] = useState([]);
    const [country, setCountry] = useState('');

  
    async function fetchData() {
        const res = await fetch('url');
        res
            .json()
            .then(res => setData(data));
        }

        useEffect(() =>{
        fetchData();

    });


//    componentDidMount() {
//         const fetchedData = await fetchData();

//         this.setState({data: fetchedData});
//     }

    handleCountryChange = async (countries) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
    }

       // const {data, country} = data.state;
        
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data= {data} />
                <CountryPicker handleCountryChange={handleCountryChange}/>
                <Chart data={data} country={country} />  
                        
            </div>
        )

    
}

export default App;