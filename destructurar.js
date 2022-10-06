var colors =require ('colors');

const estudiantes1 = ["Laura Jhuliana",
                    "juan",
                    "Paula", 
                    "camilo"];

const estudiantes2 = [
                     "valentina",
                    "julian",
                    "Daniela", 
                    "David"];    

//operador spread (resto)
const estudiantes3 = ['juan',
    ...estudiantes1,
    'Daniela',
    ...estudiantes2
]

console.log(estudiantes3)


