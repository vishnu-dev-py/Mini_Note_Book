var popup_overlay = document.querySelector('.popup-overlay')
var popup_box = document.querySelector(".popup-box")
var add_popup_button = document.getElementById("add-popup-button")

add_popup_button.addEventListener("click", function () {
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

var cancel_popup = document.getElementById("cancel-popup")
cancel_popup.addEventListener("click", function (event) {
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

var container = document.querySelector(".container")
var add_book = document.getElementById("add-book")
var book_title_inp = document.getElementById("book-title-inp")
var book_author_inp = document.getElementById("book-author-inp")
var book_description_inp = document.getElementById("book-description")

add_book.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${book_title_inp.value}</h2>
        <h4>${book_author_inp.value}</h4>
        <p>${book_description_inp.value}</p>
        <button onclick="delete_book(event)">Delete</button>`
    container.append(div)
    popup_box.style.display = "none"
    popup_overlay.style.display = "none"
})

function delete_book(event) {
    event.target.parentElement.remove()
}