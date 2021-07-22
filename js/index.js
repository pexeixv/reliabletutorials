import * as Testimonials from './home/testimonials.js'
Testimonials.set()

import * as Notices from './home/notices.js'
Notices.set()


import * as Numbers from './home/numbers.js'
Numbers.listenForScrollAndStartCounter()






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
    var delay = 200
    testimonials.forEach(testimonial => {
        var top = testimonial.getBoundingClientRect().top
        if (scroll > top + 200) {
            testimonial.style.animation = `slideUp 300ms forwards linear ${delay}ms`
            delay += 500
        }
    })
    delay = 200
    notices.forEach(notice => {
        var top = notice.getBoundingClientRect().top
        if (scroll > top + 100) {
            notice.style.animation = `slideUp 300ms forwards linear ${delay}ms`
            delay += 500
        }
    })


}
window.addEventListener('scroll', scrollListener)



