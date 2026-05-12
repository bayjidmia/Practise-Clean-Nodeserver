import type { IncomingMessage, ServerResponse } from "http";

export const productHandller = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("this is product root");
};
export const rootHandller = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.end(JSON.stringify({ message: "this is the root" }));
};
