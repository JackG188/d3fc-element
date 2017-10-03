(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('d3-selection')) :
  typeof define === 'function' && define.amd ? define(['d3-selection'], factory) :
  (factory(global.d3));
}(this, (function (d3Selection) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function (e, t) {
  "use strict";
  function Ht() {
    var e = wt.splice(0, wt.length);Et = 0;while (e.length) {
      e.shift().call(null, e.shift());
    }
  }function Bt(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Jt(e[n], t);
    }
  }function jt(e) {
    for (var t = 0, n = e.length, r; t < n; t++) {
      r = e[t], Pt(r, A[It(r)]);
    }
  }function Ft(e) {
    return function (t) {
      ut(t) && (Jt(t, e), O.length && Bt(t.querySelectorAll(O), e));
    };
  }function It(e) {
    var t = ht.call(e, "is"),
        n = e.nodeName.toUpperCase(),
        r = _.call(L, t ? N + t.toUpperCase() : T + n);return t && -1 < r && !qt(n, t) ? -1 : r;
  }function qt(e, t) {
    return -1 < O.indexOf(e + '[is="' + t + '"]');
  }function Rt(e) {
    var t = e.currentTarget,
        n = e.attrChange,
        r = e.attrName,
        i = e.target,
        s = e[y] || 2,
        o = e[w] || 3;kt && (!i || i === t) && t[h] && r !== "style" && (e.prevValue !== e.newValue || e.newValue === "" && (n === s || n === o)) && t[h](r, n === s ? null : e.prevValue, n === o ? null : e.newValue);
  }function Ut(e) {
    var t = Ft(e);return function (e) {
      wt.push(t, e.target), Et && clearTimeout(Et), Et = setTimeout(Ht, 1);
    };
  }function zt(e) {
    Ct && (Ct = !1, e.currentTarget.removeEventListener(S, zt)), O.length && Bt((e.target || n).querySelectorAll(O), e.detail === l ? l : a), st && Vt();
  }function Wt(e, t) {
    var n = this;vt.call(n, e, t), Lt.call(n, { target: n });
  }function Xt(e, t) {
    nt(e, t), Mt ? Mt.observe(e, yt) : (Nt && (e.setAttribute = Wt, e[o] = Ot(e), e[u](x, Lt)), e[u](E, Rt)), e[m] && kt && (e.created = !0, e[m](), e.created = !1);
  }function Vt() {
    for (var e, t = 0, n = at.length; t < n; t++) {
      e = at[t], M.contains(e) || (n--, at.splice(t--, 1), Jt(e, l));
    }
  }function $t(e) {
    throw new Error("A " + e + " type is already registered");
  }function Jt(e, t) {
    var n,
        r = It(e),
        i;-1 < r && (Dt(e, A[r]), r = 0, t === a && !e[a] ? (e[l] = !1, e[a] = !0, i = "connected", r = 1, st && _.call(at, e) < 0 && at.push(e)) : t === l && !e[l] && (e[a] = !1, e[l] = !0, i = "disconnected", r = 1), r && (n = e[t + f] || e[i + f]) && n.call(e));
  }function Kt() {}function Qt(e, t, r) {
    var i = r && r[c] || "",
        o = t.prototype,
        u = tt(o),
        a = t.observedAttributes || j,
        f = { prototype: u };ot(u, m, { value: function value() {
        if (Q) Q = !1;else if (!this[W]) {
          this[W] = !0, new t(this), o[m] && o[m].call(this);var e = G[Z.get(t)];(!V || e.create.length > 1) && Zt(this);
        }
      } }), ot(u, h, { value: function value(e) {
        -1 < _.call(a, e) && o[h].apply(this, arguments);
      } }), o[d] && ot(u, p, { value: o[d] }), o[v] && ot(u, g, { value: o[v] }), i && (f[c] = i), e = e.toUpperCase(), G[e] = { constructor: t, create: i ? [i, et(e)] : [e] }, Z.set(t, e), n[s](e.toLowerCase(), f), en(e), Y[e].r();
  }function Gt(e) {
    var t = G[e.toUpperCase()];return t && t.constructor;
  }function Yt(e) {
    return typeof e == "string" ? e : e && e.is || "";
  }function Zt(e) {
    var t = e[h],
        n = t ? e.attributes : j,
        r = n.length,
        i;while (r--) {
      i = n[r], t.call(e, i.name || i.nodeName, null, i.value || i.nodeValue);
    }
  }function en(e) {
    return e = e.toUpperCase(), e in Y || (Y[e] = {}, Y[e].p = new K(function (t) {
      Y[e].r = t;
    })), Y[e].p;
  }function tn() {
    X && delete e.customElements, B(e, "customElements", { configurable: !0, value: new Kt() }), B(e, "CustomElementRegistry", { configurable: !0, value: Kt });for (var t = function t(_t2) {
      var r = e[_t2];if (r) {
        e[_t2] = function (t) {
          var i, s;return t || (t = this), t[W] || (Q = !0, i = G[Z.get(t.constructor)], s = V && i.create.length === 1, t = s ? Reflect.construct(r, j, i.constructor) : n.createElement.apply(n, i.create), t[W] = !0, Q = !1, s || Zt(t)), t;
        }, e[_t2].prototype = r.prototype;try {
          r.prototype.constructor = e[_t2];
        } catch (i) {
          z = !0, B(r, W, { value: e[_t2] });
        }
      }
    }, r = i.get(/^HTML[A-Z]*[a-z]/), o = r.length; o--; t(r[o])) {}n.createElement = function (e, t) {
      var n = Yt(t);return n ? gt.call(this, e, et(n)) : gt.call(this, e);
    }, St || (Tt = !0, n[s](""));
  }var n = e.document,
      r = e.Object,
      i = function (e) {
    var t = /^[A-Z]+[a-z]/,
        n = function n(e) {
      var t = [],
          n;for (n in s) {
        e.test(n) && t.push(n);
      }return t;
    },
        i = function i(e, t) {
      t = t.toLowerCase(), t in s || (s[e] = (s[e] || []).concat(t), s[t] = s[t.toUpperCase()] = e);
    },
        s = (r.create || r)(null),
        o = {},
        u,
        a,
        f,
        l;for (a in e) {
      for (l in e[a]) {
        f = e[a][l], s[l] = f;for (u = 0; u < f.length; u++) {
          s[f[u].toLowerCase()] = s[f[u].toUpperCase()] = l;
        }
      }
    }return o.get = function (r) {
      return typeof r == "string" ? s[r] || (t.test(r) ? [] : "") : n(r);
    }, o.set = function (n, r) {
      return t.test(n) ? i(n, r) : i(r, n), o;
    }, o;
  }({ collections: { HTMLAllCollection: ["all"], HTMLCollection: ["forms"], HTMLFormControlsCollection: ["elements"], HTMLOptionsCollection: ["options"] }, elements: { Element: ["element"], HTMLAnchorElement: ["a"], HTMLAppletElement: ["applet"], HTMLAreaElement: ["area"], HTMLAttachmentElement: ["attachment"], HTMLAudioElement: ["audio"], HTMLBRElement: ["br"], HTMLBaseElement: ["base"], HTMLBodyElement: ["body"], HTMLButtonElement: ["button"], HTMLCanvasElement: ["canvas"], HTMLContentElement: ["content"], HTMLDListElement: ["dl"], HTMLDataElement: ["data"], HTMLDataListElement: ["datalist"], HTMLDetailsElement: ["details"], HTMLDialogElement: ["dialog"], HTMLDirectoryElement: ["dir"], HTMLDivElement: ["div"], HTMLDocument: ["document"], HTMLElement: ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"], HTMLEmbedElement: ["embed"], HTMLFieldSetElement: ["fieldset"], HTMLFontElement: ["font"], HTMLFormElement: ["form"], HTMLFrameElement: ["frame"], HTMLFrameSetElement: ["frameset"], HTMLHRElement: ["hr"], HTMLHeadElement: ["head"], HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"], HTMLHtmlElement: ["html"], HTMLIFrameElement: ["iframe"], HTMLImageElement: ["img"], HTMLInputElement: ["input"], HTMLKeygenElement: ["keygen"], HTMLLIElement: ["li"], HTMLLabelElement: ["label"], HTMLLegendElement: ["legend"], HTMLLinkElement: ["link"], HTMLMapElement: ["map"], HTMLMarqueeElement: ["marquee"], HTMLMediaElement: ["media"], HTMLMenuElement: ["menu"], HTMLMenuItemElement: ["menuitem"], HTMLMetaElement: ["meta"], HTMLMeterElement: ["meter"], HTMLModElement: ["del", "ins"], HTMLOListElement: ["ol"], HTMLObjectElement: ["object"], HTMLOptGroupElement: ["optgroup"], HTMLOptionElement: ["option"], HTMLOutputElement: ["output"], HTMLParagraphElement: ["p"], HTMLParamElement: ["param"], HTMLPictureElement: ["picture"], HTMLPreElement: ["pre"], HTMLProgressElement: ["progress"], HTMLQuoteElement: ["blockquote", "q", "quote"], HTMLScriptElement: ["script"], HTMLSelectElement: ["select"], HTMLShadowElement: ["shadow"], HTMLSlotElement: ["slot"], HTMLSourceElement: ["source"], HTMLSpanElement: ["span"], HTMLStyleElement: ["style"], HTMLTableCaptionElement: ["caption"], HTMLTableCellElement: ["td", "th"], HTMLTableColElement: ["col", "colgroup"], HTMLTableElement: ["table"], HTMLTableRowElement: ["tr"], HTMLTableSectionElement: ["thead", "tbody", "tfoot"], HTMLTemplateElement: ["template"], HTMLTextAreaElement: ["textarea"], HTMLTimeElement: ["time"], HTMLTitleElement: ["title"], HTMLTrackElement: ["track"], HTMLUListElement: ["ul"], HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"], HTMLVideoElement: ["video"] }, nodes: { Attr: ["node"], Audio: ["audio"], CDATASection: ["node"], CharacterData: ["node"], Comment: ["#comment"], Document: ["#document"], DocumentFragment: ["#document-fragment"], DocumentType: ["node"], HTMLDocument: ["#document"], Image: ["img"], Option: ["option"], ProcessingInstruction: ["node"], ShadowRoot: ["#shadow-root"], Text: ["#text"], XMLDocument: ["xml"] } });(typeof t === "undefined" ? "undefined" : _typeof(t)) != "object" && (t = { type: t || "auto" });var s = "registerElement",
      o = "__" + s + (e.Math.random() * 1e5 >> 0),
      u = "addEventListener",
      a = "attached",
      f = "Callback",
      l = "detached",
      c = "extends",
      h = "attributeChanged" + f,
      p = a + f,
      d = "connected" + f,
      v = "disconnected" + f,
      m = "created" + f,
      g = l + f,
      y = "ADDITION",
      b = "MODIFICATION",
      w = "REMOVAL",
      E = "DOMAttrModified",
      S = "DOMContentLoaded",
      x = "DOMSubtreeModified",
      T = "<",
      N = "=",
      C = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
      k = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
      L = [],
      A = [],
      O = "",
      M = n.documentElement,
      _ = L.indexOf || function (e) {
    for (var t = this.length; t-- && this[t] !== e;) {}return t;
  },
      D = r.prototype,
      P = D.hasOwnProperty,
      H = D.isPrototypeOf,
      B = r.defineProperty,
      j = [],
      F = r.getOwnPropertyDescriptor,
      I = r.getOwnPropertyNames,
      q = r.getPrototypeOf,
      R = r.setPrototypeOf,
      U = !!r.__proto__,
      z = !1,
      W = "__dreCEv1",
      X = e.customElements,
      V = !/^force/.test(t.type) && !!(X && X.define && X.get && X.whenDefined),
      $ = r.create || r,
      J = e.Map || function () {
    var t = [],
        n = [],
        r;return { get: function get(e) {
        return n[_.call(t, e)];
      }, set: function set(e, i) {
        r = _.call(t, e), r < 0 ? n[t.push(e) - 1] = i : n[r] = i;
      } };
  },
      K = e.Promise || function (e) {
    function i(e) {
      n = !0;while (t.length) {
        t.shift()(e);
      }
    }var t = [],
        n = !1,
        r = { "catch": function _catch() {
        return r;
      }, then: function then(e) {
        return t.push(e), n && setTimeout(i, 1), r;
      } };return e(i), r;
  },
      Q = !1,
      G = $(null),
      Y = $(null),
      Z = new J(),
      et = function et(e) {
    return e.toLowerCase();
  },
      tt = r.create || function sn(e) {
    return e ? (sn.prototype = e, new sn()) : this;
  },
      nt = R || (U ? function (e, t) {
    return e.__proto__ = t, e;
  } : I && F ? function () {
    function e(e, t) {
      for (var n, r = I(t), i = 0, s = r.length; i < s; i++) {
        n = r[i], P.call(e, n) || B(e, n, F(t, n));
      }
    }return function (t, n) {
      do {
        e(t, n);
      } while ((n = q(n)) && !H.call(n, t));return t;
    };
  }() : function (e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }),
      rt = e.MutationObserver || e.WebKitMutationObserver,
      it = (e.HTMLElement || e.Element || e.Node).prototype,
      st = !H.call(it, M),
      ot = st ? function (e, t, n) {
    return e[t] = n.value, e;
  } : B,
      ut = st ? function (e) {
    return e.nodeType === 1;
  } : function (e) {
    return H.call(it, e);
  },
      at = st && [],
      ft = it.attachShadow,
      lt = it.cloneNode,
      ct = it.dispatchEvent,
      ht = it.getAttribute,
      pt = it.hasAttribute,
      dt = it.removeAttribute,
      vt = it.setAttribute,
      mt = n.createElement,
      gt = mt,
      yt = rt && { attributes: !0, characterData: !0, attributeOldValue: !0 },
      bt = rt || function (e) {
    Nt = !1, M.removeEventListener(E, bt);
  },
      wt,
      Et = 0,
      St = s in n && !/^force-all/.test(t.type),
      xt = !0,
      Tt = !1,
      Nt = !0,
      Ct = !0,
      kt = !0,
      Lt,
      At,
      Ot,
      Mt,
      _t,
      Dt,
      Pt;St || (R || U ? (Dt = function Dt(e, t) {
    H.call(t, e) || Xt(e, t);
  }, Pt = Xt) : (Dt = function Dt(e, t) {
    e[o] || (e[o] = r(!0), Xt(e, t));
  }, Pt = Dt), st ? (Nt = !1, function () {
    var e = F(it, u),
        t = e.value,
        n = function n(e) {
      var t = new CustomEvent(E, { bubbles: !0 });t.attrName = e, t.prevValue = ht.call(this, e), t.newValue = null, t[w] = t.attrChange = 2, dt.call(this, e), ct.call(this, t);
    },
        r = function r(e, t) {
      var n = pt.call(this, e),
          r = n && ht.call(this, e),
          i = new CustomEvent(E, { bubbles: !0 });vt.call(this, e, t), i.attrName = e, i.prevValue = n ? r : null, i.newValue = t, n ? i[b] = i.attrChange = 1 : i[y] = i.attrChange = 0, ct.call(this, i);
    },
        i = function i(e) {
      var t = e.currentTarget,
          n = t[o],
          r = e.propertyName,
          i;n.hasOwnProperty(r) && (n = n[r], i = new CustomEvent(E, { bubbles: !0 }), i.attrName = n.name, i.prevValue = n.value || null, i.newValue = n.value = t[r] || null, i.prevValue == null ? i[y] = i.attrChange = 0 : i[b] = i.attrChange = 1, ct.call(t, i));
    };e.value = function (e, s, u) {
      e === E && this[h] && this.setAttribute !== r && (this[o] = { className: { name: "class", value: this.className } }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", i)), t.call(this, e, s, u);
    }, B(it, u, e);
  }()) : rt || (M[u](E, bt), M.setAttribute(o, 1), M.removeAttribute(o), Nt && (Lt = function Lt(e) {
    var t = this,
        n,
        r,
        i;if (t === e.target) {
      n = t[o], t[o] = r = Ot(t);for (i in r) {
        if (!(i in n)) return At(0, t, i, n[i], r[i], y);if (r[i] !== n[i]) return At(1, t, i, n[i], r[i], b);
      }for (i in n) {
        if (!(i in r)) return At(2, t, i, n[i], r[i], w);
      }
    }
  }, At = function At(e, t, n, r, i, s) {
    var o = { attrChange: e, currentTarget: t, attrName: n, prevValue: r, newValue: i };o[s] = e, Rt(o);
  }, Ot = function Ot(e) {
    for (var t, n, r = {}, i = e.attributes, s = 0, o = i.length; s < o; s++) {
      t = i[s], n = t.name, n !== "setAttribute" && (r[n] = t.value);
    }return r;
  })), n[s] = function (t, r) {
    p = t.toUpperCase(), xt && (xt = !1, rt ? (Mt = function (e, t) {
      function n(e, t) {
        for (var n = 0, r = e.length; n < r; t(e[n++])) {}
      }return new rt(function (r) {
        for (var i, s, o, u = 0, a = r.length; u < a; u++) {
          i = r[u], i.type === "childList" ? (n(i.addedNodes, e), n(i.removedNodes, t)) : (s = i.target, kt && s[h] && i.attributeName !== "style" && (o = ht.call(s, i.attributeName), o !== i.oldValue && s[h](i.attributeName, i.oldValue, o)));
        }
      });
    }(Ft(a), Ft(l)), _t = function _t(e) {
      return Mt.observe(e, { childList: !0, subtree: !0 }), e;
    }, _t(n), ft && (it.attachShadow = function () {
      return _t(ft.apply(this, arguments));
    })) : (wt = [], n[u]("DOMNodeInserted", Ut(a)), n[u]("DOMNodeRemoved", Ut(l))), n[u](S, zt), n[u]("readystatechange", zt), it.cloneNode = function (e) {
      var t = lt.call(this, !!e),
          n = It(t);return -1 < n && Pt(t, A[n]), e && O.length && jt(t.querySelectorAll(O)), t;
    });if (Tt) return Tt = !1;-2 < _.call(L, N + p) + _.call(L, T + p) && $t(t);if (!C.test(p) || -1 < _.call(k, p)) throw new Error("The type " + t + " is invalid");var i = function i() {
      return o ? n.createElement(f, p) : n.createElement(f);
    },
        s = r || D,
        o = P.call(s, c),
        f = o ? r[c].toUpperCase() : p,
        p,
        d;return o && -1 < _.call(L, T + f) && $t(f), d = L.push((o ? N : T) + p) - 1, O = O.concat(O.length ? "," : "", o ? f + '[is="' + t.toLowerCase() + '"]' : f), i.prototype = A[d] = P.call(s, "prototype") ? s.prototype : tt(it), O.length && Bt(n.querySelectorAll(O), a), i;
  }, n.createElement = gt = function gt(e, t) {
    var r = Yt(t),
        i = r ? mt.call(n, e, et(r)) : mt.call(n, e),
        s = "" + e,
        o = _.call(L, (r ? N : T) + (r || s).toUpperCase()),
        u = -1 < o;return r && (i.setAttribute("is", r = r.toLowerCase()), u && (u = qt(s.toUpperCase(), r))), kt = !n.createElement.innerHTMLHelper, u && Pt(i, A[o]), i;
  }), Kt.prototype = { constructor: Kt, define: V ? function (e, t, n) {
      if (n) Qt(e, t, n);else {
        var r = e.toUpperCase();G[r] = { constructor: t, create: [r] }, Z.set(t, r), X.define(e, t);
      }
    } : Qt, get: V ? function (e) {
      return X.get(e) || Gt(e);
    } : Gt, whenDefined: V ? function (e) {
      return K.race([X.whenDefined(e), en(e)]);
    } : en };if (!X || /^force/.test(t.type)) tn();else if (!t.noBuiltIn) try {
    (function (t, r, i) {
      r[c] = "a", t.prototype = tt(HTMLAnchorElement.prototype), t.prototype.constructor = t, e.customElements.define(i, t, r);if (ht.call(n.createElement("a", { is: i }), "is") !== i || V && ht.call(new t(), "is") !== i) throw r;
    })(function on() {
      return Reflect.construct(HTMLAnchorElement, [], on);
    }, {}, "document-register-element-a");
  } catch (nn) {
    tn();
  }if (!t.noBuiltIn) try {
    mt.call(n, "a", "a");
  } catch (rn) {
    et = function et(e) {
      return { is: e.toLowerCase() };
    };
  }
})(window);

var key = '__d3fc-elements__';

var get$2 = function get$2(element) {
  return element[key] || {};
};

var set$2 = function set$2(element, data) {
  return void (element[key] = data);
};

var clear = function clear(element) {
  return delete element[key];
};

/* eslint-env browser */

var find = function find(element) {
    return element.tagName === 'D3FC-GROUP' ? [element].concat(toConsumableArray(element.querySelectorAll('d3fc-canvas, d3fc-group, d3fc-svg'))) : [element];
};

var measure = function measure(element) {
    if (element.tagName === 'D3FC-GROUP') {
        return;
    }

    var _data$get = get$2(element),
        previousWidth = _data$get.width,
        previousHeight = _data$get.height;

    var width = element.clientWidth;
    var height = element.clientHeight;
    var resized = width !== previousWidth || height !== previousHeight;
    set$2(element, { width: width, height: height, resized: resized });
};

var resize = function resize(element) {
    if (element.tagName === 'D3FC-GROUP') {
        return;
    }
    var detail = get$2(element);
    var node = element.childNodes[0];
    node.setAttribute('width', detail.width);
    node.setAttribute('height', detail.height);
    var event = new CustomEvent('measure', { detail: detail });
    element.dispatchEvent(event);
};

var draw = function draw(element) {
    var detail = get$2(element);
    var event = new CustomEvent('draw', { detail: detail });
    element.dispatchEvent(event);
};

var redraw = (function (elements) {
    var allElements = elements.map(find).reduce(function (a, b) {
        return a.concat(b);
    });
    allElements.forEach(measure);
    allElements.forEach(resize);
    allElements.forEach(draw);
});

/* eslint-env browser */

var getQueue = function getQueue(element) {
    return get$2(element.ownerDocument).queue || [];
};

var setQueue = function setQueue(element, queue) {
    var _data$get = get$2(element.ownerDocument),
        requestId = _data$get.requestId;

    if (requestId == null) {
        requestId = requestAnimationFrame(function () {
            // This seems like a weak way of retrieving the queue
            // but I can't see an edge case at the minute...
            var queue = getQueue(element);
            redraw(queue);
            clearQueue(element);
        });
    }
    set$2(element.ownerDocument, { queue: queue, requestId: requestId });
};

var clearQueue = function clearQueue(element) {
    return clear(element.ownerDocument);
};

var isDescendentOf = function isDescendentOf(element, ancestor) {
    var node = element;
    do {
        if (node.parentNode === ancestor) {
            return true;
        }
        // eslint-disable-next-line no-cond-assign
    } while (node = node.parentNode);
    return false;
};

var _requestRedraw = (function (element) {
    var queue = getQueue(element);
    var queueContainsElement = queue.indexOf(element) > -1;
    if (queueContainsElement) {
        return;
    }
    var queueContainsAncestor = queue.some(function (queuedElement) {
        return isDescendentOf(element, queuedElement);
    });
    if (queueContainsAncestor) {
        return;
    }
    var queueExcludingDescendents = queue.filter(function (queuedElement) {
        return !isDescendentOf(queuedElement, element);
    });
    queueExcludingDescendents.push(element);
    setQueue(element, queueExcludingDescendents);
});

/* eslint-env browser */

var init = function init(instance, node) {
    instance.__node__ = node;
};

var element = (function (createNode) {
    return function (_HTMLElement) {
        inherits(_class, _HTMLElement);

        // https://github.com/WebReflection/document-register-element/tree/v1.0.10#skipping-the-caveat-through-extends
        // eslint-disable-next-line
        function _class(_) {
            var _this, _ret;

            classCallCheck(this, _class);
            return _ret = (init(_ = (_this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, _)), _this), createNode()), _), possibleConstructorReturn(_this, _ret);
        }

        createClass(_class, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                this.appendChild(this.__node__);
            }
        }, {
            key: 'requestRedraw',
            value: function requestRedraw() {
                _requestRedraw(this);
            }
        }]);
        return _class;
    }(HTMLElement);
});

var Canvas = element(function () {
  return document.createElement('canvas');
});

/* eslint-env browser */

var _class = function (_HTMLElement) {
    inherits(_class, _HTMLElement);

    // https://github.com/WebReflection/document-register-element/tree/v1.0.10#skipping-the-caveat-through-extends
    // eslint-disable-next-line
    function _class(_) {
        var _this, _ret;

        classCallCheck(this, _class);
        return _ret = (_ = (_this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, _)), _this), _), possibleConstructorReturn(_this, _ret);
    }

    createClass(_class, [{
        key: 'requestRedraw',
        value: function requestRedraw() {
            _requestRedraw(this);
        }
    }, {
        key: 'updateAutoResize',
        value: function updateAutoResize() {
            var _this2 = this;

            if (this.autoResize) {
                if (this.__autoResizeListener__ == null) {
                    this.__autoResizeListener__ = function () {
                        return _requestRedraw(_this2);
                    };
                }
                addEventListener('resize', this.__autoResizeListener__);
            } else {
                removeEventListener('resize', this.__autoResizeListener__);
            }
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name) {
            switch (name) {
                case 'auto-resize':
                    this.updateAutoResize();
                    break;
            }
        }
    }, {
        key: 'autoResize',
        get: function get() {
            return this.hasAttribute('auto-resize') && this.getAttribute('auto-resize') !== 'false';
        },
        set: function set(autoResize) {
            if (autoResize && !this.autoResize) {
                this.setAttribute('auto-resize', '');
            } else if (!autoResize && this.autoResize) {
                this.removeAttribute('auto-resize');
            }
            this.updateAutoResize();
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return ['auto-resize'];
        }
    }]);
    return _class;
}(HTMLElement);

var Svg = element(function () {
  return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
});

// Adapted from https://github.com/substack/insert-css
var css = 'd3fc-canvas,d3fc-svg{position:relative;display:block}d3fc-canvas>canvas,d3fc-svg>svg{position:absolute;top:0;right:0;left:0;bottom: 0}d3fc-svg>svg{overflow:visible}';

var styleElement = document.createElement('style');
styleElement.setAttribute('type', 'text/css');

document.querySelector('head').appendChild(styleElement);

if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
} else {
    styleElement.textContent += css;
}

/* globals customElements */
customElements.define('d3fc-canvas', Canvas);
customElements.define('d3fc-group', _class);
customElements.define('d3fc-svg', Svg);

})));

},{"d3-selection":3}],2:[function(require,module,exports){
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

},{"./":1,"./package.json":6,"distjs":4}],3:[function(require,module,exports){
// https://d3js.org/d3-selection/ Version 1.1.0. Copyright 2017 Mike Bostock.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

var namespace = function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
};

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

var creator = function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
};

var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

var matcher$1 = matcher;

var filterEvents = {};

exports.event = null;

if (typeof document !== "undefined") {
  var element$1 = document.documentElement;
  if (!("onmouseenter" in element$1)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = exports.event; // Events can be reentrant (e.g., focus).
    exports.event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

var selection_on = function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
};

function customEvent(event1, listener, that, args) {
  var event0 = exports.event;
  event1.sourceEvent = exports.event;
  exports.event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event0;
  }
}

var sourceEvent = function() {
  var current = exports.event, source;
  while (source = current.sourceEvent) current = source;
  return current;
};

var point = function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};

var mouse = function(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
};

function none() {}

var selector = function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
};

var selection_select = function(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

function empty() {
  return [];
}

var selectorAll = function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
};

var selection_selectAll = function(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
};

var selection_filter = function(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

var sparse = function(update) {
  return new Array(update.length);
};

var selection_enter = function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
};

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

var constant = function(x) {
  return function() {
    return x;
  };
};

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

var selection_data = function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var selection_exit = function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
};

var selection_merge = function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
};

var selection_order = function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};

var selection_sort = function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
};

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

var selection_call = function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

var selection_nodes = function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
};

var selection_node = function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};

var selection_size = function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
};

var selection_empty = function() {
  return !this.node();
};

var selection_each = function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

var selection_attr = function(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
};

var defaultView = function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
};

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

var selection_style = function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
};

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

var selection_property = function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

var selection_classed = function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

var selection_text = function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

var selection_html = function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
};

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

var selection_raise = function() {
  return this.each(raise);
};

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

var selection_lower = function() {
  return this.each(lower);
};

var selection_append = function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
};

function constantNull() {
  return null;
}

var selection_insert = function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

var selection_remove = function() {
  return this.each(remove);
};

var selection_datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
};

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

var selection_dispatch = function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
};

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

var select = function(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
};

var selectAll = function(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
};

var touch = function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
};

var touches = function(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
};

exports.creator = creator;
exports.local = local;
exports.matcher = matcher$1;
exports.mouse = mouse;
exports.namespace = namespace;
exports.namespaces = namespaces;
exports.select = select;
exports.selectAll = selectAll;
exports.selection = selection;
exports.selector = selector;
exports.selectorAll = selectorAll;
exports.style = styleValue;
exports.touch = touch;
exports.touches = touches;
exports.window = defaultView;
exports.customEvent = customEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],4:[function(require,module,exports){
exports.loadjs = require('load-js')

},{"load-js":5}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
module.exports={
  "name": "d3fc-element",
  "description": "Custom HTML elements that make it easier to create responsive visualisations that integrate easily with other UI frameworks (e.g. React, Angular)",
  "license": "MIT",
  "keywords": [
    "d3",
    "d3fc",
    "element"
  ],
  "homepage": "https://github.com/d3fc/d3fc-element",
  "main" : "build/d3fc-element.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/d3fc/d3fc-element"
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
    "document-register-element": "^1.0.10"
  }
}

},{}]},{},[2]);
