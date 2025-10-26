import { writeFile } from 'node:fs/promises';

const create = async () => {
  try {
    await writeFile('src/fs/files/fresh.txt', 'I am fresh and young', {flag: 'wx'});
  } catch (err) {
    console.log(err);
    throw Error('FS operation failed');
  }
};

await create();
