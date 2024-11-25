const http = require("http");
require("dotenv").config();

const portsParams = process.env.PORTS; // get the ports from the env variable
let ports = [8080]; // default port
if (portsParams) {
  console.log("Environment parameters detected");
  console.log(process.env.PORTS);
  ports = portsParams.split(",");
} else {
  console.error("Can not read port parameters");
  console.error("Go with default params");
  console.error("Port 8080");
}

/**
 * Handle the income request and reply with a ok
 * @param req
 * @param res
 */
const handleRequest = function (req, res) {
  const port = this.address().port;
  console.log("REQ TO PORT:", port);
  res.write("OK FROM PORT " + String(port)); // return response
  res.end();
};

// Detect if there are any problems with the params
if (ports.length === 0) {
  console.error("Can not read port parameters");
  return;
}

const servers = {}; // stores the servers
let i = ports.length; // iterate over the ports in the array
while (i--) {
  const port = Number(ports[i].trim()); // remove spaces from the port
  const key = "server_" + String(i); // create a unique key for the map
  servers[key] = http.createServer(handleRequest).listen(port); // assign the server to the port
  console.log("SERVER LISTENING ON", ports[i]);
}
