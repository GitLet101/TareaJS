function jovenAdulto( edadMenor, edadMayor, alumno ){
         let resultado;

         resultado = alumno.filter( alumno => ( alumno.edad > edadMenor &&
                                                alumno.edad < edadMayor ) );

         return resultado;
     }

     function dosDecadas( edad, alumno ){
         let resultado;
         resultado = alumno.find(alumno => alumno.edad === 20);

         return resultado;
     }

/**
     function filtrarAlumnos( edadMenor, edadMayor, alumno ){
         let resultado;
         resultado = alumno.reduce((acumulador, valorActual) => {
             const llave = valorActual[alumno.edad >= edadMenor &&
                                       alumno.edad <= edadMayor];

             const valor = acumulador[llave] ? [...acumulador[llave], valorActual ] : [valorActual];

             acumulador[llave] = valor;
             return acumulador;

         }, {}
                                  );

         return resultado;
     }
**/

     let alumno = [
         {
             nombre: 'Dewayne Damon',
             edad: 20,
             claseCursa: 'Filosofia'
         },

         {
             nombre: 'Brevyn Malik',
             edad: 26,
             claseCursa: 'Diseno de Base de Datos'
         },

         {
             nombre: 'Jarrett Brayden',
             edad: 27,
             claseCursa: 'Validacion y Mantenimiento de Software'
         },

         {
             nombre: 'Maia Katelynn',
             edad: 17,
             claseCursa: 'Programacion 1'
         },

         {
             nombre: 'Sebestian Sanjay',
             edad: 24,
             claseCursa: 'Metodologia de la Investigacion'
         },

         {
             nombre: 'Lindsey Roselle',
             edad: 19,
             claseCursa: 'Marketing'
         },

         {
             nombre: 'Dane Baylor',
             edad: 22,
             claseCursa: 'Muricion'
         },

         {
             nombre: 'Alina Jayne',
             edad: 21,
             claseCursa: 'Calculo Diferencial'
         },

         {
             nombre: 'Trixy Aurelia',
             edad: 18,
             claseCursa: 'Sistemas Distribuidos'
         },

         {
             nombre: 'Billy Rodrigo',
             edad: 23,
             claseCursa: 'Filosofia'
         },

         {
             nombre: 'Kiran Klay',
             edad: 18,
             claseCursa: 'Diseno de Base de Datos'
         },

         {
             nombre: 'Pat Reef',
             edad: 22,
             claseCursa: 'Validacion y Mantenimiento de Software'
         },

         {
             nombre: 'Jillian Suzanne',
             edad: 21,
             claseCursa: 'Programacion 1'
         },

         {
             nombre: 'Philippe Drake',
             edad: 19,
             claseCursa: 'Metodologia de la Investigacion'
         },

         {
             nombre: 'Damon Brenton',
             edad: 27,
             claseCursa: 'Marketing'
         },

         {
             nombre: 'Dimitri Boyd',
             edad: 20,
             claseCursa: 'Calculo Diferencial'
         },

         {
             nombre: 'Alaina Salma',
             edad: 24,
             claseCursa: 'Sistemas Distribuidos'
         },

         {
             nombre: 'Gloria Tabitha',
             edad: 26,
             claseCursa: 'Filosofia'
         },

         {
             nombre: 'Irvin Darius',
             edad: 25,
             claseCursa: 'Diseno de Base de Datos'
         },

         {
             nombre: 'Valentin Elias',
             edad: 17,
             claseCursa: 'Validacion y Mantenimiento de Software'
         },

         {
             nombre: 'Joel Brenton',
             edad: 19,
             claseCursa: 'Programacion 1'
         },

         {
             nombre: 'Davina Honor',
             edad: 17,
             claseCursa: 'Metodologia de la Investigacion'
         },

         {
             nombre: 'Linus Jensen',
             edad: 24,
             claseCursa: 'Marketing'
         },

         {
             nombre: 'Leah Marcia',
             edad: 23,
             claseCursa: 'Calculo Diferencial'
         },

         {
             nombre: 'Garth Armando',
             edad: 27,
             claseCursa: 'Sistemas Distribuidos'
         },

         {
             nombre: 'Wolf Lance',
             edad: 20,
             claseCursa: 'Filosofia'
         },

         {
             nombre: 'Leticia Jeannette',
             edad: 25,
             claseCursa: 'Diseno de Base de Datos'
         },

         {
             nombre: 'Shona Pansy',
             edad: 21,
             claseCursa: 'Validacion y Mantenimiento de Software'
         },

         {
             nombre: 'Raylan Layne',
             edad: 26,
             claseCursa: 'Programacion 1'
         },

         {
             nombre: 'Al Casper',
             edad: 18,
             claseCursa: 'Metodologia de la Investigacion'
         },

         {
             nombre: 'Alvin Willem',
             edad: 22,
             claseCursa: 'Marketing'
         },

         {
             nombre: 'Shelly Kasey',
             edad: 20,
             claseCursa: 'Calculo Diferencial'
         },

         {
             nombre: 'Chrissy Viviana',
             edad: 24,
             claseCursa: 'Sistemas Distribuidos'
         },

         {
             nombre: 'Jamie Yves',
             edad: 27,
             claseCursa: 'Filosofia'
         },

         {
             nombre: 'Forrest Fide',
             edad: 26,
             claseCursa: 'Diseno de Base de Datos'
         },

         {
             nombre: 'Ali Vincent',
             edad: 21,
             claseCursa: 'Validacion y Mantenimiento de Software'
         },

         {
             nombre: 'Jet Ryland',
             edad: 18,
             claseCursa: 'Programacion 1'
         },

         {
             nombre: 'Connor Alfonso',
             edad: 19,
             claseCursa: 'Metodologia de la Investigacion'
         },

         {
             nombre: 'Kristoff Beckett',
             edad: 25,
             claseCursa: 'Marketing'
         },

         {
             nombre: 'Marlon Caesar',
             edad: 17,
             claseCursa: 'Calculo Diferencial'
         },

         {
             nombre: 'Gregor Drake',
             edad: 22,
             claseCursa: 'Sistemas Distribuidos'
         },

         {
             nombre: 'Saskia Deirdre',
             edad: 23,
             claseCursa: 'Filosofia'
         },
         {
             nombre: 'Charlene Francesca',
             edad: 20,
             claseCursa: 'Diseno de Base de Datos'
         },
         {
             nombre: 'Nihal Alden',
             edad: 21,
             claseCursa: 'Filosofia'
         },
         {
             nombre: 'Drew Drake',
             edad: 40,
             claseCursa: 'Si'
         }
     ];

     let ageRange = [ 18, 25 ];
     let output;

     output = jovenAdulto(ageRange[0], ageRange[1], alumno);
     console.log('estudiantes mayores de 18 y menores de 25 anios:\n', output );

     ageRange = 20;
     output = dosDecadas( ageRange, alumno );
     console.log('primer estudiante con edad de 20 anios: \n', output );

     //ageRange = [20, 22];
     //output = filtrarAlumnos( ageRange[0], ageRange[1], alumno );
     //console.log('estudiantes mayores de 20 y menores de 22 anios:\n', output );
