import os from "node:os";
import { Worker } from "node:worker_threads";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const workerPath = path.join(__dirname, "worker.js");
  const numberOfCPU = os.cpus().length;
  const workerPromises = [];

  for (let i = 0; i < numberOfCPU; i++) {
    workerPromises.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath);

        worker.on("message", (result) => {
          resolve({ status: "resolved", data: result });
          worker.terminate();
        });

        worker.on("error", (err) => {
          resolve({ status: "error", data: null });
          worker.terminate();
        });

        worker.postMessage(10 + i);
      })
    );
  }

  try {
    console.log(await Promise.all(workerPromises));
  } catch (err) {
    throw Error(err);
  }
};

await performCalculations();
