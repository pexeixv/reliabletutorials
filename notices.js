var url = 'https://spreadsheets.google.com/feeds/cells/1b_bKNp7pQkwF99wg8OhFD9OGf0zyNm9NVoRUu3GenwY/1/public/full?alt=json'
var string = ''
fetch(url)
    .then(res => res.json())
    .then(data => {
        var { feed } = data
        var { entry } = feed
        for (let i = 0; i < 4; i++)
            entry.shift()
        var newArray = []
        entry.forEach(entry => {
            var { content } = entry
            var { $t } = content
            newArray.push($t)
        })
        while (newArray.length) {

            string += `{"position":"${newArray[0]}","title":"${newArray[1]}","desc":"${newArray[2]}","date":"${newArray[3]}"}`
            for (let i = 0; i < 4; i++)
                newArray.shift()
            if (newArray.length !== 0)
                string += ','
        }

        string = `[${string}]`
        string = JSON.parse(string)
        previousFunction()
    })




function previousFunction() {
    var section = document.querySelector('section')

    // import { notices } from './data.js'
    var notices = string


    var noticesWhichHavePosition = notices.filter(a => Number.parseInt(a.position))
    noticesWhichHavePosition.sort((a, b) => a.position - b.position)

    var generateNoticeString = notice => {
        var { date, title, desc } = notice
        return `
                <span>${date}</span>
                <h3>${title}</h3>
                <p>${desc}</p>
            `
    }

    if (noticesWhichHavePosition.length) {
        noticesWhichHavePosition.forEach(notice => {
            section.innerHTML += generateNoticeString(notice)
        })
        section.classList.remove('hidden')
    }

}




