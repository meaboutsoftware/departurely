function hasOnlyWhitespaces(input: string) {
  return input.trim() === "";
}

export function isLocationValid(location: string): boolean {
  return /^[A-Za-zÀ-ÿ ]+$/u.test(location) && !hasOnlyWhitespaces(location);
}
