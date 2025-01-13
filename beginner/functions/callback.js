
//A callback function is passed as an argument to another function and executed later.
function fetchData(callback) {
    console.log("Fetching data...");
    callback();
  }
  
  fetchData(() => {
    console.log("Data fetched successfully!");
  });
