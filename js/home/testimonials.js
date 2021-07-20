var url = '/db/testimonials.json'
var container = document.querySelector('.testimonials_grid')

export var set = () => {
    axios.get(url)
        .then(res => res.data)
        .then(data => inject(data))

}

var inject = (testimonials) => {
    testimonials.forEach(testimonial => {
        var { image, quote, name, desgn } = testimonial
        var _ = `<div class="testimonial">
                <div class="testimonial_image">
                    <img src="${image}" alt="${name}" loading="lazy">
                </div>
                <p class="testimonial_quote">
                    <img src="img/icons/quotes.svg" class="testimonial_icon testimonial_icon-open" loading="lazy">
                    ${quote}
                    <img src="img/icons/quotes.svg" class="testimonial_icon testimonial_icon-close" loading="lazy">
                </p>
                <h5 class="testimonial_name">
                ${name}
                </h5>
                <span class="testimonial_designation">
                ${desgn}
                </span>
            </div>`
        container.innerHTML += _
    })
}

