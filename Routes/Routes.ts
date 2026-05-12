import type { IncomingMessage, ServerResponse } from "http";
import { productHandller, rootHandller } from "../Controller/Controller.ts";
import { readprodouct } from "../service/product.service.ts";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/" && req.method === "GET") {
    rootHandller(req, res);
    readprodouct();
  } else if (req.url?.startsWith("/products")) {
    productHandller(req, res);
  }
};
