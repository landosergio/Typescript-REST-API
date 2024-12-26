import * as express from "express";
import { root } from "./routes/root";
import config from "./config/config";
import { logger } from "./logging/logger";

const app = express();

function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  let { port } = config;

  if (!port) {
    port = 9000;
  }

  app.listen(port, () => logger.info(`Server listening on port ${port}`));
}

setupExpress();
startServer();
