//What I thought:
let arr = [], third;
let nIsOne = true;
function evaluateFibonacci(first, second, n) {
    if (first == 0) {
        if (n == 1 && nIsOne == true) {
            arr.push(0);
            nIsOne = false;
        } else {
            arr.push(first);
            arr.push(second);
        }
        n -= 2;
    }
    if (n > 0) {
        third = first + second;
        arr.push(third);
        evaluateFibonacci(second, third, n-1);
    }
}

evaluateFibonacci(0, 1, 10);
let str = arr.join(" ");
console.log(str);

//What it was: 
function getFibonacci(max) {
    if (max <= 0) return 0;
    if (max == 1) return 1;
    return getFibonacci(max-1) + getFibonacci(max-2)
}

let fact = [];
for (i = 0; i < 6; i++) {
    fact.push(getFibonacci(i));
}
let str2 = fact.join(" ")
console.log(str2);