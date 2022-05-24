let myLeads = '["www.awesomelead.com"]'

myLeads = JSON.parse(myLeads)

myLeads.push("www.lead2.com")

myLeads = JSON.stringify(myLeads)

console.log (typeof myLeads)
