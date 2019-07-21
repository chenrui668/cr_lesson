import { createElement, render, renderDOM } from './element';

let virtualDOM = createElement('ul', {
    class: 'list'
}, [
    createElement('li', {
        class: 'item'
    }, ['孙悟空']),
    createElement('li', {
        class: 'item'
    }, ['猪八戒']),
    createElement('li', {
        class: 'item'
    }, ['沙和尚'])
]);

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));
console.log(virtualDOM);