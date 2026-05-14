import type { IncomingMessage, ServerResponse } from "http";
import { productHandller, rootHandller } from "../Controller/Controller.ts";
import { readprodouct } from "../service/product.service.ts";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  rootHandller(req, res);

  productHandller(req, res);
};
