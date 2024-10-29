//We use axios to make the request to the API
const axios = require('axios');


class Busquedas {

    historial = ['Madrid', 'Bogota', 'San Jose', 'Buenos Aires', 'Caracas'];

    constructor(){
        //TODO: leer DB si existe
    }


    async ciudad( lugar = ''){

        try{
        //Peticion HTTP
        //console.log('Ciudad',lugar);

        //HTTP request
        const resp = await axios.get('')//API URL
        console.log(resp.data.features);

        return []; //Return the places that match the search
            
        }catch(error){
            return []; //Return the places that match the search
        }
    }

}


module.exports = Busquedas;