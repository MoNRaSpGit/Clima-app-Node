const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7a8cde86b57509f58f5cae935409b8f1&units=metric`);

    return resp.data.main.temp;


}

module.exports = {
    getClima
}