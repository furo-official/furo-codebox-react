var crypto = require("crypto");

export const hashPlainText = async (plaintext) => {
  var shasum = crypto.createHash("sha256");
  shasum.update(plaintext);
  var output = shasum.digest("base64");
  return output;
};
