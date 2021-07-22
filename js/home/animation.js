export var add = () => {
    var scrollListener = () => {
        var titles = document.querySelectorAll('.section_title')
        var testimonials = document.querySelectorAll('.testimonial')
        var notices = document.querySelectorAll('.notice')
        var scroll = window.innerHeight
        titles.forEach(title => {
            var top = title.getBoundingClientRect().top
            if (scroll > top)
                title.style.animation = `slideIn 300ms forwards linear`
        })
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        var delay = 200
        testimonials.forEach(testimonial => {
            var top = testimonial.getBoundingClientRect().top
            if (scroll > top + 200) {

                if (vw > 900)
                    testimonial.style.animation = `slideUp 300ms forwards linear ${delay}ms`
                else
                    testimonial.style.animation = `slideUp 300ms forwards linear`
                delay += 500
            }
        })
        delay = 200
        notices.forEach(notice => {
            var top = notice.getBoundingClientRect().top
            if (scroll > top + 100) {
                if (vw > 900)
                    notice.style.animation = `slideUp 300ms forwards linear ${delay}ms`
                else
                    notice.style.animation = `slideUp 300ms forwards linear`
                delay += 500
            }
        })
    }
    scrollListener()
    window.addEventListener('scroll', scrollListener)

}