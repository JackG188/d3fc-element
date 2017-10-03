/* eslint-env browser */

const key = '__d3fc-elements__';

const get = (element) => element[key] || {};

const set = (element, data) => void (element[key] = data);

const clear = (element) => delete element[key];

const find = (element) => element.tagName === 'D3FC-GROUP'
    ? [element, ...element.querySelectorAll('d3fc-canvas, d3fc-group, d3fc-svg')]
    : [element];

const measure = (element) => {
    if (element.tagName === 'D3FC-GROUP') {
        return;
    }
    const { width: previousWidth, height: previousHeight } = get(element);
    const width = element.clientWidth;
    const height = element.clientHeight;
    const resized = width !== previousWidth || height !== previousHeight;
    set(element, { width, height, resized });
};

const resize = (element) => {
    if (element.tagName === 'D3FC-GROUP') {
        return;
    }
    const detail = get(element);
    const node = element.childNodes[0];
    node.setAttribute('width', detail.width);
    node.setAttribute('height', detail.height);
    const event = new CustomEvent('measure', { detail });
    element.dispatchEvent(event);
};

const draw = (element) => {
    const detail = get(element);
    const event = new CustomEvent('draw', { detail });
    element.dispatchEvent(event);
};

const redraw = (elements) => {
    const allElements = elements.map(find)
        .reduce((a, b) => a.concat(b));
    allElements.forEach(measure);
    allElements.forEach(resize);
    allElements.forEach(draw);
};





const getQueue = (element) => get(element.ownerDocument).queue || [];

const setQueue = (element, queue) => {
    let { requestId } = get(element.ownerDocument);
    if (requestId == null) {
        requestId = requestAnimationFrame(() => {
            // This seems like a weak way of retrieving the queue
            // but I can't see an edge case at the minute...
            const queue = getQueue(element);
            redraw(queue);
            clearQueue(element);
        });
    }
    set(element.ownerDocument, { queue, requestId });
};

const clearQueue = (element) => clear(element.ownerDocument);

const isDescendentOf = (element, ancestor) => {
    let node = element;
    do {
        if (node.parentNode === ancestor) {
            return true;
        }
        // eslint-disable-next-line no-cond-assign
    } while (node = node.parentNode);
    return false;
};

const requestRedraw = (element) => {
    const queue = getQueue(element);
    const queueContainsElement = queue.indexOf(element) > -1;
    if (queueContainsElement) {
        return;
    }
    const queueContainsAncestor = queue.some(queuedElement => isDescendentOf(element, queuedElement));
    if (queueContainsAncestor) {
        return;
    }
    const queueExcludingDescendents = queue.filter(queuedElement => !isDescendentOf(queuedElement, element));
    queueExcludingDescendents.push(element);
    setQueue(element, queueExcludingDescendents);
};

const element = (createNode) => class extends HTMLElement {

    constructor() {
        super();
        this.__node__ = createNode();
    }

    connectedCallback() {
        this.appendChild(this.__node__);
    }

    requestRedraw() {
        requestRedraw(this);
    }
};

const Canvas = element(() => document.createElement('canvas'));

class Group extends HTMLElement {

    requestRedraw() {
        requestRedraw(this);
    }

    get autoResize() {
        return this.hasAttribute('auto-resize') && this.getAttribute('auto-resize') !== 'false';
    }

    set autoResize(autoResize) {
        if (autoResize && !this.autoResize) {
            this.setAttribute('auto-resize', '');
        } else if (!autoResize && this.autoResize) {
            this.removeAttribute('auto-resize');
        }
        this.updateAutoResize();
    }

    updateAutoResize() {
        if (this.autoResize) {
            if (this.__autoResizeListener__ == null) {
                this.__autoResizeListener__ = () => requestRedraw(this);
            }
            addEventListener('resize', this.__autoResizeListener__);
        } else {
            removeEventListener('resize', this.__autoResizeListener__);
        }
    }

    static get observedAttributes() {
        return ['auto-resize'];
    }

    attributeChangedCallback(name) {
        switch (name) {
            case 'auto-resize':
                this.updateAutoResize();
                break;
        }
    }
};

const Svg = element(() => document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

const css = `d3fc-canvas,d3fc-svg{position:relative;display:block}\
d3fc-canvas>canvas,d3fc-svg>svg{position:absolute;top:0;right:0;left:0;bottom: 0}\
d3fc-svg>svg{overflow:visible}`;

const styleElement = document.createElement('style');
styleElement.setAttribute('type', 'text/css');

document.querySelector('head')
  .appendChild(styleElement);

if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
} else {
    styleElement.textContent += css;
}

customElements.define('d3fc-canvas', Canvas);
customElements.define('d3fc-group', Group);
customElements.define('d3fc-svg', Svg);
