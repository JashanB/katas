let sumLargestNumbers = function(data) {
data.sort()
data.reverse()
return data[0] + data[1]
}
console.log(sumLargestNumbers([1,10, 19, 20, 40]))
