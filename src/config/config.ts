import * as dotenv from "dotenv";

dotenv.config();

export default {
  node_env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT),
  logger_level: process.env.LOGGER_LEVEL,
};
