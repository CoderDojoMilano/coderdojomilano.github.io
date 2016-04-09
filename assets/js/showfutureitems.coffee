---
---
showFutureItems = (selector) ->
    for item in $("[date]")
        $item = $(item)
        if Date.parse($item.attr("date")) > new Date()
            $item.show()

window.showFutureItems  = showFutureItems
