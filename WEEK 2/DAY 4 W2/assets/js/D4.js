/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let calcoloArea = l1 * l2;
    return calcoloArea;

}
console.log(area(5, 2));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {



    if (x === y) {

        return ((x + y) * 3)

    } else (x != y); {

        return (x + y);
    }

}
console.log(crazySum(10, 10));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function crazyDiff(x) {

let differenza = (x-19)

    if (differenza >= 19) {
        return (differenza * 3)
    } else {
        return Math.abs(differenza);
    }
}

console.log(crazyDiff(6));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */  

function boundary(n) {

    if( n === 400 || (n >= 20 && n <=100)){
        return true;
    }else{
        return false;
    }
    
}
console.log(boundary(50));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = 'EPICODE è un corso di formazione'

function epify(stringa) {
    if (stringa.search('EPICODE') !== -1) {
        return stringa;
    } else {
        return "EPICODE" + stringa;
    }
}
    console.log(epify(stringa));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(numero) {
    numero= Math.abs(numero);
    if (numero > 0 && (numero % 3 === 0 || numero % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(27));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */

let frase = 'EPICODE è un corso';
function reverseString(frase) {

 return frase.replace('EPICODE', 'CODEPI');
 }
console.log(reverseString(frase));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let sentence = 'ciao mi chiamo valentina';
function upperFirst(stringa) {
let arraySentence = stringa.split(' ');
let risultato= [];
for (let i = 0; i < arraySentence.length; i ++);{
    let prima = arraySentence[i].charAt(0);
    let parolaTagliata = arraySentence[i].slice(1);
    let parolaFinale = prima.toUpperCase() + parolaTagliata;
    risultato.push(parolaFinale);
}
return risultato.join('');

}

console.log(upperFirst(sentence));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const animali =['topo','elefante','acquila'];
console.log(animali);