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
for (let i = 0; i < 10; i++) {
    const element = prompt('scegli un numero a tua scelta!');
    console.log(element);
    //collego la costante alla unorder list e appendo una lista creata
    const ulEl = document.querySelector('ul');
    const liEl = document.createElement('li');
    liEl.append(element);

    ulEl.append(liEl);
}
*/

//2
let n = 0;

numberList = [];

somma = 

while (n < 10) {
    const number1 = Number(prompt('inserisci un numero!'))
    console.log(number1);

    numberList.push(number1);

    n++
}