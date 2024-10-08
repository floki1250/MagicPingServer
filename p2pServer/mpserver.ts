import { ExpressPeerServer } from "peer";
import express from "express";

const app = express();
const server = app.listen(443);

// PeerJS server middleware
const peerServer = ExpressPeerServer(server, {
  path: "/",
  allow_discovery: true,
});

app.use("/peerjs", peerServer);

export default fromNodeMiddleware(app);
