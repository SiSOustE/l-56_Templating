import Element from "./constructor/Element.js";
import Wrapper from "./constructor/Wrapper.js";

// Импорт модулей
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebar from "./modules/sidebar.js";

// Создаем контейнер для content + sidebar
const container = new Element("div", "container", [
	content.get(),	// Вызываем get(), чтобы получить HTML Element
	sidebar.get()		// То же самое для Sidebar
]);

// Передаем в Wrapper: Header → Container → Footer
new Wrapper("#root", [header, container, footer]);