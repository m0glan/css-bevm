export class Exception {
  static throwInvalidArgument(key: string, value: any) {
    throw `Invalid value '${value}' for argument '${key}'.`;
  }
}