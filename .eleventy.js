const { DateTime } = require("luxon");
module.exports = eleventyConfig => {

    // eleventyConfig.addFilter("postDate", (dateObj) => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL))
    eleventyConfig.addFilter("postDate", (dateObj) => DateTime.fromJSDate(dateObj).toFormat('dd LLLL yyyy'))

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('sass/home.css')
    eleventyConfig.addPassthroughCopy('sass/thanks.css')
    eleventyConfig.addPassthroughCopy('admin')
    return {
        dir: {
            input: '.',
            output: '_site'
        }
    }
}
