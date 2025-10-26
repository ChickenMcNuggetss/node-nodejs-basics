import { writeFile } from 'node:fs/promises';

const create = async () => {
  try {
    await writeFile('src/fs/files/fresh.txt', 'I am fresh and young', {flag: 'wx'});
  } catch {
    throw Error('FS operation failed');
  }
};

await create();
