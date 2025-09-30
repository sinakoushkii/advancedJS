const heavyComputation = () => {
  const resultOfComputation = [];
  for (let i = 0; i <= 100_000_000; i++) {
    const result = Math.sqrt(i) * Math.random;
    resultOfComputation.push(result);
  }
  return resultOfComputation;
};


console.log("start")

setTimeout(()=>{
  console.log("async operation finished")
},0)

console.log("task 1")
console.log("task 2")
console.log("task 3")
console.log("task 4")


// const startTime = performance.now();

// const resultOfComputation = heavyComputation();
// const endTime = performance.now();

// console.log("apllication finished");
// console.log("running time: " + (endTime - startTime).toFixed(2));
