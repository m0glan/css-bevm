export class String {
  static isBlank(s: string | undefined): boolean {
    return s == null || s.trim() === '';
  }
}