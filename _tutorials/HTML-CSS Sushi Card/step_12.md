## Creazeione di una barra-menu

In questa card vedrai come trasformare il tuo menù di navigazione in una barra-menu dall'aspetto cool, soltanto aggiungendo alcune regole CSS al tuo foglio di stile.

![Example of a menu bar](images/egCoolMenuBar.png)

- Vai al foglio di stile nel tab `styles.css` . Clicca **sotto** una parentesi graffa di chiusura `}`, e premi  **Invio** per creare una nuova riga vuota. Aggiungi le regole CSS seguenti:

```css
    nav ul {
        background-color: tomato;
    }
```

Hai visto che abbiamo usato due selettori  `nav` a `ul` invece che uno solo? Se usi solo il selettore `ul` , la regola avrà effetto su tutti gli elenchi non numerati del sito, mentre aggiungendo il selettore `nav` come sopra, avrà effetto solo sugli elenchi all'interno dei tag  `nav` .

![List with red background](images/egMenuBarFirstStyle.png)

Ora liberiamoci dei Bullet point. Sono i  punti che compaiono prima delle voci dell'elenco. 

- Aggiungi il codice seguente al file  `styles.css`. Nuovamente, scrivi si una nuova riga dopo `}` così non digiterai all'inteno di un altro blocco di regole.

```css
    nav ul li {
        list-style-type: none;
    }
```

Come puoi notare questo set di regole ha tre selettori:  si selezionano tutti gli elementi `li` che si trovano in una lista `ul` che a sua volta si trova all'interno di una sezione `nav` . Forte! 

![List with bullet points removed](images/egMenuBarNoBullets.png)

Ora imposteremo la lista in orizzontale anzichè verticale. 

- Dentro la regola CSS che hai appena creato aggiungi questa riga di codice: `display: inline;`.

![](images/egMenuBarInline.png) 
 
- Ora gli oggetti del menu sono orizzontali ma tutti schiacciati insieme, quindi aggiungiamo le proprietà  `margin-right` e `margin-left` per inserire un po' di spazio tra di essi. Ora Il blocco di codice CSS dovrebbe essere così:

```css
    nav ul li {
        list-style-type: none;
        display: inline;
        margin-right: 10px;
        margin-left: 10px;
    }
```
   
Ricorda: `10px` significa 10 pixels.

Cosa ne pensi se ora facciamo in modo che il menu cambi in modo da indicare in quale pagina ti trovi? Questa parte non riguarda il foglio di stile.

- Iniziamo dalla homepage. Vai al file `index.html`. Nell'elenco con i link del menu, rimuovi il tag del link prima edopo la parola  `Home`, in modo che l'oggetto della lista che indica l'homepage appaia solo tra i tag `<li> e </li>`, come questo: `<li>Home</li>`.

- Ora devi fare lo stesso in tutti gli altri file che compongono le pagine del tuo sito, rimuovendo ogni volta i tag che linkano alla pagina stessa che stai modificando. Così, per esempio, nel file `birds.html`, abbiamo rimosso il tag link tags nell'oggetto `Uccelli protetti`:

```html
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li>Protected Birds</li>
                <li><a href="conservation.html">Conservazione</a></li>
                <li><a href="sanctuaries.html">Santuari degli uccelli</a></li>
            </ul>
        </nav>
    </header>
```

- Esplora le tue pagine cliccando sui link. Vedi come la barra-menu indica la pagina che stai visitando indicandola con del semplice testo anzichè con un link? 

![Example of menu bar highlighting current page](images/egMenuBarOnPage.png)

Nella prossima card imparerai alcuni trucchi di CSS per fare ancora più bella la tua barra-menu.
