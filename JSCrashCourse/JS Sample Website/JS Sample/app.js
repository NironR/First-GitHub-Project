function showRating(rating){
    ratings = ''
    for (i = 1; i <= rating; + + i){
        ratings += "*"
    } if (i !== ratings) {
        ratings += " "
    }
    return ratings
}

console.log (showRating(4))