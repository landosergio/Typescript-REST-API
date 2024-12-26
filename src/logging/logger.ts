import * as winston from "winston";
import config from "../config/config";

export const logger = winston.createLogger({
  level: config.logger_level,
  format: winston.format.json({
    space: 4,
  }),
  transports: [
    new winston.transports.File({
      filename: "logs/all.log",
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
  ],
});

if (config.node_env != "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
