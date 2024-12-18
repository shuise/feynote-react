/*! For license information please see pagenote.js.LICENSE.txt */ ! function(A, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e = t();
        for (var n in e)("object" == typeof exports ? exports : A)[n] = e[n]
    }
}(window, (function() {
    return function(A) {
        var t = {};

        function e(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return A[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        return e.m = A, e.c = t, e.d = function(A, t, n) {
            e.o(A, t) || Object.defineProperty(A, t, {
                enumerable: !0,
                get: n
            })
        }, e.r = function(A) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(A, "__esModule", {
                value: !0
            })
        }, e.t = function(A, t) {
            if (1 & t && (A = e(A)), 8 & t) return A;
            if (4 & t && "object" == typeof A && A && A.__esModule) return A;
            var n = Object.create(null);
            if (e.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: A
                }), 2 & t && "string" != typeof A)
                for (var r in A) e.d(n, r, function(t) {
                    return A[t]
                }.bind(null, r));
            return n
        }, e.n = function(A) {
            var t = A && A.__esModule ? function() {
                return A.default
            } : function() {
                return A
            };
            return e.d(t, "a", t), t
        }, e.o = function(A, t) {
            return Object.prototype.hasOwnProperty.call(A, t)
        }, e.p = "", e(e.s = 168)
    }([function(A, t, e) {
        "use strict";
        e.d(t, "j", (function() {
            return M
        })), e.d(t, "h", (function() {
            return R
        })), e.d(t, "e", (function() {
            return B
        })), e.d(t, "g", (function() {
            return B
        })), e.d(t, "b", (function() {
            return w
        })), e.d(t, "f", (function() {
            return d
        })), e.d(t, "a", (function() {
            return v
        })), e.d(t, "c", (function() {
            return k
        })), e.d(t, "d", (function() {
            return N
        })), e.d(t, "k", (function() {
            return b
        })), e.d(t, "i", (function() {
            return r
        }));
        var n, r, o, i, s, a, u, c = {},
            l = [],
            f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

        function p(A, t) {
            for (var e in t) A[e] = t[e];
            return A
        }

        function h(A) {
            var t = A.parentNode;
            t && t.removeChild(A)
        }

        function B(A, t, e) {
            var r, o, i, s = {};
            for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
            if (arguments.length > 2 && (s.children = arguments.length > 3 ? n.call(arguments, 2) : e), "function" == typeof A && null != A.defaultProps)
                for (i in A.defaultProps) void 0 === s[i] && (s[i] = A.defaultProps[i]);
            return g(A, s, r, o, null)
        }

        function g(A, t, e, n, i) {
            var s = {
                type: A,
                props: t,
                key: e,
                ref: n,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == i ? ++o : i
            };
            return null != r.vnode && r.vnode(s), s
        }

        function d() {
            return {
                current: null
            }
        }

        function w(A) {
            return A.children
        }

        function v(A, t) {
            this.props = A, this.context = t
        }

        function y(A, t) {
            if (null == t) return A.__ ? y(A.__, A.__.__k.indexOf(A) + 1) : null;
            for (var e; t < A.__k.length; t++)
                if (null != (e = A.__k[t]) && null != e.__e) return e.__e;
            return "function" == typeof A.type ? y(A) : null
        }

        function m(A) {
            var t, e;
            if (null != (A = A.__) && null != A.__c) {
                for (A.__e = A.__c.base = null, t = 0; t < A.__k.length; t++)
                    if (null != (e = A.__k[t]) && null != e.__e) {
                        A.__e = A.__c.base = e.__e;
                        break
                    }
                return m(A)
            }
        }

        function Q(A) {
            (!A.__d && (A.__d = !0) && i.push(A) && !C.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || s)(C)
        }

        function C() {
            for (var A; C.__r = i.length;) A = i.sort((function(A, t) {
                return A.__v.__b - t.__v.__b
            })), i = [], A.some((function(A) {
                var t, e, n, r, o, i;
                A.__d && (o = (r = (t = A).__v).__e, (i = t.__P) && (e = [], (n = p({}, r)).__v = r.__v + 1, S(i, r, n, t.__n, void 0 !== i.ownerSVGElement, null != r.__h ? [o] : null, e, null == o ? y(r) : o, r.__h), L(e, r), r.__e != o && m(r)))
            }))
        }

        function U(A, t, e, n, r, o, i, s, a, u) {
            var f, p, h, B, d, v, m, Q = n && n.__k || l,
                C = Q.length;
            for (e.__k = [], f = 0; f < t.length; f++)
                if (null != (B = e.__k[f] = null == (B = t[f]) || "boolean" == typeof B ? null : "string" == typeof B || "number" == typeof B || "bigint" == typeof B ? g(null, B, null, null, B) : Array.isArray(B) ? g(w, {
                        children: B
                    }, null, null, null) : B.__b > 0 ? g(B.type, B.props, B.key, null, B.__v) : B)) {
                    if (B.__ = e, B.__b = e.__b + 1, null === (h = Q[f]) || h && B.key == h.key && B.type === h.type) Q[f] = void 0;
                    else
                        for (p = 0; p < C; p++) {
                            if ((h = Q[p]) && B.key == h.key && B.type === h.type) {
                                Q[p] = void 0;
                                break
                            }
                            h = null
                        }
                    S(A, B, h = h || c, r, o, i, s, a, u), d = B.__e, (p = B.ref) && h.ref != p && (m || (m = []), h.ref && m.push(h.ref, null, B), m.push(p, B.__c || d, B)), null != d ? (null == v && (v = d), "function" == typeof B.type && null != B.__k && B.__k === h.__k ? B.__d = a = F(B, a, A) : a = E(A, B, h, Q, d, a), u || "option" !== e.type ? "function" == typeof e.type && (e.__d = a) : A.value = "") : a && h.__e == a && a.parentNode != A && (a = y(h))
                }
            for (e.__e = v, f = C; f--;) null != Q[f] && ("function" == typeof e.type && null != Q[f].__e && Q[f].__e == e.__d && (e.__d = y(n, f + 1)), D(Q[f], Q[f]));
            if (m)
                for (f = 0; f < m.length; f++) T(m[f], m[++f], m[++f])
        }

        function F(A, t, e) {
            var n, r;
            for (n = 0; n < A.__k.length; n++)(r = A.__k[n]) && (r.__ = A, t = "function" == typeof r.type ? F(r, t, e) : E(e, r, r, A.__k, r.__e, t));
            return t
        }

        function b(A, t) {
            return t = t || [], null == A || "boolean" == typeof A || (Array.isArray(A) ? A.some((function(A) {
                b(A, t)
            })) : t.push(A)), t
        }

        function E(A, t, e, n, r, o) {
            var i, s, a;
            if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
            else if (null == e || r != o || null == r.parentNode) A: if (null == o || o.parentNode !== A) A.appendChild(r), i = null;
                else {
                    for (s = o, a = 0;
                        (s = s.nextSibling) && a < n.length; a += 2)
                        if (s == r) break A;
                    A.insertBefore(r, o), i = o
                }
            return void 0 !== i ? i : r.nextSibling
        }

        function _(A, t, e) {
            "-" === t[0] ? A.setProperty(t, e) : A[t] = null == e ? "" : "number" != typeof e || f.test(t) ? e : e + "px"
        }

        function I(A, t, e, n, r) {
            var o;
            A: if ("style" === t)
                if ("string" == typeof e) A.style.cssText = e;
                else {
                    if ("string" == typeof n && (A.style.cssText = n = ""), n)
                        for (t in n) e && t in e || _(A.style, t, "");
                    if (e)
                        for (t in e) n && e[t] === n[t] || _(A.style, t, e[t])
                }
            else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in A ? t.toLowerCase().slice(2) : t.slice(2), A.l || (A.l = {}), A.l[t + o] = e, e ? n || A.addEventListener(t, o ? O : H, o) : A.removeEventListener(t, o ? O : H, o);
            else if ("dangerouslySetInnerHTML" !== t) {
                if (r) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in A) try {
                    A[t] = null == e ? "" : e;
                    break A
                } catch (A) {}
                "function" == typeof e || (null != e && (!1 !== e || "a" === t[0] && "r" === t[1]) ? A.setAttribute(t, e) : A.removeAttribute(t))
            }
        }

        function H(A) {
            this.l[A.type + !1](r.event ? r.event(A) : A)
        }

        function O(A) {
            this.l[A.type + !0](r.event ? r.event(A) : A)
        }

        function S(A, t, e, n, o, i, s, a, u) {
            var c, l, f, h, B, g, d, y, m, Q, C, F = t.type;
            if (void 0 !== t.constructor) return null;
            null != e.__h && (u = e.__h, a = t.__e = e.__e, t.__h = null, i = [a]), (c = r.__b) && c(t);
            try {
                A: if ("function" == typeof F) {
                        if (y = t.props, m = (c = F.contextType) && n[c.__c], Q = c ? m ? m.props.value : c.__ : n, e.__c ? d = (l = t.__c = e.__c).__ = l.__E : ("prototype" in F && F.prototype.render ? t.__c = l = new F(y, Q) : (t.__c = l = new v(y, Q), l.constructor = F, l.render = K), m && m.sub(l), l.props = y, l.state || (l.state = {}), l.context = Q, l.__n = n, f = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != F.getDerivedStateFromProps && (l.__s == l.state && (l.__s = p({}, l.__s)), p(l.__s, F.getDerivedStateFromProps(y, l.__s))), h = l.props, B = l.state, f) null == F.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
                        else {
                            if (null == F.getDerivedStateFromProps && y !== h && null != l.componentWillReceiveProps && l.componentWillReceiveProps(y, Q), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(y, l.__s, Q) || t.__v === e.__v) {
                                l.props = y, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach((function(A) {
                                    A && (A.__ = t)
                                })), l.__h.length && s.push(l);
                                break A
                            }
                            null != l.componentWillUpdate && l.componentWillUpdate(y, l.__s, Q), null != l.componentDidUpdate && l.__h.push((function() {
                                l.componentDidUpdate(h, B, g)
                            }))
                        }
                        l.context = Q, l.props = y, l.state = l.__s, (c = r.__r) && c(t), l.__d = !1, l.__v = t, l.__P = A, c = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (n = p(p({}, n), l.getChildContext())), f || null == l.getSnapshotBeforeUpdate || (g = l.getSnapshotBeforeUpdate(h, B)), C = null != c && c.type === w && null == c.key ? c.props.children : c, U(A, Array.isArray(C) ? C : [C], t, e, n, o, i, s, a, u), l.base = t.__e, t.__h = null, l.__h.length && s.push(l), d && (l.__E = l.__ = null), l.__e = !1
                    } else null == i && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = x(e.__e, t, e, n, o, i, s, u);
                    (c = r.diffed) && c(t)
            }
            catch (A) {
                t.__v = null, (u || null != i) && (t.__e = a, t.__h = !!u, i[i.indexOf(a)] = null), r.__e(A, t, e)
            }
        }

        function L(A, t) {
            r.__c && r.__c(t, A), A.some((function(t) {
                try {
                    A = t.__h, t.__h = [], A.some((function(A) {
                        A.call(t)
                    }))
                } catch (A) {
                    r.__e(A, t.__v)
                }
            }))
        }

        function x(A, t, e, r, o, i, s, a) {
            var u, l, f, p = e.props,
                B = t.props,
                g = t.type,
                d = 0;
            if ("svg" === g && (o = !0), null != i)
                for (; d < i.length; d++)
                    if ((u = i[d]) && (u === A || (g ? u.localName == g : 3 == u.nodeType))) {
                        A = u, i[d] = null;
                        break
                    }
            if (null == A) {
                if (null === g) return document.createTextNode(B);
                A = o ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, B.is && B), i = null, a = !1
            }
            if (null === g) p === B || a && A.data === B || (A.data = B);
            else {
                if (i = i && n.call(A.childNodes), l = (p = e.props || c).dangerouslySetInnerHTML, f = B.dangerouslySetInnerHTML, !a) {
                    if (null != i)
                        for (p = {}, d = 0; d < A.attributes.length; d++) p[A.attributes[d].name] = A.attributes[d].value;
                    (f || l) && (f && (l && f.__html == l.__html || f.__html === A.innerHTML) || (A.innerHTML = f && f.__html || ""))
                }
                if (function(A, t, e, n, r) {
                        var o;
                        for (o in e) "children" === o || "key" === o || o in t || I(A, o, null, e[o], n);
                        for (o in t) r && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || e[o] === t[o] || I(A, o, t[o], e[o], n)
                    }(A, B, p, o, a), f) t.__k = [];
                else if (d = t.props.children, U(A, Array.isArray(d) ? d : [d], t, e, r, o && "foreignObject" !== g, i, s, i ? i[0] : e.__k && y(e, 0), a), null != i)
                    for (d = i.length; d--;) null != i[d] && h(i[d]);
                a || ("value" in B && void 0 !== (d = B.value) && (d !== A.value || "progress" === g && !d) && I(A, "value", d, p.value, !1), "checked" in B && void 0 !== (d = B.checked) && d !== A.checked && I(A, "checked", d, p.checked, !1))
            }
            return A
        }

        function T(A, t, e) {
            try {
                "function" == typeof A ? A(t) : A.current = t
            } catch (A) {
                r.__e(A, e)
            }
        }

        function D(A, t, e) {
            var n, o;
            if (r.unmount && r.unmount(A), (n = A.ref) && (n.current && n.current !== A.__e || T(n, null, t)), null != (n = A.__c)) {
                if (n.componentWillUnmount) try {
                    n.componentWillUnmount()
                } catch (A) {
                    r.__e(A, t)
                }
                n.base = n.__P = null
            }
            if (n = A.__k)
                for (o = 0; o < n.length; o++) n[o] && D(n[o], t, "function" != typeof A.type);
            e || null == A.__e || h(A.__e), A.__e = A.__d = void 0
        }

        function K(A, t, e) {
            return this.constructor(A, e)
        }

        function M(A, t, e) {
            var o, i, s;
            r.__ && r.__(A, t), i = (o = "function" == typeof e) ? null : e && e.__k || t.__k, s = [], S(t, A = (!o && e || t).__k = B(w, null, [A]), i || c, c, void 0 !== t.ownerSVGElement, !o && e ? [e] : i ? null : t.firstChild ? n.call(t.childNodes) : null, s, !o && e ? e : i ? i.__e : t.firstChild, o), L(s, A)
        }

        function R(A, t) {
            M(A, t, R)
        }

        function k(A, t, e) {
            var r, o, i, s = p({}, A.props);
            for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
            return arguments.length > 2 && (s.children = arguments.length > 3 ? n.call(arguments, 2) : e), g(A.type, s, r || A.key, o || A.ref, null)
        }

        function N(A, t) {
            var e = {
                __c: t = "__cC" + u++,
                __: A,
                Consumer: function(A, t) {
                    return A.children(t)
                },
                Provider: function(A) {
                    var e, n;
                    return this.getChildContext || (e = [], (n = {})[t] = this, this.getChildContext = function() {
                        return n
                    }, this.shouldComponentUpdate = function(A) {
                        this.props.value !== A.value && e.some(Q)
                    }, this.sub = function(A) {
                        e.push(A);
                        var t = A.componentWillUnmount;
                        A.componentWillUnmount = function() {
                            e.splice(e.indexOf(A), 1), t && t.call(A)
                        }
                    }), A.children
                }
            };
            return e.Provider.__ = e.Consumer.contextType = e
        }
        n = l.slice, r = {
            __e: function(A, t) {
                for (var e, n, r; t = t.__;)
                    if ((e = t.__c) && !e.__) try {
                        if ((n = e.constructor) && null != n.getDerivedStateFromError && (e.setState(n.getDerivedStateFromError(A)), r = e.__d), null != e.componentDidCatch && (e.componentDidCatch(A), r = e.__d), r) return e.__E = e
                    } catch (t) {
                        A = t
                    }
                    throw A
            }
        }, o = 0, v.prototype.setState = function(A, t) {
            var e;
            e = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof A && (A = A(p({}, e), this.props)), A && p(e, A), null != A && this.__v && (t && this.__h.push(t), Q(this))
        }, v.prototype.forceUpdate = function(A) {
            this.__v && (this.__e = !0, A && this.__h.push(A), Q(this))
        }, v.prototype.render = w, i = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0, u = 0
    }, function(A, t, e) {
        "use strict";
        e.r(t), e.d(t, "version", (function() {
            return R
        })), e.d(t, "Children", (function() {
            return h
        })), e.d(t, "render", (function() {
            return _
        })), e.d(t, "hydrate", (function() {
            return I
        })), e.d(t, "unmountComponentAtNode", (function() {
            return j
        })), e.d(t, "createPortal", (function() {
            return U
        })), e.d(t, "createFactory", (function() {
            return k
        })), e.d(t, "cloneElement", (function() {
            return P
        })), e.d(t, "isValidElement", (function() {
            return N
        })), e.d(t, "findDOMNode", (function() {
            return G
        })), e.d(t, "PureComponent", (function() {
            return a
        })), e.d(t, "memo", (function() {
            return u
        })), e.d(t, "forwardRef", (function() {
            return f
        })), e.d(t, "flushSync", (function() {
            return W
        })), e.d(t, "unstable_batchedUpdates", (function() {
            return V
        })), e.d(t, "StrictMode", (function() {
            return J
        })), e.d(t, "Suspense", (function() {
            return d
        })), e.d(t, "SuspenseList", (function() {
            return y
        })), e.d(t, "lazy", (function() {
            return v
        })), e.d(t, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", (function() {
            return M
        }));
        var n = e(2);
        e.d(t, "useState", (function() {
            return n.k
        })), e.d(t, "useReducer", (function() {
            return n.i
        })), e.d(t, "useEffect", (function() {
            return n.d
        })), e.d(t, "useLayoutEffect", (function() {
            return n.g
        })), e.d(t, "useRef", (function() {
            return n.j
        })), e.d(t, "useImperativeHandle", (function() {
            return n.f
        })), e.d(t, "useMemo", (function() {
            return n.h
        })), e.d(t, "useCallback", (function() {
            return n.a
        })), e.d(t, "useContext", (function() {
            return n.b
        })), e.d(t, "useDebugValue", (function() {
            return n.c
        })), e.d(t, "useErrorBoundary", (function() {
            return n.e
        }));
        var r = e(0);

        function o(A) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }

        function i(A, t) {
            for (var e in t) A[e] = t[e];
            return A
        }

        function s(A, t) {
            for (var e in A)
                if ("__source" !== e && !(e in t)) return !0;
            for (var n in t)
                if ("__source" !== n && A[n] !== t[n]) return !0;
            return !1
        }

        function a(A) {
            this.props = A
        }

        function u(A, t) {
            function e(A) {
                var e = this.props.ref,
                    n = e == A.ref;
                return !n && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, A) || !n : s(this.props, A)
            }

            function n(t) {
                return this.shouldComponentUpdate = e, Object(r.e)(A, t)
            }
            return n.displayName = "Memo(" + (A.displayName || A.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n
        }
        e.d(t, "createElement", (function() {
            return r.e
        })), e.d(t, "createContext", (function() {
            return r.d
        })), e.d(t, "createRef", (function() {
            return r.f
        })), e.d(t, "Fragment", (function() {
            return r.b
        })), e.d(t, "Component", (function() {
            return r.a
        })), (a.prototype = new r.a).isPureReactComponent = !0, a.prototype.shouldComponentUpdate = function(A, t) {
            return s(this.props, A) || s(this.state, t)
        };
        var c = r.i.__b;
        r.i.__b = function(A) {
            A.type && A.type.__f && A.ref && (A.props.ref = A.ref, A.ref = null), c && c(A)
        };
        var l = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

        function f(A) {
            function t(t, e) {
                var n = i({}, t);
                return delete n.ref, A(n, (e = t.ref || e) && ("object" != o(e) || "current" in e) ? e : null)
            }
            return t.$$typeof = l, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (A.displayName || A.name) + ")", t
        }
        var p = function(A, t) {
                return null == A ? null : Object(r.k)(Object(r.k)(A).map(t))
            },
            h = {
                map: p,
                forEach: p,
                count: function(A) {
                    return A ? Object(r.k)(A).length : 0
                },
                only: function(A) {
                    var t = Object(r.k)(A);
                    if (1 !== t.length) throw "Children.only";
                    return t[0]
                },
                toArray: r.k
            },
            B = r.i.__e;
        r.i.__e = function(A, t, e) {
            if (A.then)
                for (var n, r = t; r = r.__;)
                    if ((n = r.__c) && n.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), n.__c(A, t);
            B(A, t, e)
        };
        var g = r.i.unmount;

        function d() {
            this.__u = 0, this.t = null, this.__b = null
        }

        function w(A) {
            var t = A.__.__c;
            return t && t.__e && t.__e(A)
        }

        function v(A) {
            var t, e, n;

            function o(o) {
                if (t || (t = A()).then((function(A) {
                        e = A.default || A
                    }), (function(A) {
                        n = A
                    })), n) throw n;
                if (!e) throw t;
                return Object(r.e)(e, o)
            }
            return o.displayName = "Lazy", o.__f = !0, o
        }

        function y() {
            this.u = null, this.o = null
        }
        r.i.unmount = function(A) {
            var t = A.__c;
            t && t.__R && t.__R(), t && !0 === A.__h && (A.type = null), g && g(A)
        }, (d.prototype = new r.a).__c = function(A, t) {
            var e = t.__c,
                n = this;
            null == n.t && (n.t = []), n.t.push(e);
            var r = w(n.__v),
                o = !1,
                i = function() {
                    o || (o = !0, e.__R = null, r ? r(s) : s())
                };
            e.__R = i;
            var s = function() {
                    if (!--n.__u) {
                        if (n.state.__e) {
                            var A = n.state.__e;
                            n.__v.__k[0] = function A(t, e, n) {
                                return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                                    return A(t, e, n)
                                })), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t
                            }(A, A.__c.__P, A.__c.__O)
                        }
                        var t;
                        for (n.setState({
                                __e: n.__b = null
                            }); t = n.t.pop();) t.forceUpdate()
                    }
                },
                a = !0 === t.__h;
            n.__u++ || a || n.setState({
                __e: n.__b = n.__v.__k[0]
            }), A.then(i, i)
        }, d.prototype.componentWillUnmount = function() {
            this.t = []
        }, d.prototype.render = function(A, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var e = document.createElement("div"),
                        n = this.__v.__k[0].__c;
                    this.__v.__k[0] = function A(t, e, n) {
                        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(A) {
                            "function" == typeof A.__c && A.__c()
                        })), t.__c.__H = null), null != (t = i({}, t)).__c && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                            return A(t, e, n)
                        }))), t
                    }(this.__b, e, n.__O = n.__P)
                }
                this.__b = null
            }
            var o = t.__e && Object(r.e)(r.b, null, A.fallback);
            return o && (o.__h = null), [Object(r.e)(r.b, null, t.__e ? null : A.children), o]
        };
        var m = function(A, t, e) {
            if (++e[1] === e[0] && A.o.delete(t), A.props.revealOrder && ("t" !== A.props.revealOrder[0] || !A.o.size))
                for (e = A.u; e;) {
                    for (; e.length > 3;) e.pop()();
                    if (e[1] < e[0]) break;
                    A.u = e = e[2]
                }
        };

        function Q(A) {
            return this.getChildContext = function() {
                return A.context
            }, A.children
        }

        function C(A) {
            var t = this,
                e = A.i;
            t.componentWillUnmount = function() {
                Object(r.j)(null, t.l), t.l = null, t.i = null
            }, t.i && t.i !== e && t.componentWillUnmount(), A.__v ? (t.l || (t.i = e, t.l = {
                nodeType: 1,
                parentNode: e,
                childNodes: [],
                appendChild: function(A) {
                    this.childNodes.push(A), t.i.appendChild(A)
                },
                insertBefore: function(A, e) {
                    this.childNodes.push(A), t.i.appendChild(A)
                },
                removeChild: function(A) {
                    this.childNodes.splice(this.childNodes.indexOf(A) >>> 1, 1), t.i.removeChild(A)
                }
            }), Object(r.j)(Object(r.e)(Q, {
                context: t.context
            }, A.__v), t.l)) : t.l && t.componentWillUnmount()
        }

        function U(A, t) {
            return Object(r.e)(C, {
                __v: A,
                i: t
            })
        }(y.prototype = new r.a).__e = function(A) {
            var t = this,
                e = w(t.__v),
                n = t.o.get(A);
            return n[0]++,
                function(r) {
                    var o = function() {
                        t.props.revealOrder ? (n.push(r), m(t, A, n)) : r()
                    };
                    e ? e(o) : o()
                }
        }, y.prototype.render = function(A) {
            this.u = null, this.o = new Map;
            var t = Object(r.k)(A.children);
            A.revealOrder && "b" === A.revealOrder[0] && t.reverse();
            for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
            return A.children
        }, y.prototype.componentDidUpdate = y.prototype.componentDidMount = function() {
            var A = this;
            this.o.forEach((function(t, e) {
                m(A, e, t)
            }))
        };
        var F = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
            b = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
            E = function(A) {
                return ("undefined" != typeof Symbol && "symbol" == o(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(A)
            };

        function _(A, t, e) {
            return null == t.__k && (t.textContent = ""), Object(r.j)(A, t), "function" == typeof e && e(), A ? A.__c : null
        }

        function I(A, t, e) {
            return Object(r.h)(A, t), "function" == typeof e && e(), A ? A.__c : null
        }
        r.a.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(A) {
            Object.defineProperty(r.a.prototype, A, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + A]
                },
                set: function(t) {
                    Object.defineProperty(this, A, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        }));
        var H = r.i.event;

        function O() {}

        function S() {
            return this.cancelBubble
        }

        function L() {
            return this.defaultPrevented
        }
        r.i.event = function(A) {
            return H && (A = H(A)), A.persist = O, A.isPropagationStopped = S, A.isDefaultPrevented = L, A.nativeEvent = A
        };
        var x, T = {
                configurable: !0,
                get: function() {
                    return this.class
                }
            },
            D = r.i.vnode;
        r.i.vnode = function(A) {
            var t = A.type,
                e = A.props,
                n = e;
            if ("string" == typeof t) {
                for (var o in n = {}, e) {
                    var i = e[o];
                    "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !E(e.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : b.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), n[o] = i)
                }
                "select" == t && n.multiple && Array.isArray(n.value) && (n.value = Object(r.k)(e.children).forEach((function(A) {
                    A.props.selected = -1 != n.value.indexOf(A.props.value)
                }))), "select" == t && null != n.defaultValue && (n.value = Object(r.k)(e.children).forEach((function(A) {
                    A.props.selected = n.multiple ? -1 != n.defaultValue.indexOf(A.props.value) : n.defaultValue == A.props.value
                }))), A.props = n
            }
            t && e.class != e.className && (T.enumerable = "className" in e, null != e.className && (n.class = e.className), Object.defineProperty(n, "className", T)), A.$$typeof = F, D && D(A)
        };
        var K = r.i.__r;
        r.i.__r = function(A) {
            K && K(A), x = A.__c
        };
        var M = {
                ReactCurrentDispatcher: {
                    current: {
                        readContext: function(A) {
                            return x.__n[A.__c].props.value
                        }
                    }
                }
            },
            R = "17.0.2";

        function k(A) {
            return r.e.bind(null, A)
        }

        function N(A) {
            return !!A && A.$$typeof === F
        }

        function P(A) {
            return N(A) ? r.c.apply(null, arguments) : A
        }

        function j(A) {
            return !!A.__k && (Object(r.j)(null, A), !0)
        }

        function G(A) {
            return A && (A.base || 1 === A.nodeType && A) || null
        }
        var V = function(A, t) {
                return A(t)
            },
            W = function(A, t) {
                return A(t)
            },
            J = r.b;
        t.default = {
            useState: n.k,
            useReducer: n.i,
            useEffect: n.d,
            useLayoutEffect: n.g,
            useRef: n.j,
            useImperativeHandle: n.f,
            useMemo: n.h,
            useCallback: n.a,
            useContext: n.b,
            useDebugValue: n.c,
            version: "17.0.2",
            Children: h,
            render: _,
            hydrate: I,
            unmountComponentAtNode: j,
            createPortal: U,
            createElement: r.e,
            createContext: r.d,
            createFactory: k,
            cloneElement: P,
            createRef: r.f,
            Fragment: r.b,
            isValidElement: N,
            findDOMNode: G,
            Component: r.a,
            PureComponent: a,
            memo: u,
            forwardRef: f,
            flushSync: W,
            unstable_batchedUpdates: V,
            StrictMode: r.b,
            Suspense: d,
            SuspenseList: y,
            lazy: v,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: M
        }
    }, function(A, t, e) {
        "use strict";
        e.d(t, "k", (function() {
            return B
        })), e.d(t, "i", (function() {
            return g
        })), e.d(t, "d", (function() {
            return d
        })), e.d(t, "g", (function() {
            return w
        })), e.d(t, "j", (function() {
            return v
        })), e.d(t, "f", (function() {
            return y
        })), e.d(t, "h", (function() {
            return m
        })), e.d(t, "a", (function() {
            return Q
        })), e.d(t, "b", (function() {
            return C
        })), e.d(t, "c", (function() {
            return U
        })), e.d(t, "e", (function() {
            return F
        }));
        var n, r, o, i = e(0),
            s = 0,
            a = [],
            u = i.i.__b,
            c = i.i.__r,
            l = i.i.diffed,
            f = i.i.__c,
            p = i.i.unmount;

        function h(A, t) {
            i.i.__h && i.i.__h(r, A, s || t), s = 0;
            var e = r.__H || (r.__H = {
                __: [],
                __h: []
            });
            return A >= e.__.length && e.__.push({}), e.__[A]
        }

        function B(A) {
            return s = 1, g(O, A)
        }

        function g(A, t, e) {
            var o = h(n++, 2);
            return o.t = A, o.__c || (o.__ = [e ? e(t) : O(void 0, t), function(A) {
                var t = o.t(o.__[0], A);
                o.__[0] !== t && (o.__ = [t, o.__[1]], o.__c.setState({}))
            }], o.__c = r), o.__
        }

        function d(A, t) {
            var e = h(n++, 3);
            !i.i.__s && H(e.__H, t) && (e.__ = A, e.__H = t, r.__H.__h.push(e))
        }

        function w(A, t) {
            var e = h(n++, 4);
            !i.i.__s && H(e.__H, t) && (e.__ = A, e.__H = t, r.__h.push(e))
        }

        function v(A) {
            return s = 5, m((function() {
                return {
                    current: A
                }
            }), [])
        }

        function y(A, t, e) {
            s = 6, w((function() {
                "function" == typeof A ? A(t()) : A && (A.current = t())
            }), null == e ? e : e.concat(A))
        }

        function m(A, t) {
            var e = h(n++, 7);
            return H(e.__H, t) && (e.__ = A(), e.__H = t, e.__h = A), e.__
        }

        function Q(A, t) {
            return s = 8, m((function() {
                return A
            }), t)
        }

        function C(A) {
            var t = r.context[A.__c],
                e = h(n++, 9);
            return e.c = A, t ? (null == e.__ && (e.__ = !0, t.sub(r)), t.props.value) : A.__
        }

        function U(A, t) {
            i.i.useDebugValue && i.i.useDebugValue(t ? t(A) : A)
        }

        function F(A) {
            var t = h(n++, 10),
                e = B();
            return t.__ = A, r.componentDidCatch || (r.componentDidCatch = function(A) {
                t.__ && t.__(A), e[1](A)
            }), [e[0], function() {
                e[1](void 0)
            }]
        }

        function b() {
            a.forEach((function(A) {
                if (A.__P) try {
                    A.__H.__h.forEach(_), A.__H.__h.forEach(I), A.__H.__h = []
                } catch (t) {
                    A.__H.__h = [], i.i.__e(t, A.__v)
                }
            })), a = []
        }
        i.i.__b = function(A) {
            r = null, u && u(A)
        }, i.i.__r = function(A) {
            c && c(A), n = 0;
            var t = (r = A.__c).__H;
            t && (t.__h.forEach(_), t.__h.forEach(I), t.__h = [])
        }, i.i.diffed = function(A) {
            l && l(A);
            var t = A.__c;
            t && t.__H && t.__H.__h.length && (1 !== a.push(t) && o === i.i.requestAnimationFrame || ((o = i.i.requestAnimationFrame) || function(A) {
                var t, e = function() {
                        clearTimeout(n), E && cancelAnimationFrame(t), setTimeout(A)
                    },
                    n = setTimeout(e, 100);
                E && (t = requestAnimationFrame(e))
            })(b)), r = void 0
        }, i.i.__c = function(A, t) {
            t.some((function(A) {
                try {
                    A.__h.forEach(_), A.__h = A.__h.filter((function(A) {
                        return !A.__ || I(A)
                    }))
                } catch (e) {
                    t.some((function(A) {
                        A.__h && (A.__h = [])
                    })), t = [], i.i.__e(e, A.__v)
                }
            })), f && f(A, t)
        }, i.i.unmount = function(A) {
            p && p(A);
            var t = A.__c;
            if (t && t.__H) try {
                t.__H.__.forEach(_)
            } catch (A) {
                i.i.__e(A, t.__v)
            }
        };
        var E = "function" == typeof requestAnimationFrame;

        function _(A) {
            var t = r;
            "function" == typeof A.__c && A.__c(), r = t
        }

        function I(A) {
            var t = r;
            A.__c = A.__(), r = t
        }

        function H(A, t) {
            return !A || A.length !== t.length || t.some((function(t, e) {
                return t !== A[e]
            }))
        }

        function O(A, t) {
            return "function" == typeof t ? t(A) : t
        }
    }, function(A, t, e) {
        var n;

        function r(A) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }! function() {
            "use strict";
            var o = {}.hasOwnProperty;

            function i() {
                for (var A = [], t = 0; t < arguments.length; t++) {
                    var e = arguments[t];
                    if (e) {
                        var n = r(e);
                        if ("string" === n || "number" === n) A.push(e);
                        else if (Array.isArray(e)) {
                            if (e.length) {
                                var s = i.apply(null, e);
                                s && A.push(s)
                            }
                        } else if ("object" === n)
                            if (e.toString === Object.prototype.toString)
                                for (var a in e) o.call(e, a) && e[a] && A.push(a);
                            else A.push(e.toString())
                    }
                }
                return A.join(" ")
            }
            A.exports ? (i.default = i, A.exports = i) : "object" === r(e(32)) && e(32) ? void 0 === (n = function() {
                return i
            }.apply(t, [])) || (A.exports = n) : window.classNames = i
        }()
    }, function(A, t, e) {
        function n(A) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        var r = e(28),
            o = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        A.exports = i
    }, function(A, t, e) {
        var n = e(68),
            r = e(69),
            o = e(30),
            i = e(70);
        A.exports = function(A, t) {
            return n(A) || r(A, t) || o(A, t) || i()
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        function e(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (A.exports = e = function(A) {
                return typeof A
            }, A.exports.default = A.exports, A.exports.__esModule = !0) : (A.exports = e = function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            }, A.exports.default = A.exports, A.exports.__esModule = !0), e(t)
        }
        A.exports = e, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        A.exports = function(A) {
            if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return A
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n = e(85),
            r = e(88);
        A.exports = function(A, t) {
            var e = r(A, t);
            return n(e) ? e : void 0
        }
    }, function(A, t) {
        A.exports = function(A, t, e) {
            return t in A ? Object.defineProperty(A, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : A[t] = e, A
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n = e(19),
            r = e(66),
            o = e(67),
            i = n ? n.toStringTag : void 0;
        A.exports = function(A) {
            return null == A ? void 0 === A ? "[object Undefined]" : "[object Null]" : i && i in Object(A) ? r(A) : o(A)
        }
    }, function(A, t) {
        function e(A) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        A.exports = function(A) {
            return null != A && "object" == e(A)
        }
    }, function(A, t) {
        function e(A) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        A.exports = function(A) {
            var t = e(A);
            return null != A && ("object" == t || "function" == t)
        }
    }, function(A, t, e) {
        var n = e(75),
            r = e(76),
            o = e(77),
            i = e(78),
            s = e(79);

        function a(A) {
            var t = -1,
                e = null == A ? 0 : A.length;
            for (this.clear(); ++t < e;) {
                var n = A[t];
                this.set(n[0], n[1])
            }
        }
        a.prototype.clear = n, a.prototype.delete = r, a.prototype.get = o, a.prototype.has = i, a.prototype.set = s, A.exports = a
    }, function(A, t, e) {
        var n = e(33);
        A.exports = function(A, t) {
            for (var e = A.length; e--;)
                if (n(A[e][0], t)) return e;
            return -1
        }
    }, function(A, t, e) {
        var n = e(8)(Object, "create");
        A.exports = n
    }, function(A, t, e) {
        var n = e(97);
        A.exports = function(A, t) {
            var e = A.__data__;
            return n(t) ? e["string" == typeof t ? "string" : "hash"] : e.map
        }
    }, function(A, t, e) {
        "use strict";
        var n, r, o, i = e(156),
            s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

        function a() {
            o = !1
        }

        function u(A) {
            if (A) {
                if (A !== n) {
                    if (A.length !== s.length) throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. You submitted " + A.length + " characters: " + A);
                    var t = A.split("").filter((function(A, t, e) {
                        return t !== e.lastIndexOf(A)
                    }));
                    if (t.length) throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. These characters were not unique: " + t.join(", "));
                    n = A, a()
                }
            } else n !== s && (n = s, a())
        }

        function c() {
            return o || (o = function() {
                n || u(s);
                for (var A, t = n.split(""), e = [], r = i.nextValue(); t.length > 0;) r = i.nextValue(), A = Math.floor(r * t.length), e.push(t.splice(A, 1)[0]);
                return e.join("")
            }())
        }
        A.exports = {
            get: function() {
                return n || s
            },
            characters: function(A) {
                return u(A), n
            },
            seed: function(A) {
                i.seed(A), r !== A && (a(), r = A)
            },
            lookup: function(A) {
                return c()[A]
            },
            shuffled: c
        }
    }, function(A, t, e) {
        var n;
        ! function(r) {
            "use strict";

            function o(A, t) {
                var e = (65535 & A) + (65535 & t);
                return (A >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e
            }

            function i(A, t, e, n, r, i) {
                return o((s = o(o(t, A), o(n, i))) << (a = r) | s >>> 32 - a, e);
                var s, a
            }

            function s(A, t, e, n, r, o, s) {
                return i(t & e | ~t & n, A, t, r, o, s)
            }

            function a(A, t, e, n, r, o, s) {
                return i(t & n | e & ~n, A, t, r, o, s)
            }

            function u(A, t, e, n, r, o, s) {
                return i(t ^ e ^ n, A, t, r, o, s)
            }

            function c(A, t, e, n, r, o, s) {
                return i(e ^ (t | ~n), A, t, r, o, s)
            }

            function l(A, t) {
                var e, n, r, i, l;
                A[t >> 5] |= 128 << t % 32, A[14 + (t + 64 >>> 9 << 4)] = t;
                var f = 1732584193,
                    p = -271733879,
                    h = -1732584194,
                    B = 271733878;
                for (e = 0; e < A.length; e += 16) n = f, r = p, i = h, l = B, f = s(f, p, h, B, A[e], 7, -680876936), B = s(B, f, p, h, A[e + 1], 12, -389564586), h = s(h, B, f, p, A[e + 2], 17, 606105819), p = s(p, h, B, f, A[e + 3], 22, -1044525330), f = s(f, p, h, B, A[e + 4], 7, -176418897), B = s(B, f, p, h, A[e + 5], 12, 1200080426), h = s(h, B, f, p, A[e + 6], 17, -1473231341), p = s(p, h, B, f, A[e + 7], 22, -45705983), f = s(f, p, h, B, A[e + 8], 7, 1770035416), B = s(B, f, p, h, A[e + 9], 12, -1958414417), h = s(h, B, f, p, A[e + 10], 17, -42063), p = s(p, h, B, f, A[e + 11], 22, -1990404162), f = s(f, p, h, B, A[e + 12], 7, 1804603682), B = s(B, f, p, h, A[e + 13], 12, -40341101), h = s(h, B, f, p, A[e + 14], 17, -1502002290), f = a(f, p = s(p, h, B, f, A[e + 15], 22, 1236535329), h, B, A[e + 1], 5, -165796510), B = a(B, f, p, h, A[e + 6], 9, -1069501632), h = a(h, B, f, p, A[e + 11], 14, 643717713), p = a(p, h, B, f, A[e], 20, -373897302), f = a(f, p, h, B, A[e + 5], 5, -701558691), B = a(B, f, p, h, A[e + 10], 9, 38016083), h = a(h, B, f, p, A[e + 15], 14, -660478335), p = a(p, h, B, f, A[e + 4], 20, -405537848), f = a(f, p, h, B, A[e + 9], 5, 568446438), B = a(B, f, p, h, A[e + 14], 9, -1019803690), h = a(h, B, f, p, A[e + 3], 14, -187363961), p = a(p, h, B, f, A[e + 8], 20, 1163531501), f = a(f, p, h, B, A[e + 13], 5, -1444681467), B = a(B, f, p, h, A[e + 2], 9, -51403784), h = a(h, B, f, p, A[e + 7], 14, 1735328473), f = u(f, p = a(p, h, B, f, A[e + 12], 20, -1926607734), h, B, A[e + 5], 4, -378558), B = u(B, f, p, h, A[e + 8], 11, -2022574463), h = u(h, B, f, p, A[e + 11], 16, 1839030562), p = u(p, h, B, f, A[e + 14], 23, -35309556), f = u(f, p, h, B, A[e + 1], 4, -1530992060), B = u(B, f, p, h, A[e + 4], 11, 1272893353), h = u(h, B, f, p, A[e + 7], 16, -155497632), p = u(p, h, B, f, A[e + 10], 23, -1094730640), f = u(f, p, h, B, A[e + 13], 4, 681279174), B = u(B, f, p, h, A[e], 11, -358537222), h = u(h, B, f, p, A[e + 3], 16, -722521979), p = u(p, h, B, f, A[e + 6], 23, 76029189), f = u(f, p, h, B, A[e + 9], 4, -640364487), B = u(B, f, p, h, A[e + 12], 11, -421815835), h = u(h, B, f, p, A[e + 15], 16, 530742520), f = c(f, p = u(p, h, B, f, A[e + 2], 23, -995338651), h, B, A[e], 6, -198630844), B = c(B, f, p, h, A[e + 7], 10, 1126891415), h = c(h, B, f, p, A[e + 14], 15, -1416354905), p = c(p, h, B, f, A[e + 5], 21, -57434055), f = c(f, p, h, B, A[e + 12], 6, 1700485571), B = c(B, f, p, h, A[e + 3], 10, -1894986606), h = c(h, B, f, p, A[e + 10], 15, -1051523), p = c(p, h, B, f, A[e + 1], 21, -2054922799), f = c(f, p, h, B, A[e + 8], 6, 1873313359), B = c(B, f, p, h, A[e + 15], 10, -30611744), h = c(h, B, f, p, A[e + 6], 15, -1560198380), p = c(p, h, B, f, A[e + 13], 21, 1309151649), f = c(f, p, h, B, A[e + 4], 6, -145523070), B = c(B, f, p, h, A[e + 11], 10, -1120210379), h = c(h, B, f, p, A[e + 2], 15, 718787259), p = c(p, h, B, f, A[e + 9], 21, -343485551), f = o(f, n), p = o(p, r), h = o(h, i), B = o(B, l);
                return [f, p, h, B]
            }

            function f(A) {
                var t, e = "",
                    n = 32 * A.length;
                for (t = 0; t < n; t += 8) e += String.fromCharCode(A[t >> 5] >>> t % 32 & 255);
                return e
            }

            function p(A) {
                var t, e = [];
                for (e[(A.length >> 2) - 1] = void 0, t = 0; t < e.length; t += 1) e[t] = 0;
                var n = 8 * A.length;
                for (t = 0; t < n; t += 8) e[t >> 5] |= (255 & A.charCodeAt(t / 8)) << t % 32;
                return e
            }

            function h(A) {
                var t, e, n = "";
                for (e = 0; e < A.length; e += 1) t = A.charCodeAt(e), n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                return n
            }

            function B(A) {
                return unescape(encodeURIComponent(A))
            }

            function g(A) {
                return function(A) {
                    return f(l(p(A), 8 * A.length))
                }(B(A))
            }

            function d(A, t) {
                return function(A, t) {
                    var e, n, r = p(A),
                        o = [],
                        i = [];
                    for (o[15] = i[15] = void 0, r.length > 16 && (r = l(r, 8 * A.length)), e = 0; e < 16; e += 1) o[e] = 909522486 ^ r[e], i[e] = 1549556828 ^ r[e];
                    return n = l(o.concat(p(t)), 512 + 8 * t.length), f(l(i.concat(n), 640))
                }(B(A), B(t))
            }

            function w(A, t, e) {
                return t ? e ? d(t, A) : h(d(t, A)) : e ? g(A) : h(g(A))
            }
            void 0 === (n = function() {
                return w
            }.call(t, e, t, A)) || (A.exports = n)
        }()
    }, function(A, t, e) {
        var n = e(4).Symbol;
        A.exports = n
    }, function(A, t, e) {
        var n = e(8)(e(4), "Map");
        A.exports = n
    }, function(A, t) {
        var e = Array.isArray;
        A.exports = e
    }, function(A, t) {
        A.exports = function(A) {
            return A.webpackPolyfill || (A.deprecate = function() {}, A.paths = [], A.children || (A.children = []), Object.defineProperty(A, "loaded", {
                enumerable: !0,
                get: function() {
                    return A.l
                }
            }), Object.defineProperty(A, "id", {
                enumerable: !0,
                get: function() {
                    return A.i
                }
            }), A.webpackPolyfill = 1), A
        }
    }, function(A, t, e) {
        var n = e(12),
            r = e(61),
            o = e(62),
            i = Math.max,
            s = Math.min;
        A.exports = function(A, t, e) {
            var a, u, c, l, f, p, h = 0,
                B = !1,
                g = !1,
                d = !0;
            if ("function" != typeof A) throw new TypeError("Expected a function");

            function w(t) {
                var e = a,
                    n = u;
                return a = u = void 0, h = t, l = A.apply(n, e)
            }

            function v(A) {
                return h = A, f = setTimeout(m, t), B ? w(A) : l
            }

            function y(A) {
                var e = A - p;
                return void 0 === p || e >= t || e < 0 || g && A - h >= c
            }

            function m() {
                var A = r();
                if (y(A)) return Q(A);
                f = setTimeout(m, function(A) {
                    var e = t - (A - p);
                    return g ? s(e, c - (A - h)) : e
                }(A))
            }

            function Q(A) {
                return f = void 0, d && a ? w(A) : (a = u = void 0, l)
            }

            function C() {
                var A = r(),
                    e = y(A);
                if (a = arguments, u = this, p = A, e) {
                    if (void 0 === f) return v(p);
                    if (g) return clearTimeout(f), f = setTimeout(m, t), w(p)
                }
                return void 0 === f && (f = setTimeout(m, t)), l
            }
            return t = o(t) || 0, n(e) && (B = !!e.leading, c = (g = "maxWait" in e) ? i(o(e.maxWait) || 0, t) : c, d = "trailing" in e ? !!e.trailing : d), C.cancel = function() {
                void 0 !== f && clearTimeout(f), h = 0, a = p = u = f = void 0
            }, C.flush = function() {
                return void 0 === f ? l : Q(r())
            }, C
        }
    }, function(A, t, e) {
        A.exports = e(137)
    }, function(A, t) {
        function e(t) {
            return A.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
                return A.__proto__ || Object.getPrototypeOf(A)
            }, A.exports.default = A.exports, A.exports.__esModule = !0, e(t)
        }
        A.exports = e, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n = e(151),
            r = e(152),
            o = e(30),
            i = e(153);
        A.exports = function(A) {
            return n(A) || r(A) || o(A) || i()
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.useModali = void 0;
        var n = function(A, t) {
                if (Array.isArray(A)) return A;
                if (Symbol.iterator in Object(A)) return function(A, t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, s = A[Symbol.iterator](); !(n = (i = s.next()).done) && (e.push(i.value), !t || e.length !== t); n = !0);
                    } catch (A) {
                        r = !0, o = A
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return e
                }(A, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            r = e(1),
            o = c(r),
            i = c(e(1)),
            s = c(e(42)),
            a = c(e(3)),
            u = c(e(154));

        function c(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        e(163);
        var l = function(A) {
            var t = A.onClick,
                e = A.label,
                n = A.isStyleDefault,
                r = A.isStyleCancel,
                i = A.isStyleDestructive,
                s = (0, a.default)({
                    "modali-button": !0,
                    "modali-button-cancel": r,
                    "modali-button-default": n,
                    "modali-button-destructive": i
                });
            return o.default.createElement("button", {
                type: "button",
                className: s,
                onClick: t
            }, e)
        };
        l.defaultProps = {
            isStyleDefault: !1,
            isStyleCancel: !1,
            isStyleDestructive: !1
        }, l.propTypes = {
            onClick: s.default.func.isRequired,
            label: s.default.string.isRequired,
            isStyleDefault: s.default.bool,
            isStyleCancel: s.default.bool,
            isStyleDestructive: s.default.bool
        };
        var f = function() {};
        f.Button = l, f.Modal = function(A) {
            var t = A.isModalVisible,
                e = A.hide,
                n = A.options,
                r = A.children;
            var s, c = (0, a.default)({
                    "modali-wrapper": !0,
                    "modali-wrapper-centered": n && n.centered
                }),
                l = (0, a.default)({
                    modali: !0,
                    "modali-size-large": n && n.large,
                    "modali-size-regular": !n || n && !n.large,
                    "modali-animated modali-animation-fade-in": n && n.animated
                });
            return t ? i.default.createPortal(o.default.createElement(o.default.Fragment, null, o.default.createElement("div", {
                className: "modali-overlay"
            }), o.default.createElement("div", {
                className: c,
                "aria-modal": !0,
                "aria-hidden": !0,
                tabIndex: -1,
                role: "dialog",
                onClick: function(A) {
                    "modali-wrapper" === A.target.className && (void 0 === n ? e() : (!1 !== n.overlayClose && e(), n.onOverlayClicked && n.onOverlayClicked()))
                }
            }, o.default.createElement("div", {
                className: l
            }, o.default.createElement("div", {
                className: "modali-content"
            }, void 0 !== n && !1 === n.closeButton ? null : o.default.createElement("div", {
                className: "modali-header"
            }, void 0 !== n && void 0 !== n.title && o.default.createElement("div", {
                className: "modali-title"
            }, n.title), o.default.createElement("button", {
                type: "button",
                className: "modali-close-button",
                "data-dismiss": "modal",
                "aria-label": "Close",
                onClick: e
            }, o.default.createElement("span", {
                "aria-hidden": "true"
            }, "×"))), o.default.createElement("div", {
                className: "modali-body"
            }, r || !(!n || !n.message) && o.default.createElement("div", {
                className: "modali-body-style"
            }, n.message)), n && n.buttons && n.buttons.length > 0 && (s = n.buttons, o.default.createElement("div", {
                className: "modali-footer"
            }, s.map((function(A) {
                return o.default.createElement(o.default.Fragment, {
                    key: u.default.generate()
                }, A)
            })))))))), document.body) : null
        }, t.default = f;
        t.useModali = function(A) {
            var t = (0, r.useState)(!1),
                e = n(t, 2),
                o = e[0],
                i = e[1],
                s = (0, r.useState)(!1),
                a = n(s, 2),
                u = a[0],
                c = a[1],
                l = (0, r.useState)(!1),
                f = n(l, 2),
                p = f[0],
                h = f[1],
                B = (0, r.useRef)(u);
            B.current = u;
            var g = void 0;

            function d() {
                g = setTimeout((function() {
                    c(!B.current), clearTimeout(g)
                }), 10), h(!p), i(!0)
            }

            function w(t) {
                27 !== t.keyCode || A && !1 === A.keyboardClose || (d(), A && A.onEscapeKeyDown && A.onEscapeKeyDown())
            }
            return (0, r.useEffect)((function() {
                return p && (A && A.onShow && A.onShow(), document.addEventListener("keydown", w), document.body.classList.add("modali-open")), !p && o && (A && A.onHide && A.onHide(), document.body.classList.remove("modali-open")),
                    function() {
                        return document.removeEventListener("keydown", w)
                    }
            }), [p]), [{
                isShown: p,
                isModalVisible: u,
                hide: d,
                options: A
            }, d]
        }
    }, function(A, t, e) {
        (function(t) {
            function e(A) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                    return typeof A
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                })(A)
            }
            var n = "object" == (void 0 === t ? "undefined" : e(t)) && t && t.Object === Object && t;
            A.exports = n
        }).call(this, e(29))
    }, function(A, t) {
        function e(A) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (A) {
            "object" === ("undefined" == typeof window ? "undefined" : e(window)) && (n = window)
        }
        A.exports = n
    }, function(A, t, e) {
        var n = e(31);
        A.exports = function(A, t) {
            if (A) {
                if ("string" == typeof A) return n(A, t);
                var e = Object.prototype.toString.call(A).slice(8, -1);
                return "Object" === e && A.constructor && (e = A.constructor.name), "Map" === e || "Set" === e ? Array.from(A) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? n(A, t) : void 0
            }
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        A.exports = function(A, t) {
            (null == t || t > A.length) && (t = A.length);
            for (var e = 0, n = new Array(t); e < t; e++) n[e] = A[e];
            return n
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        (function(t) {
            A.exports = t
        }).call(this, {})
    }, function(A, t) {
        A.exports = function(A, t) {
            return A === t || A != A && t != t
        }
    }, function(A, t, e) {
        var n = e(10),
            r = e(12);
        A.exports = function(A) {
            if (!r(A)) return !1;
            var t = n(A);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
    }, function(A, t) {
        var e = Function.prototype.toString;
        A.exports = function(A) {
            if (null != A) {
                try {
                    return e.call(A)
                } catch (A) {}
                try {
                    return A + ""
                } catch (A) {}
            }
            return ""
        }
    }, function(A, t, e) {
        var n = e(89),
            r = e(96),
            o = e(98),
            i = e(99),
            s = e(100);

        function a(A) {
            var t = -1,
                e = null == A ? 0 : A.length;
            for (this.clear(); ++t < e;) {
                var n = A[t];
                this.set(n[0], n[1])
            }
        }
        a.prototype.clear = n, a.prototype.delete = r, a.prototype.get = o, a.prototype.has = i, a.prototype.set = s, A.exports = a
    }, function(A, t, e) {
        var n = e(101),
            r = e(104),
            o = e(105);
        A.exports = function(A, t, e, i, s, a) {
            var u = 1 & e,
                c = A.length,
                l = t.length;
            if (c != l && !(u && l > c)) return !1;
            var f = a.get(A),
                p = a.get(t);
            if (f && p) return f == t && p == A;
            var h = -1,
                B = !0,
                g = 2 & e ? new n : void 0;
            for (a.set(A, t), a.set(t, A); ++h < c;) {
                var d = A[h],
                    w = t[h];
                if (i) var v = u ? i(w, d, h, t, A, a) : i(d, w, h, A, t, a);
                if (void 0 !== v) {
                    if (v) continue;
                    B = !1;
                    break
                }
                if (g) {
                    if (!r(t, (function(A, t) {
                            if (!o(g, t) && (d === A || s(d, A, e, i, a))) return g.push(t)
                        }))) {
                        B = !1;
                        break
                    }
                } else if (d !== w && !s(d, w, e, i, a)) {
                    B = !1;
                    break
                }
            }
            return a.delete(A), a.delete(t), B
        }
    }, function(A, t, e) {
        (function(A) {
            function n(A) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                    return typeof A
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                })(A)
            }
            var r = e(4),
                o = e(122),
                i = "object" == n(t) && t && !t.nodeType && t,
                s = i && "object" == n(A) && A && !A.nodeType && A,
                a = s && s.exports === i ? r.Buffer : void 0,
                u = (a ? a.isBuffer : void 0) || o;
            A.exports = u
        }).call(this, e(22)(A))
    }, function(A, t, e) {
        var n = e(124),
            r = e(125),
            o = e(126),
            i = o && o.isTypedArray,
            s = i ? r(i) : n;
        A.exports = s
    }, function(A, t) {
        A.exports = function(A) {
            return "number" == typeof A && A > -1 && A % 1 == 0 && A <= 9007199254740991
        }
    }, function(A, t, e) {}, function(A, t, e) {
        A.exports = e(141)()
    }, function(A, t, e) {
        var n = e(169);
        A.exports = n.default
    }, function(A, t, e) {
        var n, r, o;

        function i(A) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        o = function() {
            "use strict";
            var A = function(t, e) {
                return (A = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(A, t) {
                        A.__proto__ = t
                    } || function(A, t) {
                        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (A[e] = t[e])
                    })(t, e)
            };

            function t(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                A(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var e = function() {
                return (e = Object.assign || function(A) {
                    for (var t, e = 1, n = arguments.length; e < n; e++)
                        for (var r in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
                    return A
                }).apply(this, arguments)
            };

            function n(A, t, e, n) {
                return new(e || (e = Promise))((function(r, o) {
                    function i(A) {
                        try {
                            a(n.next(A))
                        } catch (A) {
                            o(A)
                        }
                    }

                    function s(A) {
                        try {
                            a(n.throw(A))
                        } catch (A) {
                            o(A)
                        }
                    }

                    function a(A) {
                        var t;
                        A.done ? r(A.value) : (t = A.value, t instanceof e ? t : new e((function(A) {
                            A(t)
                        }))).then(i, s)
                    }
                    a((n = n.apply(A, t || [])).next())
                }))
            }

            function r(A, t) {
                var e, n, r, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (e = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!((r = (r = i.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < r[1]) {
                                            i.label = r[1], r = o;
                                            break
                                        }
                                        if (r && i.label < r[2]) {
                                            i.label = r[2], i.ops.push(o);
                                            break
                                        }
                                        r[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                o = t.call(A, i)
                            } catch (A) {
                                o = [6, A], n = 0
                            } finally {
                                e = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function o(A, t, e) {
                if (e || 2 === arguments.length)
                    for (var n, r = 0, o = t.length; r < o; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
                return A.concat(n || t)
            }
            for (var s = function() {
                    function A(A, t, e, n) {
                        this.left = A, this.top = t, this.width = e, this.height = n
                    }
                    return A.prototype.add = function(t, e, n, r) {
                        return new A(this.left + t, this.top + e, this.width + n, this.height + r)
                    }, A.fromClientRect = function(t, e) {
                        return new A(e.left + t.windowBounds.left, e.top + t.windowBounds.top, e.width, e.height)
                    }, A.fromDOMRectList = function(t, e) {
                        var n = e[0];
                        return n ? new A(n.x + t.windowBounds.left, n.y + t.windowBounds.top, n.width, n.height) : A.EMPTY
                    }, A.EMPTY = new A(0, 0, 0, 0), A
                }(), a = function(A, t) {
                    return s.fromClientRect(A, t.getBoundingClientRect())
                }, u = function(A) {
                    for (var t = [], e = 0, n = A.length; e < n;) {
                        var r = A.charCodeAt(e++);
                        if (r >= 55296 && r <= 56319 && e < n) {
                            var o = A.charCodeAt(e++);
                            56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r), e--)
                        } else t.push(r)
                    }
                    return t
                }, c = function() {
                    for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
                    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                    var e = A.length;
                    if (!e) return "";
                    for (var n = [], r = -1, o = ""; ++r < e;) {
                        var i = A[r];
                        i <= 65535 ? n.push(i) : (i -= 65536, n.push(55296 + (i >> 10), i % 1024 + 56320)), (r + 1 === e || n.length > 16384) && (o += String.fromCharCode.apply(String, n), n.length = 0)
                    }
                    return o
                }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), p = 0; p < l.length; p++) f[l.charCodeAt(p)] = p;
            var h = function(A, t, e) {
                    return A.slice ? A.slice(t, e) : new Uint16Array(Array.prototype.slice.call(A, t, e))
                },
                B = function() {
                    function A(A, t, e, n, r, o) {
                        this.initialValue = A, this.errorValue = t, this.highStart = e, this.highValueIndex = n, this.index = r, this.data = o
                    }
                    return A.prototype.get = function(A) {
                        var t;
                        if (A >= 0) {
                            if (A < 55296 || A > 56319 && A <= 65535) return t = ((t = this.index[A >> 5]) << 2) + (31 & A), this.data[t];
                            if (A <= 65535) return t = ((t = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[t];
                            if (A < this.highStart) return t = 2080 + (A >> 11), t = this.index[t], t += A >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & A), this.data[t];
                            if (A <= 1114111) return this.data[this.highValueIndex]
                        }
                        return this.errorValue
                    }, A
                }(),
                g = 10,
                d = 13,
                w = 15,
                v = 17,
                y = 18,
                m = 19,
                Q = 20,
                C = 21,
                U = 22,
                F = 24,
                b = 25,
                E = 26,
                _ = 27,
                I = 28,
                H = 30,
                O = 32,
                S = 33,
                L = 34,
                x = 35,
                T = 37,
                D = 38,
                K = 39,
                M = 40,
                R = 42,
                k = [9001, 65288],
                N = function(A) {
                    var t, e, n, r = function(A) {
                            var t, e, n, r, o, i = .75 * A.length,
                                s = A.length,
                                a = 0;
                            "=" === A[A.length - 1] && (i--, "=" === A[A.length - 2] && i--);
                            var u = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(i) : new Array(i),
                                c = Array.isArray(u) ? u : new Uint8Array(u);
                            for (t = 0; t < s; t += 4) e = f[A.charCodeAt(t)], n = f[A.charCodeAt(t + 1)], r = f[A.charCodeAt(t + 2)], o = f[A.charCodeAt(t + 3)], c[a++] = e << 2 | n >> 4, c[a++] = (15 & n) << 4 | r >> 2, c[a++] = (3 & r) << 6 | 63 & o;
                            return u
                        }(A),
                        o = Array.isArray(r) ? function(A) {
                            for (var t = A.length, e = [], n = 0; n < t; n += 4) e.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                            return e
                        }(r) : new Uint32Array(r),
                        i = Array.isArray(r) ? function(A) {
                            for (var t = A.length, e = [], n = 0; n < t; n += 2) e.push(A[n + 1] << 8 | A[n]);
                            return e
                        }(r) : new Uint16Array(r),
                        s = h(i, 12, o[4] / 2),
                        a = 2 === o[5] ? h(i, (24 + o[4]) / 2) : (t = o, e = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(e, n) : new Uint32Array(Array.prototype.slice.call(t, e, n)));
                    return new B(o[0], o[1], o[2], o[3], s, a)
                }("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="),
                P = [H, 36],
                j = [1, 2, 3, 5],
                G = [g, 8],
                V = [_, E],
                W = j.concat(G),
                J = [D, K, M, L, x],
                X = [w, d],
                Y = function(A, t, e, n) {
                    var r = n[e];
                    if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
                        for (var o = e; o <= n.length;) {
                            if ((a = n[++o]) === t) return !0;
                            if (a !== g) break
                        }
                    if (r === g)
                        for (o = e; o > 0;) {
                            var i = n[--o];
                            if (Array.isArray(A) ? -1 !== A.indexOf(i) : A === i)
                                for (var s = e; s <= n.length;) {
                                    var a;
                                    if ((a = n[++s]) === t) return !0;
                                    if (a !== g) break
                                }
                            if (i !== g) break
                        }
                    return !1
                },
                z = function(A, t) {
                    for (var e = A; e >= 0;) {
                        var n = t[e];
                        if (n !== g) return n;
                        e--
                    }
                    return 0
                },
                Z = function(A, t, e, n, r) {
                    if (0 === e[n]) return "×";
                    var o = n - 1;
                    if (Array.isArray(r) && !0 === r[o]) return "×";
                    var i = o - 1,
                        s = o + 1,
                        a = t[o],
                        u = i >= 0 ? t[i] : 0,
                        c = t[s];
                    if (2 === a && 3 === c) return "×";
                    if (-1 !== j.indexOf(a)) return "!";
                    if (-1 !== j.indexOf(c)) return "×";
                    if (-1 !== G.indexOf(c)) return "×";
                    if (8 === z(o, t)) return "÷";
                    if (11 === N.get(A[o])) return "×";
                    if ((a === O || a === S) && 11 === N.get(A[s])) return "×";
                    if (7 === a || 7 === c) return "×";
                    if (9 === a) return "×";
                    if (-1 === [g, d, w].indexOf(a) && 9 === c) return "×";
                    if (-1 !== [v, y, m, F, I].indexOf(c)) return "×";
                    if (z(o, t) === U) return "×";
                    if (Y(23, U, o, t)) return "×";
                    if (Y([v, y], C, o, t)) return "×";
                    if (Y(12, 12, o, t)) return "×";
                    if (a === g) return "÷";
                    if (23 === a || 23 === c) return "×";
                    if (16 === c || 16 === a) return "÷";
                    if (-1 !== [d, w, C].indexOf(c) || 14 === a) return "×";
                    if (36 === u && -1 !== X.indexOf(a)) return "×";
                    if (a === I && 36 === c) return "×";
                    if (c === Q) return "×";
                    if (-1 !== P.indexOf(c) && a === b || -1 !== P.indexOf(a) && c === b) return "×";
                    if (a === _ && -1 !== [T, O, S].indexOf(c) || -1 !== [T, O, S].indexOf(a) && c === E) return "×";
                    if (-1 !== P.indexOf(a) && -1 !== V.indexOf(c) || -1 !== V.indexOf(a) && -1 !== P.indexOf(c)) return "×";
                    if (-1 !== [_, E].indexOf(a) && (c === b || -1 !== [U, w].indexOf(c) && t[s + 1] === b) || -1 !== [U, w].indexOf(a) && c === b || a === b && -1 !== [b, I, F].indexOf(c)) return "×";
                    if (-1 !== [b, I, F, v, y].indexOf(c))
                        for (var l = o; l >= 0;) {
                            if ((f = t[l]) === b) return "×";
                            if (-1 === [I, F].indexOf(f)) break;
                            l--
                        }
                    if (-1 !== [_, E].indexOf(c))
                        for (l = -1 !== [v, y].indexOf(a) ? i : o; l >= 0;) {
                            var f;
                            if ((f = t[l]) === b) return "×";
                            if (-1 === [I, F].indexOf(f)) break;
                            l--
                        }
                    if (D === a && -1 !== [D, K, L, x].indexOf(c) || -1 !== [K, L].indexOf(a) && -1 !== [K, M].indexOf(c) || -1 !== [M, x].indexOf(a) && c === M) return "×";
                    if (-1 !== J.indexOf(a) && -1 !== [Q, E].indexOf(c) || -1 !== J.indexOf(c) && a === _) return "×";
                    if (-1 !== P.indexOf(a) && -1 !== P.indexOf(c)) return "×";
                    if (a === F && -1 !== P.indexOf(c)) return "×";
                    if (-1 !== P.concat(b).indexOf(a) && c === U && -1 === k.indexOf(A[s]) || -1 !== P.concat(b).indexOf(c) && a === y) return "×";
                    if (41 === a && 41 === c) {
                        for (var p = e[o], h = 1; p > 0 && 41 === t[--p];) h++;
                        if (h % 2 != 0) return "×"
                    }
                    return a === O && c === S ? "×" : "÷"
                },
                q = function(A, t) {
                    t || (t = {
                        lineBreak: "normal",
                        wordBreak: "normal"
                    });
                    var e = function(A, t) {
                            void 0 === t && (t = "strict");
                            var e = [],
                                n = [],
                                r = [];
                            return A.forEach((function(A, o) {
                                var i = N.get(A);
                                if (i > 50 ? (r.push(!0), i -= 50) : r.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(t) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return n.push(o), e.push(16);
                                if (4 === i || 11 === i) {
                                    if (0 === o) return n.push(o), e.push(H);
                                    var s = e[o - 1];
                                    return -1 === W.indexOf(s) ? (n.push(n[o - 1]), e.push(s)) : (n.push(o), e.push(H))
                                }
                                return n.push(o), 31 === i ? e.push("strict" === t ? C : T) : i === R || 29 === i ? e.push(H) : 43 === i ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? e.push(T) : e.push(H) : void e.push(i)
                            })), [n, e, r]
                        }(A, t.lineBreak),
                        n = e[0],
                        r = e[1],
                        o = e[2];
                    return "break-all" !== t.wordBreak && "break-word" !== t.wordBreak || (r = r.map((function(A) {
                        return -1 !== [b, H, R].indexOf(A) ? T : A
                    }))), [n, r, "keep-all" === t.wordBreak ? o.map((function(t, e) {
                        return t && A[e] >= 19968 && A[e] <= 40959
                    })) : void 0]
                },
                $ = function() {
                    function A(A, t, e, n) {
                        this.codePoints = A, this.required = "!" === t, this.start = e, this.end = n
                    }
                    return A.prototype.slice = function() {
                        return c.apply(void 0, this.codePoints.slice(this.start, this.end))
                    }, A
                }(),
                AA = function(A) {
                    return A >= 48 && A <= 57
                },
                tA = function(A) {
                    return AA(A) || A >= 65 && A <= 70 || A >= 97 && A <= 102
                },
                eA = function(A) {
                    return 10 === A || 9 === A || 32 === A
                },
                nA = function(A) {
                    return function(A) {
                        return function(A) {
                            return A >= 97 && A <= 122
                        }(A) || function(A) {
                            return A >= 65 && A <= 90
                        }(A)
                    }(A) || function(A) {
                        return A >= 128
                    }(A) || 95 === A
                },
                rA = function(A) {
                    return nA(A) || AA(A) || 45 === A
                },
                oA = function(A) {
                    return A >= 0 && A <= 8 || 11 === A || A >= 14 && A <= 31 || 127 === A
                },
                iA = function(A, t) {
                    return 92 === A && 10 !== t
                },
                sA = function(A, t, e) {
                    return 45 === A ? nA(t) || iA(t, e) : !!nA(A) || !(92 !== A || !iA(A, t))
                },
                aA = function(A, t, e) {
                    return 43 === A || 45 === A ? !!AA(t) || 46 === t && AA(e) : AA(46 === A ? t : A)
                },
                uA = function(A) {
                    var t = 0,
                        e = 1;
                    43 !== A[t] && 45 !== A[t] || (45 === A[t] && (e = -1), t++);
                    for (var n = []; AA(A[t]);) n.push(A[t++]);
                    var r = n.length ? parseInt(c.apply(void 0, n), 10) : 0;
                    46 === A[t] && t++;
                    for (var o = []; AA(A[t]);) o.push(A[t++]);
                    var i = o.length,
                        s = i ? parseInt(c.apply(void 0, o), 10) : 0;
                    69 !== A[t] && 101 !== A[t] || t++;
                    var a = 1;
                    43 !== A[t] && 45 !== A[t] || (45 === A[t] && (a = -1), t++);
                    for (var u = []; AA(A[t]);) u.push(A[t++]);
                    var l = u.length ? parseInt(c.apply(void 0, u), 10) : 0;
                    return e * (r + s * Math.pow(10, -i)) * Math.pow(10, a * l)
                },
                cA = {
                    type: 2
                },
                lA = {
                    type: 3
                },
                fA = {
                    type: 4
                },
                pA = {
                    type: 13
                },
                hA = {
                    type: 8
                },
                BA = {
                    type: 21
                },
                gA = {
                    type: 9
                },
                dA = {
                    type: 10
                },
                wA = {
                    type: 11
                },
                vA = {
                    type: 12
                },
                yA = {
                    type: 14
                },
                mA = {
                    type: 23
                },
                QA = {
                    type: 1
                },
                CA = {
                    type: 25
                },
                UA = {
                    type: 24
                },
                FA = {
                    type: 26
                },
                bA = {
                    type: 27
                },
                EA = {
                    type: 28
                },
                _A = {
                    type: 29
                },
                IA = {
                    type: 31
                },
                HA = {
                    type: 32
                },
                OA = function() {
                    function A() {
                        this._value = []
                    }
                    return A.prototype.write = function(A) {
                        this._value = this._value.concat(u(A))
                    }, A.prototype.read = function() {
                        for (var A = [], t = this.consumeToken(); t !== HA;) A.push(t), t = this.consumeToken();
                        return A
                    }, A.prototype.consumeToken = function() {
                        var A = this.consumeCodePoint();
                        switch (A) {
                            case 34:
                                return this.consumeStringToken(34);
                            case 35:
                                var t = this.peekCodePoint(0),
                                    e = this.peekCodePoint(1),
                                    n = this.peekCodePoint(2);
                                if (rA(t) || iA(e, n)) {
                                    var r = sA(t, e, n) ? 2 : 1;
                                    return {
                                        type: 5,
                                        value: this.consumeName(),
                                        flags: r
                                    }
                                }
                                break;
                            case 36:
                                if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), pA;
                                break;
                            case 39:
                                return this.consumeStringToken(39);
                            case 40:
                                return cA;
                            case 41:
                                return lA;
                            case 42:
                                if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), yA;
                                break;
                            case 43:
                                if (aA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                                break;
                            case 44:
                                return fA;
                            case 45:
                                var o = A,
                                    i = this.peekCodePoint(0),
                                    s = this.peekCodePoint(1);
                                if (aA(o, i, s)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                                if (sA(o, i, s)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                                if (45 === i && 62 === s) return this.consumeCodePoint(), this.consumeCodePoint(), UA;
                                break;
                            case 46:
                                if (aA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                                break;
                            case 47:
                                if (42 === this.peekCodePoint(0))
                                    for (this.consumeCodePoint();;) {
                                        var a = this.consumeCodePoint();
                                        if (42 === a && 47 === (a = this.consumeCodePoint())) return this.consumeToken();
                                        if (-1 === a) return this.consumeToken()
                                    }
                                break;
                            case 58:
                                return FA;
                            case 59:
                                return bA;
                            case 60:
                                if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), CA;
                                break;
                            case 64:
                                var u = this.peekCodePoint(0),
                                    l = this.peekCodePoint(1),
                                    f = this.peekCodePoint(2);
                                if (sA(u, l, f)) return {
                                    type: 7,
                                    value: this.consumeName()
                                };
                                break;
                            case 91:
                                return EA;
                            case 92:
                                if (iA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                                break;
                            case 93:
                                return _A;
                            case 61:
                                if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), hA;
                                break;
                            case 123:
                                return wA;
                            case 125:
                                return vA;
                            case 117:
                            case 85:
                                var p = this.peekCodePoint(0),
                                    h = this.peekCodePoint(1);
                                return 43 !== p || !tA(h) && 63 !== h || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                            case 124:
                                if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), gA;
                                if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), BA;
                                break;
                            case 126:
                                if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), dA;
                                break;
                            case -1:
                                return HA
                        }
                        return eA(A) ? (this.consumeWhiteSpace(), IA) : AA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : nA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
                            type: 6,
                            value: c(A)
                        }
                    }, A.prototype.consumeCodePoint = function() {
                        var A = this._value.shift();
                        return void 0 === A ? -1 : A
                    }, A.prototype.reconsumeCodePoint = function(A) {
                        this._value.unshift(A)
                    }, A.prototype.peekCodePoint = function(A) {
                        return A >= this._value.length ? -1 : this._value[A]
                    }, A.prototype.consumeUnicodeRangeToken = function() {
                        for (var A = [], t = this.consumeCodePoint(); tA(t) && A.length < 6;) A.push(t), t = this.consumeCodePoint();
                        for (var e = !1; 63 === t && A.length < 6;) A.push(t), t = this.consumeCodePoint(), e = !0;
                        if (e) return {
                            type: 30,
                            start: parseInt(c.apply(void 0, A.map((function(A) {
                                return 63 === A ? 48 : A
                            }))), 16),
                            end: parseInt(c.apply(void 0, A.map((function(A) {
                                return 63 === A ? 70 : A
                            }))), 16)
                        };
                        var n = parseInt(c.apply(void 0, A), 16);
                        if (45 === this.peekCodePoint(0) && tA(this.peekCodePoint(1))) {
                            this.consumeCodePoint(), t = this.consumeCodePoint();
                            for (var r = []; tA(t) && r.length < 6;) r.push(t), t = this.consumeCodePoint();
                            return {
                                type: 30,
                                start: n,
                                end: parseInt(c.apply(void 0, r), 16)
                            }
                        }
                        return {
                            type: 30,
                            start: n,
                            end: n
                        }
                    }, A.prototype.consumeIdentLikeToken = function() {
                        var A = this.consumeName();
                        return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                            type: 19,
                            value: A
                        }) : {
                            type: 20,
                            value: A
                        }
                    }, A.prototype.consumeUrlToken = function() {
                        var A = [];
                        if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
                            type: 22,
                            value: ""
                        };
                        var t = this.peekCodePoint(0);
                        if (39 === t || 34 === t) {
                            var e = this.consumeStringToken(this.consumeCodePoint());
                            return 0 === e.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
                                type: 22,
                                value: e.value
                            }) : (this.consumeBadUrlRemnants(), mA)
                        }
                        for (;;) {
                            var n = this.consumeCodePoint();
                            if (-1 === n || 41 === n) return {
                                type: 22,
                                value: c.apply(void 0, A)
                            };
                            if (eA(n)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                                type: 22,
                                value: c.apply(void 0, A)
                            }) : (this.consumeBadUrlRemnants(), mA);
                            if (34 === n || 39 === n || 40 === n || oA(n)) return this.consumeBadUrlRemnants(), mA;
                            if (92 === n) {
                                if (!iA(n, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), mA;
                                A.push(this.consumeEscapedCodePoint())
                            } else A.push(n)
                        }
                    }, A.prototype.consumeWhiteSpace = function() {
                        for (; eA(this.peekCodePoint(0));) this.consumeCodePoint()
                    }, A.prototype.consumeBadUrlRemnants = function() {
                        for (;;) {
                            var A = this.consumeCodePoint();
                            if (41 === A || -1 === A) return;
                            iA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                        }
                    }, A.prototype.consumeStringSlice = function(A) {
                        for (var t = ""; A > 0;) {
                            var e = Math.min(6e4, A);
                            t += c.apply(void 0, this._value.splice(0, e)), A -= e
                        }
                        return this._value.shift(), t
                    }, A.prototype.consumeStringToken = function(A) {
                        for (var t = "", e = 0;;) {
                            var n = this._value[e];
                            if (-1 === n || void 0 === n || n === A) return {
                                type: 0,
                                value: t += this.consumeStringSlice(e)
                            };
                            if (10 === n) return this._value.splice(0, e), QA;
                            if (92 === n) {
                                var r = this._value[e + 1]; - 1 !== r && void 0 !== r && (10 === r ? (t += this.consumeStringSlice(e), e = -1, this._value.shift()) : iA(n, r) && (t += this.consumeStringSlice(e), t += c(this.consumeEscapedCodePoint()), e = -1))
                            }
                            e++
                        }
                    }, A.prototype.consumeNumber = function() {
                        var A = [],
                            t = 4,
                            e = this.peekCodePoint(0);
                        for (43 !== e && 45 !== e || A.push(this.consumeCodePoint()); AA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                        e = this.peekCodePoint(0);
                        var n = this.peekCodePoint(1);
                        if (46 === e && AA(n))
                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; AA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                        e = this.peekCodePoint(0), n = this.peekCodePoint(1);
                        var r = this.peekCodePoint(2);
                        if ((69 === e || 101 === e) && ((43 === n || 45 === n) && AA(r) || AA(n)))
                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; AA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                        return [uA(A), t]
                    }, A.prototype.consumeNumericToken = function() {
                        var A = this.consumeNumber(),
                            t = A[0],
                            e = A[1],
                            n = this.peekCodePoint(0),
                            r = this.peekCodePoint(1),
                            o = this.peekCodePoint(2);
                        return sA(n, r, o) ? {
                            type: 15,
                            number: t,
                            flags: e,
                            unit: this.consumeName()
                        } : 37 === n ? (this.consumeCodePoint(), {
                            type: 16,
                            number: t,
                            flags: e
                        }) : {
                            type: 17,
                            number: t,
                            flags: e
                        }
                    }, A.prototype.consumeEscapedCodePoint = function() {
                        var A = this.consumeCodePoint();
                        if (tA(A)) {
                            for (var t = c(A); tA(this.peekCodePoint(0)) && t.length < 6;) t += c(this.consumeCodePoint());
                            eA(this.peekCodePoint(0)) && this.consumeCodePoint();
                            var e = parseInt(t, 16);
                            return 0 === e || function(A) {
                                return A >= 55296 && A <= 57343
                            }(e) || e > 1114111 ? 65533 : e
                        }
                        return -1 === A ? 65533 : A
                    }, A.prototype.consumeName = function() {
                        for (var A = "";;) {
                            var t = this.consumeCodePoint();
                            if (rA(t)) A += c(t);
                            else {
                                if (!iA(t, this.peekCodePoint(0))) return this.reconsumeCodePoint(t), A;
                                A += c(this.consumeEscapedCodePoint())
                            }
                        }
                    }, A
                }(),
                SA = function() {
                    function A(A) {
                        this._tokens = A
                    }
                    return A.create = function(t) {
                        var e = new OA;
                        return e.write(t), new A(e.read())
                    }, A.parseValue = function(t) {
                        return A.create(t).parseComponentValue()
                    }, A.parseValues = function(t) {
                        return A.create(t).parseComponentValues()
                    }, A.prototype.parseComponentValue = function() {
                        for (var A = this.consumeToken(); 31 === A.type;) A = this.consumeToken();
                        if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                        this.reconsumeToken(A);
                        var t = this.consumeComponentValue();
                        do {
                            A = this.consumeToken()
                        } while (31 === A.type);
                        if (32 === A.type) return t;
                        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                    }, A.prototype.parseComponentValues = function() {
                        for (var A = [];;) {
                            var t = this.consumeComponentValue();
                            if (32 === t.type) return A;
                            A.push(t), A.push()
                        }
                    }, A.prototype.consumeComponentValue = function() {
                        var A = this.consumeToken();
                        switch (A.type) {
                            case 11:
                            case 28:
                            case 2:
                                return this.consumeSimpleBlock(A.type);
                            case 19:
                                return this.consumeFunction(A)
                        }
                        return A
                    }, A.prototype.consumeSimpleBlock = function(A) {
                        for (var t = {
                                type: A,
                                values: []
                            }, e = this.consumeToken();;) {
                            if (32 === e.type || NA(e, A)) return t;
                            this.reconsumeToken(e), t.values.push(this.consumeComponentValue()), e = this.consumeToken()
                        }
                    }, A.prototype.consumeFunction = function(A) {
                        for (var t = {
                                name: A.value,
                                values: [],
                                type: 18
                            };;) {
                            var e = this.consumeToken();
                            if (32 === e.type || 3 === e.type) return t;
                            this.reconsumeToken(e), t.values.push(this.consumeComponentValue())
                        }
                    }, A.prototype.consumeToken = function() {
                        var A = this._tokens.shift();
                        return void 0 === A ? HA : A
                    }, A.prototype.reconsumeToken = function(A) {
                        this._tokens.unshift(A)
                    }, A
                }(),
                LA = function(A) {
                    return 15 === A.type
                },
                xA = function(A) {
                    return 17 === A.type
                },
                TA = function(A) {
                    return 20 === A.type
                },
                DA = function(A) {
                    return 0 === A.type
                },
                KA = function(A, t) {
                    return TA(A) && A.value === t
                },
                MA = function(A) {
                    return 31 !== A.type
                },
                RA = function(A) {
                    return 31 !== A.type && 4 !== A.type
                },
                kA = function(A) {
                    var t = [],
                        e = [];
                    return A.forEach((function(A) {
                        if (4 === A.type) {
                            if (0 === e.length) throw new Error("Error parsing function args, zero tokens for arg");
                            return t.push(e), void(e = [])
                        }
                        31 !== A.type && e.push(A)
                    })), e.length && t.push(e), t
                },
                NA = function(A, t) {
                    return 11 === t && 12 === A.type || 28 === t && 29 === A.type || 2 === t && 3 === A.type
                },
                PA = function(A) {
                    return 17 === A.type || 15 === A.type
                },
                jA = function(A) {
                    return 16 === A.type || PA(A)
                },
                GA = function(A) {
                    return A.length > 1 ? [A[0], A[1]] : [A[0]]
                },
                VA = {
                    type: 17,
                    number: 0,
                    flags: 4
                },
                WA = {
                    type: 16,
                    number: 50,
                    flags: 4
                },
                JA = {
                    type: 16,
                    number: 100,
                    flags: 4
                },
                XA = function(A, t, e) {
                    var n = A[0],
                        r = A[1];
                    return [YA(n, t), YA(void 0 !== r ? r : n, e)]
                },
                YA = function(A, t) {
                    if (16 === A.type) return A.number / 100 * t;
                    if (LA(A)) switch (A.unit) {
                        case "rem":
                        case "em":
                            return 16 * A.number;
                        case "px":
                        default:
                            return A.number
                    }
                    return A.number
                },
                zA = function(A, t) {
                    if (15 === t.type) switch (t.unit) {
                        case "deg":
                            return Math.PI * t.number / 180;
                        case "grad":
                            return Math.PI / 200 * t.number;
                        case "rad":
                            return t.number;
                        case "turn":
                            return 2 * Math.PI * t.number
                    }
                    throw new Error("Unsupported angle type")
                },
                ZA = function(A) {
                    return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
                },
                qA = function(A) {
                    switch (A.filter(TA).map((function(A) {
                        return A.value
                    })).join(" ")) {
                        case "to bottom right":
                        case "to right bottom":
                        case "left top":
                        case "top left":
                            return [VA, VA];
                        case "to top":
                        case "bottom":
                            return $A(0);
                        case "to bottom left":
                        case "to left bottom":
                        case "right top":
                        case "top right":
                            return [VA, JA];
                        case "to right":
                        case "left":
                            return $A(90);
                        case "to top left":
                        case "to left top":
                        case "right bottom":
                        case "bottom right":
                            return [JA, JA];
                        case "to bottom":
                        case "top":
                            return $A(180);
                        case "to top right":
                        case "to right top":
                        case "left bottom":
                        case "bottom left":
                            return [JA, VA];
                        case "to left":
                        case "right":
                            return $A(270)
                    }
                    return 0
                },
                $A = function(A) {
                    return Math.PI * A / 180
                },
                At = function(A, t) {
                    if (18 === t.type) {
                        var e = ut[t.name];
                        if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + t.name + '"');
                        return e(A, t.values)
                    }
                    if (5 === t.type) {
                        if (3 === t.value.length) {
                            var n = t.value.substring(0, 1),
                                r = t.value.substring(1, 2),
                                o = t.value.substring(2, 3);
                            return nt(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16), 1)
                        }
                        if (4 === t.value.length) {
                            n = t.value.substring(0, 1), r = t.value.substring(1, 2), o = t.value.substring(2, 3);
                            var i = t.value.substring(3, 4);
                            return nt(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255)
                        }
                        if (6 === t.value.length) return n = t.value.substring(0, 2), r = t.value.substring(2, 4), o = t.value.substring(4, 6), nt(parseInt(n, 16), parseInt(r, 16), parseInt(o, 16), 1);
                        if (8 === t.value.length) return n = t.value.substring(0, 2), r = t.value.substring(2, 4), o = t.value.substring(4, 6), i = t.value.substring(6, 8), nt(parseInt(n, 16), parseInt(r, 16), parseInt(o, 16), parseInt(i, 16) / 255)
                    }
                    if (20 === t.type) {
                        var s = lt[t.value.toUpperCase()];
                        if (void 0 !== s) return s
                    }
                    return lt.TRANSPARENT
                },
                tt = function(A) {
                    return 0 == (255 & A)
                },
                et = function(A) {
                    var t = 255 & A,
                        e = 255 & A >> 8,
                        n = 255 & A >> 16,
                        r = 255 & A >> 24;
                    return t < 255 ? "rgba(" + r + "," + n + "," + e + "," + t / 255 + ")" : "rgb(" + r + "," + n + "," + e + ")"
                },
                nt = function(A, t, e, n) {
                    return (A << 24 | t << 16 | e << 8 | Math.round(255 * n) << 0) >>> 0
                },
                rt = function(A, t) {
                    if (17 === A.type) return A.number;
                    if (16 === A.type) {
                        var e = 3 === t ? 1 : 255;
                        return 3 === t ? A.number / 100 * e : Math.round(A.number / 100 * e)
                    }
                    return 0
                },
                ot = function(A, t) {
                    var e = t.filter(RA);
                    if (3 === e.length) {
                        var n = e.map(rt),
                            r = n[0],
                            o = n[1],
                            i = n[2];
                        return nt(r, o, i, 1)
                    }
                    if (4 === e.length) {
                        var s = e.map(rt),
                            a = (r = s[0], o = s[1], i = s[2], s[3]);
                        return nt(r, o, i, a)
                    }
                    return 0
                };

            function it(A, t, e) {
                return e < 0 && (e += 1), e >= 1 && (e -= 1), e < 1 / 6 ? (t - A) * e * 6 + A : e < .5 ? t : e < 2 / 3 ? 6 * (t - A) * (2 / 3 - e) + A : A
            }
            var st, at = function(A, t) {
                    var e = t.filter(RA),
                        n = e[0],
                        r = e[1],
                        o = e[2],
                        i = e[3],
                        s = (17 === n.type ? $A(n.number) : zA(A, n)) / (2 * Math.PI),
                        a = jA(r) ? r.number / 100 : 0,
                        u = jA(o) ? o.number / 100 : 0,
                        c = void 0 !== i && jA(i) ? YA(i, 1) : 1;
                    if (0 === a) return nt(255 * u, 255 * u, 255 * u, 1);
                    var l = u <= .5 ? u * (a + 1) : u + a - u * a,
                        f = 2 * u - l,
                        p = it(f, l, s + 1 / 3),
                        h = it(f, l, s),
                        B = it(f, l, s - 1 / 3);
                    return nt(255 * p, 255 * h, 255 * B, c)
                },
                ut = {
                    hsl: at,
                    hsla: at,
                    rgb: ot,
                    rgba: ot
                },
                ct = function(A, t) {
                    return At(A, SA.create(t).parseComponentValue())
                },
                lt = {
                    ALICEBLUE: 4042850303,
                    ANTIQUEWHITE: 4209760255,
                    AQUA: 16777215,
                    AQUAMARINE: 2147472639,
                    AZURE: 4043309055,
                    BEIGE: 4126530815,
                    BISQUE: 4293182719,
                    BLACK: 255,
                    BLANCHEDALMOND: 4293643775,
                    BLUE: 65535,
                    BLUEVIOLET: 2318131967,
                    BROWN: 2771004159,
                    BURLYWOOD: 3736635391,
                    CADETBLUE: 1604231423,
                    CHARTREUSE: 2147418367,
                    CHOCOLATE: 3530104575,
                    CORAL: 4286533887,
                    CORNFLOWERBLUE: 1687547391,
                    CORNSILK: 4294499583,
                    CRIMSON: 3692313855,
                    CYAN: 16777215,
                    DARKBLUE: 35839,
                    DARKCYAN: 9145343,
                    DARKGOLDENROD: 3095837695,
                    DARKGRAY: 2846468607,
                    DARKGREEN: 6553855,
                    DARKGREY: 2846468607,
                    DARKKHAKI: 3182914559,
                    DARKMAGENTA: 2332068863,
                    DARKOLIVEGREEN: 1433087999,
                    DARKORANGE: 4287365375,
                    DARKORCHID: 2570243327,
                    DARKRED: 2332033279,
                    DARKSALMON: 3918953215,
                    DARKSEAGREEN: 2411499519,
                    DARKSLATEBLUE: 1211993087,
                    DARKSLATEGRAY: 793726975,
                    DARKSLATEGREY: 793726975,
                    DARKTURQUOISE: 13554175,
                    DARKVIOLET: 2483082239,
                    DEEPPINK: 4279538687,
                    DEEPSKYBLUE: 12582911,
                    DIMGRAY: 1768516095,
                    DIMGREY: 1768516095,
                    DODGERBLUE: 512819199,
                    FIREBRICK: 2988581631,
                    FLORALWHITE: 4294635775,
                    FORESTGREEN: 579543807,
                    FUCHSIA: 4278255615,
                    GAINSBORO: 3705462015,
                    GHOSTWHITE: 4177068031,
                    GOLD: 4292280575,
                    GOLDENROD: 3668254975,
                    GRAY: 2155905279,
                    GREEN: 8388863,
                    GREENYELLOW: 2919182335,
                    GREY: 2155905279,
                    HONEYDEW: 4043305215,
                    HOTPINK: 4285117695,
                    INDIANRED: 3445382399,
                    INDIGO: 1258324735,
                    IVORY: 4294963455,
                    KHAKI: 4041641215,
                    LAVENDER: 3873897215,
                    LAVENDERBLUSH: 4293981695,
                    LAWNGREEN: 2096890111,
                    LEMONCHIFFON: 4294626815,
                    LIGHTBLUE: 2916673279,
                    LIGHTCORAL: 4034953471,
                    LIGHTCYAN: 3774873599,
                    LIGHTGOLDENRODYELLOW: 4210742015,
                    LIGHTGRAY: 3553874943,
                    LIGHTGREEN: 2431553791,
                    LIGHTGREY: 3553874943,
                    LIGHTPINK: 4290167295,
                    LIGHTSALMON: 4288707327,
                    LIGHTSEAGREEN: 548580095,
                    LIGHTSKYBLUE: 2278488831,
                    LIGHTSLATEGRAY: 2005441023,
                    LIGHTSLATEGREY: 2005441023,
                    LIGHTSTEELBLUE: 2965692159,
                    LIGHTYELLOW: 4294959359,
                    LIME: 16711935,
                    LIMEGREEN: 852308735,
                    LINEN: 4210091775,
                    MAGENTA: 4278255615,
                    MAROON: 2147483903,
                    MEDIUMAQUAMARINE: 1724754687,
                    MEDIUMBLUE: 52735,
                    MEDIUMORCHID: 3126187007,
                    MEDIUMPURPLE: 2473647103,
                    MEDIUMSEAGREEN: 1018393087,
                    MEDIUMSLATEBLUE: 2070474495,
                    MEDIUMSPRINGGREEN: 16423679,
                    MEDIUMTURQUOISE: 1221709055,
                    MEDIUMVIOLETRED: 3340076543,
                    MIDNIGHTBLUE: 421097727,
                    MINTCREAM: 4127193855,
                    MISTYROSE: 4293190143,
                    MOCCASIN: 4293178879,
                    NAVAJOWHITE: 4292783615,
                    NAVY: 33023,
                    OLDLACE: 4260751103,
                    OLIVE: 2155872511,
                    OLIVEDRAB: 1804477439,
                    ORANGE: 4289003775,
                    ORANGERED: 4282712319,
                    ORCHID: 3664828159,
                    PALEGOLDENROD: 4008225535,
                    PALEGREEN: 2566625535,
                    PALETURQUOISE: 2951671551,
                    PALEVIOLETRED: 3681588223,
                    PAPAYAWHIP: 4293907967,
                    PEACHPUFF: 4292524543,
                    PERU: 3448061951,
                    PINK: 4290825215,
                    PLUM: 3718307327,
                    POWDERBLUE: 2967529215,
                    PURPLE: 2147516671,
                    REBECCAPURPLE: 1714657791,
                    RED: 4278190335,
                    ROSYBROWN: 3163525119,
                    ROYALBLUE: 1097458175,
                    SADDLEBROWN: 2336560127,
                    SALMON: 4202722047,
                    SANDYBROWN: 4104413439,
                    SEAGREEN: 780883967,
                    SEASHELL: 4294307583,
                    SIENNA: 2689740287,
                    SILVER: 3233857791,
                    SKYBLUE: 2278484991,
                    SLATEBLUE: 1784335871,
                    SLATEGRAY: 1887473919,
                    SLATEGREY: 1887473919,
                    SNOW: 4294638335,
                    SPRINGGREEN: 16744447,
                    STEELBLUE: 1182971135,
                    TAN: 3535047935,
                    TEAL: 8421631,
                    THISTLE: 3636451583,
                    TOMATO: 4284696575,
                    TRANSPARENT: 0,
                    TURQUOISE: 1088475391,
                    VIOLET: 4001558271,
                    WHEAT: 4125012991,
                    WHITE: 4294967295,
                    WHITESMOKE: 4126537215,
                    YELLOW: 4294902015,
                    YELLOWGREEN: 2597139199
                };
            ! function(A) {
                A[A.BORDER_BOX = 0] = "BORDER_BOX", A[A.PADDING_BOX = 1] = "PADDING_BOX", A[A.CONTENT_BOX = 2] = "CONTENT_BOX"
            }(st || (st = {}));
            var ft, pt, ht, Bt = {
                    name: "background-clip",
                    initialValue: "border-box",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return t.map((function(A) {
                            if (TA(A)) switch (A.value) {
                                case "padding-box":
                                    return st.PADDING_BOX;
                                case "content-box":
                                    return st.CONTENT_BOX
                            }
                            return st.BORDER_BOX
                        }))
                    }
                },
                gt = {
                    name: "background-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                },
                dt = function(A, t) {
                    var e = At(A, t[0]),
                        n = t[1];
                    return n && jA(n) ? {
                        color: e,
                        stop: n
                    } : {
                        color: e,
                        stop: null
                    }
                },
                wt = function(A, t) {
                    var e = A[0],
                        n = A[A.length - 1];
                    null === e.stop && (e.stop = VA), null === n.stop && (n.stop = JA);
                    for (var r = [], o = 0, i = 0; i < A.length; i++) {
                        var s = A[i].stop;
                        if (null !== s) {
                            var a = YA(s, t);
                            a > o ? r.push(a) : r.push(o), o = a
                        } else r.push(null)
                    }
                    var u = null;
                    for (i = 0; i < r.length; i++) {
                        var c = r[i];
                        if (null === c) null === u && (u = i);
                        else if (null !== u) {
                            for (var l = i - u, f = (c - r[u - 1]) / (l + 1), p = 1; p <= l; p++) r[u + p - 1] = f * p;
                            u = null
                        }
                    }
                    return A.map((function(A, e) {
                        return {
                            color: A.color,
                            stop: Math.max(Math.min(1, r[e] / t), 0)
                        }
                    }))
                },
                vt = function(A, t, e) {
                    var n = "number" == typeof A ? A : function(A, t, e) {
                            var n = t / 2,
                                r = e / 2,
                                o = YA(A[0], t) - n,
                                i = r - YA(A[1], e);
                            return (Math.atan2(i, o) + 2 * Math.PI) % (2 * Math.PI)
                        }(A, t, e),
                        r = Math.abs(t * Math.sin(n)) + Math.abs(e * Math.cos(n)),
                        o = t / 2,
                        i = e / 2,
                        s = r / 2,
                        a = Math.sin(n - Math.PI / 2) * s,
                        u = Math.cos(n - Math.PI / 2) * s;
                    return [r, o - u, o + u, i - a, i + a]
                },
                yt = function(A, t) {
                    return Math.sqrt(A * A + t * t)
                },
                mt = function(A, t, e, n, r) {
                    return [
                        [0, 0],
                        [0, t],
                        [A, 0],
                        [A, t]
                    ].reduce((function(A, t) {
                        var o = t[0],
                            i = t[1],
                            s = yt(e - o, n - i);
                        return (r ? s < A.optimumDistance : s > A.optimumDistance) ? {
                            optimumCorner: t,
                            optimumDistance: s
                        } : A
                    }), {
                        optimumDistance: r ? 1 / 0 : -1 / 0,
                        optimumCorner: null
                    }).optimumCorner
                },
                Qt = function(A, t) {
                    var e = $A(180),
                        n = [];
                    return kA(t).forEach((function(t, r) {
                        if (0 === r) {
                            var o = t[0];
                            if (20 === o.type && -1 !== ["top", "left", "right", "bottom"].indexOf(o.value)) return void(e = qA(t));
                            if (ZA(o)) return void(e = (zA(A, o) + $A(270)) % $A(360))
                        }
                        var i = dt(A, t);
                        n.push(i)
                    })), {
                        angle: e,
                        stops: n,
                        type: ft.LINEAR_GRADIENT
                    }
                },
                Ct = function(A, t) {
                    var e = pt.CIRCLE,
                        n = ht.FARTHEST_CORNER,
                        r = [],
                        o = [];
                    return kA(t).forEach((function(t, i) {
                        var s = !0;
                        if (0 === i ? s = t.reduce((function(A, t) {
                                if (TA(t)) switch (t.value) {
                                    case "center":
                                        return o.push(WA), !1;
                                    case "top":
                                    case "left":
                                        return o.push(VA), !1;
                                    case "right":
                                    case "bottom":
                                        return o.push(JA), !1
                                } else if (jA(t) || PA(t)) return o.push(t), !1;
                                return A
                            }), s) : 1 === i && (s = t.reduce((function(A, t) {
                                if (TA(t)) switch (t.value) {
                                    case "circle":
                                        return e = pt.CIRCLE, !1;
                                    case "ellipse":
                                        return e = pt.ELLIPSE, !1;
                                    case "contain":
                                    case "closest-side":
                                        return n = ht.CLOSEST_SIDE, !1;
                                    case "farthest-side":
                                        return n = ht.FARTHEST_SIDE, !1;
                                    case "closest-corner":
                                        return n = ht.CLOSEST_CORNER, !1;
                                    case "cover":
                                    case "farthest-corner":
                                        return n = ht.FARTHEST_CORNER, !1
                                } else if (PA(t) || jA(t)) return Array.isArray(n) || (n = []), n.push(t), !1;
                                return A
                            }), s)), s) {
                            var a = dt(A, t);
                            r.push(a)
                        }
                    })), {
                        size: n,
                        shape: e,
                        stops: r,
                        position: o,
                        type: ft.RADIAL_GRADIENT
                    }
                };
            ! function(A) {
                A[A.URL = 0] = "URL", A[A.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT", A[A.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT"
            }(ft || (ft = {})),
            function(A) {
                A[A.CIRCLE = 0] = "CIRCLE", A[A.ELLIPSE = 1] = "ELLIPSE"
            }(pt || (pt = {})),
            function(A) {
                A[A.CLOSEST_SIDE = 0] = "CLOSEST_SIDE", A[A.FARTHEST_SIDE = 1] = "FARTHEST_SIDE", A[A.CLOSEST_CORNER = 2] = "CLOSEST_CORNER", A[A.FARTHEST_CORNER = 3] = "FARTHEST_CORNER"
            }(ht || (ht = {}));
            var Ut, Ft = function(A, t) {
                    if (22 === t.type) {
                        var e = {
                            url: t.value,
                            type: ft.URL
                        };
                        return A.cache.addImage(t.value), e
                    }
                    if (18 === t.type) {
                        var n = bt[t.name];
                        if (void 0 === n) throw new Error('Attempting to parse an unsupported image function "' + t.name + '"');
                        return n(A, t.values)
                    }
                    throw new Error("Unsupported image type " + t.type)
                },
                bt = {
                    "linear-gradient": function(A, t) {
                        var e = $A(180),
                            n = [];
                        return kA(t).forEach((function(t, r) {
                            if (0 === r) {
                                var o = t[0];
                                if (20 === o.type && "to" === o.value) return void(e = qA(t));
                                if (ZA(o)) return void(e = zA(A, o))
                            }
                            var i = dt(A, t);
                            n.push(i)
                        })), {
                            angle: e,
                            stops: n,
                            type: ft.LINEAR_GRADIENT
                        }
                    },
                    "-moz-linear-gradient": Qt,
                    "-ms-linear-gradient": Qt,
                    "-o-linear-gradient": Qt,
                    "-webkit-linear-gradient": Qt,
                    "radial-gradient": function(A, t) {
                        var e = pt.CIRCLE,
                            n = ht.FARTHEST_CORNER,
                            r = [],
                            o = [];
                        return kA(t).forEach((function(t, i) {
                            var s = !0;
                            if (0 === i) {
                                var a = !1;
                                s = t.reduce((function(A, t) {
                                    if (a)
                                        if (TA(t)) switch (t.value) {
                                            case "center":
                                                return o.push(WA), A;
                                            case "top":
                                            case "left":
                                                return o.push(VA), A;
                                            case "right":
                                            case "bottom":
                                                return o.push(JA), A
                                        } else(jA(t) || PA(t)) && o.push(t);
                                        else if (TA(t)) switch (t.value) {
                                        case "circle":
                                            return e = pt.CIRCLE, !1;
                                        case "ellipse":
                                            return e = pt.ELLIPSE, !1;
                                        case "at":
                                            return a = !0, !1;
                                        case "closest-side":
                                            return n = ht.CLOSEST_SIDE, !1;
                                        case "cover":
                                        case "farthest-side":
                                            return n = ht.FARTHEST_SIDE, !1;
                                        case "contain":
                                        case "closest-corner":
                                            return n = ht.CLOSEST_CORNER, !1;
                                        case "farthest-corner":
                                            return n = ht.FARTHEST_CORNER, !1
                                    } else if (PA(t) || jA(t)) return Array.isArray(n) || (n = []), n.push(t), !1;
                                    return A
                                }), s)
                            }
                            if (s) {
                                var u = dt(A, t);
                                r.push(u)
                            }
                        })), {
                            size: n,
                            shape: e,
                            stops: r,
                            position: o,
                            type: ft.RADIAL_GRADIENT
                        }
                    },
                    "-moz-radial-gradient": Ct,
                    "-ms-radial-gradient": Ct,
                    "-o-radial-gradient": Ct,
                    "-webkit-radial-gradient": Ct,
                    "-webkit-gradient": function(A, t) {
                        var e = $A(180),
                            n = [],
                            r = ft.LINEAR_GRADIENT,
                            o = pt.CIRCLE,
                            i = ht.FARTHEST_CORNER;
                        return kA(t).forEach((function(t, e) {
                            var o = t[0];
                            if (0 === e) {
                                if (TA(o) && "linear" === o.value) return void(r = ft.LINEAR_GRADIENT);
                                if (TA(o) && "radial" === o.value) return void(r = ft.RADIAL_GRADIENT)
                            }
                            if (18 === o.type)
                                if ("from" === o.name) {
                                    var i = At(A, o.values[0]);
                                    n.push({
                                        stop: VA,
                                        color: i
                                    })
                                } else if ("to" === o.name) i = At(A, o.values[0]), n.push({
                                stop: JA,
                                color: i
                            });
                            else if ("color-stop" === o.name) {
                                var s = o.values.filter(RA);
                                if (2 === s.length) {
                                    i = At(A, s[1]);
                                    var a = s[0];
                                    xA(a) && n.push({
                                        stop: {
                                            type: 16,
                                            number: 100 * a.number,
                                            flags: a.flags
                                        },
                                        color: i
                                    })
                                }
                            }
                        })), r === ft.LINEAR_GRADIENT ? {
                            angle: (e + $A(180)) % $A(360),
                            stops: n,
                            type: r
                        } : {
                            size: i,
                            shape: o,
                            stops: n,
                            position: [],
                            type: r
                        }
                    }
                },
                Et = {
                    name: "background-image",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, t) {
                        if (0 === t.length) return [];
                        var e = t[0];
                        return 20 === e.type && "none" === e.value ? [] : t.filter((function(A) {
                            return RA(A) && function(A) {
                                return !(20 === A.type && "none" === A.value || 18 === A.type && !bt[A.name])
                            }(A)
                        })).map((function(t) {
                            return Ft(A, t)
                        }))
                    }
                },
                _t = {
                    name: "background-origin",
                    initialValue: "border-box",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return t.map((function(A) {
                            if (TA(A)) switch (A.value) {
                                case "padding-box":
                                    return 1;
                                case "content-box":
                                    return 2
                            }
                            return 0
                        }))
                    }
                },
                It = {
                    name: "background-position",
                    initialValue: "0% 0%",
                    type: 1,
                    prefix: !1,
                    parse: function(A, t) {
                        return kA(t).map((function(A) {
                            return A.filter(jA)
                        })).map(GA)
                    }
                };
            ! function(A) {
                A[A.REPEAT = 0] = "REPEAT", A[A.NO_REPEAT = 1] = "NO_REPEAT", A[A.REPEAT_X = 2] = "REPEAT_X", A[A.REPEAT_Y = 3] = "REPEAT_Y"
            }(Ut || (Ut = {}));
            var Ht, Ot = {
                    name: "background-repeat",
                    initialValue: "repeat",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return kA(t).map((function(A) {
                            return A.filter(TA).map((function(A) {
                                return A.value
                            })).join(" ")
                        })).map(St)
                    }
                },
                St = function(A) {
                    switch (A) {
                        case "no-repeat":
                            return Ut.NO_REPEAT;
                        case "repeat-x":
                        case "repeat no-repeat":
                            return Ut.REPEAT_X;
                        case "repeat-y":
                        case "no-repeat repeat":
                            return Ut.REPEAT_Y;
                        case "repeat":
                        default:
                            return Ut.REPEAT
                    }
                };
            ! function(A) {
                A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover"
            }(Ht || (Ht = {}));
            var Lt, xt = {
                    name: "background-size",
                    initialValue: "0",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return kA(t).map((function(A) {
                            return A.filter(Tt)
                        }))
                    }
                },
                Tt = function(A) {
                    return TA(A) || jA(A)
                },
                Dt = function(A) {
                    return {
                        name: "border-" + A + "-color",
                        initialValue: "transparent",
                        prefix: !1,
                        type: 3,
                        format: "color"
                    }
                },
                Kt = Dt("top"),
                Mt = Dt("right"),
                Rt = Dt("bottom"),
                kt = Dt("left"),
                Nt = function(A) {
                    return {
                        name: "border-radius-" + A,
                        initialValue: "0 0",
                        prefix: !1,
                        type: 1,
                        parse: function(A, t) {
                            return GA(t.filter(jA))
                        }
                    }
                },
                Pt = Nt("top-left"),
                jt = Nt("top-right"),
                Gt = Nt("bottom-right"),
                Vt = Nt("bottom-left");
            ! function(A) {
                A[A.NONE = 0] = "NONE", A[A.SOLID = 1] = "SOLID", A[A.DASHED = 2] = "DASHED", A[A.DOTTED = 3] = "DOTTED", A[A.DOUBLE = 4] = "DOUBLE"
            }(Lt || (Lt = {}));
            var Wt, Jt = function(A) {
                    return {
                        name: "border-" + A + "-style",
                        initialValue: "solid",
                        prefix: !1,
                        type: 2,
                        parse: function(A, t) {
                            switch (t) {
                                case "none":
                                    return Lt.NONE;
                                case "dashed":
                                    return Lt.DASHED;
                                case "dotted":
                                    return Lt.DOTTED;
                                case "double":
                                    return Lt.DOUBLE
                            }
                            return Lt.SOLID
                        }
                    }
                },
                Xt = Jt("top"),
                Yt = Jt("right"),
                zt = Jt("bottom"),
                Zt = Jt("left"),
                qt = function(A) {
                    return {
                        name: "border-" + A + "-width",
                        initialValue: "0",
                        type: 0,
                        prefix: !1,
                        parse: function(A, t) {
                            return LA(t) ? t.number : 0
                        }
                    }
                },
                $t = qt("top"),
                Ae = qt("right"),
                te = qt("bottom"),
                ee = qt("left"),
                ne = {
                    name: "color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                },
                re = {
                    name: "direction",
                    initialValue: "ltr",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "rtl":
                                return 1;
                            case "ltr":
                            default:
                                return 0
                        }
                    }
                },
                oe = {
                    name: "display",
                    initialValue: "inline-block",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return t.filter(TA).reduce((function(A, t) {
                            return A | ie(t.value)
                        }), 0)
                    }
                },
                ie = function(A) {
                    switch (A) {
                        case "block":
                        case "-webkit-box":
                            return 2;
                        case "inline":
                            return 4;
                        case "run-in":
                            return 8;
                        case "flow":
                            return 16;
                        case "flow-root":
                            return 32;
                        case "table":
                            return 64;
                        case "flex":
                        case "-webkit-flex":
                            return 128;
                        case "grid":
                        case "-ms-grid":
                            return 256;
                        case "ruby":
                            return 512;
                        case "subgrid":
                            return 1024;
                        case "list-item":
                            return 2048;
                        case "table-row-group":
                            return 4096;
                        case "table-header-group":
                            return 8192;
                        case "table-footer-group":
                            return 16384;
                        case "table-row":
                            return 32768;
                        case "table-cell":
                            return 65536;
                        case "table-column-group":
                            return 131072;
                        case "table-column":
                            return 262144;
                        case "table-caption":
                            return 524288;
                        case "ruby-base":
                            return 1048576;
                        case "ruby-text":
                            return 2097152;
                        case "ruby-base-container":
                            return 4194304;
                        case "ruby-text-container":
                            return 8388608;
                        case "contents":
                            return 16777216;
                        case "inline-block":
                            return 33554432;
                        case "inline-list-item":
                            return 67108864;
                        case "inline-table":
                            return 134217728;
                        case "inline-flex":
                            return 268435456;
                        case "inline-grid":
                            return 536870912
                    }
                    return 0
                };
            ! function(A) {
                A[A.NONE = 0] = "NONE", A[A.LEFT = 1] = "LEFT", A[A.RIGHT = 2] = "RIGHT", A[A.INLINE_START = 3] = "INLINE_START", A[A.INLINE_END = 4] = "INLINE_END"
            }(Wt || (Wt = {}));
            var se, ae = {
                    name: "float",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "left":
                                return Wt.LEFT;
                            case "right":
                                return Wt.RIGHT;
                            case "inline-start":
                                return Wt.INLINE_START;
                            case "inline-end":
                                return Wt.INLINE_END
                        }
                        return Wt.NONE
                    }
                },
                ue = {
                    name: "letter-spacing",
                    initialValue: "0",
                    prefix: !1,
                    type: 0,
                    parse: function(A, t) {
                        return 20 === t.type && "normal" === t.value ? 0 : 17 === t.type || 15 === t.type ? t.number : 0
                    }
                };
            ! function(A) {
                A.NORMAL = "normal", A.STRICT = "strict"
            }(se || (se = {}));
            var ce, le = {
                    name: "line-break",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "strict":
                                return se.STRICT;
                            case "normal":
                            default:
                                return se.NORMAL
                        }
                    }
                },
                fe = {
                    name: "line-height",
                    initialValue: "normal",
                    prefix: !1,
                    type: 4
                },
                pe = function(A, t) {
                    return TA(A) && "normal" === A.value ? 1.2 * t : 17 === A.type ? t * A.number : jA(A) ? YA(A, t) : t
                },
                he = {
                    name: "list-style-image",
                    initialValue: "none",
                    type: 0,
                    prefix: !1,
                    parse: function(A, t) {
                        return 20 === t.type && "none" === t.value ? null : Ft(A, t)
                    }
                };
            ! function(A) {
                A[A.INSIDE = 0] = "INSIDE", A[A.OUTSIDE = 1] = "OUTSIDE"
            }(ce || (ce = {}));
            var Be, ge = {
                name: "list-style-position",
                initialValue: "outside",
                prefix: !1,
                type: 2,
                parse: function(A, t) {
                    switch (t) {
                        case "inside":
                            return ce.INSIDE;
                        case "outside":
                        default:
                            return ce.OUTSIDE
                    }
                }
            };
            ! function(A) {
                A[A.NONE = -1] = "NONE", A[A.DISC = 0] = "DISC", A[A.CIRCLE = 1] = "CIRCLE", A[A.SQUARE = 2] = "SQUARE", A[A.DECIMAL = 3] = "DECIMAL", A[A.CJK_DECIMAL = 4] = "CJK_DECIMAL", A[A.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO", A[A.LOWER_ROMAN = 6] = "LOWER_ROMAN", A[A.UPPER_ROMAN = 7] = "UPPER_ROMAN", A[A.LOWER_GREEK = 8] = "LOWER_GREEK", A[A.LOWER_ALPHA = 9] = "LOWER_ALPHA", A[A.UPPER_ALPHA = 10] = "UPPER_ALPHA", A[A.ARABIC_INDIC = 11] = "ARABIC_INDIC", A[A.ARMENIAN = 12] = "ARMENIAN", A[A.BENGALI = 13] = "BENGALI", A[A.CAMBODIAN = 14] = "CAMBODIAN", A[A.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH", A[A.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM", A[A.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC", A[A.DEVANAGARI = 18] = "DEVANAGARI", A[A.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC", A[A.GEORGIAN = 20] = "GEORGIAN", A[A.GUJARATI = 21] = "GUJARATI", A[A.GURMUKHI = 22] = "GURMUKHI", A[A.HEBREW = 22] = "HEBREW", A[A.HIRAGANA = 23] = "HIRAGANA", A[A.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA", A[A.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL", A[A.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL", A[A.KANNADA = 27] = "KANNADA", A[A.KATAKANA = 28] = "KATAKANA", A[A.KATAKANA_IROHA = 29] = "KATAKANA_IROHA", A[A.KHMER = 30] = "KHMER", A[A.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL", A[A.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL", A[A.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL", A[A.LAO = 34] = "LAO", A[A.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN", A[A.MALAYALAM = 36] = "MALAYALAM", A[A.MONGOLIAN = 37] = "MONGOLIAN", A[A.MYANMAR = 38] = "MYANMAR", A[A.ORIYA = 39] = "ORIYA", A[A.PERSIAN = 40] = "PERSIAN", A[A.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL", A[A.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL", A[A.TAMIL = 43] = "TAMIL", A[A.TELUGU = 44] = "TELUGU", A[A.THAI = 45] = "THAI", A[A.TIBETAN = 46] = "TIBETAN", A[A.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL", A[A.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL", A[A.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN", A[A.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN", A[A.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"
            }(Be || (Be = {}));
            var de, we = {
                    name: "list-style-type",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "disc":
                                return Be.DISC;
                            case "circle":
                                return Be.CIRCLE;
                            case "square":
                                return Be.SQUARE;
                            case "decimal":
                                return Be.DECIMAL;
                            case "cjk-decimal":
                                return Be.CJK_DECIMAL;
                            case "decimal-leading-zero":
                                return Be.DECIMAL_LEADING_ZERO;
                            case "lower-roman":
                                return Be.LOWER_ROMAN;
                            case "upper-roman":
                                return Be.UPPER_ROMAN;
                            case "lower-greek":
                                return Be.LOWER_GREEK;
                            case "lower-alpha":
                                return Be.LOWER_ALPHA;
                            case "upper-alpha":
                                return Be.UPPER_ALPHA;
                            case "arabic-indic":
                                return Be.ARABIC_INDIC;
                            case "armenian":
                                return Be.ARMENIAN;
                            case "bengali":
                                return Be.BENGALI;
                            case "cambodian":
                                return Be.CAMBODIAN;
                            case "cjk-earthly-branch":
                                return Be.CJK_EARTHLY_BRANCH;
                            case "cjk-heavenly-stem":
                                return Be.CJK_HEAVENLY_STEM;
                            case "cjk-ideographic":
                                return Be.CJK_IDEOGRAPHIC;
                            case "devanagari":
                                return Be.DEVANAGARI;
                            case "ethiopic-numeric":
                                return Be.ETHIOPIC_NUMERIC;
                            case "georgian":
                                return Be.GEORGIAN;
                            case "gujarati":
                                return Be.GUJARATI;
                            case "gurmukhi":
                                return Be.GURMUKHI;
                            case "hebrew":
                                return Be.HEBREW;
                            case "hiragana":
                                return Be.HIRAGANA;
                            case "hiragana-iroha":
                                return Be.HIRAGANA_IROHA;
                            case "japanese-formal":
                                return Be.JAPANESE_FORMAL;
                            case "japanese-informal":
                                return Be.JAPANESE_INFORMAL;
                            case "kannada":
                                return Be.KANNADA;
                            case "katakana":
                                return Be.KATAKANA;
                            case "katakana-iroha":
                                return Be.KATAKANA_IROHA;
                            case "khmer":
                                return Be.KHMER;
                            case "korean-hangul-formal":
                                return Be.KOREAN_HANGUL_FORMAL;
                            case "korean-hanja-formal":
                                return Be.KOREAN_HANJA_FORMAL;
                            case "korean-hanja-informal":
                                return Be.KOREAN_HANJA_INFORMAL;
                            case "lao":
                                return Be.LAO;
                            case "lower-armenian":
                                return Be.LOWER_ARMENIAN;
                            case "malayalam":
                                return Be.MALAYALAM;
                            case "mongolian":
                                return Be.MONGOLIAN;
                            case "myanmar":
                                return Be.MYANMAR;
                            case "oriya":
                                return Be.ORIYA;
                            case "persian":
                                return Be.PERSIAN;
                            case "simp-chinese-formal":
                                return Be.SIMP_CHINESE_FORMAL;
                            case "simp-chinese-informal":
                                return Be.SIMP_CHINESE_INFORMAL;
                            case "tamil":
                                return Be.TAMIL;
                            case "telugu":
                                return Be.TELUGU;
                            case "thai":
                                return Be.THAI;
                            case "tibetan":
                                return Be.TIBETAN;
                            case "trad-chinese-formal":
                                return Be.TRAD_CHINESE_FORMAL;
                            case "trad-chinese-informal":
                                return Be.TRAD_CHINESE_INFORMAL;
                            case "upper-armenian":
                                return Be.UPPER_ARMENIAN;
                            case "disclosure-open":
                                return Be.DISCLOSURE_OPEN;
                            case "disclosure-closed":
                                return Be.DISCLOSURE_CLOSED;
                            case "none":
                            default:
                                return Be.NONE
                        }
                    }
                },
                ve = function(A) {
                    return {
                        name: "margin-" + A,
                        initialValue: "0",
                        prefix: !1,
                        type: 4
                    }
                },
                ye = ve("top"),
                me = ve("right"),
                Qe = ve("bottom"),
                Ce = ve("left");
            ! function(A) {
                A[A.VISIBLE = 0] = "VISIBLE", A[A.HIDDEN = 1] = "HIDDEN", A[A.SCROLL = 2] = "SCROLL", A[A.AUTO = 3] = "AUTO"
            }(de || (de = {}));
            var Ue, Fe = {
                    name: "overflow",
                    initialValue: "visible",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return t.filter(TA).map((function(A) {
                            switch (A.value) {
                                case "hidden":
                                    return de.HIDDEN;
                                case "scroll":
                                    return de.SCROLL;
                                case "auto":
                                    return de.AUTO;
                                case "visible":
                                default:
                                    return de.VISIBLE
                            }
                        }))
                    }
                },
                be = {
                    name: "overflow-wrap",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "break-word":
                                return "break-word";
                            case "normal":
                            default:
                                return "normal"
                        }
                    }
                },
                Ee = function(A) {
                    return {
                        name: "padding-" + A,
                        initialValue: "0",
                        prefix: !1,
                        type: 3,
                        format: "length-percentage"
                    }
                },
                _e = Ee("top"),
                Ie = Ee("right"),
                He = Ee("bottom"),
                Oe = Ee("left");
            ! function(A) {
                A[A.LEFT = 0] = "LEFT", A[A.CENTER = 1] = "CENTER", A[A.RIGHT = 2] = "RIGHT"
            }(Ue || (Ue = {}));
            var Se, Le = {
                name: "text-align",
                initialValue: "left",
                prefix: !1,
                type: 2,
                parse: function(A, t) {
                    switch (t) {
                        case "right":
                            return Ue.RIGHT;
                        case "center":
                        case "justify":
                            return Ue.CENTER;
                        case "left":
                        default:
                            return Ue.LEFT
                    }
                }
            };
            ! function(A) {
                A[A.STATIC = 0] = "STATIC", A[A.RELATIVE = 1] = "RELATIVE", A[A.ABSOLUTE = 2] = "ABSOLUTE", A[A.FIXED = 3] = "FIXED", A[A.STICKY = 4] = "STICKY"
            }(Se || (Se = {}));
            var xe, Te = {
                    name: "position",
                    initialValue: "static",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "relative":
                                return Se.RELATIVE;
                            case "absolute":
                                return Se.ABSOLUTE;
                            case "fixed":
                                return Se.FIXED;
                            case "sticky":
                                return Se.STICKY
                        }
                        return Se.STATIC
                    }
                },
                De = {
                    name: "text-shadow",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, t) {
                        return 1 === t.length && KA(t[0], "none") ? [] : kA(t).map((function(t) {
                            for (var e = {
                                    color: lt.TRANSPARENT,
                                    offsetX: VA,
                                    offsetY: VA,
                                    blur: VA
                                }, n = 0, r = 0; r < t.length; r++) {
                                var o = t[r];
                                PA(o) ? (0 === n ? e.offsetX = o : 1 === n ? e.offsetY = o : e.blur = o, n++) : e.color = At(A, o)
                            }
                            return e
                        }))
                    }
                };
            ! function(A) {
                A[A.NONE = 0] = "NONE", A[A.LOWERCASE = 1] = "LOWERCASE", A[A.UPPERCASE = 2] = "UPPERCASE", A[A.CAPITALIZE = 3] = "CAPITALIZE"
            }(xe || (xe = {}));
            var Ke, Me = {
                    name: "text-transform",
                    initialValue: "none",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "uppercase":
                                return xe.UPPERCASE;
                            case "lowercase":
                                return xe.LOWERCASE;
                            case "capitalize":
                                return xe.CAPITALIZE
                        }
                        return xe.NONE
                    }
                },
                Re = {
                    name: "transform",
                    initialValue: "none",
                    prefix: !0,
                    type: 0,
                    parse: function(A, t) {
                        if (20 === t.type && "none" === t.value) return null;
                        if (18 === t.type) {
                            var e = ke[t.name];
                            if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"');
                            return e(t.values)
                        }
                        return null
                    }
                },
                ke = {
                    matrix: function(A) {
                        var t = A.filter((function(A) {
                            return 17 === A.type
                        })).map((function(A) {
                            return A.number
                        }));
                        return 6 === t.length ? t : null
                    },
                    matrix3d: function(A) {
                        var t = A.filter((function(A) {
                                return 17 === A.type
                            })).map((function(A) {
                                return A.number
                            })),
                            e = t[0],
                            n = t[1];
                        t[2], t[3];
                        var r = t[4],
                            o = t[5];
                        t[6], t[7], t[8], t[9], t[10], t[11];
                        var i = t[12],
                            s = t[13];
                        return t[14], t[15], 16 === t.length ? [e, n, r, o, i, s] : null
                    }
                },
                Ne = {
                    type: 16,
                    number: 50,
                    flags: 4
                },
                Pe = [Ne, Ne],
                je = {
                    name: "transform-origin",
                    initialValue: "50% 50%",
                    prefix: !0,
                    type: 1,
                    parse: function(A, t) {
                        var e = t.filter(jA);
                        return 2 !== e.length ? Pe : [e[0], e[1]]
                    }
                };
            ! function(A) {
                A[A.VISIBLE = 0] = "VISIBLE", A[A.HIDDEN = 1] = "HIDDEN", A[A.COLLAPSE = 2] = "COLLAPSE"
            }(Ke || (Ke = {}));
            var Ge, Ve = {
                name: "visible",
                initialValue: "none",
                prefix: !1,
                type: 2,
                parse: function(A, t) {
                    switch (t) {
                        case "hidden":
                            return Ke.HIDDEN;
                        case "collapse":
                            return Ke.COLLAPSE;
                        case "visible":
                        default:
                            return Ke.VISIBLE
                    }
                }
            };
            ! function(A) {
                A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all"
            }(Ge || (Ge = {}));
            var We, Je = {
                    name: "word-break",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "break-all":
                                return Ge.BREAK_ALL;
                            case "keep-all":
                                return Ge.KEEP_ALL;
                            case "normal":
                            default:
                                return Ge.NORMAL
                        }
                    }
                },
                Xe = {
                    name: "z-index",
                    initialValue: "auto",
                    prefix: !1,
                    type: 0,
                    parse: function(A, t) {
                        if (20 === t.type) return {
                            auto: !0,
                            order: 0
                        };
                        if (xA(t)) return {
                            auto: !1,
                            order: t.number
                        };
                        throw new Error("Invalid z-index number parsed")
                    }
                },
                Ye = function(A, t) {
                    if (15 === t.type) switch (t.unit.toLowerCase()) {
                        case "s":
                            return 1e3 * t.number;
                        case "ms":
                            return t.number
                    }
                    throw new Error("Unsupported time type")
                },
                ze = {
                    name: "opacity",
                    initialValue: "1",
                    type: 0,
                    prefix: !1,
                    parse: function(A, t) {
                        return xA(t) ? t.number : 1
                    }
                },
                Ze = {
                    name: "text-decoration-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                },
                qe = {
                    name: "text-decoration-line",
                    initialValue: "none",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return t.filter(TA).map((function(A) {
                            switch (A.value) {
                                case "underline":
                                    return 1;
                                case "overline":
                                    return 2;
                                case "line-through":
                                    return 3;
                                case "none":
                                    return 4
                            }
                            return 0
                        })).filter((function(A) {
                            return 0 !== A
                        }))
                    }
                },
                $e = {
                    name: "font-family",
                    initialValue: "",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        var e = [],
                            n = [];
                        return t.forEach((function(A) {
                            switch (A.type) {
                                case 20:
                                case 0:
                                    e.push(A.value);
                                    break;
                                case 17:
                                    e.push(A.number.toString());
                                    break;
                                case 4:
                                    n.push(e.join(" ")), e.length = 0
                            }
                        })), e.length && n.push(e.join(" ")), n.map((function(A) {
                            return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                        }))
                    }
                },
                An = {
                    name: "font-size",
                    initialValue: "0",
                    prefix: !1,
                    type: 3,
                    format: "length"
                },
                tn = {
                    name: "font-weight",
                    initialValue: "normal",
                    type: 0,
                    prefix: !1,
                    parse: function(A, t) {
                        if (xA(t)) return t.number;
                        if (TA(t)) switch (t.value) {
                            case "bold":
                                return 700;
                            case "normal":
                            default:
                                return 400
                        }
                        return 400
                    }
                },
                en = {
                    name: "font-variant",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, t) {
                        return t.filter(TA).map((function(A) {
                            return A.value
                        }))
                    }
                };
            ! function(A) {
                A.NORMAL = "normal", A.ITALIC = "italic", A.OBLIQUE = "oblique"
            }(We || (We = {}));
            var nn, rn = {
                    name: "font-style",
                    initialValue: "normal",
                    prefix: !1,
                    type: 2,
                    parse: function(A, t) {
                        switch (t) {
                            case "oblique":
                                return We.OBLIQUE;
                            case "italic":
                                return We.ITALIC;
                            case "normal":
                            default:
                                return We.NORMAL
                        }
                    }
                },
                on = function(A, t) {
                    return 0 != (A & t)
                },
                sn = {
                    name: "content",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, t) {
                        if (0 === t.length) return [];
                        var e = t[0];
                        return 20 === e.type && "none" === e.value ? [] : t
                    }
                },
                an = {
                    name: "counter-increment",
                    initialValue: "none",
                    prefix: !0,
                    type: 1,
                    parse: function(A, t) {
                        if (0 === t.length) return null;
                        var e = t[0];
                        if (20 === e.type && "none" === e.value) return null;
                        for (var n = [], r = t.filter(MA), o = 0; o < r.length; o++) {
                            var i = r[o],
                                s = r[o + 1];
                            if (20 === i.type) {
                                var a = s && xA(s) ? s.number : 1;
                                n.push({
                                    counter: i.value,
                                    increment: a
                                })
                            }
                        }
                        return n
                    }
                },
                un = {
                    name: "counter-reset",
                    initialValue: "none",
                    prefix: !0,
                    type: 1,
                    parse: function(A, t) {
                        if (0 === t.length) return [];
                        for (var e = [], n = t.filter(MA), r = 0; r < n.length; r++) {
                            var o = n[r],
                                i = n[r + 1];
                            if (TA(o) && "none" !== o.value) {
                                var s = i && xA(i) ? i.number : 0;
                                e.push({
                                    counter: o.value,
                                    reset: s
                                })
                            }
                        }
                        return e
                    }
                },
                cn = {
                    name: "duration",
                    initialValue: "0s",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        return t.filter(LA).map((function(t) {
                            return Ye(A, t)
                        }))
                    }
                },
                ln = {
                    name: "quotes",
                    initialValue: "none",
                    prefix: !0,
                    type: 1,
                    parse: function(A, t) {
                        if (0 === t.length) return null;
                        var e = t[0];
                        if (20 === e.type && "none" === e.value) return null;
                        var n = [],
                            r = t.filter(DA);
                        if (r.length % 2 != 0) return null;
                        for (var o = 0; o < r.length; o += 2) {
                            var i = r[o].value,
                                s = r[o + 1].value;
                            n.push({
                                open: i,
                                close: s
                            })
                        }
                        return n
                    }
                },
                fn = function(A, t, e) {
                    if (!A) return "";
                    var n = A[Math.min(t, A.length - 1)];
                    return n ? e ? n.open : n.close : ""
                },
                pn = {
                    name: "box-shadow",
                    initialValue: "none",
                    type: 1,
                    prefix: !1,
                    parse: function(A, t) {
                        return 1 === t.length && KA(t[0], "none") ? [] : kA(t).map((function(t) {
                            for (var e = {
                                    color: 255,
                                    offsetX: VA,
                                    offsetY: VA,
                                    blur: VA,
                                    spread: VA,
                                    inset: !1
                                }, n = 0, r = 0; r < t.length; r++) {
                                var o = t[r];
                                KA(o, "inset") ? e.inset = !0 : PA(o) ? (0 === n ? e.offsetX = o : 1 === n ? e.offsetY = o : 2 === n ? e.blur = o : e.spread = o, n++) : e.color = At(A, o)
                            }
                            return e
                        }))
                    }
                };
            ! function(A) {
                A[A.FILL = 0] = "FILL", A[A.STROKE = 1] = "STROKE", A[A.MARKERS = 2] = "MARKERS"
            }(nn || (nn = {}));
            for (var hn = {
                    name: "paint-order",
                    initialValue: "normal",
                    prefix: !1,
                    type: 1,
                    parse: function(A, t) {
                        var e = [nn.FILL, nn.STROKE, nn.MARKERS],
                            n = [];
                        return t.filter(TA).forEach((function(A) {
                            switch (A.value) {
                                case "stroke":
                                    n.push(nn.STROKE);
                                    break;
                                case "fill":
                                    n.push(nn.FILL);
                                    break;
                                case "markers":
                                    n.push(nn.MARKERS)
                            }
                        })), e.forEach((function(A) {
                            -1 === n.indexOf(A) && n.push(A)
                        })), n
                    }
                }, Bn = {
                    name: "-webkit-text-stroke-color",
                    initialValue: "currentcolor",
                    prefix: !1,
                    type: 3,
                    format: "color"
                }, gn = {
                    name: "-webkit-text-stroke-width",
                    initialValue: "0",
                    type: 0,
                    prefix: !1,
                    parse: function(A, t) {
                        return LA(t) ? t.number : 0
                    }
                }, dn = function() {
                    function A(A, t) {
                        var e, n;
                        this.animationDuration = yn(A, cn, t.animationDuration), this.backgroundClip = yn(A, Bt, t.backgroundClip), this.backgroundColor = yn(A, gt, t.backgroundColor), this.backgroundImage = yn(A, Et, t.backgroundImage), this.backgroundOrigin = yn(A, _t, t.backgroundOrigin), this.backgroundPosition = yn(A, It, t.backgroundPosition), this.backgroundRepeat = yn(A, Ot, t.backgroundRepeat), this.backgroundSize = yn(A, xt, t.backgroundSize), this.borderTopColor = yn(A, Kt, t.borderTopColor), this.borderRightColor = yn(A, Mt, t.borderRightColor), this.borderBottomColor = yn(A, Rt, t.borderBottomColor), this.borderLeftColor = yn(A, kt, t.borderLeftColor), this.borderTopLeftRadius = yn(A, Pt, t.borderTopLeftRadius), this.borderTopRightRadius = yn(A, jt, t.borderTopRightRadius), this.borderBottomRightRadius = yn(A, Gt, t.borderBottomRightRadius), this.borderBottomLeftRadius = yn(A, Vt, t.borderBottomLeftRadius), this.borderTopStyle = yn(A, Xt, t.borderTopStyle), this.borderRightStyle = yn(A, Yt, t.borderRightStyle), this.borderBottomStyle = yn(A, zt, t.borderBottomStyle), this.borderLeftStyle = yn(A, Zt, t.borderLeftStyle), this.borderTopWidth = yn(A, $t, t.borderTopWidth), this.borderRightWidth = yn(A, Ae, t.borderRightWidth), this.borderBottomWidth = yn(A, te, t.borderBottomWidth), this.borderLeftWidth = yn(A, ee, t.borderLeftWidth), this.boxShadow = yn(A, pn, t.boxShadow), this.color = yn(A, ne, t.color), this.direction = yn(A, re, t.direction), this.display = yn(A, oe, t.display), this.float = yn(A, ae, t.cssFloat), this.fontFamily = yn(A, $e, t.fontFamily), this.fontSize = yn(A, An, t.fontSize), this.fontStyle = yn(A, rn, t.fontStyle), this.fontVariant = yn(A, en, t.fontVariant), this.fontWeight = yn(A, tn, t.fontWeight), this.letterSpacing = yn(A, ue, t.letterSpacing), this.lineBreak = yn(A, le, t.lineBreak), this.lineHeight = yn(A, fe, t.lineHeight), this.listStyleImage = yn(A, he, t.listStyleImage), this.listStylePosition = yn(A, ge, t.listStylePosition), this.listStyleType = yn(A, we, t.listStyleType), this.marginTop = yn(A, ye, t.marginTop), this.marginRight = yn(A, me, t.marginRight), this.marginBottom = yn(A, Qe, t.marginBottom), this.marginLeft = yn(A, Ce, t.marginLeft), this.opacity = yn(A, ze, t.opacity);
                        var r = yn(A, Fe, t.overflow);
                        this.overflowX = r[0], this.overflowY = r[r.length > 1 ? 1 : 0], this.overflowWrap = yn(A, be, t.overflowWrap), this.paddingTop = yn(A, _e, t.paddingTop), this.paddingRight = yn(A, Ie, t.paddingRight), this.paddingBottom = yn(A, He, t.paddingBottom), this.paddingLeft = yn(A, Oe, t.paddingLeft), this.paintOrder = yn(A, hn, t.paintOrder), this.position = yn(A, Te, t.position), this.textAlign = yn(A, Le, t.textAlign), this.textDecorationColor = yn(A, Ze, null !== (e = t.textDecorationColor) && void 0 !== e ? e : t.color), this.textDecorationLine = yn(A, qe, null !== (n = t.textDecorationLine) && void 0 !== n ? n : t.textDecoration), this.textShadow = yn(A, De, t.textShadow), this.textTransform = yn(A, Me, t.textTransform), this.transform = yn(A, Re, t.transform), this.transformOrigin = yn(A, je, t.transformOrigin), this.transitionDuration = yn(A, cn, t.transitionDuration), this.visibility = yn(A, Ve, t.visibility), this.webkitTextStrokeColor = yn(A, Bn, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = yn(A, gn, t.webkitTextStrokeWidth), this.wordBreak = yn(A, Je, t.wordBreak), this.zIndex = yn(A, Xe, t.zIndex)
                    }
                    return A.prototype.isVisible = function() {
                        return this.display > 0 && this.opacity > 0 && this.visibility === Ke.VISIBLE
                    }, A.prototype.isTransparent = function() {
                        return tt(this.backgroundColor)
                    }, A.prototype.isTransformed = function() {
                        return null !== this.transform
                    }, A.prototype.isPositioned = function() {
                        return this.position !== Se.STATIC
                    }, A.prototype.isPositionedWithZIndex = function() {
                        return this.isPositioned() && !this.zIndex.auto
                    }, A.prototype.isFloating = function() {
                        return this.float !== Wt.NONE
                    }, A.prototype.isInlineLevel = function() {
                        return on(this.display, 4) || on(this.display, 33554432) || on(this.display, 268435456) || on(this.display, 536870912) || on(this.display, 67108864) || on(this.display, 134217728)
                    }, A
                }(), wn = function(A, t) {
                    this.content = yn(A, sn, t.content), this.quotes = yn(A, ln, t.quotes)
                }, vn = function(A, t) {
                    this.counterIncrement = yn(A, an, t.counterIncrement), this.counterReset = yn(A, un, t.counterReset)
                }, yn = function(A, t, e) {
                    var n = new OA,
                        r = null != e ? e.toString() : t.initialValue;
                    n.write(r);
                    var o = new SA(n.read());
                    switch (t.type) {
                        case 2:
                            var i = o.parseComponentValue();
                            return t.parse(A, TA(i) ? i.value : t.initialValue);
                        case 0:
                            return t.parse(A, o.parseComponentValue());
                        case 1:
                            return t.parse(A, o.parseComponentValues());
                        case 4:
                            return o.parseComponentValue();
                        case 3:
                            switch (t.format) {
                                case "angle":
                                    return zA(A, o.parseComponentValue());
                                case "color":
                                    return At(A, o.parseComponentValue());
                                case "image":
                                    return Ft(A, o.parseComponentValue());
                                case "length":
                                    var s = o.parseComponentValue();
                                    return PA(s) ? s : VA;
                                case "length-percentage":
                                    var a = o.parseComponentValue();
                                    return jA(a) ? a : VA;
                                case "time":
                                    return Ye(A, o.parseComponentValue())
                            }
                    }
                }, mn = function(A, t) {
                    this.context = A, this.styles = new dn(A, window.getComputedStyle(t, null)), this.textNodes = [], this.elements = [], mr(t) && (this.styles.animationDuration.some((function(A) {
                        return A > 0
                    })) && (t.style.animationDuration = "0s"), this.styles.transitionDuration.some((function(A) {
                        return A > 0
                    })) && (t.style.transitionDuration = "0s"), null !== this.styles.transform && (t.style.transform = "none")), this.bounds = a(this.context, t), this.flags = 0
                }, Qn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Cn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Un = 0; Un < Qn.length; Un++) Cn[Qn.charCodeAt(Un)] = Un;
            for (var Fn = function(A, t, e) {
                    return A.slice ? A.slice(t, e) : new Uint16Array(Array.prototype.slice.call(A, t, e))
                }, bn = function() {
                    function A(A, t, e, n, r, o) {
                        this.initialValue = A, this.errorValue = t, this.highStart = e, this.highValueIndex = n, this.index = r, this.data = o
                    }
                    return A.prototype.get = function(A) {
                        var t;
                        if (A >= 0) {
                            if (A < 55296 || A > 56319 && A <= 65535) return t = ((t = this.index[A >> 5]) << 2) + (31 & A), this.data[t];
                            if (A <= 65535) return t = ((t = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[t];
                            if (A < this.highStart) return t = 2080 + (A >> 11), t = this.index[t], t += A >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & A), this.data[t];
                            if (A <= 1114111) return this.data[this.highValueIndex]
                        }
                        return this.errorValue
                    }, A
                }(), En = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), In = 0; In < En.length; In++) _n[En.charCodeAt(In)] = In;
            var Hn, On = 8,
                Sn = 9,
                Ln = 11,
                xn = 12,
                Tn = function() {
                    for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
                    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                    var e = A.length;
                    if (!e) return "";
                    for (var n = [], r = -1, o = ""; ++r < e;) {
                        var i = A[r];
                        i <= 65535 ? n.push(i) : (i -= 65536, n.push(55296 + (i >> 10), i % 1024 + 56320)), (r + 1 === e || n.length > 16384) && (o += String.fromCharCode.apply(String, n), n.length = 0)
                    }
                    return o
                },
                Dn = function(A, t) {
                    var e, n, r, o = function(A) {
                            var t, e, n, r, o, i = .75 * A.length,
                                s = A.length,
                                a = 0;
                            "=" === A[A.length - 1] && (i--, "=" === A[A.length - 2] && i--);
                            var u = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(i) : new Array(i),
                                c = Array.isArray(u) ? u : new Uint8Array(u);
                            for (t = 0; t < s; t += 4) e = Cn[A.charCodeAt(t)], n = Cn[A.charCodeAt(t + 1)], r = Cn[A.charCodeAt(t + 2)], o = Cn[A.charCodeAt(t + 3)], c[a++] = e << 2 | n >> 4, c[a++] = (15 & n) << 4 | r >> 2, c[a++] = (3 & r) << 6 | 63 & o;
                            return u
                        }(A),
                        i = Array.isArray(o) ? function(A) {
                            for (var t = A.length, e = [], n = 0; n < t; n += 4) e.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                            return e
                        }(o) : new Uint32Array(o),
                        s = Array.isArray(o) ? function(A) {
                            for (var t = A.length, e = [], n = 0; n < t; n += 2) e.push(A[n + 1] << 8 | A[n]);
                            return e
                        }(o) : new Uint16Array(o),
                        a = Fn(s, 12, i[4] / 2),
                        u = 2 === i[5] ? Fn(s, (24 + i[4]) / 2) : (e = i, n = Math.ceil((24 + i[4]) / 4), e.slice ? e.slice(n, r) : new Uint32Array(Array.prototype.slice.call(e, n, r)));
                    return new bn(i[0], i[1], i[2], i[3], a, u)
                }("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="),
                Kn = function(A) {
                    return Dn.get(A)
                },
                Mn = function(A, t, e) {
                    var n = e - 2,
                        r = t[n],
                        o = t[e - 1],
                        i = t[e];
                    if (2 === o && 3 === i) return "×";
                    if (2 === o || 3 === o || 4 === o) return "÷";
                    if (2 === i || 3 === i || 4 === i) return "÷";
                    if (o === On && -1 !== [On, Sn, Ln, xn].indexOf(i)) return "×";
                    if (!(o !== Ln && o !== Sn || i !== Sn && 10 !== i)) return "×";
                    if ((o === xn || 10 === o) && 10 === i) return "×";
                    if (13 === i || 5 === i) return "×";
                    if (7 === i) return "×";
                    if (1 === o) return "×";
                    if (13 === o && 14 === i) {
                        for (; 5 === r;) r = t[--n];
                        if (14 === r) return "×"
                    }
                    if (15 === o && 15 === i) {
                        for (var s = 0; 15 === r;) s++, r = t[--n];
                        if (s % 2 == 0) return "×"
                    }
                    return "÷"
                },
                Rn = function(A) {
                    var t = function(A) {
                            for (var t = [], e = 0, n = A.length; e < n;) {
                                var r = A.charCodeAt(e++);
                                if (r >= 55296 && r <= 56319 && e < n) {
                                    var o = A.charCodeAt(e++);
                                    56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r), e--)
                                } else t.push(r)
                            }
                            return t
                        }(A),
                        e = t.length,
                        n = 0,
                        r = 0,
                        o = t.map(Kn);
                    return {
                        next: function() {
                            if (n >= e) return {
                                done: !0,
                                value: null
                            };
                            for (var A = "×"; n < e && "×" === (A = Mn(0, o, ++n)););
                            if ("×" !== A || n === e) {
                                var i = Tn.apply(null, t.slice(r, n));
                                return r = n, {
                                    value: i,
                                    done: !1
                                }
                            }
                            return {
                                done: !0,
                                value: null
                            }
                        }
                    }
                },
                kn = function(A) {
                    for (var t, e = Rn(A), n = []; !(t = e.next()).done;) t.value && n.push(t.value.slice());
                    return n
                },
                Nn = function(A) {
                    return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
                },
                Pn = function(A, t, e, n, r) {
                    var o = "http://www.w3.org/2000/svg",
                        i = document.createElementNS(o, "svg"),
                        s = document.createElementNS(o, "foreignObject");
                    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", t.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", e.toString()), s.setAttributeNS(null, "y", n.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(r), i
                },
                jn = function(A) {
                    return new Promise((function(t, e) {
                        var n = new Image;
                        n.onload = function() {
                            return t(n)
                        }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                    }))
                },
                Gn = {get SUPPORT_RANGE_BOUNDS() {
                        var A = function(A) {
                            if (A.createRange) {
                                var t = A.createRange();
                                if (t.getBoundingClientRect) {
                                    var e = A.createElement("boundtest");
                                    e.style.height = "123px", e.style.display = "block", A.body.appendChild(e), t.selectNode(e);
                                    var n = t.getBoundingClientRect(),
                                        r = Math.round(n.height);
                                    if (A.body.removeChild(e), 123 === r) return !0
                                }
                            }
                            return !1
                        }(document);
                        return Object.defineProperty(Gn, "SUPPORT_RANGE_BOUNDS", {
                            value: A
                        }), A
                    },
                    get SUPPORT_WORD_BREAKING() {
                        var A = Gn.SUPPORT_RANGE_BOUNDS && function(A) {
                            var t = A.createElement("boundtest");
                            t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", A.body.appendChild(t);
                            var e = A.createRange();
                            t.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                            var n = t.firstChild,
                                r = u(n.data).map((function(A) {
                                    return c(A)
                                })),
                                o = 0,
                                i = {},
                                s = r.every((function(A, t) {
                                    e.setStart(n, o), e.setEnd(n, o + A.length);
                                    var r = e.getBoundingClientRect();
                                    o += A.length;
                                    var s = r.x > i.x || r.y > i.y;
                                    return i = r, 0 === t || s
                                }));
                            return A.body.removeChild(t), s
                        }(document);
                        return Object.defineProperty(Gn, "SUPPORT_WORD_BREAKING", {
                            value: A
                        }), A
                    },
                    get SUPPORT_SVG_DRAWING() {
                        var A = function(A) {
                            var t = new Image,
                                e = A.createElement("canvas"),
                                n = e.getContext("2d");
                            if (!n) return !1;
                            t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                            try {
                                n.drawImage(t, 0, 0), e.toDataURL()
                            } catch (A) {
                                return !1
                            }
                            return !0
                        }(document);
                        return Object.defineProperty(Gn, "SUPPORT_SVG_DRAWING", {
                            value: A
                        }), A
                    },
                    get SUPPORT_FOREIGNOBJECT_DRAWING() {
                        var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(A) {
                            var t = A.createElement("canvas");
                            t.width = 100, t.height = 100;
                            var e = t.getContext("2d");
                            if (!e) return Promise.reject(!1);
                            e.fillStyle = "rgb(0, 255, 0)", e.fillRect(0, 0, 100, 100);
                            var n = new Image,
                                r = t.toDataURL();
                            n.src = r;
                            var o = Pn(100, 100, 0, 0, n);
                            return e.fillStyle = "red", e.fillRect(0, 0, 100, 100), jn(o).then((function(t) {
                                e.drawImage(t, 0, 0);
                                var n = e.getImageData(0, 0, 100, 100).data;
                                e.fillStyle = "red", e.fillRect(0, 0, 100, 100);
                                var o = A.createElement("div");
                                return o.style.backgroundImage = "url(" + r + ")", o.style.height = "100px", Nn(n) ? jn(Pn(100, 100, 0, 0, o)) : Promise.reject(!1)
                            })).then((function(A) {
                                return e.drawImage(A, 0, 0), Nn(e.getImageData(0, 0, 100, 100).data)
                            })).catch((function() {
                                return !1
                            }))
                        }(document) : Promise.resolve(!1);
                        return Object.defineProperty(Gn, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                            value: A
                        }), A
                    },
                    get SUPPORT_CORS_IMAGES() {
                        var A = void 0 !== (new Image).crossOrigin;
                        return Object.defineProperty(Gn, "SUPPORT_CORS_IMAGES", {
                            value: A
                        }), A
                    },
                    get SUPPORT_RESPONSE_TYPE() {
                        var A = "string" == typeof(new XMLHttpRequest).responseType;
                        return Object.defineProperty(Gn, "SUPPORT_RESPONSE_TYPE", {
                            value: A
                        }), A
                    },
                    get SUPPORT_CORS_XHR() {
                        var A = "withCredentials" in new XMLHttpRequest;
                        return Object.defineProperty(Gn, "SUPPORT_CORS_XHR", {
                            value: A
                        }), A
                    }
                },
                Vn = function(A, t) {
                    this.text = A, this.bounds = t
                },
                Wn = function(A, t) {
                    var e = t.ownerDocument;
                    if (e) {
                        var n = e.createElement("html2canvaswrapper");
                        n.appendChild(t.cloneNode(!0));
                        var r = t.parentNode;
                        if (r) {
                            r.replaceChild(n, t);
                            var o = a(A, n);
                            return n.firstChild && r.replaceChild(n.firstChild, n), o
                        }
                    }
                    return s.EMPTY
                },
                Jn = function(A, t, e) {
                    var n = A.ownerDocument;
                    if (!n) throw new Error("Node has no owner document");
                    var r = n.createRange();
                    return r.setStart(A, t), r.setEnd(A, t + e), r
                },
                Xn = function(A, t, e, n) {
                    return s.fromClientRect(A, Jn(t, e, n).getBoundingClientRect())
                },
                Yn = function(A, t) {
                    return 0 !== t.letterSpacing ? kn(A) : Zn(A, t)
                },
                zn = [32, 160, 4961, 65792, 65793, 4153, 4241],
                Zn = function(A, t) {
                    for (var e, n = function(A, t) {
                            var e = u(A),
                                n = q(e, t),
                                r = n[0],
                                o = n[1],
                                i = n[2],
                                s = e.length,
                                a = 0,
                                c = 0;
                            return {
                                next: function() {
                                    if (c >= s) return {
                                        done: !0,
                                        value: null
                                    };
                                    for (var A = "×"; c < s && "×" === (A = Z(e, o, r, ++c, i)););
                                    if ("×" !== A || c === s) {
                                        var t = new $(e, A, a, c);
                                        return a = c, {
                                            value: t,
                                            done: !1
                                        }
                                    }
                                    return {
                                        done: !0,
                                        value: null
                                    }
                                }
                            }
                        }(A, {
                            lineBreak: t.lineBreak,
                            wordBreak: "break-word" === t.overflowWrap ? "break-word" : t.wordBreak
                        }), r = [], o = function() {
                            if (e.value) {
                                var A = e.value.slice(),
                                    t = u(A),
                                    n = "";
                                t.forEach((function(A) {
                                    -1 === zn.indexOf(A) ? n += c(A) : (n.length && r.push(n), r.push(c(A)), n = "")
                                })), n.length && r.push(n)
                            }
                        }; !(e = n.next()).done;) o();
                    return r
                },
                qn = function(A, t, e) {
                    this.text = $n(t.data, e.textTransform), this.textBounds = function(A, t, e, n) {
                        var r = Yn(t, e),
                            o = [],
                            i = 0;
                        return r.forEach((function(t) {
                            if (e.textDecorationLine.length || t.trim().length > 0)
                                if (Gn.SUPPORT_RANGE_BOUNDS) Gn.SUPPORT_WORD_BREAKING ? o.push(new Vn(t, Xn(A, n, i, t.length))) : o.push(new Vn(t, s.fromDOMRectList(A, Jn(n, i, t.length).getClientRects())));
                                else {
                                    var r = n.splitText(t.length);
                                    o.push(new Vn(t, Wn(A, n))), n = r
                                }
                            else Gn.SUPPORT_RANGE_BOUNDS || (n = n.splitText(t.length));
                            i += t.length
                        })), o
                    }(A, this.text, e, t)
                },
                $n = function(A, t) {
                    switch (t) {
                        case xe.LOWERCASE:
                            return A.toLowerCase();
                        case xe.CAPITALIZE:
                            return A.replace(Ar, tr);
                        case xe.UPPERCASE:
                            return A.toUpperCase();
                        default:
                            return A
                    }
                },
                Ar = /(^|\s|:|-|\(|\))([a-z])/g,
                tr = function(A, t, e) {
                    return A.length > 0 ? t + e.toUpperCase() : A
                },
                er = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n.src = e.currentSrc || e.src, n.intrinsicWidth = e.naturalWidth, n.intrinsicHeight = e.naturalHeight, n.context.cache.addImage(n.src), n
                    }
                    return t(e, A), e
                }(mn),
                nr = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n.canvas = e, n.intrinsicWidth = e.width, n.intrinsicHeight = e.height, n
                    }
                    return t(e, A), e
                }(mn),
                rr = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this,
                            r = new XMLSerializer,
                            o = a(t, e);
                        return e.setAttribute("width", o.width + "px"), e.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(e)), n.intrinsicWidth = e.width.baseVal.value, n.intrinsicHeight = e.height.baseVal.value, n.context.cache.addImage(n.svg), n
                    }
                    return t(e, A), e
                }(mn),
                or = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n.value = e.value, n
                    }
                    return t(e, A), e
                }(mn),
                ir = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n.start = e.start, n.reversed = "boolean" == typeof e.reversed && !0 === e.reversed, n
                    }
                    return t(e, A), e
                }(mn),
                sr = [{
                    type: 15,
                    flags: 0,
                    unit: "px",
                    number: 3
                }],
                ar = [{
                    type: 16,
                    flags: 0,
                    number: 50
                }],
                ur = "password",
                cr = function(A) {
                    function e(t, e) {
                        var n, r, o, i = A.call(this, t, e) || this;
                        switch (i.type = e.type.toLowerCase(), i.checked = e.checked, i.value = 0 === (r = (n = e).type === ur ? new Array(n.value.length + 1).join("•") : n.value).length ? n.placeholder || "" : r, "checkbox" !== i.type && "radio" !== i.type || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = Lt.SOLID, i.styles.backgroundClip = [st.BORDER_BOX], i.styles.backgroundOrigin = [0], i.bounds = (o = i.bounds).width > o.height ? new s(o.left + (o.width - o.height) / 2, o.top, o.height, o.height) : o.width < o.height ? new s(o.left, o.top + (o.height - o.width) / 2, o.width, o.width) : o), i.type) {
                            case "checkbox":
                                i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = sr;
                                break;
                            case "radio":
                                i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = ar
                        }
                        return i
                    }
                    return t(e, A), e
                }(mn),
                lr = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this,
                            r = e.options[e.selectedIndex || 0];
                        return n.value = r && r.text || "", n
                    }
                    return t(e, A), e
                }(mn),
                fr = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n.value = e.value, n
                    }
                    return t(e, A), e
                }(mn),
                pr = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        n.src = e.src, n.width = parseInt(e.width, 10) || 0, n.height = parseInt(e.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
                        try {
                            if (e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement) {
                                n.tree = gr(t, e.contentWindow.document.documentElement);
                                var r = e.contentWindow.document.documentElement ? ct(t, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : lt.TRANSPARENT,
                                    o = e.contentWindow.document.body ? ct(t, getComputedStyle(e.contentWindow.document.body).backgroundColor) : lt.TRANSPARENT;
                                n.backgroundColor = tt(r) ? tt(o) ? n.styles.backgroundColor : o : r
                            }
                        } catch (A) {}
                        return n
                    }
                    return t(e, A), e
                }(mn),
                hr = ["OL", "UL", "MENU"],
                Br = function(A, t) {
                    return Ir(t) ? new er(A, t) : _r(t) ? new nr(A, t) : br(t) ? new rr(A, t) : Cr(t) ? new or(A, t) : Ur(t) ? new ir(A, t) : Fr(t) ? new cr(A, t) : xr(t) ? new lr(A, t) : Lr(t) ? new fr(A, t) : Hr(t) ? new pr(A, t) : new mn(A, t)
                },
                gr = function(A, t) {
                    var e = Br(A, t);
                    return e.flags |= 4,
                        function A(t, e, n, r) {
                            for (var o = e.firstChild, i = void 0; o; o = i)
                                if (i = o.nextSibling, vr(o) && o.data.trim().length > 0) n.textNodes.push(new qn(t, o, n.styles));
                                else if (yr(o))
                                if (Tr(o) && o.assignedNodes) o.assignedNodes().forEach((function(e) {
                                    return A(t, e, n, r)
                                }));
                                else {
                                    var s = Br(t, o);
                                    s.styles.isVisible() && (dr(o, s, r) ? s.flags |= 4 : wr(s.styles) && (s.flags |= 2), -1 !== hr.indexOf(o.tagName) && (s.flags |= 8), n.elements.push(s), o.slot, o.shadowRoot ? A(t, o.shadowRoot, s, r) : Lr(o) || br(o) || xr(o) || A(t, o, s, r))
                                }
                        }(A, t, e, e), e
                },
                dr = function(A, t, e) {
                    return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || Er(A) && e.styles.isTransparent()
                },
                wr = function(A) {
                    return A.isPositioned() || A.isFloating()
                },
                vr = function(A) {
                    return A.nodeType === Node.TEXT_NODE
                },
                yr = function(A) {
                    return A.nodeType === Node.ELEMENT_NODE
                },
                mr = function(A) {
                    return yr(A) && void 0 !== A.style && !Qr(A)
                },
                Qr = function(A) {
                    return "object" === i(A.className)
                },
                Cr = function(A) {
                    return "LI" === A.tagName
                },
                Ur = function(A) {
                    return "OL" === A.tagName
                },
                Fr = function(A) {
                    return "INPUT" === A.tagName
                },
                br = function(A) {
                    return "svg" === A.tagName
                },
                Er = function(A) {
                    return "BODY" === A.tagName
                },
                _r = function(A) {
                    return "CANVAS" === A.tagName
                },
                Ir = function(A) {
                    return "IMG" === A.tagName
                },
                Hr = function(A) {
                    return "IFRAME" === A.tagName
                },
                Or = function(A) {
                    return "STYLE" === A.tagName
                },
                Sr = function(A) {
                    return "SCRIPT" === A.tagName
                },
                Lr = function(A) {
                    return "TEXTAREA" === A.tagName
                },
                xr = function(A) {
                    return "SELECT" === A.tagName
                },
                Tr = function(A) {
                    return "SLOT" === A.tagName
                },
                Dr = function() {
                    function A() {
                        this.counters = {}
                    }
                    return A.prototype.getCounterValue = function(A) {
                        var t = this.counters[A];
                        return t && t.length ? t[t.length - 1] : 1
                    }, A.prototype.getCounterValues = function(A) {
                        var t = this.counters[A];
                        return t || []
                    }, A.prototype.pop = function(A) {
                        var t = this;
                        A.forEach((function(A) {
                            return t.counters[A].pop()
                        }))
                    }, A.prototype.parse = function(A) {
                        var t = this,
                            e = A.counterIncrement,
                            n = A.counterReset,
                            r = !0;
                        null !== e && e.forEach((function(A) {
                            var e = t.counters[A.counter];
                            e && 0 !== A.increment && (r = !1, e.length || e.push(1), e[Math.max(0, e.length - 1)] += A.increment)
                        }));
                        var o = [];
                        return r && n.forEach((function(A) {
                            var e = t.counters[A.counter];
                            o.push(A.counter), e || (e = t.counters[A.counter] = []), e.push(A.reset)
                        })), o
                    }, A
                }(),
                Kr = {
                    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
                },
                Mr = {
                    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
                },
                Rr = {
                    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
                },
                kr = {
                    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
                },
                Nr = function(A, t, e, n, r, o) {
                    return A < t || A > e ? Wr(A, r, o.length > 0) : n.integers.reduce((function(t, e, r) {
                        for (; A >= e;) A -= e, t += n.values[r];
                        return t
                    }), "") + o
                },
                Pr = function(A, t, e, n) {
                    var r = "";
                    do {
                        e || A--, r = n(A) + r, A /= t
                    } while (A * t >= t);
                    return r
                },
                jr = function(A, t, e, n, r) {
                    var o = e - t + 1;
                    return (A < 0 ? "-" : "") + (Pr(Math.abs(A), o, n, (function(A) {
                        return c(Math.floor(A % o) + t)
                    })) + r)
                },
                Gr = function(A, t, e) {
                    void 0 === e && (e = ". ");
                    var n = t.length;
                    return Pr(Math.abs(A), n, !1, (function(A) {
                        return t[Math.floor(A % n)]
                    })) + e
                },
                Vr = function(A, t, e, n, r, o) {
                    if (A < -9999 || A > 9999) return Wr(A, Be.CJK_DECIMAL, r.length > 0);
                    var i = Math.abs(A),
                        s = r;
                    if (0 === i) return t[0] + s;
                    for (var a = 0; i > 0 && a <= 4; a++) {
                        var u = i % 10;
                        0 === u && on(o, 1) && "" !== s ? s = t[u] + s : u > 1 || 1 === u && 0 === a || 1 === u && 1 === a && on(o, 2) || 1 === u && 1 === a && on(o, 4) && A > 100 || 1 === u && a > 1 && on(o, 8) ? s = t[u] + (a > 0 ? e[a - 1] : "") + s : 1 === u && a > 0 && (s = e[a - 1] + s), i = Math.floor(i / 10)
                    }
                    return (A < 0 ? n : "") + s
                },
                Wr = function(A, t, e) {
                    var n = e ? ". " : "",
                        r = e ? "、" : "",
                        o = e ? ", " : "",
                        i = e ? " " : "";
                    switch (t) {
                        case Be.DISC:
                            return "•" + i;
                        case Be.CIRCLE:
                            return "◦" + i;
                        case Be.SQUARE:
                            return "◾" + i;
                        case Be.DECIMAL_LEADING_ZERO:
                            var s = jr(A, 48, 57, !0, n);
                            return s.length < 4 ? "0" + s : s;
                        case Be.CJK_DECIMAL:
                            return Gr(A, "〇一二三四五六七八九", r);
                        case Be.LOWER_ROMAN:
                            return Nr(A, 1, 3999, Kr, Be.DECIMAL, n).toLowerCase();
                        case Be.UPPER_ROMAN:
                            return Nr(A, 1, 3999, Kr, Be.DECIMAL, n);
                        case Be.LOWER_GREEK:
                            return jr(A, 945, 969, !1, n);
                        case Be.LOWER_ALPHA:
                            return jr(A, 97, 122, !1, n);
                        case Be.UPPER_ALPHA:
                            return jr(A, 65, 90, !1, n);
                        case Be.ARABIC_INDIC:
                            return jr(A, 1632, 1641, !0, n);
                        case Be.ARMENIAN:
                        case Be.UPPER_ARMENIAN:
                            return Nr(A, 1, 9999, Mr, Be.DECIMAL, n);
                        case Be.LOWER_ARMENIAN:
                            return Nr(A, 1, 9999, Mr, Be.DECIMAL, n).toLowerCase();
                        case Be.BENGALI:
                            return jr(A, 2534, 2543, !0, n);
                        case Be.CAMBODIAN:
                        case Be.KHMER:
                            return jr(A, 6112, 6121, !0, n);
                        case Be.CJK_EARTHLY_BRANCH:
                            return Gr(A, "子丑寅卯辰巳午未申酉戌亥", r);
                        case Be.CJK_HEAVENLY_STEM:
                            return Gr(A, "甲乙丙丁戊己庚辛壬癸", r);
                        case Be.CJK_IDEOGRAPHIC:
                        case Be.TRAD_CHINESE_INFORMAL:
                            return Vr(A, "零一二三四五六七八九", "十百千萬", "負", r, 14);
                        case Be.TRAD_CHINESE_FORMAL:
                            return Vr(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
                        case Be.SIMP_CHINESE_INFORMAL:
                            return Vr(A, "零一二三四五六七八九", "十百千萬", "负", r, 14);
                        case Be.SIMP_CHINESE_FORMAL:
                            return Vr(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
                        case Be.JAPANESE_INFORMAL:
                            return Vr(A, "〇一二三四五六七八九", "十百千万", "マイナス", r, 0);
                        case Be.JAPANESE_FORMAL:
                            return Vr(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", r, 7);
                        case Be.KOREAN_HANGUL_FORMAL:
                            return Vr(A, "영일이삼사오육칠팔구", "십백천만", "마이너스", o, 7);
                        case Be.KOREAN_HANJA_INFORMAL:
                            return Vr(A, "零一二三四五六七八九", "十百千萬", "마이너스", o, 0);
                        case Be.KOREAN_HANJA_FORMAL:
                            return Vr(A, "零壹貳參四五六七八九", "拾百千", "마이너스", o, 7);
                        case Be.DEVANAGARI:
                            return jr(A, 2406, 2415, !0, n);
                        case Be.GEORGIAN:
                            return Nr(A, 1, 19999, kr, Be.DECIMAL, n);
                        case Be.GUJARATI:
                            return jr(A, 2790, 2799, !0, n);
                        case Be.GURMUKHI:
                            return jr(A, 2662, 2671, !0, n);
                        case Be.HEBREW:
                            return Nr(A, 1, 10999, Rr, Be.DECIMAL, n);
                        case Be.HIRAGANA:
                            return Gr(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                        case Be.HIRAGANA_IROHA:
                            return Gr(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                        case Be.KANNADA:
                            return jr(A, 3302, 3311, !0, n);
                        case Be.KATAKANA:
                            return Gr(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                        case Be.KATAKANA_IROHA:
                            return Gr(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                        case Be.LAO:
                            return jr(A, 3792, 3801, !0, n);
                        case Be.MONGOLIAN:
                            return jr(A, 6160, 6169, !0, n);
                        case Be.MYANMAR:
                            return jr(A, 4160, 4169, !0, n);
                        case Be.ORIYA:
                            return jr(A, 2918, 2927, !0, n);
                        case Be.PERSIAN:
                            return jr(A, 1776, 1785, !0, n);
                        case Be.TAMIL:
                            return jr(A, 3046, 3055, !0, n);
                        case Be.TELUGU:
                            return jr(A, 3174, 3183, !0, n);
                        case Be.THAI:
                            return jr(A, 3664, 3673, !0, n);
                        case Be.TIBETAN:
                            return jr(A, 3872, 3881, !0, n);
                        case Be.DECIMAL:
                        default:
                            return jr(A, 48, 57, !0, n)
                    }
                },
                Jr = function() {
                    function A(A, t, e) {
                        if (this.context = A, this.options = e, this.scrolledElements = [], this.referenceElement = t, this.counters = new Dr, this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
                        this.documentElement = this.cloneNode(t.ownerDocument.documentElement)
                    }
                    return A.prototype.toIFrame = function(A, t) {
                        var e = this,
                            o = Yr(A, t);
                        if (!o.contentWindow) return Promise.reject("Unable to find iframe window");
                        var i = A.defaultView.pageXOffset,
                            s = A.defaultView.pageYOffset,
                            a = o.contentWindow,
                            u = a.document,
                            c = qr(o).then((function() {
                                return n(e, void 0, void 0, (function() {
                                    var A, e;
                                    return r(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return this.scrolledElements.forEach(no), a && (a.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || a.scrollY === t.top && a.scrollX === t.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), A = this.options.onclone, void 0 === (e = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : u.fonts && u.fonts.ready ? [4, u.fonts.ready] : [3, 2];
                                            case 1:
                                                n.sent(), n.label = 2;
                                            case 2:
                                                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Zr(u)] : [3, 4];
                                            case 3:
                                                n.sent(), n.label = 4;
                                            case 4:
                                                return "function" == typeof A ? [2, Promise.resolve().then((function() {
                                                    return A(u, e)
                                                })).then((function() {
                                                    return o
                                                }))] : [2, o]
                                        }
                                    }))
                                }))
                            }));
                        return u.open(), u.write(to(document.doctype) + "<html></html>"), eo(this.referenceElement.ownerDocument, i, s), u.replaceChild(u.adoptNode(this.documentElement), u.documentElement), u.close(), c
                    }, A.prototype.createElementClone = function(A) {
                        if (_r(A)) return this.createCanvasClone(A);
                        if (Or(A)) return this.createStyleClone(A);
                        var t = A.cloneNode(!1);
                        return Ir(t) && (Ir(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), "lazy" === t.loading && (t.loading = "eager")), t
                    }, A.prototype.createStyleClone = function(A) {
                        try {
                            var t = A.sheet;
                            if (t && t.cssRules) {
                                var e = [].slice.call(t.cssRules, 0).reduce((function(A, t) {
                                        return t && "string" == typeof t.cssText ? A + t.cssText : A
                                    }), ""),
                                    n = A.cloneNode(!1);
                                return n.textContent = e, n
                            }
                        } catch (A) {
                            if (this.context.logger.error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A
                        }
                        return A.cloneNode(!1)
                    }, A.prototype.createCanvasClone = function(A) {
                        if (this.options.inlineImages && A.ownerDocument) {
                            var t = A.ownerDocument.createElement("img");
                            try {
                                return t.src = A.toDataURL(), t
                            } catch (A) {
                                this.context.logger.info("Unable to clone canvas contents, canvas is tainted")
                            }
                        }
                        var e = A.cloneNode(!1);
                        try {
                            e.width = A.width, e.height = A.height;
                            var n = A.getContext("2d"),
                                r = e.getContext("2d");
                            return r && (!this.options.allowTaint && n ? r.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0) : r.drawImage(A, 0, 0)), e
                        } catch (A) {
                            this.context.logger.info("Unable to clone canvas as it is tainted")
                        }
                        return e
                    }, A.prototype.cloneNode = function(A) {
                        if (vr(A)) return document.createTextNode(A.data);
                        if (!A.ownerDocument) return A.cloneNode(!1);
                        var t = A.ownerDocument.defaultView;
                        if (t && yr(A) && (mr(A) || Qr(A))) {
                            var e = this.createElementClone(A),
                                n = t.getComputedStyle(A),
                                r = t.getComputedStyle(A, ":before"),
                                o = t.getComputedStyle(A, ":after");
                            this.referenceElement === A && mr(e) && (this.clonedReferenceElement = e), Er(e) && io(e);
                            for (var i = this.counters.parse(new vn(this.context, n)), s = this.resolvePseudoContent(A, e, r, Hn.BEFORE), a = A.firstChild; a; a = a.nextSibling) yr(a) && (Sr(a) || a.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(a)) || this.options.copyStyles && yr(a) && Or(a) || e.appendChild(this.cloneNode(a));
                            s && e.insertBefore(s, e.firstChild);
                            var u = this.resolvePseudoContent(A, e, o, Hn.AFTER);
                            return u && e.appendChild(u), this.counters.pop(i), n && (this.options.copyStyles || Qr(A)) && !Hr(A) && Ao(n, e), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([e, A.scrollLeft, A.scrollTop]), (Lr(A) || xr(A)) && (Lr(e) || xr(e)) && (e.value = A.value), e
                        }
                        return A.cloneNode(!1)
                    }, A.prototype.resolvePseudoContent = function(A, t, e, n) {
                        var r = this;
                        if (e) {
                            var o = e.content,
                                i = t.ownerDocument;
                            if (i && o && "none" !== o && "-moz-alt-content" !== o && "none" !== e.display) {
                                this.counters.parse(new vn(this.context, e));
                                var s = new wn(this.context, e),
                                    a = i.createElement("html2canvaspseudoelement");
                                Ao(e, a), s.content.forEach((function(t) {
                                    if (0 === t.type) a.appendChild(i.createTextNode(t.value));
                                    else if (22 === t.type) {
                                        var e = i.createElement("img");
                                        e.src = t.value, e.style.opacity = "1", a.appendChild(e)
                                    } else if (18 === t.type) {
                                        if ("attr" === t.name) {
                                            var n = t.values.filter(TA);
                                            n.length && a.appendChild(i.createTextNode(A.getAttribute(n[0].value) || ""))
                                        } else if ("counter" === t.name) {
                                            var o = t.values.filter(RA),
                                                u = o[0],
                                                c = o[1];
                                            if (u && TA(u)) {
                                                var l = r.counters.getCounterValue(u.value),
                                                    f = c && TA(c) ? we.parse(r.context, c.value) : Be.DECIMAL;
                                                a.appendChild(i.createTextNode(Wr(l, f, !1)))
                                            }
                                        } else if ("counters" === t.name) {
                                            var p = t.values.filter(RA),
                                                h = (u = p[0], p[1]);
                                            if (c = p[2], u && TA(u)) {
                                                var B = r.counters.getCounterValues(u.value),
                                                    g = c && TA(c) ? we.parse(r.context, c.value) : Be.DECIMAL,
                                                    d = h && 0 === h.type ? h.value : "",
                                                    w = B.map((function(A) {
                                                        return Wr(A, g, !1)
                                                    })).join(d);
                                                a.appendChild(i.createTextNode(w))
                                            }
                                        }
                                    } else if (20 === t.type) switch (t.value) {
                                        case "open-quote":
                                            a.appendChild(i.createTextNode(fn(s.quotes, r.quoteDepth++, !0)));
                                            break;
                                        case "close-quote":
                                            a.appendChild(i.createTextNode(fn(s.quotes, --r.quoteDepth, !1)));
                                            break;
                                        default:
                                            a.appendChild(i.createTextNode(t.value))
                                    }
                                })), a.className = ro + " " + oo;
                                var u = n === Hn.BEFORE ? " " + ro : " " + oo;
                                return Qr(t) ? t.className.baseValue += u : t.className += u, a
                            }
                        }
                    }, A.destroy = function(A) {
                        return !!A.parentNode && (A.parentNode.removeChild(A), !0)
                    }, A
                }();
            ! function(A) {
                A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER"
            }(Hn || (Hn = {}));
            var Xr, Yr = function(A, t) {
                    var e = A.createElement("iframe");
                    return e.className = "html2canvas-container", e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-10000px", e.style.top = "0px", e.style.border = "0", e.width = t.width.toString(), e.height = t.height.toString(), e.scrolling = "no", e.setAttribute("data-html2canvas-ignore", "true"), A.body.appendChild(e), e
                },
                zr = function(A) {
                    return new Promise((function(t) {
                        A.complete ? t() : A.src ? (A.onload = t, A.onerror = t) : t()
                    }))
                },
                Zr = function(A) {
                    return Promise.all([].slice.call(A.images, 0).map(zr))
                },
                qr = function(A) {
                    return new Promise((function(t, e) {
                        var n = A.contentWindow;
                        if (!n) return e("No window assigned for iframe");
                        var r = n.document;
                        n.onload = A.onload = function() {
                            n.onload = A.onload = null;
                            var e = setInterval((function() {
                                r.body.childNodes.length > 0 && "complete" === r.readyState && (clearInterval(e), t(A))
                            }), 50)
                        }
                    }))
                },
                $r = ["all", "d", "content"],
                Ao = function(A, t) {
                    for (var e = A.length - 1; e >= 0; e--) {
                        var n = A.item(e); - 1 === $r.indexOf(n) && t.style.setProperty(n, A.getPropertyValue(n))
                    }
                    return t
                },
                to = function(A) {
                    var t = "";
                    return A && (t += "<!DOCTYPE ", A.name && (t += A.name), A.internalSubset && (t += A.internalSubset), A.publicId && (t += '"' + A.publicId + '"'), A.systemId && (t += '"' + A.systemId + '"'), t += ">"), t
                },
                eo = function(A, t, e) {
                    A && A.defaultView && (t !== A.defaultView.pageXOffset || e !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(t, e)
                },
                no = function(A) {
                    var t = A[0],
                        e = A[1],
                        n = A[2];
                    t.scrollLeft = e, t.scrollTop = n
                },
                ro = "___html2canvas___pseudoelement_before",
                oo = "___html2canvas___pseudoelement_after",
                io = function(A) {
                    so(A, "." + ro + ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' + oo + ':after{\n    content: "" !important;\n    display: none !important;\n}')
                },
                so = function(A, t) {
                    var e = A.ownerDocument;
                    if (e) {
                        var n = e.createElement("style");
                        n.textContent = t, A.appendChild(n)
                    }
                },
                ao = function() {
                    function A() {}
                    return A.getOrigin = function(t) {
                        var e = A._link;
                        return e ? (e.href = t, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank"
                    }, A.isSameOrigin = function(t) {
                        return A.getOrigin(t) === A._origin
                    }, A.setContext = function(t) {
                        A._link = t.document.createElement("a"), A._origin = A.getOrigin(t.location.href)
                    }, A._origin = "about:blank", A
                }(),
                uo = function() {
                    function A(A, t) {
                        this.context = A, this._options = t, this._cache = {}
                    }
                    return A.prototype.addImage = function(A) {
                        var t = Promise.resolve();
                        return this.has(A) ? t : go(A) || po(A) ? ((this._cache[A] = this.loadImage(A)).catch((function() {})), t) : t
                    }, A.prototype.match = function(A) {
                        return this._cache[A]
                    }, A.prototype.loadImage = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t, e, n, o, i = this;
                            return r(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = ao.isSameOrigin(A), e = !ho(A) && !0 === this._options.useCORS && Gn.SUPPORT_CORS_IMAGES && !t, n = !ho(A) && !t && !go(A) && "string" == typeof this._options.proxy && Gn.SUPPORT_CORS_XHR && !e, t || !1 !== this._options.allowTaint || ho(A) || go(A) || n || e ? (o = A, n ? [4, this.proxy(o)] : [3, 2]) : [2];
                                    case 1:
                                        o = r.sent(), r.label = 2;
                                    case 2:
                                        return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise((function(A, t) {
                                            var n = new Image;
                                            n.onload = function() {
                                                return A(n)
                                            }, n.onerror = t, (Bo(o) || e) && (n.crossOrigin = "anonymous"), n.src = o, !0 === n.complete && setTimeout((function() {
                                                return A(n)
                                            }), 500), i._options.imageTimeout > 0 && setTimeout((function() {
                                                return t("Timed out (" + i._options.imageTimeout + "ms) loading image")
                                            }), i._options.imageTimeout)
                                        }))];
                                    case 3:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, A.prototype.has = function(A) {
                        return void 0 !== this._cache[A]
                    }, A.prototype.keys = function() {
                        return Promise.resolve(Object.keys(this._cache))
                    }, A.prototype.proxy = function(A) {
                        var t = this,
                            e = this._options.proxy;
                        if (!e) throw new Error("No proxy defined");
                        var n = A.substring(0, 256);
                        return new Promise((function(r, o) {
                            var i = Gn.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                                s = new XMLHttpRequest;
                            s.onload = function() {
                                if (200 === s.status)
                                    if ("text" === i) r(s.response);
                                    else {
                                        var A = new FileReader;
                                        A.addEventListener("load", (function() {
                                            return r(A.result)
                                        }), !1), A.addEventListener("error", (function(A) {
                                            return o(A)
                                        }), !1), A.readAsDataURL(s.response)
                                    }
                                else o("Failed to proxy resource " + n + " with status code " + s.status)
                            }, s.onerror = o;
                            var a = e.indexOf("?") > -1 ? "&" : "?";
                            if (s.open("GET", "" + e + a + "url=" + encodeURIComponent(A) + "&responseType=" + i), "text" !== i && s instanceof XMLHttpRequest && (s.responseType = i), t._options.imageTimeout) {
                                var u = t._options.imageTimeout;
                                s.timeout = u, s.ontimeout = function() {
                                    return o("Timed out (" + u + "ms) proxying " + n)
                                }
                            }
                            s.send()
                        }))
                    }, A
                }(),
                co = /^data:image\/svg\+xml/i,
                lo = /^data:image\/.*;base64,/i,
                fo = /^data:image\/.*/i,
                po = function(A) {
                    return Gn.SUPPORT_SVG_DRAWING || !wo(A)
                },
                ho = function(A) {
                    return fo.test(A)
                },
                Bo = function(A) {
                    return lo.test(A)
                },
                go = function(A) {
                    return "blob" === A.substr(0, 4)
                },
                wo = function(A) {
                    return "svg" === A.substr(-3).toLowerCase() || co.test(A)
                };
            ! function(A) {
                A[A.VECTOR = 0] = "VECTOR", A[A.BEZIER_CURVE = 1] = "BEZIER_CURVE"
            }(Xr || (Xr = {}));
            var vo, yo = function(A, t) {
                    return A.length === t.length && A.some((function(A, e) {
                        return A === t[e]
                    }))
                },
                mo = function() {
                    function A(A, t) {
                        this.type = Xr.VECTOR, this.x = A, this.y = t
                    }
                    return A.prototype.add = function(t, e) {
                        return new A(this.x + t, this.y + e)
                    }, A
                }(),
                Qo = function(A, t, e) {
                    return new mo(A.x + (t.x - A.x) * e, A.y + (t.y - A.y) * e)
                },
                Co = function() {
                    function A(A, t, e, n) {
                        this.type = Xr.BEZIER_CURVE, this.start = A, this.startControl = t, this.endControl = e, this.end = n
                    }
                    return A.prototype.subdivide = function(t, e) {
                        var n = Qo(this.start, this.startControl, t),
                            r = Qo(this.startControl, this.endControl, t),
                            o = Qo(this.endControl, this.end, t),
                            i = Qo(n, r, t),
                            s = Qo(r, o, t),
                            a = Qo(i, s, t);
                        return e ? new A(this.start, n, i, a) : new A(a, s, o, this.end)
                    }, A.prototype.add = function(t, e) {
                        return new A(this.start.add(t, e), this.startControl.add(t, e), this.endControl.add(t, e), this.end.add(t, e))
                    }, A.prototype.reverse = function() {
                        return new A(this.end, this.endControl, this.startControl, this.start)
                    }, A
                }(),
                Uo = function(A) {
                    return A.type === Xr.BEZIER_CURVE
                },
                Fo = function(A) {
                    var t = A.styles,
                        e = A.bounds,
                        n = XA(t.borderTopLeftRadius, e.width, e.height),
                        r = n[0],
                        o = n[1],
                        i = XA(t.borderTopRightRadius, e.width, e.height),
                        s = i[0],
                        a = i[1],
                        u = XA(t.borderBottomRightRadius, e.width, e.height),
                        c = u[0],
                        l = u[1],
                        f = XA(t.borderBottomLeftRadius, e.width, e.height),
                        p = f[0],
                        h = f[1],
                        B = [];
                    B.push((r + s) / e.width), B.push((p + c) / e.width), B.push((o + h) / e.height), B.push((a + l) / e.height);
                    var g = Math.max.apply(Math, B);
                    g > 1 && (r /= g, o /= g, s /= g, a /= g, c /= g, l /= g, p /= g, h /= g);
                    var d = e.width - s,
                        w = e.height - l,
                        v = e.width - c,
                        y = e.height - h,
                        m = t.borderTopWidth,
                        Q = t.borderRightWidth,
                        C = t.borderBottomWidth,
                        U = t.borderLeftWidth,
                        F = YA(t.paddingTop, A.bounds.width),
                        b = YA(t.paddingRight, A.bounds.width),
                        E = YA(t.paddingBottom, A.bounds.width),
                        _ = YA(t.paddingLeft, A.bounds.width);
                    this.topLeftBorderDoubleOuterBox = r > 0 || o > 0 ? bo(e.left + U / 3, e.top + m / 3, r - U / 3, o - m / 3, vo.TOP_LEFT) : new mo(e.left + U / 3, e.top + m / 3), this.topRightBorderDoubleOuterBox = r > 0 || o > 0 ? bo(e.left + d, e.top + m / 3, s - Q / 3, a - m / 3, vo.TOP_RIGHT) : new mo(e.left + e.width - Q / 3, e.top + m / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || l > 0 ? bo(e.left + v, e.top + w, c - Q / 3, l - C / 3, vo.BOTTOM_RIGHT) : new mo(e.left + e.width - Q / 3, e.top + e.height - C / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || h > 0 ? bo(e.left + U / 3, e.top + y, p - U / 3, h - C / 3, vo.BOTTOM_LEFT) : new mo(e.left + U / 3, e.top + e.height - C / 3), this.topLeftBorderDoubleInnerBox = r > 0 || o > 0 ? bo(e.left + 2 * U / 3, e.top + 2 * m / 3, r - 2 * U / 3, o - 2 * m / 3, vo.TOP_LEFT) : new mo(e.left + 2 * U / 3, e.top + 2 * m / 3), this.topRightBorderDoubleInnerBox = r > 0 || o > 0 ? bo(e.left + d, e.top + 2 * m / 3, s - 2 * Q / 3, a - 2 * m / 3, vo.TOP_RIGHT) : new mo(e.left + e.width - 2 * Q / 3, e.top + 2 * m / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || l > 0 ? bo(e.left + v, e.top + w, c - 2 * Q / 3, l - 2 * C / 3, vo.BOTTOM_RIGHT) : new mo(e.left + e.width - 2 * Q / 3, e.top + e.height - 2 * C / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || h > 0 ? bo(e.left + 2 * U / 3, e.top + y, p - 2 * U / 3, h - 2 * C / 3, vo.BOTTOM_LEFT) : new mo(e.left + 2 * U / 3, e.top + e.height - 2 * C / 3), this.topLeftBorderStroke = r > 0 || o > 0 ? bo(e.left + U / 2, e.top + m / 2, r - U / 2, o - m / 2, vo.TOP_LEFT) : new mo(e.left + U / 2, e.top + m / 2), this.topRightBorderStroke = r > 0 || o > 0 ? bo(e.left + d, e.top + m / 2, s - Q / 2, a - m / 2, vo.TOP_RIGHT) : new mo(e.left + e.width - Q / 2, e.top + m / 2), this.bottomRightBorderStroke = c > 0 || l > 0 ? bo(e.left + v, e.top + w, c - Q / 2, l - C / 2, vo.BOTTOM_RIGHT) : new mo(e.left + e.width - Q / 2, e.top + e.height - C / 2), this.bottomLeftBorderStroke = p > 0 || h > 0 ? bo(e.left + U / 2, e.top + y, p - U / 2, h - C / 2, vo.BOTTOM_LEFT) : new mo(e.left + U / 2, e.top + e.height - C / 2), this.topLeftBorderBox = r > 0 || o > 0 ? bo(e.left, e.top, r, o, vo.TOP_LEFT) : new mo(e.left, e.top), this.topRightBorderBox = s > 0 || a > 0 ? bo(e.left + d, e.top, s, a, vo.TOP_RIGHT) : new mo(e.left + e.width, e.top), this.bottomRightBorderBox = c > 0 || l > 0 ? bo(e.left + v, e.top + w, c, l, vo.BOTTOM_RIGHT) : new mo(e.left + e.width, e.top + e.height), this.bottomLeftBorderBox = p > 0 || h > 0 ? bo(e.left, e.top + y, p, h, vo.BOTTOM_LEFT) : new mo(e.left, e.top + e.height), this.topLeftPaddingBox = r > 0 || o > 0 ? bo(e.left + U, e.top + m, Math.max(0, r - U), Math.max(0, o - m), vo.TOP_LEFT) : new mo(e.left + U, e.top + m), this.topRightPaddingBox = s > 0 || a > 0 ? bo(e.left + Math.min(d, e.width - Q), e.top + m, d > e.width + Q ? 0 : Math.max(0, s - Q), Math.max(0, a - m), vo.TOP_RIGHT) : new mo(e.left + e.width - Q, e.top + m), this.bottomRightPaddingBox = c > 0 || l > 0 ? bo(e.left + Math.min(v, e.width - U), e.top + Math.min(w, e.height - C), Math.max(0, c - Q), Math.max(0, l - C), vo.BOTTOM_RIGHT) : new mo(e.left + e.width - Q, e.top + e.height - C), this.bottomLeftPaddingBox = p > 0 || h > 0 ? bo(e.left + U, e.top + Math.min(y, e.height - C), Math.max(0, p - U), Math.max(0, h - C), vo.BOTTOM_LEFT) : new mo(e.left + U, e.top + e.height - C), this.topLeftContentBox = r > 0 || o > 0 ? bo(e.left + U + _, e.top + m + F, Math.max(0, r - (U + _)), Math.max(0, o - (m + F)), vo.TOP_LEFT) : new mo(e.left + U + _, e.top + m + F), this.topRightContentBox = s > 0 || a > 0 ? bo(e.left + Math.min(d, e.width + U + _), e.top + m + F, d > e.width + U + _ ? 0 : s - U + _, a - (m + F), vo.TOP_RIGHT) : new mo(e.left + e.width - (Q + b), e.top + m + F), this.bottomRightContentBox = c > 0 || l > 0 ? bo(e.left + Math.min(v, e.width - (U + _)), e.top + Math.min(w, e.height + m + F), Math.max(0, c - (Q + b)), l - (C + E), vo.BOTTOM_RIGHT) : new mo(e.left + e.width - (Q + b), e.top + e.height - (C + E)), this.bottomLeftContentBox = p > 0 || h > 0 ? bo(e.left + U + _, e.top + y, Math.max(0, p - (U + _)), h - (C + E), vo.BOTTOM_LEFT) : new mo(e.left + U + _, e.top + e.height - (C + E))
                };
            ! function(A) {
                A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
            }(vo || (vo = {}));
            var bo = function(A, t, e, n, r) {
                    var o = (Math.sqrt(2) - 1) / 3 * 4,
                        i = e * o,
                        s = n * o,
                        a = A + e,
                        u = t + n;
                    switch (r) {
                        case vo.TOP_LEFT:
                            return new Co(new mo(A, u), new mo(A, u - s), new mo(a - i, t), new mo(a, t));
                        case vo.TOP_RIGHT:
                            return new Co(new mo(A, t), new mo(A + i, t), new mo(a, u - s), new mo(a, u));
                        case vo.BOTTOM_RIGHT:
                            return new Co(new mo(a, t), new mo(a, t + s), new mo(A + i, u), new mo(A, u));
                        case vo.BOTTOM_LEFT:
                        default:
                            return new Co(new mo(a, u), new mo(a - i, u), new mo(A, t + s), new mo(A, t))
                    }
                },
                Eo = function(A) {
                    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
                },
                _o = function(A) {
                    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
                },
                Io = function(A, t, e) {
                    this.type = 0, this.target = 6, this.offsetX = A, this.offsetY = t, this.matrix = e
                },
                Ho = function(A, t) {
                    this.type = 1, this.target = t, this.path = A
                },
                Oo = function(A) {
                    this.type = 2, this.target = 6, this.opacity = A
                },
                So = function(A) {
                    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
                },
                Lo = function() {
                    function A(A, t) {
                        if (this.container = A, this.effects = t.slice(0), this.curves = new Fo(A), A.styles.opacity < 1 && this.effects.push(new Oo(A.styles.opacity)), null !== A.styles.transform) {
                            var e = A.bounds.left + A.styles.transformOrigin[0].number,
                                n = A.bounds.top + A.styles.transformOrigin[1].number,
                                r = A.styles.transform;
                            this.effects.push(new Io(e, n, r))
                        }
                        if (A.styles.overflowX !== de.VISIBLE) {
                            var o = Eo(this.curves),
                                i = _o(this.curves);
                            yo(o, i) ? this.effects.push(new Ho(o, 6)) : (this.effects.push(new Ho(o, 2)), this.effects.push(new Ho(i, 4)))
                        }
                    }
                    return A.prototype.getParentEffects = function() {
                        var A = this.effects.slice(0);
                        if (this.container.styles.overflowX !== de.VISIBLE) {
                            var t = Eo(this.curves),
                                e = _o(this.curves);
                            yo(t, e) || A.push(new Ho(e, 6))
                        }
                        return A
                    }, A
                }(),
                xo = function(A, t) {
                    for (var e = A instanceof ir ? A.start : 1, n = A instanceof ir && A.reversed, r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.container instanceof or && "number" == typeof o.container.value && 0 !== o.container.value && (e = o.container.value), o.listValue = Wr(e, o.container.styles.listStyleType, !0), e += n ? -1 : 1
                    }
                },
                To = function(A) {
                    var t = new Lo(A, []),
                        e = new So(t),
                        n = [];
                    return function A(t, e, n, r) {
                        t.container.elements.forEach((function(o) {
                            var i = on(o.flags, 4),
                                s = on(o.flags, 2),
                                a = new Lo(o, t.getParentEffects());
                            on(o.styles.display, 2048) && r.push(a);
                            var u = on(o.flags, 8) ? [] : r;
                            if (i || s) {
                                var c = i || o.styles.isPositioned() ? n : e,
                                    l = new So(a);
                                if (o.styles.isPositioned() || o.styles.opacity < 1 || o.styles.isTransformed()) {
                                    var f = o.styles.zIndex.order;
                                    if (f < 0) {
                                        var p = 0;
                                        c.negativeZIndex.some((function(A, t) {
                                            return f > A.element.container.styles.zIndex.order ? (p = t, !1) : p > 0
                                        })), c.negativeZIndex.splice(p, 0, l)
                                    } else if (f > 0) {
                                        var h = 0;
                                        c.positiveZIndex.some((function(A, t) {
                                            return f >= A.element.container.styles.zIndex.order ? (h = t + 1, !1) : h > 0
                                        })), c.positiveZIndex.splice(h, 0, l)
                                    } else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)
                                } else o.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
                                A(a, l, i ? l : n, u)
                            } else o.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), A(a, e, n, u);
                            on(o.flags, 8) && xo(o, u)
                        }))
                    }(t, e, e, n), xo(t.container, n), e
                },
                Do = function(A, t) {
                    switch (t) {
                        case 0:
                            return Mo(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                        case 1:
                            return Mo(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                        case 2:
                            return Mo(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                        case 3:
                        default:
                            return Mo(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                    }
                },
                Ko = function(A, t) {
                    var e = [];
                    return Uo(A) ? e.push(A.subdivide(.5, !1)) : e.push(A), Uo(t) ? e.push(t.subdivide(.5, !0)) : e.push(t), e
                },
                Mo = function(A, t, e, n) {
                    var r = [];
                    return Uo(A) ? r.push(A.subdivide(.5, !1)) : r.push(A), Uo(e) ? r.push(e.subdivide(.5, !0)) : r.push(e), Uo(n) ? r.push(n.subdivide(.5, !0).reverse()) : r.push(n), Uo(t) ? r.push(t.subdivide(.5, !1).reverse()) : r.push(t), r
                },
                Ro = function(A) {
                    var t = A.bounds,
                        e = A.styles;
                    return t.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth))
                },
                ko = function(A) {
                    var t = A.styles,
                        e = A.bounds,
                        n = YA(t.paddingLeft, e.width),
                        r = YA(t.paddingRight, e.width),
                        o = YA(t.paddingTop, e.width),
                        i = YA(t.paddingBottom, e.width);
                    return e.add(n + t.borderLeftWidth, o + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + n + r), -(t.borderTopWidth + t.borderBottomWidth + o + i))
                },
                No = function(A, t, e) {
                    var n = function(A, t) {
                            return 0 === A ? t.bounds : 2 === A ? ko(t) : Ro(t)
                        }(Vo(A.styles.backgroundOrigin, t), A),
                        r = function(A, t) {
                            return A === st.BORDER_BOX ? t.bounds : A === st.CONTENT_BOX ? ko(t) : Ro(t)
                        }(Vo(A.styles.backgroundClip, t), A),
                        o = Go(Vo(A.styles.backgroundSize, t), e, n),
                        i = o[0],
                        s = o[1],
                        a = XA(Vo(A.styles.backgroundPosition, t), n.width - i, n.height - s);
                    return [Wo(Vo(A.styles.backgroundRepeat, t), a, o, n, r), Math.round(n.left + a[0]), Math.round(n.top + a[1]), i, s]
                },
                Po = function(A) {
                    return TA(A) && A.value === Ht.AUTO
                },
                jo = function(A) {
                    return "number" == typeof A
                },
                Go = function(A, t, e) {
                    var n = t[0],
                        r = t[1],
                        o = t[2],
                        i = A[0],
                        s = A[1];
                    if (!i) return [0, 0];
                    if (jA(i) && s && jA(s)) return [YA(i, e.width), YA(s, e.height)];
                    var a = jo(o);
                    if (TA(i) && (i.value === Ht.CONTAIN || i.value === Ht.COVER)) return jo(o) ? e.width / e.height < o != (i.value === Ht.COVER) ? [e.width, e.width / o] : [e.height * o, e.height] : [e.width, e.height];
                    var u = jo(n),
                        c = jo(r),
                        l = u || c;
                    if (Po(i) && (!s || Po(s))) return u && c ? [n, r] : a || l ? l && a ? [u ? n : r * o, c ? r : n / o] : [u ? n : e.width, c ? r : e.height] : [e.width, e.height];
                    if (a) {
                        var f = 0,
                            p = 0;
                        return jA(i) ? f = YA(i, e.width) : jA(s) && (p = YA(s, e.height)), Po(i) ? f = p * o : s && !Po(s) || (p = f / o), [f, p]
                    }
                    var h = null,
                        B = null;
                    if (jA(i) ? h = YA(i, e.width) : s && jA(s) && (B = YA(s, e.height)), null === h || s && !Po(s) || (B = u && c ? h / n * r : e.height), null !== B && Po(i) && (h = u && c ? B / r * n : e.width), null !== h && null !== B) return [h, B];
                    throw new Error("Unable to calculate background-size for element")
                },
                Vo = function(A, t) {
                    var e = A[t];
                    return void 0 === e ? A[0] : e
                },
                Wo = function(A, t, e, n, r) {
                    var o = t[0],
                        i = t[1],
                        s = e[0],
                        a = e[1];
                    switch (A) {
                        case Ut.REPEAT_X:
                            return [new mo(Math.round(n.left), Math.round(n.top + i)), new mo(Math.round(n.left + n.width), Math.round(n.top + i)), new mo(Math.round(n.left + n.width), Math.round(a + n.top + i)), new mo(Math.round(n.left), Math.round(a + n.top + i))];
                        case Ut.REPEAT_Y:
                            return [new mo(Math.round(n.left + o), Math.round(n.top)), new mo(Math.round(n.left + o + s), Math.round(n.top)), new mo(Math.round(n.left + o + s), Math.round(n.height + n.top)), new mo(Math.round(n.left + o), Math.round(n.height + n.top))];
                        case Ut.NO_REPEAT:
                            return [new mo(Math.round(n.left + o), Math.round(n.top + i)), new mo(Math.round(n.left + o + s), Math.round(n.top + i)), new mo(Math.round(n.left + o + s), Math.round(n.top + i + a)), new mo(Math.round(n.left + o), Math.round(n.top + i + a))];
                        default:
                            return [new mo(Math.round(r.left), Math.round(r.top)), new mo(Math.round(r.left + r.width), Math.round(r.top)), new mo(Math.round(r.left + r.width), Math.round(r.height + r.top)), new mo(Math.round(r.left), Math.round(r.height + r.top))]
                    }
                },
                Jo = function() {
                    function A(A) {
                        this._data = {}, this._document = A
                    }
                    return A.prototype.parseMetrics = function(A, t) {
                        var e = this._document.createElement("div"),
                            n = this._document.createElement("img"),
                            r = this._document.createElement("span"),
                            o = this._document.body;
                        e.style.visibility = "hidden", e.style.fontFamily = A, e.style.fontSize = t, e.style.margin = "0", e.style.padding = "0", o.appendChild(e), n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.appendChild(this._document.createTextNode("Hidden Text")), e.appendChild(r), e.appendChild(n);
                        var i = n.offsetTop - r.offsetTop + 2;
                        e.removeChild(r), e.appendChild(this._document.createTextNode("Hidden Text")), e.style.lineHeight = "normal", n.style.verticalAlign = "super";
                        var s = n.offsetTop - e.offsetTop + 2;
                        return o.removeChild(e), {
                            baseline: i,
                            middle: s
                        }
                    }, A.prototype.getMetrics = function(A, t) {
                        var e = A + " " + t;
                        return void 0 === this._data[e] && (this._data[e] = this.parseMetrics(A, t)), this._data[e]
                    }, A
                }(),
                Xo = function(A, t) {
                    this.context = A, this.options = t
                },
                Yo = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n._activeEffects = [], n.canvas = e.canvas ? e.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), e.canvas || (n.canvas.width = Math.floor(e.width * e.scale), n.canvas.height = Math.floor(e.height * e.scale), n.canvas.style.width = e.width + "px", n.canvas.style.height = e.height + "px"), n.fontMetrics = new Jo(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-e.x, -e.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale), n
                    }
                    return t(e, A), e.prototype.applyEffects = function(A, t) {
                        for (var e = this; this._activeEffects.length;) this.popEffect();
                        A.filter((function(A) {
                            return on(A.target, t)
                        })).forEach((function(A) {
                            return e.applyEffect(A)
                        }))
                    }, e.prototype.applyEffect = function(A) {
                        this.ctx.save(),
                            function(A) {
                                return 2 === A.type
                            }(A) && (this.ctx.globalAlpha = A.opacity),
                            function(A) {
                                return 0 === A.type
                            }(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)),
                            function(A) {
                                return 1 === A.type
                            }(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
                    }, e.prototype.popEffect = function() {
                        this._activeEffects.pop(), this.ctx.restore()
                    }, e.prototype.renderStack = function(A) {
                        return n(this, void 0, void 0, (function() {
                            return r(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderNode = function(A) {
                        return n(this, void 0, void 0, (function() {
                            return r(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.renderNodeContent(A)];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderTextWithLetterSpacing = function(A, t, e) {
                        var n = this;
                        0 === t ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + e) : kn(A.text).reduce((function(t, r) {
                            return n.ctx.fillText(r, t, A.bounds.top + e), t + n.ctx.measureText(r).width
                        }), A.bounds.left)
                    }, e.prototype.createFontStyle = function(A) {
                        var t = A.fontVariant.filter((function(A) {
                                return "normal" === A || "small-caps" === A
                            })).join(""),
                            e = A.fontFamily.join(", "),
                            n = LA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                        return [
                            [A.fontStyle, t, A.fontWeight, n, e].join(" "), e, n
                        ]
                    }, e.prototype.renderTextNode = function(A, t) {
                        return n(this, void 0, void 0, (function() {
                            var e, n, o, i, s, a, u, c, l = this;
                            return r(this, (function(r) {
                                return e = this.createFontStyle(t), n = e[0], o = e[1], i = e[2], this.ctx.font = n, this.ctx.direction = 1 === t.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(o, i), a = s.baseline, u = s.middle, c = t.paintOrder, A.textBounds.forEach((function(A) {
                                    c.forEach((function(e) {
                                        switch (e) {
                                            case nn.FILL:
                                                l.ctx.fillStyle = et(t.color), l.renderTextWithLetterSpacing(A, t.letterSpacing, a);
                                                var n = t.textShadow;
                                                n.length && A.text.trim().length && (n.slice(0).reverse().forEach((function(e) {
                                                    l.ctx.shadowColor = et(e.color), l.ctx.shadowOffsetX = e.offsetX.number * l.options.scale, l.ctx.shadowOffsetY = e.offsetY.number * l.options.scale, l.ctx.shadowBlur = e.blur.number, l.renderTextWithLetterSpacing(A, t.letterSpacing, a)
                                                })), l.ctx.shadowColor = "", l.ctx.shadowOffsetX = 0, l.ctx.shadowOffsetY = 0, l.ctx.shadowBlur = 0), t.textDecorationLine.length && (l.ctx.fillStyle = et(t.textDecorationColor || t.color), t.textDecorationLine.forEach((function(t) {
                                                    switch (t) {
                                                        case 1:
                                                            l.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + a), A.bounds.width, 1);
                                                            break;
                                                        case 2:
                                                            l.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                                            break;
                                                        case 3:
                                                            l.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + u), A.bounds.width, 1)
                                                    }
                                                })));
                                                break;
                                            case nn.STROKE:
                                                t.webkitTextStrokeWidth && A.text.trim().length && (l.ctx.strokeStyle = et(t.webkitTextStrokeColor), l.ctx.lineWidth = t.webkitTextStrokeWidth, l.ctx.lineJoin = window.chrome ? "miter" : "round", l.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + a)), l.ctx.strokeStyle = "", l.ctx.lineWidth = 0, l.ctx.lineJoin = "miter"
                                        }
                                    }))
                                })), [2]
                            }))
                        }))
                    }, e.prototype.renderReplacedElement = function(A, t, e) {
                        if (e && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                            var n = ko(A),
                                r = _o(t);
                            this.path(r), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(e, 0, 0, A.intrinsicWidth, A.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore()
                        }
                    }, e.prototype.renderNodeContent = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t, n, o, i, a, u, c, l, f, p, h, B, g, d, w, v, y, m;
                            return r(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.applyEffects(A.effects, 4), t = A.container, n = A.curves, o = t.styles, i = 0, a = t.textNodes, r.label = 1;
                                    case 1:
                                        return i < a.length ? (u = a[i], [4, this.renderTextNode(u, o)]) : [3, 4];
                                    case 2:
                                        r.sent(), r.label = 3;
                                    case 3:
                                        return i++, [3, 1];
                                    case 4:
                                        if (!(t instanceof er)) return [3, 8];
                                        r.label = 5;
                                    case 5:
                                        return r.trys.push([5, 7, , 8]), [4, this.context.cache.match(t.src)];
                                    case 6:
                                        return w = r.sent(), this.renderReplacedElement(t, n, w), [3, 8];
                                    case 7:
                                        return r.sent(), this.context.logger.error("Error loading image " + t.src), [3, 8];
                                    case 8:
                                        if (t instanceof nr && this.renderReplacedElement(t, n, t.canvas), !(t instanceof rr)) return [3, 12];
                                        r.label = 9;
                                    case 9:
                                        return r.trys.push([9, 11, , 12]), [4, this.context.cache.match(t.svg)];
                                    case 10:
                                        return w = r.sent(), this.renderReplacedElement(t, n, w), [3, 12];
                                    case 11:
                                        return r.sent(), this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)), [3, 12];
                                    case 12:
                                        return t instanceof pr && t.tree ? [4, new e(this.context, {
                                            scale: this.options.scale,
                                            backgroundColor: t.backgroundColor,
                                            x: 0,
                                            y: 0,
                                            width: t.width,
                                            height: t.height
                                        }).render(t.tree)] : [3, 14];
                                    case 13:
                                        c = r.sent(), t.width && t.height && this.ctx.drawImage(c, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height), r.label = 14;
                                    case 14:
                                        if (t instanceof cr && (l = Math.min(t.bounds.width, t.bounds.height), "checkbox" === t.type ? t.checked && (this.ctx.save(), this.path([new mo(t.bounds.left + .39363 * l, t.bounds.top + .79 * l), new mo(t.bounds.left + .16 * l, t.bounds.top + .5549 * l), new mo(t.bounds.left + .27347 * l, t.bounds.top + .44071 * l), new mo(t.bounds.left + .39694 * l, t.bounds.top + .5649 * l), new mo(t.bounds.left + .72983 * l, t.bounds.top + .23 * l), new mo(t.bounds.left + .84 * l, t.bounds.top + .34085 * l), new mo(t.bounds.left + .39363 * l, t.bounds.top + .79 * l)]), this.ctx.fillStyle = et(707406591), this.ctx.fill(), this.ctx.restore()) : "radio" === t.type && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + l / 2, t.bounds.top + l / 2, l / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = et(707406591), this.ctx.fill(), this.ctx.restore())), zo(t) && t.value.length) {
                                            switch (f = this.createFontStyle(o), y = f[0], p = f[1], h = this.fontMetrics.getMetrics(y, p).baseline, this.ctx.font = y, this.ctx.fillStyle = et(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = qo(t.styles.textAlign), m = ko(t), B = 0, t.styles.textAlign) {
                                                case Ue.CENTER:
                                                    B += m.width / 2;
                                                    break;
                                                case Ue.RIGHT:
                                                    B += m.width
                                            }
                                            g = m.add(B, 0, 0, -m.height / 2 + 1), this.ctx.save(), this.path([new mo(m.left, m.top), new mo(m.left + m.width, m.top), new mo(m.left + m.width, m.top + m.height), new mo(m.left, m.top + m.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Vn(t.value, g), o.letterSpacing, h), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left"
                                        }
                                        if (!on(t.styles.display, 2048)) return [3, 20];
                                        if (null === t.styles.listStyleImage) return [3, 19];
                                        if ((d = t.styles.listStyleImage).type !== ft.URL) return [3, 18];
                                        w = void 0, v = d.url, r.label = 15;
                                    case 15:
                                        return r.trys.push([15, 17, , 18]), [4, this.context.cache.match(v)];
                                    case 16:
                                        return w = r.sent(), this.ctx.drawImage(w, t.bounds.left - (w.width + 10), t.bounds.top), [3, 18];
                                    case 17:
                                        return r.sent(), this.context.logger.error("Error loading list-style-image " + v), [3, 18];
                                    case 18:
                                        return [3, 20];
                                    case 19:
                                        A.listValue && t.styles.listStyleType !== Be.NONE && (y = this.createFontStyle(o)[0], this.ctx.font = y, this.ctx.fillStyle = et(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", m = new s(t.bounds.left, t.bounds.top + YA(t.styles.paddingTop, t.bounds.width), t.bounds.width, pe(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Vn(A.listValue, m), o.letterSpacing, pe(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), r.label = 20;
                                    case 20:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderStackContent = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t, e, n, o, i, s, a, u, c, l, f, p, h, B, g;
                            return r(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.renderNodeBackgroundAndBorders(A.element)];
                                    case 1:
                                        r.sent(), t = 0, e = A.negativeZIndex, r.label = 2;
                                    case 2:
                                        return t < e.length ? (g = e[t], [4, this.renderStack(g)]) : [3, 5];
                                    case 3:
                                        r.sent(), r.label = 4;
                                    case 4:
                                        return t++, [3, 2];
                                    case 5:
                                        return [4, this.renderNodeContent(A.element)];
                                    case 6:
                                        r.sent(), n = 0, o = A.nonInlineLevel, r.label = 7;
                                    case 7:
                                        return n < o.length ? (g = o[n], [4, this.renderNode(g)]) : [3, 10];
                                    case 8:
                                        r.sent(), r.label = 9;
                                    case 9:
                                        return n++, [3, 7];
                                    case 10:
                                        i = 0, s = A.nonPositionedFloats, r.label = 11;
                                    case 11:
                                        return i < s.length ? (g = s[i], [4, this.renderStack(g)]) : [3, 14];
                                    case 12:
                                        r.sent(), r.label = 13;
                                    case 13:
                                        return i++, [3, 11];
                                    case 14:
                                        a = 0, u = A.nonPositionedInlineLevel, r.label = 15;
                                    case 15:
                                        return a < u.length ? (g = u[a], [4, this.renderStack(g)]) : [3, 18];
                                    case 16:
                                        r.sent(), r.label = 17;
                                    case 17:
                                        return a++, [3, 15];
                                    case 18:
                                        c = 0, l = A.inlineLevel, r.label = 19;
                                    case 19:
                                        return c < l.length ? (g = l[c], [4, this.renderNode(g)]) : [3, 22];
                                    case 20:
                                        r.sent(), r.label = 21;
                                    case 21:
                                        return c++, [3, 19];
                                    case 22:
                                        f = 0, p = A.zeroOrAutoZIndexOrTransformedOrOpacity, r.label = 23;
                                    case 23:
                                        return f < p.length ? (g = p[f], [4, this.renderStack(g)]) : [3, 26];
                                    case 24:
                                        r.sent(), r.label = 25;
                                    case 25:
                                        return f++, [3, 23];
                                    case 26:
                                        h = 0, B = A.positiveZIndex, r.label = 27;
                                    case 27:
                                        return h < B.length ? (g = B[h], [4, this.renderStack(g)]) : [3, 30];
                                    case 28:
                                        r.sent(), r.label = 29;
                                    case 29:
                                        return h++, [3, 27];
                                    case 30:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.mask = function(A) {
                        this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
                    }, e.prototype.path = function(A) {
                        this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
                    }, e.prototype.formatPath = function(A) {
                        var t = this;
                        A.forEach((function(A, e) {
                            var n = Uo(A) ? A.start : A;
                            0 === e ? t.ctx.moveTo(n.x, n.y) : t.ctx.lineTo(n.x, n.y), Uo(A) && t.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                        }))
                    }, e.prototype.renderRepeat = function(A, t, e, n) {
                        this.path(A), this.ctx.fillStyle = t, this.ctx.translate(e, n), this.ctx.fill(), this.ctx.translate(-e, -n)
                    }, e.prototype.resizeImage = function(A, t, e) {
                        var n;
                        if (A.width === t && A.height === e) return A;
                        var r = (null !== (n = this.canvas.ownerDocument) && void 0 !== n ? n : document).createElement("canvas");
                        return r.width = Math.max(1, t), r.height = Math.max(1, e), r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, t, e), r
                    }, e.prototype.renderBackgroundImage = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t, e, n, o, i, s;
                            return r(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = A.styles.backgroundImage.length - 1, e = function(e) {
                                            var o, i, s, a, u, c, l, f, p, h, B, g, d, w, v, y, m, Q, C, U, F, b, E, _, I, H, O, S, L, x, T;
                                            return r(this, (function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        if (e.type !== ft.URL) return [3, 5];
                                                        o = void 0, i = e.url, r.label = 1;
                                                    case 1:
                                                        return r.trys.push([1, 3, , 4]), [4, n.context.cache.match(i)];
                                                    case 2:
                                                        return o = r.sent(), [3, 4];
                                                    case 3:
                                                        return r.sent(), n.context.logger.error("Error loading background-image " + i), [3, 4];
                                                    case 4:
                                                        return o && (s = No(A, t, [o.width, o.height, o.width / o.height]), y = s[0], b = s[1], E = s[2], C = s[3], U = s[4], w = n.ctx.createPattern(n.resizeImage(o, C, U), "repeat"), n.renderRepeat(y, w, b, E)), [3, 6];
                                                    case 5:
                                                        e.type === ft.LINEAR_GRADIENT ? (a = No(A, t, [null, null, null]), y = a[0], b = a[1], E = a[2], C = a[3], U = a[4], u = vt(e.angle, C, U), c = u[0], l = u[1], f = u[2], p = u[3], h = u[4], (B = document.createElement("canvas")).width = C, B.height = U, g = B.getContext("2d"), d = g.createLinearGradient(l, p, f, h), wt(e.stops, c).forEach((function(A) {
                                                            return d.addColorStop(A.stop, et(A.color))
                                                        })), g.fillStyle = d, g.fillRect(0, 0, C, U), C > 0 && U > 0 && (w = n.ctx.createPattern(B, "repeat"), n.renderRepeat(y, w, b, E))) : function(A) {
                                                            return A.type === ft.RADIAL_GRADIENT
                                                        }(e) && (v = No(A, t, [null, null, null]), y = v[0], m = v[1], Q = v[2], C = v[3], U = v[4], F = 0 === e.position.length ? [WA] : e.position, b = YA(F[0], C), E = YA(F[F.length - 1], U), _ = function(A, t, e, n, r) {
                                                            var o = 0,
                                                                i = 0;
                                                            switch (A.size) {
                                                                case ht.CLOSEST_SIDE:
                                                                    A.shape === pt.CIRCLE ? o = i = Math.min(Math.abs(t), Math.abs(t - n), Math.abs(e), Math.abs(e - r)) : A.shape === pt.ELLIPSE && (o = Math.min(Math.abs(t), Math.abs(t - n)), i = Math.min(Math.abs(e), Math.abs(e - r)));
                                                                    break;
                                                                case ht.CLOSEST_CORNER:
                                                                    if (A.shape === pt.CIRCLE) o = i = Math.min(yt(t, e), yt(t, e - r), yt(t - n, e), yt(t - n, e - r));
                                                                    else if (A.shape === pt.ELLIPSE) {
                                                                        var s = Math.min(Math.abs(e), Math.abs(e - r)) / Math.min(Math.abs(t), Math.abs(t - n)),
                                                                            a = mt(n, r, t, e, !0),
                                                                            u = a[0],
                                                                            c = a[1];
                                                                        i = s * (o = yt(u - t, (c - e) / s))
                                                                    }
                                                                    break;
                                                                case ht.FARTHEST_SIDE:
                                                                    A.shape === pt.CIRCLE ? o = i = Math.max(Math.abs(t), Math.abs(t - n), Math.abs(e), Math.abs(e - r)) : A.shape === pt.ELLIPSE && (o = Math.max(Math.abs(t), Math.abs(t - n)), i = Math.max(Math.abs(e), Math.abs(e - r)));
                                                                    break;
                                                                case ht.FARTHEST_CORNER:
                                                                    if (A.shape === pt.CIRCLE) o = i = Math.max(yt(t, e), yt(t, e - r), yt(t - n, e), yt(t - n, e - r));
                                                                    else if (A.shape === pt.ELLIPSE) {
                                                                        s = Math.max(Math.abs(e), Math.abs(e - r)) / Math.max(Math.abs(t), Math.abs(t - n));
                                                                        var l = mt(n, r, t, e, !1);
                                                                        u = l[0], c = l[1], i = s * (o = yt(u - t, (c - e) / s))
                                                                    }
                                                            }
                                                            return Array.isArray(A.size) && (o = YA(A.size[0], n), i = 2 === A.size.length ? YA(A.size[1], r) : o), [o, i]
                                                        }(e, b, E, C, U), I = _[0], H = _[1], I > 0 && H > 0 && (O = n.ctx.createRadialGradient(m + b, Q + E, 0, m + b, Q + E, I), wt(e.stops, 2 * I).forEach((function(A) {
                                                            return O.addColorStop(A.stop, et(A.color))
                                                        })), n.path(y), n.ctx.fillStyle = O, I !== H ? (S = A.bounds.left + .5 * A.bounds.width, L = A.bounds.top + .5 * A.bounds.height, T = 1 / (x = H / I), n.ctx.save(), n.ctx.translate(S, L), n.ctx.transform(1, 0, 0, x, 0, 0), n.ctx.translate(-S, -L), n.ctx.fillRect(m, T * (Q - L) + L, C, U * T), n.ctx.restore()) : n.ctx.fill())), r.label = 6;
                                                    case 6:
                                                        return t--, [2]
                                                }
                                            }))
                                        }, n = this, o = 0, i = A.styles.backgroundImage.slice(0).reverse(), a.label = 1;
                                    case 1:
                                        return o < i.length ? (s = i[o], [5, e(s)]) : [3, 4];
                                    case 2:
                                        a.sent(), a.label = 3;
                                    case 3:
                                        return o++, [3, 1];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderSolidBorder = function(A, t, e) {
                        return n(this, void 0, void 0, (function() {
                            return r(this, (function(n) {
                                return this.path(Do(e, t)), this.ctx.fillStyle = et(A), this.ctx.fill(), [2]
                            }))
                        }))
                    }, e.prototype.renderDoubleBorder = function(A, t, e, o) {
                        return n(this, void 0, void 0, (function() {
                            var n, i;
                            return r(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t < 3 ? [4, this.renderSolidBorder(A, e, o)] : [3, 2];
                                    case 1:
                                        return r.sent(), [2];
                                    case 2:
                                        return n = function(A, t) {
                                            switch (t) {
                                                case 0:
                                                    return Mo(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                                                case 1:
                                                    return Mo(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                                                case 2:
                                                    return Mo(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                                                case 3:
                                                default:
                                                    return Mo(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                                            }
                                        }(o, e), this.path(n), this.ctx.fillStyle = et(A), this.ctx.fill(), i = function(A, t) {
                                            switch (t) {
                                                case 0:
                                                    return Mo(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                                                case 1:
                                                    return Mo(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                                                case 2:
                                                    return Mo(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                                                case 3:
                                                default:
                                                    return Mo(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                                            }
                                        }(o, e), this.path(i), this.ctx.fill(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderNodeBackgroundAndBorders = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t, e, n, o, i, s, a, u, c = this;
                            return r(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.applyEffects(A.effects, 2), t = A.container.styles, e = !tt(t.backgroundColor) || t.backgroundImage.length, n = [{
                                            style: t.borderTopStyle,
                                            color: t.borderTopColor,
                                            width: t.borderTopWidth
                                        }, {
                                            style: t.borderRightStyle,
                                            color: t.borderRightColor,
                                            width: t.borderRightWidth
                                        }, {
                                            style: t.borderBottomStyle,
                                            color: t.borderBottomColor,
                                            width: t.borderBottomWidth
                                        }, {
                                            style: t.borderLeftStyle,
                                            color: t.borderLeftColor,
                                            width: t.borderLeftWidth
                                        }], o = Zo(Vo(t.backgroundClip, 0), A.curves), e || t.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), tt(t.backgroundColor) || (this.ctx.fillStyle = et(t.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(A.container)]) : [3, 2];
                                    case 1:
                                        r.sent(), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((function(t) {
                                            c.ctx.save();
                                            var e, n, r, o, i, s = Eo(A.curves),
                                                a = t.inset ? 0 : 1e4,
                                                u = (e = s, n = -a + (t.inset ? 1 : -1) * t.spread.number, r = (t.inset ? 1 : -1) * t.spread.number, o = t.spread.number * (t.inset ? -2 : 2), i = t.spread.number * (t.inset ? -2 : 2), e.map((function(A, t) {
                                                    switch (t) {
                                                        case 0:
                                                            return A.add(n, r);
                                                        case 1:
                                                            return A.add(n + o, r);
                                                        case 2:
                                                            return A.add(n + o, r + i);
                                                        case 3:
                                                            return A.add(n, r + i)
                                                    }
                                                    return A
                                                })));
                                            t.inset ? (c.path(s), c.ctx.clip(), c.mask(u)) : (c.mask(s), c.ctx.clip(), c.path(u)), c.ctx.shadowOffsetX = t.offsetX.number + a, c.ctx.shadowOffsetY = t.offsetY.number, c.ctx.shadowColor = et(t.color), c.ctx.shadowBlur = t.blur.number, c.ctx.fillStyle = t.inset ? et(t.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore()
                                        })), r.label = 2;
                                    case 2:
                                        i = 0, s = 0, a = n, r.label = 3;
                                    case 3:
                                        return s < a.length ? (u = a[s]).style !== Lt.NONE && !tt(u.color) && u.width > 0 ? u.style !== Lt.DASHED ? [3, 5] : [4, this.renderDashedDottedBorder(u.color, u.width, i, A.curves, Lt.DASHED)] : [3, 11] : [3, 13];
                                    case 4:
                                        return r.sent(), [3, 11];
                                    case 5:
                                        return u.style !== Lt.DOTTED ? [3, 7] : [4, this.renderDashedDottedBorder(u.color, u.width, i, A.curves, Lt.DOTTED)];
                                    case 6:
                                        return r.sent(), [3, 11];
                                    case 7:
                                        return u.style !== Lt.DOUBLE ? [3, 9] : [4, this.renderDoubleBorder(u.color, u.width, i, A.curves)];
                                    case 8:
                                        return r.sent(), [3, 11];
                                    case 9:
                                        return [4, this.renderSolidBorder(u.color, i, A.curves)];
                                    case 10:
                                        r.sent(), r.label = 11;
                                    case 11:
                                        i++, r.label = 12;
                                    case 12:
                                        return s++, [3, 3];
                                    case 13:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderDashedDottedBorder = function(A, t, e, o, i) {
                        return n(this, void 0, void 0, (function() {
                            var n, s, a, u, c, l, f, p, h, B, g, d, w, v, y, m;
                            return r(this, (function(r) {
                                return this.ctx.save(), n = function(A, t) {
                                    switch (t) {
                                        case 0:
                                            return Ko(A.topLeftBorderStroke, A.topRightBorderStroke);
                                        case 1:
                                            return Ko(A.topRightBorderStroke, A.bottomRightBorderStroke);
                                        case 2:
                                            return Ko(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                                        case 3:
                                        default:
                                            return Ko(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                                    }
                                }(o, e), s = Do(o, e), i === Lt.DASHED && (this.path(s), this.ctx.clip()), Uo(s[0]) ? (a = s[0].start.x, u = s[0].start.y) : (a = s[0].x, u = s[0].y), Uo(s[1]) ? (c = s[1].end.x, l = s[1].end.y) : (c = s[1].x, l = s[1].y), f = 0 === e || 2 === e ? Math.abs(a - c) : Math.abs(u - l), this.ctx.beginPath(), i === Lt.DOTTED ? this.formatPath(n) : this.formatPath(s.slice(0, 2)), p = t < 3 ? 3 * t : 2 * t, h = t < 3 ? 2 * t : t, i === Lt.DOTTED && (p = t, h = t), B = !0, f <= 2 * p ? B = !1 : f <= 2 * p + h ? (p *= g = f / (2 * p + h), h *= g) : (d = Math.floor((f + h) / (p + h)), w = (f - d * p) / (d - 1), h = (v = (f - (d + 1) * p) / d) <= 0 || Math.abs(h - w) < Math.abs(h - v) ? w : v), B && (i === Lt.DOTTED ? this.ctx.setLineDash([0, p + h]) : this.ctx.setLineDash([p, h])), i === Lt.DOTTED ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = 2 * t + 1.1, this.ctx.strokeStyle = et(A), this.ctx.stroke(), this.ctx.setLineDash([]), i === Lt.DASHED && (Uo(s[0]) && (y = s[3], m = s[0], this.ctx.beginPath(), this.formatPath([new mo(y.end.x, y.end.y), new mo(m.start.x, m.start.y)]), this.ctx.stroke()), Uo(s[1]) && (y = s[1], m = s[2], this.ctx.beginPath(), this.formatPath([new mo(y.end.x, y.end.y), new mo(m.start.x, m.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2]
                            }))
                        }))
                    }, e.prototype.render = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t;
                            return r(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.options.backgroundColor && (this.ctx.fillStyle = et(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = To(A), [4, this.renderStack(t)];
                                    case 1:
                                        return e.sent(), this.applyEffects([], 2), [2, this.canvas]
                                }
                            }))
                        }))
                    }, e
                }(Xo),
                zo = function(A) {
                    return A instanceof fr || A instanceof lr || A instanceof cr && "radio" !== A.type && "checkbox" !== A.type
                },
                Zo = function(A, t) {
                    switch (A) {
                        case st.BORDER_BOX:
                            return Eo(t);
                        case st.CONTENT_BOX:
                            return function(A) {
                                return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
                            }(t);
                        case st.PADDING_BOX:
                        default:
                            return _o(t)
                    }
                },
                qo = function(A) {
                    switch (A) {
                        case Ue.CENTER:
                            return "center";
                        case Ue.RIGHT:
                            return "right";
                        case Ue.LEFT:
                        default:
                            return "left"
                    }
                },
                $o = function(A) {
                    function e(t, e) {
                        var n = A.call(this, t, e) || this;
                        return n.canvas = e.canvas ? e.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = e, n.canvas.width = Math.floor(e.width * e.scale), n.canvas.height = Math.floor(e.height * e.scale), n.canvas.style.width = e.width + "px", n.canvas.style.height = e.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-e.x, -e.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale), n
                    }
                    return t(e, A), e.prototype.render = function(A) {
                        return n(this, void 0, void 0, (function() {
                            var t, e;
                            return r(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = Pn(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), [4, Ai(t)];
                                    case 1:
                                        return e = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = et(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                                }
                            }))
                        }))
                    }, e
                }(Xo),
                Ai = function(A) {
                    return new Promise((function(t, e) {
                        var n = new Image;
                        n.onload = function() {
                            t(n)
                        }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                    }))
                },
                ti = function() {
                    function A(A) {
                        var t = A.id,
                            e = A.enabled;
                        this.id = t, this.enabled = e, this.start = Date.now()
                    }
                    return A.prototype.debug = function() {
                        for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, o([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                    }, A.prototype.getTime = function() {
                        return Date.now() - this.start
                    }, A.prototype.info = function() {
                        for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
                        this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, o([this.id, this.getTime() + "ms"], A))
                    }, A.prototype.warn = function() {
                        for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, o([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                    }, A.prototype.error = function() {
                        for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, o([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                    }, A.instances = {}, A
                }(),
                ei = function() {
                    function A(t, e) {
                        var n;
                        this.windowBounds = e, this.instanceName = "#" + A.instanceCount++, this.logger = new ti({
                            id: this.instanceName,
                            enabled: t.logging
                        }), this.cache = null !== (n = t.cache) && void 0 !== n ? n : new uo(this, t)
                    }
                    return A.instanceCount = 1, A
                }();
            "undefined" != typeof window && ao.setContext(window);
            var ni = function(A, t) {
                    return n(void 0, void 0, void 0, (function() {
                        var n, o, u, c, l, f, p, h, B, g, d, w, v, y, m, Q, C, U, F, b, E, _, I, H, O, S, L, x, T, D, K, M, R, k, N, P, j, G;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!A || "object" !== i(A)) return [2, Promise.reject("Invalid element provided as first argument")];
                                    if (!(n = A.ownerDocument)) throw new Error("Element is not attached to a Document");
                                    if (!(o = n.defaultView)) throw new Error("Document is not attached to a Window");
                                    return u = {
                                        allowTaint: null !== (_ = t.allowTaint) && void 0 !== _ && _,
                                        imageTimeout: null !== (I = t.imageTimeout) && void 0 !== I ? I : 15e3,
                                        proxy: t.proxy,
                                        useCORS: null !== (H = t.useCORS) && void 0 !== H && H
                                    }, c = e({
                                        logging: null === (O = t.logging) || void 0 === O || O,
                                        cache: t.cache
                                    }, u), l = {
                                        windowWidth: null !== (S = t.windowWidth) && void 0 !== S ? S : o.innerWidth,
                                        windowHeight: null !== (L = t.windowHeight) && void 0 !== L ? L : o.innerHeight,
                                        scrollX: null !== (x = t.scrollX) && void 0 !== x ? x : o.pageXOffset,
                                        scrollY: null !== (T = t.scrollY) && void 0 !== T ? T : o.pageYOffset
                                    }, f = new s(l.scrollX, l.scrollY, l.windowWidth, l.windowHeight), p = new ei(c, f), h = null !== (D = t.foreignObjectRendering) && void 0 !== D && D, B = {
                                        allowTaint: null !== (K = t.allowTaint) && void 0 !== K && K,
                                        onclone: t.onclone,
                                        ignoreElements: t.ignoreElements,
                                        inlineImages: h,
                                        copyStyles: h
                                    }, p.logger.debug("Starting document clone with size " + f.width + "x" + f.height + " scrolled to " + -f.left + "," + -f.top), g = new Jr(p, A, B), (d = g.clonedReferenceElement) ? [4, g.toIFrame(n, f)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                                case 1:
                                    return w = r.sent(), v = Er(d) || "HTML" === d.tagName ? function(A) {
                                        var t = A.body,
                                            e = A.documentElement;
                                        if (!t || !e) throw new Error("Unable to get document size");
                                        var n = Math.max(Math.max(t.scrollWidth, e.scrollWidth), Math.max(t.offsetWidth, e.offsetWidth), Math.max(t.clientWidth, e.clientWidth)),
                                            r = Math.max(Math.max(t.scrollHeight, e.scrollHeight), Math.max(t.offsetHeight, e.offsetHeight), Math.max(t.clientHeight, e.clientHeight));
                                        return new s(0, 0, n, r)
                                    }(d.ownerDocument) : a(p, d), y = v.width, m = v.height, Q = v.left, C = v.top, U = ri(p, d, t.backgroundColor), F = {
                                        canvas: t.canvas,
                                        backgroundColor: U,
                                        scale: null !== (R = null !== (M = t.scale) && void 0 !== M ? M : o.devicePixelRatio) && void 0 !== R ? R : 1,
                                        x: (null !== (k = t.x) && void 0 !== k ? k : 0) + Q,
                                        y: (null !== (N = t.y) && void 0 !== N ? N : 0) + C,
                                        width: null !== (P = t.width) && void 0 !== P ? P : Math.ceil(y),
                                        height: null !== (j = t.height) && void 0 !== j ? j : Math.ceil(m)
                                    }, h ? (p.logger.debug("Document cloned, using foreign object rendering"), [4, new $o(p, F).render(d)]) : [3, 3];
                                case 2:
                                    return b = r.sent(), [3, 5];
                                case 3:
                                    return p.logger.debug("Document cloned, element located at " + Q + "," + C + " with size " + y + "x" + m + " using computed rendering"), p.logger.debug("Starting DOM parsing"), E = gr(p, d), U === E.styles.backgroundColor && (E.styles.backgroundColor = lt.TRANSPARENT), p.logger.debug("Starting renderer for element at " + F.x + "," + F.y + " with size " + F.width + "x" + F.height), [4, new Yo(p, F).render(E)];
                                case 4:
                                    b = r.sent(), r.label = 5;
                                case 5:
                                    return (null === (G = t.removeContainer) || void 0 === G || G) && (Jr.destroy(w) || p.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), p.logger.debug("Finished rendering"), [2, b]
                            }
                        }))
                    }))
                },
                ri = function(A, t, e) {
                    var n = t.ownerDocument,
                        r = n.documentElement ? ct(A, getComputedStyle(n.documentElement).backgroundColor) : lt.TRANSPARENT,
                        o = n.body ? ct(A, getComputedStyle(n.body).backgroundColor) : lt.TRANSPARENT,
                        i = "string" == typeof e ? ct(A, e) : null === e ? lt.TRANSPARENT : 4294967295;
                    return t === n.documentElement ? tt(r) ? tt(o) ? i : o : r : i
                };
            return function(A, t) {
                return void 0 === t && (t = {}), ni(A, t)
            }
        }, "object" === i(t) && void 0 !== A ? A.exports = o() : void 0 === (r = "function" == typeof(n = o) ? n.call(t, e, t, A) : n) || (A.exports = r)
    }, function(A) {
        A.exports = {
            "add_a_category": {
                "message": "添加一个标签"
            },
            "search_or_create_category": {
                "message": "搜索/新建一个标签"
            },
            "create_and_apply": {
                "message": "新建并应用"
            },
            "has_read_percent": {
                "message": "你已浏览到页面 ${percent}%"
            },
            "shortcut": {
                "message": "快捷键"
            },
            "main_shortcut": {
                "message": "主快捷键"
            },
            "press_the_key": {
                "message": "按键快速高亮"
            },
            "most_cnt": {
                "message": "最多设置${account}个"
            },
            "toggle_marks": {
                "message": "点亮/熄灭所有标记"
            },
            "fold": {
                "message": "收起"
            },
            "expand": {
                "message": "展开"
            },
            "goto_manage": {
                "message": "前往管理页查看"
            },
            "copied": {
                "message": "已复制"
            },
            "keywords": {
                "message": "关键词"
            },
            "annotation": {
                "message": "批注"
            },
            "hide": {
                "message": "隐藏"
            },
            "fixed": {
                "message": "固定"
            },
            "copy_keyword_annotation": {
                "message": "复制划词"
            },
            "change_color": {
                "message": "变更颜色"
            },
            "remove_marks": {
                "message": "移除标记"
            },
            "more": {
                "message": "展开更多"
            },
            "mark_limited": {
                "message": "标记失败！最大标记数量${count}个"
            },
            "save_failed": {
                "message": "保存失败"
            },
            "capture_error": {
                "message": "截图失败"
            },
            "not_available_in_current_page": {
                "message": "当前页不可用"
            },
            "capture": {
                "message": "网页截图"
            },
            "manage_pagenote": {
                "message": "管理PAGENOTE"
            },
            "switch": {
                "message": "启用/禁用"
            },
            "support_donation": {
                "message": "打赏支持"
            },
            "rate": {
                "message": "评分"
            },
            "before_start": {
                "message": "开始使用前，请你认真阅读并同意"
            },
            "terms": {
                "message": "使用条款"
            },
            "privacy": {
                "message": "隐私协议"
            },
            "see_release": {
                "message": "查看完整日志"
            },
            "set_lang": {
                "message": "切换语言"
            },
            "backup": {
                "message": "备份"
            },
            "import": {
                "message": "导入"
            },
            "not_found": {
                "message": "此段标记没有在文中找到，可能网页内容已经发生了改变"
            },
            "comment": {
                "message": "批注"
            },
            "pin": {
                "message": "固定"
            },
            "un_pin": {
                "message": "取消固定"
            }
        }
    }, function(A, t, e) {
        "use strict";
        A.exports = e(71)
    }, function(A, t, e) {
        var n = e(72);
        A.exports = function(A, t) {
            return n(A, t)
        }
    }, function(A, t, e) {
        "use strict";
        (function(A) {
            var e = function() {
                    if ("undefined" != typeof Map) return Map;

                    function A(A, t) {
                        var e = -1;
                        return A.some((function(A, n) {
                            return A[0] === t && (e = n, !0)
                        })), e
                    }
                    return function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var e = A(this.__entries__, t),
                                n = this.__entries__[e];
                            return n && n[1]
                        }, t.prototype.set = function(t, e) {
                            var n = A(this.__entries__, t);
                            ~n ? this.__entries__[n][1] = e : this.__entries__.push([t, e])
                        }, t.prototype.delete = function(t) {
                            var e = this.__entries__,
                                n = A(e, t);
                            ~n && e.splice(n, 1)
                        }, t.prototype.has = function(t) {
                            return !!~A(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(A, t) {
                            void 0 === t && (t = null);
                            for (var e = 0, n = this.__entries__; e < n.length; e++) {
                                var r = n[e];
                                A.call(t, r[1], r[0])
                            }
                        }, t
                    }()
                }(),
                n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                r = void 0 !== A && A.Math === Math ? A : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(A) {
                    return setTimeout((function() {
                        return A(Date.now())
                    }), 1e3 / 60)
                };
            var i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                s = "undefined" != typeof MutationObserver,
                a = function() {
                    function A() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(A, t) {
                            var e = !1,
                                n = !1,
                                r = 0;

                            function i() {
                                e && (e = !1, A()), n && a()
                            }

                            function s() {
                                o(i)
                            }

                            function a() {
                                var A = Date.now();
                                if (e) {
                                    if (A - r < 2) return;
                                    n = !0
                                } else e = !0, n = !1, setTimeout(s, t);
                                r = A
                            }
                            return a
                        }(this.refresh.bind(this), 20)
                    }
                    return A.prototype.addObserver = function(A) {
                        ~this.observers_.indexOf(A) || this.observers_.push(A), this.connected_ || this.connect_()
                    }, A.prototype.removeObserver = function(A) {
                        var t = this.observers_,
                            e = t.indexOf(A);
                        ~e && t.splice(e, 1), !t.length && this.connected_ && this.disconnect_()
                    }, A.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, A.prototype.updateObservers_ = function() {
                        var A = this.observers_.filter((function(A) {
                            return A.gatherActive(), A.hasActive()
                        }));
                        return A.forEach((function(A) {
                            return A.broadcastActive()
                        })), A.length > 0
                    }, A.prototype.connect_ = function() {
                        n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, A.prototype.disconnect_ = function() {
                        n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, A.prototype.onTransitionEnd_ = function(A) {
                        var t = A.propertyName,
                            e = void 0 === t ? "" : t;
                        i.some((function(A) {
                            return !!~e.indexOf(A)
                        })) && this.refresh()
                    }, A.getInstance = function() {
                        return this.instance_ || (this.instance_ = new A), this.instance_
                    }, A.instance_ = null, A
                }(),
                u = function(A, t) {
                    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                        var r = n[e];
                        Object.defineProperty(A, r, {
                            value: t[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return A
                },
                c = function(A) {
                    return A && A.ownerDocument && A.ownerDocument.defaultView || r
                },
                l = d(0, 0, 0, 0);

            function f(A) {
                return parseFloat(A) || 0
            }

            function p(A) {
                for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                return t.reduce((function(t, e) {
                    return t + f(A["border-" + e + "-width"])
                }), 0)
            }

            function h(A) {
                var t = A.clientWidth,
                    e = A.clientHeight;
                if (!t && !e) return l;
                var n = c(A).getComputedStyle(A),
                    r = function(A) {
                        for (var t = {}, e = 0, n = ["top", "right", "bottom", "left"]; e < n.length; e++) {
                            var r = n[e],
                                o = A["padding-" + r];
                            t[r] = f(o)
                        }
                        return t
                    }(n),
                    o = r.left + r.right,
                    i = r.top + r.bottom,
                    s = f(n.width),
                    a = f(n.height);
                if ("border-box" === n.boxSizing && (Math.round(s + o) !== t && (s -= p(n, "left", "right") + o), Math.round(a + i) !== e && (a -= p(n, "top", "bottom") + i)), ! function(A) {
                        return A === c(A).document.documentElement
                    }(A)) {
                    var u = Math.round(s + o) - t,
                        h = Math.round(a + i) - e;
                    1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(h) && (a -= h)
                }
                return d(r.left, r.top, s, a)
            }
            var B = "undefined" != typeof SVGGraphicsElement ? function(A) {
                return A instanceof c(A).SVGGraphicsElement
            } : function(A) {
                return A instanceof c(A).SVGElement && "function" == typeof A.getBBox
            };

            function g(A) {
                return n ? B(A) ? function(A) {
                    var t = A.getBBox();
                    return d(0, 0, t.width, t.height)
                }(A) : h(A) : l
            }

            function d(A, t, e, n) {
                return {
                    x: A,
                    y: t,
                    width: e,
                    height: n
                }
            }
            var w = function() {
                    function A(A) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = d(0, 0, 0, 0), this.target = A
                    }
                    return A.prototype.isActive = function() {
                        var A = g(this.target);
                        return this.contentRect_ = A, A.width !== this.broadcastWidth || A.height !== this.broadcastHeight
                    }, A.prototype.broadcastRect = function() {
                        var A = this.contentRect_;
                        return this.broadcastWidth = A.width, this.broadcastHeight = A.height, A
                    }, A
                }(),
                v = function(A, t) {
                    var e, n, r, o, i, s, a, c = (n = (e = t).x, r = e.y, o = e.width, i = e.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, a = Object.create(s.prototype), u(a, {
                        x: n,
                        y: r,
                        width: o,
                        height: i,
                        top: r,
                        right: n + o,
                        bottom: i + r,
                        left: n
                    }), a);
                    u(this, {
                        target: A,
                        contentRect: c
                    })
                },
                y = function() {
                    function A(A, t, n) {
                        if (this.activeObservations_ = [], this.observations_ = new e, "function" != typeof A) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = A, this.controller_ = t, this.callbackCtx_ = n
                    }
                    return A.prototype.observe = function(A) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(A instanceof c(A).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(A) || (t.set(A, new w(A)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, A.prototype.unobserve = function(A) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(A instanceof c(A).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(A) && (t.delete(A), t.size || this.controller_.removeObserver(this))
                        }
                    }, A.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, A.prototype.gatherActive = function() {
                        var A = this;
                        this.clearActive(), this.observations_.forEach((function(t) {
                            t.isActive() && A.activeObservations_.push(t)
                        }))
                    }, A.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var A = this.callbackCtx_,
                                t = this.activeObservations_.map((function(A) {
                                    return new v(A.target, A.broadcastRect())
                                }));
                            this.callback_.call(A, t, A), this.clearActive()
                        }
                    }, A.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, A.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, A
                }(),
                m = "undefined" != typeof WeakMap ? new WeakMap : new e,
                Q = function A(t) {
                    if (!(this instanceof A)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var e = a.getInstance(),
                        n = new y(t, e, this);
                    m.set(this, n)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(A) {
                Q.prototype[A] = function() {
                    var t;
                    return (t = m.get(this))[A].apply(t, arguments)
                }
            }));
            var C = void 0 !== r.ResizeObserver ? r.ResizeObserver : Q;
            t.a = C
        }).call(this, e(29))
    }, function(A, t, e) {
        "use strict";
        var n, r = this && this.__extends || (n = function(A, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(A, t) {
                        A.__proto__ = t
                    } || function(A, t) {
                        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (A[e] = t[e])
                    })(A, t)
            }, function(A, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function e() {
                    this.constructor = A
                }
                n(A, t), A.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(A) {
                    for (var t, e = 1, n = arguments.length; e < n; e++)
                        for (var r in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
                    return A
                }).apply(this, arguments)
            },
            i = this && this.__createBinding || (Object.create ? function(A, t, e, n) {
                void 0 === n && (n = e), Object.defineProperty(A, n, {
                    enumerable: !0,
                    get: function() {
                        return t[e]
                    }
                })
            } : function(A, t, e, n) {
                void 0 === n && (n = e), A[n] = t[e]
            }),
            s = this && this.__setModuleDefault || (Object.create ? function(A, t) {
                Object.defineProperty(A, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(A, t) {
                A.default = t
            }),
            a = this && this.__importStar || function(A) {
                if (A && A.__esModule) return A;
                var t = {};
                if (null != A)
                    for (var e in A) "default" !== e && Object.prototype.hasOwnProperty.call(A, e) && i(t, A, e);
                return s(t, A), t
            },
            u = this && this.__rest || function(A, t) {
                var e = {};
                for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && t.indexOf(n) < 0 && (e[n] = A[n]);
                if (null != A && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(A); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(A, n[r]) && (e[n[r]] = A[n[r]])
                }
                return e
            },
            c = this && this.__importDefault || function(A) {
                return A && A.__esModule ? A : {
                    default: A
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(e(1)),
            f = c(e(140)),
            p = a(e(42));

        function h(A) {
            return A && A.replace(/&nbsp;|\u202F|\u00A0/g, " ")
        }
        var B = function(A) {
            function t() {
                var t = null !== A && A.apply(this, arguments) || this;
                return t.lastHtml = t.props.html, t.el = "function" == typeof t.props.innerRef ? {
                    current: null
                } : l.createRef(), t.getEl = function() {
                    return (t.props.innerRef && "function" != typeof t.props.innerRef ? t.props.innerRef : t.el).current
                }, t.emitChange = function(A) {
                    var e = t.getEl();
                    if (e) {
                        var n = e.innerHTML;
                        if (t.props.onChange && n !== t.lastHtml) {
                            var r = Object.assign({}, A, {
                                target: {
                                    value: n
                                }
                            });
                            t.props.onChange(r)
                        }
                        t.lastHtml = n
                    }
                }, t
            }
            return r(t, A), t.prototype.render = function() {
                var A = this,
                    t = this.props,
                    e = t.tagName,
                    n = t.html,
                    r = t.innerRef,
                    i = u(t, ["tagName", "html", "innerRef"]);
                return l.createElement(e || "div", o(o({}, i), {
                    ref: "function" == typeof r ? function(t) {
                        r(t), A.el.current = t
                    } : r || this.el,
                    onInput: this.emitChange,
                    onBlur: this.props.onBlur || this.emitChange,
                    onKeyUp: this.props.onKeyUp || this.emitChange,
                    onKeyDown: this.props.onKeyDown || this.emitChange,
                    contentEditable: !this.props.disabled,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }), this.props.children)
            }, t.prototype.shouldComponentUpdate = function(A) {
                var t = this.props,
                    e = this.getEl();
                return !e || (h(A.html) !== h(e.innerHTML) || (t.disabled !== A.disabled || t.tagName !== A.tagName || t.className !== A.className || t.innerRef !== A.innerRef || t.placeholder !== A.placeholder || !f.default(t.style, A.style)))
            }, t.prototype.componentDidUpdate = function() {
                var A = this.getEl();
                A && (this.props.html !== A.innerHTML && (A.innerHTML = this.props.html), this.lastHtml = this.props.html, function(A) {
                    var t = document.createTextNode("");
                    A.appendChild(t);
                    var e = document.activeElement === A;
                    if (null !== t && null !== t.nodeValue && e) {
                        var n = window.getSelection();
                        if (null !== n) {
                            var r = document.createRange();
                            r.setStart(t, t.nodeValue.length), r.collapse(!0), n.removeAllRanges(), n.addRange(r)
                        }
                        A instanceof HTMLElement && A.focus()
                    }
                }(A))
            }, t.propTypes = {
                html: p.string.isRequired,
                onChange: p.func,
                disabled: p.bool,
                tagName: p.string,
                className: p.string,
                style: p.object,
                innerRef: p.oneOfType([p.object, p.func])
            }, t
        }(l.Component);
        t.default = B
    }, function(A, t) {
        function e() {
            return A.exports = e = Object.assign || function(A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n])
                }
                return A
            }, A.exports.default = A.exports, A.exports.__esModule = !0, e.apply(this, arguments)
        }
        A.exports = e, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n = e(144);
        A.exports = function(A, t) {
            if (null == A) return {};
            var e, r, o = n(A, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(A);
                for (r = 0; r < i.length; r++) e = i[r], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(A, e) && (o[e] = A[e])
            }
            return o
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n, r, o;

        function i(A) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }! function(e, s) {
            "object" == i(t) ? A.exports = s() : (r = [], void 0 === (o = "function" == typeof(n = s) ? n.apply(t, r) : n) || (A.exports = o))
        }(0, (function() {
            "use strict";
            var A = {
                    grid: 0,
                    filterTarget: null,
                    limit: {
                        x: null,
                        y: null
                    },
                    threshold: 0,
                    setCursor: !1,
                    setPosition: !0,
                    smoothDrag: !0,
                    useGPU: !0,
                    onDrag: a,
                    onDragStart: a,
                    onDragEnd: a
                },
                t = {
                    transform: function() {
                        for (var A = " -o- -ms- -moz- -webkit-".split(" "), t = document.body.style, e = A.length; e--;) {
                            var n = A[e] + "transform";
                            if (n in t) return n
                        }
                    }()
                },
                e = {
                    assign: function() {
                        for (var A = arguments[0], t = arguments.length, e = 1; e < t; e++) {
                            var n = arguments[e];
                            for (var r in n) A[r] = n[r]
                        }
                        return A
                    },
                    bind: function(A, t) {
                        return function() {
                            A.apply(t, arguments)
                        }
                    },
                    on: function(A, t, n) {
                        if (t && n) e.addEvent(A, t, n);
                        else if (t)
                            for (var r in t) e.addEvent(A, r, t[r])
                    },
                    off: function(A, t, n) {
                        if (t && n) e.removeEvent(A, t, n);
                        else if (t)
                            for (var r in t) e.removeEvent(A, r, t[r])
                    },
                    limit: function(A, t) {
                        return t instanceof Array ? A < (t = [+t[0], +t[1]])[0] ? A = t[0] : A > t[1] && (A = t[1]) : A = +t, A
                    },
                    addEvent: "attachEvent" in Element.prototype ? function(A, t, e) {
                        A.attachEvent("on" + t, e)
                    } : function(A, t, e) {
                        A.addEventListener(t, e, !1)
                    },
                    removeEvent: "attachEvent" in Element.prototype ? function(A, t, e) {
                        A.detachEvent("on" + t, e)
                    } : function(A, t, e) {
                        A.removeEventListener(t, e)
                    }
                };

            function n(t, n) {
                var r = this,
                    o = e.bind(r.start, r),
                    i = e.bind(r.drag, r),
                    a = e.bind(r.stop, r);
                if (!s(t)) throw new TypeError("Draggable expects argument 0 to be an Element");
                n = e.assign({}, A, n), e.assign(r, {
                    element: t,
                    handle: n.handle && s(n.handle) ? n.handle : t,
                    handlers: {
                        start: {
                            mousedown: o,
                            touchstart: o
                        },
                        move: {
                            mousemove: i,
                            mouseup: a,
                            touchmove: i,
                            touchend: a
                        }
                    },
                    options: n
                }), r.initialize()
            }

            function r(A) {
                return parseInt(A, 10)
            }

            function o(A) {
                return "currentStyle" in A ? A.currentStyle : getComputedStyle(A)
            }

            function i(A) {
                return null != A
            }

            function s(A) {
                return A instanceof Element || "undefined" != typeof HTMLDocument && A instanceof HTMLDocument
            }

            function a() {}
            return e.assign(n.prototype, {
                setOption: function(A, t) {
                    var e = this;
                    return e.options[A] = t, e.initialize(), e
                },
                get: function() {
                    var A = this.dragEvent;
                    return {
                        x: A.x,
                        y: A.y
                    }
                },
                set: function(A, t) {
                    var e = this.dragEvent;
                    return e.original = {
                        x: e.x,
                        y: e.y
                    }, this.move(A, t), this
                },
                dragEvent: {
                    started: !1,
                    x: 0,
                    y: 0
                },
                initialize: function() {
                    var A, n = this,
                        r = n.element,
                        i = (n.handle, r.style),
                        s = o(r),
                        a = n.options,
                        u = t.transform,
                        c = n._dimensions = {
                            height: r.offsetHeight,
                            left: r.offsetLeft,
                            top: r.offsetTop,
                            width: r.offsetWidth
                        };
                    a.useGPU && u && ("none" === (A = s[u]) && (A = ""), i[u] = A + " translate3d(0,0,0)"), a.setPosition && (i.display = "block", i.left = c.left + "px", i.top = c.top + "px", i.width = c.width + "px", i.height = c.height + "px", i.bottom = i.right = "auto", i.margin = 0, i.position = "absolute"), a.setCursor && (i.cursor = "move"), n.setLimit(a.limit), e.assign(n.dragEvent, {
                        x: c.left,
                        y: c.top
                    }), e.on(n.handle, n.handlers.start)
                },
                start: function(A) {
                    var t = this,
                        n = t.getCursor(A),
                        r = t.element;
                    t.useTarget(A.target || A.srcElement) && (A.preventDefault && !A.target.getAttribute("contenteditable") ? A.preventDefault() : A.target.getAttribute("contenteditable") || (A.returnValue = !1), t.dragEvent.oldZindex = r.style.zIndex, r.style.zIndex = 1e4, t.setCursor(n), t.setPosition(), t.setZoom(), e.on(document, t.handlers.move))
                },
                drag: function(A) {
                    var t = this,
                        e = t.dragEvent,
                        n = t.element,
                        r = t._cursor,
                        o = t._dimensions,
                        i = t.options,
                        s = o.zoom,
                        a = t.getCursor(A),
                        u = i.threshold,
                        c = (a.x - r.x) / s + o.left,
                        l = (a.y - r.y) / s + o.top;
                    !e.started && u && Math.abs(r.x - a.x) < u && Math.abs(r.y - a.y) < u || (e.original || (e.original = {
                        x: c,
                        y: l
                    }), e.started || (i.onDragStart(n, c, l, A), e.started = !0), t.move(c, l) && i.onDrag(n, e.x, e.y, A))
                },
                move: function(A, t) {
                    var e = this,
                        n = e.dragEvent,
                        r = e.options,
                        o = r.grid,
                        i = e.element.style,
                        s = e.limit(A, t, n.original.x, n.original.y);
                    return !r.smoothDrag && o && (s = e.round(s, o)), (s.x !== n.x || s.y !== n.y) && (n.x = s.x, n.y = s.y, i.left = s.x + "px", i.top = s.y + "px", !0)
                },
                stop: function(A) {
                    var t, n = this,
                        r = n.dragEvent,
                        o = n.element,
                        i = n.options,
                        s = i.grid;
                    e.off(document, n.handlers.move), o.style.zIndex = r.oldZindex, i.smoothDrag && s && (t = n.round({
                        x: r.x,
                        y: r.y
                    }, s), n.move(t.x, t.y), e.assign(n.dragEvent, t)), n.dragEvent.started && i.onDragEnd(o, r.x, r.y, A), n.reset()
                },
                reset: function() {
                    this.dragEvent.started = !1
                },
                round: function(A) {
                    var t = this.options.grid;
                    return {
                        x: t * Math.round(A.x / t),
                        y: t * Math.round(A.y / t)
                    }
                },
                getCursor: function(A) {
                    return {
                        x: (A.targetTouches ? A.targetTouches[0] : A).clientX,
                        y: (A.targetTouches ? A.targetTouches[0] : A).clientY
                    }
                },
                setCursor: function(A) {
                    this._cursor = A
                },
                setLimit: function(A) {
                    var t = this,
                        n = function(A, t) {
                            return {
                                x: A,
                                y: t
                            }
                        };
                    if (A instanceof Function) t.limit = A;
                    else if (s(A)) {
                        var r = t._dimensions,
                            o = A.scrollHeight - r.height,
                            a = A.scrollWidth - r.width;
                        t.limit = function(A, t) {
                            return {
                                x: e.limit(A, [0, a]),
                                y: e.limit(t, [0, o])
                            }
                        }
                    } else if (A) {
                        var u = i(A.x),
                            c = i(A.y);
                        t.limit = u || c ? function(t, n) {
                            return {
                                x: u ? e.limit(t, A.x) : t,
                                y: c ? e.limit(n, A.y) : n
                            }
                        } : n
                    } else t.limit = n
                },
                setPosition: function() {
                    var A = this.element,
                        t = A.style;
                    e.assign(this._dimensions, {
                        left: r(t.left) || A.offsetLeft,
                        top: r(t.top) || A.offsetTop
                    })
                },
                setZoom: function() {
                    for (var A = this.element, t = 1; A = A.offsetParent;) {
                        var e = o(A).zoom;
                        if (e && "normal" !== e) {
                            t = e;
                            break
                        }
                    }
                    this._dimensions.zoom = t
                },
                useTarget: function(A) {
                    var t = this.options.filterTarget;
                    return !(t instanceof Function) || t(A)
                },
                destroy: function() {
                    e.off(this.handle, this.handlers.start), e.off(document, this.handlers.move)
                }
            }), n
        }))
    }, function(A, t, e) {
        var n, r, o;

        function i(A) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        o = function() {
            "use strict";
            var A = Object.prototype.toString,
                t = Array.isArray || function(t) {
                    return "[object Array]" === A.call(t)
                };

            function e(A) {
                return "function" == typeof A
            }

            function n(A) {
                return A.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function r(A, t) {
                return null != A && "object" === i(A) && t in A
            }
            var o = RegExp.prototype.test,
                s = /\S/;

            function a(A) {
                return ! function(A, t) {
                    return o.call(A, t)
                }(s, A)
            }
            var u = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                c = /\s*/,
                l = /\s+/,
                f = /\s*=/,
                p = /\s*\}/,
                h = /#|\^|\/|>|\{|&|=|!/;

            function B(A) {
                this.string = A, this.tail = A, this.pos = 0
            }

            function g(A, t) {
                this.view = A, this.cache = {
                    ".": this.view
                }, this.parent = t
            }

            function d() {
                this.templateCache = {
                    _cache: {},
                    set: function(A, t) {
                        this._cache[A] = t
                    },
                    get: function(A) {
                        return this._cache[A]
                    },
                    clear: function() {
                        this._cache = {}
                    }
                }
            }
            B.prototype.eos = function() {
                return "" === this.tail
            }, B.prototype.scan = function(A) {
                var t = this.tail.match(A);
                if (!t || 0 !== t.index) return "";
                var e = t[0];
                return this.tail = this.tail.substring(e.length), this.pos += e.length, e
            }, B.prototype.scanUntil = function(A) {
                var t, e = this.tail.search(A);
                switch (e) {
                    case -1:
                        t = this.tail, this.tail = "";
                        break;
                    case 0:
                        t = "";
                        break;
                    default:
                        t = this.tail.substring(0, e), this.tail = this.tail.substring(e)
                }
                return this.pos += t.length, t
            }, g.prototype.push = function(A) {
                return new g(A, this)
            }, g.prototype.lookup = function(A) {
                var t, n, o, s = this.cache;
                if (s.hasOwnProperty(A)) t = s[A];
                else {
                    for (var a, u, c, l = this, f = !1; l;) {
                        if (A.indexOf(".") > 0)
                            for (a = l.view, u = A.split("."), c = 0; null != a && c < u.length;) c === u.length - 1 && (f = r(a, u[c]) || (n = a, o = u[c], null != n && "object" !== i(n) && n.hasOwnProperty && n.hasOwnProperty(o))), a = a[u[c++]];
                        else a = l.view[A], f = r(l.view, A);
                        if (f) {
                            t = a;
                            break
                        }
                        l = l.parent
                    }
                    s[A] = t
                }
                return e(t) && (t = t.call(this.view)), t
            }, d.prototype.clearCache = function() {
                void 0 !== this.templateCache && this.templateCache.clear()
            }, d.prototype.parse = function(A, e) {
                var r = this.templateCache,
                    o = A + ":" + (e || w.tags).join(":"),
                    i = void 0 !== r,
                    s = i ? r.get(o) : void 0;
                return null == s && (s = function(A, e) {
                    if (!A) return [];
                    var r, o, i, s = !1,
                        u = [],
                        g = [],
                        d = [],
                        v = !1,
                        y = !1,
                        m = "",
                        Q = 0;

                    function C() {
                        if (v && !y)
                            for (; d.length;) delete g[d.pop()];
                        else d = [];
                        v = !1, y = !1
                    }

                    function U(A) {
                        if ("string" == typeof A && (A = A.split(l, 2)), !t(A) || 2 !== A.length) throw new Error("Invalid tags: " + A);
                        r = new RegExp(n(A[0]) + "\\s*"), o = new RegExp("\\s*" + n(A[1])), i = new RegExp("\\s*" + n("}" + A[1]))
                    }
                    U(e || w.tags);
                    for (var F, b, E, _, I, H, O = new B(A); !O.eos();) {
                        if (F = O.pos, E = O.scanUntil(r))
                            for (var S = 0, L = E.length; S < L; ++S) a(_ = E.charAt(S)) ? (d.push(g.length), m += _) : (y = !0, s = !0, m += " "), g.push(["text", _, F, F + 1]), F += 1, "\n" === _ && (C(), m = "", Q = 0, s = !1);
                        if (!O.scan(r)) break;
                        if (v = !0, b = O.scan(h) || "name", O.scan(c), "=" === b ? (E = O.scanUntil(f), O.scan(f), O.scanUntil(o)) : "{" === b ? (E = O.scanUntil(i), O.scan(p), O.scanUntil(o), b = "&") : E = O.scanUntil(o), !O.scan(o)) throw new Error("Unclosed tag at " + O.pos);
                        if (I = ">" == b ? [b, E, F, O.pos, m, Q, s] : [b, E, F, O.pos], Q++, g.push(I), "#" === b || "^" === b) u.push(I);
                        else if ("/" === b) {
                            if (!(H = u.pop())) throw new Error('Unopened section "' + E + '" at ' + F);
                            if (H[1] !== E) throw new Error('Unclosed section "' + H[1] + '" at ' + F)
                        } else "name" === b || "{" === b || "&" === b ? y = !0 : "=" === b && U(E)
                    }
                    if (C(), H = u.pop()) throw new Error('Unclosed section "' + H[1] + '" at ' + O.pos);
                    return function(A) {
                        for (var t, e = [], n = e, r = [], o = 0, i = A.length; o < i; ++o) switch ((t = A[o])[0]) {
                            case "#":
                            case "^":
                                n.push(t), r.push(t), n = t[4] = [];
                                break;
                            case "/":
                                r.pop()[5] = t[2], n = r.length > 0 ? r[r.length - 1][4] : e;
                                break;
                            default:
                                n.push(t)
                        }
                        return e
                    }(function(A) {
                        for (var t, e, n = [], r = 0, o = A.length; r < o; ++r)(t = A[r]) && ("text" === t[0] && e && "text" === e[0] ? (e[1] += t[1], e[3] = t[3]) : (n.push(t), e = t));
                        return n
                    }(g))
                }(A, e), i && r.set(o, s)), s
            }, d.prototype.render = function(A, t, e, n) {
                var r = this.getConfigTags(n),
                    o = this.parse(A, r),
                    i = t instanceof g ? t : new g(t, void 0);
                return this.renderTokens(o, i, e, A, n)
            }, d.prototype.renderTokens = function(A, t, e, n, r) {
                for (var o, i, s, a = "", u = 0, c = A.length; u < c; ++u) s = void 0, "#" === (i = (o = A[u])[0]) ? s = this.renderSection(o, t, e, n, r) : "^" === i ? s = this.renderInverted(o, t, e, n, r) : ">" === i ? s = this.renderPartial(o, t, e, r) : "&" === i ? s = this.unescapedValue(o, t) : "name" === i ? s = this.escapedValue(o, t, r) : "text" === i && (s = this.rawValue(o)), void 0 !== s && (a += s);
                return a
            }, d.prototype.renderSection = function(A, n, r, o, s) {
                var a = this,
                    u = "",
                    c = n.lookup(A[1]);
                if (c) {
                    if (t(c))
                        for (var l = 0, f = c.length; l < f; ++l) u += this.renderTokens(A[4], n.push(c[l]), r, o, s);
                    else if ("object" === i(c) || "string" == typeof c || "number" == typeof c) u += this.renderTokens(A[4], n.push(c), r, o, s);
                    else if (e(c)) {
                        if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                        null != (c = c.call(n.view, o.slice(A[3], A[5]), (function(A) {
                            return a.render(A, n, r, s)
                        }))) && (u += c)
                    } else u += this.renderTokens(A[4], n, r, o, s);
                    return u
                }
            }, d.prototype.renderInverted = function(A, e, n, r, o) {
                var i = e.lookup(A[1]);
                if (!i || t(i) && 0 === i.length) return this.renderTokens(A[4], e, n, r, o)
            }, d.prototype.indentPartial = function(A, t, e) {
                for (var n = t.replace(/[^ \t]/g, ""), r = A.split("\n"), o = 0; o < r.length; o++) r[o].length && (o > 0 || !e) && (r[o] = n + r[o]);
                return r.join("\n")
            }, d.prototype.renderPartial = function(A, t, n, r) {
                if (n) {
                    var o = this.getConfigTags(r),
                        i = e(n) ? n(A[1]) : n[A[1]];
                    if (null != i) {
                        var s = A[6],
                            a = A[5],
                            u = A[4],
                            c = i;
                        0 == a && u && (c = this.indentPartial(i, u, s));
                        var l = this.parse(c, o);
                        return this.renderTokens(l, t, n, c, r)
                    }
                }
            }, d.prototype.unescapedValue = function(A, t) {
                var e = t.lookup(A[1]);
                if (null != e) return e
            }, d.prototype.escapedValue = function(A, t, e) {
                var n = this.getConfigEscape(e) || w.escape,
                    r = t.lookup(A[1]);
                if (null != r) return "number" == typeof r && n === w.escape ? String(r) : n(r)
            }, d.prototype.rawValue = function(A) {
                return A[1]
            }, d.prototype.getConfigTags = function(A) {
                return t(A) ? A : A && "object" === i(A) ? A.tags : void 0
            }, d.prototype.getConfigEscape = function(A) {
                return A && "object" === i(A) && !t(A) ? A.escape : void 0
            };
            var w = {
                    name: "mustache.js",
                    version: "4.2.0",
                    tags: ["{{", "}}"],
                    clearCache: void 0,
                    escape: void 0,
                    parse: void 0,
                    render: void 0,
                    Scanner: void 0,
                    Context: void 0,
                    Writer: void 0,
                    set templateCache(A) {
                        v.templateCache = A
                    },
                    get templateCache() {
                        return v.templateCache
                    }
                },
                v = new d;
            return w.clearCache = function() {
                return v.clearCache()
            }, w.parse = function(A, t) {
                return v.parse(A, t)
            }, w.render = function(A, e, n, r) {
                if ("string" != typeof A) throw new TypeError('Invalid template! Template should be a "string" but "' + (t(o = A) ? "array" : i(o)) + '" was given as the first argument for mustache#render(template, view, partials)');
                var o;
                return v.render(A, e, n, r)
            }, w.escape = function(A) {
                return String(A).replace(/[&<>"'`=\/]/g, (function(A) {
                    return u[A]
                }))
            }, w.Scanner = B, w.Context = g, w.Writer = d, w
        }, "object" === i(t) && void 0 !== A ? A.exports = o() : void 0 === (r = "function" == typeof(n = o) ? n.call(t, e, t, A) : n) || (A.exports = r)
    }, function(A, t) {
        A.exports = function(A, t) {
            if (!(A instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        function e(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        A.exports = function(A, t, n) {
            return t && e(A.prototype, t), n && e(A, n), A
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n = e(149);
        A.exports = function(A, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            A.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: A,
                    writable: !0,
                    configurable: !0
                }
            }), t && n(A, t)
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        var n = e(6).default,
            r = e(7);
        A.exports = function(A, t) {
            if (t && ("object" === n(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return r(A)
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        var e, n, r, o, i, s, a, u, c, l, f, p, h, B, g, d, w, v, y, m, Q, C, U, F, b, E, _, I, H, O, S, L, x, T = [],
            D = {},
            K = "appendChild",
            M = "createElement",
            R = "removeChild";

        function k() {
            var A = e.getBoundingClientRect(),
                t = A.top,
                n = A.left,
                i = A.width,
                s = A.height;
            return "transform:translate3D(" + (n - (r.clientWidth - i) / 2) + "px, " + (t - (r.clientHeight - s) / 2) + "px, 0) scale3D(" + e.clientWidth / o.clientWidth + ", " + e.clientHeight / o.clientHeight + ", 0)"
        }

        function N(A) {
            var t = O.length - 1;
            if (!h) {
                if (A > 0 && H === t || A < 0 && !H) {
                    if (!x.loop) return Z(i, ""), void setTimeout(Z, 9, i, "animation:" + (A > 0 ? "bpl" : "bpf") + " .3s;transition:transform .35s");
                    H = A > 0 ? -1 : t + 1
                }
                if ([(H = Math.max(0, Math.min(H + A, t))) - 1, H, H + 1].forEach((function(A) {
                        if (A = Math.max(0, Math.min(A, t)), !D[A]) {
                            var e = O[A].src,
                                n = document[M]("IMG");
                            n.addEventListener("load", J.bind(null, e)), n.src = e, D[A] = n
                        }
                    })), D[H].complete) return P(A);
                h = !0, Z(g, "opacity:.4;"), r[K](g), D[H].onload = function() {
                    Q && P(A)
                }, D[H].onerror = function() {
                    O[H] = {
                        error: "Error loading image"
                    }, Q && P(A)
                }
            }
        }

        function P(A) {
            h && (r[R](g), h = !1);
            var t = O[H];
            if (t.error) alert(t.error);
            else {
                var n = r.querySelector("img:last-of-type");
                Z(i = o = D[H], "animation:" + (A > 0 ? "bpfl" : "bpfr") + " .35s;transition:transform .35s"), Z(n, "animation:" + (A > 0 ? "bpfol" : "bpfor") + " .35s both"), r[K](i), t.el && (e = t.el)
            }
            S.innerHTML = H + 1 + "/" + O.length, W(O[H].caption), E && E([i, O[H]])
        }

        function j() {
            var A, t, e = .95 * window.innerHeight,
                n = .95 * window.innerWidth,
                r = e / n,
                o = x.dimensions || [1920, 1080],
                i = o[0],
                s = o[1],
                a = s / i;
            a > r ? t = (A = Math.min(s, e)) / a : A = (t = Math.min(i, n)) * a, u.style.cssText += "width:" + t + "px;height:" + A + "px;"
        }

        function G(A) {
            ~[1, 4].indexOf(o.readyState) ? (X(), setTimeout((function() {
                o.play()
            }), 99)) : o.error ? X(A) : B = setTimeout(G, 35, A)
        }

        function V(A) {
            x.noLoader || (A && Z(g, "top:" + e.offsetTop + "px;left:" + e.offsetLeft + "px;height:" + e.clientHeight + "px;width:" + e.clientWidth + "px"), e.parentElement[A ? K : R](g), h = A)
        }

        function W(A) {
            A && (w.innerHTML = A), Z(d, "opacity:" + (A ? "1;pointer-events:auto" : "0"))
        }

        function J(A) {
            !~T.indexOf(A) && T.push(A)
        }

        function X(A) {
            if (h && V(), F && F(), "string" == typeof A) return z(), x.onError ? x.onError() : alert("Error: The requested " + A + " could not be loaded.");
            U && J(l), o.style.cssText += k(), Z(r, "opacity:1;pointer-events:auto"), b && (b = setTimeout(b, 410)), m = !0, Q = !!O, setTimeout((function() {
                o.style.cssText += "transition:transform .35s;transform:none", v && setTimeout(W, 250, v)
            }), 60)
        }

        function Y(A) {
            var t = A ? A.target : r,
                e = [d, y, s, a, w, I, _, g];
            t.blur(), C || ~e.indexOf(t) || (o.style.cssText += k(), Z(r, "pointer-events:auto"), setTimeout(z, 350), clearTimeout(b), m = !1, C = !0)
        }

        function z() {
            if ((o === u ? c : o).removeAttribute("src"), document.body[R](r), r[R](o), Z(r, ""), Z(o, ""), W(!1), Q) {
                for (var A = r.querySelectorAll("img"), t = 0; t < A.length; t++) r[R](A[t]);
                h && r[R](g), r[R](S), Q = O = !1, D = {}, L || r[R](_), L || r[R](I), i.onload = X, i.onerror = X.bind(null, "image")
            }
            x.onClose && x.onClose(), C = h = !1
        }

        function Z(A, t) {
            A.style.cssText = t
        }
        A.exports = function(A) {
            var t;
            return n || function() {
                var A;

                function t(A) {
                    var t = document[M]("button");
                    return t.className = A, t.innerHTML = '<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>', t
                }

                function e(A, t) {
                    var e = document[M]("button");
                    return e.className = "bp-lr", e.innerHTML = '<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>', Z(e, t), e.onclick = function(t) {
                        t.stopPropagation(), N(A)
                    }, e
                }
                var l = document[M]("STYLE");
                l.innerHTML = "#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}", document.head[K](l), (r = document[M]("DIV")).id = "bp_container", r.onclick = Y, f = t("bp-x"), r[K](f), "ontouchstart" in window && (L = !0, r.ontouchstart = function(t) {
                    var e = t.changedTouches;
                    A = e[0].pageX
                }, r.ontouchmove = function(A) {
                    A.preventDefault()
                }, r.ontouchend = function(t) {
                    var e = t.changedTouches;
                    if (Q) {
                        var n = e[0].pageX - A;
                        n < -30 && N(1), n > 30 && N(-1)
                    }
                });
                i = document[M]("IMG"), (s = document[M]("VIDEO")).id = "bp_vid", s.setAttribute("playsinline", !0), s.controls = !0, s.loop = !0, (a = document[M]("audio")).id = "bp_aud", a.controls = !0, a.loop = !0, (S = document[M]("span")).id = "bp_count", (d = document[M]("DIV")).id = "bp_caption", (y = t("bp-xc")).onclick = W.bind(null, !1), d[K](y), w = document[M]("SPAN"), d[K](w), r[K](d), _ = e(1, "transform:scalex(-1)"), I = e(-1, "left:0;right:auto"), (g = document[M]("DIV")).id = "bp_loader", g.innerHTML = '<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>', (u = document[M]("DIV")).id = "bp_sv", (c = document[M]("IFRAME")).setAttribute("allowfullscreen", !0), c.allow = "autoplay; fullscreen", c.onload = function() {
                    return u[R](g)
                }, Z(c, "border:0;position:absolute;height:100%;width:100%;left:0;top:0"), u[K](c), i.onload = X, i.onerror = X.bind(null, "image"), window.addEventListener("resize", (function() {
                    Q || h && V(!0), o === u && j()
                })), document.addEventListener("keyup", (function(A) {
                	//shuise
                	return;
                    var t = A.keyCode;
                    27 === t && m && Y(), Q && (39 === t && N(1), 37 === t && N(-1), 38 === t && N(10), 40 === t && N(-10))
                })), document.addEventListener("keydown", (function(A) {
                	//shuise
                	return;
                    Q && ~[37, 38, 39, 40].indexOf(A.keyCode) && A.preventDefault()
                })), document.addEventListener("focus", (function(A) {
                    m && !r.contains(A.target) && (A.stopPropagation(), f.focus())
                }), !0), n = !0
            }(), h && (clearTimeout(B), z()), x = A, p = A.ytSrc || A.vimeoSrc, F = A.animationStart, b = A.animationEnd, E = A.onChangeImage, e = A.el, U = !1, v = e.getAttribute("data-caption"), A.gallery ? function(A, t) {
                var n = x.galleryAttribute || "data-bp";
                if (Array.isArray(A)) O = A, v = A[H = t || 0].caption;
                else {
                    var s = (O = [].slice.call("string" == typeof A ? document.querySelectorAll(A + " [" + n + "]") : A)).indexOf(e);
                    H = 0 === t || t ? t : -1 !== s ? s : 0, O = O.map((function(A) {
                        return {
                            el: A,
                            src: A.getAttribute(n),
                            caption: A.getAttribute("data-caption")
                        }
                    }))
                }
                U = !0, l = O[H].src, !~T.indexOf(l) && V(!0), O.length > 1 ? (r[K](S), S.innerHTML = H + 1 + "/" + O.length, L || (r[K](_), r[K](I))) : O = !1;
                (o = i).src = l
            }(A.gallery, A.position) : p || A.iframeSrc ? (o = u, function() {
                var A;
                x.ytSrc ? A = "https://www.youtube" + (x.ytNoCookie ? "-nocookie" : "") + ".com/embed/" + p + "?html5=1&rel=0&playsinline=1&autoplay=1" : x.vimeoSrc ? A = "https://player.vimeo.com/video/" + p + "?autoplay=1" : x.iframeSrc && (A = x.iframeSrc);
                Z(g, ""), u[K](g), c.src = A, j(), setTimeout(X, 9)
            }()) : A.imgSrc ? (U = !0, l = A.imgSrc, !~T.indexOf(l) && V(!0), (o = i).src = l) : A.audio ? (V(!0), (o = a).src = A.audio, G("audio file")) : A.vidSrc ? (V(!0), A.dimensions && Z(s, "width:" + A.dimensions[0] + "px"), t = A.vidSrc, Array.isArray(t) ? (o = s.cloneNode(), t.forEach((function(A) {
                var t = document[M]("SOURCE");
                t.src = A, t.type = "video/" + A.match(/.(\w+)$/)[1], o[K](t)
            }))) : (o = s).src = t, G("video")) : (o = i).src = "IMG" === e.tagName ? e.src : window.getComputedStyle(e).backgroundImage.replace(/^url|[(|)|'|"]/g, ""), r[K](o), document.body[K](r), {
                close: Y,
                next: function() {
                    return N(1)
                },
                prev: function() {
                    return N(-1)
                }
            }
        }
    }, function(A, t, e) {}, function(A, t, e) {
        function n(A) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        A.exports = function(A) {
            var t = {};

            function e(n) {
                if (t[n]) return t[n].exports;
                var r = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return A[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
            }
            return e.m = A, e.c = t, e.d = function(A, t, n) {
                e.o(A, t) || Object.defineProperty(A, t, {
                    enumerable: !0,
                    get: n
                })
            }, e.r = function(A) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(A, "__esModule", {
                    value: !0
                })
            }, e.t = function(A, t) {
                if (1 & t && (A = e(A)), 8 & t) return A;
                if (4 & t && "object" == n(A) && A && A.__esModule) return A;
                var r = Object.create(null);
                if (e.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: A
                    }), 2 & t && "string" != typeof A)
                    for (var o in A) e.d(r, o, function(t) {
                        return A[t]
                    }.bind(null, o));
                return r
            }, e.n = function(A) {
                var t = A && A.__esModule ? function() {
                    return A.default
                } : function() {
                    return A
                };
                return e.d(t, "a", t), t
            }, e.o = function(A, t) {
                return Object.prototype.hasOwnProperty.call(A, t)
            }, e.p = "", e(e.s = 7)
        }([function(A, t) {
            A.exports = e(1)
        }, function(A, t) {
            A.exports = e(164)
        }, function(A, t, e) {
            var n = e(3);
            "string" == typeof n && (n = [
                [A.i, n, ""]
            ]);
            e(5)(n, {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            }), n.locals && (A.exports = n.locals)
        }, function(A, t, e) {
            (A.exports = e(4)(!1)).push([A.i, ".DraggableTags {\n  position: relative;\n  height: 100%;\n  touch-action: none;\n}\n.DraggableTags::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.DraggableTags-tag {\n  display: inline-block;\n  position: relative;\n  color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.DraggableTags-undraggable {\n  cursor: no-drop;\n}\n.DraggableTags-tag-drag {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n}\n.hotspot-9485743 {\n  cursor: move;\n}\n.excludedInHotspot-9485743 {\n  cursor: default;\n}\n", ""])
        }, function(A, t) {
            A.exports = function(A) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var e = function(A, t) {
                            var e, n = A[1] || "",
                                r = A[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var o = (e = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"),
                                    i = r.sources.map((function(A) {
                                        return "/*# sourceURL=" + r.sourceRoot + A + " */"
                                    }));
                                return [n].concat(i).concat([o]).join("\n")
                            }
                            return [n].join("\n")
                        }(t, A);
                        return t[2] ? "@media " + t[2] + "{" + e + "}" : e
                    })).join("")
                }, t.i = function(A, e) {
                    "string" == typeof A && (A = [
                        [null, A, ""]
                    ]);
                    for (var n = {}, r = 0; r < this.length; r++) {
                        var o = this[r][0];
                        "number" == typeof o && (n[o] = !0)
                    }
                    for (r = 0; r < A.length; r++) {
                        var i = A[r];
                        "number" == typeof i[0] && n[i[0]] || (e && !i[2] ? i[2] = e : e && (i[2] = "(" + i[2] + ") and (" + e + ")"), t.push(i))
                    }
                }, t
            }
        }, function(A, t, e) {
            var r, o, i = {},
                s = (r = function() {
                    return window && document && document.all && !window.atob
                }, function() {
                    return void 0 === o && (o = r.apply(this, arguments)), o
                }),
                a = function(A) {
                    return document.querySelector(A)
                },
                u = function(A) {
                    var t = {};
                    return function(A) {
                        if ("function" == typeof A) return A();
                        if (void 0 === t[A]) {
                            var e = a.call(this, A);
                            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                                e = e.contentDocument.head
                            } catch (A) {
                                e = null
                            }
                            t[A] = e
                        }
                        return t[A]
                    }
                }(),
                c = null,
                l = 0,
                f = [],
                p = e(6);

            function h(A, t) {
                for (var e = 0; e < A.length; e++) {
                    var n = A[e],
                        r = i[n.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                        for (; o < n.parts.length; o++) r.parts.push(y(n.parts[o], t))
                    } else {
                        var s = [];
                        for (o = 0; o < n.parts.length; o++) s.push(y(n.parts[o], t));
                        i[n.id] = {
                            id: n.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }

            function B(A, t) {
                for (var e = [], n = {}, r = 0; r < A.length; r++) {
                    var o = A[r],
                        i = t.base ? o[0] + t.base : o[0],
                        s = {
                            css: o[1],
                            media: o[2],
                            sourceMap: o[3]
                        };
                    n[i] ? n[i].parts.push(s) : e.push(n[i] = {
                        id: i,
                        parts: [s]
                    })
                }
                return e
            }

            function g(A, t) {
                var e = u(A.insertInto);
                if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = f[f.length - 1];
                if ("top" === A.insertAt) r ? r.nextSibling ? e.insertBefore(t, r.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild), f.push(t);
                else if ("bottom" === A.insertAt) e.appendChild(t);
                else {
                    if ("object" != n(A.insertAt) || !A.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = u(A.insertInto + " " + A.insertAt.before);
                    e.insertBefore(t, o)
                }
            }

            function d(A) {
                if (null === A.parentNode) return !1;
                A.parentNode.removeChild(A);
                var t = f.indexOf(A);
                t >= 0 && f.splice(t, 1)
            }

            function w(A) {
                var t = document.createElement("style");
                return void 0 === A.attrs.type && (A.attrs.type = "text/css"), v(t, A.attrs), g(A, t), t
            }

            function v(A, t) {
                Object.keys(t).forEach((function(e) {
                    A.setAttribute(e, t[e])
                }))
            }

            function y(A, t) {
                var e, n, r, o;
                if (t.transform && A.css) {
                    if (!(o = t.transform(A.css))) return function() {};
                    A.css = o
                }
                if (t.singleton) {
                    var i = l++;
                    e = c || (c = w(t)), n = C.bind(null, e, i, !1), r = C.bind(null, e, i, !0)
                } else A.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function(A) {
                    var t = document.createElement("link");
                    return void 0 === A.attrs.type && (A.attrs.type = "text/css"), A.attrs.rel = "stylesheet", v(t, A.attrs), g(A, t), t
                }(t), n = F.bind(null, e, t), r = function() {
                    d(e), e.href && URL.revokeObjectURL(e.href)
                }) : (e = w(t), n = U.bind(null, e), r = function() {
                    d(e)
                });
                return n(A),
                    function(t) {
                        if (t) {
                            if (t.css === A.css && t.media === A.media && t.sourceMap === A.sourceMap) return;
                            n(A = t)
                        } else r()
                    }
            }
            A.exports = function(A, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != ("undefined" == typeof document ? "undefined" : n(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
                (t = t || {}).attrs = "object" == n(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var e = B(A, t);
                return h(e, t),
                    function(A) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var o = e[r];
                            (s = i[o.id]).refs--, n.push(s)
                        }
                        for (A && h(B(A, t), t), r = 0; r < n.length; r++) {
                            var s;
                            if (0 === (s = n[r]).refs) {
                                for (var a = 0; a < s.parts.length; a++) s.parts[a]();
                                delete i[s.id]
                            }
                        }
                    }
            };
            var m, Q = (m = [], function(A, t) {
                return m[A] = t, m.filter(Boolean).join("\n")
            });

            function C(A, t, e, n) {
                var r = e ? "" : n.css;
                if (A.styleSheet) A.styleSheet.cssText = Q(t, r);
                else {
                    var o = document.createTextNode(r),
                        i = A.childNodes;
                    i[t] && A.removeChild(i[t]), i.length ? A.insertBefore(o, i[t]) : A.appendChild(o)
                }
            }

            function U(A, t) {
                var e = t.css,
                    n = t.media;
                if (n && A.setAttribute("media", n), A.styleSheet) A.styleSheet.cssText = e;
                else {
                    for (; A.firstChild;) A.removeChild(A.firstChild);
                    A.appendChild(document.createTextNode(e))
                }
            }

            function F(A, t, e) {
                var n = e.css,
                    r = e.sourceMap,
                    o = void 0 === t.convertToAbsoluteUrls && r;
                (t.convertToAbsoluteUrls || o) && (n = p(n)), r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var i = new Blob([n], {
                        type: "text/css"
                    }),
                    s = A.href;
                A.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s)
            }
        }, function(A, t) {
            A.exports = function(A) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!A || "string" != typeof A) return A;
                var e = t.protocol + "//" + t.host,
                    n = e + t.pathname.replace(/\/[^\/]*$/, "/");
                return A.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(A, t) {
                    var r, o = t.trim().replace(/^"(.*)"$/, (function(A, t) {
                        return t
                    })).replace(/^'(.*)'$/, (function(A, t) {
                        return t
                    }));
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? A : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? e + o : n + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
                }))
            }
        }, function(A, t, e) {
            "use strict";
            e.r(t), e.d(t, "DraggableArea", (function() {
                return Q
            })), e.d(t, "DraggableAreasGroup", (function() {
                return m
            }));
            var r = e(0),
                o = e.n(r),
                i = e(1);

            function s(A) {
                return (s = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(A) {
                    return n(A)
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : n(A)
                })(A)
            }

            function a(A, t) {
                var e = Object.keys(A);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(A);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(A, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function u(A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(e), !0).forEach((function(t) {
                        c(A, t, e[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : a(Object(e)).forEach((function(t) {
                        Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
                    }))
                }
                return A
            }

            function c(A, t, e) {
                return t in A ? Object.defineProperty(A, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : A[t] = e, A
            }

            function l(A, t) {
                if (!(A instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(A, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                }
            }

            function p(A, t, e) {
                return t && f(A.prototype, t), e && f(A, e), A
            }

            function h(A, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                A.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: A,
                        writable: !0,
                        configurable: !0
                    }
                }), t && function(A, t) {
                    (Object.setPrototypeOf || function(A, t) {
                        return A.__proto__ = t, A
                    })(A, t)
                }(A, t)
            }

            function B(A) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (A) {
                        return !1
                    }
                }();
                return function() {
                    var e, n = d(A);
                    if (t) {
                        var r = d(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return g(this, e)
                }
            }

            function g(A, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(A) {
                    if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return A
                }(A) : t
            }

            function d(A) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
                    return A.__proto__ || Object.getPrototypeOf(A)
                })(A)
            }
            e(2);
            var w = void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");

            function v() {
                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = A.isInAnotherArea,
                    e = void 0 === t ? function() {} : t,
                    n = A.passAddFunc,
                    r = void 0 === n ? function() {} : n,
                    s = function(A) {
                        var t = A.children;
                        return o.a.createElement("div", {
                            className: "hotspot-9485743"
                        }, t)
                    },
                    a = function(A) {
                        var t = A.children;
                        return o.a.createElement("div", {
                            className: "excludedInHotspot-9485743"
                        }, t)
                    },
                    c = function(A) {
                        h(n, A);
                        var t = B(n);

                        function n() {
                            var A;
                            return l(this, n), (A = t.call(this)).state = {
                                tags: Object(i.List)([])
                            }, A.draggableTagEles = {}, A.tagEles = {}, A.positions = [], A.rect = {}, A.dragStart = {}, A.tagChanged = !1, A.tagsElesWhichBindedDrag = new WeakSet, A
                        }
                        return p(n, [{
                            key: "componentDidMount",
                            value: function() {
                                this.props.initialTags ? this.setTags(Object(i.List)(this.props.initialTags)) : this.setTags(Object(i.List)(this.props.tags)), r(this.container, this.addTag.bind(this)), this.props.getAddTagFunc && this.props.getAddTagFunc(this.addTag.bind(this))
                            }
                        }, {
                            key: "UNSAFE_componentWillReceiveProps",
                            value: function(A) {
                                var t = this,
                                    e = A.tags;
                                e && (e.length === this.props.tags.length && e.length === this.state.tags.size && !e.some((function(A, e) {
                                    return !t.state.tags.get(e) || A.id !== t.state.tags.get(e).id
                                })) || this.forbitSetTagsState || this.setTags(Object(i.List)(e)))
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(A, t) {
                                var e = t.tags;
                                this.tagChanged = this.tagChanged || e.size !== this.state.tags.size || this.state.tags.some((function(A, t) {
                                    return !e.get(t) || A.id !== e.get(t).id
                                }))
                            }
                        }, {
                            key: "dragElement",
                            value: function(A, t, n) {
                                var r, o = this,
                                    i = this.props.isList,
                                    s = 0,
                                    a = 0,
                                    u = 0,
                                    c = 0,
                                    l = {},
                                    f = !1;
                                this.positions.forEach((function(A, e) {
                                    A.id === t && (r = e)
                                }));
                                var p = function(e) {
                                        if (f = !1, o.props.withHotspot) {
                                            var n = e.target.closest(".".concat("hotspot-9485743")),
                                                i = e.target.closest(".".concat("excludedInHotspot-9485743"));
                                            if (!n) return;
                                            if (n.contains(i)) return
                                        }
                                        if (o.tagChanged = !1, !window.dragMouseDown) {
                                            for (window.dragMouseDown = !0, l = o.container.getBoundingClientRect(), e = e || window.event, s = u = e.clientX || e.touches[0].clientX, a = c = e.clientY || e.touches[0].clientY, A.style.zIndex = 2, window.parentDragTag = A.parentElement; window.parentDragTag && !window.parentDragTag.classList.contains("DraggableTags-tag-drag");) window.parentDragTag = window.parentDragTag.parentElement;
                                            window.parentDragTag && (window.parentDragTag.style.zIndex = 2), document.addEventListener("mouseup", B, !1), document.addEventListener("mousemove", h, !1), A.addEventListener("touchend", B, !1), A.addEventListener("touchcancel", B, !1), A.addEventListener("touchmove", h, !1), o.positions.forEach((function(A, e) {
                                                A.id === t && (r = e)
                                            }))
                                        }
                                    },
                                    h = function(t) {
                                        w && (o.container.style.overflowY = "visible"), "touchmove" === t.type && t.preventDefault();
                                        var e = (t = t || window.event).clientX || t.touches[0].clientX,
                                            l = t.clientY || t.touches[0].clientY;
                                        if (e !== u || l !== c) {
                                            f = !0;
                                            var p = e - s,
                                                h = l - a;
                                            s = e, a = l;
                                            var B = A.offsetTop + h,
                                                g = A.offsetLeft + p;
                                            A.style.top = B + "px", A.style.left = g + "px";
                                            var d, v = n.offsetTop + A.offsetHeight / 2,
                                                y = n.offsetLeft + A.offsetWidth / 2,
                                                m = v + B,
                                                Q = y + g;
                                            for (d = 0; d < o.positions.length - 1; d++)
                                                if ((r !== d || r === o.positions.length - 2 && d === o.positions.length - 2) && (r - 1 !== d || 0 === d)) {
                                                    var C = o.positions[d],
                                                        U = o.positions[d + 1],
                                                        F = !1,
                                                        b = !1,
                                                        E = !1,
                                                        _ = !1,
                                                        I = !1;
                                                    if (i ? (m > C.bottom - 4 && m < U.top + 4 && (E = !0), 0 === d && m < C.top + 4 && (F = !0), d === o.positions.length - 2 && m > U.bottom - 4 && (b = !0)) : (0 === d && m > C.top && m < C.bottom && Q < C.left + 8 && (F = !0), d === o.positions.length - 2 && (m > U.top && Q > U.left - 8 || m > U.bottom) && (b = !0), m > C.top && m < C.bottom && Q > C.right - 8 && Q < U.left + 8 && (E = !0), m > U.top && m < U.bottom && Q < U.left + 8 && C.top < U.top && (I = !0), m > C.top && m < C.bottom && Q > C.right - 8 && C.top < U.top && (_ = !0)), (!i && (F || b || E || I || _) || i && (F || b || E)) && "break" === function() {
                                                            var t = o.state.tags.get(r),
                                                                e = o.state.tags.splice(r, 1);
                                                            (r < d || F) && !b ? (e = e.splice(d, 0, t), r = d) : (e = e.splice(d + 1, 0, t), r = d + 1), o.positions = [];
                                                            var n = o.tagEles[t.id].offsetTop,
                                                                i = o.tagEles[t.id].offsetLeft;
                                                            return o.setState({
                                                                tags: e
                                                            }, (function() {
                                                                var t, s;
                                                                e.forEach((function(A, e) {
                                                                    var n = o.tagEles[A.id];
                                                                    e === r && (s = n.offsetLeft, t = n.offsetTop), o.positions.push({
                                                                        id: A.id,
                                                                        top: n.offsetTop,
                                                                        left: n.offsetLeft,
                                                                        bottom: n.offsetTop + n.offsetHeight,
                                                                        right: n.offsetLeft + n.offsetWidth,
                                                                        width: n.offsetWidth,
                                                                        height: n.offsetHeight
                                                                    })
                                                                })), A.style.left = "".concat(s > i ? g - (s - i) : g + (i - s), "px"), A.style.top = "".concat(n > t ? B + (n - t) : B - (t - n), "px")
                                                            })), "break"
                                                        }()) break
                                                }
                                        } else f = !1
                                    },
                                    B = function t(n) {
                                        if (f) {
                                            var i = function A(t) {
                                                t.stopPropagation(), document.removeEventListener("click", A, !0)
                                            };
                                            document.addEventListener("click", i, !0), setTimeout((function() {
                                                document.removeEventListener("click", i, !0)
                                            }), 500)
                                        }
                                        w && (o.container.style.overflowY = "auto"), window.dragMouseDown = !1, document.removeEventListener("mouseup", t, !1), document.removeEventListener("mousemove", h, !1), A.removeEventListener("touchend", t, !1), A.removeEventListener("touchcancel", t, !1), A.removeEventListener("touchmove", h, !1), window.parentDragTag && (window.parentDragTag.style.zIndex = 1);
                                        var s = A.getBoundingClientRect(),
                                            a = s.left + s.width / 2,
                                            u = s.top + s.height / 2;
                                        if (a < l.left || a > l.right || u < l.top || u > l.bottom) {
                                            o.forbitSetTagsState = !0;
                                            var c = e(A.getBoundingClientRect(), o.state.tags.get(r));
                                            if (c && c.isIn) {
                                                o.positions.splice(r, 1);
                                                var p = o.state.tags.get(r);
                                                return void o.setState({
                                                    tags: o.state.tags.splice(r, 1)
                                                }, (function() {
                                                    o.props.onChange && o.props.onChange(o.state.tags.toJS(), o.buildOnChangeObj({
                                                        toArea: {
                                                            id: c.id,
                                                            tag: p
                                                        }
                                                    })), o.forbitSetTagsState = !1
                                                }))
                                            }
                                            o.forbitSetTagsState = !1
                                        }
                                        A.style.top = 0, A.style.left = 0, A.style.zIndex = 1, o.tagChanged && o.props.onChange && (o.tagChanged = !1, o.props.onChange(o.state.tags.toJS(), o.buildOnChangeObj()))
                                    };
                                A.removeEventListener("mousedown", p), A.removeEventListener("touchstart", p), A.addEventListener("mousedown", p, !1), A.addEventListener("touchstart", p, !1)
                            }
                        }, {
                            key: "setTags",
                            value: function(A, t) {
                                var e = this;
                                this.setState({
                                    tags: A
                                }, (function() {
                                    t && t(), e.positions = [], e.state.tags.forEach((function(A, t) {
                                        var n = e.draggableTagEles[A.id],
                                            r = e.tagEles[A.id];
                                        if (e.positions.push({
                                                id: A.id,
                                                top: r.offsetTop,
                                                left: r.offsetLeft,
                                                bottom: r.offsetTop + r.offsetHeight,
                                                right: r.offsetLeft + r.offsetWidth,
                                                width: r.offsetWidth,
                                                height: r.offsetHeight
                                            }), !A.undraggable) {
                                            if (e.tagsElesWhichBindedDrag.has(n)) return;
                                            e.tagsElesWhichBindedDrag.add(n), e.dragElement(n, A.id, r)
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "addTag",
                            value: function(A) {
                                var t, e = this,
                                    n = A.tag,
                                    r = A.fromAreaId,
                                    o = A.x,
                                    i = A.y,
                                    s = this.container.getBoundingClientRect(),
                                    a = i - s.top,
                                    u = o - s.left,
                                    c = !1,
                                    l = !1,
                                    f = !1,
                                    p = !1,
                                    h = !1;
                                for (t = 0; t < this.positions.length - 1; t++) {
                                    var B = this.positions[t],
                                        g = B.top + B.height / 2,
                                        d = B.left + B.width / 2,
                                        w = this.positions[t + 1],
                                        v = w.top + w.height / 2,
                                        y = w.left + w.width / 2;
                                    if (c = !1, l = !1, f = !1, p = !1, h = !1, this.props.isList) {
                                        if (a > g && a < v && (f = !0), 0 === t && a < g && (c = !0), t !== this.positions.length - 2 || f || c || (l = !0), c || l || f) break
                                    } else if (0 === t && a > B.top && a < B.bottom && u < d && (c = !0), a > B.top && a < B.bottom && u > d && u < y && (f = !0), a > w.top && a < w.bottom && u < y && B.top < w.top && (h = !0), a > B.top && a < B.bottom && u > d && B.top < w.top && (p = !0), t !== this.positions.length - 2 || c || f || h || p || (l = !0), c || l || f || h || p) break
                                }
                                var m = this.state.tags;
                                m = l ? m.push(n) : c ? m.unshift(n) : m.splice(t + 1, 0, n), this.positions = [], this.setState({
                                    tags: m
                                }, (function() {
                                    e.props.onChange && e.props.onChange(e.state.tags.toJS(), e.buildOnChangeObj({
                                        fromArea: {
                                            id: r,
                                            tag: n
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "buildDeleteTagFunc",
                            value: function(A) {
                                var t = this;
                                return function() {
                                    var e = t.state.tags.filter((function(t) {
                                        return A.id !== t.id
                                    }));
                                    t.setTags(e, (function() {
                                        t.props.onChange && t.props.onChange(t.state.tags.toJS(), t.buildOnChangeObj())
                                    }))
                                }
                            }
                        }, {
                            key: "buildOnChangeObj",
                            value: function() {
                                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = A.fromArea,
                                    e = void 0 === t ? {} : t,
                                    n = A.toArea,
                                    r = void 0 === n ? {} : n;
                                return {
                                    fromArea: e,
                                    toArea: r
                                }
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var A = this,
                                    t = this.props,
                                    e = t.render,
                                    n = t.build,
                                    r = t.style,
                                    i = t.className,
                                    s = t.isList,
                                    a = (t.tagMargin, t.tagStyle),
                                    c = t.withHotspot;
                                e || (e = n);
                                var l = this.state.tags.toJS().map((function(t, n) {
                                    return o.a.createElement("div", {
                                        key: t.id,
                                        className: "DraggableTags-tag ".concat(t.undraggable ? "DraggableTags-undraggable" : "", " ").concat(c ? "" : "hotspot-9485743"),
                                        ref: function(e) {
                                            A.tagEles[t.id] = e
                                        },
                                        style: s ? u({
                                            display: "block"
                                        }, a) : a
                                    }, o.a.createElement("div", {
                                        className: "DraggableTags-tag-drag",
                                        ref: function(e) {
                                            return A.draggableTagEles[t.id] = e
                                        }
                                    }, e({
                                        tag: t,
                                        index: n,
                                        deleteThis: A.buildDeleteTagFunc(t)
                                    })), o.a.createElement("div", {
                                        style: {
                                            opacity: 0,
                                            overflow: "hidden"
                                        }
                                    }, e({
                                        tag: t,
                                        index: n,
                                        deleteThis: A.buildDeleteTagFunc(t)
                                    })))
                                }));
                                return o.a.createElement("div", {
                                    ref: function(t) {
                                        return A.container = t
                                    },
                                    className: "DraggableTags ".concat(i || ""),
                                    style: w ? u({
                                        overflowY: "auto"
                                    }, r) : r
                                }, w ? o.a.createElement("div", {
                                    style: {
                                        height: "101%"
                                    }
                                }, l) : l)
                            }
                        }]), n
                    }(o.a.Component);
                return c.Hotspot = s, c.ExcludedInHotspot = a, c
            }

            function y(A, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                }
            }
            var m = function() {
                    function A() {
                        ! function(A, t) {
                            if (!(A instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, A), this.isInAreas = []
                    }
                    var t, e;
                    return t = A, (e = [{
                        key: "addArea",
                        value: function(A) {
                            var t = this;
                            return v({
                                isInAnotherArea: function(e, n) {
                                    var r = e.left + e.width / 2,
                                        o = e.top + e.height / 2,
                                        i = {
                                            isIn: !1
                                        };
                                    return t.isInAreas.forEach((function(t) {
                                        var e = t({
                                            tag: n,
                                            x: r,
                                            y: o,
                                            areaId: A
                                        });
                                        e.isIn && (i = e)
                                    })), i
                                },
                                passAddFunc: function(e, n) {
                                    t.isInAreas.push((function(t) {
                                        var r = t.tag,
                                            o = t.x,
                                            i = t.y,
                                            s = t.areaId,
                                            a = e.getBoundingClientRect();
                                        return o > a.left && o < a.right && i > a.top && i < a.bottom ? (n({
                                            tag: r,
                                            fromAreaId: s,
                                            x: o,
                                            y: i
                                        }), {
                                            isIn: !0,
                                            id: A
                                        }) : {
                                            isIn: !1
                                        }
                                    }))
                                }
                            })
                        }
                    }]) && y(t.prototype, e), A
                }(),
                Q = v()
        }])
    }, function(A, t, e) {
        var n = e(4);
        A.exports = function() {
            return n.Date.now()
        }
    }, function(A, t, e) {
        var n = e(63),
            r = e(12),
            o = e(65),
            i = /^[-+]0x[0-9a-f]+$/i,
            s = /^0b[01]+$/i,
            a = /^0o[0-7]+$/i,
            u = parseInt;
        A.exports = function(A) {
            if ("number" == typeof A) return A;
            if (o(A)) return NaN;
            if (r(A)) {
                var t = "function" == typeof A.valueOf ? A.valueOf() : A;
                A = r(t) ? t + "" : t
            }
            if ("string" != typeof A) return 0 === A ? A : +A;
            A = n(A);
            var e = s.test(A);
            return e || a.test(A) ? u(A.slice(2), e ? 2 : 8) : i.test(A) ? NaN : +A
        }
    }, function(A, t, e) {
        var n = e(64),
            r = /^\s+/;
        A.exports = function(A) {
            return A ? A.slice(0, n(A) + 1).replace(r, "") : A
        }
    }, function(A, t) {
        var e = /\s/;
        A.exports = function(A) {
            for (var t = A.length; t-- && e.test(A.charAt(t)););
            return t
        }
    }, function(A, t, e) {
        function n(A) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        var r = e(10),
            o = e(11);
        A.exports = function(A) {
            return "symbol" == n(A) || o(A) && "[object Symbol]" == r(A)
        }
    }, function(A, t, e) {
        var n = e(19),
            r = Object.prototype,
            o = r.hasOwnProperty,
            i = r.toString,
            s = n ? n.toStringTag : void 0;
        A.exports = function(A) {
            var t = o.call(A, s),
                e = A[s];
            try {
                A[s] = void 0;
                var n = !0
            } catch (A) {}
            var r = i.call(A);
            return n && (t ? A[s] = e : delete A[s]), r
        }
    }, function(A, t) {
        var e = Object.prototype.toString;
        A.exports = function(A) {
            return e.call(A)
        }
    }, function(A, t) {
        A.exports = function(A) {
            if (Array.isArray(A)) return A
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        A.exports = function(A, t) {
            var e = null == A ? null : "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
            if (null != e) {
                var n, r, o = [],
                    i = !0,
                    s = !1;
                try {
                    for (e = e.call(A); !(i = (n = e.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                } catch (A) {
                    s = !0, r = A
                } finally {
                    try {
                        i || null == e.return || e.return()
                    } finally {
                        if (s) throw r
                    }
                }
                return o
            }
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        A.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        "use strict";

        function n(A) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        var r = "function" == typeof Symbol && Symbol.for,
            o = r ? Symbol.for("react.element") : 60103,
            i = r ? Symbol.for("react.portal") : 60106,
            s = r ? Symbol.for("react.fragment") : 60107,
            a = r ? Symbol.for("react.strict_mode") : 60108,
            u = r ? Symbol.for("react.profiler") : 60114,
            c = r ? Symbol.for("react.provider") : 60109,
            l = r ? Symbol.for("react.context") : 60110,
            f = r ? Symbol.for("react.async_mode") : 60111,
            p = r ? Symbol.for("react.concurrent_mode") : 60111,
            h = r ? Symbol.for("react.forward_ref") : 60112,
            B = r ? Symbol.for("react.suspense") : 60113,
            g = r ? Symbol.for("react.suspense_list") : 60120,
            d = r ? Symbol.for("react.memo") : 60115,
            w = r ? Symbol.for("react.lazy") : 60116,
            v = r ? Symbol.for("react.block") : 60121,
            y = r ? Symbol.for("react.fundamental") : 60117,
            m = r ? Symbol.for("react.responder") : 60118,
            Q = r ? Symbol.for("react.scope") : 60119;

        function C(A) {
            if ("object" === n(A) && null !== A) {
                var t = A.$$typeof;
                switch (t) {
                    case o:
                        switch (A = A.type) {
                            case f:
                            case p:
                            case s:
                            case u:
                            case a:
                            case B:
                                return A;
                            default:
                                switch (A = A && A.$$typeof) {
                                    case l:
                                    case h:
                                    case w:
                                    case d:
                                    case c:
                                        return A;
                                    default:
                                        return t
                                }
                        }
                    case i:
                        return t
                }
            }
        }

        function U(A) {
            return C(A) === p
        }
        t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = l, t.ContextProvider = c, t.Element = o, t.ForwardRef = h, t.Fragment = s, t.Lazy = w, t.Memo = d, t.Portal = i, t.Profiler = u, t.StrictMode = a, t.Suspense = B, t.isAsyncMode = function(A) {
            return U(A) || C(A) === f
        }, t.isConcurrentMode = U, t.isContextConsumer = function(A) {
            return C(A) === l
        }, t.isContextProvider = function(A) {
            return C(A) === c
        }, t.isElement = function(A) {
            return "object" === n(A) && null !== A && A.$$typeof === o
        }, t.isForwardRef = function(A) {
            return C(A) === h
        }, t.isFragment = function(A) {
            return C(A) === s
        }, t.isLazy = function(A) {
            return C(A) === w
        }, t.isMemo = function(A) {
            return C(A) === d
        }, t.isPortal = function(A) {
            return C(A) === i
        }, t.isProfiler = function(A) {
            return C(A) === u
        }, t.isStrictMode = function(A) {
            return C(A) === a
        }, t.isSuspense = function(A) {
            return C(A) === B
        }, t.isValidElementType = function(A) {
            return "string" == typeof A || "function" == typeof A || A === s || A === p || A === u || A === a || A === B || A === g || "object" === n(A) && null !== A && (A.$$typeof === w || A.$$typeof === d || A.$$typeof === c || A.$$typeof === l || A.$$typeof === h || A.$$typeof === y || A.$$typeof === m || A.$$typeof === Q || A.$$typeof === v)
        }, t.typeOf = C
    }, function(A, t, e) {
        var n = e(73),
            r = e(11);
        A.exports = function A(t, e, o, i, s) {
            return t === e || (null == t || null == e || !r(t) && !r(e) ? t != t && e != e : n(t, e, o, i, A, s))
        }
    }, function(A, t, e) {
        var n = e(74),
            r = e(37),
            o = e(106),
            i = e(110),
            s = e(132),
            a = e(21),
            u = e(38),
            c = e(39),
            l = "[object Object]",
            f = Object.prototype.hasOwnProperty;
        A.exports = function(A, t, e, p, h, B) {
            var g = a(A),
                d = a(t),
                w = g ? "[object Array]" : s(A),
                v = d ? "[object Array]" : s(t),
                y = (w = "[object Arguments]" == w ? l : w) == l,
                m = (v = "[object Arguments]" == v ? l : v) == l,
                Q = w == v;
            if (Q && u(A)) {
                if (!u(t)) return !1;
                g = !0, y = !1
            }
            if (Q && !y) return B || (B = new n), g || c(A) ? r(A, t, e, p, h, B) : o(A, t, w, e, p, h, B);
            if (!(1 & e)) {
                var C = y && f.call(A, "__wrapped__"),
                    U = m && f.call(t, "__wrapped__");
                if (C || U) {
                    var F = C ? A.value() : A,
                        b = U ? t.value() : t;
                    return B || (B = new n), h(F, b, e, p, B)
                }
            }
            return !!Q && (B || (B = new n), i(A, t, e, p, h, B))
        }
    }, function(A, t, e) {
        var n = e(13),
            r = e(80),
            o = e(81),
            i = e(82),
            s = e(83),
            a = e(84);

        function u(A) {
            var t = this.__data__ = new n(A);
            this.size = t.size
        }
        u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = s, u.prototype.set = a, A.exports = u
    }, function(A, t) {
        A.exports = function() {
            this.__data__ = [], this.size = 0
        }
    }, function(A, t, e) {
        var n = e(14),
            r = Array.prototype.splice;
        A.exports = function(A) {
            var t = this.__data__,
                e = n(t, A);
            return !(e < 0) && (e == t.length - 1 ? t.pop() : r.call(t, e, 1), --this.size, !0)
        }
    }, function(A, t, e) {
        var n = e(14);
        A.exports = function(A) {
            var t = this.__data__,
                e = n(t, A);
            return e < 0 ? void 0 : t[e][1]
        }
    }, function(A, t, e) {
        var n = e(14);
        A.exports = function(A) {
            return n(this.__data__, A) > -1
        }
    }, function(A, t, e) {
        var n = e(14);
        A.exports = function(A, t) {
            var e = this.__data__,
                r = n(e, A);
            return r < 0 ? (++this.size, e.push([A, t])) : e[r][1] = t, this
        }
    }, function(A, t, e) {
        var n = e(13);
        A.exports = function() {
            this.__data__ = new n, this.size = 0
        }
    }, function(A, t) {
        A.exports = function(A) {
            var t = this.__data__,
                e = t.delete(A);
            return this.size = t.size, e
        }
    }, function(A, t) {
        A.exports = function(A) {
            return this.__data__.get(A)
        }
    }, function(A, t) {
        A.exports = function(A) {
            return this.__data__.has(A)
        }
    }, function(A, t, e) {
        var n = e(13),
            r = e(20),
            o = e(36);
        A.exports = function(A, t) {
            var e = this.__data__;
            if (e instanceof n) {
                var i = e.__data__;
                if (!r || i.length < 199) return i.push([A, t]), this.size = ++e.size, this;
                e = this.__data__ = new o(i)
            }
            return e.set(A, t), this.size = e.size, this
        }
    }, function(A, t, e) {
        var n = e(34),
            r = e(86),
            o = e(12),
            i = e(35),
            s = /^\[object .+?Constructor\]$/,
            a = Function.prototype,
            u = Object.prototype,
            c = a.toString,
            l = u.hasOwnProperty,
            f = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        A.exports = function(A) {
            return !(!o(A) || r(A)) && (n(A) ? f : s).test(i(A))
        }
    }, function(A, t, e) {
        var n, r = e(87),
            o = (n = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
        A.exports = function(A) {
            return !!o && o in A
        }
    }, function(A, t, e) {
        var n = e(4)["__core-js_shared__"];
        A.exports = n
    }, function(A, t) {
        A.exports = function(A, t) {
            return null == A ? void 0 : A[t]
        }
    }, function(A, t, e) {
        var n = e(90),
            r = e(13),
            o = e(20);
        A.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new n,
                map: new(o || r),
                string: new n
            }
        }
    }, function(A, t, e) {
        var n = e(91),
            r = e(92),
            o = e(93),
            i = e(94),
            s = e(95);

        function a(A) {
            var t = -1,
                e = null == A ? 0 : A.length;
            for (this.clear(); ++t < e;) {
                var n = A[t];
                this.set(n[0], n[1])
            }
        }
        a.prototype.clear = n, a.prototype.delete = r, a.prototype.get = o, a.prototype.has = i, a.prototype.set = s, A.exports = a
    }, function(A, t, e) {
        var n = e(15);
        A.exports = function() {
            this.__data__ = n ? n(null) : {}, this.size = 0
        }
    }, function(A, t) {
        A.exports = function(A) {
            var t = this.has(A) && delete this.__data__[A];
            return this.size -= t ? 1 : 0, t
        }
    }, function(A, t, e) {
        var n = e(15),
            r = Object.prototype.hasOwnProperty;
        A.exports = function(A) {
            var t = this.__data__;
            if (n) {
                var e = t[A];
                return "__lodash_hash_undefined__" === e ? void 0 : e
            }
            return r.call(t, A) ? t[A] : void 0
        }
    }, function(A, t, e) {
        var n = e(15),
            r = Object.prototype.hasOwnProperty;
        A.exports = function(A) {
            var t = this.__data__;
            return n ? void 0 !== t[A] : r.call(t, A)
        }
    }, function(A, t, e) {
        var n = e(15);
        A.exports = function(A, t) {
            var e = this.__data__;
            return this.size += this.has(A) ? 0 : 1, e[A] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
        }
    }, function(A, t, e) {
        var n = e(16);
        A.exports = function(A) {
            var t = n(this, A).delete(A);
            return this.size -= t ? 1 : 0, t
        }
    }, function(A, t) {
        function e(A) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        A.exports = function(A) {
            var t = e(A);
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== A : null === A
        }
    }, function(A, t, e) {
        var n = e(16);
        A.exports = function(A) {
            return n(this, A).get(A)
        }
    }, function(A, t, e) {
        var n = e(16);
        A.exports = function(A) {
            return n(this, A).has(A)
        }
    }, function(A, t, e) {
        var n = e(16);
        A.exports = function(A, t) {
            var e = n(this, A),
                r = e.size;
            return e.set(A, t), this.size += e.size == r ? 0 : 1, this
        }
    }, function(A, t, e) {
        var n = e(36),
            r = e(102),
            o = e(103);

        function i(A) {
            var t = -1,
                e = null == A ? 0 : A.length;
            for (this.__data__ = new n; ++t < e;) this.add(A[t])
        }
        i.prototype.add = i.prototype.push = r, i.prototype.has = o, A.exports = i
    }, function(A, t) {
        A.exports = function(A) {
            return this.__data__.set(A, "__lodash_hash_undefined__"), this
        }
    }, function(A, t) {
        A.exports = function(A) {
            return this.__data__.has(A)
        }
    }, function(A, t) {
        A.exports = function(A, t) {
            for (var e = -1, n = null == A ? 0 : A.length; ++e < n;)
                if (t(A[e], e, A)) return !0;
            return !1
        }
    }, function(A, t) {
        A.exports = function(A, t) {
            return A.has(t)
        }
    }, function(A, t, e) {
        var n = e(19),
            r = e(107),
            o = e(33),
            i = e(37),
            s = e(108),
            a = e(109),
            u = n ? n.prototype : void 0,
            c = u ? u.valueOf : void 0;
        A.exports = function(A, t, e, n, u, l, f) {
            switch (e) {
                case "[object DataView]":
                    if (A.byteLength != t.byteLength || A.byteOffset != t.byteOffset) return !1;
                    A = A.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(A.byteLength != t.byteLength || !l(new r(A), new r(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return o(+A, +t);
                case "[object Error]":
                    return A.name == t.name && A.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return A == t + "";
                case "[object Map]":
                    var p = s;
                case "[object Set]":
                    var h = 1 & n;
                    if (p || (p = a), A.size != t.size && !h) return !1;
                    var B = f.get(A);
                    if (B) return B == t;
                    n |= 2, f.set(A, t);
                    var g = i(p(A), p(t), n, u, l, f);
                    return f.delete(A), g;
                case "[object Symbol]":
                    if (c) return c.call(A) == c.call(t)
            }
            return !1
        }
    }, function(A, t, e) {
        var n = e(4).Uint8Array;
        A.exports = n
    }, function(A, t) {
        A.exports = function(A) {
            var t = -1,
                e = Array(A.size);
            return A.forEach((function(A, n) {
                e[++t] = [n, A]
            })), e
        }
    }, function(A, t) {
        A.exports = function(A) {
            var t = -1,
                e = Array(A.size);
            return A.forEach((function(A) {
                e[++t] = A
            })), e
        }
    }, function(A, t, e) {
        var n = e(111),
            r = Object.prototype.hasOwnProperty;
        A.exports = function(A, t, e, o, i, s) {
            var a = 1 & e,
                u = n(A),
                c = u.length;
            if (c != n(t).length && !a) return !1;
            for (var l = c; l--;) {
                var f = u[l];
                if (!(a ? f in t : r.call(t, f))) return !1
            }
            var p = s.get(A),
                h = s.get(t);
            if (p && h) return p == t && h == A;
            var B = !0;
            s.set(A, t), s.set(t, A);
            for (var g = a; ++l < c;) {
                var d = A[f = u[l]],
                    w = t[f];
                if (o) var v = a ? o(w, d, f, t, A, s) : o(d, w, f, A, t, s);
                if (!(void 0 === v ? d === w || i(d, w, e, o, s) : v)) {
                    B = !1;
                    break
                }
                g || (g = "constructor" == f)
            }
            if (B && !g) {
                var y = A.constructor,
                    m = t.constructor;
                y == m || !("constructor" in A) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof m && m instanceof m || (B = !1)
            }
            return s.delete(A), s.delete(t), B
        }
    }, function(A, t, e) {
        var n = e(112),
            r = e(114),
            o = e(117);
        A.exports = function(A) {
            return n(A, o, r)
        }
    }, function(A, t, e) {
        var n = e(113),
            r = e(21);
        A.exports = function(A, t, e) {
            var o = t(A);
            return r(A) ? o : n(o, e(A))
        }
    }, function(A, t) {
        A.exports = function(A, t) {
            for (var e = -1, n = t.length, r = A.length; ++e < n;) A[r + e] = t[e];
            return A
        }
    }, function(A, t, e) {
        var n = e(115),
            r = e(116),
            o = Object.prototype.propertyIsEnumerable,
            i = Object.getOwnPropertySymbols,
            s = i ? function(A) {
                return null == A ? [] : (A = Object(A), n(i(A), (function(t) {
                    return o.call(A, t)
                })))
            } : r;
        A.exports = s
    }, function(A, t) {
        A.exports = function(A, t) {
            for (var e = -1, n = null == A ? 0 : A.length, r = 0, o = []; ++e < n;) {
                var i = A[e];
                t(i, e, A) && (o[r++] = i)
            }
            return o
        }
    }, function(A, t) {
        A.exports = function() {
            return []
        }
    }, function(A, t, e) {
        var n = e(118),
            r = e(127),
            o = e(131);
        A.exports = function(A) {
            return o(A) ? n(A) : r(A)
        }
    }, function(A, t, e) {
        var n = e(119),
            r = e(120),
            o = e(21),
            i = e(38),
            s = e(123),
            a = e(39),
            u = Object.prototype.hasOwnProperty;
        A.exports = function(A, t) {
            var e = o(A),
                c = !e && r(A),
                l = !e && !c && i(A),
                f = !e && !c && !l && a(A),
                p = e || c || l || f,
                h = p ? n(A.length, String) : [],
                B = h.length;
            for (var g in A) !t && !u.call(A, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, B)) || h.push(g);
            return h
        }
    }, function(A, t) {
        A.exports = function(A, t) {
            for (var e = -1, n = Array(A); ++e < A;) n[e] = t(e);
            return n
        }
    }, function(A, t, e) {
        var n = e(121),
            r = e(11),
            o = Object.prototype,
            i = o.hasOwnProperty,
            s = o.propertyIsEnumerable,
            a = n(function() {
                return arguments
            }()) ? n : function(A) {
                return r(A) && i.call(A, "callee") && !s.call(A, "callee")
            };
        A.exports = a
    }, function(A, t, e) {
        var n = e(10),
            r = e(11);
        A.exports = function(A) {
            return r(A) && "[object Arguments]" == n(A)
        }
    }, function(A, t) {
        A.exports = function() {
            return !1
        }
    }, function(A, t) {
        function e(A) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        var n = /^(?:0|[1-9]\d*)$/;
        A.exports = function(A, t) {
            var r = e(A);
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && n.test(A)) && A > -1 && A % 1 == 0 && A < t
        }
    }, function(A, t, e) {
        var n = e(10),
            r = e(40),
            o = e(11),
            i = {};
        i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, A.exports = function(A) {
            return o(A) && r(A.length) && !!i[n(A)]
        }
    }, function(A, t) {
        A.exports = function(A) {
            return function(t) {
                return A(t)
            }
        }
    }, function(A, t, e) {
        (function(A) {
            function n(A) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                    return typeof A
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                })(A)
            }
            var r = e(28),
                o = "object" == n(t) && t && !t.nodeType && t,
                i = o && "object" == n(A) && A && !A.nodeType && A,
                s = i && i.exports === o && r.process,
                a = function() {
                    try {
                        var A = i && i.require && i.require("util").types;
                        return A || s && s.binding && s.binding("util")
                    } catch (A) {}
                }();
            A.exports = a
        }).call(this, e(22)(A))
    }, function(A, t, e) {
        var n = e(128),
            r = e(129),
            o = Object.prototype.hasOwnProperty;
        A.exports = function(A) {
            if (!n(A)) return r(A);
            var t = [];
            for (var e in Object(A)) o.call(A, e) && "constructor" != e && t.push(e);
            return t
        }
    }, function(A, t) {
        var e = Object.prototype;
        A.exports = function(A) {
            var t = A && A.constructor;
            return A === ("function" == typeof t && t.prototype || e)
        }
    }, function(A, t, e) {
        var n = e(130)(Object.keys, Object);
        A.exports = n
    }, function(A, t) {
        A.exports = function(A, t) {
            return function(e) {
                return A(t(e))
            }
        }
    }, function(A, t, e) {
        var n = e(34),
            r = e(40);
        A.exports = function(A) {
            return null != A && r(A.length) && !n(A)
        }
    }, function(A, t, e) {
        var n = e(133),
            r = e(20),
            o = e(134),
            i = e(135),
            s = e(136),
            a = e(10),
            u = e(35),
            c = u(n),
            l = u(r),
            f = u(o),
            p = u(i),
            h = u(s),
            B = a;
        (n && "[object DataView]" != B(new n(new ArrayBuffer(1))) || r && "[object Map]" != B(new r) || o && "[object Promise]" != B(o.resolve()) || i && "[object Set]" != B(new i) || s && "[object WeakMap]" != B(new s)) && (B = function(A) {
            var t = a(A),
                e = "[object Object]" == t ? A.constructor : void 0,
                n = e ? u(e) : "";
            if (n) switch (n) {
                case c:
                    return "[object DataView]";
                case l:
                    return "[object Map]";
                case f:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
            }
            return t
        }), A.exports = B
    }, function(A, t, e) {
        var n = e(8)(e(4), "DataView");
        A.exports = n
    }, function(A, t, e) {
        var n = e(8)(e(4), "Promise");
        A.exports = n
    }, function(A, t, e) {
        var n = e(8)(e(4), "Set");
        A.exports = n
    }, function(A, t, e) {
        var n = e(8)(e(4), "WeakMap");
        A.exports = n
    }, function(A, t, e) {
        (function(A) {
            function t(A) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                    return typeof A
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                })(A)
            }
            var e = function(A) {
                "use strict";
                var e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

                function a(A, t, e) {
                    return Object.defineProperty(A, t, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), A[t]
                }
                try {
                    a({}, "")
                } catch (A) {
                    a = function(A, t, e) {
                        return A[t] = e
                    }
                }

                function u(A, t, e, n) {
                    var r = t && t.prototype instanceof f ? t : f,
                        o = Object.create(r.prototype),
                        i = new U(n || []);
                    return o._invoke = function(A, t, e) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return b()
                            }
                            for (e.method = r, e.arg = o;;) {
                                var i = e.delegate;
                                if (i) {
                                    var s = m(i, e);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                n = "executing";
                                var a = c(A, t, e);
                                if ("normal" === a.type) {
                                    if (n = e.done ? "completed" : "suspendedYield", a.arg === l) continue;
                                    return {
                                        value: a.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === a.type && (n = "completed", e.method = "throw", e.arg = a.arg)
                            }
                        }
                    }(A, e, i), o
                }

                function c(A, t, e) {
                    try {
                        return {
                            type: "normal",
                            arg: A.call(t, e)
                        }
                    } catch (A) {
                        return {
                            type: "throw",
                            arg: A
                        }
                    }
                }
                A.wrap = u;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var B = {};
                a(B, o, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    d = g && g(g(F([])));
                d && d !== e && n.call(d, o) && (B = d);
                var w = h.prototype = f.prototype = Object.create(B);

                function v(A) {
                    ["next", "throw", "return"].forEach((function(t) {
                        a(A, t, (function(A) {
                            return this._invoke(t, A)
                        }))
                    }))
                }

                function y(A, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function s() {
                            return new e((function(r, s) {
                                ! function r(o, i, s, a) {
                                    var u = c(A[o], A, i);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            f = l.value;
                                        return f && "object" === t(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(A) {
                                            r("next", A, s, a)
                                        }), (function(A) {
                                            r("throw", A, s, a)
                                        })) : e.resolve(f).then((function(A) {
                                            l.value = A, s(l)
                                        }), (function(A) {
                                            return r("throw", A, s, a)
                                        }))
                                    }
                                    a(u.arg)
                                }(o, i, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
                    }
                }

                function m(A, t) {
                    var e = A.iterator[t.method];
                    if (void 0 === e) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (A.iterator.return && (t.method = "return", t.arg = void 0, m(A, t), "throw" === t.method)) return l;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = c(e, A.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, l;
                    var r = n.arg;
                    return r ? r.done ? (t[A.resultName] = r.value, t.next = A.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
                }

                function Q(A) {
                    var t = {
                        tryLoc: A[0]
                    };
                    1 in A && (t.catchLoc = A[1]), 2 in A && (t.finallyLoc = A[2], t.afterLoc = A[3]), this.tryEntries.push(t)
                }

                function C(A) {
                    var t = A.completion || {};
                    t.type = "normal", delete t.arg, A.completion = t
                }

                function U(A) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], A.forEach(Q, this), this.reset(!0)
                }

                function F(A) {
                    if (A) {
                        var t = A[o];
                        if (t) return t.call(A);
                        if ("function" == typeof A.next) return A;
                        if (!isNaN(A.length)) {
                            var e = -1,
                                r = function t() {
                                    for (; ++e < A.length;)
                                        if (n.call(A, e)) return t.value = A[e], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: b
                    }
                }

                function b() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, a(w, "constructor", h), a(h, "constructor", p), p.displayName = a(h, s, "GeneratorFunction"), A.isGeneratorFunction = function(A) {
                    var t = "function" == typeof A && A.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, A.mark = function(A) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(A, h) : (A.__proto__ = h, a(A, s, "GeneratorFunction")), A.prototype = Object.create(w), A
                }, A.awrap = function(A) {
                    return {
                        __await: A
                    }
                }, v(y.prototype), a(y.prototype, i, (function() {
                    return this
                })), A.AsyncIterator = y, A.async = function(t, e, n, r, o) {
                    void 0 === o && (o = Promise);
                    var i = new y(u(t, e, n, r), o);
                    return A.isGeneratorFunction(e) ? i : i.next().then((function(A) {
                        return A.done ? A.value : i.next()
                    }))
                }, v(w), a(w, s, "Generator"), a(w, o, (function() {
                    return this
                })), a(w, "toString", (function() {
                    return "[object Generator]"
                })), A.keys = function(A) {
                    var t = [];
                    for (var e in A) t.push(e);
                    return t.reverse(),
                        function e() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in A) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, A.values = F, U.prototype = {
                    constructor: U,
                    reset: function(A) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !A)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var A = this.tryEntries[0].completion;
                        if ("throw" === A.type) throw A.arg;
                        return this.rval
                    },
                    dispatchException: function(A) {
                        if (this.done) throw A;
                        var t = this;

                        function e(e, n) {
                            return i.type = "throw", i.arg = A, t.next = e, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return e("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    a = n.call(o, "finallyLoc");
                                if (s && a) {
                                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                                } else {
                                    if (!a) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(A, t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === A || "continue" === A) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = A, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(i)
                    },
                    complete: function(A, t) {
                        if ("throw" === A.type) throw A.arg;
                        return "break" === A.type || "continue" === A.type ? this.next = A.arg : "return" === A.type ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : "normal" === A.type && t && (this.next = t), l
                    },
                    finish: function(A) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var e = this.tryEntries[t];
                            if (e.finallyLoc === A) return this.complete(e.completion, e.afterLoc), C(e), l
                        }
                    },
                    catch: function(A) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var e = this.tryEntries[t];
                            if (e.tryLoc === A) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    C(e)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(A, t, e) {
                        return this.delegate = {
                            iterator: F(A),
                            resultName: t,
                            nextLoc: e
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, A
            }("object" === t(A) ? A.exports : {});
            try {
                regeneratorRuntime = e
            } catch (A) {
                "object" === ("undefined" == typeof globalThis ? "undefined" : t(globalThis)) ? globalThis.regeneratorRuntime = e: Function("r", "regeneratorRuntime = r")(e)
            }
        }).call(this, e(22)(A))
    }, function(A, t, e) {}, function(A, t, e) {}, function(A, t, e) {
        "use strict";

        function n(A) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        A.exports = function A(t, e) {
            if (t === e) return !0;
            if (t && e && "object" == n(t) && "object" == n(e)) {
                if (t.constructor !== e.constructor) return !1;
                var r, o, i;
                if (Array.isArray(t)) {
                    if ((r = t.length) != e.length) return !1;
                    for (o = r; 0 != o--;)
                        if (!A(t[o], e[o])) return !1;
                    return !0
                }
                if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
                if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
                if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
                if ((r = (i = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                for (o = r; 0 != o--;)
                    if (!Object.prototype.hasOwnProperty.call(e, i[o])) return !1;
                for (o = r; 0 != o--;) {
                    var s = i[o];
                    if (!A(t[s], e[s])) return !1
                }
                return !0
            }
            return t != t && e != e
        }
    }, function(A, t, e) {
        "use strict";
        var n = e(142);

        function r() {}

        function o() {}
        o.resetWarningCache = r, A.exports = function() {
            function A(A, t, e, r, o, i) {
                if (i !== n) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return A
            }
            A.isRequired = A;
            var e = {
                array: A,
                bool: A,
                func: A,
                number: A,
                object: A,
                string: A,
                symbol: A,
                any: A,
                arrayOf: t,
                element: A,
                elementType: A,
                instanceOf: t,
                node: A,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: r
            };
            return e.PropTypes = e, e
        }
    }, function(A, t, e) {
        "use strict";
        A.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(A, t, e) {}, function(A, t) {
        A.exports = function(A, t) {
            if (null == A) return {};
            var e, n, r = {},
                o = Object.keys(A);
            for (n = 0; n < o.length; n++) e = o[n], t.indexOf(e) >= 0 || (r[e] = A[e]);
            return r
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {}, function(A, t, e) {}, function(A, t, e) {}, function(A, t, e) {}, function(A, t) {
        function e(t, n) {
            return A.exports = e = Object.setPrototypeOf || function(A, t) {
                return A.__proto__ = t, A
            }, A.exports.default = A.exports, A.exports.__esModule = !0, e(t, n)
        }
        A.exports = e, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {}, function(A, t, e) {
        var n = e(31);
        A.exports = function(A) {
            if (Array.isArray(A)) return n(A)
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        A.exports = function(A) {
            if ("undefined" != typeof Symbol && null != A[Symbol.iterator] || null != A["@@iterator"]) return Array.from(A)
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t) {
        A.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, A.exports.default = A.exports, A.exports.__esModule = !0
    }, function(A, t, e) {
        "use strict";
        A.exports = e(155)
    }, function(A, t, e) {
        "use strict";
        var n = e(17),
            r = e(157),
            o = e(161),
            i = e(162) || 0;

        function s() {
            return r(i)
        }
        A.exports = s, A.exports.generate = s, A.exports.seed = function(t) {
            return n.seed(t), A.exports
        }, A.exports.worker = function(t) {
            return i = t, A.exports
        }, A.exports.characters = function(A) {
            return void 0 !== A && n.characters(A), n.shuffled()
        }, A.exports.isValid = o
    }, function(A, t, e) {
        "use strict";
        var n = 1;
        A.exports = {
            nextValue: function() {
                return (n = (9301 * n + 49297) % 233280) / 233280
            },
            seed: function(A) {
                n = A
            }
        }
    }, function(A, t, e) {
        "use strict";
        var n, r, o = e(158);
        e(17);
        A.exports = function(A) {
            var t = "",
                e = Math.floor(.001 * (Date.now() - 1567752802062));
            return e === r ? n++ : (n = 0, r = e), t += o(7), t += o(A), n > 0 && (t += o(n)), t += o(e)
        }
    }, function(A, t, e) {
        "use strict";
        var n = e(17),
            r = e(159),
            o = e(160);
        A.exports = function(A) {
            for (var t, e = 0, i = ""; !t;) i += o(r, n.get(), 1), t = A < Math.pow(16, e + 1), e++;
            return i
        }
    }, function(A, t, e) {
        "use strict";

        function n(A) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        var r, o = "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (window.crypto || window.msCrypto);
        r = o && o.getRandomValues ? function(A) {
            return o.getRandomValues(new Uint8Array(A))
        } : function(A) {
            for (var t = [], e = 0; e < A; e++) t.push(Math.floor(256 * Math.random()));
            return t
        }, A.exports = r
    }, function(A, t) {
        A.exports = function(A, t, e) {
            for (var n = (2 << Math.log(t.length - 1) / Math.LN2) - 1, r = -~(1.6 * n * e / t.length), o = "";;)
                for (var i = A(r), s = r; s--;)
                    if ((o += t[i[s] & n] || "").length === +e) return o
        }
    }, function(A, t, e) {
        "use strict";
        var n = e(17);
        A.exports = function(A) {
            return !(!A || "string" != typeof A || A.length < 6) && !new RegExp("[^" + n.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(A)
        }
    }, function(A, t, e) {
        "use strict";
        A.exports = 0
    }, function(A, t, e) {}, function(A, t, e) {
        var n, r, o;

        function i(A) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }
        o = function() {
            "use strict";
            var A = Array.prototype.slice;

            function t(A, t) {
                t && (A.prototype = Object.create(t.prototype)), A.prototype.constructor = A
            }

            function e(A) {
                return s(A) ? A : j(A)
            }

            function n(A) {
                return a(A) ? A : G(A)
            }

            function r(A) {
                return u(A) ? A : V(A)
            }

            function o(A) {
                return s(A) && !c(A) ? A : W(A)
            }

            function s(A) {
                return !(!A || !A[f])
            }

            function a(A) {
                return !(!A || !A[p])
            }

            function u(A) {
                return !(!A || !A[h])
            }

            function c(A) {
                return a(A) || u(A)
            }

            function l(A) {
                return !(!A || !A[B])
            }
            t(n, e), t(r, e), t(o, e), e.isIterable = s, e.isKeyed = a, e.isIndexed = u, e.isAssociative = c, e.isOrdered = l, e.Keyed = n, e.Indexed = r, e.Set = o;
            var f = "@@__IMMUTABLE_ITERABLE__@@",
                p = "@@__IMMUTABLE_KEYED__@@",
                h = "@@__IMMUTABLE_INDEXED__@@",
                B = "@@__IMMUTABLE_ORDERED__@@",
                g = {},
                d = {
                    value: !1
                },
                w = {
                    value: !1
                };

            function v(A) {
                return A.value = !1, A
            }

            function y(A) {
                A && (A.value = !0)
            }

            function m() {}

            function Q(A, t) {
                t = t || 0;
                for (var e = Math.max(0, A.length - t), n = new Array(e), r = 0; r < e; r++) n[r] = A[r + t];
                return n
            }

            function C(A) {
                return void 0 === A.size && (A.size = A.__iterate(F)), A.size
            }

            function U(A, t) {
                if ("number" != typeof t) {
                    var e = t >>> 0;
                    if ("" + e !== t || 4294967295 === e) return NaN;
                    t = e
                }
                return t < 0 ? C(A) + t : t
            }

            function F() {
                return !0
            }

            function b(A, t, e) {
                return (0 === A || void 0 !== e && A <= -e) && (void 0 === t || void 0 !== e && t >= e)
            }

            function E(A, t) {
                return I(A, t, 0)
            }

            function _(A, t) {
                return I(A, t, t)
            }

            function I(A, t, e) {
                return void 0 === A ? e : A < 0 ? Math.max(0, t + A) : void 0 === t ? A : Math.min(t, A)
            }
            var H, O, S, L = "function" == typeof Symbol && Symbol.iterator,
                x = L || "@@iterator";

            function T(A) {
                this.next = A
            }

            function D(A, t, e, n) {
                var r = 0 === A ? t : 1 === A ? e : [t, e];
                return n ? n.value = r : n = {
                    value: r,
                    done: !1
                }, n
            }

            function K() {
                return {
                    value: void 0,
                    done: !0
                }
            }

            function M(A) {
                return !!N(A)
            }

            function R(A) {
                return A && "function" == typeof A.next
            }

            function k(A) {
                var t = N(A);
                return t && t.call(A)
            }

            function N(A) {
                var t = A && (L && A[L] || A["@@iterator"]);
                if ("function" == typeof t) return t
            }

            function P(A) {
                return A && "number" == typeof A.length
            }

            function j(A) {
                return null == A ? q() : s(A) ? A.toSeq() : function(A) {
                    var t = tA(A) || "object" === i(A) && new X(A);
                    if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + A);
                    return t
                }(A)
            }

            function G(A) {
                return null == A ? q().toKeyedSeq() : s(A) ? a(A) ? A.toSeq() : A.fromEntrySeq() : $(A)
            }

            function V(A) {
                return null == A ? q() : s(A) ? a(A) ? A.entrySeq() : A.toIndexedSeq() : AA(A)
            }

            function W(A) {
                return (null == A ? q() : s(A) ? a(A) ? A.entrySeq() : A : AA(A)).toSetSeq()
            }

            function J(A) {
                this._array = A, this.size = A.length
            }

            function X(A) {
                var t = Object.keys(A);
                this._object = A, this._keys = t, this.size = t.length
            }

            function Y(A) {
                this._iterable = A, this.size = A.length || A.size
            }

            function z(A) {
                this._iterator = A, this._iteratorCache = []
            }

            function Z(A) {
                return !(!A || !A["@@__IMMUTABLE_SEQ__@@"])
            }

            function q() {
                return H || (H = new J([]))
            }

            function $(A) {
                var t = Array.isArray(A) ? new J(A).fromEntrySeq() : R(A) ? new z(A).fromEntrySeq() : M(A) ? new Y(A).fromEntrySeq() : "object" === i(A) ? new X(A) : void 0;
                if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + A);
                return t
            }

            function AA(A) {
                var t = tA(A);
                if (!t) throw new TypeError("Expected Array or iterable object of values: " + A);
                return t
            }

            function tA(A) {
                return P(A) ? new J(A) : R(A) ? new z(A) : M(A) ? new Y(A) : void 0
            }

            function eA(A, t, e, n) {
                var r = A._cache;
                if (r) {
                    for (var o = r.length - 1, i = 0; i <= o; i++) {
                        var s = r[e ? o - i : i];
                        if (!1 === t(s[1], n ? s[0] : i, A)) return i + 1
                    }
                    return i
                }
                return A.__iterateUncached(t, e)
            }

            function nA(A, t, e, n) {
                var r = A._cache;
                if (r) {
                    var o = r.length - 1,
                        i = 0;
                    return new T((function() {
                        var A = r[e ? o - i : i];
                        return i++ > o ? {
                            value: void 0,
                            done: !0
                        } : D(t, n ? A[0] : i - 1, A[1])
                    }))
                }
                return A.__iteratorUncached(t, e)
            }

            function rA(A, t) {
                return t ? function A(t, e, n, r) {
                    return Array.isArray(e) ? t.call(r, n, V(e).map((function(n, r) {
                        return A(t, n, r, e)
                    }))) : iA(e) ? t.call(r, n, G(e).map((function(n, r) {
                        return A(t, n, r, e)
                    }))) : e
                }(t, A, "", {
                    "": A
                }) : oA(A)
            }

            function oA(A) {
                return Array.isArray(A) ? V(A).map(oA).toList() : iA(A) ? G(A).map(oA).toMap() : A
            }

            function iA(A) {
                return A && (A.constructor === Object || void 0 === A.constructor)
            }

            function sA(A, t) {
                if (A === t || A != A && t != t) return !0;
                if (!A || !t) return !1;
                if ("function" == typeof A.valueOf && "function" == typeof t.valueOf) {
                    if ((A = A.valueOf()) === (t = t.valueOf()) || A != A && t != t) return !0;
                    if (!A || !t) return !1
                }
                return !("function" != typeof A.equals || "function" != typeof t.equals || !A.equals(t))
            }

            function aA(A, t) {
                if (A === t) return !0;
                if (!s(t) || void 0 !== A.size && void 0 !== t.size && A.size !== t.size || void 0 !== A.__hash && void 0 !== t.__hash && A.__hash !== t.__hash || a(A) !== a(t) || u(A) !== u(t) || l(A) !== l(t)) return !1;
                if (0 === A.size && 0 === t.size) return !0;
                var e = !c(A);
                if (l(A)) {
                    var n = A.entries();
                    return t.every((function(A, t) {
                        var r = n.next().value;
                        return r && sA(r[1], A) && (e || sA(r[0], t))
                    })) && n.next().done
                }
                var r = !1;
                if (void 0 === A.size)
                    if (void 0 === t.size) "function" == typeof A.cacheResult && A.cacheResult();
                    else {
                        r = !0;
                        var o = A;
                        A = t, t = o
                    }
                var i = !0,
                    f = t.__iterate((function(t, n) {
                        if (e ? !A.has(t) : r ? !sA(t, A.get(n, g)) : !sA(A.get(n, g), t)) return i = !1, !1
                    }));
                return i && A.size === f
            }

            function uA(A, t) {
                if (!(this instanceof uA)) return new uA(A, t);
                if (this._value = A, this.size = void 0 === t ? 1 / 0 : Math.max(0, t), 0 === this.size) {
                    if (O) return O;
                    O = this
                }
            }

            function cA(A, t) {
                if (!A) throw new Error(t)
            }

            function lA(A, t, e) {
                if (!(this instanceof lA)) return new lA(A, t, e);
                if (cA(0 !== e, "Cannot step a Range by 0"), A = A || 0, void 0 === t && (t = 1 / 0), e = void 0 === e ? 1 : Math.abs(e), t < A && (e = -e), this._start = A, this._end = t, this._step = e, this.size = Math.max(0, Math.ceil((t - A) / e - 1) + 1), 0 === this.size) {
                    if (S) return S;
                    S = this
                }
            }

            function fA() {
                throw TypeError("Abstract")
            }

            function pA() {}

            function hA() {}

            function BA() {}
            T.prototype.toString = function() {
                return "[Iterator]"
            }, T.KEYS = 0, T.VALUES = 1, T.ENTRIES = 2, T.prototype.inspect = T.prototype.toSource = function() {
                return this.toString()
            }, T.prototype[x] = function() {
                return this
            }, t(j, e), j.of = function() {
                return j(arguments)
            }, j.prototype.toSeq = function() {
                return this
            }, j.prototype.toString = function() {
                return this.__toString("Seq {", "}")
            }, j.prototype.cacheResult = function() {
                return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
            }, j.prototype.__iterate = function(A, t) {
                return eA(this, A, t, !0)
            }, j.prototype.__iterator = function(A, t) {
                return nA(this, A, t, !0)
            }, t(G, j), G.prototype.toKeyedSeq = function() {
                return this
            }, t(V, j), V.of = function() {
                return V(arguments)
            }, V.prototype.toIndexedSeq = function() {
                return this
            }, V.prototype.toString = function() {
                return this.__toString("Seq [", "]")
            }, V.prototype.__iterate = function(A, t) {
                return eA(this, A, t, !1)
            }, V.prototype.__iterator = function(A, t) {
                return nA(this, A, t, !1)
            }, t(W, j), W.of = function() {
                return W(arguments)
            }, W.prototype.toSetSeq = function() {
                return this
            }, j.isSeq = Z, j.Keyed = G, j.Set = W, j.Indexed = V, j.prototype["@@__IMMUTABLE_SEQ__@@"] = !0, t(J, V), J.prototype.get = function(A, t) {
                return this.has(A) ? this._array[U(this, A)] : t
            }, J.prototype.__iterate = function(A, t) {
                for (var e = this._array, n = e.length - 1, r = 0; r <= n; r++)
                    if (!1 === A(e[t ? n - r : r], r, this)) return r + 1;
                return r
            }, J.prototype.__iterator = function(A, t) {
                var e = this._array,
                    n = e.length - 1,
                    r = 0;
                return new T((function() {
                    return r > n ? {
                        value: void 0,
                        done: !0
                    } : D(A, r, e[t ? n - r++ : r++])
                }))
            }, t(X, G), X.prototype.get = function(A, t) {
                return void 0 === t || this.has(A) ? this._object[A] : t
            }, X.prototype.has = function(A) {
                return this._object.hasOwnProperty(A)
            }, X.prototype.__iterate = function(A, t) {
                for (var e = this._object, n = this._keys, r = n.length - 1, o = 0; o <= r; o++) {
                    var i = n[t ? r - o : o];
                    if (!1 === A(e[i], i, this)) return o + 1
                }
                return o
            }, X.prototype.__iterator = function(A, t) {
                var e = this._object,
                    n = this._keys,
                    r = n.length - 1,
                    o = 0;
                return new T((function() {
                    var i = n[t ? r - o : o];
                    return o++ > r ? {
                        value: void 0,
                        done: !0
                    } : D(A, i, e[i])
                }))
            }, X.prototype[B] = !0, t(Y, V), Y.prototype.__iterateUncached = function(A, t) {
                if (t) return this.cacheResult().__iterate(A, t);
                var e = k(this._iterable),
                    n = 0;
                if (R(e))
                    for (var r; !(r = e.next()).done && !1 !== A(r.value, n++, this););
                return n
            }, Y.prototype.__iteratorUncached = function(A, t) {
                if (t) return this.cacheResult().__iterator(A, t);
                var e = k(this._iterable);
                if (!R(e)) return new T(K);
                var n = 0;
                return new T((function() {
                    var t = e.next();
                    return t.done ? t : D(A, n++, t.value)
                }))
            }, t(z, V), z.prototype.__iterateUncached = function(A, t) {
                if (t) return this.cacheResult().__iterate(A, t);
                for (var e, n = this._iterator, r = this._iteratorCache, o = 0; o < r.length;)
                    if (!1 === A(r[o], o++, this)) return o;
                for (; !(e = n.next()).done;) {
                    var i = e.value;
                    if (r[o] = i, !1 === A(i, o++, this)) break
                }
                return o
            }, z.prototype.__iteratorUncached = function(A, t) {
                if (t) return this.cacheResult().__iterator(A, t);
                var e = this._iterator,
                    n = this._iteratorCache,
                    r = 0;
                return new T((function() {
                    if (r >= n.length) {
                        var t = e.next();
                        if (t.done) return t;
                        n[r] = t.value
                    }
                    return D(A, r, n[r++])
                }))
            }, t(uA, V), uA.prototype.toString = function() {
                return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
            }, uA.prototype.get = function(A, t) {
                return this.has(A) ? this._value : t
            }, uA.prototype.includes = function(A) {
                return sA(this._value, A)
            }, uA.prototype.slice = function(A, t) {
                var e = this.size;
                return b(A, t, e) ? this : new uA(this._value, _(t, e) - E(A, e))
            }, uA.prototype.reverse = function() {
                return this
            }, uA.prototype.indexOf = function(A) {
                return sA(this._value, A) ? 0 : -1
            }, uA.prototype.lastIndexOf = function(A) {
                return sA(this._value, A) ? this.size : -1
            }, uA.prototype.__iterate = function(A, t) {
                for (var e = 0; e < this.size; e++)
                    if (!1 === A(this._value, e, this)) return e + 1;
                return e
            }, uA.prototype.__iterator = function(A, t) {
                var e = this,
                    n = 0;
                return new T((function() {
                    return n < e.size ? D(A, n++, e._value) : {
                        value: void 0,
                        done: !0
                    }
                }))
            }, uA.prototype.equals = function(A) {
                return A instanceof uA ? sA(this._value, A._value) : aA(A)
            }, t(lA, V), lA.prototype.toString = function() {
                return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
            }, lA.prototype.get = function(A, t) {
                return this.has(A) ? this._start + U(this, A) * this._step : t
            }, lA.prototype.includes = function(A) {
                var t = (A - this._start) / this._step;
                return t >= 0 && t < this.size && t === Math.floor(t)
            }, lA.prototype.slice = function(A, t) {
                return b(A, t, this.size) ? this : (A = E(A, this.size), (t = _(t, this.size)) <= A ? new lA(0, 0) : new lA(this.get(A, this._end), this.get(t, this._end), this._step))
            }, lA.prototype.indexOf = function(A) {
                var t = A - this._start;
                if (t % this._step == 0) {
                    var e = t / this._step;
                    if (e >= 0 && e < this.size) return e
                }
                return -1
            }, lA.prototype.lastIndexOf = function(A) {
                return this.indexOf(A)
            }, lA.prototype.__iterate = function(A, t) {
                for (var e = this.size - 1, n = this._step, r = t ? this._start + e * n : this._start, o = 0; o <= e; o++) {
                    if (!1 === A(r, o, this)) return o + 1;
                    r += t ? -n : n
                }
                return o
            }, lA.prototype.__iterator = function(A, t) {
                var e = this.size - 1,
                    n = this._step,
                    r = t ? this._start + e * n : this._start,
                    o = 0;
                return new T((function() {
                    var i = r;
                    return r += t ? -n : n, o > e ? {
                        value: void 0,
                        done: !0
                    } : D(A, o++, i)
                }))
            }, lA.prototype.equals = function(A) {
                return A instanceof lA ? this._start === A._start && this._end === A._end && this._step === A._step : aA(this, A)
            }, t(fA, e), t(pA, fA), t(hA, fA), t(BA, fA), fA.Keyed = pA, fA.Indexed = hA, fA.Set = BA;
            var gA = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(A, t) {
                var e = 65535 & (A |= 0),
                    n = 65535 & (t |= 0);
                return e * n + ((A >>> 16) * n + e * (t >>> 16) << 16 >>> 0) | 0
            };

            function dA(A) {
                return A >>> 1 & 1073741824 | 3221225471 & A
            }

            function wA(A) {
                if (!1 === A || null == A) return 0;
                if ("function" == typeof A.valueOf && (!1 === (A = A.valueOf()) || null == A)) return 0;
                if (!0 === A) return 1;
                var t = i(A);
                if ("number" === t) {
                    if (A != A || A === 1 / 0) return 0;
                    var e = 0 | A;
                    for (e !== A && (e ^= 4294967295 * A); A > 4294967295;) e ^= A /= 4294967295;
                    return dA(e)
                }
                if ("string" === t) return A.length > bA ? function(A) {
                    var t = IA[A];
                    return void 0 === t && (t = vA(A), _A === EA && (_A = 0, IA = {}), _A++, IA[A] = t), t
                }(A) : vA(A);
                if ("function" == typeof A.hashCode) return A.hashCode();
                if ("object" === t) return function(A) {
                    var t;
                    if (CA && void 0 !== (t = yA.get(A))) return t;
                    if (void 0 !== (t = A[FA])) return t;
                    if (!QA) {
                        if (void 0 !== (t = A.propertyIsEnumerable && A.propertyIsEnumerable[FA])) return t;
                        if (void 0 !== (t = function(A) {
                                if (A && A.nodeType > 0) switch (A.nodeType) {
                                    case 1:
                                        return A.uniqueID;
                                    case 9:
                                        return A.documentElement && A.documentElement.uniqueID
                                }
                            }(A))) return t
                    }
                    if (t = ++UA, 1073741824 & UA && (UA = 0), CA) yA.set(A, t);
                    else {
                        if (void 0 !== mA && !1 === mA(A)) throw new Error("Non-extensible objects are not allowed as keys.");
                        if (QA) Object.defineProperty(A, FA, {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: t
                        });
                        else if (void 0 !== A.propertyIsEnumerable && A.propertyIsEnumerable === A.constructor.prototype.propertyIsEnumerable) A.propertyIsEnumerable = function() {
                            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                        }, A.propertyIsEnumerable[FA] = t;
                        else {
                            if (void 0 === A.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                            A[FA] = t
                        }
                    }
                    return t
                }(A);
                if ("function" == typeof A.toString) return vA(A.toString());
                throw new Error("Value type " + t + " cannot be hashed.")
            }

            function vA(A) {
                for (var t = 0, e = 0; e < A.length; e++) t = 31 * t + A.charCodeAt(e) | 0;
                return dA(t)
            }
            var yA, mA = Object.isExtensible,
                QA = function() {
                    try {
                        return Object.defineProperty({}, "@", {}), !0
                    } catch (A) {
                        return !1
                    }
                }(),
                CA = "function" == typeof WeakMap;
            CA && (yA = new WeakMap);
            var UA = 0,
                FA = "__immutablehash__";
            "function" == typeof Symbol && (FA = Symbol(FA));
            var bA = 16,
                EA = 255,
                _A = 0,
                IA = {};

            function HA(A) {
                cA(A !== 1 / 0, "Cannot perform this action with an infinite size.")
            }

            function OA(A) {
                return null == A ? VA() : SA(A) && !l(A) ? A : VA().withMutations((function(t) {
                    var e = n(A);
                    HA(e.size), e.forEach((function(A, e) {
                        return t.set(e, A)
                    }))
                }))
            }

            function SA(A) {
                return !(!A || !A[xA])
            }
            t(OA, pA), OA.of = function() {
                var t = A.call(arguments, 0);
                return VA().withMutations((function(A) {
                    for (var e = 0; e < t.length; e += 2) {
                        if (e + 1 >= t.length) throw new Error("Missing value for key: " + t[e]);
                        A.set(t[e], t[e + 1])
                    }
                }))
            }, OA.prototype.toString = function() {
                return this.__toString("Map {", "}")
            }, OA.prototype.get = function(A, t) {
                return this._root ? this._root.get(0, void 0, A, t) : t
            }, OA.prototype.set = function(A, t) {
                return WA(this, A, t)
            }, OA.prototype.setIn = function(A, t) {
                return this.updateIn(A, g, (function() {
                    return t
                }))
            }, OA.prototype.remove = function(A) {
                return WA(this, A, g)
            }, OA.prototype.deleteIn = function(A) {
                return this.updateIn(A, (function() {
                    return g
                }))
            }, OA.prototype.update = function(A, t, e) {
                return 1 === arguments.length ? A(this) : this.updateIn([A], t, e)
            }, OA.prototype.updateIn = function(A, t, e) {
                e || (e = t, t = void 0);
                var n = function A(t, e, n, r) {
                    var o = t === g,
                        i = e.next();
                    if (i.done) {
                        var s = o ? n : t,
                            a = r(s);
                        return a === s ? t : a
                    }
                    cA(o || t && t.set, "invalid keyPath");
                    var u = i.value,
                        c = o ? g : t.get(u, g),
                        l = A(c, e, n, r);
                    return l === c ? t : l === g ? t.remove(u) : (o ? VA() : t).set(u, l)
                }(this, zt(A), t, e);
                return n === g ? void 0 : n
            }, OA.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : VA()
            }, OA.prototype.merge = function() {
                return zA(this, void 0, arguments)
            }, OA.prototype.mergeWith = function(t) {
                var e = A.call(arguments, 1);
                return zA(this, t, e)
            }, OA.prototype.mergeIn = function(t) {
                var e = A.call(arguments, 1);
                return this.updateIn(t, VA(), (function(A) {
                    return "function" == typeof A.merge ? A.merge.apply(A, e) : e[e.length - 1]
                }))
            }, OA.prototype.mergeDeep = function() {
                return zA(this, ZA, arguments)
            }, OA.prototype.mergeDeepWith = function(t) {
                var e = A.call(arguments, 1);
                return zA(this, qA(t), e)
            }, OA.prototype.mergeDeepIn = function(t) {
                var e = A.call(arguments, 1);
                return this.updateIn(t, VA(), (function(A) {
                    return "function" == typeof A.mergeDeep ? A.mergeDeep.apply(A, e) : e[e.length - 1]
                }))
            }, OA.prototype.sort = function(A) {
                return Qt(Rt(this, A))
            }, OA.prototype.sortBy = function(A, t) {
                return Qt(Rt(this, t, A))
            }, OA.prototype.withMutations = function(A) {
                var t = this.asMutable();
                return A(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
            }, OA.prototype.asMutable = function() {
                return this.__ownerID ? this : this.__ensureOwner(new m)
            }, OA.prototype.asImmutable = function() {
                return this.__ensureOwner()
            }, OA.prototype.wasAltered = function() {
                return this.__altered
            }, OA.prototype.__iterator = function(A, t) {
                return new NA(this, A, t)
            }, OA.prototype.__iterate = function(A, t) {
                var e = this,
                    n = 0;
                return this._root && this._root.iterate((function(t) {
                    return n++, A(t[1], t[0], e)
                }), t), n
            }, OA.prototype.__ensureOwner = function(A) {
                return A === this.__ownerID ? this : A ? GA(this.size, this._root, A, this.__hash) : (this.__ownerID = A, this.__altered = !1, this)
            }, OA.isMap = SA;
            var LA, xA = "@@__IMMUTABLE_MAP__@@",
                TA = OA.prototype;

            function DA(A, t) {
                this.ownerID = A, this.entries = t
            }

            function KA(A, t, e) {
                this.ownerID = A, this.bitmap = t, this.nodes = e
            }

            function MA(A, t, e) {
                this.ownerID = A, this.count = t, this.nodes = e
            }

            function RA(A, t, e) {
                this.ownerID = A, this.keyHash = t, this.entries = e
            }

            function kA(A, t, e) {
                this.ownerID = A, this.keyHash = t, this.entry = e
            }

            function NA(A, t, e) {
                this._type = t, this._reverse = e, this._stack = A._root && jA(A._root)
            }

            function PA(A, t) {
                return D(A, t[0], t[1])
            }

            function jA(A, t) {
                return {
                    node: A,
                    index: 0,
                    __prev: t
                }
            }

            function GA(A, t, e, n) {
                var r = Object.create(TA);
                return r.size = A, r._root = t, r.__ownerID = e, r.__hash = n, r.__altered = !1, r
            }

            function VA() {
                return LA || (LA = GA(0))
            }

            function WA(A, t, e) {
                var n, r;
                if (A._root) {
                    var o = v(d),
                        i = v(w);
                    if (n = JA(A._root, A.__ownerID, 0, void 0, t, e, o, i), !i.value) return A;
                    r = A.size + (o.value ? e === g ? -1 : 1 : 0)
                } else {
                    if (e === g) return A;
                    r = 1, n = new DA(A.__ownerID, [
                        [t, e]
                    ])
                }
                return A.__ownerID ? (A.size = r, A._root = n, A.__hash = void 0, A.__altered = !0, A) : n ? GA(r, n) : VA()
            }

            function JA(A, t, e, n, r, o, i, s) {
                return A ? A.update(t, e, n, r, o, i, s) : o === g ? A : (y(s), y(i), new kA(t, n, [r, o]))
            }

            function XA(A) {
                return A.constructor === kA || A.constructor === RA
            }

            function YA(A, t, e, n, r) {
                if (A.keyHash === n) return new RA(t, n, [A.entry, r]);
                var o, i = 31 & (0 === e ? A.keyHash : A.keyHash >>> e),
                    s = 31 & (0 === e ? n : n >>> e);
                return new KA(t, 1 << i | 1 << s, i === s ? [YA(A, t, e + 5, n, r)] : (o = new kA(t, n, r), i < s ? [A, o] : [o, A]))
            }

            function zA(A, t, e) {
                for (var r = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                        a = n(i);
                    s(i) || (a = a.map((function(A) {
                        return rA(A)
                    }))), r.push(a)
                }
                return $A(A, t, r)
            }

            function ZA(A, t, e) {
                return A && A.mergeDeep && s(t) ? A.mergeDeep(t) : sA(A, t) ? A : t
            }

            function qA(A) {
                return function(t, e, n) {
                    if (t && t.mergeDeepWith && s(e)) return t.mergeDeepWith(A, e);
                    var r = A(t, e, n);
                    return sA(t, r) ? t : r
                }
            }

            function $A(A, t, e) {
                return 0 === (e = e.filter((function(A) {
                    return 0 !== A.size
                }))).length ? A : 0 !== A.size || A.__ownerID || 1 !== e.length ? A.withMutations((function(A) {
                    for (var n = t ? function(e, n) {
                            A.update(n, g, (function(A) {
                                return A === g ? e : t(A, e, n)
                            }))
                        } : function(t, e) {
                            A.set(e, t)
                        }, r = 0; r < e.length; r++) e[r].forEach(n)
                })) : A.constructor(e[0])
            }

            function At(A) {
                return A = (A = (858993459 & (A -= A >> 1 & 1431655765)) + (A >> 2 & 858993459)) + (A >> 4) & 252645135, A += A >> 8, 127 & (A += A >> 16)
            }

            function tt(A, t, e, n) {
                var r = n ? A : Q(A);
                return r[t] = e, r
            }
            TA[xA] = !0, TA.delete = TA.remove, TA.removeIn = TA.deleteIn, DA.prototype.get = function(A, t, e, n) {
                for (var r = this.entries, o = 0, i = r.length; o < i; o++)
                    if (sA(e, r[o][0])) return r[o][1];
                return n
            }, DA.prototype.update = function(A, t, e, n, r, o, i) {
                for (var s = r === g, a = this.entries, u = 0, c = a.length; u < c && !sA(n, a[u][0]); u++);
                var l = u < c;
                if (l ? a[u][1] === r : s) return this;
                if (y(i), (s || !l) && y(o), !s || 1 !== a.length) {
                    if (!l && !s && a.length >= et) return function(A, t, e, n) {
                        A || (A = new m);
                        for (var r = new kA(A, wA(e), [e, n]), o = 0; o < t.length; o++) {
                            var i = t[o];
                            r = r.update(A, 0, void 0, i[0], i[1])
                        }
                        return r
                    }(A, a, n, r);
                    var f = A && A === this.ownerID,
                        p = f ? a : Q(a);
                    return l ? s ? u === c - 1 ? p.pop() : p[u] = p.pop() : p[u] = [n, r] : p.push([n, r]), f ? (this.entries = p, this) : new DA(A, p)
                }
            }, KA.prototype.get = function(A, t, e, n) {
                void 0 === t && (t = wA(e));
                var r = 1 << (31 & (0 === A ? t : t >>> A)),
                    o = this.bitmap;
                return 0 == (o & r) ? n : this.nodes[At(o & r - 1)].get(A + 5, t, e, n)
            }, KA.prototype.update = function(A, t, e, n, r, o, i) {
                void 0 === e && (e = wA(n));
                var s = 31 & (0 === t ? e : e >>> t),
                    a = 1 << s,
                    u = this.bitmap,
                    c = 0 != (u & a);
                if (!c && r === g) return this;
                var l = At(u & a - 1),
                    f = this.nodes,
                    p = c ? f[l] : void 0,
                    h = JA(p, A, t + 5, e, n, r, o, i);
                if (h === p) return this;
                if (!c && h && f.length >= nt) return function(A, t, e, n, r) {
                    for (var o = 0, i = new Array(32), s = 0; 0 !== e; s++, e >>>= 1) i[s] = 1 & e ? t[o++] : void 0;
                    return i[n] = r, new MA(A, o + 1, i)
                }(A, f, u, s, h);
                if (c && !h && 2 === f.length && XA(f[1 ^ l])) return f[1 ^ l];
                if (c && h && 1 === f.length && XA(h)) return h;
                var B = A && A === this.ownerID,
                    d = c ? h ? u : u ^ a : u | a,
                    w = c ? h ? tt(f, l, h, B) : function(A, t, e) {
                        var n = A.length - 1;
                        if (e && t === n) return A.pop(), A;
                        for (var r = new Array(n), o = 0, i = 0; i < n; i++) i === t && (o = 1), r[i] = A[i + o];
                        return r
                    }(f, l, B) : function(A, t, e, n) {
                        var r = A.length + 1;
                        if (n && t + 1 === r) return A[t] = e, A;
                        for (var o = new Array(r), i = 0, s = 0; s < r; s++) s === t ? (o[s] = e, i = -1) : o[s] = A[s + i];
                        return o
                    }(f, l, h, B);
                return B ? (this.bitmap = d, this.nodes = w, this) : new KA(A, d, w)
            }, MA.prototype.get = function(A, t, e, n) {
                void 0 === t && (t = wA(e));
                var r = 31 & (0 === A ? t : t >>> A),
                    o = this.nodes[r];
                return o ? o.get(A + 5, t, e, n) : n
            }, MA.prototype.update = function(A, t, e, n, r, o, i) {
                void 0 === e && (e = wA(n));
                var s = 31 & (0 === t ? e : e >>> t),
                    a = r === g,
                    u = this.nodes,
                    c = u[s];
                if (a && !c) return this;
                var l = JA(c, A, t + 5, e, n, r, o, i);
                if (l === c) return this;
                var f = this.count;
                if (c) {
                    if (!l && --f < rt) return function(A, t, e, n) {
                        for (var r = 0, o = 0, i = new Array(e), s = 0, a = 1, u = t.length; s < u; s++, a <<= 1) {
                            var c = t[s];
                            void 0 !== c && s !== n && (r |= a, i[o++] = c)
                        }
                        return new KA(A, r, i)
                    }(A, u, f, s)
                } else f++;
                var p = A && A === this.ownerID,
                    h = tt(u, s, l, p);
                return p ? (this.count = f, this.nodes = h, this) : new MA(A, f, h)
            }, RA.prototype.get = function(A, t, e, n) {
                for (var r = this.entries, o = 0, i = r.length; o < i; o++)
                    if (sA(e, r[o][0])) return r[o][1];
                return n
            }, RA.prototype.update = function(A, t, e, n, r, o, i) {
                void 0 === e && (e = wA(n));
                var s = r === g;
                if (e !== this.keyHash) return s ? this : (y(i), y(o), YA(this, A, t, e, [n, r]));
                for (var a = this.entries, u = 0, c = a.length; u < c && !sA(n, a[u][0]); u++);
                var l = u < c;
                if (l ? a[u][1] === r : s) return this;
                if (y(i), (s || !l) && y(o), s && 2 === c) return new kA(A, this.keyHash, a[1 ^ u]);
                var f = A && A === this.ownerID,
                    p = f ? a : Q(a);
                return l ? s ? u === c - 1 ? p.pop() : p[u] = p.pop() : p[u] = [n, r] : p.push([n, r]), f ? (this.entries = p, this) : new RA(A, this.keyHash, p)
            }, kA.prototype.get = function(A, t, e, n) {
                return sA(e, this.entry[0]) ? this.entry[1] : n
            }, kA.prototype.update = function(A, t, e, n, r, o, i) {
                var s = r === g,
                    a = sA(n, this.entry[0]);
                return (a ? r === this.entry[1] : s) ? this : (y(i), s ? void y(o) : a ? A && A === this.ownerID ? (this.entry[1] = r, this) : new kA(A, this.keyHash, [n, r]) : (y(o), YA(this, A, t, wA(n), [n, r])))
            }, DA.prototype.iterate = RA.prototype.iterate = function(A, t) {
                for (var e = this.entries, n = 0, r = e.length - 1; n <= r; n++)
                    if (!1 === A(e[t ? r - n : n])) return !1
            }, KA.prototype.iterate = MA.prototype.iterate = function(A, t) {
                for (var e = this.nodes, n = 0, r = e.length - 1; n <= r; n++) {
                    var o = e[t ? r - n : n];
                    if (o && !1 === o.iterate(A, t)) return !1
                }
            }, kA.prototype.iterate = function(A, t) {
                return A(this.entry)
            }, t(NA, T), NA.prototype.next = function() {
                for (var A = this._type, t = this._stack; t;) {
                    var e, n = t.node,
                        r = t.index++;
                    if (n.entry) {
                        if (0 === r) return PA(A, n.entry)
                    } else if (n.entries) {
                        if (r <= (e = n.entries.length - 1)) return PA(A, n.entries[this._reverse ? e - r : r])
                    } else if (r <= (e = n.nodes.length - 1)) {
                        var o = n.nodes[this._reverse ? e - r : r];
                        if (o) {
                            if (o.entry) return PA(A, o.entry);
                            t = this._stack = jA(o, t)
                        }
                        continue
                    }
                    t = this._stack = this._stack.__prev
                }
                return {
                    value: void 0,
                    done: !0
                }
            };
            var et = 8,
                nt = 16,
                rt = 8;

            function ot(A) {
                var t = Bt();
                if (null == A) return t;
                if (it(A)) return A;
                var e = r(A),
                    n = e.size;
                return 0 === n ? t : (HA(n), n > 0 && n < 32 ? ht(0, n, 5, null, new ut(e.toArray())) : t.withMutations((function(A) {
                    A.setSize(n), e.forEach((function(t, e) {
                        return A.set(e, t)
                    }))
                })))
            }

            function it(A) {
                return !(!A || !A[st])
            }
            t(ot, hA), ot.of = function() {
                return this(arguments)
            }, ot.prototype.toString = function() {
                return this.__toString("List [", "]")
            }, ot.prototype.get = function(A, t) {
                if ((A = U(this, A)) >= 0 && A < this.size) {
                    var e = wt(this, A += this._origin);
                    return e && e.array[31 & A]
                }
                return t
            }, ot.prototype.set = function(A, t) {
                return function(A, t, e) {
                    if ((t = U(A, t)) != t) return A;
                    if (t >= A.size || t < 0) return A.withMutations((function(A) {
                        t < 0 ? vt(A, t).set(0, e) : vt(A, 0, t + 1).set(t, e)
                    }));
                    t += A._origin;
                    var n = A._tail,
                        r = A._root,
                        o = v(w);
                    return t >= mt(A._capacity) ? n = gt(n, A.__ownerID, 0, t, e, o) : r = gt(r, A.__ownerID, A._level, t, e, o), o.value ? A.__ownerID ? (A._root = r, A._tail = n, A.__hash = void 0, A.__altered = !0, A) : ht(A._origin, A._capacity, A._level, r, n) : A
                }(this, A, t)
            }, ot.prototype.remove = function(A) {
                return this.has(A) ? 0 === A ? this.shift() : A === this.size - 1 ? this.pop() : this.splice(A, 1) : this
            }, ot.prototype.insert = function(A, t) {
                return this.splice(A, 0, t)
            }, ot.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : Bt()
            }, ot.prototype.push = function() {
                var A = arguments,
                    t = this.size;
                return this.withMutations((function(e) {
                    vt(e, 0, t + A.length);
                    for (var n = 0; n < A.length; n++) e.set(t + n, A[n])
                }))
            }, ot.prototype.pop = function() {
                return vt(this, 0, -1)
            }, ot.prototype.unshift = function() {
                var A = arguments;
                return this.withMutations((function(t) {
                    vt(t, -A.length);
                    for (var e = 0; e < A.length; e++) t.set(e, A[e])
                }))
            }, ot.prototype.shift = function() {
                return vt(this, 1)
            }, ot.prototype.merge = function() {
                return yt(this, void 0, arguments)
            }, ot.prototype.mergeWith = function(t) {
                var e = A.call(arguments, 1);
                return yt(this, t, e)
            }, ot.prototype.mergeDeep = function() {
                return yt(this, ZA, arguments)
            }, ot.prototype.mergeDeepWith = function(t) {
                var e = A.call(arguments, 1);
                return yt(this, qA(t), e)
            }, ot.prototype.setSize = function(A) {
                return vt(this, 0, A)
            }, ot.prototype.slice = function(A, t) {
                var e = this.size;
                return b(A, t, e) ? this : vt(this, E(A, e), _(t, e))
            }, ot.prototype.__iterator = function(A, t) {
                var e = 0,
                    n = pt(this, t);
                return new T((function() {
                    var t = n();
                    return t === ft ? {
                        value: void 0,
                        done: !0
                    } : D(A, e++, t)
                }))
            }, ot.prototype.__iterate = function(A, t) {
                for (var e, n = 0, r = pt(this, t);
                    (e = r()) !== ft && !1 !== A(e, n++, this););
                return n
            }, ot.prototype.__ensureOwner = function(A) {
                return A === this.__ownerID ? this : A ? ht(this._origin, this._capacity, this._level, this._root, this._tail, A, this.__hash) : (this.__ownerID = A, this)
            }, ot.isList = it;
            var st = "@@__IMMUTABLE_LIST__@@",
                at = ot.prototype;

            function ut(A, t) {
                this.array = A, this.ownerID = t
            }
            at[st] = !0, at.delete = at.remove, at.setIn = TA.setIn, at.deleteIn = at.removeIn = TA.removeIn, at.update = TA.update, at.updateIn = TA.updateIn, at.mergeIn = TA.mergeIn, at.mergeDeepIn = TA.mergeDeepIn, at.withMutations = TA.withMutations, at.asMutable = TA.asMutable, at.asImmutable = TA.asImmutable, at.wasAltered = TA.wasAltered, ut.prototype.removeBefore = function(A, t, e) {
                if (e === t ? 1 << t : 0 === this.array.length) return this;
                var n = e >>> t & 31;
                if (n >= this.array.length) return new ut([], A);
                var r, o = 0 === n;
                if (t > 0) {
                    var i = this.array[n];
                    if ((r = i && i.removeBefore(A, t - 5, e)) === i && o) return this
                }
                if (o && !r) return this;
                var s = dt(this, A);
                if (!o)
                    for (var a = 0; a < n; a++) s.array[a] = void 0;
                return r && (s.array[n] = r), s
            }, ut.prototype.removeAfter = function(A, t, e) {
                if (e === (t ? 1 << t : 0) || 0 === this.array.length) return this;
                var n, r = e - 1 >>> t & 31;
                if (r >= this.array.length) return this;
                if (t > 0) {
                    var o = this.array[r];
                    if ((n = o && o.removeAfter(A, t - 5, e)) === o && r === this.array.length - 1) return this
                }
                var i = dt(this, A);
                return i.array.splice(r + 1), n && (i.array[r] = n), i
            };
            var ct, lt, ft = {};

            function pt(A, t) {
                var e = A._origin,
                    n = A._capacity,
                    r = mt(n),
                    o = A._tail;
                return i(A._root, A._level, 0);

                function i(A, s, a) {
                    return 0 === s ? function(A, i) {
                        var s = i === r ? o && o.array : A && A.array,
                            a = i > e ? 0 : e - i,
                            u = n - i;
                        return u > 32 && (u = 32),
                            function() {
                                if (a === u) return ft;
                                var A = t ? --u : a++;
                                return s && s[A]
                            }
                    }(A, a) : function(A, r, o) {
                        var s, a = A && A.array,
                            u = o > e ? 0 : e - o >> r,
                            c = 1 + (n - o >> r);
                        return c > 32 && (c = 32),
                            function() {
                                for (;;) {
                                    if (s) {
                                        var A = s();
                                        if (A !== ft) return A;
                                        s = null
                                    }
                                    if (u === c) return ft;
                                    var e = t ? --c : u++;
                                    s = i(a && a[e], r - 5, o + (e << r))
                                }
                            }
                    }(A, s, a)
                }
            }

            function ht(A, t, e, n, r, o, i) {
                var s = Object.create(at);
                return s.size = t - A, s._origin = A, s._capacity = t, s._level = e, s._root = n, s._tail = r, s.__ownerID = o, s.__hash = i, s.__altered = !1, s
            }

            function Bt() {
                return ct || (ct = ht(0, 0, 5))
            }

            function gt(A, t, e, n, r, o) {
                var i, s = n >>> e & 31,
                    a = A && s < A.array.length;
                if (!a && void 0 === r) return A;
                if (e > 0) {
                    var u = A && A.array[s],
                        c = gt(u, t, e - 5, n, r, o);
                    return c === u ? A : ((i = dt(A, t)).array[s] = c, i)
                }
                return a && A.array[s] === r ? A : (y(o), i = dt(A, t), void 0 === r && s === i.array.length - 1 ? i.array.pop() : i.array[s] = r, i)
            }

            function dt(A, t) {
                return t && A && t === A.ownerID ? A : new ut(A ? A.array.slice() : [], t)
            }

            function wt(A, t) {
                if (t >= mt(A._capacity)) return A._tail;
                if (t < 1 << A._level + 5) {
                    for (var e = A._root, n = A._level; e && n > 0;) e = e.array[t >>> n & 31], n -= 5;
                    return e
                }
            }

            function vt(A, t, e) {
                void 0 !== t && (t |= 0), void 0 !== e && (e |= 0);
                var n = A.__ownerID || new m,
                    r = A._origin,
                    o = A._capacity,
                    i = r + t,
                    s = void 0 === e ? o : e < 0 ? o + e : r + e;
                if (i === r && s === o) return A;
                if (i >= s) return A.clear();
                for (var a = A._level, u = A._root, c = 0; i + c < 0;) u = new ut(u && u.array.length ? [void 0, u] : [], n), c += 1 << (a += 5);
                c && (i += c, r += c, s += c, o += c);
                for (var l = mt(o), f = mt(s); f >= 1 << a + 5;) u = new ut(u && u.array.length ? [u] : [], n), a += 5;
                var p = A._tail,
                    h = f < l ? wt(A, s - 1) : f > l ? new ut([], n) : p;
                if (p && f > l && i < o && p.array.length) {
                    for (var B = u = dt(u, n), g = a; g > 5; g -= 5) {
                        var d = l >>> g & 31;
                        B = B.array[d] = dt(B.array[d], n)
                    }
                    B.array[l >>> 5 & 31] = p
                }
                if (s < o && (h = h && h.removeAfter(n, 0, s)), i >= f) i -= f, s -= f, a = 5, u = null, h = h && h.removeBefore(n, 0, i);
                else if (i > r || f < l) {
                    for (c = 0; u;) {
                        var w = i >>> a & 31;
                        if (w !== f >>> a & 31) break;
                        w && (c += (1 << a) * w), a -= 5, u = u.array[w]
                    }
                    u && i > r && (u = u.removeBefore(n, a, i - c)), u && f < l && (u = u.removeAfter(n, a, f - c)), c && (i -= c, s -= c)
                }
                return A.__ownerID ? (A.size = s - i, A._origin = i, A._capacity = s, A._level = a, A._root = u, A._tail = h, A.__hash = void 0, A.__altered = !0, A) : ht(i, s, a, u, h)
            }

            function yt(A, t, e) {
                for (var n = [], o = 0, i = 0; i < e.length; i++) {
                    var a = e[i],
                        u = r(a);
                    u.size > o && (o = u.size), s(a) || (u = u.map((function(A) {
                        return rA(A)
                    }))), n.push(u)
                }
                return o > A.size && (A = A.setSize(o)), $A(A, t, n)
            }

            function mt(A) {
                return A < 32 ? 0 : A - 1 >>> 5 << 5
            }

            function Qt(A) {
                return null == A ? Ft() : Ct(A) ? A : Ft().withMutations((function(t) {
                    var e = n(A);
                    HA(e.size), e.forEach((function(A, e) {
                        return t.set(e, A)
                    }))
                }))
            }

            function Ct(A) {
                return SA(A) && l(A)
            }

            function Ut(A, t, e, n) {
                var r = Object.create(Qt.prototype);
                return r.size = A ? A.size : 0, r._map = A, r._list = t, r.__ownerID = e, r.__hash = n, r
            }

            function Ft() {
                return lt || (lt = Ut(VA(), Bt()))
            }

            function bt(A, t, e) {
                var n, r, o = A._map,
                    i = A._list,
                    s = o.get(t),
                    a = void 0 !== s;
                if (e === g) {
                    if (!a) return A;
                    i.size >= 32 && i.size >= 2 * o.size ? (n = (r = i.filter((function(A, t) {
                        return void 0 !== A && s !== t
                    }))).toKeyedSeq().map((function(A) {
                        return A[0]
                    })).flip().toMap(), A.__ownerID && (n.__ownerID = r.__ownerID = A.__ownerID)) : (n = o.remove(t), r = s === i.size - 1 ? i.pop() : i.set(s, void 0))
                } else if (a) {
                    if (e === i.get(s)[1]) return A;
                    n = o, r = i.set(s, [t, e])
                } else n = o.set(t, i.size), r = i.set(i.size, [t, e]);
                return A.__ownerID ? (A.size = n.size, A._map = n, A._list = r, A.__hash = void 0, A) : Ut(n, r)
            }

            function Et(A, t) {
                this._iter = A, this._useKeys = t, this.size = A.size
            }

            function _t(A) {
                this._iter = A, this.size = A.size
            }

            function It(A) {
                this._iter = A, this.size = A.size
            }

            function Ht(A) {
                this._iter = A, this.size = A.size
            }

            function Ot(A) {
                var t = Jt(A);
                return t._iter = A, t.size = A.size, t.flip = function() {
                    return A
                }, t.reverse = function() {
                    var t = A.reverse.apply(this);
                    return t.flip = function() {
                        return A.reverse()
                    }, t
                }, t.has = function(t) {
                    return A.includes(t)
                }, t.includes = function(t) {
                    return A.has(t)
                }, t.cacheResult = Xt, t.__iterateUncached = function(t, e) {
                    var n = this;
                    return A.__iterate((function(A, e) {
                        return !1 !== t(e, A, n)
                    }), e)
                }, t.__iteratorUncached = function(t, e) {
                    if (2 === t) {
                        var n = A.__iterator(t, e);
                        return new T((function() {
                            var A = n.next();
                            if (!A.done) {
                                var t = A.value[0];
                                A.value[0] = A.value[1], A.value[1] = t
                            }
                            return A
                        }))
                    }
                    return A.__iterator(1 === t ? 0 : 1, e)
                }, t
            }

            function St(A, t, e) {
                var n = Jt(A);
                return n.size = A.size, n.has = function(t) {
                    return A.has(t)
                }, n.get = function(n, r) {
                    var o = A.get(n, g);
                    return o === g ? r : t.call(e, o, n, A)
                }, n.__iterateUncached = function(n, r) {
                    var o = this;
                    return A.__iterate((function(A, r, i) {
                        return !1 !== n(t.call(e, A, r, i), r, o)
                    }), r)
                }, n.__iteratorUncached = function(n, r) {
                    var o = A.__iterator(2, r);
                    return new T((function() {
                        var r = o.next();
                        if (r.done) return r;
                        var i = r.value,
                            s = i[0];
                        return D(n, s, t.call(e, i[1], s, A), r)
                    }))
                }, n
            }

            function Lt(A, t) {
                var e = Jt(A);
                return e._iter = A, e.size = A.size, e.reverse = function() {
                    return A
                }, A.flip && (e.flip = function() {
                    var t = Ot(A);
                    return t.reverse = function() {
                        return A.flip()
                    }, t
                }), e.get = function(e, n) {
                    return A.get(t ? e : -1 - e, n)
                }, e.has = function(e) {
                    return A.has(t ? e : -1 - e)
                }, e.includes = function(t) {
                    return A.includes(t)
                }, e.cacheResult = Xt, e.__iterate = function(t, e) {
                    var n = this;
                    return A.__iterate((function(A, e) {
                        return t(A, e, n)
                    }), !e)
                }, e.__iterator = function(t, e) {
                    return A.__iterator(t, !e)
                }, e
            }

            function xt(A, t, e, n) {
                var r = Jt(A);
                return n && (r.has = function(n) {
                    var r = A.get(n, g);
                    return r !== g && !!t.call(e, r, n, A)
                }, r.get = function(n, r) {
                    var o = A.get(n, g);
                    return o !== g && t.call(e, o, n, A) ? o : r
                }), r.__iterateUncached = function(r, o) {
                    var i = this,
                        s = 0;
                    return A.__iterate((function(A, o, a) {
                        if (t.call(e, A, o, a)) return s++, r(A, n ? o : s - 1, i)
                    }), o), s
                }, r.__iteratorUncached = function(r, o) {
                    var i = A.__iterator(2, o),
                        s = 0;
                    return new T((function() {
                        for (;;) {
                            var o = i.next();
                            if (o.done) return o;
                            var a = o.value,
                                u = a[0],
                                c = a[1];
                            if (t.call(e, c, u, A)) return D(r, n ? u : s++, c, o)
                        }
                    }))
                }, r
            }

            function Tt(A, t, e, n) {
                var r = A.size;
                if (void 0 !== t && (t |= 0), void 0 !== e && (e === 1 / 0 ? e = r : e |= 0), b(t, e, r)) return A;
                var o = E(t, r),
                    i = _(e, r);
                if (o != o || i != i) return Tt(A.toSeq().cacheResult(), t, e, n);
                var s, a = i - o;
                a == a && (s = a < 0 ? 0 : a);
                var u = Jt(A);
                return u.size = 0 === s ? s : A.size && s || void 0, !n && Z(A) && s >= 0 && (u.get = function(t, e) {
                    return (t = U(this, t)) >= 0 && t < s ? A.get(t + o, e) : e
                }), u.__iterateUncached = function(t, e) {
                    var r = this;
                    if (0 === s) return 0;
                    if (e) return this.cacheResult().__iterate(t, e);
                    var i = 0,
                        a = !0,
                        u = 0;
                    return A.__iterate((function(A, e) {
                        if (!a || !(a = i++ < o)) return u++, !1 !== t(A, n ? e : u - 1, r) && u !== s
                    })), u
                }, u.__iteratorUncached = function(t, e) {
                    if (0 !== s && e) return this.cacheResult().__iterator(t, e);
                    var r = 0 !== s && A.__iterator(t, e),
                        i = 0,
                        a = 0;
                    return new T((function() {
                        for (; i++ < o;) r.next();
                        if (++a > s) return {
                            value: void 0,
                            done: !0
                        };
                        var A = r.next();
                        return n || 1 === t ? A : D(t, a - 1, 0 === t ? void 0 : A.value[1], A)
                    }))
                }, u
            }

            function Dt(A, t, e, n) {
                var r = Jt(A);
                return r.__iterateUncached = function(r, o) {
                    var i = this;
                    if (o) return this.cacheResult().__iterate(r, o);
                    var s = !0,
                        a = 0;
                    return A.__iterate((function(A, o, u) {
                        if (!s || !(s = t.call(e, A, o, u))) return a++, r(A, n ? o : a - 1, i)
                    })), a
                }, r.__iteratorUncached = function(r, o) {
                    var i = this;
                    if (o) return this.cacheResult().__iterator(r, o);
                    var s = A.__iterator(2, o),
                        a = !0,
                        u = 0;
                    return new T((function() {
                        var A, o, c;
                        do {
                            if ((A = s.next()).done) return n || 1 === r ? A : D(r, u++, 0 === r ? void 0 : A.value[1], A);
                            var l = A.value;
                            o = l[0], c = l[1], a && (a = t.call(e, c, o, i))
                        } while (a);
                        return 2 === r ? A : D(r, o, c, A)
                    }))
                }, r
            }

            function Kt(A, t) {
                var e = a(A),
                    r = [A].concat(t).map((function(A) {
                        return s(A) ? e && (A = n(A)) : A = e ? $(A) : AA(Array.isArray(A) ? A : [A]), A
                    })).filter((function(A) {
                        return 0 !== A.size
                    }));
                if (0 === r.length) return A;
                if (1 === r.length) {
                    var o = r[0];
                    if (o === A || e && a(o) || u(A) && u(o)) return o
                }
                var i = new J(r);
                return e ? i = i.toKeyedSeq() : u(A) || (i = i.toSetSeq()), (i = i.flatten(!0)).size = r.reduce((function(A, t) {
                    if (void 0 !== A) {
                        var e = t.size;
                        if (void 0 !== e) return A + e
                    }
                }), 0), i
            }

            function Mt(A, t, e) {
                var n = Jt(A);
                return n.__iterateUncached = function(n, r) {
                    var o = 0,
                        i = !1;
                    return function A(a, u) {
                        var c = this;
                        a.__iterate((function(r, a) {
                            return (!t || u < t) && s(r) ? A(r, u + 1) : !1 === n(r, e ? a : o++, c) && (i = !0), !i
                        }), r)
                    }(A, 0), o
                }, n.__iteratorUncached = function(n, r) {
                    var o = A.__iterator(n, r),
                        i = [],
                        a = 0;
                    return new T((function() {
                        for (; o;) {
                            var A = o.next();
                            if (!1 === A.done) {
                                var u = A.value;
                                if (2 === n && (u = u[1]), t && !(i.length < t) || !s(u)) return e ? A : D(n, a++, u, A);
                                i.push(o), o = u.__iterator(n, r)
                            } else o = i.pop()
                        }
                        return {
                            value: void 0,
                            done: !0
                        }
                    }))
                }, n
            }

            function Rt(A, t, e) {
                t || (t = Yt);
                var n = a(A),
                    r = 0,
                    o = A.toSeq().map((function(t, n) {
                        return [n, t, r++, e ? e(t, n, A) : t]
                    })).toArray();
                return o.sort((function(A, e) {
                    return t(A[3], e[3]) || A[2] - e[2]
                })).forEach(n ? function(A, t) {
                    o[t].length = 2
                } : function(A, t) {
                    o[t] = A[1]
                }), n ? G(o) : u(A) ? V(o) : W(o)
            }

            function kt(A, t, e) {
                if (t || (t = Yt), e) {
                    var n = A.toSeq().map((function(t, n) {
                        return [t, e(t, n, A)]
                    })).reduce((function(A, e) {
                        return Nt(t, A[1], e[1]) ? e : A
                    }));
                    return n && n[0]
                }
                return A.reduce((function(A, e) {
                    return Nt(t, A, e) ? e : A
                }))
            }

            function Nt(A, t, e) {
                var n = A(e, t);
                return 0 === n && e !== t && (null == e || e != e) || n > 0
            }

            function Pt(A, t, n) {
                var r = Jt(A);
                return r.size = new J(n).map((function(A) {
                    return A.size
                })).min(), r.__iterate = function(A, t) {
                    for (var e, n = this.__iterator(1, t), r = 0; !(e = n.next()).done && !1 !== A(e.value, r++, this););
                    return r
                }, r.__iteratorUncached = function(A, r) {
                    var o = n.map((function(A) {
                            return A = e(A), k(r ? A.reverse() : A)
                        })),
                        i = 0,
                        s = !1;
                    return new T((function() {
                        var e;
                        return s || (e = o.map((function(A) {
                            return A.next()
                        })), s = e.some((function(A) {
                            return A.done
                        }))), s ? {
                            value: void 0,
                            done: !0
                        } : D(A, i++, t.apply(null, e.map((function(A) {
                            return A.value
                        }))))
                    }))
                }, r
            }

            function jt(A, t) {
                return Z(A) ? t : A.constructor(t)
            }

            function Gt(A) {
                if (A !== Object(A)) throw new TypeError("Expected [K, V] tuple: " + A)
            }

            function Vt(A) {
                return HA(A.size), C(A)
            }

            function Wt(A) {
                return a(A) ? n : u(A) ? r : o
            }

            function Jt(A) {
                return Object.create((a(A) ? G : u(A) ? V : W).prototype)
            }

            function Xt() {
                return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : j.prototype.cacheResult.call(this)
            }

            function Yt(A, t) {
                return A > t ? 1 : A < t ? -1 : 0
            }

            function zt(A) {
                var t = k(A);
                if (!t) {
                    if (!P(A)) throw new TypeError("Expected iterable or array-like: " + A);
                    t = k(e(A))
                }
                return t
            }

            function Zt(A, t) {
                var e, n = function(o) {
                        if (o instanceof n) return o;
                        if (!(this instanceof n)) return new n(o);
                        if (!e) {
                            e = !0;
                            var i = Object.keys(A);
                            ! function(A, t) {
                                try {
                                    t.forEach(te.bind(void 0, A))
                                } catch (A) {}
                            }(r, i), r.size = i.length, r._name = t, r._keys = i, r._defaultValues = A
                        }
                        this._map = OA(o)
                    },
                    r = n.prototype = Object.create(qt);
                return r.constructor = n, n
            }
            t(Qt, OA), Qt.of = function() {
                return this(arguments)
            }, Qt.prototype.toString = function() {
                return this.__toString("OrderedMap {", "}")
            }, Qt.prototype.get = function(A, t) {
                var e = this._map.get(A);
                return void 0 !== e ? this._list.get(e)[1] : t
            }, Qt.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : Ft()
            }, Qt.prototype.set = function(A, t) {
                return bt(this, A, t)
            }, Qt.prototype.remove = function(A) {
                return bt(this, A, g)
            }, Qt.prototype.wasAltered = function() {
                return this._map.wasAltered() || this._list.wasAltered()
            }, Qt.prototype.__iterate = function(A, t) {
                var e = this;
                return this._list.__iterate((function(t) {
                    return t && A(t[1], t[0], e)
                }), t)
            }, Qt.prototype.__iterator = function(A, t) {
                return this._list.fromEntrySeq().__iterator(A, t)
            }, Qt.prototype.__ensureOwner = function(A) {
                if (A === this.__ownerID) return this;
                var t = this._map.__ensureOwner(A),
                    e = this._list.__ensureOwner(A);
                return A ? Ut(t, e, A, this.__hash) : (this.__ownerID = A, this._map = t, this._list = e, this)
            }, Qt.isOrderedMap = Ct, Qt.prototype[B] = !0, Qt.prototype.delete = Qt.prototype.remove, t(Et, G), Et.prototype.get = function(A, t) {
                return this._iter.get(A, t)
            }, Et.prototype.has = function(A) {
                return this._iter.has(A)
            }, Et.prototype.valueSeq = function() {
                return this._iter.valueSeq()
            }, Et.prototype.reverse = function() {
                var A = this,
                    t = Lt(this, !0);
                return this._useKeys || (t.valueSeq = function() {
                    return A._iter.toSeq().reverse()
                }), t
            }, Et.prototype.map = function(A, t) {
                var e = this,
                    n = St(this, A, t);
                return this._useKeys || (n.valueSeq = function() {
                    return e._iter.toSeq().map(A, t)
                }), n
            }, Et.prototype.__iterate = function(A, t) {
                var e, n = this;
                return this._iter.__iterate(this._useKeys ? function(t, e) {
                    return A(t, e, n)
                } : (e = t ? Vt(this) : 0, function(r) {
                    return A(r, t ? --e : e++, n)
                }), t)
            }, Et.prototype.__iterator = function(A, t) {
                if (this._useKeys) return this._iter.__iterator(A, t);
                var e = this._iter.__iterator(1, t),
                    n = t ? Vt(this) : 0;
                return new T((function() {
                    var r = e.next();
                    return r.done ? r : D(A, t ? --n : n++, r.value, r)
                }))
            }, Et.prototype[B] = !0, t(_t, V), _t.prototype.includes = function(A) {
                return this._iter.includes(A)
            }, _t.prototype.__iterate = function(A, t) {
                var e = this,
                    n = 0;
                return this._iter.__iterate((function(t) {
                    return A(t, n++, e)
                }), t)
            }, _t.prototype.__iterator = function(A, t) {
                var e = this._iter.__iterator(1, t),
                    n = 0;
                return new T((function() {
                    var t = e.next();
                    return t.done ? t : D(A, n++, t.value, t)
                }))
            }, t(It, W), It.prototype.has = function(A) {
                return this._iter.includes(A)
            }, It.prototype.__iterate = function(A, t) {
                var e = this;
                return this._iter.__iterate((function(t) {
                    return A(t, t, e)
                }), t)
            }, It.prototype.__iterator = function(A, t) {
                var e = this._iter.__iterator(1, t);
                return new T((function() {
                    var t = e.next();
                    return t.done ? t : D(A, t.value, t.value, t)
                }))
            }, t(Ht, G), Ht.prototype.entrySeq = function() {
                return this._iter.toSeq()
            }, Ht.prototype.__iterate = function(A, t) {
                var e = this;
                return this._iter.__iterate((function(t) {
                    if (t) {
                        Gt(t);
                        var n = s(t);
                        return A(n ? t.get(1) : t[1], n ? t.get(0) : t[0], e)
                    }
                }), t)
            }, Ht.prototype.__iterator = function(A, t) {
                var e = this._iter.__iterator(1, t);
                return new T((function() {
                    for (;;) {
                        var t = e.next();
                        if (t.done) return t;
                        var n = t.value;
                        if (n) {
                            Gt(n);
                            var r = s(n);
                            return D(A, r ? n.get(0) : n[0], r ? n.get(1) : n[1], t)
                        }
                    }
                }))
            }, _t.prototype.cacheResult = Et.prototype.cacheResult = It.prototype.cacheResult = Ht.prototype.cacheResult = Xt, t(Zt, pA), Zt.prototype.toString = function() {
                return this.__toString(Ae(this) + " {", "}")
            }, Zt.prototype.has = function(A) {
                return this._defaultValues.hasOwnProperty(A)
            }, Zt.prototype.get = function(A, t) {
                if (!this.has(A)) return t;
                var e = this._defaultValues[A];
                return this._map ? this._map.get(A, e) : e
            }, Zt.prototype.clear = function() {
                if (this.__ownerID) return this._map && this._map.clear(), this;
                var A = this.constructor;
                return A._empty || (A._empty = $t(this, VA()))
            }, Zt.prototype.set = function(A, t) {
                if (!this.has(A)) throw new Error('Cannot set unknown key "' + A + '" on ' + Ae(this));
                if (this._map && !this._map.has(A) && t === this._defaultValues[A]) return this;
                var e = this._map && this._map.set(A, t);
                return this.__ownerID || e === this._map ? this : $t(this, e)
            }, Zt.prototype.remove = function(A) {
                if (!this.has(A)) return this;
                var t = this._map && this._map.remove(A);
                return this.__ownerID || t === this._map ? this : $t(this, t)
            }, Zt.prototype.wasAltered = function() {
                return this._map.wasAltered()
            }, Zt.prototype.__iterator = function(A, t) {
                var e = this;
                return n(this._defaultValues).map((function(A, t) {
                    return e.get(t)
                })).__iterator(A, t)
            }, Zt.prototype.__iterate = function(A, t) {
                var e = this;
                return n(this._defaultValues).map((function(A, t) {
                    return e.get(t)
                })).__iterate(A, t)
            }, Zt.prototype.__ensureOwner = function(A) {
                if (A === this.__ownerID) return this;
                var t = this._map && this._map.__ensureOwner(A);
                return A ? $t(this, t, A) : (this.__ownerID = A, this._map = t, this)
            };
            var qt = Zt.prototype;

            function $t(A, t, e) {
                var n = Object.create(Object.getPrototypeOf(A));
                return n._map = t, n.__ownerID = e, n
            }

            function Ae(A) {
                return A._name || A.constructor.name || "Record"
            }

            function te(A, t) {
                Object.defineProperty(A, t, {
                    get: function() {
                        return this.get(t)
                    },
                    set: function(A) {
                        cA(this.__ownerID, "Cannot set on an immutable record."), this.set(t, A)
                    }
                })
            }

            function ee(A) {
                return null == A ? ue() : ne(A) && !l(A) ? A : ue().withMutations((function(t) {
                    var e = o(A);
                    HA(e.size), e.forEach((function(A) {
                        return t.add(A)
                    }))
                }))
            }

            function ne(A) {
                return !(!A || !A[oe])
            }
            qt.delete = qt.remove, qt.deleteIn = qt.removeIn = TA.removeIn, qt.merge = TA.merge, qt.mergeWith = TA.mergeWith, qt.mergeIn = TA.mergeIn, qt.mergeDeep = TA.mergeDeep, qt.mergeDeepWith = TA.mergeDeepWith, qt.mergeDeepIn = TA.mergeDeepIn, qt.setIn = TA.setIn, qt.update = TA.update, qt.updateIn = TA.updateIn, qt.withMutations = TA.withMutations, qt.asMutable = TA.asMutable, qt.asImmutable = TA.asImmutable, t(ee, BA), ee.of = function() {
                return this(arguments)
            }, ee.fromKeys = function(A) {
                return this(n(A).keySeq())
            }, ee.prototype.toString = function() {
                return this.__toString("Set {", "}")
            }, ee.prototype.has = function(A) {
                return this._map.has(A)
            }, ee.prototype.add = function(A) {
                return se(this, this._map.set(A, !0))
            }, ee.prototype.remove = function(A) {
                return se(this, this._map.remove(A))
            }, ee.prototype.clear = function() {
                return se(this, this._map.clear())
            }, ee.prototype.union = function() {
                var t = A.call(arguments, 0);
                return 0 === (t = t.filter((function(A) {
                    return 0 !== A.size
                }))).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations((function(A) {
                    for (var e = 0; e < t.length; e++) o(t[e]).forEach((function(t) {
                        return A.add(t)
                    }))
                })) : this.constructor(t[0])
            }, ee.prototype.intersect = function() {
                var t = A.call(arguments, 0);
                if (0 === t.length) return this;
                t = t.map((function(A) {
                    return o(A)
                }));
                var e = this;
                return this.withMutations((function(A) {
                    e.forEach((function(e) {
                        t.every((function(A) {
                            return A.includes(e)
                        })) || A.remove(e)
                    }))
                }))
            }, ee.prototype.subtract = function() {
                var t = A.call(arguments, 0);
                if (0 === t.length) return this;
                t = t.map((function(A) {
                    return o(A)
                }));
                var e = this;
                return this.withMutations((function(A) {
                    e.forEach((function(e) {
                        t.some((function(A) {
                            return A.includes(e)
                        })) && A.remove(e)
                    }))
                }))
            }, ee.prototype.merge = function() {
                return this.union.apply(this, arguments)
            }, ee.prototype.mergeWith = function(t) {
                var e = A.call(arguments, 1);
                return this.union.apply(this, e)
            }, ee.prototype.sort = function(A) {
                return ce(Rt(this, A))
            }, ee.prototype.sortBy = function(A, t) {
                return ce(Rt(this, t, A))
            }, ee.prototype.wasAltered = function() {
                return this._map.wasAltered()
            }, ee.prototype.__iterate = function(A, t) {
                var e = this;
                return this._map.__iterate((function(t, n) {
                    return A(n, n, e)
                }), t)
            }, ee.prototype.__iterator = function(A, t) {
                return this._map.map((function(A, t) {
                    return t
                })).__iterator(A, t)
            }, ee.prototype.__ensureOwner = function(A) {
                if (A === this.__ownerID) return this;
                var t = this._map.__ensureOwner(A);
                return A ? this.__make(t, A) : (this.__ownerID = A, this._map = t, this)
            }, ee.isSet = ne;
            var re, oe = "@@__IMMUTABLE_SET__@@",
                ie = ee.prototype;

            function se(A, t) {
                return A.__ownerID ? (A.size = t.size, A._map = t, A) : t === A._map ? A : 0 === t.size ? A.__empty() : A.__make(t)
            }

            function ae(A, t) {
                var e = Object.create(ie);
                return e.size = A ? A.size : 0, e._map = A, e.__ownerID = t, e
            }

            function ue() {
                return re || (re = ae(VA()))
            }

            function ce(A) {
                return null == A ? Be() : le(A) ? A : Be().withMutations((function(t) {
                    var e = o(A);
                    HA(e.size), e.forEach((function(A) {
                        return t.add(A)
                    }))
                }))
            }

            function le(A) {
                return ne(A) && l(A)
            }
            ie[oe] = !0, ie.delete = ie.remove, ie.mergeDeep = ie.merge, ie.mergeDeepWith = ie.mergeWith, ie.withMutations = TA.withMutations, ie.asMutable = TA.asMutable, ie.asImmutable = TA.asImmutable, ie.__empty = ue, ie.__make = ae, t(ce, ee), ce.of = function() {
                return this(arguments)
            }, ce.fromKeys = function(A) {
                return this(n(A).keySeq())
            }, ce.prototype.toString = function() {
                return this.__toString("OrderedSet {", "}")
            }, ce.isOrderedSet = le;
            var fe, pe = ce.prototype;

            function he(A, t) {
                var e = Object.create(pe);
                return e.size = A ? A.size : 0, e._map = A, e.__ownerID = t, e
            }

            function Be() {
                return fe || (fe = he(Ft()))
            }

            function ge(A) {
                return null == A ? Qe() : de(A) ? A : Qe().unshiftAll(A)
            }

            function de(A) {
                return !(!A || !A[ve])
            }
            pe[B] = !0, pe.__empty = Be, pe.__make = he, t(ge, hA), ge.of = function() {
                return this(arguments)
            }, ge.prototype.toString = function() {
                return this.__toString("Stack [", "]")
            }, ge.prototype.get = function(A, t) {
                var e = this._head;
                for (A = U(this, A); e && A--;) e = e.next;
                return e ? e.value : t
            }, ge.prototype.peek = function() {
                return this._head && this._head.value
            }, ge.prototype.push = function() {
                if (0 === arguments.length) return this;
                for (var A = this.size + arguments.length, t = this._head, e = arguments.length - 1; e >= 0; e--) t = {
                    value: arguments[e],
                    next: t
                };
                return this.__ownerID ? (this.size = A, this._head = t, this.__hash = void 0, this.__altered = !0, this) : me(A, t)
            }, ge.prototype.pushAll = function(A) {
                if (0 === (A = r(A)).size) return this;
                HA(A.size);
                var t = this.size,
                    e = this._head;
                return A.reverse().forEach((function(A) {
                    t++, e = {
                        value: A,
                        next: e
                    }
                })), this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : me(t, e)
            }, ge.prototype.pop = function() {
                return this.slice(1)
            }, ge.prototype.unshift = function() {
                return this.push.apply(this, arguments)
            }, ge.prototype.unshiftAll = function(A) {
                return this.pushAll(A)
            }, ge.prototype.shift = function() {
                return this.pop.apply(this, arguments)
            }, ge.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : Qe()
            }, ge.prototype.slice = function(A, t) {
                if (b(A, t, this.size)) return this;
                var e = E(A, this.size);
                if (_(t, this.size) !== this.size) return hA.prototype.slice.call(this, A, t);
                for (var n = this.size - e, r = this._head; e--;) r = r.next;
                return this.__ownerID ? (this.size = n, this._head = r, this.__hash = void 0, this.__altered = !0, this) : me(n, r)
            }, ge.prototype.__ensureOwner = function(A) {
                return A === this.__ownerID ? this : A ? me(this.size, this._head, A, this.__hash) : (this.__ownerID = A, this.__altered = !1, this)
            }, ge.prototype.__iterate = function(A, t) {
                if (t) return this.reverse().__iterate(A);
                for (var e = 0, n = this._head; n && !1 !== A(n.value, e++, this);) n = n.next;
                return e
            }, ge.prototype.__iterator = function(A, t) {
                if (t) return this.reverse().__iterator(A);
                var e = 0,
                    n = this._head;
                return new T((function() {
                    if (n) {
                        var t = n.value;
                        return n = n.next, D(A, e++, t)
                    }
                    return {
                        value: void 0,
                        done: !0
                    }
                }))
            }, ge.isStack = de;
            var we, ve = "@@__IMMUTABLE_STACK__@@",
                ye = ge.prototype;

            function me(A, t, e, n) {
                var r = Object.create(ye);
                return r.size = A, r._head = t, r.__ownerID = e, r.__hash = n, r.__altered = !1, r
            }

            function Qe() {
                return we || (we = me(0))
            }

            function Ce(A, t) {
                var e = function(e) {
                    A.prototype[e] = t[e]
                };
                return Object.keys(t).forEach(e), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(e), A
            }
            ye[ve] = !0, ye.withMutations = TA.withMutations, ye.asMutable = TA.asMutable, ye.asImmutable = TA.asImmutable, ye.wasAltered = TA.wasAltered, e.Iterator = T, Ce(e, {
                toArray: function() {
                    HA(this.size);
                    var A = new Array(this.size || 0);
                    return this.valueSeq().__iterate((function(t, e) {
                        A[e] = t
                    })), A
                },
                toIndexedSeq: function() {
                    return new _t(this)
                },
                toJS: function() {
                    return this.toSeq().map((function(A) {
                        return A && "function" == typeof A.toJS ? A.toJS() : A
                    })).__toJS()
                },
                toJSON: function() {
                    return this.toSeq().map((function(A) {
                        return A && "function" == typeof A.toJSON ? A.toJSON() : A
                    })).__toJS()
                },
                toKeyedSeq: function() {
                    return new Et(this, !0)
                },
                toMap: function() {
                    return OA(this.toKeyedSeq())
                },
                toObject: function() {
                    HA(this.size);
                    var A = {};
                    return this.__iterate((function(t, e) {
                        A[e] = t
                    })), A
                },
                toOrderedMap: function() {
                    return Qt(this.toKeyedSeq())
                },
                toOrderedSet: function() {
                    return ce(a(this) ? this.valueSeq() : this)
                },
                toSet: function() {
                    return ee(a(this) ? this.valueSeq() : this)
                },
                toSetSeq: function() {
                    return new It(this)
                },
                toSeq: function() {
                    return u(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq()
                },
                toStack: function() {
                    return ge(a(this) ? this.valueSeq() : this)
                },
                toList: function() {
                    return ot(a(this) ? this.valueSeq() : this)
                },
                toString: function() {
                    return "[Iterable]"
                },
                __toString: function(A, t) {
                    return 0 === this.size ? A + t : A + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
                },
                concat: function() {
                    var t = A.call(arguments, 0);
                    return jt(this, Kt(this, t))
                },
                includes: function(A) {
                    return this.some((function(t) {
                        return sA(t, A)
                    }))
                },
                entries: function() {
                    return this.__iterator(2)
                },
                every: function(A, t) {
                    HA(this.size);
                    var e = !0;
                    return this.__iterate((function(n, r, o) {
                        if (!A.call(t, n, r, o)) return e = !1, !1
                    })), e
                },
                filter: function(A, t) {
                    return jt(this, xt(this, A, t, !0))
                },
                find: function(A, t, e) {
                    var n = this.findEntry(A, t);
                    return n ? n[1] : e
                },
                forEach: function(A, t) {
                    return HA(this.size), this.__iterate(t ? A.bind(t) : A)
                },
                join: function(A) {
                    HA(this.size), A = void 0 !== A ? "" + A : ",";
                    var t = "",
                        e = !0;
                    return this.__iterate((function(n) {
                        e ? e = !1 : t += A, t += null != n ? n.toString() : ""
                    })), t
                },
                keys: function() {
                    return this.__iterator(0)
                },
                map: function(A, t) {
                    return jt(this, St(this, A, t))
                },
                reduce: function(A, t, e) {
                    var n, r;
                    return HA(this.size), arguments.length < 2 ? r = !0 : n = t, this.__iterate((function(t, o, i) {
                        r ? (r = !1, n = t) : n = A.call(e, n, t, o, i)
                    })), n
                },
                reduceRight: function(A, t, e) {
                    var n = this.toKeyedSeq().reverse();
                    return n.reduce.apply(n, arguments)
                },
                reverse: function() {
                    return jt(this, Lt(this, !0))
                },
                slice: function(A, t) {
                    return jt(this, Tt(this, A, t, !0))
                },
                some: function(A, t) {
                    return !this.every(_e(A), t)
                },
                sort: function(A) {
                    return jt(this, Rt(this, A))
                },
                values: function() {
                    return this.__iterator(1)
                },
                butLast: function() {
                    return this.slice(0, -1)
                },
                isEmpty: function() {
                    return void 0 !== this.size ? 0 === this.size : !this.some((function() {
                        return !0
                    }))
                },
                count: function(A, t) {
                    return C(A ? this.toSeq().filter(A, t) : this)
                },
                countBy: function(A, t) {
                    return function(A, t, e) {
                        var n = OA().asMutable();
                        return A.__iterate((function(r, o) {
                            n.update(t.call(e, r, o, A), 0, (function(A) {
                                return A + 1
                            }))
                        })), n.asImmutable()
                    }(this, A, t)
                },
                equals: function(A) {
                    return aA(this, A)
                },
                entrySeq: function() {
                    var A = this;
                    if (A._cache) return new J(A._cache);
                    var t = A.toSeq().map(Ee).toIndexedSeq();
                    return t.fromEntrySeq = function() {
                        return A.toSeq()
                    }, t
                },
                filterNot: function(A, t) {
                    return this.filter(_e(A), t)
                },
                findEntry: function(A, t, e) {
                    var n = e;
                    return this.__iterate((function(e, r, o) {
                        if (A.call(t, e, r, o)) return n = [r, e], !1
                    })), n
                },
                findKey: function(A, t) {
                    var e = this.findEntry(A, t);
                    return e && e[0]
                },
                findLast: function(A, t, e) {
                    return this.toKeyedSeq().reverse().find(A, t, e)
                },
                findLastEntry: function(A, t, e) {
                    return this.toKeyedSeq().reverse().findEntry(A, t, e)
                },
                findLastKey: function(A, t) {
                    return this.toKeyedSeq().reverse().findKey(A, t)
                },
                first: function() {
                    return this.find(F)
                },
                flatMap: function(A, t) {
                    return jt(this, function(A, t, e) {
                        var n = Wt(A);
                        return A.toSeq().map((function(r, o) {
                            return n(t.call(e, r, o, A))
                        })).flatten(!0)
                    }(this, A, t))
                },
                flatten: function(A) {
                    return jt(this, Mt(this, A, !0))
                },
                fromEntrySeq: function() {
                    return new Ht(this)
                },
                get: function(A, t) {
                    return this.find((function(t, e) {
                        return sA(e, A)
                    }), void 0, t)
                },
                getIn: function(A, t) {
                    for (var e, n = this, r = zt(A); !(e = r.next()).done;) {
                        var o = e.value;
                        if ((n = n && n.get ? n.get(o, g) : g) === g) return t
                    }
                    return n
                },
                groupBy: function(A, t) {
                    return function(A, t, e) {
                        var n = a(A),
                            r = (l(A) ? Qt() : OA()).asMutable();
                        A.__iterate((function(o, i) {
                            r.update(t.call(e, o, i, A), (function(A) {
                                return (A = A || []).push(n ? [i, o] : o), A
                            }))
                        }));
                        var o = Wt(A);
                        return r.map((function(t) {
                            return jt(A, o(t))
                        }))
                    }(this, A, t)
                },
                has: function(A) {
                    return this.get(A, g) !== g
                },
                hasIn: function(A) {
                    return this.getIn(A, g) !== g
                },
                isSubset: function(A) {
                    return A = "function" == typeof A.includes ? A : e(A), this.every((function(t) {
                        return A.includes(t)
                    }))
                },
                isSuperset: function(A) {
                    return (A = "function" == typeof A.isSubset ? A : e(A)).isSubset(this)
                },
                keyOf: function(A) {
                    return this.findKey((function(t) {
                        return sA(t, A)
                    }))
                },
                keySeq: function() {
                    return this.toSeq().map(be).toIndexedSeq()
                },
                last: function() {
                    return this.toSeq().reverse().first()
                },
                lastKeyOf: function(A) {
                    return this.toKeyedSeq().reverse().keyOf(A)
                },
                max: function(A) {
                    return kt(this, A)
                },
                maxBy: function(A, t) {
                    return kt(this, t, A)
                },
                min: function(A) {
                    return kt(this, A ? Ie(A) : Se)
                },
                minBy: function(A, t) {
                    return kt(this, t ? Ie(t) : Se, A)
                },
                rest: function() {
                    return this.slice(1)
                },
                skip: function(A) {
                    return this.slice(Math.max(0, A))
                },
                skipLast: function(A) {
                    return jt(this, this.toSeq().reverse().skip(A).reverse())
                },
                skipWhile: function(A, t) {
                    return jt(this, Dt(this, A, t, !0))
                },
                skipUntil: function(A, t) {
                    return this.skipWhile(_e(A), t)
                },
                sortBy: function(A, t) {
                    return jt(this, Rt(this, t, A))
                },
                take: function(A) {
                    return this.slice(0, Math.max(0, A))
                },
                takeLast: function(A) {
                    return jt(this, this.toSeq().reverse().take(A).reverse())
                },
                takeWhile: function(A, t) {
                    return jt(this, function(A, t, e) {
                        var n = Jt(A);
                        return n.__iterateUncached = function(n, r) {
                            var o = this;
                            if (r) return this.cacheResult().__iterate(n, r);
                            var i = 0;
                            return A.__iterate((function(A, r, s) {
                                return t.call(e, A, r, s) && ++i && n(A, r, o)
                            })), i
                        }, n.__iteratorUncached = function(n, r) {
                            var o = this;
                            if (r) return this.cacheResult().__iterator(n, r);
                            var i = A.__iterator(2, r),
                                s = !0;
                            return new T((function() {
                                if (!s) return {
                                    value: void 0,
                                    done: !0
                                };
                                var A = i.next();
                                if (A.done) return A;
                                var r = A.value,
                                    a = r[0],
                                    u = r[1];
                                return t.call(e, u, a, o) ? 2 === n ? A : D(n, a, u, A) : (s = !1, {
                                    value: void 0,
                                    done: !0
                                })
                            }))
                        }, n
                    }(this, A, t))
                },
                takeUntil: function(A, t) {
                    return this.takeWhile(_e(A), t)
                },
                valueSeq: function() {
                    return this.toIndexedSeq()
                },
                hashCode: function() {
                    return this.__hash || (this.__hash = function(A) {
                        if (A.size === 1 / 0) return 0;
                        var t = l(A),
                            e = a(A),
                            n = t ? 1 : 0;
                        return function(A, t) {
                            return t = gA(t, 3432918353), t = gA(t << 15 | t >>> -15, 461845907), t = gA(t << 13 | t >>> -13, 5), t = gA((t = (t + 3864292196 | 0) ^ A) ^ t >>> 16, 2246822507), t = dA((t = gA(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
                        }(A.__iterate(e ? t ? function(A, t) {
                            n = 31 * n + Le(wA(A), wA(t)) | 0
                        } : function(A, t) {
                            n = n + Le(wA(A), wA(t)) | 0
                        } : t ? function(A) {
                            n = 31 * n + wA(A) | 0
                        } : function(A) {
                            n = n + wA(A) | 0
                        }), n)
                    }(this))
                }
            });
            var Ue = e.prototype;
            Ue[f] = !0, Ue[x] = Ue.values, Ue.__toJS = Ue.toArray, Ue.__toStringMapper = He, Ue.inspect = Ue.toSource = function() {
                return this.toString()
            }, Ue.chain = Ue.flatMap, Ue.contains = Ue.includes, Ce(n, {
                flip: function() {
                    return jt(this, Ot(this))
                },
                mapEntries: function(A, t) {
                    var e = this,
                        n = 0;
                    return jt(this, this.toSeq().map((function(r, o) {
                        return A.call(t, [o, r], n++, e)
                    })).fromEntrySeq())
                },
                mapKeys: function(A, t) {
                    var e = this;
                    return jt(this, this.toSeq().flip().map((function(n, r) {
                        return A.call(t, n, r, e)
                    })).flip())
                }
            });
            var Fe = n.prototype;

            function be(A, t) {
                return t
            }

            function Ee(A, t) {
                return [t, A]
            }

            function _e(A) {
                return function() {
                    return !A.apply(this, arguments)
                }
            }

            function Ie(A) {
                return function() {
                    return -A.apply(this, arguments)
                }
            }

            function He(A) {
                return "string" == typeof A ? JSON.stringify(A) : String(A)
            }

            function Oe() {
                return Q(arguments)
            }

            function Se(A, t) {
                return A < t ? 1 : A > t ? -1 : 0
            }

            function Le(A, t) {
                return A ^ t + 2654435769 + (A << 6) + (A >> 2) | 0
            }
            return Fe[p] = !0, Fe[x] = Ue.entries, Fe.__toJS = Ue.toObject, Fe.__toStringMapper = function(A, t) {
                return JSON.stringify(t) + ": " + He(A)
            }, Ce(r, {
                toKeyedSeq: function() {
                    return new Et(this, !1)
                },
                filter: function(A, t) {
                    return jt(this, xt(this, A, t, !1))
                },
                findIndex: function(A, t) {
                    var e = this.findEntry(A, t);
                    return e ? e[0] : -1
                },
                indexOf: function(A) {
                    var t = this.keyOf(A);
                    return void 0 === t ? -1 : t
                },
                lastIndexOf: function(A) {
                    var t = this.lastKeyOf(A);
                    return void 0 === t ? -1 : t
                },
                reverse: function() {
                    return jt(this, Lt(this, !1))
                },
                slice: function(A, t) {
                    return jt(this, Tt(this, A, t, !1))
                },
                splice: function(A, t) {
                    var e = arguments.length;
                    if (t = Math.max(0 | t, 0), 0 === e || 2 === e && !t) return this;
                    A = E(A, A < 0 ? this.count() : this.size);
                    var n = this.slice(0, A);
                    return jt(this, 1 === e ? n : n.concat(Q(arguments, 2), this.slice(A + t)))
                },
                findLastIndex: function(A, t) {
                    var e = this.findLastEntry(A, t);
                    return e ? e[0] : -1
                },
                first: function() {
                    return this.get(0)
                },
                flatten: function(A) {
                    return jt(this, Mt(this, A, !1))
                },
                get: function(A, t) {
                    return (A = U(this, A)) < 0 || this.size === 1 / 0 || void 0 !== this.size && A > this.size ? t : this.find((function(t, e) {
                        return e === A
                    }), void 0, t)
                },
                has: function(A) {
                    return (A = U(this, A)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || A < this.size : -1 !== this.indexOf(A))
                },
                interpose: function(A) {
                    return jt(this, function(A, t) {
                        var e = Jt(A);
                        return e.size = A.size && 2 * A.size - 1, e.__iterateUncached = function(e, n) {
                            var r = this,
                                o = 0;
                            return A.__iterate((function(A, n) {
                                return (!o || !1 !== e(t, o++, r)) && !1 !== e(A, o++, r)
                            }), n), o
                        }, e.__iteratorUncached = function(e, n) {
                            var r, o = A.__iterator(1, n),
                                i = 0;
                            return new T((function() {
                                return (!r || i % 2) && (r = o.next()).done ? r : i % 2 ? D(e, i++, t) : D(e, i++, r.value, r)
                            }))
                        }, e
                    }(this, A))
                },
                interleave: function() {
                    var A = [this].concat(Q(arguments)),
                        t = Pt(this.toSeq(), V.of, A),
                        e = t.flatten(!0);
                    return t.size && (e.size = t.size * A.length), jt(this, e)
                },
                keySeq: function() {
                    return lA(0, this.size)
                },
                last: function() {
                    return this.get(-1)
                },
                skipWhile: function(A, t) {
                    return jt(this, Dt(this, A, t, !1))
                },
                zip: function() {
                    var A = [this].concat(Q(arguments));
                    return jt(this, Pt(this, Oe, A))
                },
                zipWith: function(A) {
                    var t = Q(arguments);
                    return t[0] = this, jt(this, Pt(this, A, t))
                }
            }), r.prototype[h] = !0, r.prototype[B] = !0, Ce(o, {
                get: function(A, t) {
                    return this.has(A) ? A : t
                },
                includes: function(A) {
                    return this.has(A)
                },
                keySeq: function() {
                    return this.valueSeq()
                }
            }), o.prototype.has = Ue.includes, o.prototype.contains = o.prototype.includes, Ce(G, n.prototype), Ce(V, r.prototype), Ce(W, o.prototype), Ce(pA, n.prototype), Ce(hA, r.prototype), Ce(BA, o.prototype), {
                Iterable: e,
                Seq: j,
                Collection: fA,
                Map: OA,
                OrderedMap: Qt,
                List: ot,
                Stack: ge,
                Set: ee,
                OrderedSet: ce,
                Record: Zt,
                Range: lA,
                Repeat: uA,
                is: sA,
                fromJS: rA
            }
        }, "object" === i(t) && void 0 !== A ? A.exports = o() : void 0 === (r = "function" == typeof(n = o) ? n.call(t, e, t, A) : n) || (A.exports = r)
    }, function(A, t, e) {}, function(A, t, e) {}, function(A, t, e) {}, function(A, t, e) {
        "use strict";
        e.r(t);
        var n, r, o = e(9),
            i = e.n(o),
            s = e(6),
            a = e.n(s),
            u = e(23),
            c = e.n(u),
            l = e(43),
            f = e.n(l);
        ! function(A) {
            A[A.UN_LIGHT = 0] = "UN_LIGHT", A[A.HALF = 1] = "HALF", A[A.LIGHT = 2] = "LIGHT"
        }(n || (n = {})),
        function(A) {
            A[A.HIDE = 0] = "HIDE", A[A.SHOW = 1] = "SHOW"
        }(r || (r = {}));
        var p = ["x", "y", "id", "text", "tip", "bg", "time", "isActive", "offsetX", "offsetY", "parentW", "pre", "suffix", "images", "level", "lightStatus", "annotationStatus"],
            h = function(A) {
                this.option = A
            };
        h.prototype.log = function() {
            // this.option.showLog && console.log.apply(console, arguments)
        }, h.prototype.debug = function() {
            // this.option.showLog && console.log.apply(console, arguments)
        }, h.prototype.error = function() {
            // this.option.showLog && console.error.apply(console, arguments)
        };
        var B = new h({
                showLog: !0
            }),
            g = new f.a,
            d = "ontouchstart" in window || window.innerWidth < 600;

        function w() {
            var A = document.querySelector("pagenote-root");
            return A || (A = document.createElement("pagenote-root"), (document.body || document.documentElement).appendChild(A)), A
        }

        function v() {
            var A = w(),
                t = A.getBoundingClientRect();
            return {
                left: t.left + L().x,
                top: t.top + L().y,
                scrollHeight: A.parentElement.scrollHeight
            }
        }
        var y = function(A, t) {
            var e = document.getSelection();
            if (0 !== e.rangeCount) {
                var o = e.getRangeAt(0),
                    i = e.anchorNode ? o.commonAncestorContainer : null;
                if (i && 3 === i.nodeType && (i = i.parentNode), !(!i || !i.tagName) && !(j(i) || j(e.anchorNode) || j(e.focusNode))) {
                    var s = !0;
                    i && "true" !== i.contentEditable || (s = !1);
                    var a = [],
                        u = o.cloneContents();
                    if (A)
                        for (var c = u.children, l = 0; l < c.length; l++) {
                            var f = c[l];
                            if ("IMG" === f.tagName)
                                for (var p = 'img[src="'.concat(f.src, '"]'), h = i.querySelectorAll(p), B = 0; B < h.length; B++) {
                                    var d = h[B];
                                    if (e.containsNode(d)) {
                                        var w = g.getUniqueId(d).wid,
                                            y = d.src;
                                        a.push({
                                            id: w,
                                            src: y,
                                            alt: d.alt
                                        });
                                        break
                                    }
                                }
                        }
                    var m = e.toString().trim();
                    if (m || a.length) {
                        var Q = o.startContainer.textContent.substr(0, o.startOffset),
                            C = o.endContainer.textContent.substr(o.endOffset, 10);
                        if (!Q) {
                            var U = i.previousSibling;
                            U && i.contains(U) && (Q = U.textContent)
                        }
                        if (!C) {
                            var F = i.nextSibling;
                            F && i.contains(F) && (C = F.textContent)
                        }
                        var b = e.getRangeAt(0).getClientRects(),
                            E = b[b.length - 1];
                        if (E) {
                            var _ = t[0],
                                I = t[1],
                                H = 1,
                                O = I.x - _.x,
                                S = I.y - _.y;
                            if (O * S >= 0) H = O >= 0 ? 1 : -1;
                            else H = (Math.abs(O) - Math.abs(S) >= 0 ? O : S) >= 0 ? 1 : -1; - 1 === H && (E = b[0]);
                            var L = window.scrollY + E.y,
                                x = 1 === H ? E.width + 6 : -32,
                                T = 1 === H ? E.height + 4 : -32,
                                D = Math.max(Math.min(E.x + x, window.innerWidth - 150), 20),
                                K = L + T,
                                M = g.getUniqueId(i),
                                R = parseInt(D),
                                k = parseInt(K),
                                N = v(),
                                P = k - N.top;
                            return {
                                x: R - N.left,
                                y: Math.min(P, L + document.documentElement.scrollHeight - 60),
                                offsetX: .5,
                                offsetY: .9,
                                pre: Q,
                                suffix: C,
                                text: m,
                                tip: "",
                                time: (new Date).getTime(),
                                id: M.wid,
                                isActive: !1,
                                bg: "",
                                parentW: parseInt(i.clientWidth),
                                canHighlight: s,
                                selectionElements: u,
                                images: a,
                                annotationStatus: r.HIDE,
                                lightStatus: n.HALF
                            }
                        }
                    }
                }
            }

            function j(A) {
                if (!A || !A.tagName) return !1;
                var t = A.tagName.toLowerCase();
                return !!(["light"].includes(t) || t.indexOf("pagenote") > -1) || (A.parentNode ? j(A.parentNode) : void 0)
            }
        };

        function m(A) {
            var t = {};
            try {
                t = JSON.parse(decodeURI(atob(A)))
            } catch (A) {}
            return t
        }

        function Q(A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
                e = !0;
            return function() {
                var n = arguments,
                    r = this;
                e && (e = !1, setTimeout((function() {
                    A.apply(r, n), e = !0
                }), t))
            }
        }

        function C(A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
                e = null;
            return function() {
                var n = arguments,
                    r = this;
                clearTimeout(e), e = setTimeout((function() {
                    A.apply(r, n)
                }), t)
            }
        }

        function U() {
            var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!A) return "#000000";
            var t = [],
                e = 1;
            A.indexOf("rgb") > -1 ? (t = A.match(/\((.*)\)/)[1].split(","), void 0 !== (t = [parseInt(t[0]), parseInt(t[1]), parseInt(t[2])])[3] && (e = t[3])) : (t = [(A = A.replace("#", "")).substr(0, 2), A.substr(2, 2), A.substr(4, 2), 1], t = [parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16)]);
            var n = t[0],
                r = t[1],
                o = t[2],
                i = (.3 * n + .59 * r + .11 * o) * Math.min(e, 1);
            return {
                rgb: t,
                textColor: i >= 180 ? "#000000" : "#ffffff",
                y: i
            }
        }
        var F = e(18),
            b = e.n(F),
            E = e(44),
            _ = e.n(E),
            I = function() {
                var A, t, e = (A = document.createElement("canvas"), {
                    canvas: !!(t = A.getContext("2d")),
                    imageData: !!t.getImageData,
                    dataURL: !!A.toDataURL,
                    btoa: !!window.btoa
                });

                function n(A, t, e) {
                    var n = A.width,
                        r = A.height;
                    null == t && (t = n), null == e && (e = r);
                    var o = document.createElement("canvas"),
                        i = o.getContext("2d");
                    return o.width = t, o.height = e, i.drawImage(A, 0, 0, n, r, 0, 0, t, e), o
                }

                function r(A, t, e, r) {
                    return (A = n(A, e, r)).toDataURL(t)
                }

                function o(A) {
                    document.location.href = A
                }

                function i(A) {
                    var t = document.createElement("img");
                    return t.src = A, t
                }

                function s(A) {
                    return "image/" + (A = A.toLowerCase().replace(/jpg/i, "jpeg")).match(/png|jpeg|bmp|gif/)[0]
                }

                function a(A) {
                    if (!window.btoa) throw "btoa undefined";
                    var t = "";
                    if ("string" == typeof A) t = A;
                    else
                        for (var e = 0; e < A.length; e++) t += String.fromCharCode(A[e]);
                    return btoa(t)
                }

                function u(A) {
                    var t = A.width,
                        e = A.height;
                    return A.getContext("2d").getImageData(0, 0, t, e)
                }

                function c(A, t) {
                    return "data:" + t + ";base64," + A
                }
                var l = function(A) {
                        var t = A.width,
                            e = A.height,
                            n = t * e * 3,
                            r = n + 54,
                            o = [66, 77, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0],
                            i = [40, 0, 0, 0, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            s = (4 - 3 * t % 4) % 4,
                            u = A.data,
                            c = "",
                            l = t << 2,
                            f = e,
                            p = String.fromCharCode;
                        do {
                            for (var h = l * (f - 1), B = "", g = 0; g < t; g++) {
                                var d = g << 2;
                                B += p(u[h + d + 2]) + p(u[h + d + 1]) + p(u[h + d])
                            }
                            for (var w = 0; w < s; w++) B += String.fromCharCode(0);
                            c += B
                        } while (--f);
                        return a(o.concat(i)) + a(c)
                    },
                    f = function(A, t, i, a) {
                        if (e.canvas && e.dataURL)
                            if ("string" == typeof A && (A = document.getElementById(A)), null == a && (a = "png"), a = s(a), /bmp/.test(a)) {
                                var f = u(n(A, t, i));
                                o(c(l(f), "image/octet-stream"))
                            } else {
                                o(r(A, a, t, i).replace(a, "image/octet-stream"))
                            }
                    },
                    p = function(A, t, o, a) {
                        if (e.canvas && e.dataURL) {
                            if ("string" == typeof A && (A = document.getElementById(A)), null == a && (a = "png"), a = s(a), /bmp/.test(a)) {
                                var f = u(n(A, t, o));
                                return i(c(l(f), "image/bmp"))
                            }
                            return i(r(A, a, t, o))
                        }
                    };
                return {
                    saveAsImage: f,
                    saveAsPNG: function(A, t, e) {
                        return f(A, t, e, "png")
                    },
                    saveAsJPEG: function(A, t, e) {
                        return f(A, t, e, "jpeg")
                    },
                    saveAsGIF: function(A, t, e) {
                        return f(A, t, e, "gif")
                    },
                    saveAsBMP: function(A, t, e) {
                        return f(A, t, e, "bmp")
                    },
                    convertToImage: p,
                    convertToPNG: function(A, t, e) {
                        return p(A, t, e, "png")
                    },
                    convertToJPEG: function(A, t, e) {
                        return p(A, t, e, "jpeg")
                    },
                    convertToGIF: function(A, t, e) {
                        return p(A, t, e, "gif")
                    },
                    convertToBMP: function(A, t, e) {
                        return p(A, t, e, "bmp")
                    }
                }
            }();
        window;
        var H, O = function(A, t, e, n) {
                clearInterval(H);
                var r = function() {
                    clearInterval(H), "function" == typeof n && n()
                };
                A || r();
                document.documentElement.clientHeight;
                if (A && A.scrollIntoView) return A.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                }), void setTimeout((function() {
                    return r()
                }), 100);
                H = setInterval((function() {
                    var A, n, o = L(),
                        i = o.x,
                        s = o.y;
                    A = i + (t - i) / 6, n = s + (e - s) / 6, S.scrollLeft = A, S.scrollTop = n, window.scrollTo(A, n);
                    var a = L(),
                        u = a.x;
                    s === a.y && i === u && r()
                }), 30)
            },
            S = document.documentElement || document.body;

        function L() {
            return {
                x: window.pageXOffset || S.scrollLeft || S.scrollLeft,
                y: window.pageYOffset || S.scrollTop || S.scrollTop
            }
        }

        function x(A) {
            for (; A.hasChildNodes();) A.removeChild(A.firstChild)
        }

        function T(A) {
            try {
                return navigator.clipboard.writeText(A)
            } catch (e) {
                var t = document.createElement("textarea");
                return t.textContent = A, document.body.appendChild(t), t.select(), document.execCommand("Copy", !1, null), document.body.removeChild(t), Promise.resolve()
            }
        }

        function D(A) {
            return new Promise((function(t, e) {
                _()(A, {
                    useCORS: !0,
                    ignoreElements: function(A) {
                        var t = A.tagName.toLowerCase().indexOf("pagenote") > -1,
                            e = getComputedStyle(A).opacity <= 0;
                        return t || e
                    }
                }).then((function(e) {
                    var n = I.convertToImage(e, A.offsetWidth, A.scrollHeight).src;
                    t(n)
                })).catch((function(A) {
                    e(A)
                }))
            }))
        }
        var K = function(A) {
            var t = document.createElement("pagenote-camera");
            t.innerHTML = "<div class='pagenote-camera-container'>\n                                  <div class='camera-top'>\n                                    <div class='zoom'></div>\n                                    <div class='mode-changer'></div>\n                                    <div class='sides'></div>\n                                    <div class='range-finder'></div>\n                                    <div class='focus'></div>\n                                    <div class='red'></div>\n                                    <div class='view-finder'></div>\n                                    <div class='flash'>\n                                      <div class='light'></div>\n                                    </div>\n                                  </div>\n                                  <div class='camera-mid'>\n                                    <div class='sensor'></div>\n                                    <div class='lens'></div> \n                                    <div class=\"tip\"><div>已拍照完成并保存，你可以在管理页进行查看、编辑。</div><button><a target=\"_blank\" href=\"https://pagenote.cn/me\">前往查看".concat("个快照", '</a></button><button id="close-camera">关闭摄像机<span id="count-down">8s</span></button></div>\n                                  </div>\n                                  <div class=\'camera-bottom\'></div>\n                                  <div class="camera-picture"><img src=').concat(A, ' alt=""></div>\n                                </div>'), document.body.appendChild(t);
            var e = 8,
                n = setInterval((function() {
                    document.getElementById("count-down").innerText = e + "s", --e <= 0 && r()
                }), 1e3);

            function r() {
                t.parentNode.removeChild(t), clearInterval(n)
            }
            document.getElementById("close-camera").onclick = r
        };

        function M(A) {
            if (window.getSelection) A.focus(), (t = window.getSelection()).selectAllChildren(A), t.collapseToEnd();
            else if (document.selection) {
                var t;
                (t = document.selection.createRange()).moveToElementText(A), t.collapse(!1), t.select()
            }
        }
        var R = e(45),
            k = "zh_CN",
            N = i()({}, "zh_CN", R),
            P = {
                setLang: function(A, t) {
                    N[A] = t
                },
                t: function(A) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        e = N[k] || N.zh_CN || {},
                        n = e[A] ? e[A].message : A;
                    return n = n.replace(/\$\{.*?\}/, t[0])
                },
                setLangType: function(A) {
                    k = A
                },
                getLangType: function() {
                    return k
                }
            };
        var j = "fold",
            G = "expand",
            V = e(0),
            W = e(5),
            J = e.n(W);

        function X() {
            return (X = Object.assign || function(A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n])
                }
                return A
            }).apply(this, arguments)
        }

        function Y(A) {
            return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }

        function z(A, t, e) {
            return t in A ? Object.defineProperty(A, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : A[t] = e, A
        }

        function Z(A, t) {
            var e = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(A, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function q(A) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Z(Object(e), !0).forEach((function(t) {
                    z(A, t, e[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : Z(Object(e)).forEach((function(t) {
                    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
                }))
            }
            return A
        }

        function $(A, t) {
            if (null == A) return {};
            var e, n, r = function(A, t) {
                if (null == A) return {};
                var e, n, r = {},
                    o = Object.keys(A);
                for (n = 0; n < o.length; n++) e = o[n], t.indexOf(e) >= 0 || (r[e] = A[e]);
                return r
            }(A, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(A);
                for (n = 0; n < o.length; n++) e = o[n], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(A, e) && (r[e] = A[e])
            }
            return r
        }
        var AA = e(1);

        function tA(A, t) {
            if (!(A instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function eA(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }

        function nA(A, t, e) {
            return t && eA(A.prototype, t), e && eA(A, e), A
        }

        function rA(A) {
            if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return A
        }

        function oA(A, t) {
            return (oA = Object.setPrototypeOf || function(A, t) {
                return A.__proto__ = t, A
            })(A, t)
        }

        function iA(A, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            A.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: A,
                    writable: !0,
                    configurable: !0
                }
            }), t && oA(A, t)
        }

        function sA(A) {
            return (sA = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
                return A.__proto__ || Object.getPrototypeOf(A)
            })(A)
        }

        function aA(A, t) {
            if (t && ("object" === a()(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return rA(A)
        }

        function uA(A) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (A) {
                    return !1
                }
            }();
            return function() {
                var e, n = sA(A);
                if (t) {
                    var r = sA(this).constructor;
                    e = Reflect.construct(n, arguments, r)
                } else e = n.apply(this, arguments);
                return aA(this, e)
            }
        }
        var cA = function(A) {
                return +setTimeout(A, 16)
            },
            lA = function(A) {
                return clearTimeout(A)
            };
        "undefined" != typeof window && "requestAnimationFrame" in window && (cA = function(A) {
            return window.requestAnimationFrame(A)
        }, lA = function(A) {
            return window.cancelAnimationFrame(A)
        });
        var fA = 0,
            pA = new Map;

        function hA(A) {
            pA.delete(A)
        }

        function BA(A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                e = fA += 1;

            function n(t) {
                if (0 === t) hA(e), A();
                else {
                    var r = cA((function() {
                        n(t - 1)
                    }));
                    pA.set(e, r)
                }
            }
            return n(t), e
        }

        function gA(A, t) {
            return !!A && A.contains(t)
        }

        function dA(A) {
            return A instanceof HTMLElement ? A : AA.default.findDOMNode(A)
        }
        BA.cancel = function(A) {
            var t = pA.get(A);
            return hA(t), lA(t)
        };
        var wA = e(46);

        function vA(A, t) {
            "function" == typeof A ? A(t) : "object" === Y(A) && A && "current" in A && (A.current = t)
        }

        function yA() {
            for (var A = arguments.length, t = new Array(A), e = 0; e < A; e++) t[e] = arguments[e];
            return function(A) {
                t.forEach((function(t) {
                    vA(t, A)
                }))
            }
        }

        function mA(A, t, e, n) {
            var r = AA.default.unstable_batchedUpdates ? function(A) {
                AA.default.unstable_batchedUpdates(e, A)
            } : e;
            return A.addEventListener && A.addEventListener(t, r, n), {
                remove: function() {
                    A.removeEventListener && A.removeEventListener(t, r)
                }
            }
        }

        function QA() {
            return !("undefined" == typeof window || !window.document || !window.document.createElement)
        }
        var CA = Object(AA.forwardRef)((function(A, t) {
                var e = A.didUpdate,
                    n = A.getContainer,
                    r = A.children,
                    o = Object(AA.useRef)();
                Object(AA.useImperativeHandle)(t, (function() {
                    return {}
                }));
                var i = Object(AA.useRef)(!1);
                return !i.current && QA() && (o.current = n(), i.current = !0), Object(AA.useEffect)((function() {
                    null == e || e(A)
                })), Object(AA.useEffect)((function() {
                    return function() {
                        var A, t;
                        null === (A = o.current) || void 0 === A || null === (t = A.parentNode) || void 0 === t || t.removeChild(o.current)
                    }
                }), []), o.current ? AA.default.createPortal(r, o.current) : null
            })),
            UA = e(3),
            FA = e.n(UA);

        function bA(A, t, e) {
            return e ? A[0] === t[0] : A[0] === t[0] && A[1] === t[1]
        }

        function EA(A, t) {
            (null == t || t > A.length) && (t = A.length);
            for (var e = 0, n = new Array(t); e < t; e++) n[e] = A[e];
            return n
        }

        function _A(A, t) {
            return function(A) {
                if (Array.isArray(A)) return A
            }(A) || function(A, t) {
                var e = null == A ? null : "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
                if (null != e) {
                    var n, r, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (e = e.call(A); !(i = (n = e.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (A) {
                        s = !0, r = A
                    } finally {
                        try {
                            i || null == e.return || e.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return o
                }
            }(A, t) || function(A, t) {
                if (A) {
                    if ("string" == typeof A) return EA(A, t);
                    var e = Object.prototype.toString.call(A).slice(8, -1);
                    return "Object" === e && A.constructor && (e = A.constructor.name), "Map" === e || "Set" === e ? Array.from(A) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? EA(A, t) : void 0
                }
            }(A, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function IA(A, t) {
            var e = {};
            return e[A.toLowerCase()] = t.toLowerCase(), e["Webkit".concat(A)] = "webkit".concat(t), e["Moz".concat(A)] = "moz".concat(t), e["ms".concat(A)] = "MS".concat(t), e["O".concat(A)] = "o".concat(t.toLowerCase()), e
        }
        var HA, OA, SA, LA = (HA = QA(), OA = "undefined" != typeof window ? window : {}, SA = {
                animationend: IA("Animation", "AnimationEnd"),
                transitionend: IA("Transition", "TransitionEnd")
            }, HA && ("AnimationEvent" in OA || delete SA.animationend.animation, "TransitionEvent" in OA || delete SA.transitionend.transition), SA),
            xA = {};
        if (QA()) {
            var TA = document.createElement("div");
            xA = TA.style
        }
        var DA = {};

        function KA(A) {
            if (DA[A]) return DA[A];
            var t = LA[A];
            if (t)
                for (var e = Object.keys(t), n = e.length, r = 0; r < n; r += 1) {
                    var o = e[r];
                    if (Object.prototype.hasOwnProperty.call(t, o) && o in xA) return DA[A] = t[o], DA[A]
                }
            return ""
        }
        var MA = KA("animationend"),
            RA = KA("transitionend"),
            kA = !(!MA || !RA),
            NA = MA || "animationend",
            PA = RA || "transitionend";

        function jA(A, t) {
            return A ? "object" === Y(A) ? A[t.replace(/-\w/g, (function(A) {
                return A[1].toUpperCase()
            }))] : "".concat(A, "-").concat(t) : null
        }

        function GA(A) {
            var t = Object(AA.useRef)(!1),
                e = _A(Object(AA.useState)(A), 2),
                n = e[0],
                r = e[1];
            return Object(AA.useEffect)((function() {
                return function() {
                    t.current = !0
                }
            }), []), [n, function(A) {
                t.current || r(A)
            }]
        }
        var VA = QA() ? AA.useLayoutEffect : AA.useEffect,
            WA = ["prepare", "start", "active", "end"];

        function JA(A) {
            return "active" === A || "end" === A
        }
        var XA = function(A, t) {
            var e = _A(AA.useState("none"), 2),
                n = e[0],
                r = e[1],
                o = _A(function() {
                    var A = AA.useRef(null);

                    function t() {
                        BA.cancel(A.current)
                    }
                    return AA.useEffect((function() {
                        return function() {
                            t()
                        }
                    }), []), [function e(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                        t();
                        var o = BA((function() {
                            r <= 1 ? n({
                                isCanceled: function() {
                                    return o !== A.current
                                }
                            }) : e(n, r - 1)
                        }));
                        A.current = o
                    }, t]
                }(), 2),
                i = o[0],
                s = o[1];
            return VA((function() {
                if ("none" !== n && "end" !== n) {
                    var A = WA.indexOf(n),
                        e = WA[A + 1],
                        o = t(n);
                    !1 === o ? r(e) : i((function(A) {
                        function t() {
                            A.isCanceled() || r(e)
                        }!0 === o ? t() : Promise.resolve(o).then(t)
                    }))
                }
            }), [A, n]), AA.useEffect((function() {
                return function() {
                    s()
                }
            }), []), [function() {
                r("prepare")
            }, n]
        };

        function YA(A, t, e, n) {
            var r = n.motionEnter,
                o = void 0 === r || r,
                i = n.motionAppear,
                s = void 0 === i || i,
                a = n.motionLeave,
                u = void 0 === a || a,
                c = n.motionDeadline,
                l = n.motionLeaveImmediately,
                f = n.onAppearPrepare,
                p = n.onEnterPrepare,
                h = n.onLeavePrepare,
                B = n.onAppearStart,
                g = n.onEnterStart,
                d = n.onLeaveStart,
                w = n.onAppearActive,
                v = n.onEnterActive,
                y = n.onLeaveActive,
                m = n.onAppearEnd,
                Q = n.onEnterEnd,
                C = n.onLeaveEnd,
                U = n.onVisibleChanged,
                F = _A(GA(), 2),
                b = F[0],
                E = F[1],
                _ = _A(GA("none"), 2),
                I = _[0],
                H = _[1],
                O = _A(GA(null), 2),
                S = O[0],
                L = O[1],
                x = Object(AA.useRef)(!1),
                T = Object(AA.useRef)(null),
                D = Object(AA.useRef)(!1),
                K = Object(AA.useRef)(null);

            function M() {
                return e() || K.current
            }
            var R = Object(AA.useRef)(!1);

            function k(A) {
                var t, e = M();
                A && !A.deadline && A.target !== e || ("appear" === I && R.current ? t = null == m ? void 0 : m(e, A) : "enter" === I && R.current ? t = null == Q ? void 0 : Q(e, A) : "leave" === I && R.current && (t = null == C ? void 0 : C(e, A)), !1 === t || D.current || (H("none"), L(null)))
            }
            var N = _A(function(A) {
                    var t = Object(AA.useRef)(),
                        e = Object(AA.useRef)(A);
                    e.current = A;
                    var n = AA.useCallback((function(A) {
                        e.current(A)
                    }), []);

                    function r(A) {
                        A && (A.removeEventListener(PA, n), A.removeEventListener(NA, n))
                    }
                    return AA.useEffect((function() {
                        return function() {
                            r(t.current)
                        }
                    }), []), [function(A) {
                        t.current && t.current !== A && r(t.current), A && A !== t.current && (A.addEventListener(PA, n), A.addEventListener(NA, n), t.current = A)
                    }, r]
                }(k), 1)[0],
                P = AA.useMemo((function() {
                    var A, t, e;
                    switch (I) {
                        case "appear":
                            return z(A = {}, "prepare", f), z(A, "start", B), z(A, "active", w), A;
                        case "enter":
                            return z(t = {}, "prepare", p), z(t, "start", g), z(t, "active", v), t;
                        case "leave":
                            return z(e = {}, "prepare", h), z(e, "start", d), z(e, "active", y), e;
                        default:
                            return {}
                    }
                }), [I]),
                j = _A(XA(I, (function(A) {
                    if ("prepare" === A) {
                        var t = P.prepare;
                        return !!t && t(M())
                    }
                    var e;
                    V in P && L((null === (e = P[V]) || void 0 === e ? void 0 : e.call(P, M(), null)) || null);
                    return "active" === V && (N(M()), c > 0 && (clearTimeout(T.current), T.current = setTimeout((function() {
                        k({
                            deadline: !0
                        })
                    }), c))), !0
                })), 2),
                G = j[0],
                V = j[1],
                W = JA(V);
            R.current = W, VA((function() {
                E(t);
                var e, n = x.current;
                (x.current = !0, A) && (!n && t && s && (e = "appear"), n && t && o && (e = "enter"), (n && !t && u || !n && l && !t && u) && (e = "leave"), e && (H(e), G()))
            }), [t]), Object(AA.useEffect)((function() {
                ("appear" === I && !s || "enter" === I && !o || "leave" === I && !u) && H("none")
            }), [s, o, u]), Object(AA.useEffect)((function() {
                return function() {
                    clearTimeout(T.current), D.current = !0
                }
            }), []), Object(AA.useEffect)((function() {
                void 0 !== b && "none" === I && (null == U || U(b))
            }), [b, I]);
            var J = S;
            return P.prepare && "start" === V && (J = q({
                transition: "none"
            }, J)), [I, V, J, null != b ? b : t]
        }
        var zA = function(A) {
            iA(e, A);
            var t = uA(e);

            function e() {
                return tA(this, e), t.apply(this, arguments)
            }
            return nA(e, [{
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), e
        }(AA.Component);
        var ZA = function(A) {
            var t = A;

            function e(A) {
                return !(!A.motionName || !t)
            }
            "object" === Y(A) && (t = A.transitionSupport);
            var n = AA.forwardRef((function(A, t) {
                var n = A.visible,
                    r = void 0 === n || n,
                    o = A.removeOnLeave,
                    i = void 0 === o || o,
                    s = A.forceRender,
                    a = A.children,
                    u = A.motionName,
                    c = A.leavedClassName,
                    l = A.eventProps,
                    f = e(A),
                    p = Object(AA.useRef)(),
                    h = Object(AA.useRef)();
                var B = _A(YA(f, r, (function() {
                        try {
                            return dA(p.current || h.current)
                        } catch (A) {
                            return null
                        }
                    }), A), 4),
                    g = B[0],
                    d = B[1],
                    w = B[2],
                    v = B[3],
                    y = AA.useRef(v);
                v && (y.current = !0);
                var m = Object(AA.useRef)(t);
                m.current = t;
                var Q, C = AA.useCallback((function(A) {
                        p.current = A, vA(m.current, A)
                    }), []),
                    U = q(q({}, l), {}, {
                        visible: r
                    });
                if (a)
                    if ("none" !== g && e(A)) {
                        var F, b;
                        "prepare" === d ? b = "prepare" : JA(d) ? b = "active" : "start" === d && (b = "start"), Q = a(q(q({}, U), {}, {
                            className: FA()(jA(u, g), (F = {}, z(F, jA(u, "".concat(g, "-").concat(b)), b), z(F, u, "string" == typeof u), F)),
                            style: w
                        }), C)
                    } else Q = v ? a(q({}, U), C) : !i && y.current ? a(q(q({}, U), {}, {
                        className: c
                    }), C) : s ? a(q(q({}, U), {}, {
                        style: {
                            display: "none"
                        }
                    }), C) : null;
                else Q = null;
                return AA.createElement(zA, {
                    ref: h
                }, Q)
            }));
            return n.displayName = "CSSMotion", n
        }(kA);

        function qA(A) {
            var t;
            return q(q({}, t = A && "object" === Y(A) && "key" in A ? A : {
                key: A
            }), {}, {
                key: String(t.key)
            })
        }

        function $A() {
            var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return A.map(qA)
        }

        function At() {
            var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                e = [],
                n = 0,
                r = t.length,
                o = $A(A),
                i = $A(t);
            o.forEach((function(A) {
                for (var t = !1, o = n; o < r; o += 1) {
                    var s = i[o];
                    if (s.key === A.key) {
                        n < o && (e = e.concat(i.slice(n, o).map((function(A) {
                            return q(q({}, A), {}, {
                                status: "add"
                            })
                        }))), n = o), e.push(q(q({}, s), {}, {
                            status: "keep"
                        })), n += 1, t = !0;
                        break
                    }
                }
                t || e.push(q(q({}, A), {}, {
                    status: "remove"
                }))
            })), n < r && (e = e.concat(i.slice(n).map((function(A) {
                return q(q({}, A), {}, {
                    status: "add"
                })
            }))));
            var s = {};
            e.forEach((function(A) {
                var t = A.key;
                s[t] = (s[t] || 0) + 1
            }));
            var a = Object.keys(s).filter((function(A) {
                return s[A] > 1
            }));
            return a.forEach((function(A) {
                (e = e.filter((function(t) {
                    var e = t.key,
                        n = t.status;
                    return e !== A || "remove" !== n
                }))).forEach((function(t) {
                    t.key === A && (t.status = "keep")
                }))
            })), e
        }
        var tt = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
        ! function(A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZA,
                e = function(A) {
                    iA(n, A);
                    var e = uA(n);

                    function n() {
                        var A;
                        return tA(this, n), (A = e.apply(this, arguments)).state = {
                            keyEntities: []
                        }, A.removeKey = function(t) {
                            A.setState((function(A) {
                                return {
                                    keyEntities: A.keyEntities.map((function(A) {
                                        return A.key !== t ? A : q(q({}, A), {}, {
                                            status: "removed"
                                        })
                                    }))
                                }
                            }))
                        }, A
                    }
                    return nA(n, [{
                        key: "render",
                        value: function() {
                            var A = this,
                                e = this.state.keyEntities,
                                n = this.props,
                                r = n.component,
                                o = n.children,
                                i = n.onVisibleChanged,
                                s = $(n, ["component", "children", "onVisibleChanged"]),
                                a = r || AA.Fragment,
                                u = {};
                            return tt.forEach((function(A) {
                                u[A] = s[A], delete s[A]
                            })), delete s.keys, AA.createElement(a, s, e.map((function(e) {
                                var n = e.status,
                                    r = $(e, ["status"]),
                                    s = "add" === n || "keep" === n;
                                return AA.createElement(t, X({}, u, {
                                    key: r.key,
                                    visible: s,
                                    eventProps: r,
                                    onVisibleChanged: function(t) {
                                        null == i || i(t, {
                                            key: r.key
                                        }), t || A.removeKey(r.key)
                                    }
                                }), o)
                            })))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(A, t) {
                            var e = A.keys,
                                n = t.keyEntities,
                                r = $A(e);
                            return {
                                keyEntities: At(n, r).filter((function(A) {
                                    var t = n.find((function(t) {
                                        var e = t.key;
                                        return A.key === e
                                    }));
                                    return !t || "removed" !== t.status || "remove" !== A.status
                                }))
                            }
                        }
                    }]), n
                }(AA.Component);
            e.defaultProps = {
                component: "div"
            }
        }(kA);
        var et = ZA;

        function nt(A) {
            var t = A.prefixCls,
                e = A.motion,
                n = A.animation,
                r = A.transitionName;
            return e || (n ? {
                motionName: "".concat(t, "-").concat(n)
            } : r ? {
                motionName: r
            } : null)
        }

        function rt(A) {
            var t = A.prefixCls,
                e = A.visible,
                n = A.zIndex,
                r = A.mask,
                o = A.maskMotion,
                i = A.maskAnimation,
                s = A.maskTransitionName;
            if (!r) return null;
            var a = {};
            return (o || s || i) && (a = q({
                motionAppear: !0
            }, nt({
                motion: o,
                prefixCls: t,
                transitionName: s,
                animation: i
            }))), AA.createElement(et, X({}, a, {
                visible: e,
                removeOnLeave: !0
            }), (function(A) {
                var e = A.className;
                return AA.createElement("div", {
                    style: {
                        zIndex: n
                    },
                    className: FA()("".concat(t, "-mask"), e)
                })
            }))
        }
        var ot;

        function it(A, t) {
            var e = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(A, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function st(A) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? it(Object(e), !0).forEach((function(t) {
                    ut(A, t, e[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : it(Object(e)).forEach((function(t) {
                    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
                }))
            }
            return A
        }

        function at(A) {
            return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                return typeof A
            } : function(A) {
                return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
            })(A)
        }

        function ut(A, t, e) {
            return t in A ? Object.defineProperty(A, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : A[t] = e, A
        }
        var ct = {
            Webkit: "-webkit-",
            Moz: "-moz-",
            ms: "-ms-",
            O: "-o-"
        };

        function lt() {
            if (void 0 !== ot) return ot;
            ot = "";
            var A = document.createElement("p").style;
            for (var t in ct) t + "Transform" in A && (ot = t);
            return ot
        }

        function ft() {
            return lt() ? "".concat(lt(), "TransitionProperty") : "transitionProperty"
        }

        function pt() {
            return lt() ? "".concat(lt(), "Transform") : "transform"
        }

        function ht(A, t) {
            var e = ft();
            e && (A.style[e] = t, "transitionProperty" !== e && (A.style.transitionProperty = t))
        }

        function Bt(A, t) {
            var e = pt();
            e && (A.style[e] = t, "transform" !== e && (A.style.transform = t))
        }
        var gt, dt = /matrix\((.*)\)/,
            wt = /matrix3d\((.*)\)/;

        function vt(A) {
            var t = A.style.display;
            A.style.display = "none", A.offsetHeight, A.style.display = t
        }

        function yt(A, t, e) {
            var n = e;
            if ("object" !== at(t)) return void 0 !== n ? ("number" == typeof n && (n = "".concat(n, "px")), void(A.style[t] = n)) : gt(A, t);
            for (var r in t) t.hasOwnProperty(r) && yt(A, r, t[r])
        }

        function mt(A, t) {
            var e = A["page".concat(t ? "Y" : "X", "Offset")],
                n = "scroll".concat(t ? "Top" : "Left");
            if ("number" != typeof e) {
                var r = A.document;
                "number" != typeof(e = r.documentElement[n]) && (e = r.body[n])
            }
            return e
        }

        function Qt(A) {
            return mt(A)
        }

        function Ct(A) {
            return mt(A, !0)
        }

        function Ut(A) {
            var t = function(A) {
                    var t, e, n, r = A.ownerDocument,
                        o = r.body,
                        i = r && r.documentElement;
                    return e = (t = A.getBoundingClientRect()).left, n = t.top, {
                        left: e -= i.clientLeft || o.clientLeft || 0,
                        top: n -= i.clientTop || o.clientTop || 0
                    }
                }(A),
                e = A.ownerDocument,
                n = e.defaultView || e.parentWindow;
            return t.left += Qt(n), t.top += Ct(n), t
        }

        function Ft(A) {
            return null != A && A == A.window
        }

        function bt(A) {
            return Ft(A) ? A.document : 9 === A.nodeType ? A : A.ownerDocument
        }
        var Et = new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ")(?!px)[a-z%]+$"), "i"),
            _t = /^(top|right|bottom|left)$/,
            It = "left";

        function Ht(A, t) {
            return "left" === A ? t.useCssRight ? "right" : A : t.useCssBottom ? "bottom" : A
        }

        function Ot(A) {
            return "left" === A ? "right" : "right" === A ? "left" : "top" === A ? "bottom" : "bottom" === A ? "top" : void 0
        }

        function St(A, t, e) {
            "static" === yt(A, "position") && (A.style.position = "relative");
            var n = -999,
                r = -999,
                o = Ht("left", e),
                i = Ht("top", e),
                s = Ot(o),
                a = Ot(i);
            "left" !== o && (n = 999), "top" !== i && (r = 999);
            var u, c = "",
                l = Ut(A);
            ("left" in t || "top" in t) && (c = (u = A).style.transitionProperty || u.style[ft()] || "", ht(A, "none")), "left" in t && (A.style[s] = "", A.style[o] = "".concat(n, "px")), "top" in t && (A.style[a] = "", A.style[i] = "".concat(r, "px")), vt(A);
            var f = Ut(A),
                p = {};
            for (var h in t)
                if (t.hasOwnProperty(h)) {
                    var B = Ht(h, e),
                        g = "left" === h ? n : r,
                        d = l[h] - f[h];
                    p[B] = B === h ? g + d : g - d
                }
            yt(A, p), vt(A), ("left" in t || "top" in t) && ht(A, c);
            var w = {};
            for (var v in t)
                if (t.hasOwnProperty(v)) {
                    var y = Ht(v, e),
                        m = t[v] - l[v];
                    w[y] = v === y ? p[y] + m : p[y] - m
                }
            yt(A, w)
        }

        function Lt(A, t) {
            var e = Ut(A),
                n = function(A) {
                    var t = window.getComputedStyle(A, null),
                        e = t.getPropertyValue("transform") || t.getPropertyValue(pt());
                    if (e && "none" !== e) {
                        var n = e.replace(/[^0-9\-.,]/g, "").split(",");
                        return {
                            x: parseFloat(n[12] || n[4], 0),
                            y: parseFloat(n[13] || n[5], 0)
                        }
                    }
                    return {
                        x: 0,
                        y: 0
                    }
                }(A),
                r = {
                    x: n.x,
                    y: n.y
                };
            "left" in t && (r.x = n.x + t.left - e.left), "top" in t && (r.y = n.y + t.top - e.top),
                function(A, t) {
                    var e = window.getComputedStyle(A, null),
                        n = e.getPropertyValue("transform") || e.getPropertyValue(pt());
                    if (n && "none" !== n) {
                        var r, o = n.match(dt);
                        if (o)(r = (o = o[1]).split(",").map((function(A) {
                            return parseFloat(A, 10)
                        })))[4] = t.x, r[5] = t.y, Bt(A, "matrix(".concat(r.join(","), ")"));
                        else(r = n.match(wt)[1].split(",").map((function(A) {
                            return parseFloat(A, 10)
                        })))[12] = t.x, r[13] = t.y, Bt(A, "matrix3d(".concat(r.join(","), ")"))
                    } else Bt(A, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"))
                }(A, r)
        }

        function xt(A, t) {
            for (var e = 0; e < A.length; e++) t(A[e])
        }

        function Tt(A) {
            return "border-box" === gt(A, "boxSizing")
        }
        "undefined" != typeof window && (gt = window.getComputedStyle ? function(A, t, e) {
            var n = e,
                r = "",
                o = bt(A);
            return (n = n || o.defaultView.getComputedStyle(A, null)) && (r = n.getPropertyValue(t) || n[t]), r
        } : function(A, t) {
            var e = A.currentStyle && A.currentStyle[t];
            if (Et.test(e) && !_t.test(t)) {
                var n = A.style,
                    r = n[It],
                    o = A.runtimeStyle[It];
                A.runtimeStyle[It] = A.currentStyle[It], n[It] = "fontSize" === t ? "1em" : e || 0, e = n.pixelLeft + "px", n[It] = r, A.runtimeStyle[It] = o
            }
            return "" === e ? "auto" : e
        });
        var Dt = ["margin", "border", "padding"];

        function Kt(A, t, e) {
            var n, r = {},
                o = A.style;
            for (n in t) t.hasOwnProperty(n) && (r[n] = o[n], o[n] = t[n]);
            for (n in e.call(A), t) t.hasOwnProperty(n) && (o[n] = r[n])
        }

        function Mt(A, t, e) {
            var n, r, o, i = 0;
            for (r = 0; r < t.length; r++)
                if (n = t[r])
                    for (o = 0; o < e.length; o++) {
                        var s = void 0;
                        s = "border" === n ? "".concat(n).concat(e[o], "Width") : n + e[o], i += parseFloat(gt(A, s)) || 0
                    }
                return i
        }
        var Rt = {
            getParent: function(A) {
                var t = A;
                do {
                    t = 11 === t.nodeType && t.host ? t.host : t.parentNode
                } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
                return t
            }
        };

        function kt(A, t, e) {
            var n = e;
            if (Ft(A)) return "width" === t ? Rt.viewportWidth(A) : Rt.viewportHeight(A);
            if (9 === A.nodeType) return "width" === t ? Rt.docWidth(A) : Rt.docHeight(A);
            var r = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                o = "width" === t ? A.getBoundingClientRect().width : A.getBoundingClientRect().height,
                i = Tt(A),
                s = 0;
            (null == o || o <= 0) && (o = void 0, (null == (s = gt(A, t)) || Number(s) < 0) && (s = A.style[t] || 0), s = parseFloat(s) || 0), void 0 === n && (n = i ? 1 : -1);
            var a = void 0 !== o || i,
                u = o || s;
            return -1 === n ? a ? u - Mt(A, ["border", "padding"], r) : s : a ? 1 === n ? u : u + (2 === n ? -Mt(A, ["border"], r) : Mt(A, ["margin"], r)) : s + Mt(A, Dt.slice(n), r)
        }
        xt(["Width", "Height"], (function(A) {
            Rt["doc".concat(A)] = function(t) {
                var e = t.document;
                return Math.max(e.documentElement["scroll".concat(A)], e.body["scroll".concat(A)], Rt["viewport".concat(A)](e))
            }, Rt["viewport".concat(A)] = function(t) {
                var e = "client".concat(A),
                    n = t.document,
                    r = n.body,
                    o = n.documentElement[e];
                return "CSS1Compat" === n.compatMode && o || r && r[e] || o
            }
        }));
        var Nt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        };

        function Pt() {
            for (var A = arguments.length, t = new Array(A), e = 0; e < A; e++) t[e] = arguments[e];
            var n, r = t[0];
            return 0 !== r.offsetWidth ? n = kt.apply(void 0, t) : Kt(r, Nt, (function() {
                n = kt.apply(void 0, t)
            })), n
        }

        function jt(A, t) {
            for (var e in t) t.hasOwnProperty(e) && (A[e] = t[e]);
            return A
        }
        xt(["width", "height"], (function(A) {
            var t = A.charAt(0).toUpperCase() + A.slice(1);
            Rt["outer".concat(t)] = function(t, e) {
                return t && Pt(t, A, e ? 0 : 1)
            };
            var e = "width" === A ? ["Left", "Right"] : ["Top", "Bottom"];
            Rt[A] = function(t, n) {
                var r = n;
                return void 0 !== r ? t ? (Tt(t) && (r += Mt(t, ["padding", "border"], e)), yt(t, A, r)) : void 0 : t && Pt(t, A, -1)
            }
        }));
        var Gt = {
            getWindow: function(A) {
                if (A && A.document && A.setTimeout) return A;
                var t = A.ownerDocument || A;
                return t.defaultView || t.parentWindow
            },
            getDocument: bt,
            offset: function(A, t, e) {
                if (void 0 === t) return Ut(A);
                ! function(A, t, e) {
                    if (e.ignoreShake) {
                        var n = Ut(A),
                            r = n.left.toFixed(0),
                            o = n.top.toFixed(0),
                            i = t.left.toFixed(0),
                            s = t.top.toFixed(0);
                        if (r === i && o === s) return
                    }
                    e.useCssRight || e.useCssBottom ? St(A, t, e) : e.useCssTransform && pt() in document.body.style ? Lt(A, t) : St(A, t, e)
                }(A, t, e || {})
            },
            isWindow: Ft,
            each: xt,
            css: yt,
            clone: function(A) {
                var t, e = {};
                for (t in A) A.hasOwnProperty(t) && (e[t] = A[t]);
                if (A.overflow)
                    for (t in A) A.hasOwnProperty(t) && (e.overflow[t] = A.overflow[t]);
                return e
            },
            mix: jt,
            getWindowScrollLeft: function(A) {
                return Qt(A)
            },
            getWindowScrollTop: function(A) {
                return Ct(A)
            },
            merge: function() {
                for (var A = {}, t = 0; t < arguments.length; t++) Gt.mix(A, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
                return A
            },
            viewportWidth: 0,
            viewportHeight: 0
        };
        jt(Gt, Rt);
        var Vt = Gt.getParent;

        function Wt(A) {
            if (Gt.isWindow(A) || 9 === A.nodeType) return null;
            var t, e = Gt.getDocument(A).body,
                n = Gt.css(A, "position");
            if (!("fixed" === n || "absolute" === n)) return "html" === A.nodeName.toLowerCase() ? null : Vt(A);
            for (t = Vt(A); t && t !== e && 9 !== t.nodeType; t = Vt(t))
                if ("static" !== (n = Gt.css(t, "position"))) return t;
            return null
        }
        var Jt = Gt.getParent;

        function Xt(A, t) {
            for (var e = {
                    left: 0,
                    right: 1 / 0,
                    top: 0,
                    bottom: 1 / 0
                }, n = Wt(A), r = Gt.getDocument(A), o = r.defaultView || r.parentWindow, i = r.body, s = r.documentElement; n;) {
                if (-1 !== navigator.userAgent.indexOf("MSIE") && 0 === n.clientWidth || n === i || n === s || "visible" === Gt.css(n, "overflow")) {
                    if (n === i || n === s) break
                } else {
                    var a = Gt.offset(n);
                    a.left += n.clientLeft, a.top += n.clientTop, e.top = Math.max(e.top, a.top), e.right = Math.min(e.right, a.left + n.clientWidth), e.bottom = Math.min(e.bottom, a.top + n.clientHeight), e.left = Math.max(e.left, a.left)
                }
                n = Wt(n)
            }
            var u = null;
            Gt.isWindow(A) || 9 === A.nodeType || (u = A.style.position, "absolute" === Gt.css(A, "position") && (A.style.position = "fixed"));
            var c = Gt.getWindowScrollLeft(o),
                l = Gt.getWindowScrollTop(o),
                f = Gt.viewportWidth(o),
                p = Gt.viewportHeight(o),
                h = s.scrollWidth,
                B = s.scrollHeight,
                g = window.getComputedStyle(i);
            if ("hidden" === g.overflowX && (h = o.innerWidth), "hidden" === g.overflowY && (B = o.innerHeight), A.style && (A.style.position = u), t || function(A) {
                    if (Gt.isWindow(A) || 9 === A.nodeType) return !1;
                    var t = Gt.getDocument(A),
                        e = t.body,
                        n = null;
                    for (n = Jt(A); n && n !== e && n !== t; n = Jt(n)) {
                        if ("fixed" === Gt.css(n, "position")) return !0
                    }
                    return !1
                }(A)) e.left = Math.max(e.left, c), e.top = Math.max(e.top, l), e.right = Math.min(e.right, c + f), e.bottom = Math.min(e.bottom, l + p);
            else {
                var d = Math.max(h, c + f);
                e.right = Math.min(e.right, d);
                var w = Math.max(B, l + p);
                e.bottom = Math.min(e.bottom, w)
            }
            return e.top >= 0 && e.left >= 0 && e.bottom > e.top && e.right > e.left ? e : null
        }

        function Yt(A) {
            var t, e, n;
            if (Gt.isWindow(A) || 9 === A.nodeType) {
                var r = Gt.getWindow(A);
                t = {
                    left: Gt.getWindowScrollLeft(r),
                    top: Gt.getWindowScrollTop(r)
                }, e = Gt.viewportWidth(r), n = Gt.viewportHeight(r)
            } else t = Gt.offset(A), e = Gt.outerWidth(A), n = Gt.outerHeight(A);
            return t.width = e, t.height = n, t
        }

        function zt(A, t) {
            var e = t.charAt(0),
                n = t.charAt(1),
                r = A.width,
                o = A.height,
                i = A.left,
                s = A.top;
            return "c" === e ? s += o / 2 : "b" === e && (s += o), "c" === n ? i += r / 2 : "r" === n && (i += r), {
                left: i,
                top: s
            }
        }

        function Zt(A, t, e, n, r) {
            var o = zt(t, e[1]),
                i = zt(A, e[0]),
                s = [i.left - o.left, i.top - o.top];
            return {
                left: Math.round(A.left - s[0] + n[0] - r[0]),
                top: Math.round(A.top - s[1] + n[1] - r[1])
            }
        }

        function qt(A, t, e) {
            return A.left < e.left || A.left + t.width > e.right
        }

        function $t(A, t, e) {
            return A.top < e.top || A.top + t.height > e.bottom
        }

        function Ae(A, t, e) {
            var n = [];
            return Gt.each(A, (function(A) {
                n.push(A.replace(t, (function(A) {
                    return e[A]
                })))
            })), n
        }

        function te(A, t) {
            return A[t] = -A[t], A
        }

        function ee(A, t) {
            return (/%$/.test(A) ? parseInt(A.substring(0, A.length - 1), 10) / 100 * t : parseInt(A, 10)) || 0
        }

        function ne(A, t) {
            A[0] = ee(A[0], t.width), A[1] = ee(A[1], t.height)
        }

        function re(A, t, e, n) {
            var r = e.points,
                o = e.offset || [0, 0],
                i = e.targetOffset || [0, 0],
                s = e.overflow,
                a = e.source || A;
            o = [].concat(o), i = [].concat(i);
            var u = {},
                c = 0,
                l = Xt(a, !(!(s = s || {}) || !s.alwaysByViewport)),
                f = Yt(a);
            ne(o, f), ne(i, t);
            var p = Zt(f, t, r, o, i),
                h = Gt.merge(f, p);
            if (l && (s.adjustX || s.adjustY) && n) {
                if (s.adjustX && qt(p, f, l)) {
                    var B = Ae(r, /[lr]/gi, {
                            l: "r",
                            r: "l"
                        }),
                        g = te(o, 0),
                        d = te(i, 0);
                    (function(A, t, e) {
                        return A.left > e.right || A.left + t.width < e.left
                    })(Zt(f, t, B, g, d), f, l) || (c = 1, r = B, o = g, i = d)
                }
                if (s.adjustY && $t(p, f, l)) {
                    var w = Ae(r, /[tb]/gi, {
                            t: "b",
                            b: "t"
                        }),
                        v = te(o, 1),
                        y = te(i, 1);
                    (function(A, t, e) {
                        return A.top > e.bottom || A.top + t.height < e.top
                    })(Zt(f, t, w, v, y), f, l) || (c = 1, r = w, o = v, i = y)
                }
                c && (p = Zt(f, t, r, o, i), Gt.mix(h, p));
                var m = qt(p, f, l),
                    Q = $t(p, f, l);
                if (m || Q) {
                    var C = r;
                    m && (C = Ae(r, /[lr]/gi, {
                        l: "r",
                        r: "l"
                    })), Q && (C = Ae(r, /[tb]/gi, {
                        t: "b",
                        b: "t"
                    })), r = C, o = e.offset || [0, 0], i = e.targetOffset || [0, 0]
                }
                u.adjustX = s.adjustX && m, u.adjustY = s.adjustY && Q, (u.adjustX || u.adjustY) && (h = function(A, t, e, n) {
                    var r = Gt.clone(A),
                        o = {
                            width: t.width,
                            height: t.height
                        };
                    return n.adjustX && r.left < e.left && (r.left = e.left), n.resizeWidth && r.left >= e.left && r.left + o.width > e.right && (o.width -= r.left + o.width - e.right), n.adjustX && r.left + o.width > e.right && (r.left = Math.max(e.right - o.width, e.left)), n.adjustY && r.top < e.top && (r.top = e.top), n.resizeHeight && r.top >= e.top && r.top + o.height > e.bottom && (o.height -= r.top + o.height - e.bottom), n.adjustY && r.top + o.height > e.bottom && (r.top = Math.max(e.bottom - o.height, e.top)), Gt.mix(r, o)
                }(p, f, l, u))
            }
            return h.width !== f.width && Gt.css(a, "width", Gt.width(a) + h.width - f.width), h.height !== f.height && Gt.css(a, "height", Gt.height(a) + h.height - f.height), Gt.offset(a, {
                left: h.left,
                top: h.top
            }, {
                useCssRight: e.useCssRight,
                useCssBottom: e.useCssBottom,
                useCssTransform: e.useCssTransform,
                ignoreShake: e.ignoreShake
            }), {
                points: r,
                offset: o,
                targetOffset: i,
                overflow: u
            }
        }

        function oe(A, t, e) {
            var n = e.target || t;
            return re(A, Yt(n), e, ! function(A, t) {
                var e = Xt(A, t),
                    n = Yt(A);
                return !e || n.left + n.width <= e.left || n.top + n.height <= e.top || n.left >= e.right || n.top >= e.bottom
            }(n, e.overflow && e.overflow.alwaysByViewport))
        }
        oe.__getOffsetParent = Wt, oe.__getVisibleRectForElement = Xt;
        var ie = e(47),
            se = e.n(ie),
            ae = e(48);

        function ue(A, t) {
            var e = null,
                n = null;
            var r = new ae.a((function(A) {
                var r = _A(A, 1)[0].target;
                if (document.documentElement.contains(r)) {
                    var o = r.getBoundingClientRect(),
                        i = o.width,
                        s = o.height,
                        a = Math.floor(i),
                        u = Math.floor(s);
                    e === a && n === u || Promise.resolve().then((function() {
                        t({
                            width: a,
                            height: u
                        })
                    })), e = a, n = u
                }
            }));
            return A && r.observe(A),
                function() {
                    r.disconnect()
                }
        }

        function ce(A) {
            return "function" != typeof A ? null : A()
        }

        function le(A) {
            return "object" === Y(A) && A ? A : null
        }
        var fe = function(A, t) {
                var e = A.children,
                    n = A.disabled,
                    r = A.target,
                    o = A.align,
                    i = A.onAlign,
                    s = A.monitorWindowResize,
                    a = A.monitorBufferTime,
                    u = void 0 === a ? 0 : a,
                    c = AA.default.useRef({}),
                    l = AA.default.useRef(),
                    f = AA.default.Children.only(e),
                    p = AA.default.useRef({});
                p.current.disabled = n, p.current.target = r, p.current.align = o, p.current.onAlign = i;
                var h = _A(function(A, t) {
                        var e = AA.default.useRef(!1),
                            n = AA.default.useRef(null);

                        function r() {
                            window.clearTimeout(n.current)
                        }
                        return [function o(i) {
                            if (e.current && !0 !== i) r(), n.current = window.setTimeout((function() {
                                e.current = !1, o()
                            }), t);
                            else {
                                if (!1 === A()) return;
                                e.current = !0, r(), n.current = window.setTimeout((function() {
                                    e.current = !1
                                }), t)
                            }
                        }, function() {
                            e.current = !1, r()
                        }]
                    }((function() {
                        var A = p.current,
                            t = A.disabled,
                            e = A.target,
                            n = A.align,
                            r = A.onAlign;
                        if (!t && e) {
                            var o, i = l.current,
                                s = ce(e),
                                a = le(e);
                            c.current.element = s, c.current.point = a, c.current.align = n;
                            var u = document.activeElement;
                            return s && function(A) {
                                    if (!A) return !1;
                                    if (A.offsetParent) return !0;
                                    if (A.getBBox) {
                                        var t = A.getBBox();
                                        if (t.width || t.height) return !0
                                    }
                                    if (A.getBoundingClientRect) {
                                        var e = A.getBoundingClientRect();
                                        if (e.width || e.height) return !0
                                    }
                                    return !1
                                }(s) ? o = oe(i, s, n) : a && (o = function(A, t, e) {
                                    var n, r, o = Gt.getDocument(A),
                                        i = o.defaultView || o.parentWindow,
                                        s = Gt.getWindowScrollLeft(i),
                                        a = Gt.getWindowScrollTop(i),
                                        u = Gt.viewportWidth(i),
                                        c = Gt.viewportHeight(i),
                                        l = {
                                            left: n = "pageX" in t ? t.pageX : s + t.clientX,
                                            top: r = "pageY" in t ? t.pageY : a + t.clientY,
                                            width: 0,
                                            height: 0
                                        },
                                        f = n >= 0 && n <= s + u && r >= 0 && r <= a + c,
                                        p = [e.points[0], "cc"];
                                    return re(A, l, st(st({}, e), {}, {
                                        points: p
                                    }), f)
                                }(i, a, n)),
                                function(A, t) {
                                    A !== document.activeElement && gA(t, A) && "function" == typeof A.focus && A.focus()
                                }(u, i), r && o && r(i, o), !0
                        }
                        return !1
                    }), u), 2),
                    B = h[0],
                    g = h[1],
                    d = AA.default.useRef({
                        cancel: function() {}
                    }),
                    w = AA.default.useRef({
                        cancel: function() {}
                    });
                AA.default.useEffect((function() {
                    var A, t, e = ce(r),
                        n = le(r);
                    l.current !== w.current.element && (w.current.cancel(), w.current.element = l.current, w.current.cancel = ue(l.current, B)), c.current.element === e && ((A = c.current.point) === (t = n) || A && t && ("pageX" in t && "pageY" in t ? A.pageX === t.pageX && A.pageY === t.pageY : "clientX" in t && "clientY" in t && A.clientX === t.clientX && A.clientY === t.clientY)) && se()(c.current.align, o) || (B(), d.current.element !== e && (d.current.cancel(), d.current.element = e, d.current.cancel = ue(e, B)))
                })), AA.default.useEffect((function() {
                    n ? g() : B()
                }), [n]);
                var v = AA.default.useRef(null);
                return AA.default.useEffect((function() {
                    s ? v.current || (v.current = mA(window, "resize", B)) : v.current && (v.current.remove(), v.current = null)
                }), [s]), AA.default.useEffect((function() {
                    return function() {
                        d.current.cancel(), w.current.cancel(), v.current && v.current.remove(), g()
                    }
                }), []), AA.default.useImperativeHandle(t, (function() {
                    return {
                        forceAlign: function() {
                            return B(!0)
                        }
                    }
                })), AA.default.isValidElement(f) && (f = AA.default.cloneElement(f, {
                    ref: yA(f.ref, l)
                })), f
            },
            pe = AA.default.forwardRef(fe);
        pe.displayName = "Align";
        var he = pe,
            Be = e(24),
            ge = e.n(Be);

        function de(A, t, e, n, r, o, i) {
            try {
                var s = A[o](i),
                    a = s.value
            } catch (A) {
                return void e(A)
            }
            s.done ? t(a) : Promise.resolve(a).then(n, r)
        }

        function we(A) {
            return function() {
                var t = this,
                    e = arguments;
                return new Promise((function(n, r) {
                    var o = A.apply(t, e);

                    function i(A) {
                        de(o, n, r, i, s, "next", A)
                    }

                    function s(A) {
                        de(o, n, r, i, s, "throw", A)
                    }
                    i(void 0)
                }))
            }
        }
        var ve = ["measure", "align", null, "motion"],
            ye = AA.forwardRef((function(A, t) {
                var e = A.visible,
                    n = A.prefixCls,
                    r = A.className,
                    o = A.style,
                    i = A.children,
                    s = A.zIndex,
                    a = A.stretch,
                    u = A.destroyPopupOnHide,
                    c = A.forceRender,
                    l = A.align,
                    f = A.point,
                    p = A.getRootDomNode,
                    h = A.getClassNameFromAlign,
                    B = A.onAlign,
                    g = A.onMouseEnter,
                    d = A.onMouseLeave,
                    w = A.onMouseDown,
                    v = A.onTouchStart,
                    y = Object(AA.useRef)(),
                    m = Object(AA.useRef)(),
                    Q = _A(Object(AA.useState)(), 2),
                    C = Q[0],
                    U = Q[1],
                    F = function(A) {
                        var t = _A(AA.useState({
                                width: 0,
                                height: 0
                            }), 2),
                            e = t[0],
                            n = t[1];
                        return [AA.useMemo((function() {
                            var t = {};
                            if (A) {
                                var n = e.width,
                                    r = e.height; - 1 !== A.indexOf("height") && r ? t.height = r : -1 !== A.indexOf("minHeight") && r && (t.minHeight = r), -1 !== A.indexOf("width") && n ? t.width = n : -1 !== A.indexOf("minWidth") && n && (t.minWidth = n)
                            }
                            return t
                        }), [A, e]), function(A) {
                            n({
                                width: A.offsetWidth,
                                height: A.offsetHeight
                            })
                        }]
                    }(a),
                    b = _A(F, 2),
                    E = b[0],
                    _ = b[1];
                var I = function(A, t) {
                        var e = _A(Object(AA.useState)(null), 2),
                            n = e[0],
                            r = e[1],
                            o = Object(AA.useRef)(),
                            i = Object(AA.useRef)(!1);

                        function s(A) {
                            i.current || r(A)
                        }

                        function a() {
                            BA.cancel(o.current)
                        }
                        return Object(AA.useEffect)((function() {
                            s("measure")
                        }), [A]), Object(AA.useEffect)((function() {
                            switch (n) {
                                case "measure":
                                    t()
                            }
                            n && (o.current = BA(we(ge.a.mark((function A() {
                                var t, e;
                                return ge.a.wrap((function(A) {
                                    for (;;) switch (A.prev = A.next) {
                                        case 0:
                                            t = ve.indexOf(n), (e = ve[t + 1]) && -1 !== t && s(e);
                                        case 3:
                                        case "end":
                                            return A.stop()
                                    }
                                }), A)
                            })))))
                        }), [n]), Object(AA.useEffect)((function() {
                            return function() {
                                i.current = !0, a()
                            }
                        }), []), [n, function(A) {
                            a(), o.current = BA((function() {
                                s((function(A) {
                                    switch (n) {
                                        case "align":
                                            return "motion";
                                        case "motion":
                                            return "stable"
                                    }
                                    return A
                                })), null == A || A()
                            }))
                        }]
                    }(e, (function() {
                        a && _(p())
                    })),
                    H = _A(I, 2),
                    O = H[0],
                    S = H[1],
                    L = Object(AA.useRef)();

                function x() {
                    var A;
                    null === (A = y.current) || void 0 === A || A.forceAlign()
                }

                function T(A, t) {
                    var e = h(t);
                    C !== e && U(e), "align" === O && (C !== e ? Promise.resolve().then((function() {
                        x()
                    })) : S((function() {
                        var A;
                        null === (A = L.current) || void 0 === A || A.call(L)
                    })), null == B || B(A, t))
                }
                var D = q({}, nt(A));

                function K() {
                    return new Promise((function(A) {
                        L.current = A
                    }))
                }["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach((function(A) {
                    var t = D[A];
                    D[A] = function(A, e) {
                        return S(), null == t ? void 0 : t(A, e)
                    }
                })), AA.useEffect((function() {
                    D.motionName || "motion" !== O || S()
                }), [D.motionName, O]), AA.useImperativeHandle(t, (function() {
                    return {
                        forceAlign: x,
                        getElement: function() {
                            return m.current
                        }
                    }
                }));
                var M = q(q({}, E), {}, {
                        zIndex: s,
                        opacity: "motion" !== O && "stable" !== O && e ? 0 : void 0,
                        pointerEvents: "stable" === O ? void 0 : "none"
                    }, o),
                    R = !0;
                !(null == l ? void 0 : l.points) || "align" !== O && "stable" !== O || (R = !1);
                var k = i;
                return AA.Children.count(i) > 1 && (k = AA.createElement("div", {
                    className: "".concat(n, "-content")
                }, i)), AA.createElement(et, X({
                    visible: e,
                    ref: m,
                    leavedClassName: "".concat(n, "-hidden")
                }, D, {
                    onAppearPrepare: K,
                    onEnterPrepare: K,
                    removeOnLeave: u,
                    forceRender: c
                }), (function(A, t) {
                    var e = A.className,
                        o = A.style,
                        i = FA()(n, r, C, e);
                    return AA.createElement(he, {
                        target: f || p,
                        key: "popup",
                        ref: y,
                        monitorWindowResize: !0,
                        disabled: R,
                        align: l,
                        onAlign: T
                    }, AA.createElement("div", {
                        ref: t,
                        className: i,
                        onMouseEnter: g,
                        onMouseLeave: d,
                        onMouseDownCapture: w,
                        onTouchStartCapture: v,
                        style: q(q({}, o), M)
                    }, k))
                }))
            }));
        ye.displayName = "PopupInner";
        var me = ye,
            Qe = AA.forwardRef((function(A, t) {
                var e = A.prefixCls,
                    n = A.visible,
                    r = A.zIndex,
                    o = A.children,
                    i = A.mobile,
                    s = (i = void 0 === i ? {} : i).popupClassName,
                    a = i.popupStyle,
                    u = i.popupMotion,
                    c = void 0 === u ? {} : u,
                    l = i.popupRender,
                    f = AA.useRef();
                AA.useImperativeHandle(t, (function() {
                    return {
                        forceAlign: function() {},
                        getElement: function() {
                            return f.current
                        }
                    }
                }));
                var p = q({
                        zIndex: r
                    }, a),
                    h = o;
                return AA.Children.count(o) > 1 && (h = AA.createElement("div", {
                    className: "".concat(e, "-content")
                }, o)), l && (h = l(h)), AA.createElement(et, X({
                    visible: n,
                    ref: f,
                    removeOnLeave: !0
                }, c), (function(A, t) {
                    var n = A.className,
                        r = A.style,
                        o = FA()(e, s, n);
                    return AA.createElement("div", {
                        ref: t,
                        className: o,
                        style: q(q({}, r), p)
                    }, h)
                }))
            }));
        Qe.displayName = "MobilePopupInner";
        var Ce = Qe,
            Ue = ["visible", "mobile"],
            Fe = AA.forwardRef((function(A, t) {
                var e = A.visible,
                    n = A.mobile,
                    r = $(A, Ue),
                    o = _A(Object(AA.useState)(e), 2),
                    i = o[0],
                    s = o[1],
                    a = _A(Object(AA.useState)(!1), 2),
                    u = a[0],
                    c = a[1],
                    l = q(q({}, r), {}, {
                        visible: i
                    });
                Object(AA.useEffect)((function() {
                    s(e), e && n && c(function() {
                        if ("undefined" == typeof navigator || "undefined" == typeof window) return !1;
                        var A = navigator.userAgent || navigator.vendor || window.opera;
                        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(A) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null == A ? void 0 : A.substr(0, 4)))
                    }())
                }), [e, n]);
                var f = u ? AA.createElement(Ce, X({}, l, {
                    mobile: n,
                    ref: t
                })) : AA.createElement(me, X({}, l, {
                    ref: t
                }));
                return AA.createElement("div", null, AA.createElement(rt, l), f)
            }));
        Fe.displayName = "Popup";
        var be = Fe,
            Ee = AA.createContext(null);

        function _e() {}

        function Ie() {
            return ""
        }

        function He(A) {
            return A ? A.ownerDocument : window.document
        }
        var Oe = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
        var Se, Le, xe = (Se = CA, (Le = function(A) {
                iA(e, A);
                var t = uA(e);

                function e(A) {
                    var n, r;
                    return tA(this, e), (n = t.call(this, A)).popupRef = AA.createRef(), n.triggerRef = AA.createRef(), n.attachId = void 0, n.clickOutsideHandler = void 0, n.touchOutsideHandler = void 0, n.contextMenuOutsideHandler1 = void 0, n.contextMenuOutsideHandler2 = void 0, n.mouseDownTimeout = void 0, n.focusTime = void 0, n.preClickTime = void 0, n.preTouchTime = void 0, n.delayTimer = void 0, n.hasPopupMouseDown = void 0, n.onMouseEnter = function(A) {
                        var t = n.props.mouseEnterDelay;
                        n.fireEvents("onMouseEnter", A), n.delaySetPopupVisible(!0, t, t ? null : A)
                    }, n.onMouseMove = function(A) {
                        n.fireEvents("onMouseMove", A), n.setPoint(A)
                    }, n.onMouseLeave = function(A) {
                        n.fireEvents("onMouseLeave", A), n.delaySetPopupVisible(!1, n.props.mouseLeaveDelay)
                    }, n.onPopupMouseEnter = function() {
                        n.clearDelayTimer()
                    }, n.onPopupMouseLeave = function(A) {
                        var t;
                        A.relatedTarget && !A.relatedTarget.setTimeout && gA(null === (t = n.popupRef.current) || void 0 === t ? void 0 : t.getElement(), A.relatedTarget) || n.delaySetPopupVisible(!1, n.props.mouseLeaveDelay)
                    }, n.onFocus = function(A) {
                        n.fireEvents("onFocus", A), n.clearDelayTimer(), n.isFocusToShow() && (n.focusTime = Date.now(), n.delaySetPopupVisible(!0, n.props.focusDelay))
                    }, n.onMouseDown = function(A) {
                        n.fireEvents("onMouseDown", A), n.preClickTime = Date.now()
                    }, n.onTouchStart = function(A) {
                        n.fireEvents("onTouchStart", A), n.preTouchTime = Date.now()
                    }, n.onBlur = function(A) {
                        n.fireEvents("onBlur", A), n.clearDelayTimer(), n.isBlurToHide() && n.delaySetPopupVisible(!1, n.props.blurDelay)
                    }, n.onContextMenu = function(A) {
                        A.preventDefault(), n.fireEvents("onContextMenu", A), n.setPopupVisible(!0, A)
                    }, n.onContextMenuClose = function() {
                        n.isContextMenuToShow() && n.close()
                    }, n.onClick = function(A) {
                        if (n.fireEvents("onClick", A), n.focusTime) {
                            var t;
                            if (n.preClickTime && n.preTouchTime ? t = Math.min(n.preClickTime, n.preTouchTime) : n.preClickTime ? t = n.preClickTime : n.preTouchTime && (t = n.preTouchTime), Math.abs(t - n.focusTime) < 20) return;
                            n.focusTime = 0
                        }
                        n.preClickTime = 0, n.preTouchTime = 0, n.isClickToShow() && (n.isClickToHide() || n.isBlurToHide()) && A && A.preventDefault && A.preventDefault();
                        var e = !n.state.popupVisible;
                        (n.isClickToHide() && !e || e && n.isClickToShow()) && n.setPopupVisible(!n.state.popupVisible, A)
                    }, n.onPopupMouseDown = function() {
                        var A;
                        n.hasPopupMouseDown = !0, clearTimeout(n.mouseDownTimeout), n.mouseDownTimeout = window.setTimeout((function() {
                            n.hasPopupMouseDown = !1
                        }), 0), n.context && (A = n.context).onPopupMouseDown.apply(A, arguments)
                    }, n.onDocumentClick = function(A) {
                        if (!n.props.mask || n.props.maskClosable) {
                            var t = A.target,
                                e = n.getRootDomNode(),
                                r = n.getPopupDomNode();
                            gA(e, t) && !n.isContextMenuOnly() || gA(r, t) || n.hasPopupMouseDown || n.close()
                        }
                    }, n.getRootDomNode = function() {
                        var A = n.props.getTriggerDOMNode;
                        if (A) return A(n.triggerRef.current);
                        try {
                            var t = dA(n.triggerRef.current);
                            if (t) return t
                        } catch (A) {}
                        return AA.default.findDOMNode(rA(n))
                    }, n.getPopupClassNameFromAlign = function(A) {
                        var t = [],
                            e = n.props,
                            r = e.popupPlacement,
                            o = e.builtinPlacements,
                            i = e.prefixCls,
                            s = e.alignPoint,
                            a = e.getPopupClassNameFromAlign;
                        return r && o && t.push(function(A, t, e, n) {
                            for (var r = e.points, o = Object.keys(A), i = 0; i < o.length; i += 1) {
                                var s = o[i];
                                if (bA(A[s].points, r, n)) return "".concat(t, "-placement-").concat(s)
                            }
                            return ""
                        }(o, i, A, s)), a && t.push(a(A)), t.join(" ")
                    }, n.getComponent = function() {
                        var A = n.props,
                            t = A.prefixCls,
                            e = A.destroyPopupOnHide,
                            r = A.popupClassName,
                            o = A.onPopupAlign,
                            i = A.popupMotion,
                            s = A.popupAnimation,
                            a = A.popupTransitionName,
                            u = A.popupStyle,
                            c = A.mask,
                            l = A.maskAnimation,
                            f = A.maskTransitionName,
                            p = A.maskMotion,
                            h = A.zIndex,
                            B = A.popup,
                            g = A.stretch,
                            d = A.alignPoint,
                            w = A.mobile,
                            v = A.forceRender,
                            y = n.state,
                            m = y.popupVisible,
                            Q = y.point,
                            C = n.getPopupAlign(),
                            U = {};
                        return n.isMouseEnterToShow() && (U.onMouseEnter = n.onPopupMouseEnter), n.isMouseLeaveToHide() && (U.onMouseLeave = n.onPopupMouseLeave), U.onMouseDown = n.onPopupMouseDown, U.onTouchStart = n.onPopupMouseDown, AA.createElement(be, X({
                            prefixCls: t,
                            destroyPopupOnHide: e,
                            visible: m,
                            point: d && Q,
                            className: r,
                            align: C,
                            onAlign: o,
                            animation: s,
                            getClassNameFromAlign: n.getPopupClassNameFromAlign
                        }, U, {
                            stretch: g,
                            getRootDomNode: n.getRootDomNode,
                            style: u,
                            mask: c,
                            zIndex: h,
                            transitionName: a,
                            maskAnimation: l,
                            maskTransitionName: f,
                            maskMotion: p,
                            ref: n.popupRef,
                            motion: i,
                            mobile: w,
                            forceRender: v
                        }), "function" == typeof B ? B() : B)
                    }, n.attachParent = function(A) {
                        BA.cancel(n.attachId);
                        var t, e = n.props,
                            r = e.getPopupContainer,
                            o = e.getDocument,
                            i = n.getRootDomNode();
                        r ? (i || 0 === r.length) && (t = r(i)) : t = o(n.getRootDomNode()).body, t ? t.appendChild(A) : n.attachId = BA((function() {
                            n.attachParent(A)
                        }))
                    }, n.getContainer = function() {
                        var A = (0, n.props.getDocument)(n.getRootDomNode()).createElement("div");
                        return A.style.position = "absolute", A.style.top = "0", A.style.left = "0", A.style.width = "100%", n.attachParent(A), A
                    }, n.setPoint = function(A) {
                        n.props.alignPoint && A && n.setState({
                            point: {
                                pageX: A.pageX,
                                pageY: A.pageY
                            }
                        })
                    }, n.handlePortalUpdate = function() {
                        n.state.prevPopupVisible !== n.state.popupVisible && n.props.afterPopupVisibleChange(n.state.popupVisible)
                    }, n.triggerContextValue = {
                        onPopupMouseDown: n.onPopupMouseDown
                    }, r = "popupVisible" in A ? !!A.popupVisible : !!A.defaultPopupVisible, n.state = {
                        prevPopupVisible: r,
                        popupVisible: r
                    }, Oe.forEach((function(A) {
                        n["fire".concat(A)] = function(t) {
                            n.fireEvents(A, t)
                        }
                    })), n
                }
                return nA(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.componentDidUpdate()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var A, t = this.props;
                        if (this.state.popupVisible) return this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow() || (A = t.getDocument(this.getRootDomNode()), this.clickOutsideHandler = mA(A, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (A = A || t.getDocument(this.getRootDomNode()), this.touchOutsideHandler = mA(A, "touchstart", this.onDocumentClick)), !this.contextMenuOutsideHandler1 && this.isContextMenuToShow() && (A = A || t.getDocument(this.getRootDomNode()), this.contextMenuOutsideHandler1 = mA(A, "scroll", this.onContextMenuClose)), void(!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = mA(window, "blur", this.onContextMenuClose)));
                        this.clearOutsideHandler()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), BA.cancel(this.attachId)
                    }
                }, {
                    key: "getPopupDomNode",
                    value: function() {
                        var A;
                        return (null === (A = this.popupRef.current) || void 0 === A ? void 0 : A.getElement()) || null
                    }
                }, {
                    key: "getPopupAlign",
                    value: function() {
                        var A = this.props,
                            t = A.popupPlacement,
                            e = A.popupAlign,
                            n = A.builtinPlacements;
                        return t && n ? function(A, t, e) {
                            return q(q({}, A[t] || {}), e)
                        }(n, t, e) : e
                    }
                }, {
                    key: "setPopupVisible",
                    value: function(A, t) {
                        var e = this.props.alignPoint,
                            n = this.state.popupVisible;
                        this.clearDelayTimer(), n !== A && ("popupVisible" in this.props || this.setState({
                            popupVisible: A,
                            prevPopupVisible: n
                        }), this.props.onPopupVisibleChange(A)), e && t && A && this.setPoint(t)
                    }
                }, {
                    key: "delaySetPopupVisible",
                    value: function(A, t, e) {
                        var n = this,
                            r = 1e3 * t;
                        if (this.clearDelayTimer(), r) {
                            var o = e ? {
                                pageX: e.pageX,
                                pageY: e.pageY
                            } : null;
                            this.delayTimer = window.setTimeout((function() {
                                n.setPopupVisible(A, o), n.clearDelayTimer()
                            }), r)
                        } else this.setPopupVisible(A, e)
                    }
                }, {
                    key: "clearDelayTimer",
                    value: function() {
                        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null)
                    }
                }, {
                    key: "clearOutsideHandler",
                    value: function() {
                        this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextMenuOutsideHandler1 && (this.contextMenuOutsideHandler1.remove(), this.contextMenuOutsideHandler1 = null), this.contextMenuOutsideHandler2 && (this.contextMenuOutsideHandler2.remove(), this.contextMenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null)
                    }
                }, {
                    key: "createTwoChains",
                    value: function(A) {
                        var t = this.props.children.props,
                            e = this.props;
                        return t[A] && e[A] ? this["fire".concat(A)] : t[A] || e[A]
                    }
                }, {
                    key: "isClickToShow",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.showAction;
                        return -1 !== t.indexOf("click") || -1 !== e.indexOf("click")
                    }
                }, {
                    key: "isContextMenuOnly",
                    value: function() {
                        var A = this.props.action;
                        return "contextMenu" === A || 1 === A.length && "contextMenu" === A[0]
                    }
                }, {
                    key: "isContextMenuToShow",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.showAction;
                        return -1 !== t.indexOf("contextMenu") || -1 !== e.indexOf("contextMenu")
                    }
                }, {
                    key: "isClickToHide",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.hideAction;
                        return -1 !== t.indexOf("click") || -1 !== e.indexOf("click")
                    }
                }, {
                    key: "isMouseEnterToShow",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.showAction;
                        return -1 !== t.indexOf("hover") || -1 !== e.indexOf("mouseEnter")
                    }
                }, {
                    key: "isMouseLeaveToHide",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.hideAction;
                        return -1 !== t.indexOf("hover") || -1 !== e.indexOf("mouseLeave")
                    }
                }, {
                    key: "isFocusToShow",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.showAction;
                        return -1 !== t.indexOf("focus") || -1 !== e.indexOf("focus")
                    }
                }, {
                    key: "isBlurToHide",
                    value: function() {
                        var A = this.props,
                            t = A.action,
                            e = A.hideAction;
                        return -1 !== t.indexOf("focus") || -1 !== e.indexOf("blur")
                    }
                }, {
                    key: "forcePopupAlign",
                    value: function() {
                        var A;
                        this.state.popupVisible && (null === (A = this.popupRef.current) || void 0 === A || A.forceAlign())
                    }
                }, {
                    key: "fireEvents",
                    value: function(A, t) {
                        var e = this.props.children.props[A];
                        e && e(t);
                        var n = this.props[A];
                        n && n(t)
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.setPopupVisible(!1)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var A = this.state.popupVisible,
                            t = this.props,
                            e = t.children,
                            n = t.forceRender,
                            r = t.alignPoint,
                            o = t.className,
                            i = t.autoDestroy,
                            s = AA.Children.only(e),
                            a = {
                                key: "trigger"
                            };
                        this.isContextMenuToShow() ? a.onContextMenu = this.onContextMenu : a.onContextMenu = this.createTwoChains("onContextMenu"), this.isClickToHide() || this.isClickToShow() ? (a.onClick = this.onClick, a.onMouseDown = this.onMouseDown, a.onTouchStart = this.onTouchStart) : (a.onClick = this.createTwoChains("onClick"), a.onMouseDown = this.createTwoChains("onMouseDown"), a.onTouchStart = this.createTwoChains("onTouchStart")), this.isMouseEnterToShow() ? (a.onMouseEnter = this.onMouseEnter, r && (a.onMouseMove = this.onMouseMove)) : a.onMouseEnter = this.createTwoChains("onMouseEnter"), this.isMouseLeaveToHide() ? a.onMouseLeave = this.onMouseLeave : a.onMouseLeave = this.createTwoChains("onMouseLeave"), this.isFocusToShow() || this.isBlurToHide() ? (a.onFocus = this.onFocus, a.onBlur = this.onBlur) : (a.onFocus = this.createTwoChains("onFocus"), a.onBlur = this.createTwoChains("onBlur"));
                        var u = FA()(s && s.props && s.props.className, o);
                        u && (a.className = u);
                        var c, l, f, p, h = q({}, a);
                        c = s, "function" == typeof(p = Object(wA.isMemo)(c) ? c.type.type : c.type) && !(null === (l = p.prototype) || void 0 === l ? void 0 : l.render) || "function" == typeof c && !(null === (f = c.prototype) || void 0 === f ? void 0 : f.render) || (h.ref = yA(this.triggerRef, s.ref));
                        var B, g = AA.cloneElement(s, h);
                        return (A || this.popupRef.current || n) && (B = AA.createElement(Se, {
                            key: "portal",
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate
                        }, this.getComponent())), !A && i && (B = null), AA.createElement(Ee.Provider, {
                            value: this.triggerContextValue
                        }, g, B)
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(A, t) {
                        var e = A.popupVisible,
                            n = {};
                        return void 0 !== e && t.popupVisible !== e && (n.popupVisible = e, n.prevPopupVisible = t.popupVisible), n
                    }
                }]), e
            }(AA.Component)).contextType = Ee, Le.defaultProps = {
                prefixCls: "rc-trigger-popup",
                getPopupClassNameFromAlign: Ie,
                getDocument: He,
                onPopupVisibleChange: _e,
                afterPopupVisibleChange: _e,
                onPopupAlign: _e,
                popupClassName: "",
                mouseEnterDelay: 0,
                mouseLeaveDelay: .1,
                focusDelay: 0,
                blurDelay: .15,
                popupStyle: {},
                destroyPopupOnHide: !1,
                popupAlign: {},
                defaultPopupVisible: !1,
                mask: !1,
                maskClosable: !0,
                action: [],
                showAction: [],
                hideAction: [],
                autoDestroy: !1
            }, Le),
            Te = {
                adjustX: 1,
                adjustY: 1
            },
            De = [0, 0],
            Ke = {
                left: {
                    points: ["cr", "cl"],
                    overflow: Te,
                    offset: [-4, 0],
                    targetOffset: De
                },
                right: {
                    points: ["cl", "cr"],
                    overflow: Te,
                    offset: [4, 0],
                    targetOffset: De
                },
                top: {
                    points: ["bc", "tc"],
                    overflow: Te,
                    offset: [0, -4],
                    targetOffset: De
                },
                bottom: {
                    points: ["tc", "bc"],
                    overflow: Te,
                    offset: [0, 4],
                    targetOffset: De
                },
                topLeft: {
                    points: ["bl", "tl"],
                    overflow: Te,
                    offset: [0, -4],
                    targetOffset: De
                },
                leftTop: {
                    points: ["tr", "tl"],
                    overflow: Te,
                    offset: [-4, 0],
                    targetOffset: De
                },
                topRight: {
                    points: ["br", "tr"],
                    overflow: Te,
                    offset: [0, -4],
                    targetOffset: De
                },
                rightTop: {
                    points: ["tl", "tr"],
                    overflow: Te,
                    offset: [4, 0],
                    targetOffset: De
                },
                bottomRight: {
                    points: ["tr", "br"],
                    overflow: Te,
                    offset: [0, 4],
                    targetOffset: De
                },
                rightBottom: {
                    points: ["bl", "br"],
                    overflow: Te,
                    offset: [4, 0],
                    targetOffset: De
                },
                bottomLeft: {
                    points: ["tl", "bl"],
                    overflow: Te,
                    offset: [0, 4],
                    targetOffset: De
                },
                leftBottom: {
                    points: ["br", "bl"],
                    overflow: Te,
                    offset: [-4, 0],
                    targetOffset: De
                }
            },
            Me = function(A) {
                var t = A.overlay,
                    e = A.prefixCls,
                    n = A.id,
                    r = A.overlayInnerStyle;
                return AA.createElement("div", {
                    className: "".concat(e, "-inner"),
                    id: n,
                    role: "tooltip",
                    style: r
                }, "function" == typeof t ? t() : t)
            },
            Re = function(A, t) {
                var e = A.overlayClassName,
                    n = A.trigger,
                    r = void 0 === n ? ["hover"] : n,
                    o = A.mouseEnterDelay,
                    i = void 0 === o ? 0 : o,
                    s = A.mouseLeaveDelay,
                    a = void 0 === s ? .1 : s,
                    u = A.overlayStyle,
                    c = A.prefixCls,
                    l = void 0 === c ? "rc-tooltip" : c,
                    f = A.children,
                    p = A.onVisibleChange,
                    h = A.afterVisibleChange,
                    B = A.transitionName,
                    g = A.animation,
                    d = A.motion,
                    w = A.placement,
                    v = void 0 === w ? "right" : w,
                    y = A.align,
                    m = void 0 === y ? {} : y,
                    Q = A.destroyTooltipOnHide,
                    C = void 0 !== Q && Q,
                    U = A.defaultVisible,
                    F = A.getTooltipContainer,
                    b = A.overlayInnerStyle,
                    E = $(A, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]),
                    _ = Object(AA.useRef)(null);
                Object(AA.useImperativeHandle)(t, (function() {
                    return _.current
                }));
                var I = q({}, E);
                "visible" in A && (I.popupVisible = A.visible);
                var H = !1,
                    O = !1;
                if ("boolean" == typeof C) H = C;
                else if (C && "object" === Y(C)) {
                    var S = C.keepParent;
                    H = !0 === S, O = !1 === S
                }
                return AA.createElement(xe, X({
                    popupClassName: e,
                    prefixCls: l,
                    popup: function() {
                        var t = A.arrowContent,
                            e = void 0 === t ? null : t,
                            n = A.overlay,
                            r = A.id;
                        return [AA.createElement("div", {
                            className: "".concat(l, "-arrow"),
                            key: "arrow"
                        }, e), AA.createElement(Me, {
                            key: "content",
                            prefixCls: l,
                            id: r,
                            overlay: n,
                            overlayInnerStyle: b
                        })]
                    },
                    action: r,
                    builtinPlacements: Ke,
                    popupPlacement: v,
                    ref: _,
                    popupAlign: m,
                    getPopupContainer: F,
                    onPopupVisibleChange: p,
                    afterPopupVisibleChange: h,
                    popupTransitionName: B,
                    popupAnimation: g,
                    popupMotion: d,
                    defaultPopupVisible: U,
                    destroyPopupOnHide: H,
                    autoDestroy: O,
                    mouseLeaveDelay: a,
                    popupStyle: u,
                    mouseEnterDelay: i
                }, I), f)
            },
            ke = Object(AA.forwardRef)(Re);
        e(138);

        function Ne(A) {
            var t = A.message,
                e = A.children,
                n = A.inner,
                r = void 0 !== n && n,
                o = A.placement,
                i = void 0 === o ? "top" : o;
            return Object(V.g)(ke, {
                destroyTooltipOnHide: {
                    keepParent: !1
                },
                align: {
                    offset: [0, 0]
                },
                overlayStyle: {
                    zIndex: 9999999
                },
                placement: i,
                trigger: ["hover"],
                getTooltipContainer: function(A) {
                    return r ? A.parentNode : document.body
                },
                offsetX: 10,
                overlay: Object(V.g)("span", null, t)
            }, e)
        }
        var Pe = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1619960814342",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "3842",
                    width: "16",
                    height: "16"
                }, t), [Object(V.g)("path", {
                    d: "M298.688 170.688c0-47.168 38.208-85.376 85.312-85.376h469.312c47.168 0 85.376 38.208 85.376 85.376V640c0 47.104-38.208 85.312-85.376 85.312h-42.624V298.688c0-42.688-42.688-85.376-85.376-85.376H298.688v-42.624z",
                    "p-id": "3843"
                }, []), Object(V.g)("path", {
                    d: "M213.312 298.688C166.208 298.688 128 336.896 128 384v426.688C128 857.792 166.208 896 213.312 896H640c47.104 0 85.312-38.208 85.312-85.312V384c0-47.104-38.208-85.312-85.312-85.312H213.312z",
                    "p-id": "3844"
                }, [])])
            },
            je = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1619961165285",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "7490",
                    width: "16",
                    height: "16"
                }, t), [Object(V.g)("path", {
                    d: "M809.984 169.984V256H213.973333V169.984h148.010667L405.973333 128h212.010667l43.989333 41.984h148.010667zM256 809.984v-512h512v512C768 855.978667 727.978667 896 681.984 896H341.973333c-45.994667 0-86.016-40.021333-86.016-86.016z",
                    "p-id": "7491"
                }, [])])
            },
            Ge = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1625327747118",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), [Object(V.g)("path", {
                    d: "M94.293333 929.92a30.037333 30.037333 0 0 0 30.72 7.210667l324.565334-108.202667s1.962667-0.810667 2.56-0.981333c5.205333-2.218667 9.216-6.186667 9.216-6.186667l420.608-420.821333c0.170667-0.426667 7.168-8.192 7.978666-9.173334 15.36-18.176 47.914667-62.72 48.725334-124.16 0.213333-39.722667-16-84.864-56.746667-125.397333-40.533333-40.917333-85.674667-57.088-125.397333-56.874667-79.488 0.981333-130.816 55.082667-133.418667 56.874667l-420.778667 420.821333a38.4 38.4 0 0 0-6.186666 9.173334l-1.024 2.602666-108.245334 324.608a29.44 29.44 0 0 0 7.381334 30.506667z m82.645334-110.933333s13.994667-3.029333 23.552 5.76c9.002667 8.192 9.002667 21.162667 9.002666 21.162666l-46.72 15.573334 14.165334-42.538667z m64.725333-194.090667l109.44 48.128 48.128 109.610667-129.834667 43.306666c-4.565333-13.184-12.373333-29.568-25.557333-42.922666a99.157333 99.157333 0 0 0-46.336-25.557334l44.16-132.565333z m208.085333 123.605333l-40.106666-91.434666 348.885333-349.141334 65.877333 65.877334-374.613333 374.698666zM665.472 184.746667c0.170667-0.597333 42.325333-40.533333 91.050667-39.338667 24.362667 0.213333 51.328 8.192 83.072 39.338667 31.146667 31.573333 38.954667 58.453333 39.338666 83.029333 0.426667 22.357333-7.978667 42.752-17.152 58.88l-82.090666-82.005333a29.952 29.952 0 0 0-42.325334 0l-370.090666 370.304-91.477334-40.362667 389.674667-389.845333z",
                    "p-id": "8955"
                }, [])])
            },
            Ve = e(2),
            We = (e(41), function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1598750651203",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "43825",
                    width: "18",
                    height: "18"
                }, t), [Object(V.g)("defs", {}, [Object(V.g)("style", {
                    type: "text/css"
                }, [])]), Object(V.g)("path", {
                    d: "M102.6 576h690.8c8.8 0 16 7.2 16 16 0 4.2-1.6 8.4-4.6 11.4L459.2 948.6c-6.2 6.2-16.4 6.2-22.6 0L91.4 603.4c-6.2-6.2-6.2-16.4 0-22.6 3-3 7-4.8 11.2-4.8z",
                    "p-id": "43826"
                }, []), Object(V.g)("path", {
                    d: "M448 973.4c-9.2 0-18.4-3.6-25.4-10.6L61.2 601.4c-14-14-14-36.8 0-51l14.2 14.2-14.2-14.2L422.6 189.2c6.8-6.8 15.8-10.6 25.4-10.6 9.6 0 18.6 3.8 25.4 10.6l361.4 361.4c14 14 14 36.8 0 51L473.4 962.8c-7 7-16.2 10.6-25.4 10.6zM92.2 576L448 931.8 803.8 576 448 220.2 92.2 576z m-2.8 2.8z",
                    fill: "#2660D0",
                    "p-id": "43827"
                }, []), Object(V.g)("path", {
                    d: "M760.2 524c-5.2 0-10.2-2-14.2-5.8l-440.2-442c-7.8-7.8-7.8-20.4 0-28.2 7.8-7.8 20.4-7.8 28.2 0l440.2 442c7.8 7.8 7.8 20.4 0 28.2-3.8 3.8-8.8 5.8-14 5.8z",
                    fill: "#2660D0",
                    "p-id": "43828"
                }, []), Object(V.g)("path", {
                    d: "M870 832c35.4 0 64-28.6 64-64 0-23.6-21.4-66.2-64-128-42.6 61.8-64 104.4-64 128 0 35.4 28.6 64 64 64z",
                    "p-id": "43829"
                }, []), Object(V.g)("path", {
                    d: "M870 852c-46.4 0-84-37.6-84-84 0-17.8 7-51.8 67.6-139.4 3.8-5.4 9.8-8.6 16.4-8.6s12.8 3.2 16.4 8.6c60.6 87.6 67.6 121.6 67.6 139.4 0 46.4-37.6 84-84 84z m0-176.2c-20.8 32.2-44 72.4-44 92.2 0 24.2 19.8 44 44 44s44-19.8 44-44c0-9.6-6.2-33.8-44-92.2z",
                    fill: "#2660D0",
                    "p-id": "43830"
                }, [])])
            });

        function Je(A) {
            var t = A.colors,
                e = A.current,
                n = A.selectColor;
            return Object(V.g)("pagenote-colors", null, Object(V.g)("pagenote-color-items", null, t.map((function(A) {
                return Object(V.g)("pagenote-icon", {
                    "aria-controls": "color-item",
                    onClick: function() {
                        ! function(A) {
                            n(A)
                        }(A)
                    },
                    "data-active": "".concat(A === e ? "1" : ""),
                    style: {
                        backgroundColor: A
                    }
                })
            }))), Object(V.g)("pagenote-icon", null, Object(V.g)(We, {
                width: 20,
                height: 20,
                fill: e
            })))
        }

        function Xe(A) {
            var t = A.step,
                e = A.colors,
                n = (t.data, Object(Ve.k)(!1)),
                r = J()(n, 2),
                o = r[0],
                i = r[1],
                s = Object(Ve.k)(t.data.bg),
                a = J()(s, 2),
                u = a[0],
                c = a[1],
                l = function() {
                    i(!0), setTimeout((function() {
                        i(!1)
                    }), 3e3)
                };
            return Object(V.g)("pagenote-light-actions", null, Object(V.g)(Ne, {
                inner: !0,
                message: P.t(o ? "copied" : "copy_keyword_annotation")
            }, Object(V.g)("pagenote-icon", {
                onClick: function() {
                    t.copyToClipboard(!1), l()
                },
                onDblClick: function() {
                    t.copyToClipboard(!0), l()
                }
            }, Object(V.g)(Pe, {
                fill: u,
                width: 20,
                height: 20
            }))), Object(V.g)(Ne, {
                inner: !0,
                message: P.t("comment")
            }, Object(V.g)("pagenote-icon", {
                onClick: function() {
                    t.openEditor()
                }
            }, Object(V.g)(Ge, {
                fill: u,
                width: 20,
                height: 20
            }))), Object(V.g)(Ne, {
                inner: !0,
                message: P.t("remove_marks")
            }, Object(V.g)("pagenote-icon", null, Object(V.g)(je, {
                width: 20,
                height: 20,
                fill: u,
                onClick: function() {
                    t.delete()
                }
            }))), Object(V.g)(Ne, {
                inner: !0,
                message: P.t("change_color")
            }, Object(V.g)(Je, {
                colors: e,
                current: u,
                selectColor: function(A) {
                    c(A), t.data.bg = A
                }
            })))
        }
        var Ye = function(A, t, e, n) {
            return
        };
        e(139);

        function ze(A, t) {
            var e = this,
                n = document.createElement("pagenote-block");
            n.dataset.role = "modal";
            var r = document.createElement("pagenote-block");
            r.dataset.role = "mask";
            var o = document.createElement("pagenote-block");
            o.dataset.role = "content", A && o.appendChild(A), n.appendChild(r), n.appendChild(o), r.onclick = function() {
                e.destroy()
            }, this.root = n, this.content = o
        }
        ze.prototype.show = function(A, t) {
            var e = this;
            e._onresize = function() {
                var A = document.documentElement.scrollHeight,
                    t = document.documentElement.scrollWidth;
                e.root.style.width = t + "px", e.root.style.height = A + "px"
            }, window.addEventListener("resize", e._onresize), e._onresize(), t && (this.content.style.left = t.left, this.content.style.top = t.top), A && (x(this.content), this.content.appendChild(A)), document.documentElement.appendChild(this.root)
        }, ze.prototype.destroy = function() {
            this.root && this.root.parentNode && this.root.parentNode.removeChild(this.root), window.removeEventListener("resize", this._onresize)
        };
        var Ze = ze;
        e(49), e(143);
        var qe = function(A) {
            var t = document.createElement("light");
            return t.dataset.highlight = "1", t.style.color = "red", t.textContent = A, t
        };

        function $e(A, t, e, n, r, o, i) {
            ! function A(e, i) {
                var s = t.exec(e.value);
                if (s && s[i]) {
                    var a = s.index;
                    if (0 !== i)
                        for (var u = 1; u < i; u++) a += s[u].length;
                    ! function(A, t, e, r, o) {
                        A.nodes.every((function(i, s) {
                            var a = A.nodes[s + 1];
                            if (void 0 === a || a.start > t) {
                                if (!r(i.node)) return !1;
                                var u = t - i.start,
                                    c = (e > i.end ? i.end : e) - i.start,
                                    l = A.value.substr(0, i.start),
                                    f = A.value.substr(c + i.start);
                                if (i.node = function(A, t, e) {
                                        var r = A.splitText(t),
                                            o = r.splitText(e - t),
                                            i = n(r.textContent);
                                        return r.parentNode.replaceChild(i, r), o
                                    }(i.node, u, c), A.value = l + f, A.nodes.forEach((function(t, e) {
                                        e >= s && (A.nodes[e].start > 0 && e !== s && (A.nodes[e].start -= c), A.nodes[e].end -= c)
                                    })), e -= c, o(i.node.previousSibling, i.start), !(e > i.end)) return !1;
                                t = i.end
                            }
                            return !0
                        }))
                    }(e, a, a + s[i].length, (function(A) {
                        return r(s[i], A)
                    }), (function(A, e) {
                        t.lastIndex = e, o(A)
                    })), A(e, i)
                }
            }(A, e + 1), i()
        }

        function An(A) {
            return A ? A.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(/[\s]+/gim, "[\\s]*") : "\\s*"
        }
        var tn = function(A, t, e, n, r, o, i) {
            void 0 === e && (e = ""), void 0 === n && (n = ""), void 0 === r && (r = 20), void 0 === o && (o = qe), void 0 === i && (i = []);
            var s = {
                    match: 0,
                    lightsElement: []
                },
                a = function(A) {
                    for (var t, e = [], n = {
                            acceptNode: function(A) {
                                return 3 === A.nodeType ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                            }
                        }, r = document.createNodeIterator(A, NodeFilter.SHOW_TEXT, n), o = ""; t = r.nextNode();) e.push({
                        node: t,
                        start: o.length,
                        end: (o += t.textContent).length
                    });
                    return {
                        nodes: e,
                        value: o
                    }
                }(A);
            return function(A, t, e) {
                void 0 === t && (t = ""), void 0 === e && (e = "");
                var n = An(A),
                    r = An(t.trim()),
                    u = An(e.trim()),
                    c = new RegExp("(" + r + "\\s*)(" + n + ")\\s*" + (!!e ? "(" + u + ")" : ""), "gmi");
                $e(a, c, 1, o, (function(A, t) {
                    var e = (i || []).some((function(A) {
                        return A && A.contains(t)
                    }));
                    // console.log(t, t.nodeType);
                    var n = !!(3 === t.nodeType ? t.parentNode : t).dataset.highlight;
                    return !e && !n && "LIGHT" !== t.tagName
                }), (function(A) {
                    s.match++, s.lightsElement.push(A)
                }), (function() {}))
            }(t, e, n), s
        };

        function en(A, t, e, n) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                o = arguments.length > 5 ? arguments[5] : void 0;
            A.dataset.visiable = e ? "1" : "0", A.dataset.tip = n ? "1" : "0", A.style = "--color:".concat(t), A.dataset.focus = r, A.dataset.lighting = o
        }
        var nn = function(A, t, e) {
                if (e || 2 === arguments.length)
                    for (var n, r = 0, o = t.length; r < o; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
                return A.concat(n || Array.prototype.slice.call(t))
            },
            rn = new IntersectionObserver((function(A) {
                A.forEach((function(A) {
                    A.target && A.target._light && (A.target._light.runtime.isVisible = A.intersectionRatio > 0)
                }))
            }), {});
        var on = function() {
                var A = this;
                A.addListener((function(t, e, o) {
                    if ("relatedNode" === e)
                        for (var i = function(t) {
                                var e = o[t];
                                if (e._light) return "continue";
                                e.onclick = function(t) {
                                    var e = (A.data.lightStatus || n.UN_LIGHT) + 1;
                                    switch (Ye(!0, A), A.data.lightStatus = e > n.LIGHT ? n.UN_LIGHT : e, A.data.lightStatus) {
                                        case n.UN_LIGHT:
                                            A.data.annotationStatus = r.HIDE;
                                            break;
                                        case n.LIGHT:
                                            A.data.annotationStatus = r.SHOW
                                    }
                                    A.data.tip && (A.runtime.lighting = "annotation"), setTimeout((function() {
                                        A.runtime.lighting = ""
                                    }), 2e3), t.stopPropagation()
                                }, e.ondblclick = function(t) {
                                    t.stopPropagation(), A.openEditor()
                                }, e.onmouseenter = function() {
                                    clearTimeout(A.runtime.focusTimer), A.data.tip || A.connectToKeywordTag(!0), A.runtime.focusTimer = setTimeout((function() {
                                        A.runtime.isFocusTag = !0
                                    }), 300)
                                }, e.onmouseleave = function() {
                                    clearTimeout(A.runtime.focusTimer), A.runtime.focusTimer = setTimeout((function() {
                                        A.runtime.isFocusTag = !1
                                    }), 800)
                                }, rn.observe(e), e.remove = function() {
                                    rn.unobserve(e),
                                        function(A) {
                                            var t;
                                            if ("string" == typeof A ? t = document.querySelector(A) : A instanceof HTMLElement && (t = A), t)
                                                if ("_originNode" in t) t.parentNode.replaceChild(t._originNode, t);
                                                else {
                                                    var e = [].find.call(t.childNodes, (function(A) {
                                                        return 3 === A.nodeType || "#text" === A.nodeName
                                                    }));
                                                    t.outerHTML = e ? e.textContent : t.textContent
                                                }
                                        }(e)
                                }, e._light = A
                            }, s = 0; s < o.length; s++) i(s)
                }), !0, "initKeywordTag");
                var t = function() {
                    (A.runtime.relatedNode || []).forEach((function(t) {
                        ! function(A, t, e, n) {
                            var r = t.bg,
                                o = t.lightStatus,
                                i = t.tip;
                            if (r) {
                                var s = U(r),
                                    a = s.textColor,
                                    u = s.rgb,
                                    c = "rgb(".concat(u[0] - 30, ",").concat(u[1] - 30, ",").concat(u[2] - 30, ")"),
                                    l = "rgba(".concat(u.toString(), ",1)");
                                A.dataset.active = [1, 2, 3].includes(o) ? "".concat(o) : o ? "1" : "0", A.dataset.note = i ? "1" : "0", A.dataset.lighting = n.lighting, A.style = "--bgcolor:".concat(l, ";--color:").concat(a, ";--bgbottomcolor:").concat(c, ";background-image: linear-gradient(0deg,").concat(l, " 2em,").concat(l, " 0);"), e && (i ? A.appendChild(e) : e.parentNode && e.parentNode.removeChild(e))
                            }
                        }(t, A.data, null, A.runtime)
                    }))
                };
                A.addListener(t, !1), A.addListener(t, !0);
                var e = A.data,
                    o = (e.bg, e.id),
                    i = e.text,
                    s = e.pre,
                    a = e.suffix,
                    u = e.lightId,
                    c = (e.lightStatus, e.images),
                    l = void 0 === c ? [] : c;

                function f(t) {
                    var e = 0,
                        n = tn(t, i || "", s || "", a || "", null, (function(A) {
                            var t = document.createElement("light");
                            return t.dataset.highlight = u, t.dataset.lightindex = String(e), e++, A && (t.textContent = A), t
                        }), [w()]);
                    if (A.runtime.warn = n ? "" : "未找到匹配内容", n) {
                        A.runtime.relatedNode = nn(nn([], A.runtime.relatedNode, !0), n.lightsElement, !0);
                        var r = {
                            offsetBodyTop: 0,
                            offsetBodyLeft: 0
                        };
                        try {
                            r = g.compute(n.lightsElement[0])
                        } catch (A) {}
                        A.runtime.relatedNodePosition = {
                            top: r.offsetBodyTop,
                            left: r.offsetBodyLeft
                        }
                    }
                }
                var p = null;
                ! function t(e) {
                    var n = g.getTarget(o);
                    clearTimeout(p), n ? (i && f(n), l.forEach((function(t) {
                        var e = function(A, t) {
                            var e = A.querySelector('img[src="' + t + '"]');
                            if (e) {
                                var n = document.createElement("light-img");
                                return n.appendChild(e.cloneNode()), e.parentElement.replaceChild(n, e), n._originNode = e, n
                            }
                        }(n, t.src);
                        if (e) {
                            var r = nn(nn([], A.runtime.relatedNode, !0), [e], !1);
                            A.runtime.relatedNode = r
                        }
                    }))) : e < 8 ? p = setTimeout((function() {
                        t(++e)
                    }), 2e3 * e) : f(document.body)
                }(0)
            },
            sn = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1598778123562",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), [Object(V.g)("defs", {}, [Object(V.g)("style", {
                    type: "text/css"
                }, [])]), Object(V.g)("path", {
                    d: "M512 204.8m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z",
                    "p-id": "48874"
                }, []), Object(V.g)("path", {
                    d: "M512 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z",
                    "p-id": "48875"
                }, []), Object(V.g)("path", {
                    d: "M512 819.2m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z",
                    "p-id": "48876"
                }, [])])
            },
            an = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1598751268742",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "45735",
                    width: "18",
                    height: "18"
                }, t), [Object(V.g)("defs", {}, [Object(V.g)("style", {
                    type: "text/css"
                }, [])]), Object(V.g)("path", {
                    d: "M874.24 806.4c11.52 11.52 14.08 25.6 6.4 33.28l12.8 47.36-47.36-12.8c-7.68 7.68-23.04 3.84-33.28-6.4L561.92 615.68c-11.52-11.52-14.08-25.6-6.4-33.28l33.28-33.28c7.68-7.68 23.04-3.84 33.28 6.4L874.24 806.4z",
                    fill: "#E64C45",
                    "p-id": "45736"
                }, []), Object(V.g)("path", {
                    d: "M894.72 899.84h-3.84l-40.96-11.52c-6.4 2.56-12.8 3.84-20.48 2.56-8.96-1.28-17.92-6.4-24.32-14.08L552.96 624.64c-7.68-7.68-11.52-15.36-14.08-24.32-2.56-10.24 0-20.48 7.68-26.88l33.28-33.28c6.4-6.4 16.64-8.96 26.88-7.68 8.96 1.28 17.92 6.4 24.32 14.08L883.2 797.44c14.08 14.08 17.92 32 11.52 44.8l11.52 40.96c1.28 3.84 0 8.96-3.84 12.8-1.28 2.56-5.12 3.84-7.68 3.84z m-47.36-38.4h3.84l24.32 7.68-7.68-24.32c-1.28-3.84 0-8.96 3.84-12.8 1.28-1.28 1.28-7.68-6.4-15.36L613.12 564.48c-3.84-3.84-7.68-6.4-11.52-6.4h-3.84l-33.28 33.28v3.84c1.28 3.84 3.84 7.68 6.4 11.52L823.04 857.6c3.84 3.84 7.68 6.4 11.52 6.4h3.84c2.56-1.28 5.12-2.56 8.96-2.56z",
                    fill: "#231C1C",
                    "p-id": "45737"
                }, []), Object(V.g)("path", {
                    d: "M431.36 162.56L371.2 102.4c-11.52-11.52-29.44-11.52-39.68 0L108.8 323.84c-11.52 11.52-11.52 29.44 0 39.68l60.16 60.16c11.52 11.52 29.44 11.52 39.68 0l12.8-12.8c1.28 5.12 3.84 8.96 7.68 12.8L410.88 665.6c3.84 3.84 7.68 6.4 12.8 7.68-3.84 37.12 5.12 70.4 28.16 93.44l322.56-322.56c-23.04-23.04-56.32-32-93.44-28.16-1.28-5.12-3.84-8.96-7.68-12.8L431.36 222.72c-3.84-3.84-7.68-6.4-12.8-7.68l12.8-12.8c11.52-10.24 11.52-28.16 0-39.68z",
                    "p-id": "45738"
                }, []), Object(V.g)("path", {
                    d: "M451.84 779.52c-3.84 0-6.4-1.28-8.96-3.84-23.04-23.04-34.56-55.04-32-94.72-2.56-1.28-5.12-3.84-7.68-6.4l-1.28-1.28-181.76-240.64-1.28 1.28c-7.68 7.68-17.92 11.52-29.44 11.52-11.52 0-21.76-3.84-29.44-11.52l-60.16-60.16c-16.64-16.64-16.64-42.24 0-58.88L321.28 93.44c16.64-16.64 42.24-16.64 58.88 0l60.16 60.16c7.68 7.68 11.52 17.92 11.52 29.44 0 11.52-3.84 21.76-11.52 29.44l-1.28 1.28 240.64 180.48 1.28 1.28c2.56 2.56 3.84 5.12 6.4 7.68 38.4-1.28 71.68 8.96 94.72 32 2.56 2.56 3.84 5.12 3.84 8.96 0 3.84-1.28 6.4-3.84 8.96L460.8 775.68c-2.56 2.56-6.4 3.84-8.96 3.84z m-30.72-122.88c1.28 1.28 3.84 2.56 6.4 3.84 6.4 1.28 10.24 7.68 8.96 14.08-2.56 21.76 0 49.92 15.36 72.96L755.2 445.44c-23.04-16.64-52.48-17.92-72.96-15.36-6.4 1.28-11.52-3.84-14.08-8.96-1.28-2.56-1.28-5.12-3.84-6.4L423.68 232.96l-1.28-1.28c-1.28-1.28-3.84-2.56-6.4-3.84-3.84-1.28-7.68-5.12-8.96-8.96-1.28-3.84 0-8.96 3.84-12.8l12.8-12.8c2.56-2.56 5.12-6.4 5.12-11.52 0-3.84-1.28-7.68-5.12-11.52l-60.16-60.16c-6.4-6.4-16.64-6.4-21.76 0L117.76 332.8c-6.4 6.4-6.4 16.64 0 21.76l60.16 60.16c2.56 2.56 6.4 5.12 11.52 5.12 3.84 0 7.68-1.28 11.52-5.12l12.8-12.8c3.84-3.84 7.68-5.12 12.8-3.84 3.84 1.28 7.68 5.12 8.96 8.96 1.28 2.56 2.56 5.12 3.84 6.4l1.28 1.28 180.48 241.92z",
                    fill: "#231C1C",
                    "p-id": "45739"
                }, []), Object(V.g)("path", {
                    d: "M214.016 402.2528L412.2112 204.032l18.0992 18.112L232.1152 420.352z",
                    fill: "#231C1C",
                    "p-id": "45740"
                }, [])])
            },
            un = e(50),
            cn = e.n(un),
            ln = e(51),
            fn = e.n(ln),
            pn = (e(145), ["message", "children", "inner"]);

        function hn(A) {
            var t = A.message,
                e = A.children,
                n = A.inner,
                r = void 0 !== n && n,
                o = fn()(A, pn);
            Object(V.f)();
            return Object(V.g)(ke, cn()({
                destroyTooltipOnHide: {
                    keepParent: !1
                },
                overlayStyle: {
                    zIndex: 9999999
                },
                prefixCls: "rc-popover",
                placement: "bottom",
                trigger: ["click"],
                overlay: Object(V.g)("span", null, t),
                getTooltipContainer: function(A) {
                    return r ? A.parentNode : document.body
                }
            }, o), e)
        }
        e(146);

        function Bn(A) {
            var t = A.step,
                e = A.colors,
                o = t.data,
                i = Object(Ve.k)(!1),
                s = J()(i, 2),
                a = s[0],
                u = s[1],
                c = Object(Ve.k)(t.data.bg),
                l = J()(c, 2),
                f = l[0],
                p = l[1],
                h = Object(Ve.k)(t.data.annotationStatus),
                B = J()(h, 2),
                g = B[0],
                d = B[1],
                w = function(A) {
                    u(!0), T(A ? o.text + "\n" + o.tip : o.text), setTimeout((function() {
                        u(!1)
                    }), 3e3)
                };
            t.addListener((function() {
                d(t.data.annotationStatus), p(t.data.bg)
            }), !1, "actions");
            var v = g === r.SHOW;
            return Object(V.g)("pagenote-span", {
                onClick: function(A) {
                    A.stopPropagation()
                }
            }, Object(V.g)(Ne, {
                placement: "top",
                inner: !0,
                message: P.t(v ? "un_pin" : "pin") + "[p]"
            }, Object(V.g)("pagenote-icon", {
                inner: !0,
                "aria-controls": "pin",
                "data-status": v ? "pin" : "",
                onClick: function() {
                    //shuie pin functiuon
                    o.annotationStatus === r.SHOW ? (o.annotationStatus = r.HIDE, o.lightStatus = n.UN_LIGHT) : (o.annotationStatus = r.SHOW, o.lightStatus = n.LIGHT)
                }
            }, Object(V.g)(an, {
                fill: v ? f : "#fff"
            }))), Object(V.g)(Ne, {
                placement: "bottom",
                inner: !0,
                message: P.t(a ? "copied" : "copy_keyword_annotation") + "[c]"
            }, Object(V.g)("pagenote-icon", {
                onClick: function() {
                    return w(!1)
                },
                onDblClick: function() {
                    w(!0)
                }
            }, Object(V.g)(Pe, {
                fill: f,
                width: 20,
                height: 20
            }))), Object(V.g)(Ne, {
                placement: "top",
                inner: !0,
                message: P.t("comment") + "[m]"
            }, Object(V.g)("pagenote-icon", {
                onClick: function() {
                    t.openEditor()
                }
            }, Object(V.g)(Ge, {
                fill: f,
                width: 20,
                height: 20
            }))), Object(V.g)(Ne, {
                placement: "top",
                inner: !0,
                message: P.t("change_color")
            }, Object(V.g)(Je, {
                colors: e,
                current: f,
                selectColor: function(A) {
                    p(A), t.data.bg = A
                }
            })), Object(V.g)(Ne, {
                placement: "top",
                inner: !0,
                message: P.t("remove_marks")
            }, Object(V.g)("pagenote-icon", {
                "aria-controls": "delete-icon"
            }, Object(V.g)(je, {
                width: 20,
                height: 20,
                fill: f,
                onClick: function() {
                    t.delete()
                }
            }))))
        }
        var gn = e(52),
            dn = e.n(gn);
        var wn = function() {
            var A = this,
                t = A.options.renderAnnotation;
            if (!t || "function" == typeof t) {
                var e = A.data,
                    n = e.bg,
                    o = e.x,
                    i = e.y,
                    s = e.tip,
                    a = e.lightId,
                    u = e.text,
                    c = document.createElement("pagenote-annotation");
                c.dataset.lightid = a;
                var l = document.createElement("pagenote-annotation-inner"),
                    f = document.createElement("pagenote-annotation-header");
                f.onclick = function() {
                    //shuise, forbidden for head click
                    // A.lighting()
                };
                var p, h, B, g, d, w, v = document.createElement("pagenote-annotation-menus"),
                    y = t(A.data, A);
                p = v, h = {
                    light: A,
                    colors: A.options.colors,
                    moreActions: y[1] || []
                }, B = h.light, g = h.colors, d = h.moreActions, w = void 0 === d ? [] : d, Object(V.j)(Object(V.g)("pagenote-menu", null, Object(V.g)(Bn, {
                    step: B,
                    colors: g
                }), w.length > 0 && Object(V.g)(hn, {
                    message: Object(V.g)("pagenote-block", null, w.map((function(A) {
                        return Object(V.g)("pagenote-block", {
                            "data-role": "more-action-item",
                            onClick: (t = A.onclick, "function" == typeof t ? function(A) {
                                t(B), A.stopPropagation()
                            } : function(A) {
                                A.stopPropagation()
                            })
                        }, A.text);
                        var t
                    }))),
                    inner: !0,
                    placement: "rightBottom",
                    trigger: "hover"
                }, Object(V.g)("pagenote-icon", {
                    inner: !0,
                    "aria-controls": "more-icon"
                }, Object(V.g)(sn, {
                    fill: "#999"
                })))), p), f.appendChild(v);
                var m = document.createElement("pagenote-annotation-ref");
                m.innerText = u, f.appendChild(m), l.appendChild(f);
                var C = document.createElement("pagenote-block");
                C.dataset.role = "annotation-editor", C.contentEditable = "true", C.innerHTML = s, C.onmouseleave = C.onblur = function() {
                    A.runtime.editing = !1
                }, C.ondblclick = function() {
                    A.runtime.editing = !0
                }, C.onfocus = function(t) {
                    A.runtime.editing = !0
                }, C.onblur = function() {
                    A.runtime.editing = !1
                }, C.addEventListener("keyup", (function(A) {
                    A.stopPropagation()
                }), {
                    capture: !0
                }), C.oninput = Q((function() {
                    var t = C.innerText.trim() ? C.innerHTML : "";
                    A.data.tip = t
                }), 400), l.appendChild(C);
                var U = document.createElement("pagenote-block");
                U.dataset.role = "custom-content", l.appendChild(U), _(), c.appendChild(l);
                var F = null;
                c.onmouseenter = function() {
                    clearTimeout(F), A.runtime.isFocusAnnotation = !0
                }, c.onmouseleave = function() {
                    F = setTimeout((function() {
                        A.runtime.isFocusAnnotation = !1, A.runtime.editing = !1
                    }), 0)
                };
                var b = {
                        grid: 1,
                        setPosition: !0,
                        setCursor: !1,
                        handle: f,
                        limit: {
                            x: [10, window.innerWidth - 250 - 10],
                            y: [10, Math.max(document.documentElement.scrollHeight, window.innerHeight)]
                        },
                        onDragEnd: function(t, e, n) {
                            A.data.x = e, A.data.y = n
                        }
                    },
                    E = new dn.a(c, b).set(o, i);
                document.querySelector("pagenote-annotations").appendChild(c), c.remove = function() {
                    c.parentNode.removeChild(c)
                }, this.runtime.relatedAnnotationNode = c, this.runtime.annotationDrag = E, en(l, n, I(), O(), H(), A.runtime.lighting), this.addListener((function() {
                    _(), en(l, A.data.bg, I(), O(), H(), A.runtime.lighting), A.runtime.editing ? (C.focus(), M(C)) : C.blur()
                }), !0, "annotation"), this.addListener((function() {
                    _(), en(l, A.data.bg, I(), O(), H(), A.runtime.lighting)
                }), !1, "annotation")
            }

            function _() {
                x(U);
                var e = t(A.data, A);
                e[0] && U.appendChild(e[0])
            }

            function I() {
                var t = !!A.data.tip;
                return A.runtime.editing || A.runtime.isFocusTag || A.runtime.isFocusAnnotation || A.data.annotationStatus === r.SHOW && t
            }

            function H() {
                return A.runtime.editing || A.runtime.isFocusAnnotation ? "menu" : ""
            }

            function O() {
                return A.data.tip || A.runtime.editing
            }
        };
        var vn = function(A) {
                void 0 === A && (A = function() {});
                var t = this.runtime.relatedNode ? this.runtime.relatedNode[0] : null;
                if (!t) try {
                    t = g.getTarget(this.data.id)
                } catch (A) {}
                return O(t, this.data.x - window.innerWidth / 2, this.data.y - window.innerHeight / 3, (function() {
                    A()
                }))
            },
            yn = function(A) {
                void 0 === A && (A = !1);
                var t = this.runtime.relatedNode[this.runtime.relatedNode.length - 1];
                if (t) {
                    var e = v(),
                        n = g.compute(t),
                        r = t.offsetHeight,
                        o = n.left - e.left,
                        i = n.top + r + 8 - e.top;
                    this.runtime.annotationDrag.set(o, i), this.data.x = o, this.data.y = i, !0 !== A && (this.runtime.isVisible || O(null, n.left, n.top - r - 8))
                }
            };

        function mn(A) {
            var t, e, n, r = A.message,
                o = A.position,
                i = void 0 === o ? {
                    x: 0,
                    y: 0
                } : o,
                s = A.type,
                a = A.duration,
                u = void 0 === a ? 2e3 : a,
                c = A.color,
                l = A.e,
                f = document.createElement("pagenote-notification");

            function p() {
                f.dataset.status = "fade", n = setTimeout((function() {
                    f.parentNode.removeChild(f)
                }), u)
            }
            f.dataset.type = s, c && (f.style = "--color: " + c), f.innerHTML = r, f.style.left = i.x || (null === (t = null == l ? void 0 : l.target) || void 0 === t ? void 0 : t.clientX) || window.innerWidth / 2 + "px", f.style.top = i.y || (null === (e = null == l ? void 0 : l.target) || void 0 === e ? void 0 : e.clientY) || window.innerHeight / 2 + "px", document.body.appendChild(f), p(), f.addEventListener("mouseover", (function() {
                f.dataset.status = "", clearTimeout(n)
            }), {
                capture: !0
            }), f.addEventListener("mouseout", (function() {
                p()
            }), {
                capture: !0
            })
        }
        var Qn = new Ze,
            Cn = function(A, t, e) {
                var o = this;
                this.options = t, this.listeners = {
                    data: {},
                    runtime: {}
                };
                var i = {
                        lightStatus: n.LIGHT,
                        annotationStatus: r.SHOW,
                        lightId: b()(A.id + A.text)
                    },
                    s = this;
                this.data = new Proxy(i, {
                    set: function(A, t, e) {
                        var n, r;
                        if (A[t] === e) return A;
                        for (var o in Reflect.set(A, t, e), s.listeners.data) {
                            var a = s.listeners.data[o];
                            "function" == typeof a && a(A, t, e)
                        }
                        var u = null === (r = null === (n = null == s ? void 0 : s.steps) || void 0 === n ? void 0 : n.option) || void 0 === r ? void 0 : r.saveDatas();
                        return u && u(i), A
                    }
                }), p.forEach((function(t) {
                    o.data[t] = A[t], "lightStatus" === t ? o.data[t] = void 0 === A[t] ? A.isActive ? n.LIGHT : n.UN_LIGHT : A[t] : "annotationStatus" === t && void 0 === A[t] && (o.data.annotationStatus = o.data.lightStatus === n.LIGHT ? r.SHOW : r.HIDE)
                }));
                s = this;
                var a = function(A) {
                    var e = A.key;
                    if (s.steps.lastFocus === s.data.lightId)
                        if ("Escape" !== e) {
                            if (!s.runtime.editing) switch (e) {
                            	/*shuise
                                case "c":
                                    var n = L(),
                                        o = s.runtime.relatedNode[0],
                                        i = -50;
                                    o && (i += -1 * o.offsetHeight), s.copyToClipboard(!1, {
                                        x: s.data.x - n.x,
                                        y: s.data.y - n.y + i
                                    });
                                    break;
                                */
                                case "m":
                                    s.openEditor();
                                    break;
                                /*shuise
                                case "`":
                                    s.changeStatus(1);
                                    break;
                                */
                                case "p":
                                    var a = s.data.annotationStatus === r.SHOW ? r.HIDE : r.SHOW;
                                    s.data.annotationStatus = a;
                                    break;
                                default:
                                    var u = Number(e) - 1,
                                        c = t.colors[u];
                                    if (c) return void(s.data.bg = c);
                                    Number.isInteger(u) && u >= 0 && mn({
                                        message: "只有" + t.colors.length + "只画笔，无法使用第" + e + "只",
                                        type: "error"
                                    })
                            }
                        } else s.runtime.editing = !1
                };
                this.runtime = new Proxy({
                    warn: "",
                    isVisible: !1,
                    isFocusTag: !1,
                    isFocusAnnotation: !1,
                    relatedNode: [],
                    relatedNodePosition: {
                        top: 0,
                        left: 0
                    },
                    relatedAnnotationNode: null,
                    focusTimer: null,
                    annotationDrag: null,
                    editing: !1,
                    lighting: !1
                }, {
                    set: function(A, t, e) {
                        if (A[t] === e) return A;
                        Reflect.set(A, t, e);
                        var n = A.isFocusTag || A.isFocusAnnotation || A.editing;
                        for (var r in s.listeners.runtime) {
                            var o = s.listeners.runtime[r];
                            "function" == typeof o && o(A, t, e)
                        }
                        return ["lighting", "isFocusTag", "isFocusAnnotation", "editing"].includes(t) && (s.steps.lastFocus = s.data.lightId, n ? document.addEventListener("keyup", a, {
                            capture: !0
                        }) : document.removeEventListener("keyup", a, {
                            capture: !0
                        })), A
                    }
                }), "function" == typeof e && e(this)
            };

        function Un(A) {
            this.option = A, this.lastFocus = null
        }
        Cn.prototype.init = function() {
            this.initKeywordTags(), this.initAnnotation()
        }, Cn.prototype.initKeywordTags = on, Cn.prototype.initAnnotation = wn, Cn.prototype.gotoView = vn, Cn.prototype.lighting = function() {
            var A = this;
            this.runtime.lighting = "light", setTimeout((function() {
                A.runtime.lighting = ""
            }), 2e3)
        }, Cn.prototype.connectToKeywordTag = yn, Cn.prototype.changeStatus = function(A) {
            var t = n.UN_LIGHT;
            0 !== A && (t = this.data.lightStatus + A), t > n.LIGHT ? t = n.UN_LIGHT : t < n.UN_LIGHT && (t = n.LIGHT), this.data.annotationStatus = t === n.LIGHT ? r.SHOW : r.HIDE, this.data.lightStatus = t
        }, Cn.prototype.openEditor = function(A) {
            void 0 === A && (A = !0), this.runtime.editing = A
        }, Cn.prototype.delete = function() {
            this.runtime.relatedNode.forEach((function(A) {
                A.remove()
            })), this.runtime.relatedAnnotationNode.remove(), this.steps.removeStep(this.data.lightId), Ye(!1), Qn.destroy()
        }, Cn.prototype.copyToClipboard = function(A, t) {
        	return;
            var e = this;
            void 0 === A && (A = !1);
            var n = A ? this.data.text + "\n" + this.data.tip : this.data.text;
            T(n).then((function(A) {
                mn({
                    message: "已复制【" + n + "】",
                    color: e.data.bg,
                    duration: 3e3,
                    position: t
                })
            }))
        }, Cn.prototype.addListener = function(A, t, e) {
            void 0 === t && (t = !1), void 0 === e && (e = "default-change-fun");
            var n = t ? "runtime" : "data";
            this.listeners[n][e] = A
        }, Cn.prototype.getCurrentIndex = function() {
            for (var A, t, e = -1, n = 0; n < this.steps.length; n++)
                if ((null === (t = null === (A = this.steps[n]) || void 0 === A ? void 0 : A.data) || void 0 === t ? void 0 : t.lightId) === this.data.lightId) {
                    e = n;
                    break
                }
            return e
        }, Cn.prototype.getNear = function(A) {
            void 0 === A && (A = !1);
            var t = this.getCurrentIndex();
            if (-1 === t) return [];
            var e = this.steps[t - 1],
                n = this.steps[t + 1];
            return A && (0 === t ? e = this.steps[this.steps.length - 1] : t === this.steps.length - 1 && (n = 0)), [e, n]
        }, Un.prototype = Array.prototype, Un.prototype.removeStep = function(A) {
            for (var t = 0; t < this.length; t++) {
                if (A === this[t].data.lightId) {
                    this.splice(t, 1);
                    break
                }
            }
            this.option.saveDatas()
        }, Un.prototype.save = function() {
            this.option.saveDatas()
        }, Un.prototype.add = function(A) {
            A.__proto__.steps = this, A.delete ? (A.init(), this.push(A)) : console.error("非法类型", A, A.prototype, A.__proto__, Cn.constructor)
        };
        var Fn = e(53),
            bn = e.n(Fn);

        function En(A, t) {
            var e = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(A, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function _n(A) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? En(Object(e), !0).forEach((function(t) {
                    i()(A, t, e[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : En(Object(e)).forEach((function(t) {
                    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
                }))
            }
            return A
        }
        var In = {
            markdown: {
                template: "## [{{title}}]({{{url}}})\n{{#steps}}> * {{text}}\n\n{{#tip}}{{{tip}}}\n\n{{/tip}}{{/steps}}\n> 导出模板基于 mustache 语法\n    ",
                fileExt: "markdown",
                icon: "",
                name: "markdown",
                description: "导出为Markdown格式"
            }
        };
        e(147), e(148);

        function Hn(A, t) {
            var e = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(A, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function On(A) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hn(Object(e), !0).forEach((function(t) {
                    i()(A, t, e[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : Hn(Object(e)).forEach((function(t) {
                    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
                }))
            }
            return A
        }

        function Sn(A) {
            var t = this,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            B.log(e), B.option.showLog = e.debug, this.id = A || "pagenote-container", this.options = Object.assign({
                dura: 100,
                enableMarkImg: !1,
                blacklist: [],
                autoLight: !1,
                brushes: [{
                    bg: "rgba(114,208,255)",
                    shortcut: "p",
                    label: "",
                    level: 1
                }, {
                    bg: "#ffbea9",
                    shortcut: "n",
                    label: "",
                    level: 1
                }],
                barInfo: {
                    right: 2,
                    top: 100,
                    status: j
                },
                actionBarOffset: {
                    offsetX: 10,
                    offsetY: 20
                },
                showIconAnimation: !0,
                onShare: null,
                functionColors: [],
                sideBarActions: [],
                categories: [],
                showBarTimeout: 20,
                keyupTimeout: 500,
                debug: !1,
                autoTag: !0,
                renderAnnotation: function() {},
                beforeRecord: function() {
                    return !0
                }
            }, e), this.status = this.CONSTANT.UN_INIT;
            var n = this.options.brushes.filter((function(A) {
                return A && A.bg
            })).map((function(A) {
                return A.bg
            }));
            this.recordedSteps = new Un({
                saveDatas: function() {
                    t.makelink()
                },
                colors: n
            }), this.snapshots = [], this.categories = new Set, this.note = "", this.runindex = null;
            var r, o, i, s = JSON.parse(JSON.stringify(this.options.barInfo));
            s.status = s.status || "fold", this.runningSetting = Object.assign({}, {
                dura: this.options.dura,
                autoLight: this.options.autoLight,
                barInfo: s
            }), this.target = null, this.lastEvent = null, this.url = window.location.href, this.data = "", this.plainData = {}, this.lastaction = this.CONSTANT.DIS_LIGHT;
            var u = null,
                l = [],
                f = null,
                p = this.CONSTANT,
                h = this.options,
                g = "ontouchstart" in window,
                d = !1;
            this.makelink = function(A) {
                t.status = p.START_SYNC, v("function" == typeof A ? A : function() {})
            };
            var w = {
                renderAnnotation: h.renderAnnotation,
                colors: n
            };
            this.init = function(A) {
                var t = this,
                    e = [],
                    n = {};
                if (A) try {
                    var r = {};
                    "object" === a()(A) && A.steps ? (r = A, e = A.steps || [], n = A.setting || {}) : "string" == typeof A && (e = (r = m(A)).steps || [], n = r.setting || {}), this.snapshots = Array.isArray(r.snapshots) ? r.snapshots : [], this.categories = new Set(r.categories), this.note = r.note
                } catch (t) {
                    B.error("解析step异常", t, A)
                }
                if (this.recordedSteps.forEach((function(A) {
                        A.delete()
                    })), e.forEach((function(A) {
                        var e = new Cn(A, w);
                        t.recordedSteps.add(e)
                    })), this.runningSetting = Object.assign(this.runningSetting, n), !d) {
                    var o = function A(t, e) {
                        if (clearTimeout(f), (new Date).getTime() - s >= l && 0 !== s) {
                            s = 0, t = t.toLowerCase();
                            var n = u.target && !0 === u.target.canHighlight,
                                r = u.options.brushes.find((function(A) {
                                    return A && A.shortcut && A.shortcut.toLowerCase() === t
                                }));
                            n && r ? u.record({
                                bg: r.bg,
                                level: r.level
                            }, !1) : "function" == typeof i[t] && i[t](e, u.target)
                        } else f = setTimeout((function() {
                            A(t, e)
                        }), l / 4)
                    };
                    d = !0,
                        function() {
                            var A = this,
                                t = this,
                                e = g ? "touchend" : "mouseup",
                                n = g ? "touchstart" : "mousedown",
                                r = t.options.showBarTimeout || 0,
                                o = 0,
                                i = null,
                                s = null,
                                a = !1,
                                u = {},
                                l = {},
                                f = 0;

                            function p(A, e) {
                                var n = (A || (new Date).getTime()) - o;
                                t.target = y(t.options.enableMarkImg, [l, u]), B.log(t.target);
                                var i = !!t.target && n >= r && a;
                                i ? t.showActionBar() : t.hideActionBar(), e && e(i)
                            }
                            var h = Q((function(t) {
                                    o = (new Date).getTime(), 0 !== document.getSelection().rangeCount ? (r > 0 && p(null, (function(A, t) {
                                        A || (f = (new Date).getTime(), clearInterval(i), i = setInterval((function() {
                                            p((new Date).getTime(), (function(A) {
                                                (A || (new Date).getTime() - f > 3e3) && clearInterval(i)
                                            }))
                                        }), 100))
                                    })), clearTimeout(s), s = setTimeout((function() {
                                        var A = document.getSelection().toString();
                                        A.trim(), B.log("选区", A)
                                    }), 2e3)) : A.hideActionBar()
                                }), 20),
                                d = c()((function(A) {
                                    a && (u = A)
                                }), 60);
                            document.addEventListener("selectionchange", h, {
                                capture: !0
                            }), document.addEventListener(n, (function(A) {
                                t.lastEvent = A, a = !0, l = A, o = (new Date).getTime(), document.addEventListener("mousemove", d)
                            }), {
                                capture: !0
                            }), document.addEventListener(e, (function(A) {
                                setTimeout((function() {
                                    t.lastEvent = A, u = A, p(), o = (new Date).getTime(), a = !1, clearInterval(i), document.removeEventListener("mousemove", d)
                                }), 0)
                            }), {
                                capture: !0
                            })
                        }.call(this);
                    var i = {};
                    this.options.functionColors.forEach((function(A, t) {
                        A.forEach((function(A, e) {
                            A && A.id && (A.eventid = A.id + t + "_" + e, A.shortcut && (i[A.shortcut.toLowerCase()] = A.onclick))
                        }))
                    }));
                    var s = 0,
                        u = this,
                        l = this.options.keyupTimeout || 0,
                        f = null;
                    document.addEventListener("keydown", (function(A) {
                    	//shuise
                		return;
                        0 === s && (s = (new Date).getTime()), o(A.key, A)
                    }), {
                        capture: !0
                    }), document.addEventListener("keyup", (function(A) {
                		//shuise
                		return;
                        s = 0, o(A.key, A), clearTimeout(f)
                    }), {
                        capture: !0
                    })
                }
                this.status = p.READY
            }, this.showActionBar = function() {
                this.status = this.CONSTANT.WAITING
            }, this.hideActionBar = function() {
                this.status = this.CONSTANT.PAUSE
            }, this.destroy = function() {
                this.status = p.DESTROY, document.querySelectorAll("light[data-highlight]").forEach((function(A) {
                    A.outerHTML = A.innerText
                }))
            }, this.realive = function() {
                this.status = p.RE_ALIVE, this.replay(0, !1, !0, (function(A) {
                    return A.isActive
                }))
            }, this.addListener = function(A) {
                "function" == typeof A && l.push(A)
            }, this.record = function() {
                var A = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if (t = Object.assign(this.target, t), this.status = p.RECORDING, "function" != typeof e.beforeRecord || !1 !== e.beforeRecord()) {
                    var r = new Cn(t, w, (function(A) {
                        A.runtime.focusTimer = setTimeout((function() {
                            A.runtime.isFocusTag = !1
                        }), 2e3), setTimeout((function() {
                            A.runtime.isFocusTag = !0
                        }), 0)
                    }));
                    return this.recordedSteps.add(r), r.connectToKeywordTag(!0), this.recordedSteps = this.recordedSteps.sort((function(A, t) {
                        var e = A.runtime.relatedNodePosition,
                            n = t.runtime.relatedNodePosition,
                            r = e.top - n.top;
                        return 0 === r ? e.left - n.left : r
                    })), window.getSelection().removeAllRanges(), this.target = {}, this.makelink((function(t) {
                        if (!t) return alert("保存失败了"), A.recordedSteps.splice(-1, 1), B.error("记录失败"), A.status = p.RECORDFAIL, !1;
                        A.status = p.RECORDED
                    })), n && r.openEditor(), r
                }
            }, this.remove = function() {
                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                if (-1 === A) {
                    for (; this.recordedSteps.length > 0;) this.recordedSteps.splice(0, 1), this.replay(0, !1, !1);
                    this.status = p.PAUSE, this.status = p.REMOVEDALL
                } else this.recordedSteps.splice(A, 1), this.replay(A, !1, !1), this.status = p.REMOVED;
                this.makelink()
            }, this.replay = function() {
                var A = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    s = this.runningSetting.dura,
                    a = this.recordedSteps[t];
                if (!a) return this.runindex = f, this.status = p.DONE, void this.makelink();
                var u = "function" == typeof r ? r(a) : r;
                clearInterval(i), clearTimeout(o), i = o = f, this.runindex = t, this.status = p.REPLAYING, this.lastaction = u ? p.LIGHT : p.DIS_LIGHT, n || this.makelink(), e ? i = a.gotoView((function() {
                    A.runindex = f, n ? o = setTimeout((function() {
                        return A.replay(t + 1, e, n, r)
                    }), s) : (A.status = p.DONE, clearTimeout(o))
                })) : n ? o = setTimeout((function() {
                    return A.replay(t + 1, e, n, r)
                }), s) : (this.runindex = f, this.status = p.DONE), this.makelink()
            }, this.openModal = function() {
                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "md";
                u && u.show ? (u.changeTab(A), u.initData()) : ((u = document.createElement("pagenote-modal")).setAttribute("show", !0), u.setAttribute("activeTab", A), document.body.appendChild(u))
            }, this._syncModal = function() {
                u && u.initData()
            }, this.generateMD = function() {
                var A = "",
                    e = t.recordedSteps,
                    n = window.location.href,
                    r = document.querySelector("title").innerText.trim() || "";
                return A += "## [".concat(r, "](").concat(n, ")\n\n"), e.forEach((function(t) {
                    var e = t.text,
                        n = t.tip;
                    n !== e && n && (A += "".concat(n, "\n")), A += "> ".concat(e, "\n\n")
                })), A = (A += "\n").trim()
            }, this.capture = function() {
                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement || document.body;
                return new Promise((function(e, n) {
                    D(A).then((function(A) {
                        t.snapshots.push(A), t.makelink(), K(A), e(A)
                    })).catch((function(A) {
                        B.error(A), n(A), mn({
                            message: P.t("capture_error"),
                            type: "error"
                        })
                    }))
                }))
            };
            var v = c()((function(A) {
                try {
                    var e = [];
                    t.recordedSteps.forEach((function(A) {
                        e.push(JSON.parse(JSON.stringify(A.data)))
                    }));
                    var n = {},
                        r = 0;
                    Object.keys(t.runningSetting).forEach((function(A) {
                        t.runningSetting[A] !== h[A] && (n[A] = t.runningSetting[A], r++)
                    }));
                    for (var o = document.getElementsByTagName("img"), i = [], s = 0; s < o.length; s++) {
                        var a = o[s],
                            u = a.width,
                            c = a.height,
                            l = a.src;
                        l && u > 100 && c > 100 && u / c < 2 && c / u < 2 && i.push(l)
                    }
                    var f = {
                        steps: e,
                        setting: {},
                        images: i,
                        snapshots: t.snapshots,
                        version: 2,
                        categories: t.categories.size > 0 ? Array.from(t.categories) : [],
                        note: t.note
                    };
                    r ? f.setting = n : delete f.setting, t.plainData = f;
                    var g = e.length ? JSON.parse(JSON.stringify(f)) : {};
                    t.status = p.SYNCED, A(g)
                } catch (e) {
                    t.status = p.SYNCED_ERROR, B.error("保存异常", e), A()
                }
            }), 1e3);
            Object.defineProperty(this, "status", {
                get: function() {
                    return r
                },
                set: function(A) {
                    var t = r;
                    t === p.DESTROY && A !== p.RE_ALIVE || (r = A) === t && r !== p.WAITING || l.forEach((function(e) {
                        e(A, t)
                    }))
                }
            }), this.triggerListener = function() {
                var A = this;
                l.forEach((function(t) {
                    t(A.status, A.status)
                }))
            }
        }
        Sn.prototype.notification = mn, Sn.prototype.updateSetting = function(A) {
            this.options = On(On({}, this.options), A)
        }, Sn.prototype.decodeData = function(A) {
            return m(A)
        }, Sn.prototype.encryptData = function(A) {
            return t = A, btoa(encodeURI(JSON.stringify(t)));
            var t
        }, Sn.prototype.exportData = function(A, t) {
            return function(A) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : In.markdown,
                    e = {
                        success: !1,
                        data: null
                    };
                try {
                    e.data = bn.a.render(t.template, _n(_n({}, A), {}, {
                        encodeUrl: encodeURIComponent(A.url)
                    })), e.success = !0
                } catch (A) {
                    console.error(A)
                }
                return e
            }(t || this.plainData, A)
        }, Sn.prototype.i18n = P, Sn.prototype.CONSTANT = {
            ID: "pagenote",
            UN_INIT: -1,
            DESTROY: -9,
            RE_ALIVE: 99,
            WAITING: 0,
            READY: 1,
            RECORDING: 2,
            PAUSE: 3,
            RECORDED: 4,
            REMOVED: -4,
            REMOVEDALL: -5,
            RECORDFAIL: 5,
            FINNISHED: 6,
            REPLAYING: 7,
            PLAYANDWAIT: 8,
            DONE: 9,
            START_SYNC: 100,
            SYNCED: 10,
            SYNCED_ERROR: -10,
            URLCHANGED: 11,
            HASHCHANGED: 12,
            LIGHT: 100,
            DIS_LIGHT: -100,
            SHARE_CONFIRM: "c",
            SHARE_ING: "i",
            SHARE_ERROR: "e",
            SHARE_SUCCESS: "s"
        }, Sn.prototype.version = "5.3.11";
        var Ln = e(54),
            xn = e.n(Ln),
            Tn = e(55),
            Dn = e.n(Tn),
            Kn = e(7),
            Mn = e.n(Kn),
            Rn = e(56),
            kn = e.n(Rn),
            Nn = e(57),
            Pn = e.n(Nn),
            jn = e(25),
            Gn = e.n(jn),
            Vn = e(58),
            Wn = e.n(Vn),
            Jn = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1599576075781",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "2626",
                    "data-spm-anchor-id": "a313x.7781069.0.i2",
                    width: "16",
                    height: "16"
                }, t), [Object(V.g)("path", {
                    d: "M512 1024C229.229714 1024 0 794.770286 0 512 0 229.229714 229.229714 0 512 0 794.770286 0 1024 229.229714 1024 512 1024 794.770286 794.770286 1024 512 1024ZM768.146286 305.152 716.434286 253.366857 509.586286 460.288 302.665143 253.366857 250.953143 305.152 457.874286 512 250.953143 718.921143 302.665143 770.633143 509.586286 563.712 716.434286 770.633143 768.146286 718.921143 561.298286 512 768.146286 305.152Z",
                    fill: "#666666",
                    "p-id": "2627"
                }, [])])
            },
            Xn = (e(150), function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1612099643041",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "2342",
                    width: "16",
                    height: "16"
                }, t), [Object(V.g)("path", {
                    d: "M937.472 102.4H91.136c-46.08 0-83.456 37.376-83.456 83.456V841.728c0 46.08 37.376 83.456 83.456 83.456h846.336c46.08 0 83.456-37.376 83.456-83.456V185.856c0-46.08-37.376-83.456-83.456-83.456zM91.136 163.84h846.336c12.288 0 22.016 9.728 22.016 22.016v437.248L762.88 448.512c-10.752-9.728-27.136-10.24-38.912-1.536l-244.224 183.296-129.536-92.16c-10.24-7.68-24.576-7.68-35.328 0l-245.76 174.08V185.856c0-12.288 9.728-22.016 22.016-22.016z m846.336 699.904H91.136c-12.288 0-22.016-9.728-22.016-22.016v-54.272L332.8 601.088l247.808 176.64c13.824 9.728 33.28 6.656 43.008-7.168 9.728-13.824 6.656-33.28-7.168-43.008l-84.48-59.904 208.896-156.672 211.456 187.904c2.048 2.048 4.608 3.072 7.168 4.608v138.24c0 12.288-9.728 22.016-22.016 22.016z",
                    fill: "#1296db",
                    "p-id": "2343"
                }, []), Object(V.g)("path", {
                    d: "M312.32 471.04c70.656 0 128-57.344 128-128S382.976 215.04 312.32 215.04 184.32 272.384 184.32 343.04s57.344 128 128 128z m0-194.56c36.864 0 66.56 29.696 66.56 66.56s-29.696 66.56-66.56 66.56-66.56-29.696-66.56-66.56 29.696-66.56 66.56-66.56z",
                    fill: "#1296db",
                    "p-id": "2344"
                }, [])])
            });

        function Yn(A) {
            var t = A.step,
                e = (A.showTarget, t.data),
                n = t.runtime,
                r = e.text || "",
                o = (e.text !== e.tip && e.tip, e.images || []),
                i = n.relatedNode.length > 0;
            return Object(V.g)("pagenote-light-aside-ref", {
                onClick: function() {
                    t.openEditor(!1), t.gotoView(), t.data.lightStatus = 2
                },
                onDblClick: function() {
                    t.openEditor()
                },
                "data-founded": i ? "1" : "0",
                "data-insign": e.isVisible ? "1" : "0",
                "data-active": e.isActive ? "1" : "0",
                style: {
                    "--fill-color": e.bg
                }
            }, Object(V.g)("pagenote-light-highlight", null, !i && Object(V.g)(Ne, {
                message: P.t("not_found")
            }, Object(V.g)("i", {
                style: {
                    fontSize: "12px"
                },
                className: "iconfont iconinfo"
            })), Object(V.g)("pagenote-light-inner", null, r.substring(0, 28), o.length ? Object(V.g)(hn, {
                trigger: "hover",
                message: o.map((function(A) {
                    return Object(V.g)("div", null, Object(V.g)("img", {
                        style: "max-width:100px",
                        src: A.src,
                        alt: A.alt
                    }))
                }))
            }, Object(V.g)(Xn, {
                style: {
                    verticalAlign: "sub",
                    margin: "0 4px"
                }
            })) : "")))
        }
        var zn = e(59),
            Zn = e.n(zn),
            qn = e(26),
            $n = e.n(qn),
            Ar = e(27),
            tr = e.n(Ar),
            er = e(60),
            nr = (e(165), (new er.DraggableAreasGroup).addArea()),
            rr = function(A) {
                var t = A.allTags,
                    e = void 0 === t ? [] : t,
                    n = A.initTagSets,
                    r = A.onchange,
                    o = Object(Ve.j)(null),
                    i = Object(Ve.k)([]),
                    s = J()(i, 2),
                    u = s[0],
                    c = s[1];
                Object(Ve.d)((function() {
                    var A = document.querySelector('meta[name="keywords"]');
                    if (A) {
                        var t = A.content || "",
                            e = (t = t.replaceAll(",", " ").replaceAll("，", " ").replaceAll("、", " ")).split(/\s/).filter((function(A) {
                                return !!A
                            }));
                        c(e)
                    }
                }), []);
                var l = Object(Ar.useModali)({
                        animated: !0,
                        title: "为当前页面添加标签",
                        message: "当前"
                    }),
                    f = J()(l, 2),
                    p = f[0],
                    h = f[1],
                    B = Array.from(n).filter((function(A) {
                        return !!A
                    })).map((function(A) {
                        return {
                            id: A,
                            content: A
                        }
                    }));

                function g(A) {
                    var t = "string" == typeof A ? A : o.current.value;
                    t && (n.add(t), r(n), o.current.value = "")
                }
                var d = e.map((function(A) {
                        return "object" === a()(A) ? A.label : A
                    })),
                    w = [].concat($n()(u), $n()(d)).filter((function(A) {
                        return !n.has(A)
                    }));
                return Object(V.g)("pagenote-block", null, Object(V.g)("pagenote-tags", {
                    onClick: h
                }, B.length ? B.map((function(A) {
                    return Object(V.g)("pagenote-tag", null, A.content)
                })) : Object(V.g)("pagenote-span", null, "#")), Object(V.g)(tr.a.Modal, p, Object(V.g)("pagenote-block", {
                    className: "CrossArea"
                }, Object(V.g)("pagenote-block", {
                    className: "area current"
                }, Object(V.g)("pagenote-p", null, "已选标签"), Object(V.g)("pagenote-block", {
                    className: "selected-area"
                }, Object(V.g)(nr, {
                    tags: B,
                    render: function(A) {
                        var t = A.tag;
                        return Object(V.g)("div", {
                            className: "tag",
                            key: t.id
                        }, t.content, Object(V.g)("aside", {
                            className: "delete",
                            onClick: function() {
                                n.delete(t.id), r(n)
                            }
                        }))
                    },
                    onChange: function(A) {
                        var t = A.map((function(A) {
                                return A.content
                            })),
                            e = new Set(t);
                        r(e)
                    }
                }))), Object(V.g)("pagenote-block", {
                    className: "area rest"
                }, Object(V.g)("pagenote-p", null, "推荐标签"), w.map((function(A) {
                    return Object(V.g)("span", {
                        onClick: function() {
                            g(A)
                        },
                        className: "tag"
                    }, A)
                }))), Object(V.g)("pagenote-p", {
                    style: {
                        position: "relative"
                    }
                }, Object(V.g)("input", {
                    ref: o,
                    type: "text",
                    placeholder: "添加新标签",
                    onKeyUp: function(A) {
                        console.log(A), "Enter" === A.key && g()
                    }
                }), Object(V.g)("button", {
                    onClick: g
                }, "添加")))))
            },
            or = function(A) {
                var t = A.styles,
                    e = Object.assign({}, A);
                return delete e.styles, Object(V.g)("svg", Object.assign({
                    t: "1634731849555",
                    class: [t && t.icon || "icon"].join(" "),
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "3110",
                    width: "16",
                    height: "16"
                }, e), [Object(V.g)("path", {
                    d: "M959.50101 308.321134 513.817392 541.814026 64.49899 308.321134 64.49899 176.971597l449.318402 231.952816 445.683619-231.952816L959.50101 308.321134zM959.50101 605.383854 513.817392 841.570087 64.49899 605.383854 64.49899 475.958132l449.318402 232.722342 445.683619-232.722342L959.50101 605.383854z",
                    "p-id": "3111",
                    fill: "#8a8a8a"
                }, [])])
            };

        function ir(A) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (A) {
                    return !1
                }
            }();
            return function() {
                var e, n = Gn()(A);
                if (t) {
                    var r = Gn()(this).constructor;
                    e = Reflect.construct(n, arguments, r)
                } else e = n.apply(this, arguments);
                return Pn()(this, e)
            }
        }
        var sr = -1,
            ar = null;

        function ur(A) {
            var t = A.step,
                e = A.running,
                n = void 0 !== e && e,
                r = (A.index, A.dot),
                o = A.lastFocusId,
                i = A.onClick,
                s = A.colors;
            var a, u, c, l = t.runtime.isVisible ? "1" : "",
                f = t.data,
                p = f.tip,
                h = f.bg;
            return Object(V.g)("pagenote-light-aside-item", {
                "data-active": t.data.lightStatus,
                "data-insign": l,
                "data-level": 1,
                "data-dot": r ? "1" : "0",
                "data-running": n,
                onClick: i,
                "data-focus": o === t.lightId ? "1" : "0",
                style: {
                    top: r ? (a = t.y, u = window.innerHeight - 30 - 16, c = a / document.documentElement.scrollHeight * u + 30 + 16, c = Math.min(a, c, u), sr > 0 && Math.abs(c - sr) < 24 && (c = sr + 16), sr = c, c + "px") : "unset",
                    "--color": h,
                    "--shadow-color": r ? "#d8d8d8" : p ? h : "",
                    position: r ? "absolute" : "relative"
                }
            }, Object(V.g)("pagenote-light-aside-item-container", null, Object(V.g)(Yn, {
                step: t
            })), Object(V.g)("pagenote-light-anotation", null, t.tip && Object(V.g)("pagenote-block", {
                dangerouslySetInnerHTML: {
                    __html: t.tip
                }
            })), Object(V.g)("pagenote-light-aside-item-sign", {
                "data-active": t.data.lightStatus,
                "data-insign": l,
                "data-level": 1,
                onClick: function() {
                    var A = t.data.lightStatus + 1;
                    t.data.lightStatus = A > 2 ? 0 : A, t.data.annotationStatus = 2 === A ? 1 : 0
                }
            }), Object(V.g)("pagenote-light-actions-container", null, Object(V.g)(Xe, {
                step: t,
                colors: s
            })))
        }
        var cr = function(A) {
                kn()(e, A);
                var t = ir(e);

                function e(A) {
                    var n;
                    return xn()(this, e), (n = t.call(this)).setCategories = function(A) {
                        n.pagenote.categories = A, n.pagenote.makelink()
                    }, n.removeSnapshot = function(A) {
                        n.pagenote.snapshots.splice(A, 1), n.pagenote.makelink()
                    }, n.capture = function() {
                        n.pagenote.capture(), n.setState({
                            capturing: !0
                        }, (function() {
                            setTimeout((function() {
                                n.setState({
                                    capturing: !1
                                })
                            }), 3e3)
                        }))
                    }, n.setLastFocus = function(A) {
                        n.setState({
                            lastFocus: A
                        })
                    }, ar = n.pagenote = A.pagenote, n.toggleAllLight = n.toggleAllLight.bind(Mn()(n)), n.toggleAutoLight = n.toggleAutoLight.bind(Mn()(n)), n.replay = n.replay.bind(Mn()(n)), n.toggleSideBar = n.toggleSideBar.bind(Mn()(n)), n.state = {
                        barInfo: ar.runningSetting.barInfo,
                        steps: ar.recordedSteps,
                        snapshots: ar.snapshots || [],
                        categories: ar.categories,
                        note: ar.note,
                        autoLight: ar.runningSetting.autoLight,
                        highlightAll: ar.highlightAll,
                        runindex: ar.runindex,
                        capturing: !1,
                        title: ar.plainData.title,
                        run: !1,
                        lastFocus: "",
                        allStepStatus: 0
                    }, ar.addListener(n.refreshStatus.bind(Mn()(n))), n
                }
                return Dn()(e, [{
                    key: "refreshStatus",
                    value: function() {
                        this.setState({
                            barInfo: ar.runningSetting.barInfo,
                            steps: ar.recordedSteps || [],
                            categories: ar.categories,
                            note: ar.note || "",
                            snapshots: ar.snapshots || [],
                            autoLight: ar.runningSetting.autoLight || !1,
                            highlightAll: ar.highlightAll || !1,
                            runindex: ar.runindex,
                            status: ar.status,
                            title: ar.plainData.title,
                            run: [ar.CONSTANT.REPLAYING, ar.CONSTANT.START_SYNC].includes(ar.status)
                        })
                    }
                }, {
                    key: "toggleAllLight",
                    value: function() {
                        var A = this.pagenote,
                            t = this.state.allStepStatus + 1,
                            e = t > 2 ? 0 : t;
                        A.recordedSteps.forEach((function(A) {
                            A.data.lightStatus = e, A.data.annotationStatus = 2 === e ? 1 : 0, e === n.LIGHT && A.connectToKeywordTag(!0)
                        })), this.setState({
                            allStepStatus: e
                        })
                    }
                }, {
                    key: "toggleAutoLight",
                    value: function() {
                        var A = this.pagenote;
                        A.runningSetting.autoLight = !A.runningSetting.autoLight, A.makelink()
                    }
                }, {
                    key: "replay",
                    value: function() {
                        var A;
                        (A = this.pagenote).replay.apply(A, arguments), this.refreshStatus()
                    }
                }, {
                    key: "changeLightStatus",
                    value: function(A) {
                        this.pagenote.replay(A, !0, !0, !1, !0), this.pagenote.recordedSteps[A].writing = !0, this.refreshStatus()
                    }
                }, {
                    key: "toggleSideBar",
                    value: function() {
                        var A = this.state.barInfo.status || "",
                            t = this.pagenote.runningSetting.barInfo;
                        A = A === G ? j : G, t.status = A, this.pagenote.makelink()
                    }
                }, {
                    key: "setRef",
                    value: function(A) {
                        var t = this,
                            e = this.pagenote;
                        if (!this.sideEl) {
                            this.sideEl = A;
                            var n = null;
                            ! function(A, t) {
                                var e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                if (A) {
                                    var n = "ontouchstart" in window;
                                    A.style.cursor = "move";
                                    var r = !1,
                                        o = n ? "touchstart" : "mousedown";
                                    A.addEventListener(o, (function(t) {
                                        !1 === e && t.target !== A || (t.stopPropagation(), setTimeout((function() {
                                            r = !0
                                        }), 300))
                                    }), {
                                        capture: !0
                                    });
                                    var i = n ? "touchend" : "mouseup";
                                    document.addEventListener(i, (function() {
                                        r = !1, setTimeout((function() {
                                            r = !1, document.body.style.userSelect = "auto"
                                        }), 300)
                                    }), {
                                        capture: !0
                                    });
                                    var s = n ? "touchmove" : "mousemove";
                                    document.addEventListener(s, Q((function(A) {
                                        r && (document.body.style.userSelect = "none", t(n ? A.touches[0] : A))
                                    }), 1e3 / 60), {
                                        capture: !0
                                    })
                                }
                            }(A, (function(A) {
                                var r = A.clientX + 50,
                                    o = A.clientY - 10,
                                    i = e.runningSetting.barInfo;
                                i.right = Math.max(1, document.documentElement.clientWidth - r - 10), i.right = Math.min(i.right, document.documentElement.clientWidth - 20), i.top = Math.max(Math.min(document.documentElement.clientHeight - 200, o), 0), clearTimeout(n), n = setTimeout((function() {
                                    e.makelink()
                                }), 600), t.setState({
                                    barInfo: e.runningSetting.barInfo
                                })
                            }), !1)
                        }
                    }
                }, {
                    key: "confirmShare",
                    value: function() {
                        this.pagenote.options.onShare(this.pagenote)
                    }
                }, {
                    key: "toggleHideSideBar",
                    value: function() {
                        var A = this.state.barInfo.status || "";
                        A = A.indexOf(G) > -1 ? j : G;
                        var t = this.pagenote.runningSetting.barInfo;
                        t.status = A, this.setState({
                            barInfo: t
                        }), this.pagenote.makelink()
                    }
                }, {
                    key: "bigPicture",
                    value: function(A, t) {
                        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        Wn()({
                            el: A.target,
                            gallery: e,
                            position: n,
                            animationEnd: function() {}
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var A = this,
                            t = this.state,
                            e = t.status,
                            n = t.barInfo,
                            r = t.steps,
                            o = t.runindex,
                            i = t.categories,
                            s = t.snapshots,
                            a = t.allStepStatus,
                            u = (n.status || "") === G,
                            c = r.length > 0 || s.length > 0,
                            l = n.top;
                        n.right = Math.min(document.documentElement.clientWidth - 200, n.right);
                        var f = Math.max(n.right, 0),
                            p = new Set;
                        r.forEach((function(A) {
                            p.add(A.lightBg || A.bg)
                        }));
                        var h = "浅高亮";
                        return 1 === a ? h = "深高亮" : 2 === a && (h = "深高亮&显示批注"), e === this.pagenote.CONSTANT.DESTROY ? "" : Object(V.g)(V.b, null, c && Object(V.g)("pagenote-aside", {
                            "data-status": u ? "expand" : "fold",
                            style: {
                                right: f + "px",
                                top: l + "px",
                                position: "fixed"
                            }
                        }, Object(V.g)("pagenote-actions", {
                            ref: this.setRef.bind(this)
                        }, Object(V.g)("pagenote-all-actions", null, Object(V.g)(Ne, {
                            placement: "right",
                            inner: !0,
                            message: h
                        }, Object(V.g)("pagenote-light-aside-item-sign", {
                            "data-level": 1,
                            "data-active": a,
                            onClick: function() {
                                A.toggleAllLight()
                            }
                        }))), Object(V.g)("pagenote-action", {
                            "data-status": u ? "expand" : "",
                            "data-action": "toggle",
                            onClick: this.toggleHideSideBar.bind(this)
                        }, Object(V.g)(or, null))), Object(V.g)("pagenote-lights", null, r.map((function(t, e) {
                            return Object(V.g)(ur, {
                                key: t.lightId,
                                step: t,
                                index: e,
                                running: e === o,
                                dot: !1,
                                lastFocusId: A.state.lastFocus,
                                colors: A.pagenote.options.brushes.filter((function(A) {
                                    return A && A.bg
                                })).map((function(A) {
                                    return A.bg
                                })),
                                onClick: function(e) {
                                    A.setLastFocus(t.lightId), t.lighting()
                                }
                            })
                        }))), Object(V.g)("pagenote-infos", null, Object(V.g)(rr, {
                            allTags: this.pagenote.options.categories,
                            initTagSets: i,
                            onchange: function(t) {
                                A.setCategories(t)
                            }
                        }), Object(V.g)("pagenote-snapshots", null, s.map((function(t, e) {
                            return Object(V.g)("pagenote-snapshot", null, Object(V.g)("pagenote-icon", null, Object(V.g)(Jn, {
                                onClick: function() {
                                    return A.removeSnapshot(e)
                                },
                                className: Zn.a.removeIcon
                            })), Object(V.g)("img", {
                                onClick: function(n) {
                                    A.bigPicture(n, t, s.map((function(A) {
                                        return {
                                            src: A
                                        }
                                    })), e)
                                },
                                src: t,
                                alt: ""
                            }))
                        }))))))
                    }
                }]), e
            }(V.a),
            lr = function(A) {
                A.styles;
                var t = Object.assign({}, A);
                return delete t.styles, Object(V.g)("svg", Object.assign({
                    t: "1606536179078",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "5142",
                    width: "30",
                    height: "30"
                }, t), [Object(V.g)("path", {
                    d: "M876.425846 400.817231l-268.169846 268.130461-185.107692 99.958154-56.241231 56.201846a35.446154 35.446154 0 0 1-42.929231 5.553231l-177.309538-103.424a35.446154 35.446154 0 0 1-7.207385-55.689846l93.105231-93.065846 99.997538-185.225846 268.169846-268.169847a35.446154 35.446154 0 0 1 50.097231 0l225.595077 225.595077a35.446154 35.446154 0 0 1 0 50.136616z",
                    fill: "#FFFFFF",
                    "p-id": "5143"
                }, []), Object(V.g)("path", {
                    d: "M876.425846 400.817231l-268.169846 268.130461-185.107692 99.958154-190.621539-190.424615 100.036923-185.225846 268.169846-268.169847a35.446154 35.446154 0 0 1 50.097231 0l225.595077 225.595077a35.446154 35.446154 0 0 1 0 50.136616z",
                    fill: "#FAD97F",
                    "p-id": "5144"
                }, []), Object(V.g)("path", {
                    d: "M876.425846 400.817231l-268.169846 268.130461-275.692308-275.692307 268.169846-268.169847a35.446154 35.446154 0 0 1 50.097231 0l225.595077 225.595077a35.446154 35.446154 0 0 1 0 50.136616z",
                    fill: "#FAD97F",
                    "p-id": "5145"
                }, []), Object(V.g)("path", {
                    d: "M888.950154 338.156308l-225.555692-225.595077a53.169231 53.169231 0 0 0-75.224616 0L320.039385 380.731077l-3.072 4.096-98.855385 183.020308-91.175385 91.175384a53.169231 53.169231 0 0 0 10.791385 83.534769L315.076923 845.981538l4.568615 2.363077a53.169231 53.169231 0 0 0 59.825231-10.712615l54.429539-54.390154 182.823384-98.697846 4.096-3.032615 268.209231-268.209231a53.169231 53.169231 0 0 0 0-75.145846z m-25.048616 25.048615l2.048 2.441846a17.723077 17.723077 0 0 1-2.048 22.606769l-266.24 266.24-182.980923 98.816-4.096 3.072-56.24123 56.201847a17.723077 17.723077 0 0 1-21.425231 2.756923L155.569231 711.995077a17.723077 17.723077 0 0 1-3.623385-27.844923l93.105231-93.105231 3.072-4.096 98.737231-182.941538 266.358154-266.358154a17.723077 17.723077 0 0 1 25.048615 0l225.595077 225.595077z",
                    fill: "#000000",
                    "p-id": "5146"
                }, []), Object(V.g)("path", {
                    d: "M888.950154 338.156308l-225.555692-225.595077a53.169231 53.169231 0 0 0-75.224616 0L320.039385 380.731077l-3.072 4.096-106.299077 196.844308 209.250461 209.092923 196.765539-106.220308 4.096-3.032615 268.20923-268.209231a53.169231 53.169231 0 0 0 0-75.145846z m-25.048616 25.048615l2.048 2.441846a17.723077 17.723077 0 0 1-2.048 22.606769L597.464615 654.572308l-171.204923 92.435692-171.874461-171.716923 92.553846-171.441231 266.24-266.24a17.723077 17.723077 0 0 1 25.088 0l225.595077 225.595077z",
                    fill: "#000000",
                    "p-id": "5147"
                }, []), Object(V.g)("path", {
                    d: "M888.950154 338.156308l-225.555692-225.595077a53.169231 53.169231 0 0 0-75.224616 0L307.475692 393.255385l300.780308 300.780307 280.694154-280.694154a53.169231 53.169231 0 0 0 0-75.224615z m-25.048616 25.048615l2.048 2.441846a17.723077 17.723077 0 0 1-2.048 22.606769l-255.645538 255.606154L357.612308 393.216l255.606154-255.606154a17.723077 17.723077 0 0 1 25.088 0l225.595076 225.595077z",
                    fill: "#000000",
                    "p-id": "5148"
                }, [])])
            };
        e(166);

        function fr(A) {
            var t = A.pagenote,
                e = t.target.x + "px",
                n = t.target.y + "px",
                r = t.options.functionColors,
                o = t.options.brushes,
                i = t.status === t.CONSTANT.WAITING || t.status === t.CONSTANT.PLAYANDWAIT,
                s = t.target && t.target.canHighlight;
            t.options.showIconAnimation;
            return Object(V.g)("pagenote-block", {
                style: {
                    position: "absolute",
                    zIndex: 2147483648,
                    left: e,
                    top: n,
                    transition: ".5s",
                    userSelect: "none",
                    textAlign: "left"
                }
            }, i && Object(V.g)("pagenote-block", {
                onClick: function(A) {
                    A.stopPropagation()
                }
            }, s && Object(V.g)("pagenote-colors-container", null, o.map((function(A, e) {
                var n = d || 0 === e ? {
                        x: -40 * e,
                        y: 0
                    } : function(A) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
                            e = 45,
                            n = 2 * Math.PI / 360 * e * A,
                            r = 2 * Math.PI / 360 * -45,
                            o = Number.parseFloat(t * Math.sin(n + r)).toFixed(3),
                            i = Number.parseFloat(t * Math.cos(n + r)).toFixed(3);
                        return {
                            x: o,
                            y: i
                        }
                    }(e - 1, 30),
                    r = n.x,
                    o = n.y;
                return A ? Object(V.g)("pagenote-color-button", {
                    "data-pagenotecolor": A.bg,
                    style: {
                        "--color": A.bg,
                        transform: "translate(".concat(r, "px,").concat(-o, "px)"),
                        top: o + "px",
                        left: -r + "px",
                        width: "30px",
                        height: "30px",
                        color: U(A.bg).textColor,
                        textShadow: "1px 1px 0px ".concat(U(U(A.bg).textColor).textColor)
                    },
                    onMouseUpCapture: function(e) {
                        ! function(A, e) {
                            t.record({
                                bg: A.bg,
                                level: e || A.level
                            })
                        }(A)
                    }
                }, 0 !== e ? A.shortcut : Object(V.g)("span", null, Object(V.g)(lr, {
                    "data-pagenotecolor": A.bg,
                    style: {
                        userSelect: "none"
                    },
                    fill: A.bg
                }))) : Object(V.g)("pagenote-color-button", null)
            }))), Object(V.g)("pagenote-addons", null, r.map((function(A, t) {
                return Object(V.g)("pagenote-plugin-group", {
                    style: {
                        animationDelay: .2 * (t + 1) + "s"
                    }
                }, A.map((function(A, e) {
                    if (!A) return "";
                    var n = A || {},
                        r = n.icon,
                        o = n.name,
                        i = n.shortcut,
                        s = n.eventid,
                        a = (n.id, /^<svg/.test(r) ? "data:image/svg+xml;base64,".concat(window.btoa(r)) : r);
                    return Object(V.g)(Ne, {
                        key: t + o + e,
                        inner: !0,
                        message: "".concat(o).concat(i ? "".concat(P.t("shortcut"), "[").concat(i, "]") : "")
                    }, Object(V.g)("pagenote-action-button", {
                        key: o,
                        "data-eventid": s,
                        style: {
                            backgroundImage: "url(".concat(a, ")")
                        },
                        onClick: A.onclick,
                        onMouseOver: A.onmouseover,
                        onDblclick: A.ondbclick
                    }))
                })))
            })))))
        }
        e(167);
        var pr = function() {
            document.body.dataset.pagenote = "1"
        };

        function hr(A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = new Sn(A, t),
                n = w(),
                r = t.brushes.filter((function(A) {
                    return A && A.bg
                })).map((function(A) {
                    return A.bg
                }));
            Ye(!1, null, null, r);
            var o = document.createElement("pagenote-bar");
            o.dataset.pagenote = "sidebar", n.appendChild(o), Object(V.j)(Object(V.g)(cr, {
                pagenote: e
            }), o);
            var i = null;
            e.addListener(C((function(A, t) {
                A === t && A !== e.CONSTANT.WAITING || (e.target && (A === e.CONSTANT.WAITING || A === e.CONSTANT.PLAYANDWAIT) ? ((i = i || document.createElement("pagenote-action")).dataset.pagenote = "action", Object(V.j)(Object(V.g)(fr, {
                    pagenote: e
                }), i), n.appendChild(i)) : i && i.remove())
            }), 16));
            var s = document.querySelector("pagenote-annotations");
            return s || (s = document.createElement("pagenote-annotations"), n.appendChild(s)), pr(), e
        }
        window.PageNote = hr;
        t.default = hr
    }, function(A, t, e) {
        "use strict";

        function n(A) {
            var t = A.getBoundingClientRect(),
                e = document.body,
                n = document.documentElement,
                r = window.pageYOffset || n.scrollTop || e.scrollTop,
                o = window.pageXOffset || n.scrollLeft || e.scrollLeft,
                i = n.clientTop || e.clientTop || 0,
                s = n.clientLeft || e.clientLeft || 0,
                a = t.top + r - i,
                u = t.left + o - s;
            return {
                top: Math.round(a),
                left: Math.round(u)
            }
        }

        function r(A) {
            if (!A) return A;
            var t = A;
            try {
                var e = A.split("."),
                    n = e.slice(0, Math.fround(e.length / 2)).join(".");
                if (!n) return A;
                document.querySelector(n) === document.querySelector(A) && (t = n)
            } catch (A) {}
            return t
        }
        e.r(t);
        var o = window.document,
            i = function() {},
            s = function A(t) {
                this.options = Object.assign({}, {
                    draw: !0,
                    simpleId: !0
                }, t), this.lastClick = document.body;
                var e = this;
                document.addEventListener("mousedown", (function(t) {
                    e.lastClick = t.target, e.focusedElement !== e.lastClick && A.prototype.clean()
                }))
            },
            a = s.prototype;
        a.getUniqueId = function(A, t) {
            if (!((A = A || this.lastClick) instanceof HTMLElement)) return console.error("input is not a HTML element", A), {};
            var e = {
                    wid: "",
                    type: ""
                },
                n = A.id,
                i = A.name,
                u = A.tagName.toLowerCase(),
                c = A.type ? A.type.toLowerCase() : "",
                l = "";
            if ((A.classList || []).forEach((function(A) {
                    /^[a-zA-Z]/.test(A) && (l += "." + A)
                })), "body" !== u && "html" !== u || (e.wid = u, e.type = u), n && o.getElementById(n) === A) {
                if (!t && this.options.simpleId) e.wid = n;
                else {
                    var f = u + "#" + n;
                    try {
                        o.querySelector(f) === A && (e.wid = f)
                    } catch (A) {
                        console.log("id 不合法")
                    }
                }
                e.type = "document.getElementById()"
            }
            if (!e.wid && i && o.getElementsByName(i)[0] === A && (e.wid = i, e.type = "document.getElementsByName()"), !e.wid && l && o.querySelector(u + l) === A && (e.wid = u + l, e.type = "document.querySelector()"), !e.wid && "radio" === c) {
                var p = u + "[value='" + A.value + "']";
                i && (p += "[name='" + i + "']"), o.querySelector(p) === A && (e.wid = p, e.type = "document.querySelector()")
            }
            if (!e.wid && "a" === u) {
                var h, B = null === (h = A.attributes.href) || void 0 === h ? void 0 : h.value;
                if (B) p = "a[href='" + B + "']", o.querySelector(p) === A && (e.wid = p, e.type = "document.querySelector()")
            }
            if (e.wid || (p = u, p = l ? p + l : p, p = i ? p + "[name='" + i + "']" : p, o.querySelector(p) === A && (e.wid = p, e.type = "document.querySelector()")), !e.wid) {
                p = u, p = l ? p + l : p;
                var g = o.querySelectorAll(p);
                if (g && g.length > 0) {
                    for (var d = null, w = 0; w < g.length; w++)
                        if (A === g[w]) {
                            d = w + 1;
                            break
                        }
                    d && (p = p + ":nth-child(" + d + ")", o.querySelector(p) === A && (e.wid = p, e.type = "document.querySelector()"))
                }
            }
            if (e.wid) e.wid = r(e.wid);
            else {
                var v = A.parentNode,
                    y = s.prototype.getUniqueId(v, !0).wid;
                if (!(y = r(y))) return {
                    wid: null,
                    type: "NO_LOCATION_NOT_LOCATED_PARENT_WID"
                };
                var m = u;
                l && (m += l), p = y + "  " + m;
                var Q = v.querySelectorAll(p);
                if ([].filter.call(Q, (function(A) {
                        return A.parentNode === v
                    })).length > 1) {
                    p = null;
                    for (var C = -1, U = 0; U < v.children.length; U++)
                        if (v.children[U] === A) {
                            C = U + 1;
                            break
                        }
                    if (C >= 1) p = y + "  " + m + ":nth-child(" + C + ")", this.getTarget(p, "split") !== A && (p = "")
                }
                e.wid = p, e.type = "split"
            }
            return this.focusedElement = a.getTarget(e.wid), !t && this.options.draw && this.__proto__.draw(e), e.wid.length > "10" && (e.warn = !0), e
        }, a.getTarget = function(A, t, e) {
            var n = null;
            A = A ? A.trim() : "";
            try {
                var r = e || o;
                if (!r || !A) return;
                var i = A.split(/\s{2}/);
                switch (t || i.length > 1 && (t = "split"), t) {
                    case "document.getElementById()":
                        n = r.getElementById ? r.getElementById(A) : null;
                        break;
                    case "document.getElementsByName()":
                        n = r.getElementsByName ? r.getElementsByName(A)[0] : null;
                        break;
                    case "document.querySelector()":
                        var s = A.split("#");
                        if (s.length > 1) {
                            var a = s[s.length - 1];
                            n = r.getElementById(a)
                        } else n = r.querySelector ? r.querySelector(A) : null;
                        break;
                    case "split":
                        var u = i.filter((function(A) {
                            return !!A && !!A.trim()
                        }));
                        if (u.length > 1) {
                            var c = u[0],
                                l = r.querySelectorAll(c),
                                f = l[0] || this.getTarget(c);
                            e && (f = [].find.call(l, (function(A) {
                                return A.parentNode === e
                            }))), u.splice(0, 1);
                            var p = u.join("  ");
                            n = this.getTarget(p, "split", f)
                        } else {
                            var h = o.querySelectorAll(u[0]);
                            n = [].find.call(h, (function(A) {
                                return A.parentNode === e
                            }))
                        }
                        break;
                    default:
                        n = this.getTarget(A, "document.getElementById()") || this.getTarget(A, "document.getElementsByName()") || this.getTarget(A, "document.querySelector()")
                }
            } catch (A) {
                console.error("定位ID不合法", A)
            }
            return n
        }, a.compute = function(A) {
            A = A || this.lastClick;
            var t = this.getUniqueId(A),
                e = A.getBoundingClientRect(),
                r = e.left > 0 && e.left < window.innerWidth && e.top > 0 && e.top < window.innerHeight,
                o = function A(t) {
                    var e = t.offsetLeft,
                        n = t.offsetTop;
                    if (t.offsetParent) {
                        var r = A(t.offsetParent);
                        e += r.offsetLeft, n += r.offsetTop
                    }
                    return {
                        offsetLeft: e,
                        offsetTop: n
                    }
                }(A);
            return {
                wid: t.wid,
                type: t.type,
                top: n(A).top,
                left: n(A).left,
                viewLeft: e.left,
                viewTop: e.top,
                text: A.innerText,
                visible: r,
                offsetBodyTop: o.offsetTop,
                offsetBodyLeft: o.offsetLeft
            }
        }, a.clean = i, a.draw = i, window.whatsElement = s;
        t.default = s
    }])
}));