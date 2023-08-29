/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/*
tools:
-array
-prompt
-module
-if
*/

//creo un array vuoto
const numbers = [];
console.log(numbers);


//chiedo per sei volte un numero all'utente
for (let i = 0; i < 6; i++) {
    const number = Number(prompt('inserisci un numero a scelta'));
    console.log(number);

    //se un numero è dispari lo aggiungo all'array number
    if (number % 2 !== 0) {
        console.log('dispari');
        numbers.push[number];
    } 
    

}