var url = 'https://spreadsheets.google.com/feeds/cells/13bYETzRIV5S5r-QNGTDxWKdnOYQ3XK-p1NupQZIWz5c/1/public/full?alt=json'
var container = document.querySelector('.notices_grid')
var section = document.querySelector('.notices')

export var set = () => {
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
            inject(string)
        })
}


var generateString = ({ position, date, title, desc }) => {
    return `<div class="notice">
                <span class="notice_date">${date}</span>
                <h4 class="notice_title">${title}</h4>
                <p class="notice_desc">${desc}</p>
            </div>`

}

var inject = notices => {
    var noticesWhichHavePosition = notices.filter(a => Number.parseInt(a.position))
    noticesWhichHavePosition.sort((a, b) => a.position - b.position)

    if (noticesWhichHavePosition.length) {
        noticesWhichHavePosition.forEach(notice =>
            container.innerHTML += generateString(notice)
        )
        section.classList.remove('hidden')
    }

}