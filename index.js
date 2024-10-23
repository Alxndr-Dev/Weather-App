
// Imports
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require("./helpers/inquirer");



const main = async () => {

    //The option
    let opt = '';

    do{

        //We catch the option selected
        opt = await inquirerMenu();
        
        console.log({opt});

        //We show the option selected
        switch (opt) {
            case 1:
                console.log('Buscar ciudad');
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