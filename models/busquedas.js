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

        const resp = await axios.get('https://reqres.in/api/users?page=2')
        console.log(resp.data.per_page);

        return []; //Return the places that match the search
            
        }catch(error){
            return []; //Return the places that match the search
        }
    }

}


module.exports = Busquedas;