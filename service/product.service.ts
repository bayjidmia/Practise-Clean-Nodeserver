import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd(), "./src/Database/Db.json");

export const readprodouct = () => {
  const products = fs.readFileSync(filepath);
  console.log(products.toString());
};
