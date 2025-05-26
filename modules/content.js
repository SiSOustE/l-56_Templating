import Element from "../constructor/Element.js";

// Большие карточки
const cardData = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
];
const cards = cardData.map(el => new Element('div', 'card', el).get())

// Маленькие карточки
const smallCardData = [
  'Small 1',
  'Small 2',
  'Small 3',
  /*'Small 4',
  'Small 5',*/
]
const smallCards = smallCardData.map((el) => new Element('div', 'small-card',el).get()
)

// Контейнеры для частей
const leftPanel = new Element('div', 'left-panel', cards).get()
const rightPanel = new Element('div', 'right-panel', smallCards).get()

// Общий контейнер
const contentContainer = new Element(
  'div',
  'content-container',
  [leftPanel, rightPanel]
)

export default contentContainer;