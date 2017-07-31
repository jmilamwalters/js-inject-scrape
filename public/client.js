'use strict';

function getHost() {
  return 'http://localhost:3000';
}

function select(el) {
  return document.querySelectorAll(el);
}

function createEl(el, props = {}) {
  const element = document.createElement(el);
  Object.keys(props).map(prop => {
    return (element[prop] = props[prop]);
  });
  return element;
}

function httpGetAsync(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      return cb(xhr.responseText);
    }
  };
  xhr.open('GET', url, true); // true for asynchronous
  xhr.send();
}

function scrapePrice() {
  return document.getElementById('the-price-numeral').textContent;
}

function renderButton({ title, url, price }) {
  const anchor = createEl('hr');
  const link = createEl('a', { href: url });
  const button = createEl('button', { textContent: `${price} - ${title}` });
  link.appendChild(button);
  return document.body.appendChild(link);
}

function handleOnSuccess(res) {
  const config = Object.assign({}, JSON.parse(res), { price: scrapePrice() });
  renderButton(config);
}

// Execute setup.
function setUpPage() {
  httpGetAsync(`${getHost()}/button`, handleOnSuccess);
}

setUpPage();
