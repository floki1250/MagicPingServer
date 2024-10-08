import { ExpressPeerServer } from "peer";
import express from "express";
const customGenerationFunction = () =>
  (Math.random().toString(36) + "0000000000000000000").substr(2, 16);
const app = express();
const server = app.listen(3000);

// PeerJS server middleware
const peerServer = ExpressPeerServer(server, {
  path: "/",
  allow_discovery: true,
  generateClientId: customGenerationFunction,
});

app.use("/peerjs", peerServer);

export default fromNodeMiddleware(app);
