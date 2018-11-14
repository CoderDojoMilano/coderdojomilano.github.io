## Creazione dei link

In questa sezione imparerai come creare un link che ti porti ad un'altra pagina web una volta che lo avrai cliccato.

- Aggiungi il seguente codice alla sezione body del file `index.html`:

```html
  <a href="">Click here</a>
```

I tag `<a> </a>` trasformano tutto ciò che è compreso al loro interno in un link. 
 
- Prova a vedere cosa succede se clicchi il tuo nuovo link. Niente, giusto?

Questo perchè l'attributo `href` al momento è vuoto. Serve che contenga l'**URL** (l'indirizzo web) della pagina alla quale vuoi collegarti.

- Vai su Wikipedia e trova una pagina riguardante l'argomento del tuo sito. Io cercherò una pagina sulla Lega Italiana per la protezione e conservazione degli uccelli.

- Clicca la barra degli indirizzi e selezione tutto il testo contenuto in essa. Questo è l'URL completo della pagina in cui ti trovi. Premi contemporaneamente i tasti<k>Ctrl</kdb> (or <kdb>cmd</kdb>) e <kdb>C</kdb> per copiarlo. 

  ![URL in address bar](images/AddressBarURL.png)

- Nel tuo Trinket, clicca tra le virgolette dopo `href=` e premi insieme i tasti <kdb>Ctrl</kdb> (o <kdb>cmd</kdb>) e <kdb>V</kdb> per incollare l'URL che hai copiato prima da Wikipedia. Il tuo codice dovrebbe apparire come questo:

```html
  <a href="https://it.wikipedia.org/wiki/Lega_Italiana_Protezione_Uccelli">Clicca qui</a>
```

Hai appena creato il tuo primo link. Fai click sopra e guarda se funziona.

![Link tag](images/egLinkTagWithURL.png)

--- collapse ---
---
title: Link ad altri siti web
---
Trinket a volte ha dei problemi a visualizza i link. Puoi provare link a siti diversi da Wikipedia ma potrebbero anche non funzionare. In ogni caso, se scaricherai i file del tuo progetto e li aprirai nel browser del tuo pc vedrai che funzioneranno.

--- /collapse ---

- Prova ad inserire un'immagine tra i tag `<a> </a>` invece delle parole `Clicca qui`, in questo modo:

```html
  <a href="https://it.wikipedia.org/wiki/Lega_Italiana_Protezione_Uccelli">
  <img src="barn-owl.jpg" alt="A barn owl" width="200px" />
  </a>
```

- Clicca sull'immagine. Hai visto che si è trasformata in un link?

Puoi inserire un link in qualunque parte della tua pagina web, un paragrafo così come una lista. Qui c'è l'esempio di una frase con un link all'interno:

```html
  <p>
    <a href="https://it.wikipedia.org/wiki/Lega_Italiana_Protezione_Uccelli">Clicca qui</a> per saperne di più sulla protezione degli uccelli da Wikipedia.
  </p>
```

![Example of a link in a paragraph element](images/egParagraphLink.png)

--- challenge ---

## Sfida: trasforma un link in una lista

- Prova a vedere se puoi inserire un link all'interno di un elenco al posto di un elemento della lista.

--- hints ---

--- hint ---

Per trasformare un elemento `<li> </li>` in un link, metti tutto il suo testo, incluso il tag, all'interno del tag link `<a> </a>` e aggiungi l'attributo `href` così come hai fatto sopra.

--- /hint ---

--- hint ---

Nella lista seguente, la voce 'albanella reale' è stata trasformata in un link.

```html
    <ul>
        <li>Barbagianni</li>
        <a href="https://it.wikipedia.org/wiki/Circus_cyaneus"><li>Albanella reale</li></a>
        <li>Zigolo giallo</li>
        <li>Chiurlo</li>
    </ul>
```

--- /hint ---

--- /hints ---


--- /challenge ---


