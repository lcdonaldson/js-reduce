// example 1
var fs = require('fs')

var result = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(/\s{2,}/))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            rod: line[1],
            fish: line[2],  
            quantity: line[3]
        })
        return customers
    }, {});

console.log('result', JSON.stringify(result, null, 2));


// example 2
var fish = ["catfish","bass","crappie"];
var total = fish.reduce(function(sum, word) {
  return sum + word.length;
}, 0);
console.log(total);
