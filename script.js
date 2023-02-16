const article_list = document.querySelectorAll("article")
const searchInput = document.querySelector("[data-search]")

const article_arr = [...article_list]

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    article_arr.forEach(function(element) {
        const isVisible = element['innerText'].toLowerCase().includes(value)
        element.classList.toggle("hide", !isVisible)
    })
})
