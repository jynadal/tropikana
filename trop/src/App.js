import React from 'react';

import { Header, BlogHLight, WorldNews, WorldTravels, WorldSomethings, Footer, Cards, Chart, CountryPicker, MapChart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covidtracker2.png';


class App extends React.Component {
    state = {
        data: {},
        country: '',
        
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data, country} = this.state;
        
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Header />
                <BlogHLight />
                <WorldNews />
                <WorldTravels />
                <WorldSomethings />

                <Cards data= {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} /> 
                <MapChart /> 

                < Footer />
                
                          
            </div>
        )
    }
}

export default App;