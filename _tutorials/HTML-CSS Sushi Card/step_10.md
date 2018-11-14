## Aggiungere altre pagine

Questa parte ti mostrerà come aggiungere altre pagine al tuo sito.

- Al limite superiore del code panel, clicca sul simbolo **+** vicino alle linguette delle schede e digita il nome del nuovo file. Deve terminare con `.html` (incluso il punto!) in modo che il browser possa riconoscerlo come una pagina web.

![Adding a new file in Trinket](images/tktNewFileArrows.png)

--- collapse ---
---
title: Rinominare o cancellare un file
---

Se vuoi cambiare il nome di un file, clicca sull'icona **ingranaggio** a destra del nome file, clicca l'icona **matita**. Digita il nuovo nome del file e premi **Enter**. Puoi anche cancellare un file cliccando sull'icone  **cestino** invece che sull'icona della **matita**.
![](images/EditFilename.png)

Potresti chiederti perchè non si può modificare il nome del file `index.html`. `index.html` è un nome file speciale usato per indicare la **pagina iniziale**, l'home page, di un sito. Questa è la pagina su cui atterri quando visiti un sito. Ogni volta che vai alla homepage di un sito, il browser cerca il file con il nome  `index.html` e lo mostra sullo schermo.

--- /collapse ---

- Trova il file `template.html` , copia e incolla tutto il codice nel tuo nuovo file. Dato che vuoi copiare l'intero contenuto, puoi cliccare in un punto qualunque del codice e usare le scorciatoie da tastiera <kbd>Ctrl</kbd> (o <kbd>cmd</kbd>) e <kbd>A</kbd> per selezionare tutto in una volta sola.

- Cambia il testo tra il tag`<title> </title>` in modo che la tua nuova pagina abbia un titolo adatto. Trinket non mostrerà il il titolo, ma puoi vederlo all'estremità superiore del tuo browser se scarichi il file e lo apri.

![The page title showing in the browser tab](images/egLocalFileWindowTitle.png)

- Nei tag `<main> </main>` del nuovo file usa tutto ciò che hai imparato per aggiungere elementi alla pagina: paragrafi, intestazioni, immagini ed elenchi!

- I ripeti i passi di sopra per ogni nuova pagina. 

Quando ci sono troppe schede aperte per poter essere visualizzate insieme, puoi usare l'icona **<** e **>** in alto a sinistra per farle scorrere.

![The buttons for scrolling the tabs](images/tktScrollTabIcons.png)

Ora hai bisogno di creare dei link in modo da poter raggiungere ogni nuova pagina! Mettiamo tutti i link in un elenco.

- Nel file `index.html`, aggiungi il seguente codice al body della pagina:

```html
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="birds.html">Uccelli protetti</a></li>
        <li><a href="conservation.html">Conservazione</a></li>
        <li><a href="sanctuaries.html">Santuari degli uccelli</a></li>
    </ul>
```

- Modifica il valore dell'attributo `href` per ogni link (ricorda, il testo deve essere inserito all'interno delle virgolette) in modo che sia perfettamente identico ad ogni nome dei file che hai creato. 

- Modifica il testo all'interno dei tag `<a> </a>` in modo che sia adatto alla descrizione delle tue pagine.

Ora puoi navigare tra le tue pagine! 

![Example list of links on a web page](images/egListOfPageLinks.png)

