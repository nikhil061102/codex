const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = async (format, code) => {
  const jobId = uuidv4();
  const outPath = path.join(outputPath, jobId);
  fs.writeFileSync(outPath, code);
  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executeCpp,
};