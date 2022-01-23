

export var set = () => {

    var notices = document.querySelectorAll('.notice')
    var container = document.querySelector('.notices_grid')

    if (notices.length == 1)
        container.classList.add('notices_grid-one')
    if (notices.length == 2)
        container.classList.add('notices_grid-two')
}