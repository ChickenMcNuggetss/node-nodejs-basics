import { cp } from "node:fs/promises";

const copy = async () => {
  try {
    await cp("./src/fs/files", "./src/fs/files_copy", {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (err) {
    console.log(err);
    throw Error("FS operation failed");
  }
};

await copy();
