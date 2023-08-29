/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/*
tools:
-const
-prompt
-if
*/

//chiedo all'utente due numeri con 2 prompt
const number1 = Number(prompt('inserisci un numero a tua scelta'));
const number2 = Number(prompt('inserisci un numero a tua scelta'));

console.log(number1, number2);

//controllo qual è il numero maggiore e lo stampo in pagina
if (number1 > number2) {
    console.log(number1);
    document.getElementById('highestNumber').innerHTML = 'il numero più alto è il: ' + number1;
} else if (number2 > number1) {
    console.log(number2);
    document.getElementById('highestNumber').innerHTML = 'il numero più alto è il: ' + number2;
} else {
    console.log('pareggio');
    document.getElementById('highestNumber').innerHTML = 'i numeri scelti sono uguali,quindi è pareggio';
}