# Практическая работа №1 — TypeScript

Простая работа по основам TypeScript: типы переменных, функции, ошибки компилятора и мини-проект «Библиотека».

## Содержание

- `src/index.ts` — переменные и работа с книгами
- `src/functions.ts` — типизированные функции
- `src/functions-demo.ts` — правильные вызовы функций
- `src/library.ts` — функции мини-проекта «Библиотека»
- `examples/` — ошибочные и исправленные примеры для частей 2, 3 и 5
- `ОТВЕТЫ.md` — объяснение ошибок и ответы на вопросы

## Запуск

Нужен Node.js и npm. В терминале в папке проекта:

```bash
npm install
npx tsc
node dist/index.js
```

Проверить функции отдельно:

```bash
node dist/functions-demo.js
```

## Проверка ошибок TypeScript

В этих примерах ошибки сделаны специально. Они не мешают запускать основную программу.

```bash
npx tsc --strict --noEmit --skipLibCheck --target esnext --module nodenext examples/type-errors.ts
npx tsc --strict --noEmit --skipLibCheck --target esnext --module nodenext examples/function-errors.ts
npx tsc --strict --noEmit --skipLibCheck --target esnext --module nodenext examples/analysis-errors.ts
```

Тексты ошибок записаны в `ОТВЕТЫ.md`.

## Результат работы библиотеки

```text
«1984», Джордж Оруэлл, 1949 — прочитана
«Мастер и Маргарита», Михаил Булгаков, 1967 — не прочитана
«Преступление и наказание», Фёдор Достоевский, 1866 — прочитана
Прочитано книг: 2
```
