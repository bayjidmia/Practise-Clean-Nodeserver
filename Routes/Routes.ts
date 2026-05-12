import type { IncomingMessage, ServerResponse } from "http";
import { productHandller } from "../Controller/Controller.ts";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify({ message: "this is the root" }));
  } else if (req.url?.startsWith("/products")) {
    productHandller(req, res);
  }
};
