import { formatPrice, clamp, logMessage, repeat, describeUser, returnUndefined } from "./functions";

// Правильные вызовы функций из части 3
console.log(formatPrice(1234.5));
console.log(clamp(15, 0, 10));
logMessage("Привет");
console.log(repeat("abc"));
console.log(describeUser("Иван"));
console.log(describeUser("Иван", 25));
console.log(returnUndefined());
