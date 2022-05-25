const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("btn-main")
const ulEl = document.getElementById("ul-el")
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("tab-btn")
let deleteBtn = document.getElementById("delete-btn")
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
            <a href='${leads[i]}' target='_blank'> 
                ${leads[i]}
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}
const tabs = [
    {
        url: "https://www.linkedin.com/in/per-harald-borgen/"
    }
]

tabBtn.addEventListener("click", function () {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})





