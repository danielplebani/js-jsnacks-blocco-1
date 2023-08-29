/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
tools:
-const
-prompt
-if
-length
*/

//chiedo all'utente due parole con 2 prompt
const word1 = prompt('inserisci una parola a tua scelta');
const word2 = prompt('inserisci una parola a tua scelta');

console.log(word1, word2);

//controllo qual è la parola più lunga e la stampo in pagina
if (word1.length > word2.length) {
    console.log(word1);
    document.getElementById('highestWord').innerHTML = 'la parola più lunga è: ' + word1 + ' ,la più corta è: ' + word2;
} else if (word2.length > word1.length) {
    console.log(word2);
    document.getElementById('highestWord').innerHTML = 'la parola più lunga è: ' + word2 + ' ,la più corta è: ' + word1;
} else {
    console.log('pareggio');
    document.getElementById('highestWord').innerHTML = 'le parole sono lunghe uguali,quindi è pareggio';
}