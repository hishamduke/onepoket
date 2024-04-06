import http from "http";

const server = http.createServer((_, res) => {
  res.end("Hello, World!\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
