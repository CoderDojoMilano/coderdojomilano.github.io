## Creare un elenco

Adesso vedrai come trasformare una lista di oggetti, come "unicorni, robot, gatti", in un elenco dall'aspetto piacevole e con il quale successivamente farai delle cose davvero cool.
  
- Nel file `index.html` , aggiungi il suguente codice esattamente sotto alla riga con il tag `</main>`:

```html
    <ul>
        <li>Barbagianni</li>
        <li>Albanella reale</li>
        <li>Zigolo giallo</li>
        <li>Chiurlo</li>
    </ul>
```

Il risultato dovrebbe essere un elenco come questo: 

![Unordered list](images/egUnorderedList.png)

Fai attenzione alla presenza di una coppia di tag `<li> </li>` intorno ad ogni elemento della lista. 

Questa è una lista di uccelli protetti in Irlanda. Puoi cambiare gli oggetti della lista con qualcosa di coerente con il tuo sito (ad esempio con gli uccelli protetti in Italia), e aggiungere un paragrafo prima della lista che descriva che tipo di elenco segue, se ti va!

E come fare se preferisci un elenco numerato? E' quasi la stessa cosa, invece del tag `<ul>`, userai il tag `<ol>`. In inglese un elenco numerato è detto anche **ordered list**. 

- Aggiungi il seguente codice a quello creato prima - assicurati che sia **sotto** il tag `</ul>`!

```html
    <p>
        Minacce per i volatili:
    </p>
    <ol>
        <li>Distruzione dell'Habitat</li>
        <li>Inquinamento</li>
        <li>Cambiamenti climatici</li>
    </ol>
```

E questo è il risultato finale:

![Ordered list](images/egOrderedList.png)

--- challenge ---

## Sfida: aggiungi dello stile al tuo elenco

- Prova ad aggiungere delle ** regole CSS** al tuo stylesheet per cambiare l'aspetto dell'elenco.

--- /challenge ---
