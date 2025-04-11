// async function
async function myFunction() {
    return "Hello!";
  }

  myFunction().then(result => console.log(result)); // Output: Hello!

// await
  async function example() {
    let promise = new Promise((resolve) => {
      setTimeout(() => resolve("Done!"), 2000);
    });
  
    let result = await promise;
    console.log(result); // Waits 2 seconds, then logs: Done!
  }


//   fetch
  fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));


  async function getData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  }

  


  