require('dotenv').config();

const axios = require('axios');
// Imports
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoLugares,
    confirmar,
    mostrarListadoChecklist
} = require("./helpers/inquirer");

const Busquedas = require("./models/busquedas");


const main = async () => {

    const busquedas = new Busquedas();

    //The option
    let opt = '';


    do{

        //We catch the option selected
        opt = await inquirerMenu();

        //We show the option selected
        switch (opt) {
            case 1:

                //We ask the user for the city
                const termino = await leerInput('Ciudad: ');

                //We search the city
                const lugares = await busquedas.ciudad(termino);

                //We show the cities
                const id = await listadoLugares(lugares);

                //We select the city by id to extract the information
                const lugarSel = lugares.find(l => l.id === id);


                //Showing the information of the city
                console.log('\nInformacion de la ciudad \n'.green);
                console.log(`${'Ciudad: '.cyan} ${lugarSel.nombre}`);
                console.log(`${'Lat: '.cyan} ${lugarSel.lat}`);
                console.log(`${'Lng: '.cyan} ${lugarSel.lng}`);
                console.log('Temperatura: '.cyan);
                console.log('Minima: '.cyan);
                console.log('Maxima: '.cyan);
                break;
        
            case 2:
                console.log('Historial');
                break;

            case 0:
                console.log('Salir');
                break;
        }

        //We pause the app
        if ( opt !== 0 ) await pausa();

     //We repeat the menu until the user selects 0
    } while ( opt !==0 );
}

main();