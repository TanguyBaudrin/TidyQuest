export function getHealthColor(h: number): string {
  return h >= 70 ? '#5CB85C' : h >= 40 ? '#E8A838' : '#E25A5A';
}

export function getHealthBg(h: number): string {
  return h >= 70 ? '#EDF7ED' : h >= 40 ? '#FFF8EC' : '#FDECEC';
}

export function getHealthLabel(h: number): string {
  return h >= 70 ? 'Healthy' : h >= 40 ? 'Needs attention' : 'Critical';
}

export function getRoomHealth(tasks: Array<{ health: number; effort: number }>): number {
  const totalEffort = tasks.reduce((s, t) => s + t.effort, 0);
  if (totalEffort === 0) return 100;
  return Math.round(tasks.reduce((s, t) => s + t.health * t.effort, 0) / totalEffort);
}
