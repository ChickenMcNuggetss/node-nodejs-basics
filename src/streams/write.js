import path from "path";
import { fileURLToPath } from "node:url";
import { createWriteStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");
  const stream = createWriteStream(filePath);
  process.stdin.on("data", (chunk) => {
    stream.write(chunk);
  });
  process.stdin.on("end", () => {
    stream.end();
  });

  stream.on("error", (err) => {
    console.log(err);
  });
};

await write();
