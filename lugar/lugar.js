const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);
    console.log(encodedUlr)
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        
        headers: {'x-rapidapi-key': '18b4d97d16msh1e263af33ab80f2p1ae56ajsn8d669f9a7fe3'}
    });

     const resp = await instance.get();

        if( resp.data.Results.length === 0){
            throw new Error(`no hay resultados para ${dir}`);
        }

        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;
    
    return{
        direccion,
        lat,
        lng
    }            
    
}

module.exports = {
    getLugarLatLng
}

