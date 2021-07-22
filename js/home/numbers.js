var grid = document.querySelector('.numbers_grid')
var gridTop = grid.getBoundingClientRect().top

var counters = document.querySelectorAll('.counter')
var speed = 100

var startCounter = () => {
    counters.forEach(counter => {
        var target = +counter.dataset.target
        var inc = target / speed
        var count = +counter.innerText
        var updateCount = () => {
            if (count < target) {
                count += inc
                counter.innerText = Math.floor(count)
                setTimeout(updateCount, 1)
            } else
                counter.innerText = target
        }
        updateCount()
    })
}


export var listenForScrollAndStartCounter = () => {
    var scroll
    var scrollListener = () => {
        scroll = window.scrollY + window.innerHeight - 70
        if (scroll > gridTop) {
            startCounter()
            window.removeEventListener('scroll', scrollListener)
        }
    }

    window.addEventListener('scroll', scrollListener)
}


