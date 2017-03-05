---
---
showFutureItems = (selector) ->
    for item in $("[date]")
        $item = $(item)
        if Date.parse($item.attr("date")) > new Date()
            $item.show()
            
showAllItems = (selector) ->
    for item in $("[date]")
        $item = $(item)
        $item.show()

window.showFutureItems = showFutureItems
window.showAllItems = showAllItems
