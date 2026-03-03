# Домашнє завдання 7 – Робота з DOM, події та форми

## Опис
Сьоме домашнє завдання з курсу JavaScript.  
Практика роботи з DOM-елементами, подіями (`submit`, `input`, `click`), створенням елементів динамічно, делегуванням (необов’язково), отриманням даних з форм, валідацією та маніпуляцією стилів.

## Технології / стек
- JavaScript (ES6+)
- Робота з DOM (`querySelector`, `querySelectorAll`, `getElementById`)
- Властивості та методи елементів (`textContent`, `children`, `classList`, `style`, `value`, `elements`)
- Створення елементів (`createElement`, `append`, `appendChild`, `insertAdjacentHTML`)
- Події (`addEventListener`, `submit`, `input`, `click`)
- Обробка форм (`preventDefault`, `reset`)
- Робота з рядками (`trim`)
- Генерація випадкових кольорів (hex)
- CSS Flexbox (для оформлення галереї)

## Функціонал

| Файл           | Завдання                              | Що робить                                                                                   |
|----------------|---------------------------------------|---------------------------------------------------------------------------------------------|
| task-1.js      | Підрахунок категорій та елементів     | Виводить кількість категорій (`li.item`) та для кожної — назву (`h2`) і кількість вкладених `li` |
| task-2.js      | Галерея зображень                     | Створює динамічну галерею з 6 зображень за масивом `images`, додає за одну операцію в DOM, використовує flex |
| task-3.js      | Живе оновлення імені в привітанні     | При введенні тексту в `#name-input` оновлює `#name-output`, обробляє пробіли, fallback → "Anonymous" |
| task-4.js      | Форма логіну з валідацією             | Перевіряє заповненість полів, збирає дані в об’єкт, виводить в консоль, очищає форму після submit |
| task-5.js      | Зміна кольору фону                    | При кліку генерує випадковий hex-колір, змінює `background-color` body та виводить значення в `.color` |

## Приклади роботи (очікуване виведення в консоль)

Завдання 1 – категорії
Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
text### 

Завдання 2 – галерея
Галерея з 6 `<li><img></li>` успішно додається в `ul.gallery` одним append/insertAdjacentHTML.

Завдання 3 – привітання
При введенні "   Artem   " → span виводить "Artem"
При очищенні або тільки пробіли → "Anonymous"
text
Завдання 4 – форма логіну
```js
// Успішний сабміт
{
  email: "test@example.com",
  password: "qwerty123"
}
// Якщо порожнє поле → alert("All form fields must be filled in")
```
Завдання 5 – зміна кольору
textBackground color: #4a90e2    ← приклад кольору в span
<body style="background-color: rgb(74, 144, 226);">  ← приклад фактичного rgb

## Посилання

Демо [посилання](https://artemilliushchenko.github.io/goit-js-hw-07/)
