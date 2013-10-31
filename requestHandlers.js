function start() {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'uplpad' was called.");
}

exports.start = start;
exports.upload = upload;
