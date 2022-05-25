const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("btn-main")
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById( "delete-btn")
const leadsfromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))
let myLeads = []

if (leadsfromLocalStorage) {
    myLeads = leadsfromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href='${myLeads[i]}' target='_blank'> 
                ${myLeads[i]}
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear ()
    myLeads = []
    render(myLeads)
}) 
    


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem ("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})





