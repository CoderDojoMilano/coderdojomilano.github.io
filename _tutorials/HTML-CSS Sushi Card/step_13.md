## Aggiungiamo dello stile alla barra-menu

Con  CSS, le possibilità per dare un look fantastico alla tua menu-bar sono infinite. 

- Vai nuovamente al file `styles.css` - il posto dove avvengono le cose cool!

- Trova il tuo selettore `nav ul` , e aggiungiamo altre regole in modo che sia come questo:

```css
  nav ul {
    background-color: tomato;
    border-style: solid;
    border-color: MediumVioletRed;
    border-width: 2px;
    padding: 10px;
  }
```

La proprietà `padding` aggiunge dello spazio. Riesci ad immaginare a cosa servono le altre proprietà? Prova a fare degli esperimenti con altri colori ed altri numeri di pixel.  

![Menu bar with borders and padding added](images/egMenuBarMoreStyle.png)

- Per sbarazzarsi della sottolineatura dei link, aggiungi il codice che segue su una nuova riga dopo la chiusura della parentesi graffa `}` della regola per `nav ul li`. Potresti inserirlo dove vuoi dopo `}`, ma sarebbe meglio mantenere insieme le cose che sono collegate tra di loro, così sarà più facile trovarle!

```css
  nav ul li a {
      text-decoration: none;
  }
```
   
La regola precedente si applica a tutti i link  `<a>` situati all'interno di un oggetto `<li>` in un elenco non numerato `<ul>` posto a sua volta all'interno di una sezione `<nav>`. Wow, sono ben quattro selettori! 

![Menu bar with link underlining removed](images/egMenuBarNoUnderline.png)

Ti ricordi come hai rimosso il tag link da alcuni oggetti dell'elenco nella sezione `<nav>` in modo da riconoscere in quale pagina ti trovavi? Perchè non cambiare anche il colore degli elementi della lista di navigazione che non sono dei link? 

- Trova il selettore `nav ul li` , e **dentro** la parentesi graffa aggiungi la riga:

```css
  color: PapayaWhip;
```

Puoi scegliere qualunque colore ti piaccia! 
  
Puoi aggiungere la proprietà `color` alla regola del selettore  `nav ul li a` in modo che sia di un colore differente dagli altri link del sito.

- Cosa ne pensi di mettere degli angoli arrotondati per il tuo menu? Prova ad aggiungere il codice seguente alla regola di `nav ul` e guarda cosa succede: `border-radius: 10px;`.
  
Con la proprietà `border-radius` è veramente facile dare un look più moderno ad ogni cosa! 

![Webpage with rounded corners on the menu bar and on a picture](images/egMenuBarFullStyles_result.png)

--- challenge ---

## Sfida: fai in modo che gli angoli delle tue immagini siano arrotondati

- Nel tuo foglio di stile, crea un nuovo set di regole per le immagini usando il selettore `img` e aggiungi la regola `border-radius`.

--- /challenge ---
