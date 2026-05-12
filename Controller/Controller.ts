import type { IncomingMessage, ServerResponse } from "http";

export const productHandller = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("this is product root");
};
