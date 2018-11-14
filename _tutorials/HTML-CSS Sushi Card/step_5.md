## Controlla il look

Il linguaggio che descrive come dovrebbe apparire un sito si chiama **CSS**.

- Guarda la tab sopra il pannello del codice e vai al file `styles.css` cliccando sul tab con quel nome.
il file contiene il seguente testo:

```css
  body {
      background-color: white;
  }
```

- Modifica il colore `white` a `LightSkyBlue` e guarda cosa accade. Il tuo sito ora dovrebbe avere unos sfondo blue! 

![Esempio con sfondo blu](images/egFirstCSSbluebg.png)

--- collapse ---
---
title: Come funziona?
---

Se guardi in cima al file `index.html`, troverai questa riga:

```html
  <link type="text/css" rel="stylesheet" href="styles.css"/>
```

Questa riga dice al browser di cercare un file speciale chiamato `styles.css`. Questo file speciale è chiamato **foglio di stile / style sheet**. Puoi riconoscerlo dagli altri perchè il suo nome termina con `.css`. 
  
Un foglio di stile contiene **regole** su come ogni elemento della pagina web dovrebbe apparire.

Le parentesi graffe `{ }` e il codice tra di esse contenuto corrisponde al set di **regole CSS**. La parola `body` specifica che tutte le regole indicate sono applicate all'intero elemeno `body` del tuo sito. Il testo che appare prima della parentesi graffa è detto anche **selettore**. Quindi in questo caso questo è il selettore per l'elemento body.

Ogni regola all'interno delle parentesi graffe è composta da:
  - Una **proprietà** a sinistra, seguita dal segno `:`
  - Un **valore** da assegnare alla proprietà alla destra del segno `:`
  - Un simbolo `;` al termine della riga
   
--- /collapse ---

- Aggiungiamo delle regole per cambiare il modo in cui viene visualizzato il testo. Aggiungi due righe nuove all'interno delle parentesi graffe:

```css
  body {
    background-color: LightSkyBlue;
    font-family: "Helvetica", sans-serif;
    color: purple;
  }
```

+ Ora guarda com'è cambiato l'aspetto della pagina web. 

La proprietà `color` è sempre riferita al testo. Qui stiamo impostando il colore di tutto il testo contenuto all'interno del tag `body` e quindi di tutta la pagina.

- Si possono anche scrivere regole differenti e separate per le intestazioni e per i paragrafi. Per le intestazioni `<h1>`, userai il selettore `h1`. Sotto la parentesi graffa che contiene le regole CSS per il body, aggiungi il seguente codice.

```css
  h1 {
    color: orange;
    font-family: "Times New Roman", serif;
  }
```

Il testo delle tue intestazioni ora dovrebbe apparire arancione, con il testo dei paragrafi in viola come prima. 

![Risultato del nuovo codice CSS](images/egCssColorsFonts.png)

Hai visto come anche le lettere ora hanno un aspetto differente oltre al colore? Questo perchè hai cambiato il  **font family**. Puoi trovare altri caratteri [qui](http://dojo.soy/se-font-families).

- Prova ad aggiungere un set di regole al tag delle intestazioni `<h2>` usando il selettore `h2` . 

- Perchè non provi a fare qualche esperimento con differenti combinazioni di colori per il testo e per lo sfondo/background? Ci sono tantissimi colori disponibili. Puoi trovare una lista [qui](http://dojo.soy/se-color-names).
