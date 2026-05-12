import type { IncomingMessage, ServerResponse } from "http";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify({ message: "this is the root" }));
  } else if (req.url?.startsWith("/products")) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("this is product root");
  }
};
