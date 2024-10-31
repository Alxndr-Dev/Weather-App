const inquirer = require('inquirer');
require('colors');

//Opciones del menu
const preguntas =[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
        {
            value: 1,
            name: `${'1.'.green} Buscar ciudad`
        },
        {
            value: 2,
            name: `${'2.'.green} Historial`
        },
        {
            value: 0,
            name: `${'0.'.green} Salir`
        }
    ]
    }
]

//Funcion para mostrar el menu
const inquirerMenu = async() =>{

    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opcion'.white);
    console.log('============================= \n'.green);

    //Se muestran las opciones
    const {opcion} = await inquirer.prompt(preguntas);

    //Obtenemos la opcion seleccionada
    return opcion;
}

//Funcion para pausar la aplicacion
//Se pausa hasta que el usuario presione enter
const pausa = async() => {

    //Pregunta para pausar
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'Enter'.green} para continuar`
    }];

    console.log('\n');
    
    //Se espera a que el usuario presione enter
    const {enter} = await inquirer.prompt(question);
    
    //Obtenemos el enter
    return enter;

}


//Funcion para leer un input
const leerInput = async (message)=>{

    //Pregunta para leer un input
    const question = [
        //Se espera un input
        {
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
        
    }
];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

//Function to list the places
const listadoLugares = async( lugares = [] )=>{

    //We evaluate if the list of places is empty
    //We use the map method to get a new array with the places
    const choices = lugares.map((lugar, i) =>{

        //We get the index of the place
        const idx =  `${i + 1}.`.green;
        //We return the value and the name of the place
        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    })

    //Se agrega la opcion de cancelar
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    //Se hace la lista de las tareas a borrar
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar',
            choices
        }
    ]
    //Se obtiene el id de la tarea a borrar
    const {id} = await inquirer.prompt(preguntas);

    //Se retorna el id de la tarea a borrar
    return id;

}

const confirmar = async( message )=>{

    //Pregunta para confirmar
    const question = {

        //Se espera un confirm (Yes/No)
        type: 'confirm',
        name: 'ok',
        message
    };

    //Se obtiene la respuesta
    const {ok} = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async( tareas = [] )=>{

    //Se evalua si el listado de tareas esta vacio
    //Se usa el metodo map para obtener un nuevo arreglo con las tareas
    const choices = tareas.map((tarea, i) =>{

        //Se obtiene el indice de la tarea
        const idx =  `${i + 1}.`.green;
        //Se retorna el valor y el nombre de la tarea
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)? true : false
        }
    })

    //Se hace la lista de las tareas a borrar
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    //Se obtiene el id de la tarea a borrar
    const {ids} = await inquirer.prompt(pregunta);

    //Se retorna el id de la tarea a borrar
    return ids;

}

module.exports ={
    inquirerMenu,
    pausa,
    leerInput,
    listadoLugares,
    confirmar,
    mostrarListadoChecklist,
};
