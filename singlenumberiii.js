//Objective is to find the two numbers in an array that appear only once.

let nums = [1,2,1,3,2,5]


//O(n) solution that uses a hashmap to keep track of the frequencies of each number.

let result = []
let map = {}
    
for (let num of nums) {
    if (map[num] == undefined) {
        map[num] = 1
    } else {
        map[num]++
    }
}
    
for (let [key,value] of Object.entries(map)) {
    if (value == 1) {
        result.push(key)
    }
}
    
return result