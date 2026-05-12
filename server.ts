import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage, res) => {
  // console.log(req.url);
  // console.log(req.method);

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify({ message: "this is the root" }));
  } else if (req.url?.startsWith("/products")) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("this is product root");
  }
});

server.listen(5000, () => {
  console.log("server is running to the port 5000");
});
