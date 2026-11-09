export function formatPrice(value: number): string {
  return value.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " ₽";
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function logMessage(message: string): void {
  console.log(message);
}

export function repeat(text: string, times: number = 2): string {
  return text.repeat(times);
}

export function describeUser(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name}, возраст: ${age}`;
  }
  return name;
}

export function returnUndefined(): undefined {
  return undefined;
}
