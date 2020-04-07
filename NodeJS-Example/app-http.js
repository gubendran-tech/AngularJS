const http = require('http');

const httpServer = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World from Gubs!!!");
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

httpServer.listen(3000);

console.log("Listening on port 3000");