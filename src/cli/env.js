const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter((env) => env[0].includes("RSS_"))
    .map((env) => {
      return `${env[0]}=${env[1]}`;
    })
    .join("; ");
  console.log(result);
};

parseEnv();
