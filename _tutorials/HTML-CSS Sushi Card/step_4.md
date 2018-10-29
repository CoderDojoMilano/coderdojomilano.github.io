## La tua prima pagina web!

- Nel pannello di sinistra, il **code panel**, clicca sul tab indicato con `index.html`.

- Trova la linea che dice `Hello!` e cambiale con un tuio messaggio — fai attenzione a **non** cancellare il tag `<p>` all'inizio della linea e il tag `</p>` alla fine della riga. Dovresti poter vedere la tua pagina web aggiornata nel pannello a destra. 

![HTML paragraph example](images/egFirstHtmlCode.png)

- Ora sulla stessa riga, modifica il tag `<p>` e `</p>` con `<h1>` e `</h1>`. Noti qualche differenza nel risultato a destra?

```html
  <h1>Hello!</h1>
```

--- collapse ---
---
title: spiegazione di HTML e tag
---
**HTML** è il codice che genera una pagina web.

La scritta `.html` nel nome del file dice al browser che quel file è una pagina web, così il browser, che conosce il sigificato dei **tag** sa come visualizzare il contenuto sul monitor. (Un browser è il programma che su usa per visualizza i siti web, per esempio Chrome o Firefox.)

I tag HTML come `<p>` e `</p>` definiscono diffenti parti di una pagina, per esempio paragrafi, intestazioni oppure il corpo. Queste parti sono chiamate **elementi**. Pensa a loro come ai mattoni di un edificio.

### Perchè mi servono due tag? 
Per comunicare al browser dove ***inizia*** e dove ***finisce*** un elemento, ti serve un tag di **apertura** e di uno di **chiusura**. Quindi per un paragrafo il tag di apertura `<p>` dirà "Qui inizia del testo che vorrei tu facessi apparire come un paragrafo". Il tag di chiusura `<p>` dice al browser dove deve finire il paragrafo.

Tutto ciò che si trova i tag `<body>` e `</body>` sarà la tua pagina web. 

- Fai attenzione come il tag di chiusura ha **sempre** una barra retroversa (forward slash) `/`.
  
--- /collapse ---

- Prova a cambiare i numeri nei tuoi tag  **heading** per vedere le differenti dimensione che possono assumere. Possono variare da `<h1>` fino a `<h6>`. Ricordati di cambiare il numero sia nel tag di chiusura che di apertura in modo che corrispondano.

- Trova il paragrafo con il codice che dice 'This website is about bird conservation.' e modificalo in modo che diventi come questo:

```html
  <p>
    <em>This website</em> is about <strong>bird conservation</strong>. 
  </p>
```

Riesci a scoprire cosa fanno i tag `<em> </em>` e `<strong> </strong>`?

![Esemio di tag HTML](images/egFirstTags.png)

--- Sfida ---
## Sfida: aggiungi altro testo creato da te

- Prova aggiungengo un nuovo paragrafo o un'intestazione usando alcuni dei tag che hai appena visto.

--- suggerimenti ---

--- suggerimento ---
Quando vuoi inserire del testo in una pagina, devi infilarlo tra due tag per dire al browser come mostrarlo sullo schermo.
Per esempio i tag `<p> </p>` dicono al browser che il testo contenuto al loro interno è un nuovo paragrafo e i tag `<h1> </h1>` che il testo racchiuso tra di loro è un'intestazione.

--- /suggerimento ---

--- suggerimento ---

Il codice per paragrafo sarà come questo:

```html
  <p>Questo è un paragrafo di testo</p>

  <p>Questo è un altro paragrafo.
  Ogni cosa tra una coppia di tag è mostrato dal browser su una lunga riga della pagina dal browser.</p>
```

--- /suggerimento ---


--- suggerimento ---

Il codice per le intestazioni è così:

```html
  <h1>Questa è un'intestazione.</h1>
```
Le intestazioni sono generalmente mostrata come parti più grandi o più scure rispetto ai paragrafi.

--- /suggerimento ---

--- /suggerimenti ---

--- /sfida ---

Congratulazioni, hai costruito la tua prima pagina web! Nella prossima scheda, vedrai come controllarne l'aspetto.
