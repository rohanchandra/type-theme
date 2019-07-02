const elements = [...document.getElementsByTagName('script')];
const mathElements = elements.filter((elem) => elem.type.includes('math/tex'));

for (let element of mathElements) {
  // Regex needed to workaround the conflict between Kramdown and KaTeX.
  // See: https://github.com/rohanchandra/type-theme/issues/47
  const textToRender = (element.innerText || element.textContent).replace(/%.*/g, '');
  const katexElement = document.createElement('span');
  const isDisplayMode = element.type.includes('mode=display');
  katexElement.className = isDisplayMode ? "math-display" : "math-inline";
  katex.render(textToRender, katexElement, { displayMode: isDisplayMode });
  element.parentNode.insertBefore(katexElement, element);
}