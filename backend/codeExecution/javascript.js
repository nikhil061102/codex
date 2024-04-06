const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) { fs.mkdirSync(outputPath, { recursive: true }); }

const executeJs = async (code, input) => {
  const jobId = uuidv4();
  const outPath = path.join(outputPath, jobId);
  const jsFilePath = `${outPath}.js`;
  const inputFile = `${outPath}.txt`;
  const outputFile = `${outPath}output.txt`;

  // Write code to .js file and input to .txt file
  fs.writeFileSync(jsFilePath, code);
  fs.writeFileSync(inputFile, input);

  return new Promise((resolve, reject) => {
    exec(`node ${jsFilePath} < ${inputFile} > ${outputFile}`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stderr });
      } else {
        resolve(fs.readFileSync(outputFile, "utf8"));
      }
    });
  });
};

module.exports = { executeJs };
