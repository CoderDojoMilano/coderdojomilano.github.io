## Aggiungere una tabella

A volte può essere utile mostrare delle informazioni in una tabella. Per esempio, potresti voler fare un elenco dei membri di una società sportiva locale o della squadra della scuola, oppure la top ten delle tue canzoni preferite.

Una tabella è una griglia fatta di **righe** e **colonne**. La maggior parte delle tabelle include in cima ad ogni colonna un titolo chiamato **header**. Ecco un esempio:

![Example of information in a table](images/egTableResult.png)

- Vai al file `page_with_table.html`. Qui vedrai un mucchio di codice tra i tag `<table> </table>` . 

- Seleziona tutto il codice dall'inizio del tag `<table>` fino al tag di chiusura `</table>` e copialo. Poi vai ad uno dei tuoi file dove vorresti mettere una tabella e incolla il codice.

Al momento la tua tabella è vuota. 

- Inizia a riempire la tabella con ciò che ti piace! Semplicemente inserisci del testo tra i tag `<td> </td>` e i tag `<th> </th>`. Puoi aggiungere più informazioni e più tag se lo desideri.

--- collapse ---
---
title: Codice di esempio
---

Il codice HTML per la tabella apparirà come quello qui sotto:

```html
  <table>
    <tr>
      <th>Nome</th>
      <th>Località</th>
      <th>Uccelli trovati qui</th>
    </tr>
    <tr>
      <td>Skellig Michael</td>
      <td>Island off coast of Kerry</td>
      <td>Pulcinelle di mare</td>
    </tr>
    <tr>
      <td>Bird Island</td>
      <td>Strangford Lough</td>
      <td>Cormorani</td>
    </tr>
    <tr>
      <td>Burren Birds of Prey Centre</td>
      <td>County Clare</td>
      <td>Vari tipi, incluse aquile, falchi, gufi e falconi</td>
    </tr>
  </table>
```

--- /collapse ---

Per aggiungere un'altra **riga**, aggiungi un altro set di tag `<tr> </tr>`. Tra di essi, inserisci dei **dati** tra le coppie di tag `<td> </td>` tanti quanti nelle altre righe.

Per aggiungere un'altra **colonna**, aggiungi altri dati con un set di tag `<td> </td>` per **riga**. Aggiungi anche un ulteriore  **header** per la prima riga usando i tag `<th> </th>`.

--- collapse ---
---
title: Come funziona?
---

Diamo un'occhiata a tutti questo codice. Assomiglia un po' al codice per un elenco (ti ricordi `<ul>` e `<ol>`) ma con più livelli.

Ogni coppia di tag `<tr> </tr>` genera una riga, così tutto ciò che scrivi al loro interno appare in una singola riga dalla tabella.

La prima irga contiene i tag `<th> </th>` tags. Questi sono usati per i titoli delle colonne che vanno perciò indicati tra di essi. Ce n'è una coppia per ogni colonna della tua tabell.

I tag `<td> </td>` definiscono ciò che sono le celle della tabella, e appaiono sulla stessa riga. Sono simili ai tag  `<li> </li>` degli elenchi: tutto ciò che va tra di essi costituisce un oggetto in una riga della tabella.

--- /collapse ---

- Se dai un'occhiata alla fine del file `styles.css`, troverai del codice CSS che descrive come deve apparire una tabella. Non serva che tu lo comprenda tutto ora! Ma puoi fare un po' di esperimenti cambiando il testo, i bordi e il colore di sfondo, creando il tuo stile personale.

```css
  table, th, td {
    border: 1px solid HoneyDew;
    border-collapse: collapse;
  }
  tr {
    background-color: PaleTurquoise;
  }
  th, td {
    vertical-align: top;
    padding: 5px;
    text-align: left;
  }
  th {
    color: purple;
  }
  td {
    color: purple;
  }
```

Hai visto che alcuni selettori sono separati dalle virgole, per esempio `table, th, td`? Questo è un **elenco di selettori**: significa che la regole che segue si applica a tutti i tag `<th>`, a tutti i tag `<td>`. Ti evita di dover riscrivere il set di regole per ogni selettore!
