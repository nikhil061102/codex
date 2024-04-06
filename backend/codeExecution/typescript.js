const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) { fs.mkdirSync(outputPath, { recursive: true }); }

const executeTs = async (code, input) => {
  const jobId = uuidv4();
  const outPath = path.join(outputPath, jobId);
  fs.writeFileSync(outPath + '.ts', code);
  fs.writeFileSync(outPath + '.txt', input); // Write input to a file
  
  return new Promise((resolve, reject) => {
    exec(
      `ts-node ${outPath}.ts < ${outPath}.txt > ${outPath}output.txt`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        } else {
          resolve(stdout);
        }
      }
    );
  });
};


module.exports = { executeTs };
