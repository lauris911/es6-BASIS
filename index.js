//traer dependencias
import {sumar , restar} from './sumar.js'
import materias from './materias.js'



//1.recorrido de arrglo :foreach
materias.forEach((materia)=>
{if(materia.profesor === 'Cristian Builtrago'){
    console.log(`materia: ${materia.notas}`)
}}
)

//2 CONVERTIR A UN ARREGLO DE PROFESORES 
//METODO MAP

let profesores = materias.map(function(materia){
    return materia.profesor
})

//3 agrgar una materia al arreglo de materias 
//push()
materias.push({
    id: 5,
    name: "cultura fisica",
    profesor: "luis baquero",
    notas:[
        2.5,
        4
    ]
})


//4. busqueda en arreglos
//find
const PHP = materias.find(function(materia){
 return materia.profesor === 'Cristian Builtrago'
})

console.log(PHP)