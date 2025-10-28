import { unlinkSync } from 'node:fs';

const remove = async () => {
  try {
    unlinkSync("src/fs/files/fileToRemove.txt");
  } catch(err) {
    throw Error("FS operation failed");
  }
};

await remove();
