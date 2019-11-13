export const rmSpace = (str: string): string => {
  return str.replace(/ /igm, '');
};

export const $ = (selector, parent = document) => {
  return parent.querySelector(selector);
};

export const $$ = (selector, parent = document) => {
  return Array.from(parent.querySelectorAll(selector));
};

export const setStyle = (el: HTMLElement, styles: { [propName: string]: string }): void => {
  for (const [k, v] of Object.entries(styles)) {
    el.style[k] = v;
  }
};
