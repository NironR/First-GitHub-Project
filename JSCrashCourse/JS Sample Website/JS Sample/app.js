async function firstSinxIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()

    const posts = result.filter(element => !element.completed).slice(0,6)
    if (userId === true) {
        console.log (userId)
    }
    console.log (posts)
}

firstSinxIncomplete(1)

