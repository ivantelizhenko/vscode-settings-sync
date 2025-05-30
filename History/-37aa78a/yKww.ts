export function toggleBookStatus(status: string): string {
  return status === 'active' ? 'deactivated' : 'active';
}
