const sumHandler = (req, res) => {
  console.log("In sum Request Handler", req.url);

  const body = [];
  req.on("data", (chunks) => {
    console.log(chunks);
    body.push(chunks);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    //   res.write(`
    //     <html>
    //   <head>
    //     <title>Result</title>
    //   </head>
    //   <body>
    //     <h1>Your Sum is ${result}</h1>

    //   </body>
    // </html>
    //   `);
    //   return res.end();
  });
};

exports.sumHandler = sumHandler;
