/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
tools:
-for
-prompt
-const
*/

//creo un ciclo che chiede dieci volte un numero tramite un prompt
/*
let somma = 0;

for (let i = 0; i < 10; i++) {
    const element = Number(prompt('scegli un numero a tua scelta!'));
    console.log(element);

    if (isNaN(element)) {
        alert('inserisci un  numero!');
    }
    //collego la costante alla unorder list e appendo una lista creata
    const ulEl = document.querySelector('ul');
    const liEl = document.createElement('li');
    liEl.append(element);

    ulEl.append(liEl);

    somma += element;
    console.log('la somma totale è: ' + somma);
    document.querySelector('span').innerHTML = 'la somma totale è: ' + somma;
}
*/


//2
let n = 0;

let numberList = [];

let somma = 0;

while (n < 10) {
    const number1 = Number(prompt('inserisci un numero!'))
    console.log(number1);

    if (isNaN(number1)) {
        alert('inserisci un  numero!');
    } else {
        numberList.push(number1);
        n++
    }

    somma += number1;
    console.log('la somma totale è: ' + somma);
    document.querySelector('span').innerHTML = 'la somma totale è: ' + somma;
}