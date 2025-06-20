About project

1. index.html
<div class="wrapper" id="root"></div>
Это точка входа для всей страницы.
В этот контейнер будут динамически добавляться все компоненты (header, content, footer и sidebar при необходимости).

JS Архитектура: основные файлы
2. Element.js — универсальный конструктор DOM-элементов
Класс Element служит строительным блоком для создания DOM-элементов с поддержкой классов и дочерних элементов.

Конструктор:

new Element(tag, classes, children)

Параметры:
tag: HTML-тег ('div', 'span', и т.д.)
classes: строка классов ('header card')
children: содержимое (текст или массив элементов)

Методы:
init() — создаёт DOM-элемент
appendChildren() — добавляет дочерние элементы
get() — возвращает готовый DOM-элемент
append(element) / remove() — упрощают работу с DOM

3. Wrapper.js — точка монтирования всех компонентов
Класс Wrapper отвечает за вставку созданных элементов в корневой контейнер (#root).

Класс Wrapper отвечает за вставку созданных элементов в корневой контейнер (#root).

Логика:
Находит элемент по rootId
Для каждого элемента в children вызывает метод .get()
Добавляет результат в DOM

4. Компоненты (модули)
header.js; footer.js;
content.js

Как всё работает вместе?

Шаг 1: Запуск в main.js

import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";

new Wrapper('#root', [header, content, footer]);

Шаг 2: Wrapper получает DOM-элемент #root и вставляет в него:
Header — <div class="header">Header</div>
Content — <div class="content">[<div class="card">...</div>, ...]</div>
Footer — <div class="footer">Footer</div>