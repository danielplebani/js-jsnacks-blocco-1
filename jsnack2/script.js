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
/*
const word1 = prompt('inserisci una parola a tua scelta');
const word2 = prompt('inserisci una parola a tua scelta');

console.log(word1, word2);
*/
//controllo qual è la parola più lunga e la stampo in pagina
/*
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
*/

//2
let w = 0;

let wordList = [];

while (w < 2) {
    const word1 = prompt('scrivi una parola');
    console.log(word1);

    wordList.push(word1);

    w++
}

if (wordList[0].lenght > wordList[1].length) {
    console.log(wordList[0]);
    document.getElementById('highestWord').innerHTML = 'la parola più lunga è: ' + wordList[0];
} else if (wordList[0].length < wordList [1].length) {
    console.log(wordList[1]);
    document.getElementById('highestWord').innerHTML = 'la parola più lunga è: ' + wordList[1];
} else {
    console.log('pareggio');
    document.getElementById('highestWord').innerHTML = 'pareggio';
}