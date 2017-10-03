(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* globals CustomEvent */
let loadjs = require('distjs').loadjs

const build = name => {
  // Fast Load for Chrome (avoids skip before render)
  const getChromeVersion = (force) => {
    if (force) return true
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
    return raw ? parseInt(raw[2], 10) > 59 : false
  }
  if (getChromeVersion()) require('./')

  window.addEventListener('WebComponentsReady', () => {
    let event = new CustomEvent(`${name}-ready`, require('./'))
    window.dispatchEvent(event)
  })
  const polyfill = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.12/webcomponents-loader.js'
  loadjs([{async: true, url: polyfill}])
}

build(require('./package.json').name)

},{"./":2,"./package.json":5,"distjs":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
exports.loadjs = require('load-js')

},{"load-js":4}],4:[function(require,module,exports){
(function(global, factory) {
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    // CommonJS support
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // Do AMD support
    define(["loadJS"], factory);
  } else {
    // Do browser support
    global.loadJS = factory();
  }
})(this, function() {
  var cache = {};
  var head = document.getElementsByTagName("head")[0] || document.documentElement;

  function exec(options) {
    if (typeof options === "string") {
      options = {
        url: options
      };
    }

    var cacheId = options.id || options.url;
    var cacheEntry = cache[cacheId];

    if (cacheEntry) {
      console.log("load-js: cache hit", cacheId);
      return cacheEntry;
    }
    else if (options.allowExternal !== false) {
      var el = getScriptById(options.id) || getScriptByUrl(options.url);

      if (el) {
        var promise = Promise.resolve(el);

        if (cacheId) {
          cache[cacheId] = promise;
        }

        return promise;
      }
    }

    if (!options.url && !options.text) {
      throw new Error("load-js: must provide a url or text to load");
    }

    var pending = (options.url ? loadScript : runScript)(head, createScript(options));

    if (cacheId && options.cache !== false) {
      cache[cacheId] = pending;
    }

    return pending;
  }

  function runScript(head, script) {
    head.appendChild(script);
    return Promise.resolve(script);
  }

  function loadScript(head, script) {
    return new Promise(function(resolve, reject) {
      // Handle Script loading
      var done = false;

      // Attach handlers for all browsers.
      //
      // References:
      // http://stackoverflow.com/questions/4845762/onload-handler-for-script-tag-in-internet-explorer
      // http://stevesouders.com/efws/script-onload.php
      // https://www.html5rocks.com/en/tutorials/speed/script-loading/
      //
      script.onload = script.onreadystatechange = function() {
        if (!done && (!script.readyState || script.readyState === "loaded" || script.readyState === "complete")) {
          done = true;

          // Handle memory leak in IE
          script.onload = script.onreadystatechange = null;
          resolve(script);
        }
      };

      script.onerror = reject;

      head.appendChild(script);
    });
  }

  function createScript(options) {
    var script = document.createElement("script");
    script.charset = options.charset || "utf-8";
    script.type = options.type || "text/javascript";
    script.async = !!options.async;
    script.id = options.id || options.url;
    script.loadJS = "watermark";

    if (options.url) {
      script.src = options.url;
    }

    if (options.text) {
      script.text = options.text;
    }

    return script;
  }

  function getScriptById(id) {
    var script = id && document.getElementById(id);

    if (script && script.loadJS !== "watermark") {
      console.warn("load-js: duplicate script with id:", id);
      return script;
    }
  }

  function getScriptByUrl(url) {
    var script = url && document.querySelector("script[src='" + url + "']");

    if (script && script.loadJS !== "watermark") {
      console.warn("load-js: duplicate script with url:", url);
      return script;
    }
  }

  return function load(items) {
    return items instanceof Array ?
      Promise.all(items.map(exec)) :
      exec(items);
  }
});

},{}],5:[function(require,module,exports){
module.exports={
  "name": "d3fc-element",
  "description": "Custom HTML elements that make it easier to create responsive visualisations that integrate easily with other UI frameworks (e.g. React, Angular)",
  "license": "MIT",
  "version": "0.0.1",
  "keywords": [
    "d3",
    "d3fc",
    "element"
  ],
  "homepage": "https://github.com/JackG188/d3fc-element",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/JackG188/d3fc-element"
  },
  "scripts": {
    "bundle": "d3fc-scripts bundle",
    "test": "eslint examples/**/*.js && d3fc-scripts test",
    "dist": "distjs",
    "semantic-release": "semantic-release pre && npm publish && semantic-release post"
  },
  "devDependencies": {
    "babel-polyfill": "^6.13.0",
    "d3": "^4.1.1",
    "d3fc-series": "^2.0.1",
    "d3fc-extent": "^2.2.0",
    "d3fc-scripts": "^1.6.1"
  },
  "dependencies": {
    "d3-selection": "^1.0.2",
    "distjs": "^1.0.0",
    "http-server": "^0.10.0"
  }
}

},{}]},{},[1]);
