import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library";

// Часть 2.1 — переменные с типами
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

// Часть 2.2 — TypeScript сам определяет тип
let city = "Москва"; // string
let population = 12000000; // number
let isCapital = true; // boolean

// Часть 2.4 — исправление ошибки с null
let userName: string | null = null;

// Часть 4 — библиотека
const books = [
  createBook("1984", "Джордж Оруэлл", 1949),
  createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
  createBook("Преступление и наказание", "Фёдор Достоевский", 1866)
];

if (books[0] && books[2]) {
  books[0] = markAsRead(books[0]);
  books[2] = markAsRead(books[2]);
}

books.forEach(book => console.log(getBookInfo(book)));
console.log(`Прочитано книг: ${countReadBooks(books)}`);
