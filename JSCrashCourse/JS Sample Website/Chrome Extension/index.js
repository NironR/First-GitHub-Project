const inputEl = document.getElementById("input-el")
const box = document.getElementById("btn-main")
const ulEl = document.getElementById("ul-el")
let myLeads = []

box.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem ("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log (localStorage.getItem ("myLeads"))
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a href='${myLeads[i]}' target='_blank'> 
                ${myLeads[i]}
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}


