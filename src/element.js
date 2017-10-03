/* eslint-env browser */

import requestRedraw from './requestRedraw';

export default (createNode) => class extends HTMLElement {

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
