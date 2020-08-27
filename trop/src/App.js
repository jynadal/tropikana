import React from 'react';

import { Header, BlogHLight, WorldNews, Entertainments, Musics, FoodHealth, Sports, WorldTravels, SocialMedias, Footer, Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import './AppStyles.css';
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
                {/* <img className={styles.image} src={coronaImage} alt="COVID-19" /> */}
                <Header />

                <BlogHLight />

                <WorldNews />
                <WorldTravels />
                <Musics />
                

                <div className="blog_main_wrapper blog_bottompadder40">
		            <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                             {/* <FoodHealth /> */}
                            <Entertainments />
                            <Sports />

                            </div>
                        </div>
		            </div>
	            </div>

                <SocialMedias />  



                <Cards data= {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} /> 

                < Footer />
                
                          
            </div>
        )
    }
}

export default App;