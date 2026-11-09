// Часть 5. Примеры ошибок A–D
// Этот файл не участвует в основной сборке.

// A
let count = 0;
count = "10";

// B
function add(x: number, y: number): number {
  return x + y;
}
add(2);

// C
let name: string = null;

// D
function greet(name: string): string {
  console.log("Привет, " + name);
}
