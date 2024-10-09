/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1 = 15
let n2 = 89

if (n1 < n2) {
  smallest = n1
} else {
  smallest = n2
}

console.log(smallest)

let m1 = 63
let m2 = 58
if (m1 < m2) {
  smallest = m1
} else {
  smallest = m2
}
console.log(smallest)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let n5 = 5

let wholeNumber
if (wholeNumber === 5) {
  console.log(' ')
} else if (wholeNumber !== 5) {
  console.log('not equal')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let number555 = 555
if (number555 % 5 === 0) {
  console.log('divisibile per 5')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let whole3 = 8
let whole5 = 16
let result8

console.log((result8 = 16 - whole3))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 80
let shippingCost = 10
let totalToPay = totalShoppingCart + shippingCost
if (totalShoppingCart >= 50) {
  totalToPay = totalShoppingCart
  console.log('spedizione gratuita')
} else if (totalShoppingCart < 50) {
  totalToPay = totalShoppingCart + shippingCost
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 50
let discountedPrice = totalShoppingCart2 - (totalShoppingCart2 * 20) / 100
if (discountedPrice >= 50) {
  console.log('spedizione gratuita')
} else if (discountedPrice < 50) {
  console.log('costo spedizione 10 euro')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let name1 = 3
let name2 = 658
let name3 = 5658
if (name3 > name2 && name2 > name1) {
  console.log(name3, name2, name1)
} else {
  console.log('wrong')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof 52)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let x = 666
if (x % 2 === 0) {
  console.log('il numero è pari')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val>5 && vale<10) {console.log('valore minore di 10'){
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 2
if (val < 5) {
  console.log('Meno di 5')
} else if (val >= 10) {
  console.log('Uguale a 10 o maggiore')
} else if (val < 10) {
  console.log('Meno di 10')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/ const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
delete me2.lastName
console.log(me2)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me3.skills.pop([2])
console.log(me3)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const emptyArray = []
emptyArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(emptyArray)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
const emptyArray2 = [1, 2, 3, 4, 5, 9, 7, 8, 9, 10]
emptyArray2.splice(9, 1, 100)
console.log(emptyArray2)
/* SCRIVI QUI LA TUA RISPOSTA */
