import fs from "fs";
import path from "path";

const Path = "./src/Database/Db.json";

const filepath = path.join(process.cwd(), Path);

export const readprodouct = () => {
  const products = fs.readFileSync(filepath, "utf-8");
  console.log(products);
  return JSON.parse(products);
};

export const insertproduct = (paload: any) => {
  fs.writeFileSync(filepath, JSON.stringify(paload));
};
