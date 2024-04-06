const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) { fs.mkdirSync(outputPath, { recursive: true }); }

const executeCpp = async (code, input) => {
  const jobId = uuidv4();
  const outPath = path.join(outputPath, jobId);
  const cppFilePath = `${outPath}.cpp`;
  const exeFilePath = `${outPath}.exe`;
  const inputFile = `${outPath}.txt`;
  const outputFile = `${outPath}output.txt`;

  // Write code to .cpp file and input to .txt file
  fs.writeFileSync(cppFilePath, code);
  fs.writeFileSync(inputFile, input);

  const compilePromise = new Promise((resolve, reject) => {
    exec(`g++ ${cppFilePath} -o ${exeFilePath}`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stderr });
      } else {
        resolve(exeFilePath);
      }
    });
  });

  return compilePromise.then((exePath) => {
    return new Promise((resolve, reject) => {
      exec(`${exePath} < ${inputFile} > ${outputFile}`, (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        } else {
          resolve(fs.readFileSync(outputFile, "utf8"));
        }
      });
    });
  });
};

module.exports = { executeCpp };