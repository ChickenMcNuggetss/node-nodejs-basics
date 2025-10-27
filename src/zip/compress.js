import { fileURLToPath } from "node:url";
import process from "node:process";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = createGzip();
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(__dirname, "files", "archive.gz");
  const streamSource = createReadStream(filePath);
  const streamDestination = createWriteStream(destinationPath);

  pipeline(streamSource, gzip, streamDestination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
