function showRating(rating) {
    let ratings = ""
    for (i = 0; i < rating; ++i) {
    ratings += "*"
    } if (i !==rating) {
        ratings += " "
    }
    return ratings
}

console.log (showRating(4))