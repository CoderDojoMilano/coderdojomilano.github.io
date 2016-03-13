---
---
showFutureItems = (selector) ->
    for item in $("[date]")
        $item = $(item)
        if  new Date($item.attr("date")) > new Date()
            $item.show()

window.showFutureItems  = showFutureItems
