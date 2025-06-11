const versionRegex = /^r?(\d+\.\d+\.\d+)$/;

export function validateVersion(input: string): string | null {
  if (input == "latest") {
    return input;
  }

  const match = versionRegex.exec(input);
  return match ? match[1] : null;
}
