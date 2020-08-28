import React, {useState, useEffect } from 'react';


import axios from 'axios';


const urlIpify= 'https://api.ipify.org?format=json';


export const fetchMeteo = async () => {

    const ip = await fetch('https://api.ipify.org?format=json')
    .then(resultat => resultat.json())
    .then(data => data.ip)

    const ville = await fetch('http://freegeoip.net/json/' + ip)
    .then(resultat => resultat.json())
    .then(data => data.city)

    const meteo = await fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}`)
        .then(resultat => resultat.json())
        .then(data => data)

}


const url =  'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } }= await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };      

    } catch (error) {
        console.log(error);        
    }
}

export const fetchDailyData = async ()=> {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    } catch (error) {
        console.log(error);
        
    }
}

export const fetchCountries = async () => {
    try {
        const { data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);        
    } catch (error) {
        console.log(error);
    }
}