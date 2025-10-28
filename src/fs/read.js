import { readFileSync } from "node:fs"
import path from "path";

const read = async () => {
  const pathFile = path.join("src/fs/files/fileToRead.txt");
  try {
    const content = readFileSync(pathFile, {encoding: "ascii"});
    console.log(content);
  } catch(err) {
    throw Error("FS operation failed");
  }
};

await read();
