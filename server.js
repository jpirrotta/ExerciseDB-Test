const express = require("express");
const request = require("request");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api", function (req, res) {
    const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        qs: { limit: "10" },
        headers: {
            "X-RapidAPI-Key":
                "00b1b544f0msh06f9eb6ac3a6ad4p1f571cjsn6d642a2ddfc4",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(`
        <html>
            <body>
                <pre>${JSON.stringify(JSON.parse(body), null, 2)}</pre>
            </body>
        </html>
    `);
    });
});

app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
