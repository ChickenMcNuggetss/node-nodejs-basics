const parseArgs = () => {
  const neededArgs = process.argv.slice(2);
  const propNames = neededArgs.filter((arg) => arg.includes("--"));
  const values = neededArgs.filter((arg) => !arg.includes("--"));
  const result = [];
  for (let i = 0; i < propNames.length; i++) {
    result.push(`${propNames[i].slice(2)} is ${values[i]}`);
  }
  console.log(result.join(", "));
};

parseArgs();
