export function generateSubpaths(path: string): string[] {
  const segments = path.split('/').filter(Boolean);
  const result: string[] = [];

  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += '/' + segments[i];
    result.push(currentPath);
  }

  return result;
}
