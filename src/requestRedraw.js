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

export default (element) => {
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
