const axios = require('axios');
// Imports
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
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

                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);



                console.log('\nInformacion de la ciudad \n'.green);
                console.log('Ciudad: '.cyan);
                console.log('Lat: '.cyan);
                console.log('Lng: '.cyan);
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