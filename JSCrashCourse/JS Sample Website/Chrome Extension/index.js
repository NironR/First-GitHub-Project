const inputEl = document.getElementById ( "input-el")
const box = document.getElementById ("btn-main")
const ulEl = document.getElementById ( "ul-el")
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

box.addEventListener ("click", function(){ 
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = ""
for (let i= 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + " " + "</li>"
}

ulEl.innerHTML = listItems
