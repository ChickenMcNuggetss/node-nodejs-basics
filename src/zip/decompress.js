import { fileURLToPath } from "node:url";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { promisify } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const gunzip = createGunzip();
  const archivePath = path.join(__dirname, "files", "archive.gz");
  const streamSource = createReadStream(archivePath);
  const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");
  const streamDestination = createWriteStream(destinationPath);

  const pipe = promisify(pipeline);

  try {
    await pipe(streamSource, gunzip, streamDestination);
  } catch(err) {
    throw Error(err);
  }
};

await decompress();
