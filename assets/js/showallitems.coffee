
---
---
showAllItems = (selector) ->
    for item in $("[date]")
        $item = $(item)
        $item.show()

window.showAllItems = showAllItems
