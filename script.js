const title_list = document.querySelectorAll("h4")
const body_list = document.querySelectorAll("p")
const article_list = document.querySelectorAll("article")
const searchInput = document.querySelector("[data-search]")

const title_arr = [...title_list]
const body_arr = [...body_list]
const article_arr = [...article_list]

// article_arr.forEach(function(element) {
//     console.log(element['innerText'])
// })

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    article_arr.forEach(function(element) {
        const isVisible = element['innerText'].toLowerCase().includes(value)
        element.classList.toggle("hide", !isVisible)
    })
})
