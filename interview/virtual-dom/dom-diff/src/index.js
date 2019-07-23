import { createElement, render, renderDOM } from './element';

import diff from './diff';
import patch from './patch';

let virtualDOM = createElement('ul', {
    class: 'list-group'
}, [
    createElement('li', { class: 'item' }, ['a']),
    createElement('li', { class: 'item' }, ['b']),
    createElement('li', { class: 'item' }, ['c']),
])

let virtualDOM2 = createElement('ul', {
    class: 'list-group'
}, [
    createElement('li', { class: 'item' }, ['1']),
    createElement('li', { class: 'item' }, ['2']),
    // createElement('li', { class: 'item' }, ['3']),
    createElement('p', {class: 'page'}, [
        createElement('a', {class: 'link', href:'https://www.baidu.com', target: '_blank'}, ['so'])
    ])
])

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));

let patches = diff(virtualDOM, virtualDOM2);
patch(el, patches);