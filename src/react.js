export const createDOM = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props)?.forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  node.children?.forEach((child) => {
    element.appendChild(createDOM(child));
  });

  return element;
};

export const createElement = (tag, props, ...children) => {
  props = props || {};
  return { tag, props, children };
};

export const render = (virtualDOM, container) => {
  container.appendChild(createDOM(virtualDOM));
};
