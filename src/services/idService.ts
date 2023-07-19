let idCounter = 0;

export function generateId(): number {
  idCounter++;
  return idCounter;
}
