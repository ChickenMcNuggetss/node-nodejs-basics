import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import path from "path";

const calculateHash = async () => {
  const filePath = path.join("src/hash/files/fileToCalculateHashFor.txt");
  const stream = createReadStream(filePath);
  const hash = createHash("sha256");
  for await (const chunk of stream) {
    hash.update(chunk);
  }
  console.log(hash.digest("hex"));
};

await calculateHash();
