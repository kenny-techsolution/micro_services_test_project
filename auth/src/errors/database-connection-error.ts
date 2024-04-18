import { CustomError } from "./custom-error";
export class DataBaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "database connection error. ";
  constructor() {
    super("database connection error");
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
