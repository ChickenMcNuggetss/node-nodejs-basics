import fs from "node:fs";

const rename = async () => {
  fs.rename(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md",
    (err) => {
      if (err) throw Error("FS operation failed");
    }
  );
};

await rename();
