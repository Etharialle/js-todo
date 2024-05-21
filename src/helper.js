export function newElement(tag, addClass, content, id) {
    const element = document.createElement(tag);
    if (addClass) element.className = addClass;
    if (id) element.id = id;
    if (content) element.textContent = content;
    return element;
}
