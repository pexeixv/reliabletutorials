var url = '/db/testimonials.json'
var container = document.querySelector('.testimonials_grid')

export var set = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => inject(data))

}


var generateString = ({ image, quote, name, desgn }) => {
    return `<div class="testimonial">
                <div class="testimonial_image">
                    <img src="${image}" alt="${name}" loading="lazy">
                </div>
                <p class="testimonial_quote">
                    <img src="img/icons/quotes.svg" class="testimonial_icon testimonial_icon-open" loading="lazy">
                        ${quote}
                    <img src="img/icons/quotes.svg" class="testimonial_icon testimonial_icon-close" loading="lazy">
                </p>
                <h5 class="testimonial_name">${name}</h5>
                <span class="testimonial_designation">${desgn}</span>
            </div>`
}

var inject = testimonials => {
    testimonials.forEach(testimonial => container.innerHTML += generateString(testimonial))
}

