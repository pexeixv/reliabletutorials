var section = document.querySelector('section')

import * as Data from './data.js'
var noticesWhichHavePosition = []

Data.notices.forEach(notice => {
    if (notice.position)
        noticesWhichHavePosition.push(notice)
})

noticesWhichHavePosition.sort(function (a, b) {
    return a.position - b.position;
})

if (noticesWhichHavePosition.length) {
    noticesWhichHavePosition.forEach(notice => {
        var temp = `
                    <span>${notice.date}</span>
                    <h3>${notice.title}</h3>
                    <p>${notice.desc}</p>
                `
        section.innerHTML += temp
    })
    section.classList.remove('hidden')
}

