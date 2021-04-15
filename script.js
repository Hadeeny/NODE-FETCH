const path = require("path");
const fs = require("fs");
const https = require("https");

// create result folder
fs.mkdir(path.join(__dirname, "/result"), {}, (err) => {
  if (err) throw err;
  console.log("created a result folder");
});
// get posts from api
https.get("https:jsonplaceholder.typicode.com/posts", (res) => {
  let body = "";
  res.on("data", (data) => {
    body += data;
  });
  res.on("end", () => {
    fs.writeFile(path.join(__dirname, "/result", "post.txt"), body, () => {
      console.log("new file created");
    });
  });
});
