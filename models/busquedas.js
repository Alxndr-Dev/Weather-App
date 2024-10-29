//We use axios to make the request to the API
const axios = require('axios');
const pk = process.env.MAPBOX_KEY;

class Busquedas {

    historial = ['Madrid', 'Bogota', 'San Jose', 'Buenos Aires', 'Caracas'];

    constructor(){
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'limit': 5,
            'proximity': 'ip',
            'language': 'es',
            'access_token': pk
        }
    }

    async ciudad( lugar = ''){

        try{

        //HTTP request

        const instance = axios.create({
            baseURL: `https://api.mapbox.com/search/geocode/v6/forward?q=${ lugar }`,
            params: this.paramsMapbox
        })

        const resp = await instance.get();

        console.log(resp.data.features);

        return []; //Return the places that match the search
            
        }catch(error){
            return []; //Return the places that match the search
        }
    }

}


module.exports = Busquedas;