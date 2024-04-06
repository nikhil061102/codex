const asyncHandler = require("express-async-handler");
const { executeCpp } = require('../codeExecution/cpp');
const { executePy } = require('../codeExecution/py');
const { executeC } = require('../codeExecution/c');
const { executeRust } = require('../codeExecution/rust');
const { executeGolang } = require('../codeExecution/golang');
const { executeJs } = require('../codeExecution/javascript');
const { executeTs } = require('../codeExecution/typescript');

const submit = asyncHandler(async (req, res) => {
  let { code, input, format } = req.body;
  if (!code.trim()) {
    return res.status(400).json({ err: "Empty code is not allowed!" });
  }
  if (!input.trim()) {
    return res.status(400).json({ err: "Empty input is not allowed!" });
  }
  

  switch (format) {
    case "c":
      await executeC(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    case "cpp":
      executeCpp(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    case "py":
      executePy(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    case "ts":
      executeTs(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    case "js":
      executeJs(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    case "go":
      executeGolang(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    case "rs":
      executeRust(code, input)
      .then(output => res.status(200).json({ output: output }))
      .catch(err => console.log(err));
      break;
    default:
      return res.status(400).json({ err: "Invalid format." });
  }
});

module.exports = { submit };