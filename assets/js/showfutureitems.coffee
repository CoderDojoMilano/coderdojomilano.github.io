---
---
showFutureItems = (selector) ->
    for item in $("[date]")
        $item = $(item)
        alert Date.parse($item.attr("date"))
        if Date.parse($item.attr("date")) > new Date()
            $item.show()

window.showFutureItems  = showFutureItems
