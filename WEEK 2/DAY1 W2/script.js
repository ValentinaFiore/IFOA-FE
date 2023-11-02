/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// STRING contiene un valore di tipo testo 
//NUMBER contiene un valore di tipo numero
//BOOLEAN contiene un valore di tipo true/false relativamente alla condizione della variabile
//NULL contiene un valore chè è pari a niente, ma che appunto ha un valore (esempio del reset password)
//UNDEFINED non contiene un valore al momento, questo non viene pertanto considerato

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = 'Valentina';
console.log(myName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let somma = contaValore(12,20);
 function contaValore (a,b){
  return a + b;
 }

console.log(somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


let x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName= 'Fiore';
console.log(myName);
const persona = myName;
console.log(myName);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4;
 x = 12;
let differenza = y-x;
console.log(differenza);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let name1 = "jhon";
let name2 = "Jhon";
let verifica = name1 === name2;
console.log(verifica);

//soluzione2
console.log('i nomi sono uguali?' + (name1 === name2));
//soluzione3


 