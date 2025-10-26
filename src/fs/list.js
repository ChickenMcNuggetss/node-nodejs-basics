import { readdir, stat } from "node:fs/promises";
import path from "path";

const list = async () => {
  try {
    const dirPath = path.join("src/fs/files");
    const files = await readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileInfo = await stat(filePath);
      if (fileInfo.isFile()) {
        console.log(file);
      }
    }
  } catch (err) {
    console.log(err);
    throw Error("FS operation failed");
  }
};

await list();
