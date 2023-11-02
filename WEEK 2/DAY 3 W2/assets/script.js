// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE L'ETÀ
4. VERIFICA LA MAGGIORE O MINORE ETÀ
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM

EVENTO SCATENANTE
click

VARIABILI GLOBALI
nome
anno
stato
*/

let nome; // globale in quanto utilizzata per leggere il campo di input e per stampare a video
let anno; // globale in quanto utilizzata per leggere il campo di input, calcolare l'età, verifica l'età, stampare a video
let eta;
let stato; // globale in quanto utilizzata per verificare l'età e stampare a video
let errore = document.getElementById('errore');


function eventHandler() {
  leggiForm();
  if (anno >= 1900 && anno <= 2023 && nome !='') {
    errore.innerHTML = '&nbsp';

    calcolaEta();
    verificaEta();
    scrivi();
    cancellaForm();
  } else {
    errore.innerHTML = "COMPILA TUTTI I CAMPI E INSERISCI DATA VALIDA!";
    return;
  }
}

function leggiForm() {
  nome = document.getElementById("nome").value;
  anno = document.getElementById("anno").value;
  console.log(nome, anno);
}

function calcolaEta() {
  eta = 2023 - Number(anno);
  console.log(eta);
}
function verificaEta() {
  stato = eta >= 18 ? "maggiorenne" : "minorenne";
  console.log(stato);
}
function scrivi() {

    document.getElementById('mioNome').innerHTML = 'Ciao'+ nome;
    document.getElementById('miaVerifica').innerHTML = 'la tua età' + eta +';sei'+ stato
}
function cancellaForm(){
nome = document.getElementById("nome").value ='';
anno = document.getElementById("anno").value = '';
console.log('');}