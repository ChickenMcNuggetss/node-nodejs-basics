import { fork } from "node:child_process";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, "files", "script.js");
  const cp = fork(filePath, args);

  process.stdin.on("data", (chunk) => {
    cp.send(chunk);
  });

  cp.on("message", (message) => {
    process.stdout.write(message);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
