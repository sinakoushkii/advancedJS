baseUrl = "https://general-api.classbon.com/api/general/complete-course";

secondBaseUrl = "https://general-api.classbo.com/api/general/complete-course";


const promise = fetch(baseUrl);
promise
    .then(response=>response.json()) //response before being json
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

const finallyPromise=promise.finally(()=>console.log("finally"))
finallyPromise.then(response=>console.log(response)) //response before being json




