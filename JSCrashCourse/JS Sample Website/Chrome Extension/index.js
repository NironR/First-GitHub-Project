const inputEl = document.getElementById ( "input-el")
const box = document.getElementById ("btn-main")
const ulEl = document.getElementById ( "ul-el")
let myLeads = []

box.addEventListener ("click", function(){ 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for (let i= 0; i < myLeads.length; i++) {
        listItems += "<li> <a href= '#' target= _blank> " + myLeads[i] + " " + "</a> </li>" 
    }

    ulEl.innerHTML = listItems
}
