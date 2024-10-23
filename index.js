

const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require("./helpers/inquirer");



const main = async () => {

    let opt = '';

    do{

        opt = await inquirerMenu();
        
        console.log({opt});

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

        if ( opt !== 0 ) await pausa();

    } while ( opt !==0 );
}

main();