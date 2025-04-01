console.log("Hello World");

// below show include external module and use it
const fs = require("fs");
fs.writeFile("output.text", "Writing File", (error) => {
  if (error) console.log("Error Occured");
  else console.log("File Written Successfully");
});
