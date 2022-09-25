export class Component {
  constructor(props) {
    this.props = props;
  }
}

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

const makeProps = (props, children) => {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
};

export const createElement = (tag, props, ...children) => {
  props = props || {};

  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));

      return instance.render();
    }
    if (children.length > 0) {
      return tag(makeProps(props, children));
    }
    return tag(props);
  }

  return { tag, props, children };
};

export const render = (virtualDOM, container) => {
  container.appendChild(createDOM(virtualDOM));
};
