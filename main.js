// main.js
import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebar from "./modules/sidebar.js";

// Создаем контейнер для content + sidebar
const container = new Element("div", "container", [content, sidebar]);

new Wrapper("#root", [header, container, footer]);