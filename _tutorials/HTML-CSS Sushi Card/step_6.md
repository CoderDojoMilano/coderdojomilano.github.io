## Aggiunta di immagini

Aggiunge un'immagine!

- Vai al tal denominato `index.html`. Trova il tag  `</main>` e digita nelle righe **sopra** quello che vedi qui sotto: 

```html
    <img src="barn-owl.jpg" alt="A barn owl" width="200px" />
```

Questo è il risultato che dovresti ottenere:
    
![Codice e immagine di un uccello](images/egImgCodeBird.png)

Nota come questo tag ha dei pezzi di informazione extra al suo interno. Sono detti **atrributi**.

- Trova il pezzetto di codice che dice `width="200px"` e prova a cambiare il numero e cerca di capire cosa accadrà e a cosa serve questo attributo. Attenzione a non cancellare le lettere `px`!

--- collapse ---

---
title: Coma funziona il tag img
---

Osserva come il tag `<img>` è differente dagli altri tag che hai usato fino ad ora - non c'è un tag di chiusura `</img>` . Infatti questo tag è detto **self-closing**: possieda un `/>` alla fine. Il motivo è che un'immagine non può avere un inizio e una fine come invece ha ad esempio una porzione di testo. 

Il tag contiene altri **attributi** con informazioni extra:
- L'attributo `src` indica al browser quale file usare per l'immagine. 
- L'attributo `alt` è una breve descrizione dell'immagine e viene visualizzata nel caso il browser non possa visualizzare. 'alt' è l'abbreviazione per 'alternative'. Quello che viene scritto nell'attributo `alt` serve anche alle persone con problemi alla vista e che fanno uso di programmi che leggono il testo ad alta voce \(screen radar\).
- L'attributo `width` dice al browser quanto deve apparire larga la foto sullo schermo. `100px` significa 100 **pixels**, che non sono altro che i piccoli punti che costituiscono ciò che viene visualizzato su uno schermo. Se dimentichi questo attributo l'immagine sarà visualizzata nella sua larghezza originale.

--- /collapse ---

Ora che conosci il codice da utilizzare per inserire un'immagine nel tuo sito, vorrai probabilmente cambiarla, giusto?

- La prima cosa di cui hai bisogno è, ovviamente, un'immagine! Puoi usarne una che si trova già nel tuo computer, magari una foto che hai scattato tu, oppure cercarne una su Internet.

[[[immagine generica dal web]]]

**Attenzionee:** non tutte le immagini che trovi su Internet possono essere usate gratuitamente. Se scarichi un'immagine, assicurati che tu possa usarla liberamente. Puoi trovare più informazioni a proposito qui:

[[[immagini-permessi-per-uso]]]

Una volta che hai trovato la foto, puoi scaricarla su Trinket: 

- Nel tuo Trinket, clicca sull'icona **image** vicina al segno **+**. 

![Immagine icona](images/tktImageIconArrow.png)

Qui è dove troverai le immagini che potrai usare sul tuo sito. Dovresti vedere l'immagine di un barbagianni.

- Clicca il pulsante **Add Image** e poi clicca **Upload**. 

- Clicca sul pulsante **Click To Select Files**. Trova il tuo file e fai doppio-click sul file.

- Clicca su **Done**.

![Immagine area upload](images/tktUploadImages.png)

La tua immagine dovrebbe essere caricata e pronta per l'uso.

- Vai al file `index.html` e trova il tag  `<img>`. Cambia il testo `barn-owl.jpg` con quello esattamente identico al nome del file che contiene l'immagine che hai scelto di usare. Attenzione al fatto che il nome potrebbe terminare in `.png` invece che `.jpg`!

Il testo che hai appena modificato è l'attributo `src`, che dice al browser quale file usare e dove trovarlo.

**Nota:** Il valore che digiti per l'attributo deve essere racchiuso dalle doppie virgolette `""` !

--- sfida ---

## Sfida: modifica il testo alt dell'immagine

- Trova l'attributo `alt` della tua immagine e cambialo con una breve descrizione della stessa \(es. gatto di casa\). 

--- /sfida ---




