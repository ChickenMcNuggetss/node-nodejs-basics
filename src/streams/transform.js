import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const res = chunk.toString().split("").reverse().join("");
      callback(null, `${res}\n`);
    }
  })
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
