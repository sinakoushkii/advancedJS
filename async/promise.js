baseUrl = "https://general-api.classbon.com/api/general/get-course-with-delay";
secondBaseUrl = "https://general-api.classb.com/api/general/complete-course";

//normal situation

// const p = fetch(baseUrl);
// p
// .then((response) => response.json())
// .then((data) => console.log(data));

// p.catch((error) => console.log(error));

// not returning anything
const p = fetch(baseUrl);
p.then((response) => {
  const sum = 1 + 4;
  console.log(sum);
}).then((data) => console.log(data)); // get undefined in this line

p.catch((error) => console.log(error));

const q = fetch(baseUrl);
q.then(() => {});
q.then((response) => console.log(response)); // get the http response here
q.catch((error) => console.log(error));

const z = fetch(baseUrl);
z.then(() => {
  throw new Error("something went wrong...");
});
z.then((response) => console.log(response)); // get the http response here
z.catch((error) => console.log(error)); //get the error message of then block here in the catch

const k = fetch(secondBaseUrl);
k.catch((error) => console.log("error in the first catch")); //get the error here
k.then((response) => console.log(response));

fetch(secondBaseUrl)
  .then(
    (response) => {
      console.log(response);
    },
    (error) => {
      return "an static error message";
    }
  )
  .then((data) => console.log(data)) // show the error here
  .catch((error) => console.log(error));

fetch(secondBaseUrl)
  .then(
    (response) => {
      console.log(response);
    },
    (error) => {
      throw new Error("an static error message");
    }
  )
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); // show the error here

fetch(secondBaseUrl)
  .then(
    (response) => {
      response.json().then((data) => console.log(data));
    },
    (error) => {
      console.log("retrying...");
      return fetch("https://general-api.classbon.com/api/general/complete-course").then(response=>response.json());
    }
  )
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
