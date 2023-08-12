(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
    9669: function(e, t, n) {
        e.exports = n(51609)
    },
    55448: function(e, t, n) {
        "use strict";
        var r = n(64867)
          , o = n(36026)
          , i = n(4372)
          , a = n(15327)
          , s = n(94097)
          , u = n(84109)
          , c = n(67985)
          , l = n(85061);
        e.exports = function(e) {
            return new Promise((function(t, n) {
                var f = e.data
                  , p = e.headers;
                r.isFormData(f) && delete p["Content-Type"];
                var d = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || ""
                      , g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    p.Authorization = "Basic " + btoa(h + ":" + g)
                }
                var v = s(e.baseURL, e.url);
                if (d.open(e.method.toUpperCase(), a(v, e.params, e.paramsSerializer), !0),
                d.timeout = e.timeout,
                d.onreadystatechange = function() {
                    if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders"in d ? u(d.getAllResponseHeaders()) : null
                          , i = {
                            data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                            status: d.status,
                            statusText: d.statusText,
                            headers: r,
                            config: e,
                            request: d
                        };
                        o(t, n, i),
                        d = null
                    }
                }
                ,
                d.onabort = function() {
                    d && (n(l("Request aborted", e, "ECONNABORTED", d)),
                    d = null)
                }
                ,
                d.onerror = function() {
                    n(l("Network Error", e, null, d)),
                    d = null
                }
                ,
                d.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(l(t, e, "ECONNABORTED", d)),
                    d = null
                }
                ,
                r.isStandardBrowserEnv()) {
                    var y = (e.withCredentials || c(v)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                    y && (p[e.xsrfHeaderName] = y)
                }
                if ("setRequestHeader"in d && r.forEach(p, (function(e, t) {
                    "undefined" === typeof f && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e)
                }
                )),
                r.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
                e.responseType)
                    try {
                        d.responseType = e.responseType
                    } catch (m) {
                        if ("json" !== e.responseType)
                            throw m
                    }
                "function" === typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
                "function" === typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
                e.cancelToken && e.cancelToken.promise.then((function(e) {
                    d && (d.abort(),
                    n(e),
                    d = null)
                }
                )),
                f || (f = null),
                d.send(f)
            }
            ))
        }
    },
    51609: function(e, t, n) {
        "use strict";
        var r = n(64867)
          , o = n(91849)
          , i = n(30321)
          , a = n(47185);
        function s(e) {
            var t = new i(e)
              , n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t),
            r.extend(n, t),
            n
        }
        var u = s(n(45655));
        u.Axios = i,
        u.create = function(e) {
            return s(a(u.defaults, e))
        }
        ,
        u.Cancel = n(65263),
        u.CancelToken = n(14972),
        u.isCancel = n(26502),
        u.all = function(e) {
            return Promise.all(e)
        }
        ,
        u.spread = n(8713),
        e.exports = u,
        e.exports.default = u
    },
    65263: function(e) {
        "use strict";
        function t(e) {
            this.message = e
        }
        t.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
        ,
        t.prototype.__CANCEL__ = !0,
        e.exports = t
    },
    14972: function(e, t, n) {
        "use strict";
        var r = n(65263);
        function o(e) {
            if ("function" !== typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                t = e
            }
            ));
            var n = this;
            e((function(e) {
                n.reason || (n.reason = new r(e),
                t(n.reason))
            }
            ))
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        o.source = function() {
            var e;
            return {
                token: new o((function(t) {
                    e = t
                }
                )),
                cancel: e
            }
        }
        ,
        e.exports = o
    },
    26502: function(e) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    },
    30321: function(e, t, n) {
        "use strict";
        var r = n(64867)
          , o = n(15327)
          , i = n(80782)
          , a = n(13572)
          , s = n(47185);
        function u(e) {
            this.defaults = e,
            this.interceptors = {
                request: new i,
                response: new i
            }
        }
        u.prototype.request = function(e) {
            "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
            (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [a, void 0]
              , n = Promise.resolve(e);
            for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }
            )),
            this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            }
            )); t.length; )
                n = n.then(t.shift(), t.shift());
            return n
        }
        ,
        u.prototype.getUri = function(e) {
            return e = s(this.defaults, e),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }
        ,
        r.forEach(["delete", "get", "head", "options"], (function(e) {
            u.prototype[e] = function(t, n) {
                return this.request(s(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }
        )),
        r.forEach(["post", "put", "patch"], (function(e) {
            u.prototype[e] = function(t, n, r) {
                return this.request(s(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }
        )),
        e.exports = u
    },
    80782: function(e, t, n) {
        "use strict";
        var r = n(64867);
        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }),
            this.handlers.length - 1
        }
        ,
        o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        ,
        o.prototype.forEach = function(e) {
            r.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }
            ))
        }
        ,
        e.exports = o
    },
    94097: function(e, t, n) {
        "use strict";
        var r = n(91793)
          , o = n(7303);
        e.exports = function(e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    },
    85061: function(e, t, n) {
        "use strict";
        var r = n(80481);
        e.exports = function(e, t, n, o, i) {
            var a = new Error(e);
            return r(a, t, n, o, i)
        }
    },
    13572: function(e, t, n) {
        "use strict";
        var r = n(64867)
          , o = n(18527)
          , i = n(26502)
          , a = n(45655);
        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return s(e),
            e.headers = e.headers || {},
            e.data = o(e.data, e.headers, e.transformRequest),
            e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
            r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                delete e.headers[t]
            }
            )),
            (e.adapter || a.adapter)(e).then((function(t) {
                return s(e),
                t.data = o(t.data, t.headers, e.transformResponse),
                t
            }
            ), (function(t) {
                return i(t) || (s(e),
                t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            }
            ))
        }
    },
    80481: function(e) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = o,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }
            ,
            e
        }
    },
    47185: function(e, t, n) {
        "use strict";
        var r = n(64867);
        e.exports = function(e, t) {
            t = t || {};
            var n = {}
              , o = ["url", "method", "data"]
              , i = ["headers", "auth", "proxy", "params"]
              , a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"]
              , s = ["validateStatus"];
            function u(e, t) {
                return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
            }
            function c(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(e[o], t[o])
            }
            r.forEach(o, (function(e) {
                r.isUndefined(t[e]) || (n[e] = u(void 0, t[e]))
            }
            )),
            r.forEach(i, c),
            r.forEach(a, (function(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(void 0, t[o])
            }
            )),
            r.forEach(s, (function(r) {
                r in t ? n[r] = u(e[r], t[r]) : r in e && (n[r] = u(void 0, e[r]))
            }
            ));
            var l = o.concat(i).concat(a).concat(s)
              , f = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                return -1 === l.indexOf(e)
            }
            ));
            return r.forEach(f, c),
            n
        }
    },
    36026: function(e, t, n) {
        "use strict";
        var r = n(85061);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    },
    18527: function(e, t, n) {
        "use strict";
        var r = n(64867);
        e.exports = function(e, t, n) {
            return r.forEach(n, (function(n) {
                e = n(e, t)
            }
            )),
            e
        }
    },
    45655: function(e, t, n) {
        "use strict";
        var r = n(83454)
          , o = n(64867)
          , i = n(16016)
          , a = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function s(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var u = {
            adapter: function() {
                var e;
                return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof r && "[object process]" === Object.prototype.toString.call(r)) && (e = n(55448)),
                e
            }(),
            transformRequest: [function(e, t) {
                return i(t, "Accept"),
                i(t, "Content-Type"),
                o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : o.isObject(e) ? (s(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" === typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (t) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        o.forEach(["delete", "get", "head"], (function(e) {
            u.headers[e] = {}
        }
        )),
        o.forEach(["post", "put", "patch"], (function(e) {
            u.headers[e] = o.merge(a)
        }
        )),
        e.exports = u
    },
    91849: function(e) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                    n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    },
    15327: function(e, t, n) {
        "use strict";
        var r = n(64867);
        function o(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var i;
            if (n)
                i = n(t);
            else if (r.isURLSearchParams(t))
                i = t.toString();
            else {
                var a = [];
                r.forEach(t, (function(e, t) {
                    null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e],
                    r.forEach(e, (function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                        a.push(o(t) + "=" + o(e))
                    }
                    )))
                }
                )),
                i = a.join("&")
            }
            if (i) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    },
    7303: function(e) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    },
    4372: function(e, t, n) {
        "use strict";
        var r = n(64867);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && s.push("path=" + o),
                r.isString(i) && s.push("domain=" + i),
                !0 === a && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    },
    91793: function(e) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    },
    67985: function(e, t, n) {
        "use strict";
        var r = n(64867);
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r),
                r = n.href),
                n.setAttribute("href", r),
                {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return e = o(window.location.href),
            function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
        }() : function() {
            return !0
        }
    },
    16016: function(e, t, n) {
        "use strict";
        var r = n(64867);
        e.exports = function(e, t) {
            r.forEach(e, (function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                delete e[r])
            }
            ))
        }
    },
    84109: function(e, t, n) {
        "use strict";
        var r = n(64867)
          , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, a = {};
            return e ? (r.forEach(e.split("\n"), (function(e) {
                if (i = e.indexOf(":"),
                t = r.trim(e.substr(0, i)).toLowerCase(),
                n = r.trim(e.substr(i + 1)),
                t) {
                    if (a[t] && o.indexOf(t) >= 0)
                        return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                }
            }
            )),
            a) : a
        }
    },
    8713: function(e) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    },
    64867: function(e, t, n) {
        "use strict";
        var r = n(91849)
          , o = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === o.call(e)
        }
        function a(e) {
            return "undefined" === typeof e
        }
        function s(e) {
            return null !== e && "object" === typeof e
        }
        function u(e) {
            if ("[object Object]" !== o.call(e))
                return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function c(e) {
            return "[object Function]" === o.call(e)
        }
        function l(e, t) {
            if (null !== e && "undefined" !== typeof e)
                if ("object" !== typeof e && (e = [e]),
                i(e))
                    for (var n = 0, r = e.length; n < r; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function(e) {
                return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
                return "undefined" !== typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" === typeof e
            },
            isNumber: function(e) {
                return "number" === typeof e
            },
            isObject: s,
            isPlainObject: u,
            isUndefined: a,
            isDate: function(e) {
                return "[object Date]" === o.call(e)
            },
            isFile: function(e) {
                return "[object File]" === o.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === o.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return s(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
            },
            forEach: l,
            merge: function e() {
                var t = {};
                function n(n, r) {
                    u(t[r]) && u(n) ? t[r] = e(t[r], n) : u(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++)
                    l(arguments[r], n);
                return t
            },
            extend: function(e, t, n) {
                return l(t, (function(t, o) {
                    e[o] = n && "function" === typeof t ? r(t, n) : t
                }
                )),
                e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            },
            stripBOM: function(e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                e
            }
        }
    },
    40487: function(e) {
        var t = {
            utf8: {
                stringToBytes: function(e) {
                    return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(t.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = t
    },
    35487: function(e) {
        e.exports = function(e) {
            function t(r) {
                if (n[r])
                    return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, t),
                o.l = !0,
                o.exports
            }
            var n = {};
            return t.m = e,
            t.c = n,
            t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return t.d(n, "a", n),
                n
            }
            ,
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "",
            t(t.s = 0)
        }([function(e, t, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , o = n(1);
            e.exports = function(t, n) {
                var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , a = "object" === ("undefined" == typeof document ? "undefined" : r(document)) && "string" == typeof document.cookie
                  , s = "object" === (void 0 === t ? "undefined" : r(t)) && "object" === (void 0 === n ? "undefined" : r(n)) && void 0 !== e
                  , u = !a && !s || a && s
                  , c = function(e) {
                    if (s) {
                        var r = t.headers.cookie || "";
                        return e && (r = (r = n.getHeaders())["set-cookie"] ? r["set-cookie"].map((function(e) {
                            return e.split(";")[0]
                        }
                        )).join(";") : ""),
                        r
                    }
                    if (a)
                        return document.cookie || ""
                }
                  , l = function() {
                    var e = n.getHeader("Set-Cookie");
                    return (e = "string" == typeof e ? [e] : e) || []
                }
                  , f = function(e) {
                    return n.setHeader("Set-Cookie", e)
                }
                  , p = function(e, t) {
                    if (!t)
                        return e;
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                }
                  , d = {
                    parseJSON: i,
                    set: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            path: "/"
                        };
                        if (!u)
                            if (t = "object" === (void 0 === t ? "undefined" : r(t)) ? JSON.stringify(t) : t,
                            s) {
                                var i = l();
                                i.push(o.serialize(e, t, n)),
                                f(i)
                            } else
                                document.cookie = o.serialize(e, t, n)
                    },
                    setAll: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        u || Array.isArray(e) && e.forEach((function(e) {
                            var t = e.name
                              , n = void 0 === t ? "" : t
                              , r = e.value
                              , o = void 0 === r ? "" : r
                              , i = e.opts
                              , a = void 0 === i ? {
                                path: "/"
                            } : i;
                            d.set(n, o, a)
                        }
                        ))
                    },
                    get: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            fromRes: !1,
                            parseJSON: d.parseJSON
                        };
                        if (u)
                            return "";
                        var n = o.parse(c(t.fromRes))
                          , r = n[e];
                        return p(r, t.parseJSON)
                    },
                    getAll: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            fromRes: !1,
                            parseJSON: d.parseJSON
                        };
                        if (u)
                            return {};
                        var t = o.parse(c(e.fromRes));
                        for (var n in t)
                            t[n] = p(t[n], e.parseJSON);
                        return t
                    },
                    remove: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            path: "/"
                        };
                        if (!u) {
                            var n = d.get(e);
                            t.expires = new Date(0),
                            void 0 !== n && d.set(e, "", t)
                        }
                    },
                    removeAll: function() {
                        if (!u) {
                            var e = o.parse(c());
                            for (var t in e)
                                d.remove(t)
                        }
                    },
                    nodeCookie: o
                };
                return d
            }
        }
        , function(e, t, n) {
            "use strict";
            function r(e, t) {
                try {
                    return t(e)
                } catch (t) {
                    return e
                }
            }
            t.parse = function(e, t) {
                if ("string" != typeof e)
                    throw new TypeError("argument str must be a string");
                for (var n = {}, i = t || {}, s = e.split(a), u = i.decode || o, c = 0; c < s.length; c++) {
                    var l = s[c]
                      , f = l.indexOf("=");
                    if (!(f < 0)) {
                        var p = l.substr(0, f).trim()
                          , d = l.substr(++f, l.length).trim();
                        '"' == d[0] && (d = d.slice(1, -1)),
                        void 0 == n[p] && (n[p] = r(d, u))
                    }
                }
                return n
            }
            ,
            t.serialize = function(e, t, n) {
                var r = n || {}
                  , o = r.encode || i;
                if ("function" != typeof o)
                    throw new TypeError("option encode is invalid");
                if (!s.test(e))
                    throw new TypeError("argument name is invalid");
                var a = o(t);
                if (a && !s.test(a))
                    throw new TypeError("argument val is invalid");
                var u = e + "=" + a;
                if (null != r.maxAge) {
                    var c = r.maxAge - 0;
                    if (isNaN(c))
                        throw new Error("maxAge should be a Number");
                    u += "; Max-Age=" + Math.floor(c)
                }
                if (r.domain) {
                    if (!s.test(r.domain))
                        throw new TypeError("option domain is invalid");
                    u += "; Domain=" + r.domain
                }
                if (r.path) {
                    if (!s.test(r.path))
                        throw new TypeError("option path is invalid");
                    u += "; Path=" + r.path
                }
                if (r.expires) {
                    if ("function" != typeof r.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                    u += "; Expires=" + r.expires.toUTCString()
                }
                if (r.httpOnly && (u += "; HttpOnly"),
                r.secure && (u += "; Secure"),
                r.sameSite)
                    switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                    case !0:
                        u += "; SameSite=Strict";
                        break;
                    case "lax":
                        u += "; SameSite=Lax";
                        break;
                    case "strict":
                        u += "; SameSite=Strict";
                        break;
                    case "none":
                        u += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid")
                    }
                return u
            }
            ;
            var o = decodeURIComponent
              , i = encodeURIComponent
              , a = /; */
              , s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        }
        ])
    },
    71012: function(e) {
        !function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number)
                        return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++)
                        e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--)
                        t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++,
                    r += 8)
                        t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8)
                        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push((e[n] >>> 4).toString(16)),
                        t.push((15 & e[n]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2)
                        t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3)
                        for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++)
                            8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4)
                        0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                    return n
                }
            };
            e.exports = n
        }()
    },
    8679: function(e, t, n) {
        "use strict";
        var r = n(59864)
          , o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , s = {};
        function u(e) {
            return r.isMemo(e) ? a : s[e.$$typeof] || o
        }
        s[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        s[r.Memo] = a;
        var c = Object.defineProperty
          , l = Object.getOwnPropertyNames
          , f = Object.getOwnPropertySymbols
          , p = Object.getOwnPropertyDescriptor
          , d = Object.getPrototypeOf
          , h = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" !== typeof n) {
                if (h) {
                    var o = d(n);
                    o && o !== h && e(t, o, r)
                }
                var a = l(n);
                f && (a = a.concat(f(n)));
                for (var s = u(t), g = u(n), v = 0; v < a.length; ++v) {
                    var y = a[v];
                    if (!i[y] && (!r || !r[y]) && (!g || !g[y]) && (!s || !s[y])) {
                        var m = p(n, y);
                        try {
                            c(t, y, m)
                        } catch (b) {}
                    }
                }
            }
            return t
        }
    },
    48738: function(e) {
        function t(e) {
            return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        e.exports = function(e) {
            return null != e && (t(e) || function(e) {
                return "function" === typeof e.readFloatLE && "function" === typeof e.slice && t(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }
    },
    2568: function(e, t, n) {
        !function() {
            var t = n(71012)
              , r = n(40487).utf8
              , o = n(48738)
              , i = n(40487).bin
              , a = function(e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? i.stringToBytes(e) : r.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                for (var s = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, f = -1732584194, p = 271733878, d = 0; d < s.length; d++)
                    s[d] = 16711935 & (s[d] << 8 | s[d] >>> 24) | 4278255360 & (s[d] << 24 | s[d] >>> 8);
                s[u >>> 5] |= 128 << u % 32,
                s[14 + (u + 64 >>> 9 << 4)] = u;
                var h = a._ff
                  , g = a._gg
                  , v = a._hh
                  , y = a._ii;
                for (d = 0; d < s.length; d += 16) {
                    var m = c
                      , b = l
                      , O = f
                      , w = p;
                    c = h(c, l, f, p, s[d + 0], 7, -680876936),
                    p = h(p, c, l, f, s[d + 1], 12, -389564586),
                    f = h(f, p, c, l, s[d + 2], 17, 606105819),
                    l = h(l, f, p, c, s[d + 3], 22, -1044525330),
                    c = h(c, l, f, p, s[d + 4], 7, -176418897),
                    p = h(p, c, l, f, s[d + 5], 12, 1200080426),
                    f = h(f, p, c, l, s[d + 6], 17, -1473231341),
                    l = h(l, f, p, c, s[d + 7], 22, -45705983),
                    c = h(c, l, f, p, s[d + 8], 7, 1770035416),
                    p = h(p, c, l, f, s[d + 9], 12, -1958414417),
                    f = h(f, p, c, l, s[d + 10], 17, -42063),
                    l = h(l, f, p, c, s[d + 11], 22, -1990404162),
                    c = h(c, l, f, p, s[d + 12], 7, 1804603682),
                    p = h(p, c, l, f, s[d + 13], 12, -40341101),
                    f = h(f, p, c, l, s[d + 14], 17, -1502002290),
                    c = g(c, l = h(l, f, p, c, s[d + 15], 22, 1236535329), f, p, s[d + 1], 5, -165796510),
                    p = g(p, c, l, f, s[d + 6], 9, -1069501632),
                    f = g(f, p, c, l, s[d + 11], 14, 643717713),
                    l = g(l, f, p, c, s[d + 0], 20, -373897302),
                    c = g(c, l, f, p, s[d + 5], 5, -701558691),
                    p = g(p, c, l, f, s[d + 10], 9, 38016083),
                    f = g(f, p, c, l, s[d + 15], 14, -660478335),
                    l = g(l, f, p, c, s[d + 4], 20, -405537848),
                    c = g(c, l, f, p, s[d + 9], 5, 568446438),
                    p = g(p, c, l, f, s[d + 14], 9, -1019803690),
                    f = g(f, p, c, l, s[d + 3], 14, -187363961),
                    l = g(l, f, p, c, s[d + 8], 20, 1163531501),
                    c = g(c, l, f, p, s[d + 13], 5, -1444681467),
                    p = g(p, c, l, f, s[d + 2], 9, -51403784),
                    f = g(f, p, c, l, s[d + 7], 14, 1735328473),
                    c = v(c, l = g(l, f, p, c, s[d + 12], 20, -1926607734), f, p, s[d + 5], 4, -378558),
                    p = v(p, c, l, f, s[d + 8], 11, -2022574463),
                    f = v(f, p, c, l, s[d + 11], 16, 1839030562),
                    l = v(l, f, p, c, s[d + 14], 23, -35309556),
                    c = v(c, l, f, p, s[d + 1], 4, -1530992060),
                    p = v(p, c, l, f, s[d + 4], 11, 1272893353),
                    f = v(f, p, c, l, s[d + 7], 16, -155497632),
                    l = v(l, f, p, c, s[d + 10], 23, -1094730640),
                    c = v(c, l, f, p, s[d + 13], 4, 681279174),
                    p = v(p, c, l, f, s[d + 0], 11, -358537222),
                    f = v(f, p, c, l, s[d + 3], 16, -722521979),
                    l = v(l, f, p, c, s[d + 6], 23, 76029189),
                    c = v(c, l, f, p, s[d + 9], 4, -640364487),
                    p = v(p, c, l, f, s[d + 12], 11, -421815835),
                    f = v(f, p, c, l, s[d + 15], 16, 530742520),
                    c = y(c, l = v(l, f, p, c, s[d + 2], 23, -995338651), f, p, s[d + 0], 6, -198630844),
                    p = y(p, c, l, f, s[d + 7], 10, 1126891415),
                    f = y(f, p, c, l, s[d + 14], 15, -1416354905),
                    l = y(l, f, p, c, s[d + 5], 21, -57434055),
                    c = y(c, l, f, p, s[d + 12], 6, 1700485571),
                    p = y(p, c, l, f, s[d + 3], 10, -1894986606),
                    f = y(f, p, c, l, s[d + 10], 15, -1051523),
                    l = y(l, f, p, c, s[d + 1], 21, -2054922799),
                    c = y(c, l, f, p, s[d + 8], 6, 1873313359),
                    p = y(p, c, l, f, s[d + 15], 10, -30611744),
                    f = y(f, p, c, l, s[d + 6], 15, -1560198380),
                    l = y(l, f, p, c, s[d + 13], 21, 1309151649),
                    c = y(c, l, f, p, s[d + 4], 6, -145523070),
                    p = y(p, c, l, f, s[d + 11], 10, -1120210379),
                    f = y(f, p, c, l, s[d + 2], 15, 718787259),
                    l = y(l, f, p, c, s[d + 9], 21, -343485551),
                    c = c + m >>> 0,
                    l = l + b >>> 0,
                    f = f + O >>> 0,
                    p = p + w >>> 0
                }
                return t.endian([c, l, f, p])
            };
            a._ff = function(e, t, n, r, o, i, a) {
                var s = e + (t & n | ~t & r) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }
            ,
            a._gg = function(e, t, n, r, o, i, a) {
                var s = e + (t & r | n & ~r) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }
            ,
            a._hh = function(e, t, n, r, o, i, a) {
                var s = e + (t ^ n ^ r) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }
            ,
            a._ii = function(e, t, n, r, o, i, a) {
                var s = e + (n ^ (t | ~r)) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }
            ,
            a._blocksize = 16,
            a._digestsize = 16,
            e.exports = function(e, n) {
                if (void 0 === e || null === e)
                    throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : t.bytesToHex(r)
            }
        }()
    },
    22177: function(e, t, n) {
        "use strict";
        n.d(t, {
            Jc: function() {
                return Me
            },
            $G: function() {
                return r.$
            }
        });
        var r = n(26524);
        function o() {
            return o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            o.apply(this, arguments)
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var a = n(67294)
          , s = n(8679)
          , u = n.n(s)
          , c = n(65091);
        function l(e) {
            var t = e.i18n
              , n = e.defaultNS
              , r = e.children
              , o = (0,
            a.useMemo)((function() {
                return {
                    i18n: t,
                    defaultNS: n
                }
            }
            ), [t, n]);
            return (0,
            a.createElement)(c.OO.Provider, {
                value: o
            }, r)
        }
        function f(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        var p = {
            defaultNS: "common",
            errorStackTraceLimit: 0,
            i18n: {
                defaultLocale: "en",
                locales: ["en"]
            },
            get initImmediate() {
                return "undefined" !== typeof window
            },
            interpolation: {
                escapeValue: !1
            },
            load: "currentOnly",
            localeExtension: "json",
            localePath: "./public/locales",
            localeStructure: "{{lng}}/{{ns}}",
            react: {
                useSuspense: !1
            },
            reloadOnPrerender: !1,
            serializeConfig: !0,
            strictMode: !0,
            use: []
        }
          , d = ["i18n"]
          , h = ["i18n"];
        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var y = ["backend", "detection"]
          , m = function(e) {
            var t;
            if ("string" !== typeof (null === e || void 0 === e ? void 0 : e.lng))
                throw new Error("config.lng was not passed into createConfig");
            var n = e.i18n
              , r = f(e, d)
              , o = p.i18n
              , i = v(v(v(v({}, f(p, h)), r), o), n)
              , a = i.defaultNS
              , s = i.lng
              , u = (i.locales,
            i.localeExtension)
              , c = i.localePath
              , l = i.localeStructure;
            return "cimode" === s || ("undefined" === typeof i.fallbackLng && (i.fallbackLng = i.defaultLocale),
            (null === e || void 0 === e || null === (t = e.use) || void 0 === t ? void 0 : t.some((function(e) {
                return "backend" === e.type
            }
            ))) || ("string" === typeof c ? i.backend = {
                addPath: "".concat(c, "/").concat(l, ".missing.").concat(u),
                loadPath: "".concat(c, "/").concat(l, ".").concat(u)
            } : "function" === typeof c && (i.backend = {
                addPath: function(e, t) {
                    return c(e, t, !0)
                },
                loadPath: function(e, t) {
                    return c(e, t, !1)
                }
            })),
            "string" === typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]),
            y.forEach((function(t) {
                e[t] && (i[t] = v(v({}, i[t]), e[t]))
            }
            ))),
            i
        };
        function b(e) {
            return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            b(e)
        }
        function O(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function w(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function x(e, t, n) {
            return t && w(e.prototype, t),
            n && w(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function k(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function j(e, t) {
            return j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            j(e, t)
        }
        function S(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && j(e, t)
        }
        function P(e, t) {
            if (t && ("object" === b(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return k(e)
        }
        function C(e) {
            return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            C(e)
        }
        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function N(e) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" === typeof e)
                        return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function L(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? L(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var T = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }
          , A = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                O(this, e),
                this.init(t, n)
            }
            return x(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || T,
                    this.options = t,
                    this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, r) {
                    return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                    this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger,R(R({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }), this.options))
                }
            }]),
            e
        }()
          , D = new A
          , _ = function() {
            function e() {
                O(this, e),
                this.observers = {}
            }
            return x(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [],
                        n.observers[e].push(t)
                    }
                    )),
                    this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    }
                    )) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (this.observers[e]) {
                        var o = [].concat(this.observers[e]);
                        o.forEach((function(e) {
                            e.apply(void 0, n)
                        }
                        ))
                    }
                    if (this.observers["*"]) {
                        var i = [].concat(this.observers["*"]);
                        i.forEach((function(t) {
                            t.apply(t, [e].concat(n))
                        }
                        ))
                    }
                }
            }]),
            e
        }();
        function I() {
            var e, t, n = new Promise((function(n, r) {
                e = n,
                t = r
            }
            ));
            return n.resolve = e,
            n.reject = t,
            n
        }
        function U(e) {
            return null == e ? "" : "" + e
        }
        function M(e, t, n) {
            e.forEach((function(e) {
                t[e] && (n[e] = t[e])
            }
            ))
        }
        function B(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            function o() {
                return !e || "string" === typeof e
            }
            for (var i = "string" !== typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
                if (o())
                    return {};
                var a = r(i.shift());
                !e[a] && n && (e[a] = new n),
                e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
            }
            return o() ? {} : {
                obj: e,
                k: r(i.shift())
            }
        }
        function F(e, t, n) {
            var r = B(e, t, Object);
            r.obj[r.k] = n
        }
        function H(e, t) {
            var n = B(e, t)
              , r = n.obj
              , o = n.k;
            if (r)
                return r[o]
        }
        function z(e, t, n) {
            var r = H(e, n);
            return void 0 !== r ? r : H(t, n)
        }
        function V(e, t, n) {
            for (var r in t)
                "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r]instanceof String || "string" === typeof t[r] || t[r]instanceof String ? n && (e[r] = t[r]) : V(e[r], t[r], n) : e[r] = t[r]);
            return e
        }
        function $(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var J = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function q(e) {
            return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                return J[e]
            }
            )) : e
        }
        var K = "undefined" !== typeof window && window.navigator && "undefined" === typeof window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
          , Z = [" ", ",", "?", "!", ";"];
        function W(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? W(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function G(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = C(e);
                if (t) {
                    var o = C(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return P(this, n)
            }
        }
        function Y(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (e) {
                if (e[t])
                    return e[t];
                for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
                    if (!o)
                        return;
                    if ("string" === typeof o[r[i]] && i + 1 < r.length)
                        return;
                    if (void 0 === o[r[i]]) {
                        for (var a = 2, s = r.slice(i, i + a).join(n), u = o[s]; void 0 === u && r.length > i + a; )
                            a++,
                            u = o[s = r.slice(i, i + a).join(n)];
                        if (void 0 === u)
                            return;
                        if (null === u)
                            return null;
                        if (t.endsWith(s)) {
                            if ("string" === typeof u)
                                return u;
                            if (s && "string" === typeof u[s])
                                return u[s]
                        }
                        var c = r.slice(i + a).join(n);
                        return c ? Y(u, c, n) : void 0
                    }
                    o = o[r[i]]
                }
                return o
            }
        }
        var X = function(e) {
            S(n, e);
            var t = G(n);
            function n(e) {
                var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return O(this, n),
                r = t.call(this),
                K && _.call(k(r)),
                r.data = e || {},
                r.options = o,
                void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                void 0 === r.options.ignoreJSONStructure && (r.options.ignoreJSONStructure = !0),
                r
            }
            return x(n, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                      , i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure
                      , a = [e, t];
                    n && "string" !== typeof n && (a = a.concat(n)),
                    n && "string" === typeof n && (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (a = e.split("."));
                    var s = H(this.data, a);
                    return s || !i || "string" !== typeof n ? s : Y(this.data && this.data[e] && this.data[e][t], n, o)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }
                      , i = this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var a = [e, t];
                    n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (r = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t),
                    F(this.data, a, r),
                    o.silent || this.emit("added", e, t, n, r)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var o in n)
                        "string" !== typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                            silent: !0
                        });
                    r.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, n, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , a = [e, t];
                    e.indexOf(".") > -1 && (r = n,
                    n = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t);
                    var s = H(this.data, a) || {};
                    r ? V(s, n, o) : s = Q(Q({}, s), n),
                    F(this.data, a, s),
                    i.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? Q(Q({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "hasLanguageSomeTranslations",
                value: function(e) {
                    var t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find((function(e) {
                        return t[e] && Object.keys(t[e]).length > 0
                    }
                    ))
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]),
            n
        }(_)
          , ee = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, r, o) {
                var i = this;
                return e.forEach((function(e) {
                    i.processors[e] && (t = i.processors[e].process(t, n, r, o))
                }
                )),
                t
            }
        };
        function te(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function re(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = C(e);
                if (t) {
                    var o = C(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return P(this, n)
            }
        }
        var oe = {}
          , ie = function(e) {
            S(n, e);
            var t = re(n);
            function n(e) {
                var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return O(this, n),
                r = t.call(this),
                K && _.call(k(r)),
                M(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, k(r)),
                r.options = o,
                void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                r.logger = D.create("translator"),
                r
            }
            return x(n, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (void 0 === e || null === e)
                        return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , o = t.ns || this.options.defaultNS || []
                      , i = n && e.indexOf(n) > -1
                      , a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !function(e, t, n) {
                        t = t || "",
                        n = n || "";
                        var r = Z.filter((function(e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0
                        }
                        ));
                        if (0 === r.length)
                            return !0;
                        var o = new RegExp("(".concat(r.map((function(e) {
                            return "?" === e ? "\\?" : e
                        }
                        )).join("|"), ")"))
                          , i = !o.test(e);
                        if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0)
                        }
                        return i
                    }(e, n, r);
                    if (i && !a) {
                        var s = e.match(this.interpolator.nestingRegexp);
                        if (s && s.length > 0)
                            return {
                                key: e,
                                namespaces: o
                            };
                        var u = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()),
                        e = u.join(r)
                    }
                    return "string" === typeof o && (o = [o]),
                    {
                        key: e,
                        namespaces: o
                    }
                }
            }, {
                key: "translate",
                value: function(e, t, r) {
                    var o = this;
                    if ("object" !== b(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    t || (t = {}),
                    void 0 === e || null === e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var i = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails
                      , a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , s = this.extractFromKey(e[e.length - 1], t)
                      , u = s.key
                      , c = s.namespaces
                      , l = c[c.length - 1]
                      , f = t.lng || this.language
                      , p = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (f && "cimode" === f.toLowerCase()) {
                        if (p) {
                            var d = t.nsSeparator || this.options.nsSeparator;
                            return i ? (h.res = "".concat(l).concat(d).concat(u),
                            h) : "".concat(l).concat(d).concat(u)
                        }
                        return i ? (h.res = u,
                        h) : u
                    }
                    var h = this.resolve(e, t)
                      , g = h && h.res
                      , v = h && h.usedKey || u
                      , y = h && h.exactUsedKey || u
                      , m = Object.prototype.toString.apply(g)
                      , O = ["[object Number]", "[object Function]", "[object RegExp]"]
                      , w = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , x = !this.i18nFormat || this.i18nFormat.handleAsObject
                      , k = "string" !== typeof g && "boolean" !== typeof g && "number" !== typeof g;
                    if (x && g && k && O.indexOf(m) < 0 && ("string" !== typeof w || "[object Array]" !== m)) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var j = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, g, ne(ne({}, t), {}, {
                                ns: c
                            })) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.");
                            return i ? (h.res = j,
                            h) : j
                        }
                        if (a) {
                            var S = "[object Array]" === m
                              , P = S ? [] : {}
                              , C = S ? y : v;
                            for (var E in g)
                                if (Object.prototype.hasOwnProperty.call(g, E)) {
                                    var N = "".concat(C).concat(a).concat(E);
                                    P[E] = this.translate(N, ne(ne({}, t), {
                                        joinArrays: !1,
                                        ns: c
                                    })),
                                    P[E] === N && (P[E] = g[E])
                                }
                            g = P
                        }
                    } else if (x && "string" === typeof w && "[object Array]" === m)
                        (g = g.join(w)) && (g = this.extendTranslation(g, e, t, r));
                    else {
                        var L = !1
                          , R = !1
                          , T = void 0 !== t.count && "string" !== typeof t.count
                          , A = n.hasDefaultValue(t)
                          , D = T ? this.pluralResolver.getSuffix(f, t.count, t) : ""
                          , _ = t["defaultValue".concat(D)] || t.defaultValue;
                        !this.isValidLookup(g) && A && (L = !0,
                        g = _),
                        this.isValidLookup(g) || (R = !0,
                        g = u);
                        var I = t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey
                          , U = I && R ? void 0 : g
                          , M = A && _ !== g && this.options.updateMissing;
                        if (R || L || M) {
                            if (this.logger.log(M ? "updateKey" : "missingKey", f, l, u, M ? _ : g),
                            a) {
                                var B = this.resolve(u, ne(ne({}, t), {}, {
                                    keySeparator: !1
                                }));
                                B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var F = []
                              , H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && H && H[0])
                                for (var z = 0; z < H.length; z++)
                                    F.push(H[z]);
                            else
                                "all" === this.options.saveMissingTo ? F = this.languageUtils.toResolveHierarchy(t.lng || this.language) : F.push(t.lng || this.language);
                            var V = function(e, n, r) {
                                var i = A && r !== g ? r : U;
                                o.options.missingKeyHandler ? o.options.missingKeyHandler(e, l, n, i, M, t) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, l, n, i, M, t),
                                o.emit("missingKey", e, l, n, g)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && T ? F.forEach((function(e) {
                                o.pluralResolver.getSuffixes(e, t).forEach((function(n) {
                                    V([e], u + n, t["defaultValue".concat(n)] || _)
                                }
                                ))
                            }
                            )) : V(F, u, _))
                        }
                        g = this.extendTranslation(g, e, t, h, r),
                        R && g === u && this.options.appendNamespaceToMissingKey && (g = "".concat(l, ":").concat(u)),
                        (R || L) && this.options.parseMissingKeyHandler && (g = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(l, ":").concat(u) : u, L ? g : void 0) : this.options.parseMissingKeyHandler(g))
                    }
                    return i ? (h.res = g,
                    h) : g
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, ne(ne({}, this.options.interpolation.defaultVariables), n), r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(ne(ne({}, n), {
                            interpolation: ne(ne({}, this.options.interpolation), n.interpolation)
                        }));
                        var a, s = "string" === typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (s) {
                            var u = e.match(this.interpolator.nestingRegexp);
                            a = u && u.length
                        }
                        var c = n.replace && "string" !== typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (c = ne(ne({}, this.options.interpolation.defaultVariables), c)),
                        e = this.interpolator.interpolate(e, c, n.lng || this.language, n),
                        s) {
                            var l = e.match(this.interpolator.nestingRegexp);
                            a < (l && l.length) && (n.nest = !1)
                        }
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                                r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])),
                            null) : i.translate.apply(i, r.concat([t]))
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess
                      , p = "string" === typeof f ? [f] : f;
                    return void 0 !== e && null !== e && p && p.length && !1 !== n.applyPostProcessor && (e = ee.handle(p, e, t, this.options && this.options.postProcessPassResolved ? ne({
                        i18nResolved: r
                    }, n) : n, this)),
                    e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, r, o, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        if (!a.isValidLookup(t)) {
                            var u = a.extractFromKey(e, s)
                              , c = u.key;
                            n = c;
                            var l = u.namespaces;
                            a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                            var f = void 0 !== s.count && "string" !== typeof s.count
                              , p = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi()
                              , d = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context
                              , h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                            l.forEach((function(e) {
                                a.isValidLookup(t) || (i = e,
                                !oe["".concat(h[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (oe["".concat(h[0], "-").concat(e)] = !0,
                                a.logger.warn('key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                h.forEach((function(n) {
                                    if (!a.isValidLookup(t)) {
                                        o = n;
                                        var i, u = [c];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                            a.i18nFormat.addLookupKeys(u, c, n, e, s);
                                        else {
                                            var l;
                                            f && (l = a.pluralResolver.getSuffix(n, s.count, s));
                                            var h = "".concat(a.options.pluralSeparator, "zero");
                                            if (f && (u.push(c + l),
                                            p && u.push(c + h)),
                                            d) {
                                                var g = "".concat(c).concat(a.options.contextSeparator).concat(s.context);
                                                u.push(g),
                                                f && (u.push(g + l),
                                                p && u.push(g + h))
                                            }
                                        }
                                        for (; i = u.pop(); )
                                            a.isValidLookup(t) || (r = i,
                                            t = a.getResource(n, e, i, s))
                                    }
                                }
                                )))
                            }
                            ))
                        }
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
            }], [{
                key: "hasDefaultValue",
                value: function(e) {
                    var t = "defaultValue";
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n])
                            return !0;
                    return !1
                }
            }]),
            n
        }(_);
        function ae(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var se = function() {
            function e(t) {
                O(this, e),
                this.options = t,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = D.create("languageUtils")
            }
            return x(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" === typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                          , n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = ae(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = ae(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = ae(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach((function(e) {
                        if (!t) {
                            var r = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                        }
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((function(e) {
                        if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r))
                                return t = r;
                            t = n.options.supportedLngs.find((function(e) {
                                if (0 === e.indexOf(r))
                                    return e
                            }
                            ))
                        }
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e)
                        return [];
                    if ("function" === typeof e && (e = e(t)),
                    "string" === typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this
                      , r = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , o = []
                      , i = function(e) {
                        e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    };
                    return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" === typeof e && i(this.formatLanguageCode(e)),
                    r.forEach((function(e) {
                        o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }
                    )),
                    o
                }
            }]),
            e
        }()
          , ue = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , ce = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }
          , le = ["v1", "v2", "v3"]
          , fe = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };
        function pe() {
            var e = {};
            return ue.forEach((function(t) {
                t.lngs.forEach((function(n) {
                    e[n] = {
                        numbers: t.nr,
                        plurals: ce[t.fc]
                    }
                }
                ))
            }
            )),
            e
        }
        var de = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                O(this, e),
                this.languageUtils = t,
                this.options = n,
                this.logger = D.create("pluralResolver"),
                this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" !== typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = pe()
            }
            return x(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi())
                        try {
                            return new Intl.PluralRules(e,{
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch (n) {
                            return
                        }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map((function(e) {
                        return "".concat(t).concat(e)
                    }
                    ))
                }
            }, {
                key: "getSuffixes",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((function(e, t) {
                        return fe[e] - fe[t]
                    }
                    )).map((function(e) {
                        return "".concat(t.options.prepend).concat(e)
                    }
                    )) : r.numbers.map((function(r) {
                        return t.getSuffix(e, r, n)
                    }
                    )) : []
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(t)) : this.getSuffixRetroCompatible(r, t) : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "")
                }
            }, {
                key: "getSuffixRetroCompatible",
                value: function(e, t) {
                    var n = this
                      , r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t))
                      , o = e.numbers[r];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                    var i = function() {
                        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                    };
                    return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" === typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                }
            }, {
                key: "shouldUseIntlApi",
                value: function() {
                    return !le.includes(this.options.compatibilityJSON)
                }
            }]),
            e
        }();
        function he(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? he(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ve = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                O(this, e),
                this.logger = D.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }
                ,
                this.init(t)
            }
            return x(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : q,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? $(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? $(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? $(t.nestingPrefix) : t.nestingPrefixEscaped || $("$t("),
                    this.nestingSuffix = t.nestingSuffix ? $(t.nestingSuffix) : t.nestingSuffixEscaped || $(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e,"g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t,"g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n,"g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, r) {
                    var o, i, a, s = this, u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function c(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var l = function(e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var o = z(t, u, e);
                            return s.alwaysFormat ? s.format(o, void 0, n, ge(ge(ge({}, r), t), {}, {
                                interpolationkey: e
                            })) : o
                        }
                        var i = e.split(s.formatSeparator)
                          , a = i.shift().trim()
                          , c = i.join(s.formatSeparator).trim();
                        return s.format(z(t, u, a), c, n, ge(ge(ge({}, r), t), {}, {
                            interpolationkey: a
                        }))
                    };
                    this.resetRegExp();
                    var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , p = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return c(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return s.escapeValue ? c(s.escape(e)) : c(e)
                        }
                    }].forEach((function(t) {
                        for (a = 0; o = t.regex.exec(e); ) {
                            var n = o[1].trim();
                            if (void 0 === (i = l(n)))
                                if ("function" === typeof f) {
                                    var u = f(e, o, r);
                                    i = "string" === typeof u ? u : ""
                                } else if (r && r.hasOwnProperty(n))
                                    i = "";
                                else {
                                    if (p) {
                                        i = o[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)),
                                    i = ""
                                }
                            else
                                "string" === typeof i || s.useRawValueToEscape || (i = U(i));
                            var c = t.safeValue(i);
                            if (e = e.replace(o[0], c),
                            p ? (t.regex.lastIndex += i.length,
                            t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0,
                            ++a >= s.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var n, r, o = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = ge({}, i);
                    function s(e, t) {
                        var n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        var r = e.split(new RegExp("".concat(n, "[ ]*{")))
                          , o = "{".concat(r[1]);
                        e = r[0],
                        o = (o = this.interpolate(o, a)).replace(/'/g, '"');
                        try {
                            a = JSON.parse(o),
                            t && (a = ge(ge({}, t), a))
                        } catch (i) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), i),
                            "".concat(e).concat(n).concat(o)
                        }
                        return delete a.defaultValue,
                        e
                    }
                    for (a.applyPostProcessor = !1,
                    delete a.defaultValue; n = this.nestingRegexp.exec(e); ) {
                        var u = []
                          , c = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            var l = n[1].split(this.formatSeparator).map((function(e) {
                                return e.trim()
                            }
                            ));
                            n[1] = l.shift(),
                            u = l,
                            c = !0
                        }
                        if ((r = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" !== typeof r)
                            return r;
                        "string" !== typeof r && (r = U(r)),
                        r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                        r = ""),
                        c && (r = u.reduce((function(e, t) {
                            return o.format(e, t, i.lng, ge(ge({}, i), {}, {
                                interpolationkey: n[1].trim()
                            }))
                        }
                        ), r.trim())),
                        e = e.replace(n[0], r),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]),
            e
        }();
        function ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function me(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var be = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                O(this, e),
                this.logger = D.create("formatter"),
                this.options = t,
                this.formats = {
                    number: function(e, t, n) {
                        return new Intl.NumberFormat(t,n).format(e)
                    },
                    currency: function(e, t, n) {
                        return new Intl.NumberFormat(t,me(me({}, n), {}, {
                            style: "currency"
                        })).format(e)
                    },
                    datetime: function(e, t, n) {
                        return new Intl.DateTimeFormat(t,me({}, n)).format(e)
                    },
                    relativetime: function(e, t, n) {
                        return new Intl.RelativeTimeFormat(t,me({}, n)).format(e, n.range || "day")
                    },
                    list: function(e, t, n) {
                        return new Intl.ListFormat(t,me({}, n)).format(e)
                    }
                },
                this.init(t)
            }
            return x(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }
                      , n = t.interpolation;
                    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                }
            }, {
                key: "add",
                value: function(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
            }, {
                key: "format",
                value: function(e, t, n, r) {
                    var o = this;
                    return t.split(this.formatSeparator).reduce((function(e, t) {
                        var i = function(e) {
                            var t = e.toLowerCase().trim()
                              , n = {};
                            if (e.indexOf("(") > -1) {
                                var r = e.split("(");
                                t = r[0].toLowerCase().trim();
                                var o = r[1].substring(0, r[1].length - 1);
                                "currency" === t && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : "relativetime" === t && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((function(e) {
                                    if (e) {
                                        var t = N(e.split(":"))
                                          , r = t[0]
                                          , o = t.slice(1).join(":").trim().replace(/^'+|'+$/g, "");
                                        n[r.trim()] || (n[r.trim()] = o),
                                        "false" === o && (n[r.trim()] = !1),
                                        "true" === o && (n[r.trim()] = !0),
                                        isNaN(o) || (n[r.trim()] = parseInt(o, 10))
                                    }
                                }
                                ))
                            }
                            return {
                                formatName: t,
                                formatOptions: n
                            }
                        }(t)
                          , a = i.formatName
                          , s = i.formatOptions;
                        if (o.formats[a]) {
                            var u = e;
                            try {
                                var c = r && r.formatParams && r.formatParams[r.interpolationkey] || {}
                                  , l = c.locale || c.lng || r.locale || r.lng || n;
                                u = o.formats[a](e, l, me(me(me({}, s), r), c))
                            } catch (f) {
                                o.logger.warn(f)
                            }
                            return u
                        }
                        return o.logger.warn("there was no format function for ".concat(a)),
                        e
                    }
                    ), e)
                }
            }]),
            e
        }();
        function Oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oe(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function xe(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = C(e);
                if (t) {
                    var o = C(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return P(this, n)
            }
        }
        var ke = function(e) {
            S(n, e);
            var t = xe(n);
            function n(e, r, o) {
                var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return O(this, n),
                i = t.call(this),
                K && _.call(k(i)),
                i.backend = e,
                i.store = r,
                i.services = o,
                i.languageUtils = o.languageUtils,
                i.options = a,
                i.logger = D.create("backendConnector"),
                i.waitingReads = [],
                i.maxParallelReads = a.maxParallelReads || 10,
                i.readingCalls = 0,
                i.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5,
                i.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350,
                i.state = {},
                i.queue = [],
                i.backend && i.backend.init && i.backend.init(o, a.backend, a),
                i
            }
            return x(n, [{
                key: "queueLoad",
                value: function(e, t, n, r) {
                    var o = this
                      , i = {}
                      , a = {}
                      , s = {}
                      , u = {};
                    return e.forEach((function(e) {
                        var r = !0;
                        t.forEach((function(t) {
                            var s = "".concat(e, "|").concat(t);
                            !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? void 0 === a[s] && (a[s] = !0) : (o.state[s] = 1,
                            r = !1,
                            void 0 === a[s] && (a[s] = !0),
                            void 0 === i[s] && (i[s] = !0),
                            void 0 === u[t] && (u[t] = !0)))
                        }
                        )),
                        r || (s[e] = !0)
                    }
                    )),
                    (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
                        pending: a,
                        pendingCount: Object.keys(a).length,
                        loaded: {},
                        errors: [],
                        callback: r
                    }),
                    {
                        toLoad: Object.keys(i),
                        pending: Object.keys(a),
                        toLoadLanguages: Object.keys(s),
                        toLoadNamespaces: Object.keys(u)
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    t && this.emit("failedLoading", o, i, t),
                    n && this.store.addResourceBundle(o, i, n),
                    this.state[e] = t ? -1 : 2;
                    var a = {};
                    this.queue.forEach((function(n) {
                        !function(e, t, n, r) {
                            var o = B(e, t, Object)
                              , i = o.obj
                              , a = o.k;
                            i[a] = i[a] || [],
                            r && (i[a] = i[a].concat(n)),
                            r || i[a].push(n)
                        }(n.loaded, [o], i),
                        function(e, t) {
                            void 0 !== e.pending[t] && (delete e.pending[t],
                            e.pendingCount--)
                        }(n, e),
                        t && n.errors.push(t),
                        0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            a[e] || (a[e] = {});
                            var t = n.loaded[e];
                            t.length && t.forEach((function(t) {
                                void 0 === a[e][t] && (a[e][t] = !0)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", a),
                    this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var r = this
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                      , a = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.readingCalls >= this.maxParallelReads ? void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: n,
                        tried: o,
                        wait: i,
                        callback: a
                    }) : (this.readingCalls++,
                    this.backend[n](e, t, (function(s, u) {
                        if (r.readingCalls--,
                        r.waitingReads.length > 0) {
                            var c = r.waitingReads.shift();
                            r.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback)
                        }
                        s && u && o < r.maxRetries ? setTimeout((function() {
                            r.read.call(r, e, t, n, o + 1, 2 * i, a)
                        }
                        ), i) : a(s, u)
                    }
                    ))) : a(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        o && o();
                    "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" === typeof t && (t = [t]);
                    var i = this.queueLoad(e, t, r, o);
                    if (!i.toLoad.length)
                        return i.pending.length || o(),
                        null;
                    i.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    this.read(o, i, "read", void 0, void 0, (function(r, a) {
                        r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r),
                        !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                        t.loaded(e, r, a)
                    }
                    ))
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, we(we({}, i), {}, {
                        isUpdate: o
                    })),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
                }
            }]),
            n
        }(_);
        function je() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(e) {
                    var t = {};
                    if ("object" === b(e[1]) && (t = e[1]),
                    "string" === typeof e[1] && (t.defaultValue = e[1]),
                    "string" === typeof e[2] && (t.tDescription = e[2]),
                    "object" === b(e[2]) || "object" === b(e[3])) {
                        var n = e[3] || e[2];
                        Object.keys(n).forEach((function(e) {
                            t[e] = n[e]
                        }
                        ))
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: function(e, t, n, r) {
                        return e
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                }
            }
        }
        function Se(e) {
            return "string" === typeof e.ns && (e.ns = [e.ns]),
            "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function Pe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pe(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Ee(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = C(e);
                if (t) {
                    var o = C(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return P(this, n)
            }
        }
        function Ne() {}
        function Le(e) {
            Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t) {
                "function" === typeof e[t] && (e[t] = e[t].bind(e))
            }
            ))
        }
        var Re = function(e) {
            S(n, e);
            var t = Ee(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
                if (O(this, n),
                e = t.call(this),
                K && _.call(k(e)),
                e.options = Se(r),
                e.services = {},
                e.logger = D,
                e.modules = {
                    external: []
                },
                Le(k(e)),
                o && !e.isInitialized && !r.isClone) {
                    if (!e.options.initImmediate)
                        return e.init(r, o),
                        P(e, k(e));
                    setTimeout((function() {
                        e.init(r, o)
                    }
                    ), 0)
                }
                return e
            }
            return x(n, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    "function" === typeof t && (n = t,
                    t = {}),
                    !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" === typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                    var r = je();
                    function o(e) {
                        return e ? "function" === typeof e ? new e : e : null
                    }
                    if (this.options = Ce(Ce(Ce({}, r), this.options), Se(t)),
                    "v1" !== this.options.compatibilityAPI && (this.options.interpolation = Ce(Ce({}, r.interpolation), this.options.interpolation)),
                    void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
                    void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                    !this.options.isClone) {
                        var i;
                        this.modules.logger ? D.init(o(this.modules.logger), this.options) : D.init(null, this.options),
                        this.modules.formatter ? i = this.modules.formatter : "undefined" !== typeof Intl && (i = be);
                        var a = new se(this.options);
                        this.store = new X(this.options.resources,this.options);
                        var s = this.services;
                        s.logger = D,
                        s.resourceStore = this.store,
                        s.languageUtils = a,
                        s.pluralResolver = new de(a,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        !i || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (s.formatter = o(i),
                        s.formatter.init(s, this.options),
                        this.options.interpolation.format = s.formatter.format.bind(s.formatter)),
                        s.interpolator = new ve(this.options),
                        s.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        s.backendConnector = new ke(o(this.modules.backend),s.resourceStore,s,this.options),
                        s.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector),
                        s.languageDetector.init(s, this.options.detection, this.options)),
                        this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat),
                        s.i18nFormat.init && s.i18nFormat.init(this)),
                        this.translator = new ie(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.external.forEach((function(t) {
                            t.init && t.init(e)
                        }
                        ))
                    }
                    if (this.format = this.options.interpolation.format,
                    n || (n = Ne),
                    this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                    c.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    }
                    ));
                    var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                    l.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments),
                            e
                        }
                    }
                    ));
                    var f = I()
                      , p = function() {
                        var t = function(t, r) {
                            e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"),
                            e.isInitialized = !0,
                            e.options.isClone || e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            f.resolve(r),
                            n(t, r)
                        };
                        if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized)
                            return t(null, e.t.bind(e));
                        e.changeLanguage(e.options.lng, t)
                    };
                    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0),
                    f
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ne
                      , r = n
                      , o = "string" === typeof e ? e : this.language;
                    if ("function" === typeof e && (r = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (o && "cimode" === o.toLowerCase())
                            return r();
                        var i = []
                          , a = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                i.indexOf(e) < 0 && i.push(e)
                            }
                            ))
                        };
                        if (o)
                            a(o);
                        else {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            s.forEach((function(e) {
                                return a(e)
                            }
                            ))
                        }
                        this.options.preload && this.options.preload.forEach((function(e) {
                            return a(e)
                        }
                        )),
                        this.services.backendConnector.load(i, this.options.ns, (function(e) {
                            e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language),
                            r(e)
                        }
                        ))
                    } else
                        r(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var r = I();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = Ne),
                    this.services.backendConnector.reload(e, t, (function(e) {
                        r.resolve(),
                        n(e)
                    }
                    )),
                    r
                }
            }, {
                key: "use",
                value: function(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && ee.addPostProcessor(e),
                    "formatter" === e.type && (this.modules.formatter = e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
            }, {
                key: "setResolvedLanguage",
                value: function(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (var t = 0; t < this.languages.length; t++) {
                            var n = this.languages[t];
                            if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                                this.resolvedLanguage = n;
                                break
                            }
                        }
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var r = I();
                    this.emit("languageChanging", e);
                    var o = function(e) {
                        n.language = e,
                        n.languages = n.services.languageUtils.toResolveHierarchy(e),
                        n.resolvedLanguage = void 0,
                        n.setResolvedLanguage(e)
                    }
                      , i = function(i) {
                        e || i || !n.services.languageDetector || (i = []);
                        var a = "string" === typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                        a && (n.language || o(a),
                        n.translator.language || n.translator.changeLanguage(a),
                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)),
                        n.loadResources(a, (function(e) {
                            !function(e, i) {
                                i ? (o(i),
                                n.translator.changeLanguage(i),
                                n.isLanguageChangingTo = void 0,
                                n.emit("languageChanged", i),
                                n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0,
                                r.resolve((function() {
                                    return n.t.apply(n, arguments)
                                }
                                )),
                                t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }
                                ))
                            }(e, a)
                        }
                        ))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()),
                    r
                }
            }, {
                key: "getFixedT",
                value: function(e, t, n) {
                    var r = this
                      , o = function e(t, o) {
                        var i;
                        if ("object" !== b(o)) {
                            for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++)
                                s[u - 2] = arguments[u];
                            i = r.options.overloadTranslationOptionHandler([t, o].concat(s))
                        } else
                            i = Ce({}, o);
                        i.lng = i.lng || e.lng,
                        i.lngs = i.lngs || e.lngs,
                        i.ns = i.ns || e.ns,
                        i.keyPrefix = i.keyPrefix || n || e.keyPrefix;
                        var c = r.options.keySeparator || "."
                          , l = i.keyPrefix ? "".concat(i.keyPrefix).concat(c).concat(t) : t;
                        return r.t(l, i)
                    };
                    return "string" === typeof e ? o.lng = e : o.lngs = e,
                    o.ns = t,
                    o.keyPrefix = n,
                    o
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    var r = this.resolvedLanguage || this.languages[0]
                      , o = !!this.options && this.options.fallbackLng
                      , i = this.languages[this.languages.length - 1];
                    if ("cimode" === r.toLowerCase())
                        return !0;
                    var a = function(e, n) {
                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === r || 2 === r
                    };
                    if (n.precheck) {
                        var s = n.precheck(this, a);
                        if (void 0 !== s)
                            return s
                    }
                    return !!this.hasResourceBundle(r, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e)))
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this
                      , r = I();
                    return this.options.ns ? ("string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }
                    )),
                    this.loadResources((function(e) {
                        r.resolve(),
                        t && t(e)
                    }
                    )),
                    r) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = I();
                    "string" === typeof e && (e = [e]);
                    var r = this.options.preload || []
                      , o = e.filter((function(e) {
                        return r.indexOf(e) < 0
                    }
                    ));
                    return o.length ? (this.options.preload = r.concat(o),
                    this.loadResources((function(e) {
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                    !e)
                        return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ne
                      , o = Ce(Ce(Ce({}, this.options), t), {
                        isClone: !0
                    })
                      , i = new n(o)
                      , a = ["store", "services", "language"];
                    return a.forEach((function(t) {
                        i[t] = e[t]
                    }
                    )),
                    i.services = Ce({}, this.services),
                    i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i.translator = new ie(i.services,i.options),
                    i.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        i.emit.apply(i, [e].concat(n))
                    }
                    )),
                    i.init(o, r),
                    i.translator.options = i.options,
                    i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }]),
            n
        }(_);
        i(Re, "createInstance", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return new Re(e,t)
        }
        ));
        var Te = Re.createInstance();
        Te.createInstance = Re.createInstance;
        Te.createInstance,
        Te.init,
        Te.loadResources,
        Te.reloadResources,
        Te.use,
        Te.changeLanguage,
        Te.getFixedT,
        Te.t,
        Te.exists,
        Te.setDefaultNamespace,
        Te.hasLoadedNamespace,
        Te.loadNamespaces,
        Te.loadLanguages;
        var Ae = Te
          , De = function(e) {
            var t, n, r = Ae.createInstance(e);
            r.isInitialized ? t = Promise.resolve(Ae.t) : (null === e || void 0 === e || null === (n = e.use) || void 0 === n || n.forEach((function(e) {
                return r.use(e)
            }
            )),
            t = r.init(e));
            return {
                i18n: r,
                initPromise: t
            }
        }
          , _e = a.createElement;
        function Ie(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ie(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Me = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = function(n) {
                var r, i = n.pageProps._nextI18Next, s = null !== (r = null === i || void 0 === i ? void 0 : i.initialLocale) && void 0 !== r ? r : null, u = (0,
                a.useMemo)((function() {
                    var e;
                    if (!i)
                        return null;
                    var n = i.userConfig
                      , r = i.initialI18nStore
                      , o = null !== t && void 0 !== t && t.resources ? t.resources : r;
                    if (null === n && null === t)
                        throw new Error("appWithTranslation was called without a next-i18next config");
                    if (null !== t && (n = t),
                    null === (e = n) || void 0 === e || !e.i18n)
                        throw new Error("appWithTranslation was called without config.i18n");
                    var a = De(Ue(Ue({}, m(Ue(Ue({}, n), {}, {
                        lng: s
                    }))), {}, {
                        lng: s,
                        resources: o
                    })).i18n;
                    return a,
                    a
                }
                ), [i, s]);
                return null !== u ? _e(l, {
                    i18n: u
                }, _e(e, o({
                    key: s
                }, n))) : _e(e, o({
                    key: s
                }, n))
            };
            return u()(n, e)
        }
    },
    7544: function(e, t, n) {
        e.exports = n(22741)
    },
    31102: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return s
            },
            S: function() {
                return u
            }
        });
        var r = n(16835)
          , o = n(67294)
          , i = n(85893)
          , a = o.createContext({})
          , s = function(e) {
            var t = e.children
              , n = o.useState(null)
              , s = (0,
            r.Z)(n, 2)
              , u = s[0]
              , c = s[1]
              , l = o.useState(null)
              , f = (0,
            r.Z)(l, 2)
              , p = f[0]
              , d = f[1]
              , h = function() {
                c(window.innerWidth),
                d(window.innerHeight)
            };
            return o.useEffect((function() {
                return h(),
                window.addEventListener("resize", h),
                function() {
                    return window.removeEventListener("resize", h)
                }
            }
            ), []),
            (0,
            i.jsx)(a.Provider, {
                value: {
                    width: u,
                    height: p
                },
                children: t
            })
        }
          , u = function() {
            var e = o.useContext(a);
            return {
                width: e.width,
                height: e.height
            }
        }
    },
    44337: function(e, t, n) {
        "use strict";
        n.d(t, {
            Lb: function() {
                return ge
            },
            td: function() {
                return ce
            },
            eR: function() {
                return fe
            },
            lU: function() {
                return le
            },
            lE: function() {
                return Fe
            },
            fs: function() {
                return be
            },
            Bl: function() {
                return he
            },
            vS: function() {
                return de
            },
            Tt: function() {
                return He
            },
            Js: function() {
                return pe
            },
            Cz: function() {
                return me
            },
            Xl: function() {
                return ye
            },
            HT: function() {
                return ve
            },
            cH: function() {
                return Ie
            },
            zm: function() {
                return De
            },
            BX: function() {
                return _e
            },
            l9: function() {
                return Be
            },
            PF: function() {
                return Me
            },
            wC: function() {
                return Ae
            },
            z0: function() {
                return $e
            },
            se: function() {
                return Ue
            },
            S_: function() {
                return R
            },
            ps: function() {
                return ke
            },
            DM: function() {
                return Pe
            },
            pe: function() {
                return rt
            },
            J8: function() {
                return ot
            },
            fY: function() {
                return Q
            },
            JS: function() {
                return B
            },
            Dn: function() {
                return V
            },
            QG: function() {
                return Ee
            },
            xs: function() {
                return Te
            },
            P8: function() {
                return Le
            },
            $t: function() {
                return T
            },
            vc: function() {
                return C
            },
            Zk: function() {
                return Z
            },
            v: function() {
                return st
            },
            lF: function() {
                return at
            },
            w: function() {
                return G
            },
            iw: function() {
                return vt
            },
            Gd: function() {
                return gt
            },
            TL: function() {
                return ut
            },
            CY: function() {
                return ze
            },
            NQ: function() {
                return ue
            },
            Bt: function() {
                return ft
            },
            YN: function() {
                return lt
            },
            r9: function() {
                return I
            },
            R_: function() {
                return z
            },
            Zo: function() {
                return O
            },
            p1: function() {
                return x
            },
            y: function() {
                return w
            },
            Bs: function() {
                return xe
            },
            pV: function() {
                return W
            },
            _I: function() {
                return Ne
            },
            Is: function() {
                return Y
            },
            dI: function() {
                return Se
            },
            CV: function() {
                return Re
            },
            Zp: function() {
                return ne
            },
            ZQ: function() {
                return je
            },
            OI: function() {
                return Ce
            },
            fm: function() {
                return Oe
            },
            C0: function() {
                return ie
            },
            Lc: function() {
                return q
            },
            QX: function() {
                return oe
            },
            Pm: function() {
                return ee
            },
            U8: function() {
                return te
            },
            TA: function() {
                return ae
            },
            bh: function() {
                return Ye
            },
            YE: function() {
                return S
            },
            MC: function() {
                return j
            },
            BJ: function() {
                return mt
            },
            eO: function() {
                return re
            },
            OE: function() {
                return qe
            },
            Qb: function() {
                return Je
            },
            dl: function() {
                return Ve
            },
            D6: function() {
                return M
            },
            yO: function() {
                return $
            },
            $P: function() {
                return P
            },
            lL: function() {
                return tt
            },
            JD: function() {
                return k
            },
            hn: function() {
                return X
            },
            x4: function() {
                return A
            },
            kS: function() {
                return D
            },
            HP: function() {
                return pt
            },
            Cs: function() {
                return dt
            },
            H0: function() {
                return J
            },
            QT: function() {
                return We
            },
            Gi: function() {
                return K
            },
            og: function() {
                return ht
            },
            U3: function() {
                return et
            },
            gU: function() {
                return Ze
            },
            XU: function() {
                return it
            },
            l8: function() {
                return Ge
            },
            GB: function() {
                return L
            },
            sq: function() {
                return yt
            },
            IU: function() {
                return _
            },
            ae: function() {
                return ct
            },
            yX: function() {
                return Xe
            },
            xu: function() {
                return nt
            },
            cm: function() {
                return Ke
            },
            a0: function() {
                return m
            },
            fN: function() {
                return Qe
            },
            yR: function() {
                return we
            },
            He: function() {
                return se
            },
            y_: function() {
                return U
            },
            zy: function() {
                return H
            },
            Hp: function() {
                return N
            },
            m3: function() {
                return E
            },
            A0: function() {
                return b
            },
            wx: function() {
                return F
            }
        });
        var r = n(2568)
          , o = n.n(r)
          , i = n(9669)
          , a = n.n(i)
          , s = n(80129)
          , u = n.n(s)
          , c = n(35487)
          , l = n.n(c)
          , f = n(88554)
          , p = n(83454)
          , d = "https://api.mytokenapi.com";
        a().defaults.withCredentials = !0,
        a().defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        var h = a().create({
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        });
        h.interceptors.request.use((function(e) {
            return function(e) {
                e.data = e.data || {},
                Object.keys(e.data).forEach((function(t) {
                    void 0 == e.data[t] && delete e.data[t]
                }
                ));
                var t = l()().get("next-i18next")
                  , n = Date.now().toString()
                  , r = o()(n + "9527" + n.substr(0, 6));
                if (e.data.timestamp = n,
                e.data.code = r,
                e.data.platform = "web_pc",
                e.data.v = "0.1.0",
                e.data.language) {
                    var i = e.data.language.split("_");
                    i[1] = i[1].toUpperCase(),
                    i = i.join("_"),
                    e.data.language = i
                } else
                    e.data.language = t ? (0,
                    f.m)(t) : "en_US";
                e.data.legal_currency || (e.data.legal_currency = l()().get("legal_currency") ? l()().get("legal_currency") : "USD");
                e.data.mytoken || (e.data.mytoken = l()().get("mytoken_sid"));
                e.data.international = e.data.international || 1,
                "post" === e.method ? e.data = u().stringify(e.data) : (e.url = e.url + "?",
                e.url += u().stringify(e.data))
            }(e),
            p.server,
            e.baseURL = d,
            e
        }
        ), (function(e) {
            return console("\u9519\u8bef\u7684\u4f20\u53c2"),
            Promise.reject(e)
        }
        )),
        h.interceptors.response.use((function(e) {
            return e
        }
        ), (function(e) {
            var t = e.response;
            return console.log("response", t),
            console.log("response.error"),
            Promise.reject(t)
        }
        ));
        var g = function(e, t) {
            return h({
                method: "post",
                url: e,
                data: t,
                mode: "cros",
                timeout: 2e4,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                }
            })
        }
          , v = function(e, t) {
            return h({
                method: "get",
                url: e,
                data: t,
                mode: "cros",
                timeout: 2e4,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                }
            })
        };
        var y = a().create({
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        });
        y.interceptors.request.use((function(e) {
            return function(e) {
                e.data = e.data || {},
                Object.keys(e.data).forEach((function(t) {
                    void 0 == e.data[t] && delete e.data[t]
                }
                )),
                "post" === e.method ? e.data = u().stringify(e.data) : (e.url = e.url + "?",
                e.url += u().stringify(e.data))
            }(e),
            e.baseURL = "https://speed-dataapi.mytokenapi.com",
            e
        }
        ), (function(e) {
            return console("\u9519\u8bef\u7684\u4f20\u53c2"),
            Promise.reject(e)
        }
        ));
        var m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/index", e)
        }
          , b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/config/webconfig", e)
        }
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/currencylist", e)
        }
          , w = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("ticker/currencynoranklist", e)
        }
          , x = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/currencylistforall", e)
        }
          , k = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/Internationaltext/titledescribe", e)
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/list", e)
        }
          , S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/exchangeconfig", e)
        }
          , P = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/data/hotsearch", e)
        }
          , C = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/esearch/association", e)
        }
          , E = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/favorite/currencygrouplist", e)
        }
          , N = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/list", e)
        }
          , L = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/favorite/currencyremovefromgroup", e)
        }
          , R = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/currency/addtogroup", e)
        }
          , T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/currency/assigntogroup", e)
        }
          , A = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/user/login", e)
        }
          , D = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/user/logout", e)
        }
          , _ = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/user/register", e)
        }
          , I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/webcurrencydetail", e)
        }
          , U = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/trend", e)
        }
          , M = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/historyprice", e)
        }
          , B = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/anchorcategorylist", e)
        }
          , F = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/webcurrencyintroduct", e)
        }
          , H = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/wallet/list", e)
        }
          , z = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/currencyexchangelist", e)
        }
          , V = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/exchangelist", e)
        }
          , $ = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/holdingmoney", e)
        }
          , J = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/media/medialist", e)
        }
          , q = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/exchangedata", e)
        }
          , K = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ethereum/ordermonitorlist", e)
        }
          , Z = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return v("/api/v2/social/tickers/".concat(e, "/repo_analyses"), t)
        }
          , W = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/api/v1/index/currencycal", e)
        }
          , Q = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return v("/api/v2/fund/tickers/".concat(e, "/new_io_analyses"), t)
        }
          , G = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return v("/api/v1/fund/tickers/".concat(e, "/new_big_orders"), t)
        }
          , Y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/currencytoppair", e)
        }
          , X = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/listbyentity", e)
        }
          , ee = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/exchange/listbyexchangevolume", e)
        }
          , te = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/exchange/highriskcenterlist", e)
        }
          , ne = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/defi/dexlist", e)
        }
          , re = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/centerlist", e)
        }
          , oe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/exchange/exchangedetailbyname", e)
        }
          , ie = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/exchange/categorylist", e)
        }
          , ae = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/ticker/pairlist", e)
        }
          , se = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/config/totaldownload", e)
        }
          , ue = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/common/conceptindexweb", e)
        }
          , ce = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/band/index", e)
        }
          , le = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/band/tradinghistorylist", e)
        }
          , fe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/band/assistantswitch", e)
        }
          , pe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/esearch/webSearch", e)
        }
          , de = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/indexforweb", e)
        }
          , he = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/index", e)
        }
          , ge = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/moneyholder/addresschart", e)
        }
          , ve = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/moneyholder/getfiltrateconfig", e)
        }
          , ye = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/moneyholder/chaininfo", e)
        }
          , me = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/index", e)
        }
          , be = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/ordermonitorlist", e)
        }
          , Oe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/ercsearch", e)
        }
          , we = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/asset/totalassetsummary", e)
        }
          , xe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currency/search", e)
        }
          , ke = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/asset/addasset", e)
        }
          , je = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/asset/editasset", e)
        }
          , Se = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/asset/deleteasset", e)
        }
          , Pe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/asset/addassetbook", e)
        }
          , Ce = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/asset/editassetbook", e)
        }
          , Ee = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/asset/assetbooklist", e)
        }
          , Ne = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/asset/currencysummary", e)
        }
          , Le = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/asset/assettrend", e)
        }
          , Re = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/asset/deletecurrency", e)
        }
          , Te = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/asset/assetlist", e)
        }
          , Ae = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("marketindex/indexsummarize", e)
        }
          , De = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/marketindex/listv1", e)
        }
          , _e = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/marketindex/trend", e)
        }
          , Ie = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/marketindex/detailv1", e)
        }
          , Ue = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/marketindex/olinetransfertrendlist", e)
        }
          , Me = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/marketindex/searchtrendlist", e)
        }
          , Be = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/mining/info", e)
        }
          , Fe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/calendar/list", e)
        }
          , He = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/currencyrank/list", e)
        }
          , ze = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/category/categoryinfo", e)
        }
          , Ve = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/nftdapplist", e)
        }
          , $e = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/topdata", e)
        }
          , Je = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/timetrend", e)
        }
          , qe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/chaindata/floorpricetrend", e)
        }
          , Ke = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/topwebnavigation", e)
        }
          , Ze = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/media/listbynav", e)
        }
          , We = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/media/medialist", e)
        }
          , Qe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/topnavigation", e)
        }
          , Ge = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/cansubscribeuser", e)
        }
          , Ye = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/exchange/medialist", e)
        }
          , Xe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/mysubarticlelist", e)
        }
          , et = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/newsflash/list", e)
        }
          , tt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/hotclicknews", e)
        }
          , nt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/news/subscribe", e)
        }
          , rt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/news/addfavorite", e)
        }
          , ot = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/ad/adinfo", e)
        }
          , it = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g("/newsflash/point", e)
        }
          , at = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/mysubauthorlist", e)
        }
          , st = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/news/authorarticlelist", e)
        }
          , ut = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/media/categorylist", e)
        }
          , ct = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/social/index", e)
        }
          , lt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futuresorderburstopenall", e)
        }
          , ft = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futuresotcklinelistweb", e)
        }
          , pt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futurescontractlongshort", e)
        }
          , dt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futuresspaceratio", e)
        }
          , ht = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futuresperiodburstdata", e)
        }
          , gt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futuresperiodburstmarketdata", e)
        }
          , vt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/futuresburstdetaillist", e)
        }
          , yt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/selecttab", e)
        }
          , mt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v("/futurescontract/kline", e)
        }
    },
    22741: function(e, t, n) {
        "use strict";
        var r = n(33227)
          , o = n(88361)
          , i = n(85971)
          , a = n(52715)
          , s = n(91193)
          , u = n(87794);
        function c(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = s(e);
                if (t) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return a(this, n)
            }
        }
        t.default = void 0;
        var l, f = (l = n(67294)) && l.__esModule ? l : {
            default: l
        }, p = n(99475);
        function d(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , u = s.value
            } catch (c) {
                return void n(c)
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o)
        }
        function h(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        d(i, r, o, a, s, "next", e)
                    }
                    function s(e) {
                        d(i, r, o, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function g() {
            return (g = h(u.mark((function e(t) {
                var n, r, o;
                return u.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.Component,
                            r = t.ctx,
                            e.next = 3,
                            p.loadGetInitialProps(n, r);
                        case 3:
                            return o = e.sent,
                            e.abrupt("return", {
                                pageProps: o
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function v(e) {
            return g.apply(this, arguments)
        }
        var y = function(e) {
            i(n, e);
            var t = c(n);
            function n() {
                return r(this, n),
                t.apply(this, arguments)
            }
            return o(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.Component
                      , n = e.pageProps;
                    return f.default.createElement(t, Object.assign({}, n))
                }
            }]),
            n
        }(f.default.Component);
        y.origGetInitialProps = v,
        y.getInitialProps = v,
        t.default = y
    },
    78e3: function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AmpStateContext = void 0;
        var o = ((r = n(67294)) && r.__esModule ? r : {
            default: r
        }).default.createContext({});
        t.AmpStateContext = o
    },
    45646: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isInAmpMode = a,
        t.useAmp = function() {
            return a(o.default.useContext(i.AmpStateContext))
        }
        ;
        var r, o = (r = n(67294)) && r.__esModule ? r : {
            default: r
        }, i = n(78e3);
        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ampFirst
              , n = void 0 !== t && t
              , r = e.hybrid
              , o = void 0 !== r && r
              , i = e.hasQuery
              , a = void 0 !== i && i;
            return n || o && a
        }
    },
    72717: function(e, t, n) {
        "use strict";
        var r = n(930);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultHead = f,
        t.default = void 0;
        var i, a = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e,
            t
        }(n(67294)), s = (i = n(11585)) && i.__esModule ? i : {
            default: i
        }, u = n(78e3), c = n(15850), l = n(45646);
        function f() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = [a.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || t.push(a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function p(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((function(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }
            ), [])) : e.concat(t)
        }
        var d = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
            return e.reduce((function(e, t) {
                var n = a.default.Children.toArray(t.props.children);
                return e.concat(n)
            }
            ), []).reduce(p, []).reverse().concat(f(t.inAmpMode)).filter(function() {
                var e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return function(o) {
                    var i = !0
                      , a = !1;
                    if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                        a = !0;
                        var s = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(s) ? i = !1 : e.add(s)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (var u = 0, c = d.length; u < c; u++) {
                            var l = d[u];
                            if (o.props.hasOwnProperty(l))
                                if ("charSet" === l)
                                    n.has(l) ? i = !1 : n.add(l);
                                else {
                                    var f = o.props[l]
                                      , p = r[l] || new Set;
                                    "name" === l && a || !p.has(f) ? (p.add(f),
                                    r[l] = p) : i = !1
                                }
                        }
                    }
                    return i
                }
            }()).reverse().map((function(e, n) {
                var i = e.key || n;
                if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
                    return e.props.href.startsWith(t)
                }
                ))) {
                    var s = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                r(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, e.props || {});
                    return s["data-href"] = s.href,
                    s.href = void 0,
                    s["data-optimized-fonts"] = !0,
                    a.default.cloneElement(e, s)
                }
                return a.default.cloneElement(e, {
                    key: i
                })
            }
            ))
        }
        var g = function(e) {
            var t = e.children
              , n = a.useContext(u.AmpStateContext)
              , r = a.useContext(c.HeadManagerContext);
            return a.default.createElement(s.default, {
                reduceComponentsToState: h,
                headManager: r,
                inAmpMode: l.isInAmpMode(n)
            }, t)
        };
        t.default = g
    },
    11585: function(e, t, n) {
        "use strict";
        var r = n(7980)
          , o = n(33227)
          , i = n(88361)
          , a = (n(92191),
        n(85971))
          , s = n(52715)
          , u = n(91193);
        function c(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return s(this, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var l = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e,
            t
        }(n(67294));
        var f = function(e) {
            a(n, e);
            var t = c(n);
            function n(e) {
                var i;
                return o(this, n),
                (i = t.call(this, e)).emitChange = function() {
                    i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                }
                ,
                i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances,
                i
            }
            return i(n, [{
                key: "componentDidMount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.emitChange()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            n
        }(l.Component);
        t.default = f
    },
    62551: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(50029)
          , o = n(59499)
          , i = n(87794)
          , a = n.n(i)
          , s = n(7544)
          , u = n(9008)
          , c = n(11163)
          , l = n(22177)
          , f = n(60577)
          , p = n(35487)
          , d = n.n(p)
          , h = (n(55062),
        n(12877),
        n(25852),
        n(71998),
        n(98865),
        n(31102))
          , g = n(85893);
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = function(e) {
            var t = e.Component
              , n = e.pageProps
              , r = (0,
            c.useRouter)()
              , o = "https://www.mytokencap.com".concat("en" === r.locale ? "" : "/" + r.locale).concat(r.asPath);
            return d()().set("next-i18next", r.locale),
            (0,
            g.jsxs)(f.mz, {
                children: [(0,
                g.jsxs)(u.default, {
                    children: [(0,
                    g.jsx)("title", {
                        children: "MyToken - Cryptocurrency Market Tracker, Landing Moon Together"
                    }), "/currencies/[...id]" !== r.pathname && (0,
                    g.jsx)("link", {
                        rel: "canonical",
                        href: o
                    }), (0,
                    g.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "en",
                        href: "https://www.mytokencap.com/"
                    }), (0,
                    g.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "zh",
                        href: "https://www.mytokencap.com/zh/"
                    }), (0,
                    g.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "ko",
                        href: "https://www.mytokencap.com/ko/"
                    }), (0,
                    g.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "ja",
                        href: "https://www.mytokencap.com/ja/"
                    }), (0,
                    g.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "vi",
                        href: "https://www.mytokencap.com/vi/"
                    }), (0,
                    g.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "ar",
                        href: "https://www.mytokencap.com/ar/"
                    })]
                }), (0,
                g.jsx)(h.j, {
                    children: (0,
                    g.jsx)(t, y({}, n))
                })]
            })
        };
        m.getInitialProps = function() {
            var e = (0,
            r.Z)(a().mark((function e(t) {
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = y,
                            e.t1 = {},
                            e.next = 4,
                            s.default.getInitialProps(t);
                        case 4:
                            return e.t2 = e.sent,
                            e.abrupt("return", (0,
                            e.t0)(e.t1, e.t2));
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        t.default = (0,
        l.Jc)(m)
    },
    60577: function(e, t, n) {
        "use strict";
        n.d(t, {
            kn: function() {
                return f
            },
            tJ: function() {
                return p
            },
            pL: function() {
                return d
            },
            gw: function() {
                return h
            },
            lH: function() {
                return g
            },
            o1: function() {
                return v
            },
            P1: function() {
                return y
            },
            IT: function() {
                return m
            },
            mz: function() {
                return w
            }
        });
        var r = n(59499)
          , o = n(67294)
          , i = n(35487)
          , a = n.n(i)
          , s = (n(44337),
        n(88554))
          , u = n(85893);
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = (0,
        o.createContext)({})
          , p = "UPDATE_USERINFO"
          , d = "UPDATE_SHOW_LOGIN"
          , h = "UPDATE_MYTOKEN"
          , g = "UPDATE_THEME"
          , v = "UPDATE_WATCHLIST_ID"
          , y = "UPDATE_WATCHLIST_STATE"
          , m = "UPDATE_LEGAL_CURRENCY_LIST"
          , b = {
            userInfo: a()().get("mytoken_userinfo") ? a()().get("mytoken_userinfo") : null,
            config: null,
            language: a()().get("next-i18next") ? (0,
            s.m)(a()().get("next-i18next")) : "en_US",
            legal_currency: a()().get("legal_currency") ? a()().get("legal_currency") : "USD",
            show_login: !1,
            mytoken: a()().get("mytoken_sid") ? a()().get("mytoken_sid") : null,
            theme: a()().get("theme") ? a()().get("theme") : "day",
            watchlist_id: 0,
            watchlist_state: !1,
            legal_currency_list: []
        }
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case p:
                return l(l({}, e), {}, {
                    userInfo: t.userInfo
                });
            case d:
                return l(l({}, e), {}, {
                    show_login: t.show_login
                });
            case h:
                return l(l({}, e), {}, {
                    mytoken: t.mytoken
                });
            case g:
                return l(l({}, e), {}, {
                    theme: t.theme
                });
            case v:
                return l(l({}, e), {}, {
                    watchlist_id: t.watchlist_id
                });
            case y:
                return l(l({}, e), {}, {
                    watchlist_state: t.watchlist_state
                });
            case m:
                return l(l({}, e), {}, {
                    legal_currency_list: t.legal_currency_list
                });
            default:
                return e
            }
        }
          , w = function(e) {
            var t = (0,
            o.useReducer)(O, b)
              , n = t[0]
              , r = t[1];
            return (0,
            u.jsx)(f.Provider, {
                value: {
                    global: n,
                    dispatch: r
                },
                children: e.children
            })
        }
    },
    88554: function(e, t, n) {
        "use strict";
        n.d(t, {
            m: function() {
                return o
            }
        });
        var r = {
            en: "en_US",
            ar: "ar_AE",
            zh: "zh_CN",
            ko: "ko_KR",
            ja: "ja_JP",
            vi: "vi_VN",
            id: "id_ID"
        };
        function o(e) {
            return r.hasOwnProperty(e) ? r[e] : "en_US"
        }
    },
    83454: function(e, t, n) {
        "use strict";
        var r, o;
        e.exports = (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) && "object" === typeof (null === (o = n.g.process) || void 0 === o ? void 0 : o.env) ? n.g.process : n(77663)
    },
    81780: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(62551)
        }
        ])
    },
    55062: function() {},
    98865: function() {},
    25852: function() {},
    12877: function() {},
    71998: function() {},
    77663: function(e) {
        !function() {
            var t = {
                162: function(e) {
                    var t, n, r = e.exports = {};
                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function i() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function a(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === o || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" === typeof setTimeout ? setTimeout : o
                        } catch (e) {
                            t = o
                        }
                        try {
                            n = "function" === typeof clearTimeout ? clearTimeout : i
                        } catch (e) {
                            n = i
                        }
                    }();
                    var s, u = [], c = !1, l = -1;
                    function f() {
                        c && s && (c = !1,
                        s.length ? u = s.concat(u) : l = -1,
                        u.length && p())
                    }
                    function p() {
                        if (!c) {
                            var e = a(f);
                            c = !0;
                            for (var t = u.length; t; ) {
                                for (s = u,
                                u = []; ++l < t; )
                                    s && s[l].run();
                                l = -1,
                                t = u.length
                            }
                            s = null,
                            c = !1,
                            function(e) {
                                if (n === clearTimeout)
                                    return clearTimeout(e);
                                if ((n === i || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function d(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function h() {}
                    r.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        u.push(new d(e,t)),
                        1 !== u.length || c || a(p)
                    }
                    ,
                    d.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = h,
                    r.addListener = h,
                    r.once = h,
                    r.off = h,
                    r.removeListener = h,
                    r.removeAllListeners = h,
                    r.emit = h,
                    r.prependListener = h,
                    r.prependOnceListener = h,
                    r.listeners = function(e) {
                        return []
                    }
                    ,
                    r.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(e) {
                var o = n[e];
                if (void 0 !== o)
                    return o.exports;
                var i = n[e] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    t[e](i, i.exports, r),
                    a = !1
                } finally {
                    a && delete n[e]
                }
                return i.exports
            }
            r.ab = "//";
            var o = r(162);
            e.exports = o
        }()
    },
    9008: function(e, t, n) {
        e.exports = n(72717)
    },
    11163: function(e, t, n) {
        e.exports = n(69898)
    },
    55798: function(e, t, n) {
        "use strict";
        var r = String.prototype.replace
          , o = /%20/g
          , i = n(12769)
          , a = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        };
        e.exports = i.assign({
            default: a.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return r.call(e, o, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            }
        }, a)
    },
    80129: function(e, t, n) {
        "use strict";
        var r = n(58261)
          , o = n(55235)
          , i = n(55798);
        e.exports = {
            formats: i,
            parse: o,
            stringify: r
        }
    },
    55235: function(e, t, n) {
        "use strict";
        var r = n(12769)
          , o = Object.prototype.hasOwnProperty
          , i = Array.isArray
          , a = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        }
          , s = function(e) {
            return e.replace(/&#(\d+);/g, (function(e, t) {
                return String.fromCharCode(parseInt(t, 10))
            }
            ))
        }
          , u = function(e, t) {
            return e && "string" === typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        }
          , c = function(e, t, n, r) {
            if (e) {
                var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
                  , a = /(\[[^[\]]*])/g
                  , s = n.depth > 0 && /(\[[^[\]]*])/.exec(i)
                  , c = s ? i.slice(0, s.index) : i
                  , l = [];
                if (c) {
                    if (!n.plainObjects && o.call(Object.prototype, c) && !n.allowPrototypes)
                        return;
                    l.push(c)
                }
                for (var f = 0; n.depth > 0 && null !== (s = a.exec(i)) && f < n.depth; ) {
                    if (f += 1,
                    !n.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes)
                        return;
                    l.push(s[1])
                }
                return s && l.push("[" + i.slice(s.index) + "]"),
                function(e, t, n, r) {
                    for (var o = r ? t : u(t, n), i = e.length - 1; i >= 0; --i) {
                        var a, s = e[i];
                        if ("[]" === s && n.parseArrays)
                            a = [].concat(o);
                        else {
                            a = n.plainObjects ? Object.create(null) : {};
                            var c = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s
                              , l = parseInt(c, 10);
                            n.parseArrays || "" !== c ? !isNaN(l) && s !== c && String(l) === c && l >= 0 && n.parseArrays && l <= n.arrayLimit ? (a = [])[l] = o : a[c] = o : a = {
                                0: o
                            }
                        }
                        o = a
                    }
                    return o
                }(l, t, n, r)
            }
        };
        e.exports = function(e, t) {
            var n = function(e) {
                if (!e)
                    return a;
                if (null !== e.decoder && void 0 !== e.decoder && "function" !== typeof e.decoder)
                    throw new TypeError("Decoder has to be a function.");
                if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var t = "undefined" === typeof e.charset ? a.charset : e.charset;
                return {
                    allowDots: "undefined" === typeof e.allowDots ? a.allowDots : !!e.allowDots,
                    allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
                    arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                    charset: t,
                    charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
                    comma: "boolean" === typeof e.comma ? e.comma : a.comma,
                    decoder: "function" === typeof e.decoder ? e.decoder : a.decoder,
                    delimiter: "string" === typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
                    depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
                    ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                    interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
                    parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
                    parseArrays: !1 !== e.parseArrays,
                    plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : a.plainObjects,
                    strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
                }
            }(t);
            if ("" === e || null === e || "undefined" === typeof e)
                return n.plainObjects ? Object.create(null) : {};
            for (var l = "string" === typeof e ? function(e, t) {
                var n, c = {}, l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, p = l.split(t.delimiter, f), d = -1, h = t.charset;
                if (t.charsetSentinel)
                    for (n = 0; n < p.length; ++n)
                        0 === p[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === p[n] ? h = "utf-8" : "utf8=%26%2310003%3B" === p[n] && (h = "iso-8859-1"),
                        d = n,
                        n = p.length);
                for (n = 0; n < p.length; ++n)
                    if (n !== d) {
                        var g, v, y = p[n], m = y.indexOf("]="), b = -1 === m ? y.indexOf("=") : m + 1;
                        -1 === b ? (g = t.decoder(y, a.decoder, h, "key"),
                        v = t.strictNullHandling ? null : "") : (g = t.decoder(y.slice(0, b), a.decoder, h, "key"),
                        v = r.maybeMap(u(y.slice(b + 1), t), (function(e) {
                            return t.decoder(e, a.decoder, h, "value")
                        }
                        ))),
                        v && t.interpretNumericEntities && "iso-8859-1" === h && (v = s(v)),
                        y.indexOf("[]=") > -1 && (v = i(v) ? [v] : v),
                        o.call(c, g) ? c[g] = r.combine(c[g], v) : c[g] = v
                    }
                return c
            }(e, n) : e, f = n.plainObjects ? Object.create(null) : {}, p = Object.keys(l), d = 0; d < p.length; ++d) {
                var h = p[d]
                  , g = c(h, l[h], n, "string" === typeof e);
                f = r.merge(f, g, n)
            }
            return r.compact(f)
        }
    },
    58261: function(e, t, n) {
        "use strict";
        var r = n(12769)
          , o = n(55798)
          , i = Object.prototype.hasOwnProperty
          , a = {
            brackets: function(e) {
                return e + "[]"
            },
            comma: "comma",
            indices: function(e, t) {
                return e + "[" + t + "]"
            },
            repeat: function(e) {
                return e
            }
        }
          , s = Array.isArray
          , u = Array.prototype.push
          , c = function(e, t) {
            u.apply(e, s(t) ? t : [t])
        }
          , l = Date.prototype.toISOString
          , f = o.default
          , p = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: r.encode,
            encodeValuesOnly: !1,
            format: f,
            formatter: o.formatters[f],
            indices: !1,
            serializeDate: function(e) {
                return l.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        }
          , d = function e(t, n, o, i, a, u, l, f, d, h, g, v, y) {
            var m, b = t;
            if ("function" === typeof l ? b = l(n, b) : b instanceof Date ? b = h(b) : "comma" === o && s(b) && (b = r.maybeMap(b, (function(e) {
                return e instanceof Date ? h(e) : e
            }
            )).join(",")),
            null === b) {
                if (i)
                    return u && !v ? u(n, p.encoder, y, "key") : n;
                b = ""
            }
            if ("string" === typeof (m = b) || "number" === typeof m || "boolean" === typeof m || "symbol" === typeof m || "bigint" === typeof m || r.isBuffer(b))
                return u ? [g(v ? n : u(n, p.encoder, y, "key")) + "=" + g(u(b, p.encoder, y, "value"))] : [g(n) + "=" + g(String(b))];
            var O, w = [];
            if ("undefined" === typeof b)
                return w;
            if (s(l))
                O = l;
            else {
                var x = Object.keys(b);
                O = f ? x.sort(f) : x
            }
            for (var k = 0; k < O.length; ++k) {
                var j = O[k]
                  , S = b[j];
                if (!a || null !== S) {
                    var P = s(b) ? "function" === typeof o ? o(n, j) : n : n + (d ? "." + j : "[" + j + "]");
                    c(w, e(S, P, o, i, a, u, l, f, d, h, g, v, y))
                }
            }
            return w
        };
        e.exports = function(e, t) {
            var n, r = e, u = function(e) {
                if (!e)
                    return p;
                if (null !== e.encoder && void 0 !== e.encoder && "function" !== typeof e.encoder)
                    throw new TypeError("Encoder has to be a function.");
                var t = e.charset || p.charset;
                if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var n = o.default;
                if ("undefined" !== typeof e.format) {
                    if (!i.call(o.formatters, e.format))
                        throw new TypeError("Unknown format option provided.");
                    n = e.format
                }
                var r = o.formatters[n]
                  , a = p.filter;
                return ("function" === typeof e.filter || s(e.filter)) && (a = e.filter),
                {
                    addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                    allowDots: "undefined" === typeof e.allowDots ? p.allowDots : !!e.allowDots,
                    charset: t,
                    charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                    delimiter: "undefined" === typeof e.delimiter ? p.delimiter : e.delimiter,
                    encode: "boolean" === typeof e.encode ? e.encode : p.encode,
                    encoder: "function" === typeof e.encoder ? e.encoder : p.encoder,
                    encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                    filter: a,
                    formatter: r,
                    serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                    skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                    sort: "function" === typeof e.sort ? e.sort : null,
                    strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
                }
            }(t);
            "function" === typeof u.filter ? r = (0,
            u.filter)("", r) : s(u.filter) && (n = u.filter);
            var l, f = [];
            if ("object" !== typeof r || null === r)
                return "";
            l = t && t.arrayFormat in a ? t.arrayFormat : t && "indices"in t ? t.indices ? "indices" : "repeat" : "indices";
            var h = a[l];
            n || (n = Object.keys(r)),
            u.sort && n.sort(u.sort);
            for (var g = 0; g < n.length; ++g) {
                var v = n[g];
                u.skipNulls && null === r[v] || c(f, d(r[v], v, h, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.formatter, u.encodeValuesOnly, u.charset))
            }
            var y = f.join(u.delimiter)
              , m = !0 === u.addQueryPrefix ? "?" : "";
            return u.charsetSentinel && ("iso-8859-1" === u.charset ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"),
            y.length > 0 ? m + y : ""
        }
    },
    12769: function(e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty
          , n = Array.isArray
          , r = function() {
            for (var e = [], t = 0; t < 256; ++t)
                e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }()
          , o = function(e, t) {
            for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)
                "undefined" !== typeof e[r] && (n[r] = e[r]);
            return n
        };
        e.exports = {
            arrayToObject: o,
            assign: function(e, t) {
                return Object.keys(t).reduce((function(e, n) {
                    return e[n] = t[n],
                    e
                }
                ), e)
            },
            combine: function(e, t) {
                return [].concat(e, t)
            },
            compact: function(e) {
                for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], r = [], o = 0; o < t.length; ++o)
                    for (var i = t[o], a = i.obj[i.prop], s = Object.keys(a), u = 0; u < s.length; ++u) {
                        var c = s[u]
                          , l = a[c];
                        "object" === typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
                            obj: a,
                            prop: c
                        }),
                        r.push(l))
                    }
                return function(e) {
                    for (; e.length > 1; ) {
                        var t = e.pop()
                          , r = t.obj[t.prop];
                        if (n(r)) {
                            for (var o = [], i = 0; i < r.length; ++i)
                                "undefined" !== typeof r[i] && o.push(r[i]);
                            t.obj[t.prop] = o
                        }
                    }
                }(t),
                e
            },
            decode: function(e, t, n) {
                var r = e.replace(/\+/g, " ");
                if ("iso-8859-1" === n)
                    return r.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(r)
                } catch (o) {
                    return r
                }
            },
            encode: function(e, t, n) {
                if (0 === e.length)
                    return e;
                var o = e;
                if ("symbol" === typeof e ? o = Symbol.prototype.toString.call(e) : "string" !== typeof e && (o = String(e)),
                "iso-8859-1" === n)
                    return escape(o).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }
                    ));
                for (var i = "", a = 0; a < o.length; ++a) {
                    var s = o.charCodeAt(a);
                    45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? i += o.charAt(a) : s < 128 ? i += r[s] : s < 2048 ? i += r[192 | s >> 6] + r[128 | 63 & s] : s < 55296 || s >= 57344 ? i += r[224 | s >> 12] + r[128 | s >> 6 & 63] + r[128 | 63 & s] : (a += 1,
                    s = 65536 + ((1023 & s) << 10 | 1023 & o.charCodeAt(a)),
                    i += r[240 | s >> 18] + r[128 | s >> 12 & 63] + r[128 | s >> 6 & 63] + r[128 | 63 & s])
                }
                return i
            },
            isBuffer: function(e) {
                return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            maybeMap: function(e, t) {
                if (n(e)) {
                    for (var r = [], o = 0; o < e.length; o += 1)
                        r.push(t(e[o]));
                    return r
                }
                return t(e)
            },
            merge: function e(r, i, a) {
                if (!i)
                    return r;
                if ("object" !== typeof i) {
                    if (n(r))
                        r.push(i);
                    else {
                        if (!r || "object" !== typeof r)
                            return [r, i];
                        (a && (a.plainObjects || a.allowPrototypes) || !t.call(Object.prototype, i)) && (r[i] = !0)
                    }
                    return r
                }
                if (!r || "object" !== typeof r)
                    return [r].concat(i);
                var s = r;
                return n(r) && !n(i) && (s = o(r, a)),
                n(r) && n(i) ? (i.forEach((function(n, o) {
                    if (t.call(r, o)) {
                        var i = r[o];
                        i && "object" === typeof i && n && "object" === typeof n ? r[o] = e(i, n, a) : r.push(n)
                    } else
                        r[o] = n
                }
                )),
                r) : Object.keys(i).reduce((function(n, r) {
                    var o = i[r];
                    return t.call(n, r) ? n[r] = e(n[r], o, a) : n[r] = o,
                    n
                }
                ), s)
            }
        }
    },
    65091: function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        n.d(t, {
            OO: function() {
                return l
            },
            zv: function() {
                return p
            },
            JP: function() {
                return f
            },
            nI: function() {
                return d
            }
        });
        n(72344);
        var o = n(67294)
          , i = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g
          , a = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "\xa9",
            "&#169;": "\xa9",
            "&reg;": "\xae",
            "&#174;": "\xae",
            "&hellip;": "\u2026",
            "&#8230;": "\u2026"
        }
          , s = function(e) {
            return a[e]
        };
        var u, c = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: function(e) {
                return e.replace(i, s)
            }
        }, l = (0,
        o.createContext)();
        function f() {
            return c
        }
        var p = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.usedNamespaces = {}
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "addUsedNamespaces",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                    }
                    ))
                }
            }, {
                key: "getUsedNamespaces",
                value: function() {
                    return Object.keys(this.usedNamespaces)
                }
            }]) && r(t.prototype, n),
            o && r(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        function d() {
            return u
        }
    },
    26524: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (u) {
                        s = !0,
                        o = u
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" === typeof e)
                        return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        n.d(t, {
            $: function() {
                return y
            }
        });
        var i = n(72344)
          , a = n(67294)
          , s = n(65091);
        function u() {
            if (console && console.warn) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                (e = console).warn.apply(e, n)
            }
        }
        var c = {};
        function l() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" === typeof t[0] && c[t[0]] || ("string" === typeof t[0] && (c[t[0]] = new Date),
            u.apply(void 0, t))
        }
        function f(e, t, n) {
            e.loadNamespaces(t, (function() {
                if (e.isInitialized)
                    n();
                else {
                    e.on("initialized", (function t() {
                        setTimeout((function() {
                            e.off("initialized", t)
                        }
                        ), 0),
                        n()
                    }
                    ))
                }
            }
            ))
        }
        function p(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = t.languages[0]
              , o = !!t.options && t.options.fallbackLng
              , i = t.languages[t.languages.length - 1];
            if ("cimode" === r.toLowerCase())
                return !0;
            var a = function(e, n) {
                var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                return -1 === r || 2 === r
            };
            return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || (!(t.services.backendConnector.backend && (!t.options.resources || t.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e))))
        }
        function d(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!t.languages || !t.languages.length)
                return l("i18n.languages were undefined or empty", t.languages),
                !0;
            var r = void 0 !== t.options.ignoreJSONStructure;
            return r ? t.hasLoadedNamespace(e, {
                precheck: function(t, r) {
                    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
                        return !1
                }
            }) : p(e, t, n)
        }
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var v = function(e, t) {
            var n = (0,
            a.useRef)();
            return (0,
            a.useEffect)((function() {
                n.current = t ? n.current : e
            }
            ), [e, t]),
            n.current
        };
        function y(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.i18n
              , r = (0,
            a.useContext)(s.OO) || {}
              , i = r.i18n
              , u = r.defaultNS
              , c = n || i || (0,
            s.nI)();
            if (c && !c.reportNamespaces && (c.reportNamespaces = new s.zv),
            !c) {
                l("You will need to pass in an i18next instance by using initReactI18next");
                var p = function(e) {
                    return Array.isArray(e) ? e[e.length - 1] : e
                }
                  , h = [p, {}, !1];
                return h.t = p,
                h.i18n = {},
                h.ready = !1,
                h
            }
            c.options.react && void 0 !== c.options.react.wait && l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            var y = g(g(g({}, (0,
            s.JP)()), c.options.react), t)
              , m = y.useSuspense
              , b = y.keyPrefix
              , O = e || u || c.options && c.options.defaultNS;
            O = "string" === typeof O ? [O] : O || ["translation"],
            c.reportNamespaces.addUsedNamespaces && c.reportNamespaces.addUsedNamespaces(O);
            var w = (c.isInitialized || c.initializedStoreOnce) && O.every((function(e) {
                return d(e, c, y)
            }
            ));
            function x() {
                return c.getFixedT(null, "fallback" === y.nsMode ? O : O[0], b)
            }
            var k = (0,
            a.useState)(x)
              , j = o(k, 2)
              , S = j[0]
              , P = j[1]
              , C = O.join()
              , E = v(C)
              , N = (0,
            a.useRef)(!0);
            (0,
            a.useEffect)((function() {
                var e = y.bindI18n
                  , t = y.bindI18nStore;
                function n() {
                    N.current && P(x)
                }
                return N.current = !0,
                w || m || f(c, O, (function() {
                    N.current && P(x)
                }
                )),
                w && E && E !== C && N.current && P(x),
                e && c && c.on(e, n),
                t && c && c.store.on(t, n),
                function() {
                    N.current = !1,
                    e && c && e.split(" ").forEach((function(e) {
                        return c.off(e, n)
                    }
                    )),
                    t && c && t.split(" ").forEach((function(e) {
                        return c.store.off(e, n)
                    }
                    ))
                }
            }
            ), [c, C]);
            var L = (0,
            a.useRef)(!0);
            (0,
            a.useEffect)((function() {
                N.current && !L.current && P(x),
                L.current = !1
            }
            ), [c, b]);
            var R = [S, c, w];
            if (R.t = S,
            R.i18n = c,
            R.ready = w,
            w)
                return R;
            if (!w && !m)
                return R;
            throw new Promise((function(e) {
                f(c, O, (function() {
                    e()
                }
                ))
            }
            ))
        }
    },
    69921: function(e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for
          , r = n ? Symbol.for("react.element") : 60103
          , o = n ? Symbol.for("react.portal") : 60106
          , i = n ? Symbol.for("react.fragment") : 60107
          , a = n ? Symbol.for("react.strict_mode") : 60108
          , s = n ? Symbol.for("react.profiler") : 60114
          , u = n ? Symbol.for("react.provider") : 60109
          , c = n ? Symbol.for("react.context") : 60110
          , l = n ? Symbol.for("react.async_mode") : 60111
          , f = n ? Symbol.for("react.concurrent_mode") : 60111
          , p = n ? Symbol.for("react.forward_ref") : 60112
          , d = n ? Symbol.for("react.suspense") : 60113
          , h = n ? Symbol.for("react.suspense_list") : 60120
          , g = n ? Symbol.for("react.memo") : 60115
          , v = n ? Symbol.for("react.lazy") : 60116
          , y = n ? Symbol.for("react.block") : 60121
          , m = n ? Symbol.for("react.fundamental") : 60117
          , b = n ? Symbol.for("react.responder") : 60118
          , O = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case r:
                    switch (e = e.type) {
                    case l:
                    case f:
                    case i:
                    case s:
                    case a:
                    case d:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case c:
                        case p:
                        case v:
                        case g:
                        case u:
                            return e;
                        default:
                            return t
                        }
                    }
                case o:
                    return t
                }
            }
        }
        function x(e) {
            return w(e) === f
        }
        t.AsyncMode = l,
        t.ConcurrentMode = f,
        t.ContextConsumer = c,
        t.ContextProvider = u,
        t.Element = r,
        t.ForwardRef = p,
        t.Fragment = i,
        t.Lazy = v,
        t.Memo = g,
        t.Portal = o,
        t.Profiler = s,
        t.StrictMode = a,
        t.Suspense = d,
        t.isAsyncMode = function(e) {
            return x(e) || w(e) === l
        }
        ,
        t.isConcurrentMode = x,
        t.isContextConsumer = function(e) {
            return w(e) === c
        }
        ,
        t.isContextProvider = function(e) {
            return w(e) === u
        }
        ,
        t.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === r
        }
        ,
        t.isForwardRef = function(e) {
            return w(e) === p
        }
        ,
        t.isFragment = function(e) {
            return w(e) === i
        }
        ,
        t.isLazy = function(e) {
            return w(e) === v
        }
        ,
        t.isMemo = function(e) {
            return w(e) === g
        }
        ,
        t.isPortal = function(e) {
            return w(e) === o
        }
        ,
        t.isProfiler = function(e) {
            return w(e) === s
        }
        ,
        t.isStrictMode = function(e) {
            return w(e) === a
        }
        ,
        t.isSuspense = function(e) {
            return w(e) === d
        }
        ,
        t.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === i || e === f || e === s || e === a || e === d || e === h || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === g || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === m || e.$$typeof === b || e.$$typeof === O || e.$$typeof === y)
        }
        ,
        t.typeOf = w
    },
    59864: function(e, t, n) {
        "use strict";
        e.exports = n(69921)
    },
    52587: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    50029: function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , u = s.value
            } catch (c) {
                return void n(c)
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(o, i) {
                    var a = e.apply(t, n);
                    function s(e) {
                        r(a, o, i, s, u, "next", e)
                    }
                    function u(e) {
                        r(a, o, i, s, u, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    59499: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    16835: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2937);
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (u) {
                        s = !0,
                        o = u
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || (0,
            r.Z)(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    2937: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(52587);
        function o(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return (0,
                    r.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                r.Z)(e, t) : void 0
            }
        }
    },
    72344: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [9774, 179], (function() {
        return t(81780),
        t(69898)
    }
    ));
    var n = e.O();
    _N_E = n
}
]);