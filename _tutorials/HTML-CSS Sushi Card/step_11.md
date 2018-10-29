## Navigare nel sito

Molti siti hanno un menu di **navigazione** per aiutare i visitatori a spostarsi tra le pagine.
Ora che hai un po' di pagine, una homepage, dei link ad ogni pagina, spostiamo la lista dei link in una sezione in alto della pagina. 

![Example of a web page with navigation links at the top](images/egNavLinksAtTop.png)

- Cerca il codice usato per creare un elenco nei passaggi precedenti.

- Premi invio subito prima del tag di apertura `<ul>` per creare una nuova riga vuota, dopo su questa nuova riga scrivi il seguente tag: `<nav>`. Trinket aggiungerà automaticamente il tag di chiusura , ma puoi cancellarlo perchè al momento non è al posto giuasto.

- Subito **dopo** il tag di chiusura `</ul>` , premi **Invio** per creare un'altra riga vuota, e digita qui il tag di chiusura `</nav>`. 

- Ora dovrai selezionate l'intera sezione `<nav>` e l'elenco cliccando appena rima del tag `<nav>` e tenendo premuto trascina il mouse verso il basso fino allo spazio immediatamente successivo al tag di chiusura  `</nav>`, in questo modo tutto il testo, inclusi i tag di apertura e chiusura saranno evidenziati. Assicurati che siano evidenziate anche le **parentesi angolari** (i segni `<` e `>`).

![Text is not fully selected](images/egSelectedWhoops.png)
![Fully selected text](images/egSelectedYay.png)

- Adesso **taglierai** anzichè incollare. Premi  il tasto <kbd>Ctrl</kbd> (o <kbd>cmd</kbd>), mentre lo tieni premuto premi il tasto  <kbd>X</kbd> . Il testo selezionati scompare, ma... don't panic!

- All'inizio del file in altro, clicca nello spazio tra  i tag `<header> </header>` . Assicurati che il cursore stia lampeggiando nel posto giusto. Ora incolla il testo tagliato premendo come sempre <kbd>Ctrl</kbd> (o <kbd>cmd</kbd>) e <kbd>V</kbd>. Il codice dovrebbe apparire come questo:

```html
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="birds.html">Uccelli protetti</a></li>
                <li><a href="conservation.html">Conservazione</a></li>
                <li><a href="sanctuaries.html">Santuari degli uccelli</a></li>
            </ul>
        </nav>
    </header>
```

--- collapse ---
---
title: Undo!
---

Se commetti un errore, puoi annullare (**undo**) premendo insieme <kbd>Ctrl</kbd> (o <kbd>cmd</kbd>) e <kbd>Z</kbd> . Generalmente è possibile premere questa combinazione di tasti tante volte quanti sono i passaggi che vuoi cancellare. Questa è un'altra combinazione di tasti che puoi usare in molti altri programmi!

--- /collapse ---

- Fai una prova per verificare che i link funzionino ancora.

--- challenge ---

## Sfida: menu di navigazione per tutte le pagine

- Inserisci questa porzione di codice nella sezione header di ogni file HRML che hai creato. Questo farà apparire il menu di navigazione in ogni pagina del tuo sito.

 --- hints ---

 --- hint ---
Seleziona l'intera sezione  `<nav>` copiandola come hai fatto prima premendo insieme <kbd>Ctrl</kbd> (o <kbd>cmd</kbd>) e <kbd>C</kbd> . 
 
Dopo, in ogni file `.html`, clicca in mezzo ai tag `<header> </header>` e incolla il codice proprio come hai fatto prima.
 --- /hint ---

 --- /hints ---

Ora potrai cliccare sui link in qualunque pagina tu sia. 

--- /challenge ---
