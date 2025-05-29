// content.js
import Element from "../constructor/Element.js";
import { cardData, smallCardData } from "../data.js";

// Большие карточки
const cards = cardData.map((el) => new Element("div", "card", el).get());

// Маленькие карточки
const smallCards = smallCardData.map((el) =>
  new Element("div", "small-card", el).get()
);

// Контейнеры
const leftPanel = new Element("div", "left-panel", cards).get();
const rightPanel = new Element("div", "right-panel", smallCards).get();

// Общий контейнер
const contentContainer = new Element("div", "content-container", [
  leftPanel,
  rightPanel,
]);

export default contentContainer;