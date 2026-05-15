import type { IncomingMessage, ServerResponse } from "http";
import { insertproduct, readprodouct } from "../service/product.service.ts";
import type { Iproduct } from "../Type/product.type.ts";
import { parseBody } from "../utility/parseBody.ts";
import { readFile } from "fs";

export const rootHandller = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("this is product root");
  }
};
export const productHandller = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlparts = url?.split("/");

  const id =
    urlparts && urlparts[1] === "products" ? Number(urlparts[2]) : null;

  if (url === "/products" && method === "GET") {
    const products = readprodouct();
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify({ message: "this is the root", data: products }));
  } else if (method === "GET" && id !== null) {
    const products = readprodouct();
    const product = products.find((p: Iproduct) => p.id === id);

    res.end(JSON.stringify({ message: "this is the product", data: product }));
  } else if (method === "POST" && url === "/products") {
    const products = readprodouct();
    const body = await parseBody(req);
    console.log(body);

    const newProduct = {
      id: Date.now(),
      ...body,
    };

    console.log(newProduct);

    products.push(newProduct);
    console.log(products);
    insertproduct(products);
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify({ message: "this is the root", data: products }));
  } else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);
    const products = readprodouct();
    const index = products.findIndex((p: Iproduct) => {
      return p.id === id;
    });
    console.log(index);
    if (index < 0) {
      res.writeHead(404, {
        "content-type": "application/json",
      });
      res.end(
        JSON.stringify({ message: "the product is not found!", data: null }),
      );
    }
    products[index] = {
      id: products[index].id,
      ...body,
    };
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: "the product is updated",
        data: products[index],
      }),
    );
    insertproduct(products);
  }
};
