import { CustomError } from "./custom-error";
export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super("not authorized");
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "not authorized" }];
  }
}
