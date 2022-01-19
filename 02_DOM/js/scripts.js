/**
 * Return query selector
 * @param selector : string
 * @returns {HTMLElement}
 */
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function loaded(callback) {
    return document.addEventListener('DOMContentLoaded', callback);
}

function create(el) {
    return document.createElement(el);
}

function click(el, callback) {
    return el.addEventListener('click', callback);
}

function keypress(key, callback) {
    return document.addEventListener('keypress', (e) => {
        if(e.key === key) {
            callback();
        }
    })
}
