import React, {useState, useEffect } from 'react';

const url =  'https://api.ipify.org?format=json';
const urlIp = 'https://freegeoip.app/json/';
const urlTown = '';


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