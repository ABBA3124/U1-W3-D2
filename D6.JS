/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
const changeTitle = function (newTitle) {
  const pageTitle = document.querySelector("h1")
  if (pageTitle) {
    pageTitle.textContent = newTitle
  }
}
changeTitle("Questo è il nuovo titolo della pagina")

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const pageTitle = document.querySelector("h1")
  if (pageTitle) {
    pageTitle.classList.add("myHeading")
  }
}
addClassToTitle()

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (newText) {
  const divContainer = document.querySelectorAll("div p")
  divContainer.forEach((paragrafo) => {
    paragrafo.textContent = newText
  })
}
changePcontent("nuovo testo dei p figli di un div")

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const allLinks = document.querySelectorAll("a")
  allLinks.forEach((link) => {
    const footerLink = link.closest("footer a")
    if (!footerLink) {
      link.href = "https://www.google.com"
    }
  })
}
changeUrls()

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const secondList = document.getElementById("secondList")
  if (secondList) {
    const newList = document.createElement("li")
    newList.textContent = "nuovo elemento"
    secondList.appendChild(newList)
  }
}
addToTheSecond()

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
const addParagraph = function () {
  const primoDiv = document.querySelector("div")
  if (primoDiv) {
    const nuovoParagrafo = document.createElement("p")
    primoDiv.appendChild(nuovoParagrafo)
  }
}
addParagraph()

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
const hideFirstUl = function () {
  const fristUlprima = document.getElementById("firstList")
  if (fristUlprima) {
    fristUlprima.style.display = "none"
  }
}
hideFirstUl()

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const listaNonOrdinata = document.querySelectorAll("ul")
  listaNonOrdinata.forEach((list) => {
    list.style.backgroundColor = "green"
  })
}
paintItGreen()

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
const makeItClickable = function () {
  const h1Element = document.querySelector("h1")
  if (h1Element) {
    h1Element.addEventListener("click", function () {
      const currentText = h1Element.textContent
      const newText = currentText.slice(0, -1)
      h1Element.textContent = newText
    })
  }
}
makeItClickable()

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
    const footerLink = document.querySelector("footer a")
    if (footerLink) {
        footerLink.addEventListener()
    }
}
// revealFooterLink()

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {}

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {}

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {}
