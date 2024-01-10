const http = require("node:http");
const { initFileRouter } = require("node-file-router");

async function Server() {
  const useFileRouter = await initFileRouter();

  const server = http.createServer((req, res) => {
    useFileRouter(req, res);
  });

  const port = 4000;

  server.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
}

Server();
