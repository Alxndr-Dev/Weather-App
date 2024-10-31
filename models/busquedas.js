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

    async ciudad( lugar = '' ){

        try{

        //HTTP request

        const instance = axios.create({
            baseURL: `https://api.mapbox.com/search/geocode/v6/forward?q=${ lugar }`,
            params: this.paramsMapbox
        })

        //We make the request
        const resp = await instance.get();

        //We return the places that match the search
        //We use the map method to get a new array with the places
        return resp.data.features.map( lugar =>({
            id: lugar.id,
            nombre: lugar.properties.full_address,
            lng: lugar.geometry.coordinates[0],
            lat: lugar.geometry.coordinates[1]
        }));

        
        }catch(error){
            return []; //Return the places that match the search
        }
    }

}


module.exports = Busquedas;