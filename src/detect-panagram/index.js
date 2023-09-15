export function isPangram(string) {
  if (string.trim() !== "") {
    const test_string = new Set([
      ...string.replace(/[^a-zA-Z]/g, "").toLowerCase(),
    ]);
    if (test_string.size === 26) return true;
  }
  return false;
}
