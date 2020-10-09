import React, {useState, useEffect } from 'react';
<<<<<<< HEAD


import axios from 'axios';


const urlIpify= 'https://api.ipify.org?format=json';
const APIKEY = '3e467053e58aaaa078f19a3f553da25b';


export const fetchMeteo = async () => {

    const ip = await fetch('https://api.ipify.org?format=json')
    .then(resultat => resultat.json())
    .then(data => data.ip)

    const ville = await fetch('http://freegeoip.net/json/' + ip)
    .then(resultat => resultat.json())
    .then(data => data.city)

    const meteo = await fetch(`api.openweathermap.org/data/2.5/weather?q=${ville}&appid=3e467053e58aaaa078f19a3f553da25b`)
        .then(resultat => resultat.json())
        .then(data => data)

}


const url =  'https://covid19.mathdro.id/api';
=======

const url =  'https://api.ipify.org?format=json';
const urlIp = 'https://freegeoip.app/json/';
const urlTown = '';
>>>>>>> MapChart


// const fetchIp = async () => {
//     try {
//         const myIp = await fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 const ip = json.ip;
//                 console.log(ip);
//             });     
//     } catch (error) {
//         console.log(error);
//     }
// }

// const fetchTown = async (ip) => {
//     try {
//         const myIp = await fetch(`${urlIp}/${ip}`)
//             .then(response => response.json())
//             .then(data => {
//                 const town = json.ville;
//                 console.log(ville);
//             });     
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const fetchMeteo = async (ville) => {
//     try {
//         const myIp = await fetch(`${urlMeteo}/${ville}`)
//             .then(response => response.json())
//             .then(data => {
//                 const town = json.meteo;
//                 console.log(meteo);
//             });     
//     } catch (error) {
//         console.log(error);
//     }
// }







// export const fetchIp = async (country) => {
//     let changeableUrl = url;

//     if(country) {
//         changeableUrl = `${url}/countries/${country}`
//     }

//     try {
//         const { data: { confirmed, recovered, deaths, lastUpdate } }= await axios.get(changeableUrl);

//         return { confirmed, recovered, deaths, lastUpdate };      

//     } catch (error) {
//         console.log(error);        
//     }
// }

// export const fetchDailyData = async ()=> {
//     try {
//         const { data } = await axios.get(`${url}/daily`);

//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate,
//         }));

//         return modifiedData;

//     } catch (error) {
//         console.log(error);
        
//     }
// }

// export const fetchCountries = async () => {
//     try {
//         const { data: {countries}} = await axios.get(`${url}/countries`);

//         return countries.map((country) => country.name);        
//     } catch (error) {
//         console.log(error);
//     }
// }