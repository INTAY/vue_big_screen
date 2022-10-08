var bmapcfg = {
    'imgext': '.png', //瓦片图的后缀  根据需要修改，一般是 .png .jpg
    'tiles_dir': '', //普通瓦片图的地址，为空默认在tiles/ 目录
    "home": '',
  };
  var scripts = document.getElementsByTagName("script");
  var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src"); //获得当前js文件路径
  bmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/") + 1); //地图API主目录

function bmapLog(s) {
    if (typeof console != 'undefined')
}

window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20200324"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20200324"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20200324"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20200324"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20200324"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20200324"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20200324"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20200324"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20200324"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20200324"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20200324"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "1s8KIi0aZwZXmDfGzWGIrm11WU5G029u";
(function () {
    function aa(a) {
        throw a;
    }
    var l = void 0,
        p = !0,
        q = null,
        t = !1;

    function u() {
        return function () {}
    }

    function ba(a) {
        return function (b) {
            this[a] = b
        }
    }

    function x(a) {
        return function () {
            return this[a]
        }
    }

    function da(a) {
        return function () {
            return a
        }
    }
    var fa, ga = [];

    function ha(a) {
        return function () {
            return ga[a].apply(this, arguments)
        }
    }

    function ia(a, b) {
        return ga[a] = b
    }
    var ja, z = ja = z || {
        version: "1.3.4"
    };
    z.ea = "$BAIDU$";
    window[z.ea] = window[z.ea] || {};
    z.object = z.object || {};
    z.extend = z.object.extend = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    z.U = z.U || {};
    z.U.da = function (a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : q
    };
    z.da = z.Ec = z.U.da;
    z.U.$ = function (a) {
        a = z.U.da(a);
        if (a === q) return a;
        a.style.display = "none";
        return a
    };
    z.$ = z.U.$;
    z.lang = z.lang || {};
    z.lang.tg = function (a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    z.tg = z.lang.tg;
    z.lang.rm = function (a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a) return t;
            return p
        }
        return t
    };
    z.rm = z.lang.rm;
    z.U.Ij = function (a) {
        return z.lang.tg(a) ? document.getElementById(a) : a
    };
    z.Ij = z.U.Ij;
    z.U.getElementsByClassName = function (a, b) {
        var c;
        if (a.getElementsByClassName) c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == q && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"),
                f = e.length,
                g = RegExp("(^|\\s)" + b + "(\\s|$)"),
                i, k;
            for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
        }
        return c
    };
    z.getElementsByClassName = z.U.getElementsByClassName;
    z.U.contains = function (a, b) {
        var c = z.U.Ij,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    z.fa = z.fa || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (z.fa.na = z.na = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > z.fa.na ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
    z.U.gG = ka;
    z.U.HE = function (a, b, c) {
        a = z.U.da(a);
        if (a === q) return a;
        if ("style" == b) a.style.cssText = c;
        else {
            b = z.U.gG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    z.HE = z.U.HE;
    z.U.IE = function (a, b) {
        a = z.U.da(a);
        if (a === q) return a;
        for (var c in b) z.U.HE(a, c, b[c]);
        return a
    };
    z.IE = z.U.IE;
    z.Nk = z.Nk || {};
    (function () {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        z.Nk.trim = function (b) {
            return ("" + b).replace(a, "")
        }
    })();
    z.trim = z.Nk.trim;
    z.Nk.Do = function (a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function (a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    };
    z.Do = z.Nk.Do;
    z.U.tc = function (a, b) {
        a = z.U.da(a);
        if (a === q) return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    };
    z.tc = z.U.tc;
    z.U.kx = function (a, b, c) {
        a = z.U.da(a);
        if (a === q) return a;
        var e;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    };
    z.kx = z.U.kx;
    z.U.show = function (a) {
        a = z.U.da(a);
        if (a === q) return a;
        a.style.display = "";
        return a
    };
    z.show = z.U.show;
    z.U.cD = function (a) {
        a = z.U.da(a);
        return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    z.U.fb = function (a, b) {
        a = z.U.da(a);
        if (a === q) return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    };
    z.fb = z.U.fb;
    z.U.cB = z.U.cB || {};
    z.U.Fl = z.U.Fl || [];
    z.U.Fl.filter = function (a, b, c) {
        for (var e = 0, f = z.U.Fl, g; g = f[e]; e++)
            if (g = g[c]) b = g(a, b);
        return b
    };
    z.Nk.$N = function (a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
            return a.charAt(1).toUpperCase()
        })
    };
    z.U.Z_ = function (a) {
        z.U.Cs(a, "expand") ? z.U.tc(a, "expand") : z.U.fb(a, "expand")
    };
    z.U.Cs = function (a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        z.forEach(this, function (a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                } c !== t && (c = p)
        });
        return c
    };
    z.U.sg = function (a, b) {
        var c = z.U,
            a = c.da(a);
        if (a === q) return a;
        var b = z.Nk.$N(b),
            e = a.style[b];
        if (!e) var f = c.cB[b],
            e = a.currentStyle || (z.fa.na ? a.style : getComputedStyle(a, q)),
            e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.Fl) e = f.filter(b, e, "get");
        return e
    };
    z.sg = z.U.sg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.opera = +RegExp.$1);
    z.fa.NL = /webkit/i.test(navigator.userAgent);
    z.fa.qY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    z.fa.RD = "CSS1Compat" == document.compatMode;
    z.U.ka = function (a) {
        a = z.U.da(a);
        if (a === q) return a;
        var b = z.U.cD(a),
            c = z.fa,
            e = z.U.sg;
        c.qY > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
                left: 0,
                top: 0
            },
            g;
        if (a == (c.na && !c.RD ? b.body : b.documentElement)) return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.na && !c.RD) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.NL > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);
            if (c.opera > 0 || c.NL > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body;) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.Se = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (z.fa.c2 = p);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (z.fa.Ux = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.gw = +RegExp.$1);
    z.mc = z.mc || {};
    z.mc.Ob = function (a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t) break
            }
        return a
    };
    z.Ob = z.mc.Ob;
    z.lang.ea = function () {
        return "TANGRAM__" + (window[z.ea]._counter++).toString(36)
    };
    window[z.ea]._counter = window[z.ea]._counter || 1;
    window[z.ea]._instances = window[z.ea]._instances || {};
    z.lang.Ms = function (a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    z.lang.Ga = function (a) {
        this.ea = a || z.lang.ea();
        window[z.ea]._instances[this.ea] = this
    };
    window[z.ea]._instances = window[z.ea]._instances || {};
    z.lang.Ga.prototype.Th = ha(0);
    z.lang.Ga.prototype.toString = function () {
        return "[object " + (this.aQ || "Object") + "]"
    };
    z.lang.fu = function (a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || q;
        this.currentTarget = q
    };
    z.lang.Ga.prototype.addEventListener = function (a, b, c) {
        if (z.lang.Ms(b)) {
            !b.Yk && (b.Yk = {});
            !this.yi && (this.yi = {});
            var e = this.yi,
                f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                f = b.ax = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.Yk[a] != "object" && (b.Yk[a] = {});
            f = f || z.lang.ea();
            b.Yk[a].ax = f;
            e[a][f] = b
        }
    };
    z.lang.Ga.prototype.removeEventListener = function (a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (z.lang.Ms(b)) {
            if (!b.Yk || !b.Yk[a]) return;
            b = b.Yk[a].ax
        } else if (!z.lang.tg(b)) return;
        !this.yi && (this.yi = {});
        var c = this.yi;
        c[a] && c[a][b] && delete c[a][b]
    };
    z.lang.Ga.prototype.dispatchEvent = function (a, b) {
        z.lang.tg(a) && (a = new z.lang.fu(a));
        !this.yi && (this.yi = {});
        var b = b || {},
            c;
        for (c in b) a[c] = b[c];
        var e = this.yi,
            f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        z.lang.Ms(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f]) e[f][c].apply(this, arguments);
        return a.returnValue
    };
    z.lang.wa = function (a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g) f[e] = g[e];
        a.prototype.constructor = a;
        a.M_ = b.prototype;
        if ("string" == typeof c) f.aQ = c
    };
    z.wa = z.lang.wa;
    z.lang.Oc = function (a) {
        return window[z.ea]._instances[a] || q
    };
    z.platform = z.platform || {};
    z.platform.GL = /macintosh/i.test(navigator.userAgent);
    z.platform.f4 = /MicroMessenger/i.test(navigator.userAgent);
    z.platform.OL = /windows/i.test(navigator.userAgent);
    z.platform.AY = /x11/i.test(navigator.userAgent);
    z.platform.lj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.xB = z.xB = RegExp.$1);
    z.platform.sY = /ipad/i.test(navigator.userAgent);
    z.platform.ND = /iphone/i.test(navigator.userAgent);

    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    z.lang.yw = function (a) {
        var b = window[z.ea];
        b.fS && delete b.fS[a]
    };
    z.event = {};
    z.V = z.event.V = function (a, b, c) {
        if (!(a = z.da(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    z.dd = z.event.dd = function (a, b, c) {
        if (!(a = z.da(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    z.U.Cs = function (a, b) {
        if (!a || !a.className || typeof a.className != "string") return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    };
    z.rK = function () {
        function a(a) {
            document.addEventListener && (this.element = a, this.uK = this.wk ? "touchstart" : "mousedown", this.KC = this.wk ? "touchmove" : "mousemove", this.JC = this.wk ? "touchend" : "mouseup", this.ih = t, this.Lt = this.Kt = 0, this.element.addEventListener(this.uK, this, t), ja.V(this.element, "mousedown", u()), this.handleEvent(q))
        }
        a.prototype = {
            wk: "ontouchstart" in window || "createTouch" in document,
            start: function (a) {
                na(a);
                this.ih = t;
                this.Kt = this.wk ? a.touches[0].clientX : a.clientX;
                this.Lt = this.wk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.KC, this, t);
                this.element.addEventListener(this.JC, this, t)
            },
            move: function (a) {
                oa(a);
                var c = this.wk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.wk ? a.touches[0].clientX : a.clientX) - this.Kt) || 10 < Math.abs(c - this.Lt)) this.ih = p
            },
            end: function (a) {
                oa(a);
                this.ih || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.KC, this, t);
                this.element.removeEventListener(this.JC, this, t)
            },
            handleEvent: function (a) {
                if (a) switch (a.type) {
                    case this.uK:
                        this.start(a);
                        break;
                    case this.KC:
                        this.move(a);
                        break;
                    case this.JC:
                        this.end(a)
                }
            }
        };
        return function (b) {
            return new a(b)
        }
    }();
    var D = window.BMap || {};
    D.version = "3.0";
    D.T1 = 0.34 > Math.random();
    0 <= D.version.indexOf("#") && (D.version = "3.0");
    D.$q = [];
    D.Ye = function (a) {
        this.$q.push(a)
    };
    D.Qq = [];
    D.Ck = function (a) {
        this.Qq.push(a)
    };
    D.rU = D.apiLoad || u();
    D.y0 = D.verify || function () {
        D.version && D.version >= 1.5 && pa(D.od + "?qt=verify&ak=" + qa, function (a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.Ra().innerHTML = "";
                    map.yi = {}
                }
                D = q;
                var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                switch (a.error) {
                    case 101:
                        b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                        break;
                    case 102:
                        b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                }
                alert(b)
            }
        })
    };
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = q;
    var sa = window.BMap_loadScriptTime,
        ta = (new Date).getTime(),
        ua = q,
        wa = p,
        xa = 5042,
        ya = 5002,
        Aa = 5003,
        Ba = "load_mapclick",
        Ca = 5038,
        Da = 5041,
        Fa = 5047,
        Ga = 5036,
        Ha = 5039,
        Ia = 5037,
        Ja = 5040,
        Ka = 5011,
        Ma = 7E3;
    var Na = 0;

    function Oa(a, b) {
        if (a = z.da(a)) {
            var c = this;
            z.lang.Ga.call(c);
            b = b || {};
            c.R = {
                KB: 200,
                Xb: p,
                Dw: t,
                zC: p,
                zo: p,
                Ao: b.enableWheelZoom || t,
                pK: p,
                CC: p,
                ds: p,
                cs: p,
                GC: p,
                xo: b.enable3DBuilding || t,
                Ic: 25,
                L0: 240,
                eU: 450,
                yc: H.yc,
                Hd: H.Hd,
                Ns: !!b.Ns,
                jc: Math.round(b.minZoom) || 1,
                pc: Math.round(b.maxZoom) || 19,
                yb: b.mapType || Pa,
                f5: t,
                mK: b.drawer || Na,
                Cw: p,
                Bw: 500,
                kW: b.enableHighResolution !== t,
                BC: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                rF: 99,
                ye: b.mapStyle || q,
                HY: b.logoControl === t ? t : p,
                yU: [],
                f2: b.beforeClickIcon || q,
                pg: t,
                jk: t,
                so: t,
                kE: p,
                vC: b.enableBizAuthLogo === t ? t : p
            };
            c.R.ye && (this.dY(c.R.ye.controls), this.BL(c.R.ye.geotableId));
            c.R.ye && c.R.ye.styleId && c.C3(c.R.ye.styleId);
            c.R.NB = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.R.cs = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.R.GC = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.R.pK = b.enableDeepZoom);
            var e = c.R.yU;
            if (I())
                for (var f = 0, g = e.length; f < g; f++)
                    if (z.fa[e[f]]) {
                        c.R.devicePixelRatio = 1;
                        break
                    } e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.R.rF = 99;
            c.Ya = a;
            c.WA(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.za());
            b.size && this.Ce(b.size);
            e = c.Eb();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.ze = c.platform.firstChild;
            c.ze.style.width = c.width + "px";
            c.ze.style.height = c.height + "px";
            c.Yd = {};
            c.qe = new J(0, 0);
            c.ac = new J(0, 0);
            c.Va = 3;
            c.Bc = 0;
            c.YB = q;
            c.XB = q;
            c.Sb = "";
            c.hw = "";
            c.Bh = {};
            c.Bh.custom = {};
            c.Ai = {};
            c.Wa = 0;
            b.useWebGL === t && Qa(t);
            c.W = new Ra(a, {
                lf: "api",
                kS: p
            });
            c.W.$();
            c.W.NE(c);
            b = b || {};
            e = c.yb = c.R.yb;
            c.Kc = e.tk();
            e === Sa && Ta(ya);
            e === Va && Ta(Aa);
            e = c.R;
            e.sO = Math.round(b.minZoom);
            e.rO = Math.round(b.maxZoom);
            c.yu();
            c.aa = {
                Jc: t,
                nc: 0,
                Ss: 0,
                UL: 0,
                j4: 0,
                CB: t,
                wE: -1,
                se: []
            };
            c.platform.style.cursor = c.R.yc;
            for (f = 0; f < D.$q.length; f++) D.$q[f](c);
            c.aa.wE = f;
            c.ga();
            K.load("map", function () {
                c.lb()
            });
            c.R.BC && (setTimeout(function () {
                Ta(Ba)
            }, 1E3), K.load("mapclick", function () {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.ea] = new Wa(c)
            }, p));
            Xa() && K.load("oppc", function () {
                c.nu()
            });
            I() && K.load("opmb", function () {
                c.nu()
            });
            a = q;
            c.jB = []
        }
    }
    z.lang.wa(Oa, z.lang.Ga, "Map");
    z.extend(Oa.prototype, {
        za: function () {
            var a = O("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = O("div", {
                    "class": "BMap_mask"
                }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        WA: function (a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Ya(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ga: function () {
            var a = this;
            a.Yn = function () {
                var b = a.Eb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new P(a.width, a.height),
                        e = new Q("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.$j((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.ze.style.width = (a.width = b.width) + "px";
                    a.ze.style.height = (a.height = b.height) + "px";
                    c = new Q("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.R.cs && (a.aa.Pl = setInterval(a.Yn, 80))
        },
        $j: function (a, b, c, e) {
            var f = this.va().$b(this.ja()),
                g = this.Kc,
                i = p;
            c && J.FL(c) && (this.qe = new J(c.lng, c.lat), i = t);
            if (c = c && e ? g.ei(c, this.Sb) : this.ac)
                if (this.ac = new J(c.lng + a * f, c.lat - b * f), (a = g.hh(this.ac, this.Sb)) && i) this.qe = a
        },
        Dg: function (a, b) {
            if (Za(a) && (this.yu(), this.dispatchEvent(new Q("onzoomstart")), a = this.An(a).zoom, a !== this.Va)) {
                this.Bc = this.Va;
                this.Va = a;
                var c;
                b ? c = b : this.dh() && (c = this.dh().ka());
                c && (c = this.Tb(c, this.Bc), this.$j(this.width / 2 - c.x, this.height / 2 - c.y, this.Ib(c, this.Bc), p));
                this.dispatchEvent(new Q("onzoomstartcode"))
            }
        },
        Rc: function (a) {
            this.Dg(a)
        },
        yF: function (a) {
            this.Dg(this.Va + 1, a)
        },
        zF: function (a) {
            this.Dg(this.Va - 1, a)
        },
        mi: function (a) {
            a instanceof J && (this.ac = this.Kc.ei(a, this.Sb), this.qe = J.FL(a) ? new J(a.lng, a.lat) : this.Kc.hh(this.ac, this.Sb))
        },
        yg: function (a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.$j(-a, -b)
        },
        yr: function (a) {
            a && $a(a.He) && (a.He(this), this.dispatchEvent(new Q("onaddcontrol", a)))
        },
        fN: function (a) {
            a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremovecontrol", a)))
        },
        bo: function (a) {
            a && $a(a.xa) && (a.xa(this), this.dispatchEvent(new Q("onaddcontextmenu", a)))
        },
        fp: function (a) {
            a && $a(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu", a)), a.remove())
        },
        Pa: function (a) {
            a && $a(a.He) && (a.He(this), this.dispatchEvent(new Q("onaddoverlay", a)))
        },
        Ub: function (a) {
            a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremoveoverlay", a)))
        },
        IJ: function () {
            this.dispatchEvent(new Q("onclearoverlays"))
        },
        Oe: function (a) {
            a && this.dispatchEvent(new Q("onaddtilelayer", a))
        },
        Wf: function (a) {
            a && this.dispatchEvent(new Q("onremovetilelayer", a))
        },
        Bg: function (a) {
            if (this.yb !== a) {
                this.R.KY && this.j_(a);
                var b = new Q("onsetmaptype");
                b.W4 = this.yb;
                this.yb = this.R.yb = a;
                this.Kc = this.yb.tk();
                this.$j(0, 0, this.Db(), p);
                this.yu();
                var c = this.An(this.ja()).zoom;
                this.Dg(c);
                this.dispatchEvent(b);
                b = new Q("onmaptypechange");
                b.Va = c;
                b.yb = a;
                this.dispatchEvent(b);
                (a === ab || a === Va) && Ta(Aa)
            }
        },
        j_: function (a) {
            a === ab || a === Va ? (this.Yx(p), this.xN(t), this.R.pg = t, this.R.jk = t) : (this.Yx(t), this.xN(p), this.R.pg = p, this.R.jk = p)
        },
        rf: function (a) {
            var b = this;
            if (a instanceof J) b.mi(a, {
                noAnimation: p
            });
            else if (bb(a))
                if (b.yb === Sa) {
                    var c = H.GB[a];
                    c && (pt = c.o, b.rf(pt))
                } else {
                    var e = this.jH();
                    e.At(function (c) {
                        0 === e.im() && 2 === e.Ma.result.type && (b.rf(c.sk(0).point), Sa.nk(a) && b.KE(a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        Fd: function (a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            D.Vp("cus.fire", "time", {
                z_loadscripttime: ta - sa
            });
            var c = this;
            if (bb(a))
                if (c.yb === Sa) {
                    var e = H.GB[a];
                    e && (pt = e.o, c.Fd(pt, b))
                } else {
                    var f = c.jH();
                    f.At(function (e) {
                        if (0 === f.im() && (2 === f.Ma.result.type || 11 === f.Ma.result.type)) {
                            var e = e.sk(0).point,
                                g = b || db.Hw(f.Ma.content.level, c);
                            c.Fd(e, g);
                            Sa.nk(a) && c.KE(a)
                        }
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if (a instanceof J && b) {
                b = c.An(b).zoom;
                c.Bc = c.Va || b;
                c.Va = b;
                e = c.qe;
                c.qe = new J(a.lng, a.lat);
                c.ac = c.Kc.ei(c.qe, c.Sb);
                c.YB = c.YB || c.Va;
                c.XB = c.XB || c.qe;
                var g = new Q("onload"),
                    i = new Q("onloadcode");
                g.point = new J(a.lng, a.lat);
                g.pixel = c.Tb(c.qe, c.Va);
                g.zoom = b;
                c.loaded || (c.loaded = p, c.dispatchEvent(g), ua || (ua = eb()));
                c.dispatchEvent(i);
                g = new Q("onmoveend");
                g.qz = "centerAndZoom";
                e.Yb(c.qe) || c.dispatchEvent(g);
                c.dispatchEvent(new Q("onmoveend"));
                c.Bc !== c.Va && (e = new Q("onzoomend"), e.qz = "centerAndZoom", c.dispatchEvent(e));
                c.R.xo && c.xo()
            }
        },
        jH: function () {
            this.aa.fM || (this.aa.fM = new fb(1));
            return this.aa.fM
        },
        reset: function () {
            this.Fd(this.XB, this.YB, p)
        },
        enableDragging: function () {
            this.R.Xb = p
        },
        disableDragging: function () {
            this.R.Xb = t
        },
        enableInertialDragging: function () {
            this.R.Cw = p
        },
        disableInertialDragging: function () {
            this.R.Cw = t
        },
        enableScrollWheelZoom: function () {
            this.R.Ao = p
        },
        disableScrollWheelZoom: function () {
            this.R.Ao = t
        },
        enableContinuousZoom: function () {
            this.R.zo = p
        },
        disableContinuousZoom: function () {
            this.R.zo = t
        },
        enableDoubleClickZoom: function () {
            this.R.zC = p
        },
        disableDoubleClickZoom: function () {
            this.R.zC = t
        },
        enableKeyboard: function () {
            this.R.Dw = p
        },
        disableKeyboard: function () {
            this.R.Dw = t
        },
        enablePinchToZoom: function () {
            this.R.ds = p
        },
        disablePinchToZoom: function () {
            this.R.ds = t
        },
        enableAutoResize: function () {
            this.R.cs = p;
            this.Yn();
            this.aa.Pl || (this.aa.Pl = setInterval(this.Yn, 80))
        },
        disableAutoResize: function () {
            this.R.cs = t;
            this.aa.Pl && (clearInterval(this.aa.Pl), this.aa.Pl = q)
        },
        enableBizAuthLogo: function () {
            this.R.vC = p;
            this.ko && this.ko.show()
        },
        disableBizAuthLogo: function () {
            this.R.vC = t;
            this.ko && this.ko.$()
        },
        xo: function () {
            this.R.xo = p;
            this.jn || (this.jn = new BuildingLayer({
                M2: p
            }), this.Oe(this.jn))
        },
        LV: function () {
            this.R.xo = t;
            this.jn && (this.Wf(this.jn), this.jn = q, delete this.jn)
        },
        Eb: function () {
            return this.Qr && this.Qr instanceof P ? new P(this.Qr.width, this.Qr.height) : new P(this.Ya.clientWidth, this.Ya.clientHeight)
        },
        Ce: function (a) {
            a && a instanceof P ? (this.Qr = a, this.Ya.style.width = a.width + "px", this.Ya.style.height = a.height + "px") : this.Qr = q
        },
        Db: x("qe"),
        ja: x("Va"),
        ZU: function () {
            this.Yn()
        },
        An: function (a) {
            var b = this.R.jc,
                c = this.R.pc,
                e = t,
                a = Math.round(a);
            a < b && (e = p, a = b);
            a > c && (e = p, a = c);
            return {
                zoom: a,
                LC: e
            }
        },
        Ra: x("Ya"),
        Tb: function (a, b) {
            b = b || this.ja();
            return this.Kc.Tb(a, b, this.ac, this.Eb(), this.Sb)
        },
        Ib: function (a, b) {
            b = b || this.ja();
            return this.Kc.Ib(a, b, this.ac, this.Eb(), this.Sb)
        },
        Xe: function (a, b) {
            if (a) {
                var c = this.Tb(new J(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        NY: function (a, b) {
            b = b || this.ja();
            return this.Kc.OY(a, b, this.ac, this.Eb(), this.Sb)
        },
        MY: function (a, b) {
            if (a) {
                var c = this.NY(new J(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        PM: function (a, b) {
            if (a) {
                var c = new R(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Ib(c, b)
            }
        },
        pointToPixelFor3D: function (a, b) {
            var c = map.Sb;
            this.yb === Sa && c && gb.OJ(a, this, b)
        },
        N4: function (a, b) {
            var c = map.Sb;
            this.yb === Sa && c && gb.NJ(a, this, b)
        },
        O4: function (a, b) {
            var c = this,
                e = map.Sb;
            c.yb === Sa && e && gb.OJ(a, c, function (a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        L4: function (a, b) {
            var c = map.Sb;
            this.yb === Sa && c && (a.x += this.offsetX, a.y += this.offsetY, gb.NJ(a, this, b))
        },
        ue: function (a) {
            if (!this.nx()) return new hb;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || q,
                b = this.Ib({
                    x: a[3],
                    y: this.height - a[2]
                }, c),
                a = this.Ib({
                    x: this.width - a[1],
                    y: a[0]
                }, c);
            return new hb(b, a)
        },
        nx: function () {
            return !!this.loaded
        },
        nR: function (a, b) {
            for (var c = this.va(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.dj(), k = c = c.Zh(); k >= i; k--) {
                var m = this.va().$b(k);
                if (a.iF().lng / m < this.width - g && a.iF().lat / m < this.height - e) break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        Bs: function (a, b) {
            var c = {
                center: this.Db(),
                zoom: this.ja()
            };
            if (!a || !a instanceof hb && 0 === a.length || a instanceof hb && a.nj()) return c;
            var e = [];
            a instanceof hb ? (e.push(a.Of()), e.push(a.Ue())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) f.push(this.Kc.ei(e[g], this.Sb));
            e = new hb;
            for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
            if (e.nj()) return c;
            c = e.Db();
            f = this.nR(e, b);
            b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.va().$b(f), b.offset && (g = b.offset.width, e = b.offset.height), c.lng += i * g, c.lat += i * e);
            c = this.Kc.hh(c, this.Sb);
            return {
                center: c,
                zoom: f
            }
        },
        oh: function (a, b) {
            var c;
            c = a && a.center ? a : this.Bs(a, b);
            var b = b || {},
                e = b.delay || 200;
            if (c.zoom === this.Va && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function () {
                    f.mi(c.center, {
                        duration: 210
                    })
                }, e)
            } else this.Fd(c.center, c.zoom)
        },
        Pf: x("Yd"),
        dh: function () {
            return this.aa.sb && this.aa.sb.Za() ? this.aa.sb : q
        },
        getDistance: function (a, b) {
            if (a && b) {
                if (a.Yb(b)) return 0;
                var c = 0,
                    c = S.pk(a, b);
                if (c === q || c === l) c = 0;
                return c
            }
        },
        Tw: function () {
            var a = [],
                b = this.Ba,
                c = this.Ee;
            if (b)
                for (var e in b) b[e] instanceof ib && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++) a.push(c[e])
            }
            return a
        },
        va: x("yb"),
        EX: x("Dd"),
        nu: function () {
            for (var a = this.aa.wE; a < D.$q.length; a++) D.$q[a](this);
            this.aa.wE = a
        },
        KE: function (a) {
            this.Sb = Sa.nk(a);
            this.hw = Sa.JK(this.Sb);
            this.yb === Sa && this.Kc instanceof jb && (this.Kc.Wi = this.Sb)
        },
        setDefaultCursor: function (a) {
            this.R.yc = a;
            this.platform && (this.platform.style.cursor = this.R.yc)
        },
        getDefaultCursor: function () {
            return this.R.yc
        },
        setDraggingCursor: function (a) {
            this.R.Hd = a
        },
        getDraggingCursor: function () {
            return this.R.Hd
        },
        gx: function () {
            return this.R.kW && 1.5 <= this.R.devicePixelRatio
        },
        pB: function (a, b) {
            b ? this.Bh[b] || (this.Bh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof kb && (this.Bh[b][a.ea] = a, a.xa(this));
            var c = this;
            K.load("hotspot", function () {
                c.nu()
            }, p)
        },
        GZ: function (a, b) {
            b || (b = "custom");
            this.Bh[b][a.ea] && delete this.Bh[b][a.ea]
        },
        kw: function (a) {
            a || (a = "custom");
            this.Bh[a] = {}
        },
        yu: function () {
            var a = this.yb.dj(),
                b = this.yb.Zh(),
                c = this.R;
            c.jc = c.sO || a;
            c.pc = c.rO || b;
            c.jc < a && (c.jc = a);
            c.pc > b && (c.pc = b)
        },
        setMinZoom: function (a) {
            a = Math.round(a);
            a > this.R.pc && (a = this.R.pc);
            this.R.sO = a;
            this.RI()
        },
        setMaxZoom: function (a) {
            a = Math.round(a);
            a < this.R.jc && (a = this.R.jc);
            this.R.rO = a;
            this.RI()
        },
        RI: function () {
            this.yu();
            var a = this.R;
            this.Va < a.jc ? this.Rc(a.jc) : this.Va > a.pc && this.Rc(a.pc);
            var b = new Q("onzoomspanchange");
            b.jc = a.jc;
            b.pc = a.pc;
            this.dispatchEvent(b)
        },
        E3: x("jB"),
        getKey: function () {
            return qa
        },
        l_: function (a) {
            function b(a) {
                c.I_ = a;
                var b = D.od + "custom/v2/mapstyle?ak=" + qa + "&callback=cb&",
                    b = b + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.aF(a, e)));
                pa(b)
            }
            var c = this;
            D.Vp("cus.fire", "count", "z_setmapstylev2count");
            this.Yx(t);
            this.R.KY = p;
            this.addEventListener("hidecopyright", function () {
                c.fk.$();
                c.R.so = !!a.customEditor;
                c.R.so === t && c.JE(new P(1, 1))
            });
            c.fk && c.fk.$();
            this.R.so = !!a.customEditor;
            this.R.u5 = !!a.sharing;
            this.R.a5 = !!a.preview;
            this.R.so === t && this.JE(new P(1, 1));
            K.load("hotspot", function () {
                c.nu()
            }, p);
            window.rh = {};
            window.e6 = [];
            window.$t = [];
            window.La = {};
            var e = this.ja(),
                f = {};
            z.extend(f, a);
            window.cb = function (a) {
                if (0 === a.status) {
                    3 === a.data.style.length ? (window.bmap_baseFs || (window.bmap_baseFs = a.data.style), window.Pp = a.data.style[2]) : window.Pp = a.data.style;
                    a = window.bmap_baseFs;
                    if (z.rm(window.rh)) window.R0 = a, c.oF(e);
                    else {
                        c.oO(window.Pp, e);
                        c.oF(e);
                        var a = c.SU(window.rh, e),
                            b;
                        for (b in a) {
                            var g = {};
                            z.extend(g, f);
                            c.nX(b, g)
                        }
                    }
                    c.kY()
                }
            };
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing" : a.preview && (g = "preview");
                this.bX(a.styleId, g, b)
            } else b(a.styleJson);
            window.iconSetInfo_high || pa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        bX: function (a, b, c) {
            var e = this,
                f = (1E5 * Math.random()).toFixed(0);
            window["_cbk_si_phpui" + f] = function (a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.Ix(a.content.data.json));
                c && c(b)
            };
            window["_cbk_si_api" + f] = function (a) {
                var b = [];
                0 === a.status && (b = a.info ? e.Ix(a.info.json) : e.Ix(a.data.json));
                c && c(b)
            };
            var g = "/apiconsole/custommap/";
            switch (b) {
                case "jsapi":
                    g = D.od + "?qt=custom_map&v=3.0";
                    g += "&style_id=" + a + "&type=publish&ak=" + qa;
                    g += "&callback=_cbk_si_phpui" + f;
                    break;
                case "sharing":
                    g = g + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=_cbk_si_api" + f);
                    break;
                case "preview":
                    g = g + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=_cbk_si_api" + f)
            }
            pa(g)
        },
        FV: function () {
            Array.prototype.map || (Array.prototype.map = function (a, b) {
                var c, e, f;
                this == q && aa(new TypeError(" this is null or not defined"));
                var g = Object(this),
                    i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i;) {
                    var k;
                    f in g && (k = g[f], k = a.call(c, k, f, g), e[f] = k);
                    f++
                }
                return e
            })
        },
        Ix: function (a) {
            if (a === q || "" === a) return [];
            this.FV();
            var b = {
                    t: "featureType",
                    e: "elementType",
                    v: "visibility",
                    c: "color",
                    l: "lightness",
                    s: "saturation",
                    w: "weight",
                    z: "level",
                    h: "hue",
                    f: "fontsize",
                    zri: "curZoomRegionId",
                    zr: "curZoomRegion"
                },
                c = {
                    all: "all",
                    g: "geometry",
                    "g.f": "geometry.fill",
                    "g.s": "geometry.stroke",
                    l: "labels",
                    "l.t.f": "labels.text.fill",
                    "l.t.s": "labels.text.stroke",
                    "l.t": "labels.text",
                    "l.i": "labels.icon"
                };
            return a.split(",").map(function (a) {
                var a = a.split("|").map(function (a) {
                        var e = b[a.split(":")[0]],
                            a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                        switch (a) {
                            case "poi":
                                a = "poilabel";
                                break;
                            case "districtlabel":
                                a = "districtlabel"
                        }
                        var f = {};
                        f[e] = a;
                        return f
                    }),
                    f = a[0],
                    g = 1;
                a[1].elementType && (g = 2, z.extend(f, a[1]));
                for (var i = {}; g < a.length; g++) z.extend(i, a[g]);
                return z.extend(f, {
                    stylers: i
                })
            })
        },
        JX: function () {
            return this.Ze.eg
        },
        nX: function (a, b) {
            var c = this,
                e = (1E5 * Math.random()).toFixed(0);
            window["_cbk" + e] = function (b) {
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.oO(b, a);
                c.oF(a);
                b = new Q("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window["_cbk" + e]
            };
            var f = D.od + "custom/v2/mapstyle?ak=" + qa + "&callback=_cbk" + e + "&",
                f = f + "is_all=true&is_new=1&";
            b.styleJson ? f += "styles=" + encodeURIComponent(this.aF(b.styleJson, parseInt(a, 10))) : b.styleId && (f += "styles=" + encodeURIComponent(c.aF(c.I_, parseInt(a, 10))));
            pa(f)
        },
        JE: function (a, b) {
            var c = new Q("oncopyrightoffsetchange", {
                aE: a,
                tV: b
            });
            this.R.SJ = b;
            this.dispatchEvent(c)
        },
        wt: function (a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ea] && window.MPC_Mgr[b.ea].close();
            b.R.BC = t;
            D.Vp("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.J_(a.styleJson));
                I() && z.fa.Ux ? setTimeout(function () {
                    b.R.ye = a;
                    b.dispatchEvent(new Q("onsetcustomstyles", a))
                }, 50) : (this.R.ye = a, this.dispatchEvent(new Q("onsetcustomstyles", a)), this.BL(b.R.ye.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Ta(5050, c);
                a.style && (c = b.R.NB[a.style] ? b.R.NB[a.style].backColor : b.R.NB.normal.backColor) && (this.Ra().style.backgroundColor = c)
            }
        },
        dY: function (a) {
            this.controls || (this.controls = {
                navigationControl: new lb,
                scaleControl: new mb,
                overviewMapControl: new nb,
                mapTypeControl: new ob
            });
            var b = this,
                c;
            for (c in this.controls) b.fN(b.controls[c]);
            a = a || [];
            z.mc.Ob(a, function (a) {
                b.yr(b.controls[a])
            })
        },
        BL: function (a) {
            a ? this.Or && this.Or.zf === a || (this.Wf(this.Or), this.Or = new pb({
                geotableId: a
            }), this.Oe(this.Or)) : this.Wf(this.Or)
        },
        Pd: function () {
            var a = this.ja() >= this.R.rF && this.va() === Pa && 18 >= this.ja(),
                b = t;
            try {
                document.createElement("canvas").getContext("2d"), b = p
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function () {
            return {
                name: this.Xg,
                code: this.Cr
            }
        },
        xs: function () {
            this.W.Fn();
            return this.W
        },
        hY: function (a) {
            Pa.setMaxZoom(a.maxZoom || 19);
            var b = new Q("oninitindoorlayer");
            b.Ve = a;
            this.dispatchEvent(b);
            this.R.pg = t
        },
        kY: function (a) {
            if (this.R.pg) {
                var b = new Q("onupdatestyles");
                this.dispatchEvent(b)
            } else b = new Q("oninitindoorlayer"), b.Ve = a, this.dispatchEvent(b), this.R.pg = p, this.R.jk = p
        },
        Yx: function (a) {
            this.R.kE = a;
            this.Ze.Lb || (this.Ze.Lb = this.Ze.pj[0].Lb);
            this.Ze.Lb.parentElement.style.display = a ? "block" : "none"
        },
        xN: function (a) {
            this.Ze.eg.style.display = a ? "block" : "none"
        },
        setPanorama: function (a) {
            this.W = a;
            this.W.NE(this)
        },
        aF: function (a, b) {
            var c = {
                    featureType: "t",
                    elementType: "e",
                    visibility: "v",
                    color: "c",
                    lightness: "l",
                    saturation: "s",
                    weight: "w",
                    level: "z",
                    hue: "h",
                    fontsize: "f"
                },
                e = {
                    all: "all",
                    geometry: "g",
                    "geometry.fill": "g.f",
                    "geometry.stroke": "g.s",
                    labels: "l",
                    "labels.text.fill": "l.t.f",
                    "labels.text.stroke": "l.t.s",
                    "labels.text": "l.t",
                    "labels.icon": "l.i"
                },
                f = [];
            window.La[b] = {};
            for (var g = 0, i; i = a[g]; g++)
                if (!this.tY(i) && (window.rh = this.NX(i, window.rh), this.uY(i, b))) {
                    if (("land" === i.featureType || "all" === i.featureType || "background" === i.featureType) && "string" === typeof i.elementType && ("geometry" === i.elementType || "geometry.fill" === i.elementType || "all" === i.elementType) && i.stylers)
                        if (i.stylers.color && (window.La[b].bmapLandColor = i.stylers.color, window.La[b].TL = p, window.bmapLandColor = i.stylers.color), i.stylers.visibility && "off" === i.stylers.visibility) window.La[b].bmapLandColor = "#00000000", window.La[b].TL = p, window.bmapLandColor = "#00000000";
                    if ("railway" === i.featureType && "string" === typeof i.elementType && i.stylers) {
                        if (i.stylers.color && ("geometry" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.bmapRailwayStrokeColor = i.stylers.color, window.La[b].bmapRailwayFillColor = i.stylers.color, window.La[b].bmapRailwayStrokeColor = i.stylers.color, window.La[b].bN = p, window.La[b].cN = p), "geometry.fill" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.La[b].bmapRailwayFillColor = i.stylers.color, window.La[b].bN = p), "geometry.stroke" === i.elementType)) window.bmapRailwayStrokeColor = i.stylers.color, window.La[b].bmapRailwayStrokeColor = i.stylers.color, window.La[b].cN = p;
                        i.stylers.visibility && (window.bmapRailwayVisibility = i.stylers.visibility, window.La[b].bmapRailwayVisibility = i.stylers.visibility, window.La[b].DZ = p)
                    }
                    "roadarrow" === i.featureType && ("labels.icon" === i.elementType && i.stylers) && (window.bmapRoadarrowVisibility = i.stylers.visibility, window.La[b].bmapRoadarrowVisibility = i.stylers.visibility, window.La[b].NZ = p);
                    var k = {};
                    z.extend(k, i);
                    i = k.stylers;
                    delete k.stylers;
                    z.extend(k, i);
                    i = [];
                    for (var m in c)
                        if (k[m] && !this.pY(m))
                            if ("elementType" === m) i.push(c[m] + ":" + e[k[m]]);
                            else {
                                switch (k[m]) {
                                    case "poilabel":
                                        k[m] = "poi";
                                        break;
                                    case "districtlabel":
                                        k[m] = "label"
                                }
                                i.push(c[m] + ":" + k[m])
                            } 2 < i.length && f.push(i.join("|"))
                }! window.La[b].TL && window.La[b].bmapLandColor && delete window.La[b].bmapLandColor;
            !window.La[b].bN && window.La[b].bmapRailwayFillColor && delete window.La[b].bmapRailwayFillColor;
            !window.La[b].cN && window.La[b].bmapRailwayStrokeColor && delete window.La[b].bmapRailwayStrokeColor;
            !window.La[b].DZ && window.La[b].bmapRailwayVisibility && delete window.La[b].bmapRailwayVisibility;
            !window.La[b].NZ && window.La[b].bmapRoadarrowVisibility && delete window.La[b].bmapRoadarrowVisibility;
            return f.join(",")
        },
        J_: function (a) {
            for (var b = {
                    featureType: "t",
                    elementType: "e",
                    visibility: "v",
                    color: "c",
                    lightness: "l",
                    saturation: "s",
                    weight: "w",
                    zoom: "z",
                    hue: "h"
                }, c = {
                    all: "all",
                    geometry: "g",
                    "geometry.fill": "g.f",
                    "geometry.stroke": "g.s",
                    labels: "l",
                    "labels.text.fill": "l.t.f",
                    "labels.text.stroke": "l.t.s",
                    "lables.text": "l.t",
                    "labels.icon": "l.i"
                }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                z.extend(g, i);
                var i = [],
                    k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                                case "poilabel":
                                    g[k] = "poi";
                                    break;
                                case "districtlabel":
                                    g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        } 2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        tY: function (a) {
            var b = {};
            z.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return z.rm(b) ? p : t
        },
        uY: function (a, b) {
            var c = a.stylers.level;
            return c === l ? p : c === b + "" ? p : t
        },
        pY: function (a) {
            return {
                curZoomRegionId: p,
                curZoomRegion: p
            } [a] ? p: t
        },
        NX: function (a, b) {
            var c = a.stylers.level,
                e = {};
            z.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = p);
            return e
        },
        oO: function (a, b) {
            window.$t[b] = a;
            if (!window.rh[b])
                for (var c = this.yb.dj(), e = this.yb.Zh(); c <= e; c++) window.rh[c] || (window.$t[c] = a)
        },
        oF: function (a) {
            if (!window.rh[a])
                for (var b = this.yb.dj(), c = this.yb.Zh(); b <= c; b++) window.rh[b] || (window.La[b] || (window.La[b] = {}), window.La[b].bmapLandColor = window.La[a].bmapLandColor, window.La[b].bmapRailwayFillColor = window.La[a].bmapRailwayFillColor, window.La[b].bmapRailwayStrokeColor = window.La[a].bmapRailwayStrokeColor)
        },
        SU: function (a, b) {
            var c = {};
            z.extend(c, a);
            if (c[b]) {
                for (var e = this.yb.dj(), f = this.yb.Zh(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = p;
                        break
                    } delete c[b]
            }
            return c
        },
        a4: function (a) {
            return a.Ls || "0" === a.uid ? t : p
        },
        cV: function () {
            delete this.Ai.vZ
        },
        m2: function () {
            this.Ai = {}
        },
        ao: function (a, b, c) {
            if (!this.R.so) return t;
            a = a || "sp" + this.aa.x5++;
            if (b && 0 !== b.length) return c = c || {}, this.Ai[a] = this.Ai[a] || {
                polygon: [],
                polyline: []
            }, this.Ai = this.Ai || {}, this.Ai[a][c.type].push({
                WE: b,
                Wb: c.Wb,
                type: c.type,
                style: c.style
            }), a
        },
        vF: function (a) {
            return qb / Math.pow(2, 18 - a)
        }
    });
    var qb = 4.007545274461451E7;

    function Ta(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                e;
            for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function (a) {
                    a && (rb = p, setTimeout(function () {
                        sb.src = D.od + "images/blank.gif?" + a.src
                    }, 50))
                },
                g = function () {
                    var a = tb.shift();
                    a && f(a)
                };
            e = (1E8 * Math.random()).toFixed(0);
            rb ? tb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            ub || (z.V(sb, "load", function () {
                rb = t;
                g()
            }), z.V(sb, "error", function () {
                rb = t;
                g()
            }), ub = p)
        }
    }
    var rb, ub, tb = [],
        sb = new Image;
    Ta(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    D.vL = {
        TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    D.VX = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "mapsv0.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["mapsv0.bdimg.com", "mapsv1.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    D.o0 = {
        "0": {
            proto: "http://",
            domain: D.VX
        },
        1: {
            proto: "https://",
            domain: D.vL
        },
        2: {
            proto: "https://",
            domain: D.vL
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    D.Ut = window.HOST_TYPE || "0";
    D.url = D.o0[D.Ut];
    D.Zo = D.url.proto + D.url.domain.baidumap + "/";
    D.od = D.url.proto + ("2" == D.Ut ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
    // D.oa = D.url.proto + ("2" == D.Ut ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_nocdn.baidu) + "/";
    D.oa = bmapcfg.home;
    D.Ui = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
    D.$h = function (a, b) {
        var c, e, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = D.od + b;
                break;
            case "main_domain_cdn":
                c = D.oa + b;
                break;
            default:
                e = D.url.domain[a], "[object Array]" == Object.prototype.toString.call(e) ? (c = [], z.mc.Ob(e, function (a, e) {
                    c[e] = D.url.proto + a + "/" + b
                })) : c = D.url.proto + D.url.domain[a] + "/" + b
        }
        return c
    };

    function vb(a) {
        var b = {
            duration: 1E3,
            Ic: 30,
            uo: 0,
            dc: wb.bM,
            ct: u()
        };
        this.Zf = [];
        if (a)
            for (var c in a) b[c] = a[c];
        this.m = b;
        if (Za(b.uo)) {
            var e = this;
            setTimeout(function () {
                e.start()
            }, b.uo)
        } else b.uo != xb && this.start()
    }
    var xb = "INFINITE";
    vb.prototype.start = function () {
        this.pu = eb();
        this.pz = this.pu + this.m.duration;
        yb(this)
    };
    vb.prototype.add = function (a) {
        this.Zf.push(a)
    };

    function yb(a) {
        var b = eb();
        b >= a.pz ? ($a(a.m.za) && a.m.za(a.m.dc(1)), $a(a.m.finish) && a.m.finish(), 0 < a.Zf.length && (b = a.Zf[0], b.Zf = [].concat(a.Zf.slice(1)), b.start())) : (a.Vx = a.m.dc((b - a.pu) / a.m.duration), $a(a.m.za) && a.m.za(a.Vx), a.cF || (a.tr = setTimeout(function () {
            yb(a)
        }, 1E3 / a.m.Ic)))
    }
    vb.prototype.stop = function (a) {
        this.cF = p;
        for (var b = 0; b < this.Zf.length; b++) this.Zf[b].stop(), this.Zf[b] = q;
        this.Zf.length = 0;
        this.tr && (clearTimeout(this.tr), this.tr = q);
        this.m.ct(this.Vx);
        a && (this.pz = this.pu, yb(this))
    };
    vb.prototype.cancel = ha(1);
    var wb = {
        bM: function (a) {
            return a
        },
        reverse: function (a) {
            return 1 - a
        },
        tC: function (a) {
            return a * a
        },
        rC: function (a) {
            return Math.pow(a, 3)
        },
        as: function (a) {
            return -(a * (a - 2))
        },
        nK: function (a) {
            return Math.pow(a - 1, 3) + 1
        },
        sC: function (a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        C2: function (a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        D2: function (a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    wb["ease-in"] = wb.tC;
    wb["ease-out"] = wb.as;
    var H = {
        CF: 34,
        DF: 21,
        EF: new P(21, 32),
        IO: new P(10, 32),
        HO: new P(24, 36),
        GO: new P(12, 36),
        AF: new P(13, 1),
        sa: D.oa + "images/",
        U3: "http://api0.map.bdimg.com/images/",
        BF: D.oa + "images/markers_new.png",
        EO: 24,
        FO: 73,
        GB: {
            "\u5317\u4eac": {
                Lx: "bj",
                o: new J(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                Lx: "sh",
                o: new J(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                Lx: "sz",
                o: new J(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                Lx: "gz",
                o: new J(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    z.fa.Se ? (z.extend(H, {
        $J: "url(" + H.sa + "ruler.cur),crosshair",
        yc: "-moz-grab",
        Hd: "-moz-grabbing"
    }), z.platform.OL && (H.fontFamily = "arial,simsun,sans-serif")) : z.fa.gw || z.fa.Ux ? z.extend(H, {
        $J: "url(" + H.sa + "ruler.cur) 2 6,crosshair",
        yc: "url(" + H.sa + "openhand.cur) 8 8,default",
        Hd: "url(" + H.sa + "closedhand.cur) 8 8,move"
    }) : z.extend(H, {
        $J: "url(" + H.sa + "ruler.cur),crosshair",
        yc: "url(" + H.sa + "openhand.cur),default",
        Hd: "url(" + H.sa + "closedhand.cur),move"
    });

    function zb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function Ab(a) {
        0 < z.fa.na ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function Bb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }

    function Cb(a, b) {
        z.U.kx(a, "beforeEnd", b);
        return a.lastChild
    }

    function Db(a) {
        for (var b = {
                left: 0,
                top: 0
            }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
    }

    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }

    function Eb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }

    function oa(a) {
        na(a);
        return Eb(a)
    }

    function Fb() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function Gb(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Hb(a, b) {
        var c = [],
            b = b || function (a) {
                return a
            },
            e;
        for (e in a) c.push(e + "=" + b(a[e]));
        return c.join("&")
    }

    function O(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return z.U.IE(e, b || {})
    }

    function Ya(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, q)
    }

    function $a(a) {
        return "function" === typeof a
    }

    function Za(a) {
        return "number" === typeof a
    }

    function bb(a) {
        return "string" == typeof a
    }

    function Ib(a) {
        return "undefined" != typeof a
    }

    function Jb(a) {
        return "object" == typeof a
    }
    var Kb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Lb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1,
                f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++) e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5), f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }

    function Mb(a) {
        var b = "",
            c, e, f = "",
            g, i = "",
            k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Kb.indexOf(a.charAt(k++)), e = Kb.indexOf(a.charAt(k++)), g = Kb.indexOf(a.charAt(k++)), i = Kb.indexOf(a.charAt(k++)), c = c << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | i, b += String.fromCharCode(c), 64 != g && (b += String.fromCharCode(e)), 64 != i && (b += String.fromCharCode(f)); while (k < a.length);
        return b
    }
    var Q = z.lang.fu;

    function I() {
        return !(!z.platform.ND && !z.platform.sY && !z.platform.lj)
    }

    function Xa() {
        return !(!z.platform.OL && !z.platform.GL && !z.platform.AY)
    }

    function eb() {
        return (new Date).getTime()
    }

    function Nb() {
        var a = document.body.appendChild(O("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : p;
        a.parentNode.removeChild(a);
        return b
    }

    function Ob() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Pb() {
        return !!O("canvas").getContext
    }

    function U(a) {
        return a * Math.PI / 180
    }
    D.GY = function () {
        var a = p,
            b = p,
            c = p,
            e = p,
            f = 0,
            g = 0,
            i = 0,
            k = 0;
        return {
            lQ: function () {
                f += 1;
                a && (a = t, setTimeout(function () {
                    Ta(5054, {
                        pic: f
                    });
                    a = p;
                    f = 0
                }, 1E4))
            },
            g1: function () {
                g += 1;
                b && (b = t, setTimeout(function () {
                    Ta(5055, {
                        move: g
                    });
                    b = p;
                    g = 0
                }, 1E4))
            },
            i1: function () {
                i += 1;
                c && (c = t, setTimeout(function () {
                    Ta(5056, {
                        zoom: i
                    });
                    c = p;
                    i = 0
                }, 1E4))
            },
            h1: function (a) {
                k += a;
                e && (e = t, setTimeout(function () {
                    Ta(5057, {
                        tile: k
                    });
                    e = p;
                    k = 0
                }, 5E3))
            }
        }
    }();
    D.Kp = {
        SF: "#83a1ff",
        Mp: "#808080"
    };

    function Qb(a, b, c) {
        b.dE || (b.dE = [], b.handle = {});
        b.dE.push({
            filter: c,
            hs: a
        });
        b.addEventListener || (b.addEventListener = function (a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click", function (a) {
            for (var c = a.target || a.srcElement; c != b;) {
                Rb(b.dE, function (b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.hs.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t), b.handle.click = p)
    }

    function Rb(a, b) {
        for (var c = 0, e = a.length; c < e; c++) b(c, a[c])
    }
    void

    function (a, b, c) {
        void

        function (a, b, c) {
            function i(a) {
                if (!a.to) {
                    for (var c = p, e = [], g = a.JZ, k = 0; g && k < g.length; k++) {
                        var m = g[k],
                            n = ea[m] = ea[m] || {};
                        if (n.to || n == a) e.push(n.Oc);
                        else {
                            c = t;
                            if (!n.GV && (m = (va.get("alias") || {})[m] || m + ".js", !N[m])) {
                                N[m] = p;
                                var o = b.createElement("script"),
                                    s = b.getElementsByTagName("script")[0];
                                o.async = p;
                                o.src = m;
                                s.parentNode.insertBefore(o, s)
                            }
                            n.qy = n.qy || {};
                            n.qy[a.name] = a
                        }
                    }
                    if (c) {
                        a.to = p;
                        a.VJ && (a.Oc = a.VJ.apply(a, e));
                        for (var v in a.qy) i(a.qy[v])
                    }
                }
            }

            function k(a) {
                return (a || new Date) - F
            }

            function m(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b, b = a, a = L);
                    try {
                        a == L ? (M[b] = M[b] || [], M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (e) {}
                }
            }

            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b, b = a, a = L);
                    try {
                        if (a == L) {
                            var e = M[b];
                            if (e)
                                for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
                        } else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (g) {}
                }
            }

            function o(a) {
                var b = M[a],
                    c = 0;
                if (b) {
                    for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
                    for (g = b.length; g--;) b[g].apply(this, e) && c++;
                    return c
                }
            }

            function s(a, b) {
                if (a && b) {
                    var c = new Image(1, 1),
                        e = [],
                        f = "img_" + +new Date,
                        g;
                    for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    L[f] = c;
                    c.onload = c.onerror = function () {
                        L[f] = c = c.onload = c.onerror = q;
                        delete L[f]
                    };
                    c.src = a + "?" + e.join("&")
                }
            }

            function v() {
                var a = arguments,
                    b = a[0];
                if (this.UJ || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
                    "function" == typeof b && b.apply(this, c)
                } else this.rJ.push(a)
            }

            function w(a, b) {
                var c = {},
                    e;
                for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }

            function y(a) {
                this.name = a;
                this.fs = {
                    protocolParameter: {
                        postUrl: q,
                        protocolParameter: q
                    }
                };
                this.rJ = [];
                this.alog = L
            }

            function A(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [],
                        b;
                    for (b in T) a.push(T[b]);
                    return a
                }(b = T[a]) || (b = T[a] = new y(a));
                return b
            }
            var B = c.alog;
            if (!B || !B.to) {
                var C = b.all && a.attachEvent,
                    F = B && B.VD || +new Date,
                    E = a.m4 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                    G = 0,
                    N = {},
                    L = function (a) {
                        var b = arguments,
                            c, e, f, g;
                        if ("define" == a || "require" == a) {
                            for (e = 1; e < b.length; e++) switch (typeof b[e]) {
                                case "string":
                                    c = b[e];
                                    break;
                                case "object":
                                    f = b[e];
                                    break;
                                case "function":
                                    g = b[e]
                            }
                            "require" == a && (c && !f && (f = [c]), c = q);
                            c = !c ? "#" + G++ : c;
                            e = ea[c] = ea[c] || {};
                            e.to || (e.name = c, e.JZ = f, e.VJ = g, "define" == a && (e.GV = p), i(e))
                        } else "function" == typeof a ? a(L) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function (a, c, e) {
                            b[0] = e;
                            v.apply(L.mF(c), b)
                        })
                    },
                    M = {},
                    T = {},
                    ea = {
                        W1: {
                            name: "alog",
                            to: p,
                            Oc: L
                        }
                    };
                y.prototype.start = y.prototype.create = function (a) {
                    if (!this.UJ) {
                        "object" == typeof a && this.set(a);
                        this.UJ = new Date;
                        for (this.gs("create", this); a = this.rJ.shift();) v.apply(this, a)
                    }
                };
                y.prototype.send = function (a, b) {
                    var c = w({
                        ts: k().toString(36),
                        t: a,
                        sid: E
                    }, this.fs);
                    if ("object" == typeof b) c = w(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                            case "pageview":
                                e[1] && (c.page = e[1]);
                                e[2] && (c.title = e[2]);
                                break;
                            case "event":
                                e[1] && (c.eventCategory = e[1]);
                                e[2] && (c.eventAction = e[2]);
                                e[3] && (c.eventLabel = e[3]);
                                e[4] && (c.eventValue = e[4]);
                                break;
                            case "timing":
                                e[1] && (c.timingCategory = e[1]);
                                e[2] && (c.timingVar = e[2]);
                                e[3] && (c.timingValue = e[3]);
                                e[4] && (c.timingLabel = e[4]);
                                break;
                            case "exception":
                                e[1] && (c.exDescription = e[1]);
                                e[2] && (c.exFatal = e[2]);
                                break;
                            default:
                                return
                        }
                    }
                    this.gs("send", c);
                    var f;
                    if (e = this.fs.protocolParameter) {
                        var g = {};
                        for (f in c) e[f] !== q && (g[e[f] || f] = c[f]);
                        f = g
                    } else f = c;
                    s(this.fs.postUrl, f)
                };
                y.prototype.set = function (a, b) {
                    if ("string" == typeof a) "protocolParameter" == a && (b = w({
                        postUrl: q,
                        protocolParameter: q
                    }, b)), this.fs[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a) this.set(c, a[c])
                };
                y.prototype.get = function (a, b) {
                    var c = this.fs[a];
                    "function" == typeof b && b(c);
                    return c
                };
                y.prototype.gs = function (a, b) {
                    return L.gs(this.name + "." + a, b)
                };
                y.prototype.V = function (a, b) {
                    L.V(this.name + "." + a, b)
                };
                y.prototype.dd = function (a, b) {
                    L.dd(this.name + "." + a, b)
                };
                L.name = "alog";
                L.Wb = E;
                L.to = p;
                L.timestamp = k;
                L.dd = n;
                L.V = m;
                L.gs = o;
                L.mF = A;
                L("init");
                var ca = y.prototype;
                V(ca, {
                    start: ca.start,
                    create: ca.create,
                    send: ca.send,
                    set: ca.set,
                    get: ca.get,
                    on: ca.V,
                    un: ca.dd,
                    fire: ca.gs
                });
                var va = A();
                va.set("protocolParameter", {
                    V1: q
                });
                if (B) {
                    ca = [].concat(B.zb || [], B.kt || []);
                    B.zb = B.kt = q;
                    for (var za in L) L.hasOwnProperty(za) && (B[za] = L[za]);
                    L.zb = L.kt = {
                        push: function (a) {
                            L.apply(L, a)
                        }
                    };
                    for (B = 0; B < ca.length; B++) L.apply(L, ca[B])
                }
                c.alog = L;
                C && m(b, "mouseup", function (a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ea = t;
                a.onerror = function (a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (Ea ? i = t : Ea = p);
                    i && c.alog("exception.send", "exception", {
                        Zs: a,
                        UD: b,
                        Us: e,
                        Vl: f
                    });
                    return t
                };
                c.alog("exception.on", "catch", function (a) {
                    c.alog("exception.send", "exception", {
                        Zs: a.Zs,
                        UD: a.path,
                        Us: a.Us,
                        method: a.method,
                        yK: "catch"
                    })
                })
            }
        }(a, b, c);
        void

        function (a, b, c) {
            var i = "18_3";
            I() && (i = "18_4");
            var k = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random,
                k = k + "/tb/pms/img/st.gif",
                n = {
                    mh: "0.1"
                },
                o = {
                    mh: "0.1"
                },
                s = {
                    mh: "0.1"
                },
                v = {
                    mh: "0"
                };
            if (n && n.mh && m() < n.mh) {
                var w = c.alog.mF("monkey"),
                    y, n = a.screen,
                    A = b.referrer;
                w.set("ver", 5);
                w.set("pid", 241);
                n && w.set("px", n.width + "*" + n.height);
                w.set("ref", A);
                c.alog("monkey.on", "create", function () {
                    y = c.alog.timestamp;
                    w.set("protocolParameter", {
                        reports: q
                    })
                });
                c.alog("monkey.on", "send", function (a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36), a.now = "")
                });
                c.alog("monkey.create", {
                    page: i,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: k,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (o && o.mh && m() < o.mh) {
                var B = t;
                a.onerror = function (a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (B ? i = t : B = p);
                    i && c.alog("exception.send", "exception", {
                        Zs: a,
                        UD: b,
                        Us: e,
                        Vl: f
                    });
                    return t
                };
                c.alog("exception.on", "catch", function (a) {
                    c.alog("exception.send", "exception", {
                        Zs: a.Zs,
                        UD: a.path,
                        Us: a.Us,
                        method: a.method,
                        yK: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: k,
                    dv: 7,
                    page: i,
                    pid: "170",
                    p: "18"
                })
            }
            s && (s.mh && m() < s.mh) && (c.alog("cus.on", "time", function (a) {
                var b = {},
                    e = t,
                    f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a) "page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/.test(i) && (e = p, b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }), c.alog("cus.on", "count", function (a) {
                var b = {},
                    e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var f = 0; f < a.length; f++) /^z_/.test(a[f]) ? (e = p, b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }), c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
            }));
            if (v && v.mh && m() < v.mh) {
                var C = ["Moz", "O", "ms", "Webkit"],
                    F = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    E = function () {
                        return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                    },
                    G = E("dpFeatureTest").style,
                    N = function (a) {
                        return L(a, l, l)
                    },
                    L = function (a, b, c) {
                        var e = a.charAt(0).toUpperCase() + a.slice(1),
                            f = (a + " " + C.join(e + " ") + e).split(" ");
                        if (typeof b === "string" || typeof b === "undefined") return M(f, b);
                        f = (a + " " + C.join(e + " ") + e).split(" ");
                        a: {
                            var a = f,
                                g;
                            for (g in a)
                                if (a[g] in b) {
                                    if (c === t) {
                                        b = a[g];
                                        break a
                                    }
                                    g = b[a[g]];
                                    b = typeof g === "function" ? fnBind(g, c || b) : g;
                                    break a
                                } b = t
                        }
                        return b
                    },
                    M = function (a, b) {
                        var c, e, f;
                        e = a.length;
                        for (c = 0; c < e; c++) {
                            f = a[c];
                            ~("" + f).indexOf("-") && (f = T(f));
                            if (G[f] !== l) return b == "pfx" ? f : p
                        }
                        return t
                    },
                    T = function (a) {
                        return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
                            return b + c.toUpperCase()
                        }).replace(/^-/, "")
                    },
                    ea = function (a, b, c) {
                        if (a.indexOf("@") === 0) return atRule(a);
                        a.indexOf("-") != -1 && (a = T(a));
                        return !b ? L(a, "pfx") : L(a, b, c)
                    },
                    ca = function () {
                        var a = E("canvas");
                        return !(!a.getContext || !a.getContext("2d"))
                    },
                    va = function () {
                        var a = E("div");
                        return "draggable" in a || "ondragstart" in a && "ondrop" in a
                    },
                    za = function () {
                        try {
                            localStorage.setItem("localStorage", "localStorage");
                            localStorage.removeItem("localStorage");
                            return p
                        } catch (a) {
                            return t
                        }
                    },
                    Ea = function () {
                        return "content" in b.createElement("template")
                    },
                    ra = function () {
                        return "createShadowRoot" in b.createElement("a")
                    },
                    Ua = function () {
                        return "registerElement" in b
                    },
                    te = function () {
                        return "import" in b.createElement("link")
                    },
                    Qc = function () {
                        return "getItems" in b
                    },
                    Ji = function () {
                        return "EventSource" in window
                    },
                    ue = function (a, b) {
                        var c = new Image;
                        c.onload = function () {
                            b(a, c.width > 0 && c.height > 0)
                        };
                        c.onerror = function () {
                            b(a, t)
                        };
                        c.src = "data:image/webp;base64," + {
                            p4: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                            o4: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                            ck: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                        } [a]
                    },
                    ve = function (a, b) {
                        return Wb.Vh["WebP-" + a] = b
                    },
                    Ki = function () {
                        return "openDatabase" in a
                    },
                    Li = function () {
                        return "performance" in a && "timing" in a.performance
                    },
                    Mi = function () {
                        return "performance" in a && "mark" in a.performance
                    },
                    Ni = function () {
                        return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                    },
                    Oi = function () {
                        return "Promise" in a && "cast" in a.Np && "resolve" in a.Np && "reject" in a.Np && "all" in a.Np && "race" in a.Np && function () {
                            var b;
                            new a.Np(function (a) {
                                b = a
                            });
                            return typeof b === "function"
                        }()
                    },
                    Pi = function () {
                        var b = !!a.U0,
                            c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                        return !!a.Y0 && b && c
                    },
                    Qi = function () {
                        return "geolocation" in navigator
                    },
                    Ri = function () {
                        var b = E("canvas"),
                            c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                        return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                    },
                    Si = function () {
                        return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").r2
                    },
                    Ti = function () {
                        return !!a.e1
                    },
                    Ui = function () {
                        return "WebSocket" in a && a.b1.P0 === 2
                    },
                    Vi = function () {
                        return !!b.createElement("video").canPlayType
                    },
                    Wi = function () {
                        return !!b.createElement("audio").canPlayType
                    },
                    Xi = function () {
                        return !!(a.history && "pushState" in a.history)
                    },
                    Yi = function () {
                        return !(!a.S0 || !a.T0)
                    },
                    Zi = function () {
                        return "postMessage" in window
                    },
                    $i = function () {
                        return !!a.webkitNotifications || "Notification" in a && "permission" in a.aP && "requestPermission" in a.aP
                    },
                    aj = function () {
                        for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f) c = a[b[f] + "RequestAnimationFrame"];
                        return !!c
                    },
                    bj = function () {
                        return "JSON" in a && "parse" in JSON && "stringify" in JSON
                    },
                    cj = function () {
                        return !(!ea("exitFullscreen", b, t) && !ea("cancelFullScreen", b, t))
                    },
                    dj = function () {
                        return !!ea("Intl", a)
                    },
                    ej = function () {
                        return N("flexBasis")
                    },
                    fj = function () {
                        return !!N("perspective")
                    },
                    gj = function () {
                        return N("shapeOutside")
                    },
                    hj = function () {
                        var a = E("div");
                        a.style.cssText = F.join("filter:blur(2px); ");
                        return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                    },
                    ij = function () {
                        return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                    },
                    jj = function () {
                        return E("progress").max !== l
                    },
                    kj = function () {
                        return E("meter").max !== l
                    },
                    lj = function () {
                        return "sendBeacon" in navigator
                    },
                    mj = function () {
                        return N("borderRadius")
                    },
                    nj = function () {
                        return N("boxShadow")
                    },
                    oj = function () {
                        var a = E("div").style;
                        a.cssText = F.join("opacity:.55;");
                        return /^0.55$/.test(a.opacity)
                    },
                    pj = function () {
                        return M(["textShadow"], l)
                    },
                    qj = function () {
                        return N("animationName")
                    },
                    rj = function () {
                        return N("transition")
                    },
                    sj = function () {
                        return navigator.userAgent.indexOf("Android 2.") === -1 && N("transform")
                    },
                    Wb = {
                        Vh: {},
                        ra: function (a, b, c) {
                            this.Vh[a] = b.apply(this, [].slice.call(arguments, 2))
                        },
                        Ed: function (a, b) {
                            a.apply(this, [].slice.call(arguments, 1))
                        },
                        PZ: function () {
                            this.ra("bdrs", mj);
                            this.ra("bxsd", nj);
                            this.ra("opat", oj);
                            this.ra("txsd", pj);
                            this.ra("anim", qj);
                            this.ra("trsi", rj);
                            this.ra("trfm", sj);
                            this.ra("flex", ej);
                            this.ra("3dtr", fj);
                            this.ra("shpe", gj);
                            this.ra("fltr", hj);
                            this.ra("cavs", ca);
                            this.ra("dgdp", va);
                            this.ra("locs", za);
                            this.ra("wctem", Ea);
                            this.ra("wcsdd", ra);
                            this.ra("wccse", Ua);
                            this.ra("wchti", te);
                            this.Ed(ue, "lossy", ve);
                            this.Ed(ue, "lossless", ve);
                            this.Ed(ue, "alpha", ve);
                            this.Ed(ue, "animation", ve);
                            this.ra("wsql", Ki);
                            this.ra("natm", Li);
                            this.ra("ustm", Mi);
                            this.ra("arra", Ni);
                            this.ra("prms", Oi);
                            this.ra("xhr2", Pi);
                            this.ra("wbgl", Ri);
                            this.ra("geol", Qi);
                            this.ra("svg", Si);
                            this.ra("work", Ti);
                            this.ra("wbsk", Ui);
                            this.ra("vido", Vi);
                            this.ra("audo", Wi);
                            this.ra("hsty", Xi);
                            this.ra("file", Yi);
                            this.ra("psmg", Zi);
                            this.ra("wknf", $i);
                            this.ra("rqaf", aj);
                            this.ra("json", bj);
                            this.ra("flsc", cj);
                            this.ra("i18n", dj);
                            this.ra("cors", ij);
                            this.ra("prog", jj);
                            this.ra("metr", kj);
                            this.ra("becn", lj);
                            this.ra("mcrd", Qc);
                            this.ra("esrc", Ji)
                        }
                    },
                    w = c.alog.mF("feature");
                w.V("commit", function () {
                    Wb.PZ();
                    var a = setInterval(function () {
                        if ("WebP-lossy" in Wb.Vh && "WebP-lossless" in Wb.Vh && "WebP-alpha" in Wb.Vh && "WebP-animation" in Wb.Vh) {
                            for (var b in Wb.Vh) Wb.Vh[b] = Wb.Vh[b] ? "y" : "n";
                            w.send("feature", Wb.Vh);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", {
                    A2: 4,
                    S4: k,
                    page: i,
                    zb: "18"
                });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, D);
    D.Vp = D.alog || u();
    D.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");

    function Sb(a) {
        var b = window.TILE_VERSION,
            c = "20170927";
        b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    };

    function pa(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + c] = function (a) {
                b && b(a);
                delete D._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }

        // 屏蔽在线调用
        if (a.indexOf('.js') < 0) {
            bmapLog('屏蔽在线调用:' + a);
            return;
        }

        var e = O("script", {
            type: "text/javascript"
        });
        e.charset = "utf-8";
        e.src = a;
        e.addEventListener ? e.addEventListener("load", function (a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(e);
            e = q
        }, 1)
    };
    var Tb = {
        map: "dr0tcm",
        common: "r1ptny",
        style: "t3u23d",
        tile: "o2vlst",
        groundoverlay: "nt1eup",
        pointcollection: "124ojv",
        marker: "gufien",
        symbol: "iuuoh3",
        canvablepath: "ud5o0j",
        vmlcontext: "mxhrn3",
        markeranimation: "fsokeh",
        poly: "ujlj2c",
        draw: "welrhl",
        drawbysvg: "zjuz2l",
        drawbyvml: "kqgkni",
        drawbycanvas: "yk252g",
        infowindow: "m54300",
        oppc: "fwys0k",
        opmb: "qsic1t",
        menu: "o0bl2y",
        control: "budinu",
        navictrl: "xbuvj0",
        geoctrl: "v4gnvh",
        copyrightctrl: "edqx42",
        citylistcontrol: "tue4iz",
        scommon: "szpua5",
        local: "ndo5kx",
        route: "xpieyd",
        othersearch: "5tknum",
        mapclick: "n1qpkg",
        buslinesearch: "cehvsr",
        hotspot: "uqhaj1",
        autocomplete: "u4ppoy",
        coordtrans: "czcg5v",
        coordtransutils: "rzn02m",
        convertor: "od1tub",
        clayer: "0cebb4",
        pservice: "k1v5fo",
        pcommon: "silhde",
        panorama: "42tk01",
        panoramaflash: "lalzfk"
    };
    z.iy = function () {
        function a(a) {
            return e && !!c[b + a + "_" + Tb[a]]
        }
        var b = "BMap_",
            c = window.localStorage,
            e = "localStorage" in window && c !== q && c !== l;
        return {
            vY: e,
            set: function (a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--;) m = c.key(k), -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Tb[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function (f) {
                return e && a(f) ? c.getItem(b + f + "_" + Tb[f]) : t
            },
            FJ: a
        }
    }();

    function K() {}
    z.object.extend(K, {
        xj: {
            TF: -1,
            pP: 0,
            Gp: 1
        },
        MK: function () {
            var a = "canvablepath";
            if (!I() || !Pb()) Ob() || (Nb() ? a = "vmlcontext" : Pb());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        V4: {},
        KF: {
            AP: D.oa + "getmodules?v=3.0",
            WT: 5E3
        },
        $B: t,
        Rd: {
            pl: {},
            an: [],
            yv: []
        },
        load: function (a, b, c) {
            var e = this.nb(a);
            if (e.Me == this.xj.Gp) c && b();
            else {
                if (e.Me == this.xj.TF) {
                    this.KJ(a);
                    this.$M(a);
                    var f = this;
                    f.$B == t && (f.$B = p, setTimeout(function () {
                        for (var a = [], b = 0, c = f.Rd.an.length; b < c; b++) {
                            var e = f.Rd.an[b],
                                n = "";
                            ja.iy.FJ(e) ? n = ja.iy.get(e) : (n = "", a.push(e + "_" + Tb[e]));
                            f.Rd.yv.push({
                                rM: e,
                                hE: n
                            })
                        }
                        f.$B = t;
                        f.Rd.an.length = 0;
                        // 0 == a.length ? f.tK() : pa(f.KF.AP + "&mod=" + a.join(","))
                        if (a.length > 0) {
                            for (var ia = 0; ia < a.length; ia++) {
                                var md = bmapcfg.home + 'modules/' + a[ia] + '.js';
                                bmapLog('加载模块:' + md);
                                pa(md);
                            }
                        } else {
                            f.tK()
                        }
                    }, 1));
                    e.Me = this.xj.pP
                }
                e.uu.push(b)
            }
        },
        KJ: function (a) {
            if (a && this.MK()[a])
                for (var a = this.MK()[a], b = 0; b < a.length; b++) this.KJ(a[b]), this.Rd.pl[a[b]] || this.$M(a[b])
        },
        $M: function (a) {
            for (var b = 0; b < this.Rd.an.length; b++)
                if (this.Rd.an[b] == a) return;
            this.Rd.an.push(a)
        },
        OZ: function (a, b) {
            var c = this.nb(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Me = this.xj.Gp;
            for (var f = 0, g = c.uu.length; f < g; f++) c.uu[f]();
            c.uu.length = 0
        },
        FJ: function (a, b) {
            var c = this;
            c.timeout = setTimeout(function () {
                c.Rd.pl[a].Me != c.xj.Gp ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, c.KF.WT)
        },
        nb: function (a) {
            this.Rd.pl[a] || (this.Rd.pl[a] = {}, this.Rd.pl[a].Me = this.xj.TF, this.Rd.pl[a].uu = []);
            return this.Rd.pl[a]
        },
        remove: function (a) {
            delete this.nb(a)
        },
        WU: function (a, b) {
            for (var c = this.Rd.yv, e = p, f = 0, g = c.length; f < g; f++) "" == c[f].hE && (c[f].rM == a ? c[f].hE = b : e = t);
            e && this.tK()
        },
        tK: function () {
            for (var a = this.Rd.yv, b = 0, c = a.length; b < c; b++) this.OZ(a[b].rM, a[b].hE);
            this.Rd.yv.length = 0
        }
    });

    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    R.prototype.Yb = function (a) {
        return a && a.x == this.x && a.y == this.y
    };

    function P(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    P.prototype.Yb = function (a) {
        return a && this.width == a.width && this.height == a.height
    };

    function kb(a, b) {
        a && (this.Mb = a, this.ea = "spot" + kb.ea++, b = b || {}, this.Tg = b.text || "", this.ev = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.hB = b.userData || q, this.Dh = b.minZoom || q, this.Ef = b.maxZoom || q)
    }
    kb.ea = 0;
    z.extend(kb.prototype, {
        xa: function (a) {
            this.Dh == q && (this.Dh = a.R.jc);
            this.Ef == q && (this.Ef = a.R.pc)
        },
        ua: function (a) {
            a instanceof J && (this.Mb = a)
        },
        ka: x("Mb"),
        Bt: ba("Tg"),
        sD: x("Tg"),
        setUserData: ba("hB"),
        getUserData: x("hB")
    });

    function Ub() {
        this.M = q;
        this.Nb = "control";
        this.Ta = this.wJ = p
    }
    z.lang.wa(Ub, z.lang.Ga, "Control");
    z.extend(Ub.prototype, {
        initialize: function (a) {
            this.M = a;
            if (this.P) return a.Ya.appendChild(this.P), this.P
        },
        He: function (a) {
            !this.P && (this.initialize && $a(this.initialize)) && (this.P = this.initialize(a));
            this.m = this.m || {
                Ag: t
            };
            this.WA();
            this.jr();
            this.P && (this.P.Iq = this)
        },
        WA: function () {
            var a = this.P;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.ru || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Ag || z.U.fb(a, "BMap_noprint");
                I() || z.V(a, "contextmenu", oa)
            }
        },
        remove: function () {
            this.M = q;
            this.P && (this.P.parentNode && this.P.parentNode.removeChild(this.P), this.P = this.P.Iq = q)
        },
        Ea: function () {
            this.P = Cb(this.M.Ya, "<div unselectable='on'></div>");
            this.Ta == t && z.U.$(this.P);
            return this.P
        },
        jr: function () {
            this.uc(this.m.anchor)
        },
        uc: function (a) {
            if (this.X1 || !Za(a) || isNaN(a) || a < Vb || 3 < a) a = this.defaultAnchor;
            this.m = this.m || {
                Ag: t
            };
            this.m.Da = this.m.Da || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.P) {
                var c = this.P,
                    e = this.m.Da.width,
                    f = this.m.Da.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Vb:
                        c.style.top = f + "px";
                        c.style.left = e + "px";
                        break;
                    case Xb:
                        c.style.top = f + "px";
                        c.style.right = e + "px";
                        break;
                    case Yb:
                        c.style.bottom = f + "px";
                        c.style.left = e + "px";
                        break;
                    case 3:
                        c.style.bottom = f + "px", c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                z.U.tc(this.P, "anchor" + c[b]);
                z.U.fb(this.P, "anchor" + c[a])
            }
        },
        VC: function () {
            return this.m.anchor
        },
        getContainer: x("P"),
        Md: function (a) {
            a instanceof P && (this.m = this.m || {
                Ag: t
            }, this.m.Da = new P(a.width, a.height), this.P && this.uc(this.m.anchor))
        },
        ej: function () {
            return this.m.Da
        },
        Zc: x("P"),
        show: function () {
            this.Ta != p && (this.Ta = p, this.P && z.U.show(this.P))
        },
        $: function () {
            this.Ta != t && (this.Ta = t, this.P && z.U.$(this.P))
        },
        isPrintable: function () {
            return !!this.m.Ag
        },
        Pc: function () {
            return !this.P && !this.M ? t : !!this.Ta
        }
    });
    var Vb = 0,
        Xb = 1,
        Yb = 2;

    function lb(a) {
        Ub.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            VE: a.showZoomInfo || p,
            anchor: a.anchor,
            Da: a.offset,
            type: a.type,
            jW: a.enableGeolocation || t
        };
        this.defaultAnchor = I() ? 3 : Vb;
        this.defaultOffset = new P(10, 10);
        this.uc(a.anchor);
        this.Lm(a.type);
        this.wf()
    }
    z.lang.wa(lb, Ub, "NavigationControl");
    z.extend(lb.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        Lm: function (a) {
            this.m.type = Za(a) && 0 <= a && 3 >= a ? a : 0
        },
        Oo: function () {
            return this.m.type
        },
        wf: function () {
            var a = this;
            K.load("navictrl", function () {
                a.vf()
            })
        }
    });

    function Zb(a) {
        Ub.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || Yb,
            Da: a.offset || new P(10, 30),
            y_: a.showAddressBar !== t,
            F2: a.enableAutoLocation || t,
            jM: a.locationIcon || q
        };
        var b = this;
        this.ru = 1200;
        b.r0 = [];
        this.oe = [];
        K.load("geoctrl", function () {
            (function e() {
                if (0 !== b.oe.length) {
                    var a = b.oe.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            })();
            b.zP()
        });
        Ta(Ma)
    }
    z.lang.wa(Zb, Ub, "GeolocationControl");
    z.extend(Zb.prototype, {
        location: function () {
            this.oe.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: da(q)
    });

    function $b(a) {
        Ub.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            anchor: a.anchor,
            Da: a.offset
        };
        this.gc = [];
        this.defaultAnchor = Yb;
        this.defaultOffset = new P(5, 2);
        this.uc(a.anchor);
        this.wJ = t;
        this.wf()
    }
    z.lang.wa($b, Ub, "CopyrightControl");
    z.object.extend($b.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        Uv: function (a) {
            if (a && Za(a.id) && !isNaN(a.id)) {
                var b = {
                        bounds: q,
                        content: ""
                    },
                    c;
                for (c in a) b[c] = a[c];
                if (a = this.dm(a.id))
                    for (var e in b) a[e] = b[e];
                else this.gc.push(b)
            }
        },
        dm: function (a) {
            for (var b = 0, c = this.gc.length; b < c; b++)
                if (this.gc[b].id == a) return this.gc[b]
        },
        bD: x("gc"),
        xE: function (a) {
            for (var b = 0, c = this.gc.length; b < c; b++) this.gc[b].id == a && (r = this.gc.splice(b, 1), b--, c = this.gc.length)
        },
        wf: function () {
            var a = this;
            K.load("copyrightctrl", function () {
                a.vf()
            })
        }
    });

    function nb(a) {
        Ub.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            size: a.size || new P(150, 150),
            padding: 5,
            Za: a.isOpen === p ? p : t,
            J0: 4,
            Da: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new P(0, 0);
        this.$p = this.aq = 13;
        this.uc(a.anchor);
        this.Ce(this.m.size);
        this.wf()
    }
    z.lang.wa(nb, Ub, "OverviewMapControl");
    z.extend(nb.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        uc: function (a) {
            Ub.prototype.uc.call(this, a)
        },
        re: function () {
            this.re.Nn = p;
            this.m.Za = !this.m.Za;
            this.P || (this.re.Nn = t)
        },
        Ce: function (a) {
            a instanceof P || (a = new P(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.m.size = a
        },
        Eb: function () {
            return this.m.size
        },
        Za: function () {
            return this.m.Za
        },
        wf: function () {
            var a = this;
            K.load("control", function () {
                a.vf()
            })
        }
    });

    function ac(a) {
        Ub.call(this);
        a = a || {};
        this.defaultAnchor = Vb;
        this.UU = a.canCheckSize === t ? t : p;
        this.Wi = "";
        this.defaultOffset = new P(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Ag: t,
            Da: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && $a(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && $a(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && $a(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.uc(a.anchor);
        this.wf()
    }
    z.lang.wa(ac, Ub, "CityListControl");
    z.object.extend(ac.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        wf: function () {
            var a = this;
            K.load("citylistcontrol", function () {
                a.vf()
            }, p)
        }
    });

    function mb(a) {
        Ub.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            color: "black",
            ed: "metric",
            Da: a.offset
        };
        this.defaultAnchor = Yb;
        this.defaultOffset = new P(81, 18);
        this.uc(a.anchor);
        this.Lh = {
            metric: {
                name: "metric",
                MJ: 1,
                AL: 1E3,
                lO: "\u7c73",
                mO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                MJ: 3.2808,
                AL: 5280,
                lO: "\u82f1\u5c3a",
                mO: "\u82f1\u91cc"
            }
        };
        this.Lh[this.m.ed] || (this.m.ed = "metric");
        this.pI = q;
        this.PH = {};
        this.wf()
    }
    z.lang.wa(mb, Ub, "ScaleControl");
    z.object.extend(mb.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        Hk: function (a) {
            this.m.color = a + ""
        },
        b3: function () {
            return this.m.color
        },
        RE: function (a) {
            this.m.ed = this.Lh[a] && this.Lh[a].name || this.m.ed
        },
        IX: function () {
            return this.m.ed
        },
        wf: function () {
            var a = this;
            K.load("control", function () {
                a.vf()
            })
        }
    });
    var bc = 0;

    function ob(a) {
        Ub.call(this);
        a = a || {};
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(10, 10);
        this.m = {
            Ag: t,
            gh: [Pa, ab, Va, Sa],
            EV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || bc,
            Da: a.offset || this.defaultOffset,
            nW: p
        };
        this.uc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.gh = a.mapTypes.slice(0));
        this.wf()
    }
    z.lang.wa(ob, Ub, "MapTypeControl");
    z.object.extend(ob.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        jy: function (a) {
            this.M.Dn = a
        },
        wf: function () {
            var a = this;
            K.load("control", function () {
                a.vf()
            }, p)
        }
    });

    function cc(a) {
        Ub.call(this);
        a = a || {};
        this.m = {
            Ag: t,
            Da: a.offset,
            anchor: a.anchor
        };
        this.Ji = t;
        this.Cv = q;
        this.YH = new dc({
            lf: "api"
        });
        this.ZH = new ec(q, {
            lf: "api"
        });
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(10, 10);
        this.uc(a.anchor);
        this.wf();
        Ta(xa)
    }
    z.lang.wa(cc, Ub, "PanoramaControl");
    z.extend(cc.prototype, {
        initialize: function (a) {
            this.M = a;
            return this.P
        },
        wf: function () {
            var a = this;
            K.load("control", function () {
                a.vf()
            })
        }
    });

    function fc(a) {
        z.lang.Ga.call(this);
        this.m = {
            Ya: q,
            cursor: "default"
        };
        this.m = z.extend(this.m, a);
        this.Nb = "contextmenu";
        this.M = q;
        this.Aa = [];
        this.Gf = [];
        this.Fe = [];
        this.vw = this.Kr = q;
        this.Ch = t;
        var b = this;
        K.load("menu", function () {
            b.lb()
        })
    }
    z.lang.wa(fc, z.lang.Ga, "ContextMenu");
    z.object.extend(fc.prototype, {
        xa: function (a, b) {
            this.M = a;
            this.ul = b || q
        },
        remove: function () {
            this.M = this.ul = q
        },
        Vv: function (a) {
            if (a && !("menuitem" != a.Nb || "" == a.Tg || 0 >= a.Ri)) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    if (this.Aa[b] === a) return;
                this.Aa.push(a);
                this.Gf.push(a)
            }
        },
        removeItem: function (a) {
            if (a && "menuitem" == a.Nb) {
                for (var b = 0, c = this.Aa.length; b < c; b++) this.Aa[b] === a && (this.Aa[b].remove(), this.Aa.splice(b, 1), c--);
                b = 0;
                for (c = this.Gf.length; b < c; b++) this.Gf[b] === a && (this.Gf[b].remove(), this.Gf.splice(b, 1), c--)
            }
        },
        sB: function () {
            this.Aa.push({
                Nb: "divider",
                Ej: this.Fe.length
            });
            this.Fe.push({
                U: q
            })
        },
        zE: function (a) {
            if (this.Fe[a]) {
                for (var b = 0, c = this.Aa.length; b < c; b++) this.Aa[b] && ("divider" == this.Aa[b].Nb && this.Aa[b].Ej == a) && (this.Aa.splice(b, 1), c--), this.Aa[b] && ("divider" == this.Aa[b].Nb && this.Aa[b].Ej > a) && this.Aa[b].Ej--;
                this.Fe.splice(a, 1)
            }
        },
        Zc: x("P"),
        show: function () {
            this.Ch != p && (this.Ch = p)
        },
        $: function () {
            this.Ch != t && (this.Ch = t)
        },
        c_: function (a) {
            a && (this.m.cursor = a)
        },
        getItem: function (a) {
            return this.Gf[a]
        }
    });
    var gc = H.sa + "menu_zoom_in.png",
        hc = H.sa + "menu_zoom_out.png";

    function ic(a, b, c) {
        if (a && $a(b)) {
            z.lang.Ga.call(this);
            this.m = {
                width: 100,
                id: "",
                nm: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width : 100;
            this.m.id = c.id ? c.id : "";
            this.m.nm = c.iconUrl ? c.iconUrl : "";
            this.Tg = a + "";
            this.Ty = b;
            this.M = q;
            this.Nb = "menuitem";
            this.qr = this.Tu = this.P = this.xh = q;
            this.Ah = p;
            var e = this;
            K.load("menu", function () {
                e.lb()
            })
        }
    }
    z.lang.wa(ic, z.lang.Ga, "MenuItem");
    z.object.extend(ic.prototype, {
        xa: function (a, b) {
            this.M = a;
            this.xh = b
        },
        remove: function () {
            this.M = this.xh = q
        },
        Bt: function (a) {
            a && (this.Tg = a + "")
        },
        Vb: function (a) {
            a && (this.m.nm = a)
        },
        Zc: x("P"),
        enable: function () {
            this.Ah = p
        },
        disable: function () {
            this.Ah = t
        }
    });

    function hb(a, b) {
        a && !b && (b = a);
        this.Ie = this.Xd = this.Ne = this.Zd = this.Gl = this.sl = q;
        a && (this.Gl = new J(a.lng, a.lat), this.sl = new J(b.lng, b.lat), this.Ne = a.lng, this.Zd = a.lat, this.Ie = b.lng, this.Xd = b.lat)
    }
    z.object.extend(hb.prototype, {
        nj: function () {
            return !this.Gl || !this.sl
        },
        Yb: function (a) {
            return !(a instanceof hb) || this.nj() ? t : this.Ue().Yb(a.Ue()) && this.Of().Yb(a.Of())
        },
        Ue: x("Gl"),
        Of: x("sl"),
        kV: function (a) {
            return !(a instanceof hb) || this.nj() || a.nj() ? t : a.Ne > this.Ne && a.Ie < this.Ie && a.Zd > this.Zd && a.Xd < this.Xd
        },
        Db: function () {
            return this.nj() ? q : new J((this.Ne + this.Ie) / 2, (this.Zd + this.Xd) / 2)
        },
        Js: function (a) {
            if (!(a instanceof hb) || Math.max(a.Ne, a.Ie) < Math.min(this.Ne, this.Ie) || Math.min(a.Ne, a.Ie) > Math.max(this.Ne, this.Ie) || Math.max(a.Zd, a.Xd) < Math.min(this.Zd, this.Xd) || Math.min(a.Zd, a.Xd) > Math.max(this.Zd, this.Xd)) return q;
            var b = Math.max(this.Ne, a.Ne),
                c = Math.min(this.Ie, a.Ie),
                e = Math.max(this.Zd, a.Zd),
                a = Math.min(this.Xd, a.Xd);
            return new hb(new J(b, e), new J(c, a))
        },
        Gr: function (a) {
            return !(a instanceof J) || this.nj() ? t : a.lng >= this.Ne && a.lng <= this.Ie && a.lat >= this.Zd && a.lat <= this.Xd
        },
        extend: function (a) {
            if (a instanceof J) {
                var b = a.lng,
                    a = a.lat;
                this.Gl || (this.Gl = new J(0, 0));
                this.sl || (this.sl = new J(0, 0));
                if (!this.Ne || this.Ne > b) this.Gl.lng = this.Ne = b;
                if (!this.Ie || this.Ie < b) this.sl.lng = this.Ie = b;
                if (!this.Zd || this.Zd > a) this.Gl.lat = this.Zd = a;
                if (!this.Xd || this.Xd < a) this.sl.lat = this.Xd = a
            }
        },
        iF: function () {
            return this.nj() ? new J(0, 0) : new J(Math.abs(this.Ie - this.Ne), Math.abs(this.Xd - this.Zd))
        }
    });

    function J(a, b) {
        isNaN(a) && (a = Mb(a), a = isNaN(a) ? 0 : a);
        bb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Mb(b), b = isNaN(b) ? 0 : b);
        bb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    J.FL = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    J.prototype.Yb = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function jc() {}
    jc.prototype.vg = function () {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    jc.prototype.rj = function () {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };

    function kc() {};
    var gb = {
        OJ: function (a, b, c) {
            K.load("coordtransutils", function () {
                gb.uU(a, b, c)
            }, p)
        },
        NJ: function (a, b, c) {
            K.load("coordtransutils", function () {
                gb.tU(a, b, c)
            }, p)
        }
    };

    function lc() {
        this.Sa = [];
        var a = this;
        K.load("convertor", function () {
            a.xP()
        })
    }
    z.wa(lc, z.lang.Ga, "Convertor");
    z.extend(lc.prototype, {
        translate: function (a, b, c, e) {
            this.Sa.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    V(lc.prototype, {
        translate: lc.prototype.translate
    });

    function S() {}
    S.prototype = new jc;
    z.extend(S, {
        SO: 6370996.81,
        XF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        iu: [86, 60, 45, 30, 15, 0],
        YO: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        UF: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        h3: function (a, b) {
            if (!a || !b) return 0;
            var c, e, a = this.hc(a);
            if (!a) return 0;
            c = this.Pk(a.lng);
            e = this.Pk(a.lat);
            b = this.hc(b);
            return !b ? 0 : this.ve(c, this.Pk(b.lng), e, this.Pk(b.lat))
        },
        pk: function (a, b) {
            if (!a || !b) return 0;
            a.lng = this.iD(a.lng, -180, 180);
            a.lat = this.oD(a.lat, -74, 74);
            b.lng = this.iD(b.lng, -180, 180);
            b.lat = this.oD(b.lat, -74, 74);
            return this.ve(this.Pk(a.lng), this.Pk(b.lng), this.Pk(a.lat), this.Pk(b.lat))
        },
        hc: function (a) {
            if (a === q || a === l) return new J(0, 0);
            var b, c;
            b = new J(Math.abs(a.lng), Math.abs(a.lat));
            for (var e = 0; e < this.XF.length; e++)
                if (b.lat >= this.XF[e]) {
                    c = this.YO[e];
                    break
                } a = this.PJ(a, c);
            return a = new J(a.lng, a.lat)
        },
        hb: function (a) {
            if (a === q || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new J(0, 0);
            var b, c;
            a.lng = this.iD(a.lng, -180, 180);
            a.lat = this.oD(a.lat, -85, 85);
            b = new J(a.lng, a.lat);
            for (var e = 0; e < this.iu.length; e++)
                if (b.lat >= this.iu[e]) {
                    c = this.UF[e];
                    break
                } if (!c)
                for (e = 0; e < this.iu.length; e++)
                    if (b.lat <= -this.iu[e]) {
                        c = this.UF[e];
                        break
                    } a = this.PJ(a, c);
            return a = new J(a.lng, a.lat)
        },
        PJ: function (a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    e = Math.abs(a.lat) / b[9],
                    e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e,
                    c = c * (0 > a.lng ? -1 : 1),
                    e = e * (0 > a.lat ? -1 : 1);
                return new J(c, e)
            }
        },
        ve: function (a, b, c, e) {
            return this.SO * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        Pk: function (a) {
            return Math.PI * a / 180
        },
        E5: function (a) {
            return 180 * a / Math.PI
        },
        oD: function (a, b, c) {
            b != q && (a = Math.max(a, b));
            c != q && (a = Math.min(a, c));
            return a
        },
        iD: function (a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    z.extend(S.prototype, {
        ei: function (a) {
            return S.hb(a)
        },
        vg: function (a) {
            a = S.hb(a);
            return new R(a.lng, a.lat)
        },
        hh: function (a) {
            return S.hc(a)
        },
        rj: function (a) {
            a = new J(a.x, a.y);
            return S.hc(a)
        },
        Tb: function (a, b, c, e, f) {
            if (a) return a = this.ei(a, f), b = this.$b(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        OY: function (a, b, c, e) {
            if (a) return b = this.$b(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        Ib: function (a, b, c, e, f) {
            if (a) return b = this.$b(b), this.hh(new J(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)), f)
        },
        $b: function (a) {
            return Math.pow(2, 18 - a)
        }
    });

    function jb() {
        this.Wi = "bj"
    }
    jb.prototype = new S;
    z.extend(jb.prototype, {
        ei: function (a, b) {
            return this.iQ(b, S.hb(a))
        },
        hh: function (a, b) {
            return S.hc(this.jQ(b, a))
        },
        lngLatToPointFor3D: function (a, b) {
            var c = this,
                e = S.hb(a);
            K.load("coordtrans", function () {
                var a = kc.mD(c.Wi || "bj", e),
                    a = new R(a.x, a.y);
                b && b(a)
            }, p)
        },
        pointToLngLatFor3D: function (a, b) {
            var c = this,
                e = new J(a.x, a.y);
            K.load("coordtrans", function () {
                var a = kc.jD(c.Wi || "bj", e),
                    a = new J(a.lng, a.lat),
                    a = S.hc(a);
                b && b(a)
            }, p)
        },
        iQ: function (a, b) {
            if (K.nb("coordtrans").Me == K.xj.Gp) {
                var c = kc.mD(a || "bj", b);
                return new J(c.x, c.y)
            }
            K.load("coordtrans", u());
            return new J(0, 0)
        },
        jQ: function (a, b) {
            if (K.nb("coordtrans").Me == K.xj.Gp) {
                var c = kc.jD(a || "bj", b);
                return new J(c.lng, c.lat)
            }
            K.load("coordtrans", u());
            return new J(0, 0)
        },
        $b: function (a) {
            return Math.pow(2, 20 - a)
        }
    });

    function mc() {
        this.Nb = "overlay"
    }
    z.lang.wa(mc, z.lang.Ga, "Overlay");
    mc.vk = function (a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    z.extend(mc.prototype, {
        He: function (a) {
            if (!this.ba && $a(this.initialize) && (this.ba = this.initialize(a))) this.ba.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function () {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function () {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function () {
            this.ba && this.ba.parentNode && this.ba.parentNode.removeChild(this.ba);
            this.ba = q;
            this.dispatchEvent(new Q("onremove"))
        },
        $: function () {
            this.ba && z.U.$(this.ba)
        },
        show: function () {
            this.ba && z.U.show(this.ba)
        },
        Pc: function () {
            return !this.ba || "none" == this.ba.style.display || "hidden" == this.ba.style.visibility ? t : p
        }
    });
    D.Ye(function (a) {
        function b(a, b) {
            var c = O("div"),
                i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.aa;
        c.Qc = a.Qc = b(a.platform, 200);
        a.Yd.OC = b(c.Qc, 800);
        a.Yd.cE = b(c.Qc, 700);
        a.Yd.zK = b(c.Qc, 600);
        a.Yd.WD = b(c.Qc, 500);
        a.Yd.nM = b(c.Qc, 400);
        a.Yd.oM = b(c.Qc, 300);
        a.Yd.xO = b(c.Qc, 201);
        a.Yd.Vs = b(c.Qc, 200)
    });

    function ib() {
        z.lang.Ga.call(this);
        mc.call(this);
        this.map = q;
        this.Ta = p;
        this.Fb = q;
        this.JG = 0
    }
    z.lang.wa(ib, mc, "OverlayInternal");
    z.extend(ib.prototype, {
        initialize: function (a) {
            this.map = a;
            z.lang.Ga.call(this, this.ea);
            return q
        },
        Pw: x("map"),
        draw: u(),
        yj: u(),
        remove: function () {
            this.map = q;
            z.lang.yw(this.ea);
            mc.prototype.remove.call(this)
        },
        $: function () {
            this.Ta !== t && (this.Ta = t)
        },
        show: function () {
            this.Ta !== p && (this.Ta = p)
        },
        Pc: function () {
            return !this.ba ? t : !!this.Ta
        },
        Ra: x("ba"),
        vN: function (a) {
            var a = a || {},
                b;
            for (b in a) this.K[b] = a[b]
        },
        vp: ba("zIndex"),
        $i: function () {
            this.K.$i = p
        },
        NV: function () {
            this.K.$i = t
        },
        bo: ba("hg"),
        fp: function () {
            this.hg = q
        }
    });

    function nc() {
        this.map = q;
        this.Ba = {};
        this.Ee = []
    }
    D.Ye(function (a) {
        var b = new nc;
        b.map = a;
        a.Ba = b.Ba;
        a.Ee = b.Ee;
        a.addEventListener("load", function (a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function (a) {
            b.draw(a)
        });
        z.fa.na && 8 > z.fa.na || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function (a) {
            setTimeout(function () {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function (a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function (a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function (a) {
            a = a.target;
            if (a instanceof ib) b.Ba[a.ea] || (b.Ba[a.ea] = a);
            else {
                for (var e = t, f = 0, g = b.Ee.length; f < g; f++)
                    if (b.Ee[f] === a) {
                        e = p;
                        break
                    } e || b.Ee.push(a)
            }
        });
        a.addEventListener("removeoverlay", function (a) {
            a = a.target;
            if (a instanceof ib) delete b.Ba[a.ea];
            else
                for (var e = 0, f = b.Ee.length; e < f; e++)
                    if (b.Ee[e] === a) {
                        b.Ee.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function () {
            this.Xc();
            for (var a in b.Ba) b.Ba[a].K.$i && (b.Ba[a].remove(), delete b.Ba[a]);
            a = 0;
            for (var e = b.Ee.length; a < e; a++) b.Ee[a].enableMassClear !== t && (b.Ee[a].remove(), b.Ee[a] = q, b.Ee.splice(a, 1), a--, e--)
        });
        a.addEventListener("infowindowopen", function () {
            var a = this.Fb;
            a && (z.U.$(a.zc), z.U.$(a.cc))
        });
        a.addEventListener("movestart", function () {
            this.dh() && this.dh().vI()
        });
        a.addEventListener("moveend", function () {
            this.dh() && this.dh().kI()
        })
    });
    nc.prototype.draw = function (a) {
        if (D.Jp) {
            var b = D.Jp.os(this.map);
            "canvas" === b.Nb && b.canvas && b.dQ(b.canvas.getContext("2d"))
        }
        for (var c in this.Ba) this.Ba[c].draw(a);
        z.mc.Ob(this.Ee, function (a) {
            a.draw()
        });
        this.map.aa.sb && this.map.aa.sb.ua();
        D.Jp && b.PE()
    };

    function oc(a) {
        ib.call(this);
        a = a || {};
        this.K = {
            strokeColor: a.strokeColor || "#3a6bdb",
            qc: a.strokeWeight || 5,
            ud: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            $i: a.enableMassClear === t ? t : p,
            rk: q,
            gm: q,
            jf: a.enableEditing === p ? p : t,
            sM: 5,
            p0: t,
            ff: a.enableClicking === t ? t : p,
            bi: a.icons && 0 < a.icons.length ? a.icons : q,
            IW: a.geodesic === p ? p : t
        };
        0 >= this.K.qc && (this.K.qc = 5);
        if (0 > this.K.ud || 1 < this.K.ud) this.K.ud = 0.65;
        if (0 > this.K.qg || 1 < this.K.qg) this.K.qg = 0.65;
        "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
        this.ba = q;
        this.qu = new hb(0, 0);
        this.df = [];
        this.rc = [];
        this.Ua = {}
    }
    z.lang.wa(oc, ib, "Graph");
    oc.Mw = function (a) {
        var b = [];
        if (!a) return b;
        bb(a) && z.mc.Ob(a.split(";"), function (a) {
            a = a.split(",");
            b.push(new J(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    oc.nE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    z.extend(oc.prototype, {
        initialize: function (a) {
            this.map = a;
            return q
        },
        draw: u(),
        ir: function (a) {
            this.df.length = 0;
            this.la = oc.Mw(a).slice(0);
            this.uh()
        },
        ke: function (a) {
            this.ir(a)
        },
        uh: function () {
            if (this.la) {
                var a = this;
                a.qu = new hb;
                z.mc.Ob(this.la, function (b) {
                    a.qu.extend(b)
                })
            }
        },
        Te: x("la"),
        Km: function (a, b) {
            b && this.la[a] && (this.df.length = 0, this.la[a] = new J(b.lng, b.lat), this.uh())
        },
        setStrokeColor: function (a) {
            this.K.strokeColor = a
        },
        AX: function () {
            return this.K.strokeColor
        },
        up: function (a) {
            0 < a && (this.K.qc = a)
        },
        bL: function () {
            return this.K.qc
        },
        rp: function (a) {
            a == l || (1 < a || 0 > a) || (this.K.ud = a)
        },
        BX: function () {
            return this.K.ud
        },
        ut: function (a) {
            1 < a || 0 > a || (this.K.qg = a)
        },
        VW: function () {
            return this.K.qg
        },
        sp: function (a) {
            "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
        },
        aL: function () {
            return this.K.strokeStyle
        },
        setFillColor: function (a) {
            this.K.fillColor = a || ""
        },
        UW: function () {
            return this.K.fillColor
        },
        ue: x("qu"),
        remove: function () {
            this.map && this.map.removeEventListener("onmousemove", this.Qu);
            ib.prototype.remove.call(this);
            this.df.length = 0
        },
        jf: function () {
            if (!(2 > this.la.length)) {
                this.K.jf = p;
                var a = this;
                K.load("poly", function () {
                    a.Ll()
                }, p)
            }
        },
        MV: function () {
            this.K.jf = t;
            var a = this;
            K.load("poly", function () {
                a.ek()
            }, p)
        },
        RW: function () {
            return this.K.jf
        },
        XW: function () {
            for (var a = [], b = 0; b < this.la.length - 1; b++) var c = this.OU(this.la[b], this.la[b + 1]),
                a = a.concat(c);
            return a = a.concat(this.la[this.la.length - 1])
        },
        OU: function (a, b) {
            if (a.Yb(b)) return [a];
            var c = S.ve(U(a.lng), U(a.lat), U(b.lng), U(b.lat)),
                c = S.pk(a, b);
            if (25E4 > c) return [a];
            var e = [],
                c = Math.round(c / 15E4),
                f = this.zJ(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.AJ(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        AJ: function (a, b, c, e) {
            var f = U(a.lat),
                g = U(b.lat),
                a = U(a.lng),
                i = U(b.lng),
                b = Math.sin((1 - c) * e) / Math.sin(e),
                c = Math.sin(c * e) / Math.sin(e),
                e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i),
                a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new J(180 * (Math.atan2(a, e) / Math.PI), 180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        zJ: function (a, b) {
            var c = U(a.lat),
                e = U(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(U(b.lng) - U(a.lng))))
        }
    });

    function pc(a) {
        ib.call(this);
        this.ba = this.map = q;
        this.K = {
            width: 0,
            height: 0,
            Da: new P(0, 0),
            opacity: 1,
            background: "transparent",
            tx: 1,
            $L: "#000",
            FY: "solid",
            point: q
        };
        this.vN(a);
        this.point = this.K.point
    }
    z.lang.wa(pc, ib, "Division");
    z.extend(pc.prototype, {
        yj: function () {
            var a = this.K,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.tx + "px " + a.FY + " " + a.$L + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ba = Cb(this.map.Pf().cE, c.join(""))
        },
        initialize: function (a) {
            this.map = a;
            this.yj();
            this.ba && z.V(this.ba, I() ? "touchstart" : "mousedown", function (a) {
                na(a)
            });
            return this.ba
        },
        draw: function () {
            var a = this.map.Xe(this.K.point);
            this.K.Da = new P(-Math.round(this.K.width / 2) - Math.round(this.K.tx), -Math.round(this.K.height / 2) - Math.round(this.K.tx));
            this.ba.style.left = a.x + this.K.Da.width + "px";
            this.ba.style.top = a.y + this.K.Da.height + "px"
        },
        ka: function () {
            return this.K.point
        },
        w1: function () {
            return this.map.Tb(this.ka())
        },
        ua: function (a) {
            this.K.point = a;
            this.draw()
        },
        d_: function (a, b) {
            this.K.width = Math.round(a);
            this.K.height = Math.round(b);
            this.ba && (this.ba.style.width = this.K.width + "px", this.ba.style.height = this.K.height + "px", this.draw())
        }
    });

    function qc(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new P(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new P(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }
    z.extend(qc.prototype, {
        wN: function (a) {
            a && (this.imageUrl = a)
        },
        u_: function (a) {
            a && (this.printImageUrl = a)
        },
        Ce: function (a) {
            a && (this.size = new P(a.width, a.height))
        },
        uc: function (a) {
            a && (this.anchor = new P(a.width, a.height))
        },
        vt: function (a) {
            a && (this.imageOffset = new P(a.width, a.height))
        },
        i_: function (a) {
            a && (this.infoWindowAnchor = new P(a.width, a.height))
        },
        f_: function (a) {
            a && (this.imageSize = new P(a.width, a.height))
        },
        toString: da("Icon")
    });

    function rc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new P(0, 0),
                fillColor: b.fillColor || "#000",
                qg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                ud: b.strokeOpacity || 1,
                qc: b.strokeWeight
            };
            this.Nb = "number" === typeof a ? a : "UserDefined";
            this.zi = this.style.anchor;
            this.Nq = new P(0, 0);
            this.anchor = q;
            this.JA = a;
            var c = this;
            K.load("symbol", function () {
                c.hn()
            }, p)
        }
    }
    z.extend(rc.prototype, {
        setPath: ba("JA"),
        setAnchor: function (a) {
            this.zi = this.style.anchor = a
        },
        setRotation: function (a) {
            this.style.rotation = a
        },
        setScale: function (a) {
            this.style.scale = a
        },
        setStrokeWeight: function (a) {
            this.style.qc = a
        },
        setStrokeColor: function (a) {
            a = z.Er.QB(a, this.style.ud);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function (a) {
            this.style.ud = a
        },
        setFillOpacity: function (a) {
            this.style.qg = a
        },
        setFillColor: function (a) {
            this.style.fillColor = a
        }
    });

    function sc(a, b, c, e) {
        a && (this.jv = {}, this.xK = e ? !!e : t, this.Vc = [], this.N_ = a instanceof rc ? a : q, this.dI = b === l ? p : !!(b.indexOf("%") + 1), this.Rj = isNaN(parseFloat(b)) ? 1 : this.dI ? parseFloat(b) / 100 : parseFloat(b), this.eI = !!(c.indexOf("%") + 1), this.repeat = c != l ? this.eI ? parseFloat(c) / 100 : parseFloat(c) : 0)
    };

    function tc(a, b) {
        z.lang.Ga.call(this);
        this.content = a;
        this.map = q;
        b = b || {};
        this.K = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Da: b.offset || new P(0, 0),
            title: b.title || "",
            eE: b.maxContent || "",
            $g: b.enableMaximize || t,
            bs: b.enableAutoPan === t ? t : p,
            xC: b.enableCloseOnClick === t ? t : p,
            margin: b.margin || [10, 10, 40, 10],
            MB: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            YX: t,
            cZ: b.onClosing || da(p),
            qK: t,
            DC: b.enableParano === p ? p : t,
            message: b.message,
            FC: b.enableSearchTool === p ? p : t,
            bx: b.headerContent || "",
            yC: b.enableContentScroll || t
        };
        if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)) this.K.width = 730;
        if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)) this.K.height = 650;
        if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)) this.K.maxWidth = 730;
        this.de = t;
        this.ui = H.sa;
        this.tb = q;
        var c = this;
        K.load("infowindow", function () {
            c.lb()
        })
    }
    z.lang.wa(tc, z.lang.Ga, "InfoWindow");
    z.extend(tc.prototype, {
        setWidth: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.width = a)
        },
        setHeight: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.K.height = a)
        },
        BN: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.maxWidth = a)
        },
        Dc: function (a) {
            this.K.title = a
        },
        getTitle: function () {
            return this.K.title
        },
        cd: ba("content"),
        ok: x("content"),
        xt: function (a) {
            this.K.eE = a + ""
        },
        je: u(),
        bs: function () {
            this.K.bs = p
        },
        disableAutoPan: function () {
            this.K.bs = t
        },
        enableCloseOnClick: function () {
            this.K.xC = p
        },
        disableCloseOnClick: function () {
            this.K.xC = t
        },
        $g: function () {
            this.K.$g = p
        },
        Aw: function () {
            this.K.$g = t
        },
        show: function () {
            this.Ta = p
        },
        $: function () {
            this.Ta = t
        },
        close: function () {
            this.$()
        },
        wx: function () {
            this.de = p
        },
        restore: function () {
            this.de = t
        },
        Pc: function () {
            return this.Za()
        },
        Za: da(t),
        ka: function () {
            if (this.tb && this.tb.ka) return this.tb.ka()
        },
        ej: function () {
            return this.K.Da
        }
    });
    Oa.prototype.ad = function (a, b) {
        if (a instanceof tc && b instanceof J) {
            var c = this.aa;
            c.tm ? c.tm.ua(b) : (c.tm = new W(b, {
                icon: new qc(H.sa + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new P(0, 0),
                clickable: t
            }), c.tm.bR = 1);
            this.Pa(c.tm);
            c.tm.ad(a)
        }
    };
    Oa.prototype.Xc = function () {
        var a = this.aa.sb || this.aa.jl;
        a && a.tb && a.tb.Xc()
    };
    ib.prototype.ad = function (a) {
        this.map && (this.map.Xc(), a.Ta = p, this.map.aa.jl = a, a.tb = this, z.lang.Ga.call(a, a.ea))
    };
    ib.prototype.Xc = function () {
        this.map && this.map.aa.jl && (this.map.aa.jl.Ta = t, z.lang.yw(this.map.aa.jl.ea), this.map.aa.jl = q)
    };

    function uc(a, b) {
        ib.call(this);
        this.content = a;
        this.ba = this.map = q;
        b = b || {};
        this.K = {
            width: 0,
            Da: b.offset || new P(0, 0),
            zp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + H.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || q,
            $i: b.enableMassClear === t ? t : p,
            ff: p,
            left: b.left === p ? p : t,
            right: b.right === p ? p : t
        };
        0 > this.K.width && (this.K.width = 0);
        Ib(b.enableClicking) && (this.K.ff = b.enableClicking);
        this.point = this.K.position;
        var c = this;
        K.load("marker", function () {
            c.lb()
        })
    }
    z.lang.wa(uc, ib, "Label");
    z.extend(uc.prototype, {
        ka: function () {
            return this.Yu ? this.Yu.ka() : this.point
        },
        ua: function (a) {
            a instanceof J && !this.Qw() && (this.point = this.K.position = new J(a.lng, a.lat))
        },
        cd: ba("content"),
        OE: function (a) {
            0 <= a && 1 >= a && (this.K.opacity = a)
        },
        Md: function (a) {
            a instanceof P && (this.K.Da = new P(a.width, a.height))
        },
        ej: function () {
            return this.K.Da
        },
        Nd: function (a) {
            a = a || {};
            this.K.zp = z.extend(this.K.zp, a)
        },
        pi: function (a) {
            return this.Nd(a)
        },
        Dc: function (a) {
            this.K.title = a || ""
        },
        getTitle: function () {
            return this.K.title
        },
        AN: function (a) {
            this.point = (this.Yu = a) ? this.K.position = a.ka() : this.K.position = q
        },
        Qw: function () {
            return this.Yu || q
        },
        ok: x("content")
    });

    function vc(a, b) {
        if (0 !== arguments.length) {
            ib.apply(this, arguments);
            b = b || {};
            this.K = {
                gb: a,
                opacity: b.opacity || 1,
                So: b.imageURL || "",
                Tr: b.displayOnMinLevel || 1,
                $i: b.enableMassClear === t ? t : p,
                Sr: b.displayOnMaxLevel || 19,
                H_: b.stretch || t
            };
            0 === b.opacity && (this.K.opacity = 0);
            var c = this;
            K.load("groundoverlay", function () {
                c.lb()
            })
        }
    }
    z.lang.wa(vc, ib, "GroundOverlay");
    z.extend(vc.prototype, {
        setBounds: function (a) {
            this.K.gb = a
        },
        getBounds: function () {
            return this.K.gb
        },
        setOpacity: function (a) {
            this.K.opacity = a
        },
        getOpacity: function () {
            return this.K.opacity
        },
        setImageURL: function (a) {
            this.K.So = a
        },
        getImageURL: function () {
            return this.K.So
        },
        setDisplayOnMinLevel: function (a) {
            this.K.Tr = a
        },
        getDisplayOnMinLevel: function () {
            return this.K.Tr
        },
        setDisplayOnMaxLevel: function (a) {
            this.K.Sr = a
        },
        getDisplayOnMaxLevel: function () {
            return this.K.Sr
        }
    });
    var wc = 3,
        xc = 4;

    function yc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function zc(a, b) {
        var c = this;
        yc() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, ib.apply(c, arguments), c.ha = {
            la: a
        }, c.K = {
            shape: b.shape || wc,
            size: b.size || xc,
            color: b.color || "#fa937e",
            $i: p
        }, this.GA = [], this.oe = [], K.load("pointcollection", function () {
            for (var a = 0, b; b = c.GA[a]; a++) c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.oe[a]; a++) c[b.method].apply(c, b.arguments)
        }))
    }
    z.lang.wa(zc, ib, "PointCollection");
    z.extend(zc.prototype, {
        initialize: function (a) {
            this.GA && this.GA.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function (a) {
            this.oe && this.oe.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function (a) {
            this.oe && this.oe.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function () {
            this.oe && this.oe.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function () {
            this.oe && this.oe.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var Ac = new qc(H.sa + "marker_red_sprite.png", new P(19, 25), {
            anchor: new P(10, 25),
            infoWindowAnchor: new P(10, 0)
        }),
        Bc = new qc(H.sa + "marker_red_sprite.png", new P(20, 11), {
            anchor: new P(6, 11),
            imageOffset: new P(-19, -13)
        });

    function W(a, b) {
        ib.call(this);
        b = b || {};
        this.point = a;
        this.Xp = this.map = q;
        this.K = {
            Da: b.offset || new P(0, 0),
            we: b.icon || Ac,
            Jk: Bc,
            title: b.title || "",
            label: q,
            uJ: b.baseZIndex || 0,
            ff: p,
            d6: t,
            SD: t,
            $i: b.enableMassClear === t ? t : p,
            Xb: t,
            dN: b.raiseOnDrag === p ? p : t,
            lN: t,
            Hd: b.draggingCursor || H.Hd,
            rotation: b.rotation || 0,
            left: b.left === p ? p : t,
            right: b.right === p ? p : t
        };
        b.icon && !b.shadow && (this.K.Jk = q);
        b.enableDragging && (this.K.Xb = b.enableDragging);
        Ib(b.enableClicking) && (this.K.ff = b.enableClicking);
        var c = this;
        K.load("marker", function () {
            c.lb()
        })
    }
    W.lu = mc.vk(-90) + 1E6;
    W.OF = W.lu + 1E6;
    z.lang.wa(W, ib, "Marker");
    z.extend(W.prototype, {
        Vb: function (a) {
            if (a instanceof qc || a instanceof rc) this.K.we = a
        },
        Ho: function () {
            return this.K.we
        },
        ay: function (a) {
            a instanceof qc && (this.K.Jk = a)
        },
        getShadow: function () {
            return this.K.Jk
        },
        Im: function (a) {
            this.K.label = a || q
        },
        hD: function () {
            return this.K.label
        },
        Xb: function () {
            this.K.Xb = p
        },
        fC: function () {
            this.K.Xb = t
        },
        ka: x("point"),
        ua: function (a) {
            a instanceof J && (this.point = new J(a.lng, a.lat))
        },
        qi: function (a, b) {
            this.K.SD = !!a;
            a && (this.lG = b || 0)
        },
        Dc: function (a) {
            this.K.title = a + ""
        },
        getTitle: function () {
            return this.K.title
        },
        Md: function (a) {
            a instanceof P && (this.K.Da = a)
        },
        ej: function () {
            return this.K.Da
        },
        Hm: ba("Xp"),
        qp: function (a) {
            this.K.rotation = a
        },
        ZK: function () {
            return this.K.rotation
        }
    });

    function Cc(a) {
        this.options = a || {};
        this.gZ = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.lV = this.options.contextType || "2d"
    }
    Cc.prototype = new mc;
    Cc.prototype.initialize = function (a) {
        this.M = a;
        var b = this.canvas = document.createElement("canvas"),
            c = this.canvas.getContext(this.lV);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        Dc(this);
        Ec(c);
        a.getPanes()[this.gZ].appendChild(b);
        var e = this;
        a.addEventListener("resize", function () {
            Dc(e);
            Ec(c);
            e.lb()
        });
        return this.canvas
    };

    function Dc(a) {
        var b = a.M.Eb(),
            a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }

    function Ec(a) {
        var b = (window.devicePixelRatio || 1) / (a.xU || a.Y5 || a.w4 || a.x4 || a.B4 || a.xU || 1),
            c = a.canvas.width,
            e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    Cc.prototype.draw = function () {
        var a = this,
            b = arguments;
        clearTimeout(a.W_);
        a.W_ = setTimeout(function () {
            a.lb.apply(a, b)
        }, 15)
    };
    fa = Cc.prototype;
    fa.lb = function () {
        var a = this.M;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    };
    fa.Ra = x("canvas");
    fa.show = function () {
        this.canvas || this.M.Pa(this);
        this.canvas.style.display = "block"
    };
    fa.$ = function () {
        this.canvas.style.display = "none"
    };
    fa.vp = function (a) {
        this.canvas.style.zIndex = a
    };
    fa.vk = x("zIndex");

    function Fc(a, b) {
        oc.call(this, b);
        b = b || {};
        this.K.qg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.ke(a);
        var c = this;
        K.load("poly", function () {
            c.lb()
        })
    }
    z.lang.wa(Fc, oc, "Polygon");
    z.extend(Fc.prototype, {
        ke: function (a, b) {
            this.Wn = oc.Mw(a).slice(0);
            var c = oc.Mw(a).slice(0);
            1 < c.length && c.push(new J(c[0].lng, c[0].lat));
            oc.prototype.ke.call(this, c, b)
        },
        Km: function (a, b) {
            this.Wn[a] && (this.Wn[a] = new J(b.lng, b.lat), this.la[a] = new J(b.lng, b.lat), 0 == a && !this.la[0].Yb(this.la[this.la.length - 1]) && (this.la[this.la.length - 1] = new J(b.lng, b.lat)), this.uh())
        },
        Te: function () {
            var a = this.Wn;
            0 == a.length && (a = this.la);
            return a
        }
    });

    function Gc(a, b) {
        oc.call(this, b);
        this.ir(a);
        var c = this;
        K.load("poly", function () {
            c.lb()
        })
    }
    z.lang.wa(Gc, oc, "Polyline");

    function Hc(a, b, c) {
        this.point = a;
        this.Ca = Math.abs(b);
        Fc.call(this, [], c)
    }
    Hc.nE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    z.lang.wa(Hc, Fc, "Circle");
    z.extend(Hc.prototype, {
        initialize: function (a) {
            this.map = a;
            this.la = this.Lu(this.point, this.Ca);
            this.uh();
            return q
        },
        Db: x("point"),
        rf: function (a) {
            a && (this.point = a)
        },
        XK: x("Ca"),
        sf: function (a) {
            this.Ca = Math.abs(a)
        },
        Lu: function (a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i,
                    m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
                    k = new J(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new J(e.lng, e.lat));
            return c
        }
    });
    var Ic = {};

    function Jc(a) {
        this.map = a;
        this.pj = [];
        this.Xf = [];
        this.Cg = [];
        this.MU = 300;
        this.uE = 0;
        this.wg = {};
        this.Vi = {};
        this.zk = 0;
        this.MD = p;
        this.BV = {};
        this.Gn = this.hq(1);
        this.lg = this.hq(2);
        this.tl = this.hq(3);
        this.eg = this.hq(4);
        a.platform.appendChild(this.Gn);
        a.platform.appendChild(this.lg);
        a.platform.appendChild(this.tl);
        a.platform.appendChild(this.eg);
        var b = 256 * Math.pow(2, 15),
            c = 3 * b,
            a = S.hb(new J(180, 0)).lng,
            c = c - a,
            b = -3 * b,
            e = S.hb(new J(-180, 0)).lng;
        this.nA = a;
        this.oA = e;
        this.kA = c + (e - b);
        this.JH = a - e
    }
    D.Ye(function (a) {
        var b = new Jc(a);
        b.xa();
        a.Ze = b
    });
    z.extend(Jc.prototype, {
        xa: function () {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function () {
                a.Yo()
            });
            b.addEventListener("addtilelayer", function (b) {
                a.Oe(b)
            });
            b.addEventListener("removetilelayer", function (b) {
                a.Wf(b)
            });
            b.addEventListener("setmaptype", function (b) {
                a.Bg(b)
            });
            b.addEventListener("zoomstartcode", function (b) {
                a.Mc(b)
            });
            b.addEventListener("setcustomstyles", function (b) {
                a.wt(b.target);
                a.Uf(p)
            });
            b.addEventListener("initindoorlayer", function (b) {
                a.HD(b)
            })
        },
        Yo: function () {
            var a = this;
            if (z.fa.na) try {
                document.execCommand("BackgroundImageCache", t, p)
            } catch (b) {}
            this.loaded || a.jx();
            a.Uf();
            this.loaded || (this.loaded = p, K.load("tile", function () {
                a.yP()
            }))
        },
        HD: function (a) {
            this.Vt = new Kc(this);
            this.Vt.Oe(new Lc(this.map, this.Vt, a.Ve))
        },
        jx: function () {
            for (var a = this.map.va().cf, b = 0; b < a.length; b++) {
                var c = new Mc;
                z.extend(c, a[b]);
                this.pj.push(c);
                c.xa(this.map, this.Gn)
            }
            this.wt()
        },
        hq: function (a) {
            var b = O("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        xf: function () {
            this.zk--;
            var a = this;
            this.MD && (this.map.dispatchEvent(new Q("onfirsttileloaded")), this.MD = t);
            0 == this.zk && (this.Ei && (clearTimeout(this.Ei), this.Ei = q), this.Ei = setTimeout(function () {
                if (a.zk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    a.MD = p
                }
                a.Ei = q
            }, 80))
        },
        tD: function (a, b) {
            return "TILE-" + b.ea + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        fx: function (a) {
            var b = a.Jb;
            b && Bb(b) && b.parentNode.removeChild(b);
            delete this.wg[a.name];
            a.loaded || (Nc(a), a.Jb = q, a.um = q)
        },
        gL: function (a, b, c) {
            var e = this.map,
                f = e.va(),
                g = e.Va,
                i = e.ac,
                k = f.$b(g),
                m = this.OW(),
                n = m[0],
                o = m[1],
                s = m[2],
                v = m[3],
                w = m[4],
                c = "undefined" != typeof c ? c : 0,
                f = f.Jd(),
                m = e.ea.replace(/^TANGRAM_/, "");
            for (this.De ? this.De.length = 0 : this.De = []; n < s; n++)
                for (var y = o; y < v; y++) {
                    var A = n,
                        B = y;
                    this.De.push([A, B]);
                    A = m + "_" + b + "_" + A + "_" + B + "_" + g;
                    this.BV[A] = A
                }
            this.De.sort(function (a) {
                return function (b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Pe ? this.Pe.length = 0 : this.Pe = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n], y.Fq = t, this.Pe.push(y);
            if (n = this.xm)
                for (var C in n) delete n[C];
            else this.xm = {};
            this.Qe ? this.Qe.length = 0 : this.Qe = [];
            n = 0;
            for (e = this.De.length; n < e; n++) {
                C = this.De[n][0];
                k = this.De[n][1];
                y = 0;
                for (o = this.Pe.length; y < o; y++)
                    if (s = this.Pe[y], s.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
                        s.Fq = p;
                        this.xm[s.id] = s;
                        break
                    }
            }
            n = 0;
            for (e = this.Pe.length; n < e; n++) s = this.Pe[n], s.Fq || this.Qe.push(s);
            this.fF = [];
            y = (f + c) * this.map.R.devicePixelRatio;
            n = 0;
            for (e = this.De.length; n < e; n++) C = this.De[n][0], k = this.De[n][1], v = C * f + i[0] - c / 2, w = (-1 - k) * f + i[1] - c / 2, A = m + "_" + b + "_" + C + "_" + k + "_" + g, o = this.xm[A], s = q, o ? (s = o.style, s.left = v + "px", s.top = w + "px", o.tn || this.fF.push([C, k, o])) : (0 < this.Qe.length ? (o = this.Qe.shift(), o.getContext("2d").clearRect(-c / 2, -c / 2, y, y), s = o.style) : (o = document.createElement("canvas"), s = o.style, s.position = "absolute", s.width = f + c + "px", s.height = f + c + "px", this.yY() && (s.WebkitTransform = "scale(1.001)"), o.setAttribute("width", y), o.setAttribute("height", y), a.appendChild(o)), o.id = A, s.left = v + "px", s.top = w + "px", -1 < A.indexOf("bg") && (v = "#F3F1EC", this.map.R.vU && (v = this.map.R.vU), s.background = v ? v : ""), this.fF.push([C, k, o])), o.style.visibility = "";
            n = 0;
            for (e = this.Qe.length; n < e; n++) this.Qe[n].style.visibility = "hidden";
            return this.fF
        },
        yY: function () {
            return /M040/i.test(navigator.userAgent)
        },
        OW: function () {
            var a = this.map,
                b = a.va(),
                c = b.lL(a.Va),
                e = a.ac,
                f = Math.ceil(e.lng / c),
                g = Math.ceil(e.lat / c),
                b = b.Jd(),
                c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        B_: function (a, b, c, e) {
            var f = this;
            f.k2 = b;
            var g = this.map.va(),
                i = f.tD(a, c),
                k = g.Jd(),
                b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
                m = this.wg[i];
            if (this.map.va() !== ab && this.map.va() !== Va) {
                var n = this.aw(a[0], a[2]).offsetX;
                b[0] += n;
                b.D1 = n
            }
            m && m.Jb ? (zb(m.Jb, b), e && (e = new R(a[0], a[1]), g = this.map.R.ye ? this.map.R.ye.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Oc(m, e)), m.loaded ? this.xf() : Pc(m, function () {
                f.xf()
            })) : (m = this.Vi[i]) && m.Jb ? (c.Lb.insertBefore(m.Jb, c.Lb.lastChild), this.wg[i] = m, zb(m.Jb, b), e && (e = new R(a[0], a[1]), g = this.map.R.ye ? this.map.R.ye.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Oc(m, e)), m.loaded ? this.xf() : Pc(m, function () {
                f.xf()
            })) : (m = k * Math.pow(2, g.Zh() - a[2]), new J(a[0] * m, a[1] * m), e = new R(a[0], a[1]), g = this.map.R.ye ? this.map.R.ye.style : "normal", e = c.getTilesUrl(e, a[2], g), m = new Rc(this, e, b, a, c), Pc(m, function () {
                f.xf()
            }), m.Fn(), this.wg[i] = m)
        },
        xf: function () {
            this.zk--;
            var a = this;
            0 == this.zk && (this.Ei && (clearTimeout(this.Ei), this.Ei = q), this.Ei = setTimeout(function () {
                if (a.zk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    if (wa) {
                        if (sa && ta && ua) {
                            var b = eb(),
                                c = a.map.Eb();
                            setTimeout(function () {
                                Ta(5030, {
                                    load_script_time: ta - sa,
                                    load_tiles_time: b - ua,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            D.Vp("cus.fire", "time", {
                                z_imgfirstloaded: b - ua
                            })
                        }
                        wa = t
                    }
                }
                a.Ei = q
            }, 80))
        },
        tD: function (a, b) {
            return this.map.va() === Sa ? "TILE-" + b.ea + "-" + this.map.hw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ea + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        fx: function (a) {
            var b = a.Jb;
            b && (Sc(b), Bb(b) && b.parentNode.removeChild(b));
            delete this.wg[a.name];
            a.loaded || (Sc(b), Nc(a), a.Jb = q, a.um = q)
        },
        aw: function (a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e, c -= this.kA;
            for (; a < g;) a += e, c += this.kA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                Vl: a
            }
        },
        QU: function (a) {
            for (var b = a.lng; b > this.nA;) b -= this.JH;
            for (; b < this.oA;) b += this.JH;
            a.lng = b;
            return a
        },
        RU: function (a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.nA / c), f = Math.floor(this.oA / c), c = Math.floor(this.kA / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i],
                    m = k[0],
                    k = k[1];
                if (m >= e) {
                    var m = m + c,
                        n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p, g.push([m, k]))
                } else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([m, k])))
            }
            for (i = 0; i < g.length; i++) a.push(g[i]);
            return a
        },
        Uf: function (a) {
            if (!this.map.R.pg) {
                var b = this;
                if (b.map.va() == Sa) K.load("coordtrans", function () {
                    b.map.Sb || (b.map.Sb = Sa.nk(b.map.Xg), b.map.hw = Sa.JK(b.map.Sb));
                    b.LH()
                }, p);
                else {
                    if (a && a)
                        for (var c in this.Vi) delete this.Vi[c];
                    b.LH(a)
                }
            }
        },
        LH: function (a) {
            var b = this.pj.concat(this.Xf),
                c = b.length,
                e = this.map,
                f = e.va(),
                g = e.ac,
                i = e.width,
                i = e.va().$b(e.Va) * i,
                i = this.nY(g.lng - i / 2, g.lng + i / 2);
            this.map.va() !== ab && this.map.va() !== Va && (g = this.QU(g));
            for (var k = 0; k < c; k++) {
                var m = b[k];
                if (m.jc && e.Va < m.jc) break;
                if (m.$v) {
                    var n = this.Lb = m.Lb;
                    if (a) {
                        var o = n;
                        if (o && o.childNodes)
                            for (var s = o.childNodes.length, v = s - 1; 0 <= v; v--) s = o.childNodes[v], o.removeChild(s), s = q
                    }
                    if (this.map.Pd()) {
                        this.lg.style.display = "block";
                        n.style.display = "none";
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: p
                        });
                        continue
                    } else n.style.display = "block", this.lg.style.display = "none", this.map.dispatchEvent(new Q("vectorchanged"), {
                        isvector: t
                    })
                }
                if (!m.C1 && !(m.ox && !this.map.Pd() || m.ML && this.map.Pd())) {
                    e = this.map;
                    f = e.va();
                    n = f.tk();
                    s = e.Va;
                    g = e.ac;
                    f == Sa && g.Yb(new J(0, 0)) && (g = e.ac = n.ei(e.qe, e.Sb));
                    var w = f.$b(s),
                        n = f.lL(s),
                        o = Math.ceil(g.lng / n),
                        y = Math.ceil(g.lat / n),
                        A = f.Jd(),
                        n = [o, y, (g.lng - o * n) / n * A, (g.lat - y * n) / n * A],
                        y = i ? 1.5 * (e.width / 2) : e.width / 2,
                        v = n[0] - Math.ceil((y - n[2]) / A),
                        o = n[1] - Math.ceil((e.height / 2 - n[3]) / A),
                        y = n[0] + Math.ceil((y + n[2]) / A),
                        B = 0;
                    f === Sa && 15 == e.ja() && (B = 1);
                    f = n[1] + Math.ceil((e.height / 2 + n[3]) / A) + B;
                    this.pJ = new J(g.lng, g.lat);
                    var C = this.wg,
                        A = -this.pJ.lng / w,
                        B = this.pJ.lat / w,
                        g = [Math.ceil(A), Math.ceil(B)],
                        w = e.ja(),
                        F;
                    for (F in C) {
                        var E = C[F],
                            G = E.info;
                        (G[2] != w || G[2] == w && (v > G[0] || y <= G[0] || o > G[1] || f <= G[1])) && this.fx(E)
                    }
                    C = -e.offsetX + e.width / 2;
                    E = -e.offsetY + e.height / 2;
                    m.Lb && (m.Lb.style.left = Math.ceil(A + C) - g[0] + "px", m.Lb.style.top = Math.ceil(B + E) - g[1] + "px", m.Lb.style.WebkitTransform = "translate3d(0,0,0)");
                    A = [];
                    for (e.jB = []; v < y; v++)
                        for (B = o; B < f; B++) A.push([v, B]), e.jB.push({
                            x: v,
                            y: B
                        });
                    this.map.va() !== ab && this.map.va() !== Va && (A = this.RU(A, s));
                    A.sort(function (a) {
                        return function (b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([n[0] - 1, n[1] - 1]));
                    s = A.length;
                    this.zk += s;
                    for (v = 0; v < s; v++) this.B_([A[v][0], A[v][1], w], g, m, a)
                }
            }
        },
        nY: function (a, b) {
            return a < this.oA || b > this.nA
        },
        Oe: function (a) {
            var b = this,
                c = a.target;
            b.map.Pd();
            c.Sm && this.map.Oe(c.Sm);
            if (c.ox) {
                for (a = 0; a < b.Cg.length; a++)
                    if (b.Cg[a] == c) return;
                K.load("vector", function () {
                    c.xa(b.map, b.lg);
                    b.Cg.push(c)
                }, p)
            } else {
                for (a = 0; a < b.Xf.length; a++)
                    if (b.Xf[a] == c) return;
                c.xa(this.map, this.tl);
                b.Xf.push(c)
            }
        },
        Wf: function (a) {
            a = a.target;
            this.map.Pd();
            a.Sm && this.map.Wf(a.Sm);
            if (a.ox)
                for (var b = 0, c = this.Cg.length; b < c; b++) a == this.Cg[b] && this.Cg.splice(b, 1);
            else {
                b = 0;
                for (c = this.Xf.length; b < c; b++) a == this.Xf[b] && this.Xf.splice(b, 1)
            }
            a.remove()
        },
        Bg: function () {
            for (var a = this.pj, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.Lb;
            this.pj = [];
            this.Vi = this.wg = {};
            this.jx();
            this.Uf()
        },
        Mc: function () {
            var a = this;
            a.xd && z.U.$(a.xd);
            setTimeout(function () {
                a.Uf();
                a.map.dispatchEvent(new Q("onzoomend"))
            }, 10)
        },
        R5: u(),
        wt: function (a) {
            var b = this.map.va();
            if (!this.map.Pd() && (a ? this.map.R.K_ = a : a = this.map.R.K_, a))
                for (var c = q, c = "2" == D.Ut ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.pj[e]; e++)
                    if (f.w_ == p) {
                        b.m.pc = 18;
                        f.getTilesUrl = function (b, e) {
                            var f = b.x,
                                f = this.map.Ze.aw(f, e).Vl,
                                m = b.y,
                                n = Sb("normal"),
                                o = 1;
                            this.map.gx() && (o = 2);
                            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            return c[Math.abs(f + m) % c.length] + n
                        };
                        break
                    }
        }
    });

    function Rc(a, b, c, e, f) {
        this.um = a;
        this.position = c;
        this.wu = [];
        this.name = a.tD(e, f);
        this.info = e;
        this.QI = f.Qs();
        e = O("img");
        Ab(e);
        e.CK = t;
        var g = e.style,
            a = a.map.va();
        g.position = "absolute";
        g.border = "none";
        g.width = a.Jd() + "px";
        g.height = a.Jd() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Jb = e;
        this.src = b;
        Tc && (this.Jb.style.opacity = 0);
        var i = this;
        this.Jb.onload = function () {
            D.GY.lQ();
            i.loaded = p;
            if (i.um) {
                var a = i.um,
                    b = a.Vi;
                if (!b[i.name]) {
                    a.uE++;
                    b[i.name] = i
                }
                if (i.Jb && !Bb(i.Jb) && f.Lb) {
                    f.Lb.appendChild(i.Jb);
                    if (z.fa.na <= 6 && z.fa.na > 0 && i.QI) i.Jb.style.cssText = i.Jb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.uE - a.MU,
                    e;
                for (e in b) {
                    if (c <= 0) break;
                    if (!a.wg[e]) {
                        b[e].um = q;
                        var g = b[e].Jb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Sc(g)
                        }
                        g = q;
                        b[e].Jb = q;
                        delete b[e];
                        a.uE--;
                        c--
                    }
                }
                Tc && new vb({
                    Ic: 20,
                    duration: 200,
                    za: function (a) {
                        if (i.Jb && i.Jb.style) i.Jb.style.opacity = a * 1
                    },
                    finish: function () {
                        i.Jb && i.Jb.style && delete i.Jb.style.opacity
                    }
                });
                Nc(i)
            }
        };
        this.Jb.onerror = function () {
            Nc(i);
            if (i.um) {
                var a = i.um.map.va();
                if (a.m.IC) {
                    i.error = p;
                    i.Jb.src = a.m.IC;
                    i.Jb && !Bb(i.Jb) && f.Lb.appendChild(i.Jb)
                }
            }
        };
        e = q
    }

    function Pc(a, b) {
        a.wu.push(b)
    }
    Rc.prototype.Fn = function () {
        this.Jb.src = 0 < z.fa.na && 6 >= z.fa.na && this.QI ? H.sa + "blank.gif" : "" !== this.src && this.Jb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    };

    function Nc(a) {
        for (var b = 0; b < a.wu.length; b++) a.wu[b]();
        a.wu.length = 0
    }

    function Sc(a) {
        if (a) {
            a.onload = a.onerror = q;
            var b = a.attributes,
                c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1) f = b[c].name, $a(a[f]) && (a[f] = q)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1) Sc(a.children[c])
            }
        }
    }

    function Oc(a, b) {
        a.src = b;
        a.Fn()
    }
    var Tc = !z.fa.na || 8 < z.fa.na;

    function Mc(a) {
        this.Ve = a || {};
        this.nV = this.Ve.copyright || q;
        this.k0 = this.Ve.transparentPng || t;
        this.$v = this.Ve.baseLayer || t;
        this.zIndex = this.Ve.zIndex || 0;
        this.ea = Mc.UR++
    }
    Mc.UR = 0;
    z.lang.wa(Mc, z.lang.Ga, "TileLayer");
    z.extend(Mc.prototype, {
        xa: function (a, b) {
            this.$v && (this.zIndex = -100);
            this.map = a;
            if (!this.Lb) {
                var c = O("div"),
                    e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Lb = c
            }
        },
        remove: function () {
            this.Lb && this.Lb.parentNode && (this.Lb.innerHTML = "", this.Lb.parentNode.removeChild(this.Lb));
            delete this.Lb
        },
        Qs: x("k0"),
        getTilesUrl: function (a, b) {
            if (this.map.va() !== ab && this.map.va() !== Va) var c = this.map.Ze.aw(a.x, b).Vl;
            var e = "";
            this.Ve.tileUrlTemplate && (e = this.Ve.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(/\{Y\}/, a.y), e = e.replace(/\{Z\}/, b));
            return e
        },
        dm: x("nV"),
        va: function () {
            return this.yb || Pa
        }
    });

    function Uc(a) {
        Mc.call(this, a);
        this.m = a || {};
        this.ML = p;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
        }
        this.VT = D.url.proto + D.url.domain.traffic + "/traffic/"
    }
    Uc.prototype = new Mc;
    Uc.prototype.xa = function (a, b) {
        Mc.prototype.xa.call(this, a, b);
        this.M = a
    };
    Uc.prototype.Qs = da(p);
    Uc.prototype.getTilesUrl = function (a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
        var c = this.VT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
            e = 1;
        this.M.gx() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Vc = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Wc = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Xc = 100;

    function pb(a, b) {
        Mc.call(this);
        var c = this;
        this.ML = p;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {}
        Jb(a) ? b = a || {} : (c.qn = a, b = b || {});
        b.geotableId && (c.zf = b.geotableId);
        b.databoxId && (c.qn = b.databoxId);
        var f = D.od + "geosearch";
        c.$a = {
            WM: b.pointDensity || Xc,
            TX: f + "/detail/",
            UX: f + "/v2/detail/",
            mJ: b.age || 36E5,
            kt: b.q || "",
            V_: "png",
            R3: [5, 5, 5, 5],
            CY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            wB: b.ak || qa,
            bF: b.tags || "",
            filter: b.filter || "",
            NN: b.sortby || "",
            zD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            qF: p
        };
        K.load("clayer", function () {
            c.Sd()
        })
    }
    pb.prototype = new Mc;
    pb.prototype.xa = function (a, b) {
        Mc.prototype.xa.call(this, a, b);
        this.M = a
    };
    pb.prototype.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y,
            f = this.$a,
            c = Vc[Math.abs(c + e) % Vc.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.kt + "&tags=" + f.bF + "&filter=" + f.filter + "&sortby=" + f.NN + "&ak=" + this.$a.wB + "&age=" + f.mJ + "&page_size=" + f.WM + "&format=" + f.V_;
        f.qF || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
        this.zf ? c += "&geotable_id=" + this.zf : this.qn && (c += "&databox_id=" + this.qn);
        return c
    };
    pb.prototype.enableUseCache = function () {
        this.$a.qF = p
    };
    pb.prototype.disableUseCache = function () {
        this.$a.qF = t
    };
    pb.tT = /^point\(|\)$/ig;
    pb.uT = /\s+/;
    pb.wT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Yc = {};

    function Zc(a, b) {
        this.jd = a;
        this.BP = 18;
        this.m = {
            my: 256,
            Kc: new S
        };
        z.extend(this.m, b || {})
    }
    var $c = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
        ad = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
        bd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
        cd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    Zc.prototype = {
        getName: x("jd"),
        Jd: function (a) {
            return "na" === this.jd ? cd[a] : this.m.my
        },
        ns: function (a) {
            return "na" === this.jd ? bd[a] : a
        },
        tk: function () {
            return this.m.Kc
        },
        $b: function (a) {
            return Math.pow(2, this.BP - a)
        },
        kD: function (a) {
            return "na" === this.jd ? ad[$c[a]] : this.$b(a) * this.Jd(a)
        }
    };
    var dd = {
        drawPoly: function (a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0],
                        n = f.jj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][1];
                            f.Pc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.zm(v[1], c, e, a)), v = v["cache" + c], f.M.ao(b.canvas.id, v, {
                                type: "polygon",
                                Wb: m,
                                style: n
                            }), this.dW(b, v, n, c))
                        }
                }
        },
        dW: function (a, b, c, e) {
            c = c[0];
            if (!c.Wb || !(6 < e && (71013 === c.Wb || 71012 === c.Wb || 71011 === c.Wb) || 6 === e && (71011 === c.Wb || 71012 === c.Wb) || 5 === e && (71011 === c.Wb || 71013 === c.Wb) || 5 > e && (71012 === c.Wb || 71013 === c.Wb))) {
                a.fillStyle = c.Gw;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.lo, a.lineWidth = c.borderWidth / 2, a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0],
                        m = f.jj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Pc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.zm(s[1], c, e, a)), s = s["cache" + c], f.M.ao(b.canvas.id, s, {
                                type: "polygon",
                                Wb: k,
                                style: m
                            }), this.fW(b, s, m))
                        }
                }
        },
        drawGaoqingRoadFill: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0],
                        m = f.jj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Pc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.zm(s[1], c, e, a)), s = s["cache" + c], f.M.ao(b.canvas.id, s, {
                                type: "polygon",
                                Wb: k,
                                style: m
                            }), this.gW(b, s, m))
                        }
                }
        },
        fW: function (a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.lo;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        gW: function (a, b, c) {
            a.fillStyle = c[0].Gw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var ed = {
        drawArrow: function (a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.zm(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Pc(a[i], c)) {
                        var k = e[4 * i],
                            m = e[4 * i + 1],
                            n = e[4 * i + 2],
                            o = e[4 * i + 3],
                            s = (k + n) / 2,
                            v = (m + o) / 2,
                            n = (k - n) / f,
                            o = (m - o) / f,
                            k = s + n / 2,
                            n = s - n / 2,
                            m = v + o / 2,
                            o = v - o / 2;
                        this.XV(b, k, m, n, o)
                    }
            }
        },
        XV: function (a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.NU([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        NU: function (a, b) {
            var c = b[0] - a[0],
                e = b[1] - a[1],
                f = 1.8 * Math.sqrt(c * c + e * e),
                g = b[0] + 4.8410665352790705 * (c / f),
                f = b[1] + 4.8410665352790705 * (e / f),
                c = Math.atan2(e, c) + Math.PI;
            return [
                [g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)],
                [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]
            ]
        }
    };
    var fd = {
        drawHregion: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0],
                        m = f.jj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][2];
                            if (f.Pc(s[0], c)) {
                                var v = s[2];
                                s["cache" + c] || (s["cache" + c] = f.zm(s[1], c, e, a));
                                s = s["cache" + c];
                                f.M.ao(b.canvas.id, s, {
                                    type: "polygon",
                                    Wb: k,
                                    style: m
                                });
                                this.eW(b, s, v, m)
                            }
                        }
                }
        },
        eW: function (a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.wW;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.lo, a.lineWidth = e.borderWidth / 2, a.stroke());
                a.fill()
            }
        }
    };
    var gd = {
        parse: function (a, b, c, e, f) {
            for (var g = e.M, i = g.ja(), k = Math.pow(2, 18 - i), m = g.Kc.ei(g.Db()), n = m.lng, o = m.lat, m = g.Eb(), s = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = [],
                    A = a[w].T_;
                y.x = A[0];
                y.y = A[1];
                y.c6 = A[2];
                for (var B = (A[0] * c * k - n) / k + s / 2, C = (o - (A[1] + 1) * c * k) / k + v / 2, F = 0; F < a[w].length; F++) a[w][F].SL ? this.SM(a[w][F].SL, A, e, b, c, B, C, i, k, s, v, y) : a[w][F].$X ? this.SM(a[w][F].$X, A, e, b, c, B, C, i, k, s, v, y, p, window.V3) : this.mZ(a[w][F].DY, A, e, b, c, B, C, i, k, s, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++)
                    for (F = 0; F < m[w].length; F++) a.push(m[w][F])
            } else a = this.zZ(m, e.M.ja());
            g.cV();
            for (w = 0; w < a.length; w++)
                if (c = a[w], !c.Ls)
                    if (F = [c.Sf, c.Tf, c.Sf, c.ii, c.hi, c.ii, c.hi, c.Tf, c.Sf, c.Tf], c.style && g.ao("poi", F, {
                            type: "polygon",
                            Wb: c.style.Wb,
                            style: c.style
                        }), "fixed" === c.type) {
                        F = t;
                        c.we && (c.style && 4 === c.direction) && (F = p);
                        if (c.we)
                            if (F) {
                                var E = this;
                                this.$r(b, c, e, F, function (a) {
                                    for (var c = 0; c < a.tf.length; c++) E.kK(b, a.tf[c].be, a.tf[c].ce, a.tf[c].text, a.style, e)
                                })
                            } else this.$r(b, c, e);
                        if (c.style && !F)
                            for (F = 0; F < c.tf.length; F++) this.kK(b, c.tf[F].be, c.tf[F].ce, c.tf[F].text, c.style, e)
                    } else if ("line" === c.type)
                for (F = 0; F < c.CO.length; F++) f = c.CO[F], gd.$V(b, f.be, f.ce, f.qU, f.AO, f.width, f.height, c.style, e);
            return m
        },
        SM: function (a, b, c, e, f, g, i, k, m, n, o, s, v, w) {
            if (a = a[1])
                for (b = 0; b < a.length; b++) {
                    var y = a[b],
                        A = y[0],
                        B = c.jj(A, "point", k, w),
                        A = c.jj(A, "pointText", k, w),
                        y = y[1],
                        C = q,
                        F = 100,
                        E = 0,
                        G = 0;
                    B && B[0] && (B = B[0], C = B.we, F = B.zoom || 100);
                    A = A && A[0] ? A[0] : q;
                    for (B = 0; B < y.length; B++) {
                        var N = y[B][4];
                        if (N && c.Pc(N[2], k)) {
                            var L = Math.round(N[0] / 100) / m + g,
                                M = f - Math.round(N[1] / 100) / m + i;
                            if (v || !(-50 > L || -50 > M || L > n + 50 || M > o + 50)) {
                                var T = N[7] || "",
                                    ea = {
                                        type: "fixed",
                                        uid: N[3] || "",
                                        name: T,
                                        Qx: N[4],
                                        Gs: q,
                                        tf: [],
                                        Ex: [L, M],
                                        style: A
                                    };
                                if (C) {
                                    var ca = window.iconSetInfo_high[C] || window.iconSetInfo_high["MapRes/" + C];
                                    if (!ca) {
                                        var va = C.charCodeAt(0);
                                        48 <= va && 57 >= va && (ca = window.iconSetInfo_high["_" + C])
                                    }
                                    ca && (E = ca[2], G = ca[3], E = E / 2 * F / 100, G = G / 2 * F / 100, ea.Gs = {
                                        be: L - E / 2,
                                        ce: M - G / 2,
                                        width: E,
                                        height: G
                                    }, ea.we = C)
                                }
                                if (A) {
                                    N = N[5];
                                    "number" !== typeof N && (N = 0);
                                    var za = ca = 0,
                                        va = (A.fontSize || 12) / 2,
                                        Ea = 0.2 * va;
                                    e.font = gd.Lw(A, c);
                                    var T = T.split("\\"),
                                        ra = T.length;
                                    ea.direction = N;
                                    for (var Ua = 0; Ua < ra; Ua++) {
                                        var te = T[Ua],
                                            Qc = e.measureText(te).width;
                                        switch (N) {
                                            case 3:
                                                za = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                                ca = L - Qc - E / 2;
                                                za = za + va * Ua + Ea * Ua;
                                                break;
                                            case 1:
                                                za = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                                ca = L + E / 2;
                                                za = za + va * Ua + Ea * Ua;
                                                break;
                                            case 2:
                                                za = M - G / 2 - va * ra - Ea * (ra - 1) - Ea;
                                                ca = L - Qc / 2;
                                                za = za + va * Ua + Ea * Ua;
                                                break;
                                            case 0:
                                                za = M + G / 2 + Ea / 2;
                                                ca = L - Qc / 2;
                                                za = za + va * Ua + Ea * Ua;
                                                break;
                                            case 4:
                                                za = M - va / 2 * ra - Ea * (ra - 1) / 2, ca = L - Qc / 2, za = za + va * Ua + Ea * Ua
                                        }
                                        ea.tf.push({
                                            be: ca,
                                            ce: za,
                                            width: Qc,
                                            height: va,
                                            text: te
                                        })
                                    }
                                }
                                s.push(ea)
                            }
                        }
                    }
                }
        },
        mZ: function (a, b, c, e, f, g, i, k, m, n, o, s, v) {
            b = a[7].length;
            if ((n = c.jj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = gd.Lw(n, c);
                for (var o = n.fontSize / 2, w = a[1], y = a[2], A = y.split("").length, B = a[4], C = B.slice(0, 2), F = 2; F < B.length; F += 2) C[F] = C[F - 2] + B[F], C[F + 1] = C[F - 1] + B[F + 1];
                for (F = 2; F < B.length; F += 2) 0 === F % (2 * A) || 1 === F % (2 * A) || (C[F] = C[F - 2] + B[F] / v, C[F + 1] = C[F - 1] + B[F + 1] / v);
                for (v = 0; v < b; v++)
                    if (c.Pc(a[7][v], k)) {
                        var F = [],
                            E = l,
                            G = l,
                            N = l,
                            L = l,
                            M = y.split("");
                        a[6][v] && M.reverse();
                        for (var B = 2 * v * A, B = C.slice(B, B + 2 * A), T = 0; T < A; T++) {
                            var ea = a[5][A * v + T],
                                ca = B[2 * T] / 100 / m + g,
                                va = f - B[2 * T + 1] / 100 / m + i,
                                za = M[T],
                                Ea = e.measureText(za).width;
                            if (E === l) E = ca - Ea / 2, G = va - o / 2, N = E + Ea, L = G + o;
                            else {
                                var ra = ca - Ea / 2,
                                    Ua = va - o / 2;
                                ra < E && (E = ra);
                                Ua < G && (G = Ua);
                                ra + Ea > N && (N = ra + Ea);
                                Ua + o > L && (L = Ua + o)
                            }
                            F.push({
                                AO: za,
                                be: ca,
                                ce: va,
                                qU: ea,
                                width: Ea,
                                height: o
                            })
                        }
                        s.push({
                            type: "line",
                            Qx: w,
                            style: n,
                            CO: F,
                            Sf: E,
                            Tf: G,
                            hi: N,
                            ii: L
                        })
                    }
            }
        },
        $r: function (a, b, c, e, f) {
            var g = b.we;
            if ("lanche" !== g)
                if (gd.hx[g]) this.hK(a, b, gd.hx[g], e, f);
                else {
                    var c = c.QK(g),
                        i = new Image;
                    i.setAttribute("crossOrigin", "anonymous");
                    var k = this;
                    i.onload = function () {
                        gd.hx[g] = this;
                        k.hK(a, b, this, e, f);
                        i.onload = q
                    };
                    i.src = c
                }
        },
        hK: function (a, b, c, e, f) {
            var g = b.Gs,
                i = g.be,
                k = g.ce,
                m = q,
                n = q,
                o = p,
                s = b.style ? b.style.Wb : q;
            if (b.style && 62203 === s) {
                for (var v = n = m = 0; v < b.tf.length; v++) m < b.tf[v].width && (m = b.tf[v].width), n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === s && (o = t);
            m !== q && n !== q ? this.cW(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.tf[0].width) + 6, this.WV(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        cW: function (a, b, c, e, f, g) {
            var i = b.Ex[0] - f / 2,
                b = b.Ex[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        WV: function (a, b, c, e, f, g) {
            var i = b.Ex[0] - f / 2,
                b = b.Ex[1] - g / 2,
                g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        $V: function (a, b, c, e, f, g, i, k, m) {
            a.font = gd.Lw(k, m);
            a.fillStyle = k.AK;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Zw && (a.lineWidth = k.Zw, a.strokeStyle = k.qL, a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        kK: function (a, b, c, e, f, g) {
            a.font = gd.Lw(f, g);
            a.fillStyle = f.AK;
            0 < f.Zw && (a.lineWidth = f.Zw, a.strokeStyle = f.qL, a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        Lw: function (a, b) {
            var c = a.fontSize / 2,
                e = 10 * a.fontWeight;
            return e = b.ND ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        zZ: function (a, b) {
            var c = [],
                e = 0;
            5 === b && (e = 1);
            a.sort(function (a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k],
                        o = l,
                        s = l,
                        v = l,
                        w = l;
                    if ("fixed" === n.type) {
                        var y = n.Gs,
                            A = n.tf;
                        y && (o = y.be, s = y.ce, v = y.be + y.width, w = y.ce + y.height);
                        for (y = 0; y < A.length; y++) {
                            var B = A[y];
                            o !== l ? (B.be < o && (o = B.be), B.ce < s && (s = B.ce), B.be + B.width > v && (v = B.be + B.width), B.ce + B.height > w && (w = B.ce + B.height)) : (o = B.be, s = B.ce, v = B.be + B.width, w = B.ce + B.height)
                        }
                    } else "line" === n.type ? (o = n.Sf, s = n.Tf, v = n.hi, w = n.ii) : "biaopai" === n.type && (w = n.R4, o = w.be, s = w.ce, v = w.be + w.width, w = w.ce + w.height);
                    o !== l && (n.Sf = o, n.Tf = s, n.hi = v, n.ii = w, c.push(n))
                }
            c.sort(function (a, b) {
                return b.Qx - a.Qx || b.Sf - a.Sf || b.Tf - a.Tf
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.Ls = t;
                m.sJ = [];
                for (k = f + 1; k < g; k++) i = c[k], m.hi - e < i.Sf || (m.Sf > i.hi - e || m.ii - e < i.Tf || m.Tf > i.ii - e) || m.sJ.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f], k.Ls === t) {
                    e = k.sJ;
                    k = 0;
                    for (m = e.length; k < m; k++) c[e[k]].Ls = p
                } return c
        },
        hx: {}
    };
    var hd = ["round", "butt", "square"],
        id = ["miter", "round", "bevel"],
        jd = {
            daojiao: [{
                stroke: "#FF6600",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [4, 3]
            }],
            daojiao_bai: [{
                stroke: "#f5f3f0",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [4, 3]
            }],
            junhuoxian: [{
                stroke: "#DB7093",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [4, 3]
            }],
            lundu: [{
                stroke: "#5c91c5",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [10, 11]
            }],
            shengjie: [{
                stroke: "#737373",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [6, 3]
            }],
            weidingguojie: [{
                stroke: "#aea08a",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [4, 3]
            }],
            weidingguojie_guowai: [{
                stroke: "#a29e96",
                Cb: 2,
                Ab: "round",
                Bb: "round",
                td: [4, 3]
            }],
            weidingguojie_guonei: [{
                stroke: "#b5a37c",
                Cb: 2,
                Ab: "round",
                Bb: "round",
                td: [4, 3]
            }]
        },
        kd = {};

    function ld(a, b) {
        if ("tielu" === a || "tielu_0" === a) {
            if ("off" === window.La[b].bmapRailwayVisibility) return [];
            var c = "#ffffff",
                e = "#949494";
            window.La[b].bmapRailwayStrokeColor && (c = window.La[b].bmapRailwayStrokeColor);
            window.La[b].bmapRailwayFillColor && (e = window.La[b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{
                stroke: c,
                Cb: 1.5,
                Ab: "butt",
                Bb: "round",
                td: [10, 11]
            }, {
                stroke: e,
                Cb: 2,
                Ab: "round",
                Bb: "round"
            }];
            if (17 <= b && 18 >= b) return [{
                stroke: c,
                Cb: 2.5,
                Ab: "butt",
                Bb: "round",
                td: [15, 16]
            }, {
                stroke: e,
                Cb: 5,
                Ab: "round",
                Bb: "round"
            }];
            if (19 <= b && 20 >= b) return [{
                stroke: c,
                Cb: 4.5,
                Ab: "butt",
                Bb: "round",
                td: [25, 26]
            }, {
                stroke: e,
                Cb: 5,
                Ab: "round",
                Bb: "round"
            }]
        } else if (0 === a.indexOf("ditie_zj")) {
            if (12 <= b && 16 >= b) return [{
                stroke: "#868686",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [7, 4]
            }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{
                stroke: "#6e6e6e",
                Cb: 1,
                Ab: "round",
                Bb: "round",
                td: [7, 4]
            }]
        } else if (/^tongdaomian/.test(a)) {
            if (17 === b) return [{
                stroke: "#e5e5e5",
                Cb: 4,
                Ab: "square",
                Bb: "round"
            }, {
                stroke: "#a8a8a8",
                Cb: 6,
                Ab: "square",
                Bb: "round"
            }];
            if (18 === b) return [{
                stroke: "#e5e5e5",
                Cb: 6,
                Ab: "square",
                Bb: "round"
            }, {
                stroke: "#a8a8a8",
                Cb: 8,
                Ab: "square",
                Bb: "round"
            }];
            if (19 <= b && 21 >= b) return [{
                stroke: "#e5e5e5",
                Cb: 8,
                Ab: "square",
                Bb: "round"
            }, {
                stroke: "#a8a8a8",
                Cb: 10,
                Ab: "square",
                Bb: "round"
            }]
        } else if (/^jietizhongduan|^dixiatongdaojieti/.test(a)) {
            if (17 === b) return [{
                stroke: "#e5e5e5",
                Cb: 4,
                Ab: "butt",
                Bb: "round",
                td: [2, 1]
            }, {
                stroke: "#bebebe",
                Cb: 6,
                Ab: "butt",
                Bb: "round"
            }];
            if (18 === b) return [{
                stroke: "#e5e5e5",
                Cb: 6,
                Ab: "butt",
                Bb: "round",
                td: [3, 1]
            }, {
                stroke: "#bebebe",
                Cb: 8,
                Ab: "butt",
                Bb: "round"
            }];
            if (19 <= b && 21 >= b) return [{
                stroke: "#e5e5e5",
                Cb: 8,
                Ab: "butt",
                Bb: "round",
                td: [4, 2]
            }, {
                stroke: "#bebebe",
                Cb: 10,
                Ab: "butt",
                Bb: "round"
            }]
        } else if (/^guojietianqiao/.test(a)) return 18 === b ? [{
            stroke: "#ffffff",
            Cb: 6,
            Ab: "butt",
            Bb: "round",
            td: [4, 2]
        }, {
            stroke: "#bebebe",
            Cb: 8,
            Ab: "butt",
            Bb: "round"
        }] : [{
            stroke: "#ffffff",
            Cb: 8,
            Ab: "butt",
            Bb: "round",
            td: [4, 2]
        }, {
            stroke: "#bebebe",
            Cb: 10,
            Ab: "butt",
            Bb: "round"
        }];
        return jd[a]
    }
    var md = {
        drawLink: function (a, b, c, e, f) {
            var g = a[1];
            g && (a = a[6], this.kO(g, c, e, b, a, f, p), this.kO(g, c, e, b, a, f, t))
        },
        kO: function (a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0],
                    n = g.jj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].Co || ld(n[0].Co, b))
                        for (var o = a[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][3];
                            g.Pc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.zm(v[1], b, c, f)), v = v["cache" + b], g.M.ao(e.canvas.id, v, {
                                type: "polyline",
                                Wb: m,
                                style: n
                            }), this.aW(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.jj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Pc(o[0], c)) {
                                var s;
                                o["cache" + c] || (o["cache" + c] = f.zm(o[1], c, e, a));
                                s = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.I0[c].Nc);
                                this.bW(b, s, k, o, f)
                            }
                        }
                }
        },
        bW: function (a, b, c, e, f) {
            var g = c[0].Co,
                i = this;
            if (kd[g]) i.$r(b, e, a, kd[g]);
            else {
                var c = f.QK(g),
                    k = new Image;
                k.onload = function () {
                    kd[g] = k;
                    i.$r(b, e, a, k);
                    k.onload = q
                };
                k.src = c
            }
        },
        $r: function (a, b, c, e) {
            var f = [a[0], a[1]],
                g = [a[2], a[3]],
                a = g[0] - f[0],
                g = g[1] - f[1],
                f = [f[0] + a / 2, f[1] + g / 2],
                i = Math.sqrt(a * a + g * g),
                b = b / 10,
                a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        aW: function (a, b, c, e, f) {
            c = c[0];
            if (!e && c.Co && ld(c.Co, f)) this.hW(a, b, c, ld(c.Co, f));
            else {
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var f = 2, g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
                c.borderWidth && e ? (a.strokeStyle = c.lo, a.lineCap = hd[c.GU], a.lineJoin = id[1], a.lineWidth = c.borderWidth / 2, a.stroke()) : e || (a.strokeStyle = c.Gw, a.lineCap = hd[c.vW], a.lineJoin = id[1], a.lineWidth = c.wK / 2, a.stroke())
            }
        },
        hW: function (a, b, c, e) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.Ab;
                a.lineJoin = c.Bb;
                a.lineWidth = c.Cb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.td) this.ZV(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.Ab;
                    a.lineJoin = e.Bb;
                    a.lineWidth = e.Cb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        ZV: function (a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.Ab;
            a.lineJoin = c.Bb;
            a.lineWidth = c.Cb;
            var e = p,
                c = c.td[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f],
                    i = b[f + 1],
                    k = b[f + 2] - g,
                    m = b[f + 3] - i,
                    n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15,
                    m = Math.sqrt(k * k + m * m),
                    o = c;
                for (a.moveTo(g, i); 0.1 <= m;) {
                    o > m && (o = m);
                    var s = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (s = -s);
                    g += s;
                    i += n * s;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var nd = 3,
        od = 4,
        pd = 7,
        qd = 8,
        rd = 15,
        sd = 16,
        td = {},
        ud = {},
        vd = {},
        wd, xd = {
            3: {
                start: 3,
                Nc: 3
            },
            4: {
                start: 4,
                Nc: 5
            },
            5: {
                start: 4,
                Nc: 5
            },
            6: {
                start: 6,
                Nc: 7
            },
            7: {
                start: 6,
                Nc: 7
            },
            8: {
                start: 8,
                Nc: 9
            },
            9: {
                start: 8,
                Nc: 9
            },
            10: {
                start: 10,
                Nc: 10
            },
            11: {
                start: 11,
                Nc: 12
            },
            12: {
                start: 11,
                Nc: 12
            },
            13: {
                start: 11,
                Nc: 12
            },
            14: {
                start: 14,
                Nc: 15
            },
            15: {
                start: 14,
                Nc: 15
            },
            16: {
                start: 16,
                Nc: 17
            },
            17: {
                start: 16,
                Nc: 17
            },
            18: {
                start: 18,
                Nc: 19
            },
            19: {
                start: 18,
                Nc: 19
            },
            20: {
                start: 18,
                Nc: 19
            },
            21: {
                start: 18,
                Nc: 19
            }
        };

    function yd(a) {
        this.M = a;
        this.Hc = a.R.devicePixelRatio;
        this.I0 = xd
    }
    yd.prototype = {
        nC: function (a, b, c, e, f, g, i, k, m) {
            this.M.RN = {};
            var n = this;
            m || (m = 0);
            if (!(z.rm(window.rh) ? window.Pp : window.$t[f]) && 100 > m) setTimeout(function () {
                n.nC(a, b, c, e, f, g, i, k, m + 1)
            }, 100);
            else {
                wd || (wd = k);
                var o = b.getContext("2d"),
                    s = b.parentNode;
                s.removeChild(b);
                o.clearRect(0, 0, g, g);
                s.appendChild(b);
                s = this.Hc;
                1 < s && !b._scale && (o.scale(s, s), b._scale = p);
                o.fillStyle = this.RM("#F5F3F0");
                window.La[f].bmapLandColor && (o.fillStyle = this.RM(window.La[f].bmapLandColor));
                s = b.style.width;
                b.style.width = "0px";
                b.style.width = s;
                o.fillRect(0, 0, g, g);
                if (a[0])
                    for (s = 0; s < a[0].length; s++) {
                        var v = a[0][s];
                        v[0] === pd && dd.drawPoly(v, o, f, g, this)
                    }
                17 <= this.M.ja() ? (n.jK(a, o, f, g, i, c, e), b.tn = p) : setTimeout(function () {
                    if (!b.NG) {
                        n.jK(a, o, f, g, i, c, e);
                        b.tn = p
                    }
                }, 1)
            }
        },
        jK: function (a, b, c, e) {
            if (a[0])
                for (var f = 0; f < a[0].length; f++) {
                    var g = a[0][f],
                        i = g[0];
                    i === od ? md.drawLink(g, b, c, e, this) : i === sd ? md.drawLink(g, b, c, e, this) : i === rd ? (dd.drawGaoqingRoadBorder(g, b, c, e, this), dd.drawGaoqingRoadFill(g, b, c, e, this)) : 18 === i ? "off" !== window.La[c].bmapRoadarrowVisibility && ed.drawArrow(g, b, c, e, Math.pow(2, c - xd[c].Nc), this) : i === qd ? fd.drawHregion(g, b, c, e, this) : 19 === i && md.drawSingleTexture(g, b, c, e, this)
                }
        },
        iK: function (a, b, c, e, f, g, i) {
            var k = this;
            i || (i = 0);
            !(z.rm(window.rh) ? window.Pp : window.$t[g]) && 100 > i ? setTimeout(function () {
                k.iK(a, b, c, e, f, g, i + 1)
            }, 100) : (wd || (wd = b), a.tZ = gd.parse(a, c, e, this, f))
        },
        jj: function (a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e) return td[f] || (td[f] = this.sg(a, b, c, e)), td[f];
            this.M.RN[f] = this.sg(a, b, c);
            return this.M.RN[f]
        },
        sg: function (a, b, c, e) {
            var f;
            f = e || window.bmap_baseFs;
            var e = z.rm(window.rh) ? window.Pp : window.$t[c],
                g = f[2];
            if ("arrow" === b) return this.iZ(g[2]);
            switch (b) {
                case "point":
                    g = g[0];
                    e = e[0] || {};
                    break;
                case "pointText":
                    g = g[1];
                    e = e[1] || {};
                    break;
                case "line":
                    g = g[3];
                    e = e[3] || {};
                    break;
                case "polygon":
                    g = g[4];
                    e = e[4] || {};
                    break;
                case "polygon3d":
                    g = g[5], e = e[5] || {}
            }
            var i = [],
                c = f[1][c - 1][0][a];
            if (!c) return i;
            for (f = 0; f < c.length; f++) {
                var k = e[c[f]] || g[c[f]];
                if (k) {
                    switch (b) {
                        case "polygon":
                            k = this.rZ(k, a);
                            break;
                        case "line":
                            k = this.nZ(k, a);
                            break;
                        case "pointText":
                            k = this.pZ(k, a);
                            break;
                        case "point":
                            k = this.oZ(k, a);
                            break;
                        case "polygon3d":
                            k = this.qZ(k, a)
                    }
                    k.y5 = c[f];
                    i[i.length] = k
                }
            }
            return i
        },
        pZ: function (a, b) {
            return {
                Wb: b,
                AK: this.zg(a[0]),
                qL: this.zg(a[1]),
                b2: this.zg(a[2]),
                fontSize: a[3],
                Zw: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                IV: a[7]
            }
        },
        oZ: function (a, b) {
            return {
                Wb: b,
                Qx: a[0],
                P5: a[1],
                we: a[2],
                WX: a[3],
                z4: a[4],
                IV: a[5],
                zoom: a[6]
            }
        },
        nZ: function (a, b) {
            return {
                Wb: b,
                lo: this.zg(a[0]),
                Gw: this.zg(a[1]),
                borderWidth: a[2],
                wK: a[3],
                GU: a[4],
                vW: a[5],
                J3: a[6],
                K3: a[7],
                L3: a[8],
                c4: a[9],
                d4: a[10],
                HU: a[11],
                Co: a[12],
                IU: a[13],
                L2: a[14],
                b4: a[15],
                H3: a[16],
                y4: a[17],
                d5: a[18]
            }
        },
        rZ: function (a, b) {
            return {
                Wb: b,
                Gw: this.zg(a[0]),
                lo: this.zg(a[1]),
                borderWidth: a[2],
                HU: a[3],
                IU: a[4],
                X5: a[5],
                G3: a[6],
                C5: a[7],
                D5: this.zg(a[8])
            }
        },
        qZ: function (a, b) {
            return {
                Wb: b,
                filter: a[0],
                eN: a[1],
                I3: a[2],
                borderWidth: a[3],
                lo: this.zg(a[4]),
                wW: this.zg(a[5]),
                K2: this.zg(a[6]),
                P4: a[7]
            }
        },
        iZ: function (a) {
            for (var b in a) return a = a[b], {
                color: this.zg(a[0]),
                WX: a[1],
                we: a[2]
            }
        },
        zg: function (a) {
            var b = a;
            if (vd[b]) return vd[b];
            a >>>= 0;
            vd[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return vd[b]
        },
        RM: function (a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Pc: function (a, b) {
            var c;
            ud[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), ud[a] = c);
            c = ud[a];
            return "1" === c[b - xd[b].start]
        },
        zm: function (a, b, c) {
            var e = [],
                b = Math.pow(2, b - xd[b].Nc) / 100,
                f = a[0] * b,
                g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2) f += a[i] * b, g += a[i + 1] * b, e[e.length] = f, e[e.length] = c - g;
            return e
        },
        QK: function (a) {
            var b = a.length % wd.length,
                c = this.ZW();
            return wd[b] + a + ".png?v=" + c.sF + "&udt=" + c.nF
        },
        ZW: function () {
            if (this.CD) return this.CD;
            var a = "undefined" !== typeof MSV ? MSV.r4 : {};
            return this.CD = {
                sF: a.version ? a.version : "001",
                nF: a.l0 ? a.l0 : "20150621"
            }
        }
    };
    Q = z.lang.fu;
    nd = 3;
    od = 4;
    pd = 7;
    qd = 8;
    rd = 15;
    sd = 16;

    function Lc(a, b, c) {
        c = c || {};
        this.M = a;
        this.Jv = b;
        this.Hc = b.eN;
        this.$a = {
            U_: "na",
            zIndex: 0,
            XN: c.tileUrls || {
                http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile", "http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile", "http://online4.map.bdimg.com/pvd/?qt=vtile"],
                https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"]
            },
            BD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"],
            TE: p
        };
        this.gB = "";
        this.qS = {};
        var c = c.urlOpts || {
                styles: "pl",
                extdata: 1,
                textimg: 0,
                mesh3d: 0,
                limit: 30
            },
            e;
        for (e in c) c.hasOwnProperty(e) && (this.gB = this.gB + "&" + e + "=" + c[e]);
        this.Yg = {};
        this.Lr = [];
        this.Rs = 0;
        this.mx = t;
        this.hx = {};
        a = this.$a.U_;
        Yc[a] ? a = Yc[a] : (b = new Zc(a, l), a = Yc[a] = b);
        this.Dd = a;
        this.M.Dd = this.Dd
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    fa = Lc.prototype;
    fa.xa = function () {
        var a = this.M,
            b = a.Ze;
        if (!this.Xn) {
            var c = b.hq(this.$a.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Xn = c
        }
        b.eg.appendChild(this.Xn);
        b.W3 = c;
        if (this.$a.TE) {
            zd(this);
            var e = this;
            a.addEventListener("checkvectorclick", function (a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY,
                        k = e.Lr.tZ;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o], !a.Ls && a.Gs && b > a.Sf && b < a.hi && c > a.Tf && c < a.ii) {
                                    b = a.Gs;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.be + b.width / 2,
                                            y: b.ce + 6
                                        }
                                    };
                                    break a
                                } b = q
                }
                b && (a = new Q("onvectorclick"), a.S3 = b, a.lf = "base", this.dispatchEvent(a))
            })
        }
    };

    function zd(a) {
        var b = a.M,
            c = b.Ze,
            e = a.Hc,
            f = b.Eb(),
            g = f.width,
            f = f.height,
            i = O("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.qx = i;
        a.Vo = i.getContext("2d");
        a.Vo.scale(e, e);
        a.Vo.textBaseline = "top";
        c.eg.appendChild(i);
        b.aS = i
    }
    fa.EX = x("Dd");
    fa.update = function (a, b) {
        b = b || {};
        this.pF = b.pF;
        b.bm && (this.m0 = b.bm);
        if (this.$a.TE && (b.Tl && this.Tl(), b.C_)) {
            var c = this.Hc,
                e = this.M.Eb(),
                f = e.width,
                e = e.height,
                g = this.qx,
                i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Vo.scale(c, c);
            this.Vo.textBaseline = "top"
        }
        if (b.S5) {
            c = this.Xn;
            f = 0;
            for (e = c.childNodes.length; f < e; f++) c.childNodes[f].tn = t
        }
        this.ww = a;
        this.Yo(a)
    };
    fa.Yo = function (a) {
        this.Lr = [];
        var b = this.M,
            c = b.ja(),
            e = b.Kc.ei(b.qe),
            f = this.Dd.$b(c),
            e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
            f = this.Dd.Jd(c),
            g = b.ea.replace(/^TANGRAM_/, ""),
            i = this.Dd.ns(c),
            b = this.M,
            k = -b.offsetY + b.height / 2,
            m = this.Xn;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Pe ? this.Pe.length = 0 : this.Pe = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.Fq = t;
            this.Pe.push(n)
        }
        if (b = this.xm)
            for (var o in b) delete b[o];
        else this.xm = {};
        this.Qe ? this.Qe.length = 0 : this.Qe = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
                s = a[b][1];
            o = 0;
            for (var v = this.Pe.length; o < v; o++) {
                var w = this.Pe[o];
                if (w.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
                    w.Fq = p;
                    this.xm[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Pe.length; b < k; b++) w = this.Pe[b], w.Fq || (w.kB = q, delete w.kB, w.tn = t, this.Qe.push(w));
        o = [];
        v = f * this.Hc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
                s = a[b][1],
                w = n * f + e[0],
                y = (-1 - s) * f + e[1],
                A = g + "_" + n + "_" + s + "_" + i + "_" + c,
                B = this.xm[A],
                C = q;
            if (B) C = B.style, C.left = w + "px", C.top = y + "px", C.width = f + "px", C.height = f + "px", B.tn ? B.eF && B.eF && this.Lr.push(B.eF) : (B.NG = p, B.kB = q, delete B.kB, o.push([n, s, B]));
            else {
                if (0 < this.Qe.length) {
                    var B = this.Qe.shift(),
                        F = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    C = B.style;
                    C.width = f + "px";
                    C.height = f + "px";
                    F.clearRect(0, 0, v, v)
                } else B = document.createElement("canvas"), C = B.style, C.position = "absolute", this.$a.backgroundColor && (C.background = this.$a.backgroundColor), C.width = f + "px", C.height = f + "px", B.setAttribute("width", v), B.setAttribute("height", v), m.appendChild(B);
                B.id = A;
                C.left = w + "px";
                C.top = y + "px";
                o.push([n, s, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.Qe.length; b < k; b++) this.Qe[b].style.visibility = "hidden";
        if (0 === o.length) {
            Ad(this);
            a = this.M.ea.replace(/^TANGRAM_/, "");
            c = this.M.ja();
            e = this.Dd.ns(c);
            f = {};
            for (g = 0; g < this.ww.length; g++) i = this.ww[g], i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c, this.Yg[i] && (f[i] = this.Yg[i], this.pF && this.Jv.oC.nC(this.Yg[i].z0, this.Yg[i].S_, this.Yg[i].Vl, this.Yg[i].Fm, this.Yg[i].bE, this.Dd.Jd(this.Yg[i].bE), this.Dd.kD(this.Yg[i].bE), this.$a.BD));
            this.Yg = f
        } else {
            this.Rs = o.length;
            this.mx = t;
            c = this.Dd.ns(this.M.ja());
            for (e = 0; e < a.length; e++) a[e][3] = c;
            for (e = 0; e < o.length; e++) a = o[e][2], f = o[e][0], g = o[e][1], o[e][3] = c, a.tn = t, a.NG = t, Bd(this, f, g, c, a)
        }
    };

    function Bd(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e,
            i = a.qS;
        if (i[g]) {
            if ("loading" === i[g].status) return
        } else i[g] = {
            status: "init",
            mN: 0
        };
        var k = a,
            m = k.M,
            n = [],
            n = "0" === D.Ut ? k.$a.XN.http : k.$a.XN.https,
            o = Math.abs(b + c) % n.length,
            s = "x=" + b + "&y=" + c + "&z=" + e,
            v = Cd(a.Jv),
            w = v.sF,
            v = v.nF,
            y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
            s = s + a.gB + "v=" + w + "&udt=" + v + "&fn=window." + y,
            w = n[o] + "&" + s,
            w = n[o] + "&param=" + window.encodeURIComponent(Lb(s));
        window[y] = function (a) {
            clearTimeout(i[g].Ok);
            i[g] = q;
            if (a) {
                var n = m.ja(),
                    o;
                a: {
                    for (o = 0; o < k.ww.length; o++) {
                        var s = k.ww[o];
                        if (s[0] === b && s[1] === c && s[3] === e) {
                            o = p;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new Q("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Hc
                    });
                    m.dispatchEvent(o);
                    if (m.R.jk) {
                        if (k.Yg[f.id] = {
                                z0: a,
                                S_: f,
                                Vl: b,
                                Fm: c,
                                bE: n
                            }, k.Jv.oC.nC(a, f, b, c, n, k.Dd.Jd(n), k.Dd.kD(n), k.$a.BD), k.$a.TE) {
                            n = [];
                            n.T_ = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++) a[0][o][0] === nd && n.push({
                                    SL: a[0][o]
                                });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++) n.push({
                                    DY: a[2][o]
                                });
                            f.eF = n;
                            k.Lr.push(n);
                            k.mx === t && k.Rs--;
                            (0 === k.Rs || k.mx === p) && Ad(k)
                        }
                    } else k.Rs--, (0 === k.Rs || k.mx === p) && Ad(k);
                    delete window[y]
                }
            }
        };
        pa(w);
        i[g].status = "loading";
        k = a;
        i[g].Ok = setTimeout(function () {
            3 > i[g].mN ? (i[g].mN++, i[g].status = "init", Bd(k, b, c, e, f)) : i[g] = q
        }, 4E3)
    }

    function Ad(a) {
        if (a.qx) {
            var b = a.M;
            a.qx.style.left = -b.offsetX + "px";
            a.qx.style.top = -b.offsetY + "px";
            var c = new Q("updateindoorlabel");
            c.labelCanvasDom = b.aS;
            b.dispatchEvent(c);
            if (b.R.jk) {
                a.Tl();
                var c = a.Dd,
                    e = b.ja(),
                    f = c.ns(b.ja());
                a.Jv.oC.iK(a.Lr, a.$a.BD, a.Vo, c.Jd(e), Math.pow(2, e - f), e);
                "moving" !== a.m0 && b.dispatchEvent(new Q("ontilesloaded"))
            }
        }
    }
    fa.Tl = function () {
        var a = this.M.Eb(),
            b = this.Hc;
        this.Vo.clearRect(0, 0, a.width * b, a.height * b)
    };
    fa.remove = function () {
        var a = this.M.Ze;
        this.Xn && a.eg.removeChild(this.Xn)
    };

    function Kc(a) {
        this.M = a.map;
        this.cf = [];
        this.sr = {};
        this.eN = this.M.R.devicePixelRatio;
        this.oC = new yd(this.M);
        this.xa()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    fa = Kc.prototype;
    fa.xa = function () {
        var a = this,
            b = this.M;
        b.addEventListener("addtilelayer", function (b) {
            a.Oe(b.target)
        });
        b.addEventListener("removetilelayer", function (b) {
            a.Wf(b.target)
        });
        setTimeout(function () {
            b.addEventListener("onmoveend", function (b) {
                "centerAndZoom" !== b.qz && a.update({
                    bm: "moveend"
                })
            });
            b.addEventListener("onmoving", function () {
                a.update({
                    bm: "moving"
                })
            });
            b.addEventListener("onzoomend", function (b) {
                "centerAndZoom" !== b.qz && a.update({
                    Tl: p,
                    bm: "zoomend"
                })
            });
            b.addEventListener("centerandzoom", function () {
                a.update({
                    Tl: p,
                    bm: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles", function () {
                a.update({
                    Tl: p,
                    pF: p,
                    bm: "updatestyles"
                });
                a.M.rf(a.M.Db());
                setTimeout(function () {
                    a.M.dispatchEvent(new Q("onvectordrawend"))
                }, 10)
            });
            b.addEventListener("onmaptypechange", function (b) {
                b.yb === Pa && a.update({
                    Tl: p,
                    bm: "maptypechange"
                })
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize", function () {
            a.update({
                C_: p
            })
        });
        a.update()
    };
    fa.Oe = function (a) {
        if (a instanceof Lc) {
            for (var b = 0; b < this.cf.length; b++)
                if (this.cf[b] === a) return;
            this.cf.push(a);
            a.xa();
            this.M.loaded && this.update()
        }
    };
    fa.Wf = function (a) {
        if (a instanceof Lc) {
            for (var b = 0; b < this.cf.length; b++)
                if (this.cf[b] === a) {
                    this.cf.splice(b, 1);
                    break
                } a.remove()
        }
    };
    fa.gL = function (a) {
        var b = a.getName();
        if (this.sr[b]) return this.sr[b];
        var c = this.M,
            e = c.ja(),
            f = c.ac,
            g = a.kD(e);
        c.ea.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g),
            k = Math.ceil(f.lat / g),
            a = a.Jd(e),
            m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
            e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
            f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
            g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
            c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.De ? this.De.length = 0 : this.De = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++) this.De.push([a, e]);
        this.De.sort(function (a) {
            return function (b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([i, k]));
        this.sr[b] = this.De.slice(0);
        return this.sr[b]
    };

    function Cd(a) {
        if (a.tF) return a.tF;
        a.tF = {
            sF: "001",
            nF: Sb("normal")
        };
        return a.tF
    }
    fa.update = function (a) {
        this.sr = {};
        for (var b = 0; b < this.cf.length; b++) {
            var c = this.cf[b],
                e = this.gL(c.Dd);
            c.update(e, a)
        }
    };

    function Dd(a, b, c) {
        this.jd = a;
        this.cf = b instanceof Mc ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            X_: c.tips || "",
            XD: "",
            jc: c.minZoom || 4,
            pc: c.maxZoom || 18,
            Q3: c.minZoom || 4,
            P3: c.maxZoom || 18,
            my: 256,
            dF: c.textColor || "black",
            IC: c.errorImageUrl || "",
            gb: new hb(new J(-21364736, -16023552), new J(23855104, 19431424)),
            Kc: c.projection || new S
        };
        1 <= this.cf.length && (this.cf[0].$v = p);
        z.extend(this.m, c)
    }
    z.extend(Dd.prototype, {
        getName: x("jd"),
        As: function () {
            return this.m.X_
        },
        p3: function () {
            return this.m.XD
        },
        DX: function () {
            return this.cf[0]
        },
        D3: x("cf"),
        Jd: function () {
            return this.m.my
        },
        dj: function () {
            return this.m.jc
        },
        Zh: function () {
            return this.m.pc
        },
        setMaxZoom: function (a) {
            this.m.pc = a
        },
        km: function () {
            return this.m.dF
        },
        tk: function () {
            return this.m.Kc
        },
        i3: function () {
            return this.m.IC
        },
        Jd: function () {
            return this.m.my
        },
        $b: function (a) {
            return Math.pow(2, 18 - a)
        },
        lL: function (a) {
            return this.$b(a) * this.Jd()
        }
    });
    var Ed = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"],
        Fd = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/"],
        Gd = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        Hd = new Mc;
    Hd.w_ = p;
    Hd.getTilesUrl = function (a, b, c) {
        var e = a.x,
            a = a.y,
            f = Sb("normal"),
            g = 1,
            c = Gd[c];
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        tdir = bmapcfg.tiles_dir.length > 0 ? bmapcfg.tiles_dir : bmapcfg.home + "tiles";
        return tdir + "/" + b + "/" + e + "/" + a + bmapcfg.imgext;
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };
    var Pa = new Dd("\u5730\u56fe", Hd, {
            tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
            maxZoom: 19
        }),
        Id = new Mc;
    Id.WN = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Id.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y,
            f = 256 * Math.pow(2, 20 - b),
            e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.WN[Math.abs(c + e) % this.WN.length] + this.map.Sb + "/" + this.map.hw + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    };
    var Sa = new Dd("\u4e09\u7ef4", Id, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new jb
    });
    Sa.$b = function (a) {
        return Math.pow(2, 20 - a)
    };
    Sa.nk = function (a) {
        if (!a) return "";
        var b = H.GB,
            c;
        for (c in b)
            if (-1 < a.search(c)) return b[c].Lx;
        return ""
    };
    Sa.JK = function (a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        } [a]
    };
    var Jd = new Mc({
        $v: p
    });
    Jd.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y;
        return (Ed[Math.abs(c + e) % Ed.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Sb("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var ab = new Dd("\u536b\u661f", Jd, {
            tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
            minZoom: 4,
            maxZoom: 19,
            textColor: "white"
        }),
        Kd = new Mc({
            transparentPng: p
        });
    Kd.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y,
            f = Sb("satelliteStreet");
        return (Fd[Math.abs(c + e) % Fd.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == z.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    };
    var Va = new Dd("\u6df7\u5408", [Jd, Kd], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var Ld = 1,
        X = {};
    window.M0 = X;

    function Y(a, b) {
        z.lang.Ga.call(this);
        this.Ad = {};
        this.Jm(a);
        b = b || {};
        b.pa = b.renderOptions || {};
        this.m = {
            pa: {
                Oa: b.pa.panel || q,
                map: b.pa.map || q,
                Wg: b.pa.autoViewport || p,
                nt: b.pa.selectFirstResult,
                Es: b.pa.highlightMode,
                Xb: b.pa.enableDragging || t
            },
            bt: b.onSearchComplete || u(),
            HM: b.onMarkersSet || u(),
            GM: b.onInfoHtmlSet || u(),
            JM: b.onResultsHtmlSet || u(),
            FM: b.onGetBusListComplete || u(),
            EM: b.onGetBusLineComplete || u(),
            CM: b.onBusListHtmlSet || u(),
            BM: b.onBusLineHtmlSet || u(),
            lE: b.onPolylinesSet || u(),
            gp: b.reqFrom || ""
        };
        this.m.pa.Wg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
        this.m.pa.Oa = z.Ec(this.m.pa.Oa)
    }
    z.wa(Y, z.lang.Ga);
    z.extend(Y.prototype, {
        getResults: function () {
            return this.Gc ? this.Bi : this.ma
        },
        enableAutoViewport: function () {
            this.m.pa.Wg = p
        },
        disableAutoViewport: function () {
            this.m.pa.Wg = t
        },
        Jm: function (a) {
            a && (this.Ad.src = a)
        },
        At: function (a) {
            this.m.bt = a || u()
        },
        setMarkersSetCallback: function (a) {
            this.m.HM = a || u()
        },
        setPolylinesSetCallback: function (a) {
            this.m.lE = a || u()
        },
        setInfoHtmlSetCallback: function (a) {
            this.m.GM = a || u()
        },
        setResultsHtmlSetCallback: function (a) {
            this.m.JM = a || u()
        },
        im: x("Me")
    });
    var Md = {
        ZF: D.od,
        pb: function (a, b, c, e, f) {
            this.CZ(b);
            var g = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + g] = function (b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {}, a && a(b, c), delete D._rd["_cbk" + g])
            };
            e = e || "";
            b = c && c.q0 ? Hb(b, encodeURI) : Hb(b, encodeURIComponent);
            this.ZF = c && c.sK ? c.kN ? c.kN : D.Zo : D.od;
            e = this.ZF + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + qa);
            pa(e)
        },
        CZ: function (a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag"
                }
                "" !== b && D.alog("cus.fire", "count", b)
            }
        }
    };
    window.a1 = Md;
    D._rd = {};
    var db = {};
    window.$0 = db;
    db.gN = function (a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    };
    db.jZ = function (a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    db.kZ = function (a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var Nd = 2,
        Od = 6,
        Pd = 8,
        Qd = 2,
        Rd = 3,
        Sd = 6,
        Td = 0,
        Ud = "bt",
        Vd = "nav",
        Wd = "walk",
        Xd = "bl",
        Yd = "bsl",
        Zd = "ride",
        $d = 15,
        ae = 18;
    D.I = window.Instance = z.lang.Oc;

    function be(a, b, c) {
        z.lang.Ga.call(this);
        if (a) {
            this.Ya = "object" == typeof a ? a : z.Ec(a);
            this.page = 1;
            this.Kd = 100;
            this.qJ = "pg";
            this.Vf = 4;
            this.BJ = b;
            this.update = p;
            a = {
                page: 1,
                I5: 100,
                Kd: 100,
                Vf: 4,
                qJ: "pg",
                update: p
            };
            c || (c = a);
            for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
            this.za()
        }
    }
    z.extend(be.prototype, {
        za: function () {
            this.xa()
        },
        xa: function () {
            this.YU();
            this.Ya.innerHTML = this.wV()
        },
        YU: function () {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Kd)) && (this.Kd = 1);
            1 > this.page && (this.page = 1);
            1 > this.Kd && (this.Kd = 1);
            this.page > this.Kd && (this.page = this.Kd);
            this.page = parseInt(this.page);
            this.Kd = parseInt(this.Kd)
        },
        u3: function () {
            location.search.match(RegExp("[?&]?" + this.qJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        wV: function () {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Vf) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ea + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ea + "').toPage(" + b + ");"))
            }
            if (this.page < this.Vf) e = 0 == this.page % this.Vf ? this.page - this.Vf - 1 : this.page - this.page % this.Vf + 1, b = e + this.Vf - 1;
            else {
                e = Math.floor(this.Vf / 2);
                var f = this.Vf % 2 - 1,
                    b = this.Kd > this.page + e ? this.page + e : this.Kd;
                e = this.page - e - f
            }
            this.page > this.Kd - this.Vf && this.page >= this.Vf && (e = this.Kd - this.Vf + 1, b = this.Kd);
            for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Kd && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.ea + "').toPage(" + f + ");"))));
            c > this.Kd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ea + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function (a) {
            a = a ? a : 1;
            "function" == typeof this.BJ && (this.BJ(a), this.page = a);
            this.update && this.za()
        }
    });

    function fb(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.pp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.gC() : this.AC();
        this.Ba = [];
        this.uf = [];
        this.eb = -1;
        this.Sa = [];
        var c = this;
        K.load("local", function () {
            c.Wy()
        }, p)
    }
    z.wa(fb, Y, "LocalSearch");
    fb.Ip = 10;
    fb.W0 = 1;
    fb.Zm = 100;
    fb.NF = 2E3;
    fb.WF = 1E5;
    z.extend(fb.prototype, {
        search: function (a, b) {
            this.Sa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Gm: function (a, b, c) {
            this.Sa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        mp: function (a, b, c, e) {
            this.Sa.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        Re: function () {
            delete this.Ma;
            delete this.Me;
            delete this.ma;
            delete this.ya;
            this.eb = -1;
            this.Xa();
            this.m.pa.Oa && (this.m.pa.Oa.innerHTML = "")
        },
        lm: u(),
        AC: function () {
            this.m.pa.nt = p
        },
        gC: function () {
            this.m.pa.nt = t
        },
        pp: function (a) {
            this.m.Bk = "number" == typeof a && !isNaN(a) ? 1 > a ? fb.Ip : a > fb.Zm ? fb.Ip : a : fb.Ip
        },
        mf: function () {
            return this.m.Bk
        },
        toString: da("LocalSearch")
    });
    var ce = fb.prototype;
    V(ce, {
        clearResults: ce.Re,
        setPageCapacity: ce.pp,
        getPageCapacity: ce.mf,
        gotoPage: ce.lm,
        searchNearby: ce.mp,
        searchInBounds: ce.Gm,
        search: ce.search,
        enableFirstResultSelection: ce.AC,
        disableFirstResultSelection: ce.gC
    });

    function de(a, b) {
        Y.call(this, a, b)
    }
    z.wa(de, Y, "BaseRoute");
    z.extend(de.prototype, {
        Re: u()
    });

    function ee(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.zt(b.policy);
        this.zN(b.intercityPolicy);
        this.JN(b.transitTypePolicy);
        this.pp(b.pageCapacity);
        this.Gb = Ud;
        this.Op = Ld;
        this.Ba = [];
        this.eb = -1;
        this.m.wn = b.enableTraffic || t;
        this.Sa = [];
        var c = this;
        K.load("route", function () {
            c.Sd()
        })
    }
    ee.Zm = 100;
    ee.TO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    ee.UO = [0, 3, 4, 0, 0, 0, 5];
    z.wa(ee, de, "TransitRoute");
    z.extend(ee.prototype, {
        zt: function (a) {
            this.m.ie = 0 <= a && 5 >= a ? a : 0
        },
        zN: function (a) {
            this.m.qm = 0 <= a && 2 >= a ? a : 0
        },
        JN: function (a) {
            this.m.Pm = 0 <= a && 2 >= a ? a : 0
        },
        Yz: function (a, b) {
            this.Sa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function (a, b) {
            this.Sa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        pp: function (a) {
            if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                this.m.Bk = ee.Zm;
                return
            }
            this.m.Bk = "number" !== typeof a ? ee.Zm : 1 <= a && a <= ee.Zm ? Math.round(a) : ee.Zm
        },
        toString: da("TransitRoute"),
        M1: function (a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var fe = ee.prototype;
    V(fe, {
        _internalSearch: fe.Yz
    });

    function ge(a, b) {
        Y.call(this, a, b);
        this.Ba = [];
        this.eb = -1;
        this.Sa = [];
        var c = this,
            e = this.m.pa;
        1 !== e.Es && 2 !== e.Es && (e.Es = 1);
        this.Fu = this.m.pa.Xb ? p : t;
        K.load("route", function () {
            c.Sd()
        });
        this.KD && this.KD()
    }
    ge.iP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    z.wa(ge, de, "DWRoute");
    z.extend(ge.prototype, {
        search: function (a, b, c) {
            this.Sa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });

    function he(a, b) {
        ge.call(this, a, b);
        b = b || {};
        this.m.wn = b.enableTraffic || t;
        this.zt(b.policy);
        this.Gb = Vd;
        this.Op = Rd
    }
    z.wa(he, ge, "DrivingRoute");
    he.prototype.zt = function (a) {
        this.m.ie = 0 <= a && 5 >= a ? a : 0
    };

    function ie(a, b) {
        ge.call(this, a, b);
        this.Gb = Wd;
        this.Op = Qd;
        this.Fu = t
    }
    z.wa(ie, ge, "WalkingRoute");

    function je(a, b) {
        ge.call(this, a, b);
        this.Gb = Zd;
        this.Op = Sd;
        this.Fu = t
    }
    z.wa(je, ge, "RidingRoute");

    function ke(a, b) {
        z.lang.Ga.call(this);
        this.Rf = [];
        this.Dk = [];
        this.m = b;
        this.oj = a;
        this.map = this.m.pa.map || q;
        this.sN = this.m.sN;
        this.Fb = q;
        this.gk = 0;
        this.$E = "";
        this.kf = 1;
        this.HC = "";
        this.hp = [0, 0, 0, 0, 0, 0, 0];
        this.eM = [];
        this.Jr = [1, 1, 1, 1, 1, 1, 1];
        this.dO = [1, 1, 1, 1, 1, 1, 1];
        this.ip = [0, 0, 0, 0, 0, 0, 0];
        this.Em = [0, 0, 0, 0, 0, 0, 0];
        this.Kb = [{
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Qm: 0,
            x: 0,
            y: 0,
            ra: -1
        }];
        this.Sh = -1;
        this.Pt = [];
        this.lF = [];
        K.load("route", u())
    }
    z.lang.wa(ke, z.lang.Ga, "RouteAddr");
    var le = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(le);
    var ne = /android/i.test(le);

    function oe(a) {
        this.Ve = a || {}
    }
    z.extend(oe.prototype, {
        rN: function (a, b, c) {
            var e = this;
            K.load("route", function () {
                e.Sd(a, b, c)
            })
        }
    });

    function pe(a) {
        this.m = {};
        z.extend(this.m, a);
        this.Sa = [];
        var b = this;
        K.load("othersearch", function () {
            b.Sd()
        })
    }
    z.wa(pe, z.lang.Ga, "Geocoder");
    z.extend(pe.prototype, {
        hm: function (a, b, c) {
            this.Sa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        fm: function (a, b, c) {
            this.Sa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var qe = pe.prototype;
    V(qe, {
        getPoint: qe.hm,
        getLocation: qe.fm
    });

    function Geolocation(a) {
        a = a || {};
        this.R = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            vi: a.SDKLocation || t
        };
        this.oe = [];
        var b = this;
        K.load("othersearch", function () {
            for (var a = 0, e; e = b.oe[a]; a++) b[e.method].apply(b, e.arguments)
        })
    }
    z.extend(Geolocation.prototype, {
        getCurrentPosition: function (a, b) {
            this.oe.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function () {
            return Nd
        },
        enableSDKLocation: function () {
            I() && (this.R.vi = p)
        },
        disableSDKLocation: function () {
            this.R.vi = t
        }
    });

    function re(a) {
        a = a || {};
        a.pa = a.renderOptions || {};
        this.m = {
            pa: {
                map: a.pa.map || q
            }
        };
        this.Sa = [];
        var b = this;
        K.load("othersearch", function () {
            b.Sd()
        })
    }
    z.wa(re, z.lang.Ga, "LocalCity");
    z.extend(re.prototype, {
        get: function (a) {
            this.Sa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });

    function se() {
        this.Sa = [];
        var a = this;
        K.load("othersearch", function () {
            a.Sd()
        })
    }
    z.wa(se, z.lang.Ga, "Boundary");
    z.extend(se.prototype, {
        get: function (a, b) {
            this.Sa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });

    function we(a, b) {
        Y.call(this, a, b);
        this.fP = Xd;
        this.hP = $d;
        this.eP = Yd;
        this.gP = ae;
        this.Sa = [];
        var c = this;
        K.load("buslinesearch", function () {
            c.Sd()
        })
    }
    we.Uu = H.sa + "iw_plus.gif";
    we.$R = H.sa + "iw_minus.gif";
    we.RT = H.sa + "stop_icon.png";
    z.wa(we, Y);
    z.extend(we.prototype, {
        getBusList: function (a) {
            this.Sa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function (a) {
            this.Sa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function (a) {
            this.m.FM = a || u()
        },
        setGetBusLineCompleteCallback: function (a) {
            this.m.EM = a || u()
        },
        setBusListHtmlSetCallback: function (a) {
            this.m.CM = a || u()
        },
        setBusLineHtmlSetCallback: function (a) {
            this.m.BM = a || u()
        },
        setPolylinesSetCallback: function (a) {
            this.m.lE = a || u()
        }
    });

    function xe(a) {
        Y.call(this, a);
        a = a || {};
        this.$a = {
            input: a.input || q,
            zB: a.baseDom || q,
            types: a.types || [],
            bt: a.onSearchComplete || u()
        };
        this.Ad.src = a.location || "\u5168\u56fd";
        this.Si = "";
        this.kg = q;
        this.xH = "";
        this.Ii();
        Ta(Ka);
        var b = this;
        K.load("autocomplete", function () {
            b.Sd()
        })
    }
    z.wa(xe, Y, "Autocomplete");
    z.extend(xe.prototype, {
        Ii: u(),
        show: u(),
        $: u(),
        QE: function (a) {
            this.$a.types = a
        },
        Jm: function (a) {
            this.Ad.src = a
        },
        search: ba("Si"),
        Xx: ba("xH"),
        At: function (a) {
            this.$a.bt = a
        }
    });
    var Wa;

    function Ra(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Ke && Xa() && f.m.haveBreakId && f.m.indoorExitControl === p ? z.U.show(f.Cq) : z.U.$(f.Cq), this.m.closeControl && this.yf && this.M && this.M.Ra() === this.P ? z.U.show(f.yf) : z.U.$(f.yf), this.m.forceCloseControl && z.U.show(f.yf)) : (z.U.$(f.yf), z.U.$(f.Cq))
        }
        this.P = "string" == typeof a ? z.da(a) : a;
        this.ea = ye++;
        this.m = {
            enableScrollWheelZoom: p,
            panoramaRenderer: Qa() ? "javascript" : "flash",
            swfSrc: D.$h("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: p,
            indoorExitControl: p,
            indoorFloorControl: t,
            linksControl: p,
            clickOnRoad: p,
            navigationControl: p,
            closeControl: p,
            indoorSceneSwitchControl: p,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {},
            e;
        for (e in b) this.m[e] = b[e];
        b.closeControl === p && (this.m.forceCloseControl = p);
        b.useWebGL === t && Qa(t);
        this.Ia = {
            heading: 0,
            pitch: 0
        };
        this.En = [];
        this.Mb = this.bb = q;
        this.Vj = this.zq();
        this.Ba = [];
        this.Mc = 1;
        this.Ke = this.xS = this.bl = "";
        this.Je = {};
        this.Kf = q;
        this.Pg = [];
        this.Sq = [];
        "cvsRender" == this.Vj || Qa() ? (this.Nj = 90, this.Pj = -90) : "cssRender" == this.Vj && (this.Nj = 45, this.Pj = -45);
        this.Wq = t;
        var f = this;
        this.Fn = function () {
            this.Vj === "flashRender" ? K.load("panoramaflash", function () {
                f.Ii()
            }, p) : K.load("panorama", function () {
                f.lb()
            }, p);
            b.lf == "api" ? Ta(Ga) : Ta(Ha);
            this.Fn = u()
        };
        this.m.kS !== p && (this.Fn(), D.Vp("cus.fire", "count", "z_loadpanoramacount"));
        this.bT(this.P);
        this.addEventListener("id_changed", function () {
            Ta(Fa, {
                from: b.lf
            })
        });
        this.tP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var ze = 4,
        Ae = 1,
        Be = 5,
        ye = 0;
    z.lang.wa(Ra, z.lang.Ga, "Panorama");
    z.extend(Ra.prototype, {
        tP: function () {
            var a = this,
                b = this.yf = O("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function () {
                a.$()
            };
            this.P.appendChild(b);
            var c = this.Cq = O("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function () {
                a.Bo()
            };
            this.P.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
        },
        Bo: u(),
        bT: function (a) {
            var b, c;
            b = a.style;
            c = Ya(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Ya(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        eX: x("En"),
        Zb: x("bb"),
        FX: x("Dv"),
        IN: x("Dv"),
        ka: x("Mb"),
        Ha: x("Ia"),
        ja: x("Mc"),
        cj: x("bl"),
        w3: function () {
            return this.H1 || []
        },
        r3: x("xS"),
        zs: x("Ke"),
        $x: function (a) {
            a !== this.Ke && (this.Ke = a, this.dispatchEvent(new Q("onscene_type_changed")))
        },
        HN: function (a) {
            a !== Be && (Be = a)
        },
        CN: function (a) {
            a !== ze && (ze = a)
        },
        Cc: function (a, b, c) {
            "object" === typeof b && (c = b, b = l);
            a != this.bb && (this.ml = this.bb, this.nl = this.Mb, this.bb = a, this.Ke = b || "street", this.Mb = q, c && c.pov && this.rd(c.pov))
        },
        ua: function (a) {
            a.Yb(this.Mb) || (this.ml = this.bb, this.nl = this.Mb, this.Mb = a, this.bb = q)
        },
        rd: function (a) {
            if (a) {
                var a = this.Ia.pitch,
                    b = this.Ia.heading,
                    b = this.ZB(b);
                a > this.Nj ? a = this.Nj : a < this.Pj && (a = this.Pj);
                this.Wq = p;
                this.Ia.pitch = a;
                this.Ia.heading = b
            }
        },
        r_: function (a, b) {
            this.Pj = 0 <= a ? 0 : a;
            this.Nj = 0 >= b ? 0 : b
        },
        ZB: function (a) {
            return a - 360 * Math.floor(a / 360)
        },
        Rc: function (a) {
            a != this.Mc && (a > ze && (a = ze), a < Ae && (a = Ae), a != this.Mc && (this.Mc = a), "cssRender" === this.Vj && this.rd(this.Ia))
        },
        UA: function () {
            if (this.M)
                for (var a = this.M.Tw(), b = 0; b < a.length; b++)(a[b] instanceof W || a[b] instanceof uc) && a[b].point && this.Ba.push(a[b])
        },
        NE: ba("M"),
        yt: function (a) {
            this.Kf = a || "none"
        },
        sj: function (a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b]) this.m[b][c] = a[b][c];
                else this.m[b] = a[b];
                a.closeControl === p && (this.m.forceCloseControl = p);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new Q("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new Q("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new Q("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new Q("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new Q("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new Q("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new Q("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new Q("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new Q("onindoorfloor_options_changed"))
                }
            }
        },
        xk: function () {
            this.vl.style.visibility = "hidden"
        },
        ey: function () {
            this.vl.style.visibility = "visible"
        },
        mW: function () {
            this.m.enableScrollWheelZoom = p
        },
        OV: function () {
            this.m.enableScrollWheelZoom = t
        },
        show: function () {
            this.m.visible = p
        },
        $: function () {
            this.m.visible = t
        },
        zq: function () {
            return Xa() && !I() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !I() && Pb() ? "cvsRender" : "cssRender"
        },
        Pa: function (a) {
            this.Je[a.kd] = a
        },
        Ub: function (a) {
            delete this.Je[a]
        },
        Yw: function () {
            return this.m.visible
        },
        ah: function () {
            return new P(this.P.clientWidth, this.P.clientHeight)
        },
        Ra: x("P"),
        GK: function () {
            var a = D.$h("baidumap", "?"),
                b = this.Zb();
            if (b) {
                var b = {
                        panotype: this.zs(),
                        heading: this.Ha().heading,
                        pitch: this.Ha().pitch,
                        pid: b,
                        panoid: b,
                        from: "api"
                    },
                    c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        dx: function () {
            this.sj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        UE: function () {
            this.sj({
                copyrightControlOptions: {
                    logoVisible: p
                }
            })
        },
        rB: function (a) {
            function b(a, b) {
                return function () {
                    a.Sq.push({
                        qM: b,
                        pM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f], this[e] = b(this, e);
            this.Pg.push(a)
        },
        yE: function (a) {
            for (var b = this.Pg.length; b--;) this.Pg[b] === a && this.Pg.splice(b, 1)
        },
        ME: u()
    });
    var Ce = Ra.prototype;
    V(Ce, {
        setId: Ce.Cc,
        setPosition: Ce.ua,
        setPov: Ce.rd,
        setZoom: Ce.Rc,
        setOptions: Ce.sj,
        getId: Ce.Zb,
        getPosition: Ce.ka,
        getPov: Ce.Ha,
        getZoom: Ce.ja,
        getLinks: Ce.eX,
        getBaiduMapUrl: Ce.GK,
        hideMapLogo: Ce.dx,
        showMapLogo: Ce.UE,
        enableDoubleClickZoom: Ce.H2,
        disableDoubleClickZoom: Ce.y2,
        enableScrollWheelZoom: Ce.mW,
        disableScrollWheelZoom: Ce.OV,
        show: Ce.show,
        hide: Ce.$,
        addPlugin: Ce.rB,
        removePlugin: Ce.yE,
        getVisible: Ce.Yw,
        addOverlay: Ce.Pa,
        removeOverlay: Ce.Ub,
        getSceneType: Ce.zs,
        setPanoramaPOIType: Ce.yt,
        exitInter: Ce.Bo,
        setInteractiveState: Ce.ME
    });
    V(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });

    function De() {
        z.lang.Ga.call(this);
        this.kd = "PanoramaOverlay_" + this.ea;
        this.W = q;
        this.Ta = p
    }
    z.lang.wa(De, z.lang.Ga, "PanoramaOverlayBase");
    z.extend(De.prototype, {
        s3: x("kd"),
        xa: function () {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function () {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Jf: function () {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });

    function Ee(a, b) {
        De.call(this);
        var c = {
                position: q,
                altitude: 2,
                displayDistance: p
            },
            b = b || {},
            e;
        for (e in b) c[e] = b[e];
        this.Mb = c.position;
        this.Cj = a;
        this.Wp = c.altitude;
        this.EQ = c.displayDistance;
        this.dF = c.color;
        this.tL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.tJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.xJ = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.DD = c.imageUrl;
        this.size = c.size;
        this.xe = c.image;
        this.width = c.width;
        this.height = c.height;
        this.ZX = c.imageData;
        this.borderWidth = c.borderWidth
    }
    z.lang.wa(Ee, De, "PanoramaLabel");
    z.extend(Ee.prototype, {
        X2: x("borderWidth"),
        getImageData: x("ZX"),
        km: x("dF"),
        m3: x("tL"),
        T2: x("backgroundColor"),
        U2: x("tJ"),
        V2: x("borderColor"),
        W2: x("xJ"),
        k3: x("fontSize"),
        t3: x("padding"),
        n3: x("DD"),
        Eb: x("size"),
        Nw: x("xe"),
        ua: function (a) {
            this.Mb = a;
            this.Jf("position", a)
        },
        ka: x("Mb"),
        cd: function (a) {
            this.Cj = a;
            this.Jf("content", a)
        },
        ok: x("Cj"),
        GE: function (a) {
            this.Wp = a;
            this.Jf("altitude", a)
        },
        Fo: x("Wp"),
        Ha: function () {
            var a = this.ka(),
                b = q,
                c = q;
            this.W && (c = this.W.ka());
            if (a && c)
                if (a.Yb(c)) b = this.W.Ha();
                else {
                    b = {};
                    b.heading = Fe(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b,
                        c = this.Fo(),
                        e = this.zn();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                } return b
        },
        zn: function () {
            var a = 0,
                b, c;
            this.W && (b = this.W.ka(), (c = this.ka()) && !c.Yb(b) && (a = S.pk(b, c)));
            return a
        },
        $: function () {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function () {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Jf: u()
    });
    var Ge = Ee.prototype;
    V(Ge, {
        setPosition: Ge.ua,
        getPosition: Ge.ka,
        setContent: Ge.cd,
        getContent: Ge.ok,
        setAltitude: Ge.GE,
        getAltitude: Ge.Fo,
        getPov: Ge.Ha,
        show: Ge.show,
        hide: Ge.$
    });

    function He(a, b) {
        De.call(this);
        var c = {
                icon: "",
                title: "",
                panoInfo: q,
                altitude: 2
            },
            b = b || {},
            e;
        for (e in b) c[e] = b[e];
        this.Mb = a;
        this.uH = c.icon;
        this.MI = c.title;
        this.Wp = c.altitude;
        this.OS = c.panoInfo;
        this.Ia = {
            heading: 0,
            pitch: 0
        }
    }
    z.lang.wa(He, De, "PanoramaMarker");
    z.extend(He.prototype, {
        ua: function (a) {
            this.Mb = a;
            this.Jf("position", a)
        },
        ka: x("Mb"),
        Dc: function (a) {
            this.MI = a;
            this.Jf("title", a)
        },
        Mo: x("MI"),
        Vb: function (a) {
            this.uH = icon;
            this.Jf("icon", a)
        },
        Ho: x("uH"),
        GE: function (a) {
            this.Wp = a;
            this.Jf("altitude", a)
        },
        Fo: x("Wp"),
        nD: x("OS"),
        Ha: function () {
            var a = q;
            if (this.W) {
                var a = this.W.ka(),
                    b = this.ka(),
                    a = Fe(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.Ia;
            return a
        },
        Jf: u()
    });
    var Ie = He.prototype;
    V(Ie, {
        setPosition: Ie.ua,
        getPosition: Ie.ka,
        setTitle: Ie.Dc,
        getTitle: Ie.Mo,
        setAltitude: Ie.GE,
        getAltitude: Ie.Fo,
        getPanoInfo: Ie.nD,
        getIcon: Ie.Ho,
        setIcon: Ie.Vb,
        getPov: Ie.Ha
    });

    function Fe(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
                e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Qa(a) {
        if ("boolean" === typeof Je) return Je;
        if (a === t || !window.WebGLRenderingContext) return Je = t;
        if (z.platform.lj) {
            a = 0;
            try {
                a = navigator.userAgent.split("Android ")[1].charAt(0)
            } catch (b) {}
            if (5 > a) return Je = t
        }
        var a = document.createElement("canvas"),
            c = q;
        try {
            c = a.getContext("webgl")
        } catch (e) {
            Je = t
        }
        return Je = c === q ? t : p
    }
    var Je;

    function Ke() {
        if ("boolean" === typeof Le) return Le;
        Le = p;
        if (z.platform.ND) return p;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : Le = t
    }
    var Le;

    function ec(a, b) {
        this.W = a || q;
        var c = this;
        c.W && c.ga();
        K.load("pservice", function () {
            c.ZP()
        });
        "api" == (b || {}).lf ? Ta(Ia) : Ta(Ja);
        this.yd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    D.Ck(function (a) {
        "flashRender" !== a.zq() && new ec(a, {
            lf: "api"
        })
    });
    z.extend(ec.prototype, {
        ga: function () {
            function a(a) {
                if (a) {
                    if (a.id != b.Dv) {
                        b.IN(a.id);
                        b.ha = a;
                        Ke() || b.dispatchEvent(new Q("onthumbnail_complete"));
                        b.bb != q && (b.nl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                                case "position":
                                    b.Mb = a[c];
                                    break;
                                case "id":
                                    b.bb = a[c];
                                    break;
                                case "links":
                                    b.En = a[c];
                                    break;
                                case "zoom":
                                    b.Mc = a[c]
                            }
                        if (b.nl) {
                            var g = b.nl,
                                i = b._position;
                            c = g.lat;
                            var k = i.lat,
                                m = U(k - c),
                                g = U(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(U(c)) * Math.cos(U(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.KG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new Q("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new Q("onposition_changed"));
                        b.dispatchEvent(new Q("onlinks_changed"));
                        b.dispatchEvent(new Q("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.Rl ? (b.sj({
                            haveBreakId: p
                        }), Xa() && b.m.closeControl && z.U.show(b.Cq)) : z.U.$(b.Cq)
                    }
                } else b.bb = b.ml, b.Mb = b.nl, b.dispatchEvent(new Q("onnoresult"))
            }
            var b = this.W,
                c = this;
            b.addEventListener("id_changed", function () {
                c.Ko(b.Zb(), a)
            });
            b.addEventListener("iid_changed", function () {
                c.Qg(ec.Xk + "qt=idata&iid=" + b.Oz + "&fn=", function (b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            f = {};
                        f.Rl = b.BreakID;
                        for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            } f.id = i.StartID || i.Points[0].PID;
                        c.Ko(f.id, a, f)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function () {
                c.fj(b.ka(), a)
            })
        },
        Ko: function (a, b) {
            this.yd.getPanoramaById.push(arguments)
        },
        fj: function (a, b, c) {
            this.yd.getPanoramaByLocation.push(arguments)
        },
        yD: function (a, b, c, e) {
            this.yd.getVisiblePOIs.push(arguments)
        },
        Ww: function (a, b) {
            this.yd.getRecommendPanosById.push(arguments)
        },
        Vw: function (a) {
            this.yd.getPanoramaVersions.push(arguments)
        },
        EB: function (a, b) {
            this.yd.checkPanoSupportByCityCode.push(arguments)
        },
        Uw: function (a, b) {
            this.yd.getPanoramaByPOIId.push(arguments)
        },
        KK: function (a) {
            this.yd.getCopyrightProviders.push(arguments)
        }
    });
    var Me = ec.prototype;
    V(Me, {
        getPanoramaById: Me.Ko,
        getPanoramaByLocation: Me.fj,
        getPanoramaByPOIId: Me.Uw
    });

    function dc(a) {
        Mc.call(this);
        "api" == (a || {}).lf ? Ta(Ca) : Ta(Da)
    }
    dc.dG = D.$h("pano", "tile/");
    dc.prototype = new Mc;
    dc.prototype.getTilesUrl = function (a, b) {
        var c = dc.dG[(a.x + a.y) % dc.dG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        z.fa.na && 6 >= z.fa.na && (c += "&color_dep=32");
        return c
    };
    dc.prototype.Qs = da(p);
    Ne.Wd = new S;

    function Ne() {}
    z.extend(Ne, {
        PV: function (a, b, c) {
            c = z.lang.Oc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Ne.Wd.rj(new R(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new Q("on" + a), b)
        }
    });
    var Oe = Ne;
    V(Oe, {
        dispatchFlashEvent: Oe.PV
    });
    var Pe = {
        WO: 50
    };
    Pe.ju = D.$h("pano")[0];
    Pe.hu = {
        width: 220,
        height: 60
    };
    z.extend(Pe, {
        CL: function (a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance) e();
            else {
                this.Kn === l && (this.Kn = new ec(q, {
                    lf: "api"
                }));
                var f = this;
                this.Kn.EB(b, function (b) {
                    b ? f.Kn.fj(c.lngLat, Pe.WO, function (b) {
                        if (b && b.id) {
                            var g = b.id,
                                m = b.jh,
                                b = b.kh,
                                n = ec.Wd.vg(c.lngLat),
                                o = f.CR(n, {
                                    x: m,
                                    y: b
                                }),
                                m = f.VK(g, o, 0, Pe.hu.width, Pe.hu.height);
                            a.content = f.DR(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function () {
                                ja.V(z.Ec("infoWndPano"), "click", function () {
                                    c.panoInstance.Cc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.rd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        DR: function (a, b, c, e) {
            var c = c || "",
                f;
            !e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a.substring(0, f), a = a.substring(f));
            f = [];
            var g = Pe.hu.width,
                i = Pe.hu.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        CR: function (a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        VK: function (a, b, c, e, f) {
            var g = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            };
            return (Pe.ju + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function (a, b) {
                return g[b]
            })
        }
    });
    var Qe = document,
        Re = Math,
        Se = Qe.createElement("div").style,
        Te;
    a: {
        for (var Ue = ["t", "webkitT", "MozT", "msT", "OT"], Ve, We = 0, Xe = Ue.length; We < Xe; We++)
            if (Ve = Ue[We] + "ransform", Ve in Se) {
                Te = Ue[We].substr(0, Ue[We].length - 1);
                break a
            } Te = t
    }
    var Ye = Te ? "-" + Te.toLowerCase() + "-" : "",
        $e = Ze("transform"),
        af = Ze("transitionProperty"),
        bf = Ze("transitionDuration"),
        cf = Ze("transformOrigin"),
        df = Ze("transitionTimingFunction"),
        ef = Ze("transitionDelay"),
        ne = /android/gi.test(navigator.appVersion),
        ff = /iphone|ipad/gi.test(navigator.appVersion),
        gf = /hp-tablet/gi.test(navigator.appVersion),
        hf = Ze("perspective") in Se,
        jf = "ontouchstart" in window && !gf,
        kf = Te !== t,
        lf = Ze("transition") in Se,
        mf = "onorientationchange" in window ? "orientationchange" : "resize",
        nf = jf ? "touchstart" : "mousedown",
        of = jf ? "touchmove" : "mousemove",
        pf = jf ? "touchend" : "mouseup",
        qf = jf ? "touchcancel" : "mouseup",
        rf = Te === t ? t : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        } [Te],
        sf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return setTimeout(a, 1)
        },
        tf = window.cancelRequestAnimationFrame || window.Z5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
        uf = hf ? " translateZ(0)" : "";

    function vf(a, b) {
        var c = this,
            e;
        c.Um = "object" == typeof a ? a : Qe.getElementById(a);
        c.Um.style.overflow = "hidden";
        c.Pb = c.Um.children[0];
        c.options = {
            Qo: p,
            Rm: p,
            x: 0,
            y: 0,
            mo: p,
            JU: t,
            xx: p,
            $D: p,
            Qk: p,
            si: t,
            $_: 0,
            fw: t,
            $w: p,
            ai: p,
            ti: p,
            NC: ne,
            ex: ff,
            uW: ff && hf,
            DE: "",
            zoom: t,
            Sk: 1,
            Ep: 4,
            RV: 2,
            BO: "scroll",
            Ht: t,
            hy: 1,
            IM: q,
            AM: function (a) {
                a.preventDefault()
            },
            LM: q,
            zM: q,
            KM: q,
            yM: q,
            Dx: q,
            MM: q,
            DM: q,
            cp: q,
            NM: q,
            bp: q
        };
        for (e in b) c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Qk = kf && c.options.Qk;
        c.options.ai = c.options.Qo && c.options.ai;
        c.options.ti = c.options.Rm && c.options.ti;
        c.options.zoom = c.options.Qk && c.options.zoom;
        c.options.si = lf && c.options.si;
        c.options.zoom && ne && (uf = "");
        c.Pb.style[af] = c.options.Qk ? Ye + "transform" : "top left";
        c.Pb.style[bf] = "0";
        c.Pb.style[cf] = "0 0";
        c.options.si && (c.Pb.style[df] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Qk ? c.Pb.style[$e] = "translate(" + c.x + "px," + c.y + "px)" + uf : c.Pb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.si && (c.options.NC = p);
        c.refresh();
        c.ga(mf, window);
        c.ga(nf);
        !jf && "none" != c.options.BO && (c.ga("DOMMouseScroll"), c.ga("mousewheel"));
        c.options.fw && (c.XU = setInterval(function () {
            c.XP()
        }, 500));
        this.options.$w && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.sL || b, c) : e.call(document.body, a, b, c)
        }, document.body.addEventListener = function (a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.sL || (b.sL = function (a) {
                a.BZ || b(a)
            }), c) : e.call(document.body, a, b, c)
        }), c.ga("click", document.body, p))
    }
    vf.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        tj: [],
        scale: 1,
        UB: 0,
        VB: 0,
        We: [],
        qf: [],
        yB: q,
        ty: 0,
        handleEvent: function (a) {
            switch (a.type) {
                case nf:
                    if (!jf && 0 !== a.button) break;
                    this.wv(a);
                    break;
                case of:
                    this.zS(a);
                    break;
                case pf:
                case qf:
                    this.Gu(a);
                    break;
                case mf:
                    this.NA();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.cU(a);
                    break;
                case rf:
                    this.$T(a);
                    break;
                case "click":
                    this.gQ(a)
            }
        },
        XP: function () {
            !this.ih && (!this.Tk && !(this.Ol || this.Wx == this.Pb.offsetWidth * this.scale && this.lp == this.Pb.offsetHeight * this.scale)) && this.refresh()
        },
        nv: function (a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Qe.createElement("div"), this.options.DE ? b.className = this.options.DE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.ti ? "7" : "2") + "px" : "width:7px;bottom:" + (this.ai ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + Ye + "transition-property:opacity;" + Ye + "transition-duration:" + (this.options.uW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.ex ? "0" : "1"), this.Um.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Qe.createElement("div"), this.options.DE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Ye + "background-clip:padding-box;" + Ye + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Ye + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + Ye + "transition-property:" + Ye + "transform;" + Ye + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Ye + "transition-duration:0;" + Ye + "transform: translate(0,0)" + uf, this.options.si && (b.style.cssText += ";" + Ye + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.oL = this.pL.clientWidth, this.QX = Re.max(Re.round(this.oL * this.oL / this.Wx), 8), this.PX.style.width = this.QX + "px") : (this.tO = this.uO.clientHeight, this.u0 = Re.max(Re.round(this.tO * this.tO / this.lp), 8), this.t0.style.height = this.u0 + "px"), this.OA(a, p)) : this[a + "ScrollbarWrapper"] && (kf && (this[a + "ScrollbarIndicator"].style[$e] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = q, this[a + "ScrollbarIndicator"] = q)
        },
        NA: function () {
            var a = this;
            setTimeout(function () {
                a.refresh()
            }, ne ? 200 : 0)
        },
        Vq: function (a, b) {
            this.Tk || (a = this.Qo ? a : 0, b = this.Rm ? b : 0, this.options.Qk ? this.Pb.style[$e] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + uf : (a = Re.round(a), b = Re.round(b), this.Pb.style.left = a + "px", this.Pb.style.top = b + "px"), this.x = a, this.y = b, this.OA("h"), this.OA("v"))
        },
        OA: function (a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.NC || (c = this[a + "ScrollbarIndicatorSize"] + Re.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.NC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Re.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[ef] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.ex ? "0" : "1", this[a + "ScrollbarIndicator"].style[$e] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + uf)
        },
        gQ: function (a) {
            if (a.XQ === p) return this.nB = a.target, this.Fw = Date.now(), p;
            if (this.nB && this.Fw) {
                if (600 < Date.now() - this.Fw) return this.Fw = this.nB = q, p
            } else {
                for (var b = a.target; b != this.Pb && b != document.body;) b = b.parentNode;
                if (b == document.body) return p
            }
            for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.BZ = p, a.stopPropagation(), a.preventDefault(), this.Fw = this.nB = q, t
        },
        wv: function (a) {
            var b = jf ? a.touches[0] : a,
                c, e;
            if (this.enabled) {
                this.options.AM && this.options.AM.call(this, a);
                (this.options.si || this.options.zoom) && this.OI(0);
                this.Tk = this.Ol = this.ih = t;
                this.dC = this.cC = this.Pv = this.Ov = this.jC = this.iC = 0;
                this.options.zoom && (jf && 1 < a.touches.length) && (e = Re.abs(a.touches[0].pageX - a.touches[1].pageX), c = Re.abs(a.touches[0].pageY - a.touches[1].pageY), this.b0 = Re.sqrt(e * e + c * c), this.Fx = Re.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.wF) / 2 - this.x, this.Gx = Re.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.xF) / 2 - this.y, this.options.cp && this.options.cp.call(this, a));
                if (this.options.xx && (this.options.Qk ? (c = getComputedStyle(this.Pb, q)[$e].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Pb, q).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Pb, q).top.replace(/[^0-9-]/g, "")), e != this.x || c != this.y)) this.options.si ? this.$d(rf) : tf(this.yB), this.tj = [], this.Vq(e, c), this.options.Dx && this.options.Dx.call(this);
                this.Qv = this.x;
                this.Rv = this.y;
                this.Kt = this.x;
                this.Lt = this.y;
                this.jh = b.pageX;
                this.kh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.LM && this.options.LM.call(this, a);
                this.ga( of , window);
                this.ga(pf, window);
                this.ga(qf, window)
            }
        },
        zS: function (a) {
            var b = jf ? a.touches[0] : a,
                c = b.pageX - this.jh,
                e = b.pageY - this.kh,
                f = this.x + c,
                g = this.y + e,
                i = a.timeStamp || Date.now();
            this.options.zM && this.options.zM.call(this, a);
            if (this.options.zoom && jf && 1 < a.touches.length) f = Re.abs(a.touches[0].pageX - a.touches[1].pageX), g = Re.abs(a.touches[0].pageY - a.touches[1].pageY), this.a0 = Re.sqrt(f * f + g * g), this.Tk = p, b = 1 / this.b0 * this.a0 * this.scale, b < this.options.Sk ? b = 0.5 * this.options.Sk * Math.pow(2, b / this.options.Sk) : b > this.options.Ep && (b = 2 * this.options.Ep * Math.pow(0.5, this.options.Ep / b)), this.Wo = b / this.scale, f = this.Fx - this.Fx * this.Wo + this.x, g = this.Gx - this.Gx * this.Wo + this.y, this.Pb.style[$e] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + uf, this.options.NM && this.options.NM.call(this, a);
            else {
                this.jh = b.pageX;
                this.kh = b.pageY;
                if (0 < f || f < this.he) f = this.options.mo ? this.x + c / 2 : 0 <= f || 0 <= this.he ? 0 : this.he;
                if (g > this.of || g < this.qd) g = this.options.mo ? this.y + e / 2 : g >= this.of || 0 <= this.qd ? this.of : this.qd;
                this.iC += c;
                this.jC += e;
                this.Ov = Re.abs(this.iC);
                this.Pv = Re.abs(this.jC);
                6 > this.Ov && 6 > this.Pv || (this.options.$D && (this.Ov > this.Pv + 5 ? (g = this.y, e = 0) : this.Pv > this.Ov + 5 && (f = this.x, c = 0)), this.ih = p, this.Vq(f, g), this.cC = 0 < c ? -1 : 0 > c ? 1 : 0, this.dC = 0 < e ? -1 : 0 > e ? 1 : 0, 300 < i - this.startTime && (this.startTime = i, this.Kt = this.x, this.Lt = this.y), this.options.KM && this.options.KM.call(this, a))
            }
        },
        Gu: function (a) {
            if (!(jf && 0 !== a.touches.length)) {
                var b = this,
                    c = jf ? a.changedTouches[0] : a,
                    e, f, g = {
                        Fa: 0,
                        time: 0
                    },
                    i = {
                        Fa: 0,
                        time: 0
                    },
                    k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.$d( of , window);
                b.$d(pf, window);
                b.$d(qf, window);
                b.options.yM && b.options.yM.call(b, a);
                if (b.Tk) e = b.scale * b.Wo, e = Math.max(b.options.Sk, e), e = Math.min(b.options.Ep, e), b.Wo = e / b.scale, b.scale = e, b.x = b.Fx - b.Fx * b.Wo + b.x, b.y = b.Gx - b.Gx * b.Wo + b.y, b.Pb.style[bf] = "200ms", b.Pb.style[$e] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + uf, b.Tk = t, b.refresh(), b.options.bp && b.options.bp.call(b, a);
                else {
                    if (b.ih) {
                        if (300 > k && b.options.xx) {
                            g = e ? b.KH(e - b.Kt, k, -b.x, b.Wx - b.Yt + b.x, b.options.mo ? b.Yt : 0) : g;
                            i = f ? b.KH(f - b.Lt, k, -b.y, 0 > b.qd ? b.lp - b.Vm + b.y - b.of : 0, b.options.mo ? b.Vm : 0) : i;
                            e = b.x + g.Fa;
                            f = b.y + i.Fa;
                            if (0 < b.x && 0 < e || b.x < b.he && e < b.he) g = {
                                Fa: 0,
                                time: 0
                            };
                            if (b.y > b.of && f > b.of || b.y < b.qd && f < b.qd) i = {
                                Fa: 0,
                                time: 0
                            }
                        }
                        g.Fa || i.Fa ? (c = Re.max(Re.max(g.time, i.time), 10), b.options.Ht && (g = e - b.Qv, i = f - b.Rv, Re.abs(g) < b.options.hy && Re.abs(i) < b.options.hy ? b.scrollTo(b.Qv, b.Rv, 200) : (g = b.EI(e, f), e = g.x, f = g.y, c = Re.max(g.time, c))), b.scrollTo(Re.round(e), Re.round(f), c)) : b.options.Ht ? (g = e - b.Qv, i = f - b.Rv, Re.abs(g) < b.options.hy && Re.abs(i) < b.options.hy ? b.scrollTo(b.Qv, b.Rv, 200) : (g = b.EI(b.x, b.y), (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.Mn(200)
                    } else {
                        if (jf)
                            if (b.bK && b.options.zoom) clearTimeout(b.bK), b.bK = q, b.options.cp && b.options.cp.call(b, a), b.zoom(b.jh, b.kh, 1 == b.scale ? b.options.RV : 1), b.options.bp && setTimeout(function () {
                                b.options.bp.call(b, a)
                            }, 200);
                            else if (this.options.$w) {
                            for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
                            f = e.tagName.toLowerCase();
                            "select" != f && "input" != f && "textarea" != f ? (f = Qe.createEvent("MouseEvents"), f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, q), f.XQ = p, e.dispatchEvent(f)) : e.focus()
                        }
                        b.Mn(400)
                    }
                    b.options.MM && b.options.MM.call(b, a)
                }
            }
        },
        Mn: function (a) {
            var b = 0 <= this.x ? 0 : this.x < this.he ? this.he : this.x,
                c = this.y >= this.of || 0 < this.qd ? this.of : this.y < this.qd ? this.qd : this.y;
            if (b == this.x && c == this.y) {
                if (this.ih && (this.ih = t, this.options.Dx && this.options.Dx.call(this)), this.ai && this.options.ex && ("webkit" == Te && (this.pL.style[ef] = "300ms"), this.pL.style.opacity = "0"), this.ti && this.options.ex) "webkit" == Te && (this.uO.style[ef] = "300ms"), this.uO.style.opacity = "0"
            } else this.scrollTo(b, c, a || 0)
        },
        cU: function (a) {
            var b = this,
                c, e;
            if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, e = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
            else if ("detail" in a) c = e = 3 * -a.detail;
            else return;
            if ("zoom" == b.options.BO) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.Sk && (e = b.options.Sk), e > b.options.Ep && (e = b.options.Ep), e != b.scale) !b.ty && b.options.cp && b.options.cp.call(b, a), b.ty++, b.zoom(a.pageX, a.pageY, e, 400), setTimeout(function () {
                    b.ty--;
                    !b.ty && b.options.bp && b.options.bp.call(b, a)
                }, 400)
            } else c = b.x + c, e = b.y + e, 0 < c ? c = 0 : c < b.he && (c = b.he), e > b.of ? e = b.of : e < b.qd && (e = b.qd), 0 > b.qd && b.scrollTo(c, e, 0)
        },
        $T: function (a) {
            a.target == this.Pb && (this.$d(rf), this.$A())
        },
        $A: function () {
            var a = this,
                b = a.x,
                c = a.y,
                e = Date.now(),
                f, g, i;
            a.Ol || (a.tj.length ? (f = a.tj.shift(), f.x == b && f.y == c && (f.time = 0), a.Ol = p, a.ih = p, a.options.si) ? (a.OI(f.time), a.Vq(f.x, f.y), a.Ol = t, f.time ? a.ga(rf) : a.Mn(0)) : (i = function () {
                var k = Date.now(),
                    m;
                if (k >= e + f.time) {
                    a.Vq(f.x, f.y);
                    a.Ol = t;
                    a.options.bZ && a.options.bZ.call(a);
                    a.$A()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Re.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Vq(k, m);
                    if (a.Ol) a.yB = sf(i)
                }
            }, i()) : a.Mn(400))
        },
        OI: function (a) {
            a += "ms";
            this.Pb.style[bf] = a;
            this.ai && (this.PX.style[bf] = a);
            this.ti && (this.t0.style[bf] = a)
        },
        KH: function (a, b, c, e, f) {
            var b = Re.abs(a) / b,
                g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))), b = b * e / g, g = e);
            return {
                Fa: g * (0 > a ? -1 : 1),
                time: Re.round(b / 6.0E-4)
            }
        },
        Rj: function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
            a != this.Um && (b *= this.scale, c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        EI: function (a, b) {
            var c, e, f;
            f = this.We.length - 1;
            c = 0;
            for (e = this.We.length; c < e; c++)
                if (a >= this.We[c]) {
                    f = c;
                    break
                } f == this.UB && (0 < f && 0 > this.cC) && f--;
            a = this.We[f];
            e = (e = Re.abs(a - this.We[this.UB])) ? 500 * (Re.abs(this.x - a) / e) : 0;
            this.UB = f;
            f = this.qf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.qf[c]) {
                    f = c;
                    break
                } f == this.VB && (0 < f && 0 > this.dC) && f--;
            b = this.qf[f];
            c = (c = Re.abs(b - this.qf[this.VB])) ? 500 * (Re.abs(this.y - b) / c) : 0;
            this.VB = f;
            f = Re.round(Re.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ga: function (a, b, c) {
            (b || this.Pb).addEventListener(a, this, !!c)
        },
        $d: function (a, b, c) {
            (b || this.Pb).removeEventListener(a, this, !!c)
        },
        aC: ha(2),
        refresh: function () {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.Sk && (this.scale = this.options.Sk);
            this.Yt = this.Um.clientWidth || 1;
            this.Vm = this.Um.clientHeight || 1;
            this.of = -this.options.$_ || 0;
            this.Wx = Re.round(this.Pb.offsetWidth * this.scale);
            this.lp = Re.round((this.Pb.offsetHeight + this.of) * this.scale);
            this.he = this.Yt - this.Wx;
            this.qd = this.Vm - this.lp + this.of;
            this.dC = this.cC = 0;
            this.options.IM && this.options.IM.call(this);
            this.Qo = this.options.Qo && 0 > this.he;
            this.Rm = this.options.Rm && (!this.options.JU && !this.Qo || this.lp > this.Vm);
            this.ai = this.Qo && this.options.ai;
            this.ti = this.Rm && this.options.ti && this.lp > this.Vm;
            a = this.Rj(this.Um);
            this.wF = -a.left;
            this.xF = -a.top;
            if ("string" == typeof this.options.Ht) {
                this.We = [];
                this.qf = [];
                c = this.Pb.querySelectorAll(this.options.Ht);
                a = 0;
                for (b = c.length; a < b; a++) e = this.Rj(c[a]), e.left += this.wF, e.top += this.xF, this.We[a] = e.left < this.he ? this.he : e.left * this.scale, this.qf[a] = e.top < this.qd ? this.qd : e.top * this.scale
            } else if (this.options.Ht) {
                for (this.We = []; e >= this.he;) this.We[b] = e, e -= this.Yt, b++;
                this.he % this.Yt && (this.We[this.We.length] = this.he - this.We[this.We.length - 1] + this.We[this.We.length - 1]);
                b = e = 0;
                for (this.qf = []; e >= this.qd;) this.qf[b] = e, e -= this.Vm, b++;
                this.qd % this.Vm && (this.qf[this.qf.length] = this.qd - this.qf[this.qf.length - 1] + this.qf[this.qf.length - 1])
            }
            this.nv("h");
            this.nv("v");
            this.Tk || (this.Pb.style[bf] = "0", this.Mn(400))
        },
        scrollTo: function (a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                EZ: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++) f[a].EZ && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y), this.tj.push({
                x: f[a].x,
                y: f[a].y,
                time: f[a].time || 0
            });
            this.$A()
        },
        disable: function () {
            this.stop();
            this.Mn(0);
            this.enabled = t;
            this.$d( of , window);
            this.$d(pf, window);
            this.$d(qf, window)
        },
        enable: function () {
            this.enabled = p
        },
        stop: function () {
            this.options.si ? this.$d(rf) : tf(this.yB);
            this.tj = [];
            this.Ol = this.ih = t
        },
        zoom: function (a, b, c, e) {
            var f = c / this.scale;
            this.options.Qk && (this.Tk = p, e = e === l ? 200 : e, a = a - this.wF - this.x, b = b - this.xF - this.y, this.x = a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.he ? this.he : this.x, this.y = this.y > this.of ? this.of : this.y < this.qd ? this.qd : this.y, this.Pb.style[bf] = e + "ms", this.Pb.style[$e] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + uf, this.Tk = t)
        }
    };

    function Ze(a) {
        if ("" === Te) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Te + a
    }
    Se = q;

    function wf(a) {
        this.m = {
            anchor: Yb,
            offset: new P(0, 0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {},
            b;
        for (b in a) this.m[b] = a[b];
        this.Dl = new ec(q, {
            lf: "api"
        });
        this.Tj = [];
        this.W = q;
        this.dg = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * xf
        };
        this.Sc = this.PA = this.Rl = this.Yc = q
    }
    var yf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        zf = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    D.Ck(function (a) {
        var b = q;
        a.addEventListener("position_changed", function () {
            a.m.visible && a.m.albumsControl === p && (b ? b.Rx(a.Zb()) : (b = new wf(a.m.albumsControlOptions), b.xa(a)))
        });
        a.addEventListener("albums_visible_changed", function () {
            a.m.albumsControl === p ? (b ? b.Rx(a.Zb()) : (b = new wf(a.m.albumsControlOptions), b.xa(a)), b.show()) : b.$()
        });
        a.addEventListener("albums_options_changed", function () {
            b && b.sj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function () {
            b && (a.Yw() ? a.m.albumsControl === p && (b.P.style.visibility = "visible") : b.P.style.visibility = "hidden")
        })
    });
    var xf = 1.8;
    I() && (xf = 1);
    z.extend(wf.prototype, {
        sj: function (a) {
            for (var b in a) this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.uc(this.m.anchor);
            this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            this.P.style.height = a;
            this.Yj.style.height = a;
            this.Jh.style.height = a;
            this.dg = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * xf
            };
            this.Xj.style.height = this.dg.height - 6 + "px";
            this.Xj.style.width = this.dg.width - 6 + "px";
            this.Rx(this.W.Zb(), p)
        },
        xa: function (a) {
            this.W = a;
            this.Ir();
            this.FP();
            this.gY();
            this.Rx(a.Zb())
        },
        Ir: function () {
            var a = this.m.imageHeight + "px";
            this.P = O("div");
            var b = this.P.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.Yj = O("div");
            b = this.Yj.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Jh = O("div");
            b = this.Jh.style;
            b.height = a;
            this.Yj.appendChild(this.Jh);
            this.P.appendChild(this.Yj);
            this.W.P.appendChild(this.P);
            this.Xj = O("div", {
                "class": "pano_photo_item_seleted"
            });
            this.Xj.style.height = this.dg.height - 6 + "px";
            this.Xj.style.width = this.dg.width - 6 + "px";
            this.uc(this.m.anchor)
        },
        eH: function (a) {
            for (var b = this.Tj, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a) return c;
            return -1
        },
        Rx: function (a, b) {
            if (b || !this.Tj[this.Yc] || !(this.Tj[this.Yc].panoId == a && 3 !== this.Tj[this.Yc].recoType)) {
                var c = this,
                    e = this.eH(a);
                !b && -1 !== e && this.Tj[e] && 3 !== this.Tj[e].recoType ? this.op(e) : this.uX(function (a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, s = a.length; o < s; o++) e = a[o].catlog, k = a[o].floor, l !== e && ("" === e && l !== k ? (m = p, b[k] || (b[k] = []), b[k].push(a[o])) : (b[yf[e]] || (b[yf[e]] = []), b[yf[e]].push(a[o])));
                    for (var v in b) m ? n.push({
                        data: v + "F",
                        index: v
                    }) : n.push({
                        data: zf[v],
                        index: v
                    });
                    c.yG = b;
                    c.Gi = n;
                    c.Al(a);
                    0 == a.length ? c.$() : c.show()
                })
            }
        },
        xV: function () {
            if (!this.Di) {
                var a = this.hX(this.Gi),
                    b = O("div");
                b.style.cssText = ["width:" + 134 * this.Gi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = O("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new vf(a, {
                    mo: t,
                    xx: p,
                    ai: t,
                    ti: t,
                    Rm: t,
                    $D: p,
                    fw: p,
                    $w: p
                });
                this.P.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++) b = e[f], z.V(b, "click", function () {
                    if (this.getAttribute("dataindex")) {
                        c.Al(c.yG[this.getAttribute("dataindex")]);
                        for (var a = 0, b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
                        this.style.color = "#3383FF"
                    }
                });
                this.Di = a
            }
        },
        uV: function () {
            if (this.Di) a = this.IK(this.Gi), this.VP.innerHTML = a;
            else {
                var a = this.IK(this.Gi),
                    b = O("ul"),
                    c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                z.V(b, "click", function (a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.Al(c.yG[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++) e[f].childNodes[0].getAttribute("dataindex") === a ? z.U.fb(e[f], "pano_catlogLiActive") : z.U.tc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = O("div"),
                    e = O("a"),
                    f = O("span"),
                    g = O("a"),
                    i = O("span"),
                    k = ["background:url(" + H.sa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                z.V(e, "mouseover", function () {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new vb({
                        Ic: 60,
                        dc: wb.as,
                        duration: 300,
                        za: function (c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                z.V(e, "mouseout", function () {
                    f.style.backgroundPosition = "-18px 0"
                });
                z.V(g, "mouseover", function () {
                    var a = parseInt(b.style.top, 10),
                        e = c.m.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new vb({
                            Ic: 60,
                            dc: wb.as,
                            duration: 300,
                            za: function (c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                z.V(g, "mouseout", function () {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = O("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.Di = e;
                this.VP = b;
                this.P.appendChild(e)
            }
        },
        vV: function () {
            if (this.Gi && !(0 >= this.Gi.length)) {
                var a = O("div");
                a.innerHTML = this.rz;
                a.style.cssText = "position:absolute;background:#252525";
                this.P.appendChild(a);
                this.es = a;
                this.Sc.fg.style.left = this.dg.width + 8 + "px";
                this.Di && (this.Di.style.left = parseInt(this.Di.style.left, 10) + this.dg.width + 8 + "px");
                var b = this;
                z.V(a, "click", function () {
                    b.W.Cc(b.qW)
                })
            }
        },
        Al: function (a) {
            this.Tj = a;
            this.m.showCatalog && (0 < this.Gi.length ? (Xa() ? this.uV() : this.xV(), this.Sc.offsetLeft = 60) : (this.es && (this.P.removeChild(this.es), this.es = q, this.Sc.fg.style.left = "0px"), this.Di && (this.P.removeChild(this.Di), this.Di = q), this.Sc.offsetLeft = 0));
            var b = this.aX(a);
            Xa() && (this.Gi && 0 < this.Gi.length && this.m.showExit && this.rz) && (this.Sc.offsetLeft += this.dg.width + 8, this.es ? this.es.innerHTML = this.rz : this.vV());
            this.Jh.innerHTML = b;
            this.Jh.style.width = (this.dg.width + 8) * a.length + 8 + "px";
            a = this.P.offsetWidth;
            b = this.Jh.offsetWidth;
            this.Sc.ls && (b += this.Sc.ls());
            b < a - 2 * this.Sc.wi - this.Sc.offsetLeft ? this.P.style.width = b + this.Sc.offsetLeft + "px" : (this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px", b < this.P.offsetWidth - 2 * this.Sc.wi - this.Sc.offsetLeft && (this.P.style.width = b + this.Sc.offsetLeft + "px"));
            this.Sc.refresh();
            this.PA = this.Jh.children;
            this.Jh.appendChild(this.Xj);
            this.Xj.style.left = "-100000px";
            a = this.eH(this.W.Zb(), this.L1); - 1 !== a && this.op(a)
        },
        hX: function (a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>", b += c;
            return b
        },
        IK: function (a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>", b += c;
            return b
        },
        aX: function (a) {
            for (var b, c, e, f, g = [], i = this.dg.height, k = this.dg.width, m = 0; m < a.length; m++) b = a[m], recoType = b.recoType, e = b.panoId, f = b.name, c = b.heading, b = b.pitch, c = Pe.VK(e, c, b, 198, 108), b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>", 3 === recoType ? Xa() ? (this.rz = b, this.qW = e, a.splice(m, 1), m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.sa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>', g.push(b)) : g.push(b);
            return g.join("")
        },
        uX: function (a) {
            var b = this,
                c = this.W.Zb();
            c && this.Dl.Ww(c, function (e) {
                b.W.Zb() === c && a(e)
            })
        },
        uc: function (a) {
            if (!Za(a) || isNaN(a) || a < Vb || 3 < a) a = this.defaultAnchor;
            var b = this.P,
                c = this.m.offset.width,
                e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Vb:
                    b.style.top = e + "px";
                    b.style.left = c + "px";
                    break;
                case Xb:
                    b.style.top = e + "px";
                    b.style.right = c + "px";
                    break;
                case Yb:
                    b.style.bottom = e + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = e + "px", b.style.right = c + "px"
            }
        },
        FP: function () {
            this.DP()
        },
        DP: function () {
            var a = this;
            z.V(this.P, "touchstart", function (a) {
                a.stopPropagation()
            });
            z.V(this.Yj, "click", function (b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Yc) a.op(b), a.W.Cc(a.Tj[b].panoId)
            });
            z.V(this.Jh, "mouseover", function (b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== q && a.LJ(b, p)
            });
            this.W.addEventListener("size_changed", function () {
                isNaN(Number(a.m.maxWidth)) && a.sj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        op: function (a) {
            this.Xj.style.left = this.PA[a].offsetLeft + 8 + "px";
            this.Xj.setAttribute("data-index", this.PA[a].getAttribute("data-index"));
            this.Yc = a;
            this.LJ(a)
        },
        LJ: function (a, b) {
            var c = this.dg.width + 8,
                e = 0;
            this.Sc.ls && (e = this.Sc.ls() / 2);
            var f = this.Yj.offsetWidth - 2 * e,
                g = this.Jh.offsetLeft || this.Sc.x,
                g = g - e,
                i = -a * c;
            i > g && this.Sc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Sc.scrollTo(c + f + e)
        },
        gY: function () {
            this.Sc = I() ? new vf(this.Yj, {
                mo: t,
                xx: p,
                ai: t,
                ti: t,
                Rm: t,
                $D: p,
                fw: p,
                $w: p
            }) : new Af(this.Yj)
        },
        $: function () {
            this.P.style.visibility = "hidden"
        },
        show: function () {
            this.P.style.visibility = "visible"
        }
    });

    function Af(a) {
        this.P = a;
        this.Sg = a.children[0];
        this.lr = q;
        this.wi = 20;
        this.offsetLeft = 0;
        this.xa()
    }
    Af.prototype = {
        xa: function () {
            this.Sg.style.position = "relative";
            this.refresh();
            this.Ir();
            this.AB()
        },
        refresh: function () {
            this.In = this.P.offsetWidth - this.ls();
            this.mA = -(this.Sg.offsetWidth - this.In - this.wi);
            this.Zu = this.wi + this.offsetLeft;
            this.Sg.style.left = this.Zu + "px";
            this.Sg.children[0] && (this.lr = this.Sg.children[0].offsetWidth);
            this.fg && (this.fg.children[0].style.marginTop = this.cr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px")
        },
        ls: function () {
            return 2 * this.wi
        },
        Ir: function () {
            this.ov = O("div");
            this.ov.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.fg = this.ov.children[0];
            this.cr = this.ov.children[1];
            this.P.appendChild(this.ov);
            this.fg.children[0].style.marginTop = this.cr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px"
        },
        AB: function () {
            var a = this;
            z.V(this.fg, "click", function () {
                a.scrollTo(a.Sg.offsetLeft + a.In)
            });
            z.V(this.cr, "click", function () {
                a.scrollTo(a.Sg.offsetLeft - a.In)
            })
        },
        aU: function () {
            z.U.tc(this.fg, "pano_arrow_disable");
            z.U.tc(this.cr, "pano_arrow_disable");
            var a = this.Sg.offsetLeft;
            a >= this.Zu && z.U.fb(this.fg, "pano_arrow_disable");
            a - this.In <= this.mA && z.U.fb(this.cr, "pano_arrow_disable")
        },
        scrollTo: function (a) {
            a = a < this.Sg.offsetLeft ? Math.ceil((a - this.wi - this.In) / this.lr) * this.lr + this.In + this.wi - 8 : Math.ceil((a - this.wi) / this.lr) * this.lr + this.wi;
            a < this.mA ? a = this.mA : a > this.Zu && (a = this.Zu);
            var b = this.Sg.offsetLeft,
                c = this;
            new vb({
                Ic: 60,
                dc: wb.as,
                duration: 300,
                za: function (e) {
                    c.Sg.style.left = b + (a - b) * e + "px"
                },
                finish: function () {
                    c.aU()
                }
            })
        }
    };
    D.Map = Oa;
    D.Hotspot = kb;
    D.MapType = Dd;
    D.Point = J;
    D.Pixel = R;
    D.Size = P;
    D.Bounds = hb;
    D.TileLayer = Mc;
    D.Projection = jc;
    D.MercatorProjection = S;
    D.PerspectiveProjection = jb;
    D.Copyright = function (a, b, c) {
        this.id = a;
        this.gb = b;
        this.content = c
    };
    D.Overlay = mc;
    D.Label = uc;
    D.GroundOverlay = vc;
    D.PointCollection = zc;
    D.Marker = W;
    D.CanvasLayer = Cc;
    D.Icon = qc;
    D.IconSequence = sc;
    D.Symbol = rc;
    D.Polyline = Gc;
    D.Polygon = Fc;
    D.InfoWindow = tc;
    D.Circle = Hc;
    D.Control = Ub;
    D.NavigationControl = lb;
    D.GeolocationControl = Zb;
    D.OverviewMapControl = nb;
    D.CopyrightControl = $b;
    D.ScaleControl = mb;
    D.MapTypeControl = ob;
    D.CityListControl = ac;
    D.PanoramaControl = cc;
    D.TrafficLayer = Uc;
    D.CustomLayer = pb;
    D.ContextMenu = fc;
    D.MenuItem = ic;
    D.LocalSearch = fb;
    D.TransitRoute = ee;
    D.DrivingRoute = he;
    D.WalkingRoute = ie;
    D.RidingRoute = je;
    D.Autocomplete = xe;
    D.RouteSearch = oe;
    D.Geocoder = pe;
    D.LocalCity = re;
    D.Geolocation = Geolocation;
    D.Convertor = lc;
    D.BusLineSearch = we;
    D.Boundary = se;
    D.Panorama = Ra;
    D.PanoramaLabel = Ee;
    D.PanoramaService = ec;
    D.PanoramaCoverageLayer = dc;
    D.PanoramaFlashInterface = Ne;

    function V(a, b) {
        for (var c in b) a[c] = b[c]
    }
    V(window, {
        BMap: D,
        _jsload2: function (a, b) {
            ja.iy.vY && ja.iy.set(a, b);
            K.WU(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Bf = Oa.prototype;
    V(Bf, {
        getBounds: Bf.ue,
        getCenter: Bf.Db,
        getMapType: Bf.va,
        getSize: Bf.Eb,
        setSize: Bf.Ce,
        getViewport: Bf.Bs,
        getZoom: Bf.ja,
        centerAndZoom: Bf.Fd,
        panTo: Bf.mi,
        panBy: Bf.yg,
        setCenter: Bf.rf,
        setCurrentCity: Bf.KE,
        setMapType: Bf.Bg,
        setViewport: Bf.oh,
        setZoom: Bf.Rc,
        highResolutionEnabled: Bf.gx,
        zoomTo: Bf.Dg,
        zoomIn: Bf.yF,
        zoomOut: Bf.zF,
        addHotspot: Bf.pB,
        removeHotspot: Bf.GZ,
        clearHotspots: Bf.kw,
        checkResize: Bf.ZU,
        addControl: Bf.yr,
        removeControl: Bf.fN,
        getContainer: Bf.Ra,
        addContextMenu: Bf.bo,
        removeContextMenu: Bf.fp,
        addOverlay: Bf.Pa,
        removeOverlay: Bf.Ub,
        clearOverlays: Bf.IJ,
        openInfoWindow: Bf.ad,
        closeInfoWindow: Bf.Xc,
        pointToOverlayPixel: Bf.Xe,
        overlayPixelToPoint: Bf.PM,
        getInfoWindow: Bf.dh,
        getOverlays: Bf.Tw,
        getPanes: function () {
            return {
                floatPane: this.Yd.OC,
                markerMouseTarget: this.Yd.cE,
                floatShadow: this.Yd.zK,
                labelPane: this.Yd.WD,
                markerPane: this.Yd.nM,
                markerShadow: this.Yd.oM,
                mapPane: this.Yd.Vs,
                vertexPane: this.Yd.xO
            }
        },
        addTileLayer: Bf.Oe,
        removeTileLayer: Bf.Wf,
        pixelToPoint: Bf.Ib,
        pointToPixel: Bf.Tb,
        setFeatureStyle: Bf.r5,
        selectBaseElement: Bf.k5,
        setMapStyle: Bf.wt,
        enable3DBuilding: Bf.xo,
        disable3DBuilding: Bf.LV,
        getPanorama: Bf.xs,
        initIndoorLayer: Bf.hY,
        setNormalMapDisplay: Bf.Yx,
        setMapStyleV2: Bf.l_,
        setBMapCopyrightOffset: Bf.JE,
        getVectorContainer: Bf.JX
    });
    var Cf = Dd.prototype;
    V(Cf, {
        getTileLayer: Cf.DX,
        getMinZoom: Cf.dj,
        getMaxZoom: Cf.Zh,
        getProjection: Cf.tk,
        getTextColor: Cf.km,
        getTips: Cf.As
    });
    V(window, {
        BMAP_NORMAL_MAP: Pa,
        BMAP_PERSPECTIVE_MAP: Sa,
        BMAP_SATELLITE_MAP: ab,
        BMAP_HYBRID_MAP: Va
    });
    var Df = S.prototype;
    V(Df, {
        lngLatToPoint: Df.vg,
        pointToLngLat: Df.rj
    });
    var Ef = jb.prototype;
    V(Ef, {
        lngLatToPoint: Ef.vg,
        pointToLngLat: Ef.rj
    });
    var Ff = hb.prototype;
    V(Ff, {
        equals: Ff.Yb,
        containsPoint: Ff.Gr,
        containsBounds: Ff.kV,
        intersects: Ff.Js,
        extend: Ff.extend,
        getCenter: Ff.Db,
        isEmpty: Ff.nj,
        getSouthWest: Ff.Ue,
        getNorthEast: Ff.Of,
        toSpan: Ff.iF
    });
    var Gf = mc.prototype;
    V(Gf, {
        isVisible: Gf.Pc,
        show: Gf.show,
        hide: Gf.$
    });
    mc.getZIndex = mc.vk;
    var Hf = ib.prototype;
    V(Hf, {
        openInfoWindow: Hf.ad,
        closeInfoWindow: Hf.Xc,
        enableMassClear: Hf.$i,
        disableMassClear: Hf.NV,
        show: Hf.show,
        hide: Hf.$,
        getMap: Hf.Pw,
        addContextMenu: Hf.bo,
        removeContextMenu: Hf.fp
    });
    var If = W.prototype;
    V(If, {
        setIcon: If.Vb,
        getIcon: If.Ho,
        setPosition: If.ua,
        getPosition: If.ka,
        setOffset: If.Md,
        getOffset: If.ej,
        getLabel: If.hD,
        setLabel: If.Im,
        setTitle: If.Dc,
        setTop: If.qi,
        enableDragging: If.Xb,
        disableDragging: If.fC,
        setZIndex: If.vp,
        getMap: If.Pw,
        setAnimation: If.Hm,
        setShadow: If.ay,
        hide: If.$,
        setRotation: If.qp,
        getRotation: If.ZK
    });
    V(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Jf = uc.prototype;
    V(Jf, {
        setStyle: Jf.Nd,
        setStyles: Jf.pi,
        setContent: Jf.cd,
        setPosition: Jf.ua,
        getPosition: Jf.ka,
        setOffset: Jf.Md,
        getOffset: Jf.ej,
        setTitle: Jf.Dc,
        setZIndex: Jf.vp,
        getMap: Jf.Pw,
        getContent: Jf.ok
    });
    var Kf = qc.prototype;
    V(Kf, {
        setImageUrl: Kf.wN,
        setSize: Kf.Ce,
        setAnchor: Kf.uc,
        setImageOffset: Kf.vt,
        setImageSize: Kf.f_,
        setInfoWindowAnchor: Kf.i_,
        setPrintImageUrl: Kf.u_
    });
    var Lf = tc.prototype;
    V(Lf, {
        redraw: Lf.je,
        setTitle: Lf.Dc,
        setContent: Lf.cd,
        getContent: Lf.ok,
        getPosition: Lf.ka,
        enableMaximize: Lf.$g,
        disableMaximize: Lf.Aw,
        isOpen: Lf.Za,
        setMaxContent: Lf.xt,
        maximize: Lf.wx,
        enableAutoPan: Lf.bs
    });
    var Mf = oc.prototype;
    V(Mf, {
        getPath: Mf.Te,
        setPath: Mf.ke,
        setPositionAt: Mf.Km,
        getStrokeColor: Mf.AX,
        setStrokeWeight: Mf.up,
        getStrokeWeight: Mf.bL,
        setStrokeOpacity: Mf.rp,
        getStrokeOpacity: Mf.BX,
        setFillOpacity: Mf.ut,
        getFillOpacity: Mf.VW,
        setStrokeStyle: Mf.sp,
        getStrokeStyle: Mf.aL,
        getFillColor: Mf.UW,
        getBounds: Mf.ue,
        enableEditing: Mf.jf,
        disableEditing: Mf.MV,
        getEditing: Mf.RW,
        getGeodesicPath: Mf.XW
    });
    var Nf = Hc.prototype;
    V(Nf, {
        setCenter: Nf.rf,
        getCenter: Nf.Db,
        getRadius: Nf.XK,
        setRadius: Nf.sf
    });
    var Of = Fc.prototype;
    V(Of, {
        getPath: Of.Te,
        setPath: Of.ke,
        setPositionAt: Of.Km
    });
    var Pf = kb.prototype;
    V(Pf, {
        getPosition: Pf.ka,
        setPosition: Pf.ua,
        getText: Pf.sD,
        setText: Pf.Bt
    });
    J.prototype.equals = J.prototype.Yb;
    R.prototype.equals = R.prototype.Yb;
    P.prototype.equals = P.prototype.Yb;
    V(window, {
        BMAP_ANCHOR_TOP_LEFT: Vb,
        BMAP_ANCHOR_TOP_RIGHT: Xb,
        BMAP_ANCHOR_BOTTOM_LEFT: Yb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Qf = Ub.prototype;
    V(Qf, {
        setAnchor: Qf.uc,
        getAnchor: Qf.VC,
        setOffset: Qf.Md,
        getOffset: Qf.ej,
        show: Qf.show,
        hide: Qf.$,
        isVisible: Qf.Pc,
        toString: Qf.toString
    });
    var Rf = lb.prototype;
    V(Rf, {
        getType: Rf.Oo,
        setType: Rf.Lm
    });
    V(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Sf = nb.prototype;
    V(Sf, {
        changeView: Sf.re,
        setSize: Sf.Ce,
        getSize: Sf.Eb
    });
    var Tf = mb.prototype;
    V(Tf, {
        getUnit: Tf.IX,
        setUnit: Tf.RE
    });
    V(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Uf = $b.prototype;
    V(Uf, {
        addCopyright: Uf.Uv,
        removeCopyright: Uf.xE,
        getCopyright: Uf.dm,
        getCopyrightCollection: Uf.bD
    });
    V(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: bc,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Vf = Mc.prototype;
    V(Vf, {
        getMapType: Vf.va,
        getCopyright: Vf.dm,
        isTransparentPng: Vf.Qs
    });
    var Wf = fc.prototype;
    V(Wf, {
        addItem: Wf.Vv,
        addSeparator: Wf.sB,
        removeSeparator: Wf.zE
    });
    var Xf = ic.prototype;
    V(Xf, {
        setText: Xf.Bt
    });
    var Yf = Y.prototype;
    V(Yf, {
        getStatus: Yf.im,
        setSearchCompleteCallback: Yf.At,
        getPageCapacity: Yf.mf,
        setPageCapacity: Yf.pp,
        setLocation: Yf.Jm,
        disableFirstResultSelection: Yf.gC,
        enableFirstResultSelection: Yf.AC,
        gotoPage: Yf.lm,
        searchNearby: Yf.mp,
        searchInBounds: Yf.Gm,
        search: Yf.search
    });
    V(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: Nd,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: Od,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: Pd
    });
    V(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    V(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    V(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    V(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    V(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    V(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var Zf = de.prototype;
    V(Zf, {
        clearResults: Zf.Re
    });
    fe = ee.prototype;
    V(fe, {
        setPolicy: fe.zt,
        toString: fe.toString,
        setPageCapacity: fe.pp,
        setIntercityPolicy: fe.zN,
        setTransitTypePolicy: fe.JN
    });
    V(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    V(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var $f = oe.prototype;
    V($f, {
        routeCall: $f.rN
    });
    V(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    V(window, {
        BMAP_ROUTE_TYPE_DRIVING: Rd,
        BMAP_ROUTE_TYPE_WALKING: Qd,
        BMAP_ROUTE_TYPE_RIDING: Sd
    });
    V(window, {
        BMAP_ROUTE_STATUS_NORMAL: Td,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var ag = he.prototype;
    V(ag, {
        setPolicy: ag.zt
    });
    var cg = xe.prototype;
    V(cg, {
        show: cg.show,
        hide: cg.$,
        setTypes: cg.QE,
        setLocation: cg.Jm,
        search: cg.search,
        setInputValue: cg.Xx
    });
    V(pb.prototype, {});
    var dg = se.prototype;
    V(dg, {
        get: dg.get
    });
    V(dc.prototype, {});
    V(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Xc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    V(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: wc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    V(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: xc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    V(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    V(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: gc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: hc
    });
    V(window, {
        BMAP_SYS_DRAWER: Na,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    D.rU();
    D.y0();
})()