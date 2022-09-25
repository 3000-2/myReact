export const createDOM = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  if (node.props) {
    Object.entries(node.props)?.forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  node.children?.forEach((child) => {
    element.appendChild(createDOM(child));
  });

  return element;
};

export const createElement = (tag, props, ...children) => {
  props = props || {};

  if (typeof tag === "function") {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      });
    }
    return tag(props);
  }

  return { tag, props, children };
};

export const render = (virtualDOM, container) => {
  container.appendChild(createDOM(virtualDOM));
};
