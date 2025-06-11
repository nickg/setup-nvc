const versionRegex = /^r?(\d+\.\d+\.\d+)$/;

export function validateVersion(input: string): string | null {
  const trimmed = input.trim();

  if (trimmed == "latest") {
    return trimmed;
  }

  const match = versionRegex.exec(trimmed);
  return match ? match[1] : null;
}
