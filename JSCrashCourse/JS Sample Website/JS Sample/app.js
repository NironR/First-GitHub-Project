function getMax(seconds) {
    let max = seconds[0];
   for (i = 0; i < seconds.length; i++) {
       if (seconds[i] > max) {
           max = seconds[i]
       }

   }
   return max
}

console.log (getMax([-100, -200, -300])); 