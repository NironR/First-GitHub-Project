function showRating(rating) {
    let ratings = ''
    for (i = 1; i <= rating; ++i) {
        ratings += '*'
        if (i !== Math.floor(rating)) {
            ratings += " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " ."
    }
    return ratings
}

console.log(showRating(1))