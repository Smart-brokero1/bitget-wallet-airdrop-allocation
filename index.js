(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var Vs = {
    exports: {},
  },
  tl = {},
  Ws = {
    exports: {},
  },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn = Symbol.for("react.element"),
  lc = Symbol.for("react.portal"),
  ic = Symbol.for("react.fragment"),
  oc = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  ac = Symbol.for("react.context"),
  cc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  fc = Symbol.for("react.memo"),
  pc = Symbol.for("react.lazy"),
  Fo = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fo && e[Fo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ks = Object.assign,
  Ys = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ys),
    (this.updater = n || Qs);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xs() {}
Xs.prototype = on.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ys),
    (this.updater = n || Qs);
}
var $i = (Ui.prototype = new Xs());
$i.constructor = Ui;
Ks($i, on.prototype);
$i.isPureReactComponent = !0;
var Io = Array.isArray,
  Gs = Object.prototype.hasOwnProperty,
  Ai = {
    current: null,
  },
  Zs = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function qs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Gs.call(t, r) && !Zs.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), d = 0; d < s; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ai.current,
  };
}
function hc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function vc(e) {
  var t = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Oo = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case lc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + wl(o, 0) : r),
      Io(l)
        ? ((n = ""),
          e != null && (n = e.replace(Oo, "$&/") + "/"),
          xr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Bi(l) &&
            (l = hc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Oo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Io(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + wl(i, s);
      o += xr(i, t, n, a, l);
    }
  else if (((a = mc(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + wl(i, s++)), (o += xr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function yc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = {
    current: null,
  },
  wr = {
    transition: null,
  },
  gc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Ai,
  };
function Js() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = on;
T.Fragment = ic;
T.Profiler = sc;
T.PureComponent = Ui;
T.StrictMode = oc;
T.Suspense = dc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gc;
T.act = Js;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ks({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ai.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Gs.call(t, a) &&
        !Zs.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var d = 0; d < a; d++) s[d] = arguments[d + 2];
    r.children = s;
  }
  return {
    $$typeof: Gn,
    type: e.type,
    key: l,
    ref: i,
    props: r,
    _owner: o,
  };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: ac,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: uc,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
T.createElement = qs;
T.createFactory = function (e) {
  var t = qs.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return {
    current: null,
  };
};
T.forwardRef = function (e) {
  return {
    $$typeof: cc,
    render: e,
  };
};
T.isValidElement = Bi;
T.lazy = function (e) {
  return {
    $$typeof: pc,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: yc,
  };
};
T.memo = function (e, t) {
  return {
    $$typeof: fc,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
T.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
T.unstable_act = Js;
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
Ws.exports = T;
var he = Ws.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc = he,
  wc = Symbol.for("react.element"),
  kc = Symbol.for("react.fragment"),
  Sc = Object.prototype.hasOwnProperty,
  Nc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function bs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Sc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Nc.current,
  };
}
tl.Fragment = kc;
tl.jsx = bs;
tl.jsxs = bs;
Vs.exports = tl;
var u = Vs.exports,
  eu = {
    exports: {},
  },
  xe = {},
  tu = {
    exports: {},
  },
  nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(j, P) {
    var z = j.length;
    j.push(P);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        G = j[W];
      if (0 < l(G, P)) (j[W] = P), (j[z] = G), (z = W);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var P = j[0],
      z = j.pop();
    if (z !== P) {
      j[0] = z;
      e: for (var W = 0, G = j.length, er = G >>> 1; W < er; ) {
        var yt = 2 * (W + 1) - 1,
          xl = j[yt],
          gt = yt + 1,
          tr = j[gt];
        if (0 > l(xl, z))
          gt < G && 0 > l(tr, xl)
            ? ((j[W] = tr), (j[gt] = z), (W = gt))
            : ((j[W] = xl), (j[yt] = z), (W = yt));
        else if (gt < G && 0 > l(tr, z)) (j[W] = tr), (j[gt] = z), (W = gt);
        else break e;
      }
    }
    return P;
  }
  function l(j, P) {
    var z = j.sortIndex - P.sortIndex;
    return z !== 0 ? z : j.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    d = [],
    v = 1,
    h = null,
    m = 3,
    x = !1,
    w = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var P = n(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= j)
        r(d), (P.sortIndex = P.expirationTime), t(a, P);
      else break;
      P = n(d);
    }
  }
  function y(j) {
    if (((k = !1), p(j), !w))
      if (n(a) !== null) (w = !0), yl(N);
      else {
        var P = n(d);
        P !== null && gl(y, P.startTime - j);
      }
  }
  function N(j, P) {
    (w = !1), k && ((k = !1), f(_), (_ = -1)), (x = !0);
    var z = m;
    try {
      for (
        p(P), h = n(a);
        h !== null && (!(h.expirationTime > P) || (j && !Pe()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var G = W(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === n(a) && r(a),
            p(P);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var er = !0;
      else {
        var yt = n(d);
        yt !== null && gl(y, yt.startTime - P), (er = !1);
      }
      return er;
    } finally {
      (h = null), (m = z), (x = !1);
    }
  }
  var E = !1,
    C = null,
    _ = -1,
    V = 5,
    L = -1;
  function Pe() {
    return !(e.unstable_now() - L < V);
  }
  function an() {
    if (C !== null) {
      var j = e.unstable_now();
      L = j;
      var P = !0;
      try {
        P = C(!0, j);
      } finally {
        P ? cn() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var cn;
  if (typeof c == "function")
    cn = function () {
      c(an);
    };
  else if (typeof MessageChannel < "u") {
    var Ro = new MessageChannel(),
      rc = Ro.port2;
    (Ro.port1.onmessage = an),
      (cn = function () {
        rc.postMessage(null);
      });
  } else
    cn = function () {
      D(an, 0);
    };
  function yl(j) {
    (C = j), E || ((E = !0), cn());
  }
  function gl(j, P) {
    _ = D(function () {
      j(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), yl(N));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var z = m;
      m = P;
      try {
        return j();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, P) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var z = m;
      m = j;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (j, P, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
          : (z = W),
        j)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (j = {
          id: v++,
          callback: P,
          priorityLevel: j,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > W
          ? ((j.sortIndex = z),
            t(d, j),
            n(a) === null &&
              j === n(d) &&
              (k ? (f(_), (_ = -1)) : (k = !0), gl(y, z - W)))
          : ((j.sortIndex = G), t(a, j), w || x || ((w = !0), yl(N))),
        j
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (j) {
      var P = m;
      return function () {
        var z = m;
        m = P;
        try {
          return j.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(nu);
tu.exports = nu;
var Ec = tu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc = he,
  ge = Ec;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ru = new Set(),
  Mn = {};
function Lt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) ru.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  _c =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Do = {},
  Uo = {};
function Pc(e) {
  return Kl.call(Uo, e)
    ? !0
    : Kl.call(Do, e)
    ? !1
    : _c.test(e)
    ? (Uo[e] = !0)
    : ((Do[e] = !0), !1);
}
function zc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Tc(e, t, n, r) {
  if (t === null || typeof t > "u" || zc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ue(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ue(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hi = /[\-:]([a-z])/g;
function Vi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hi, Vi);
    ee[t] = new ue(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hi, Vi);
    ee[t] = new ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hi, Vi);
  ee[t] = new ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new ue(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Tc(t, n, l, r) && (n = null),
    r || l === null
      ? Pc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  It = Symbol.for("react.fragment"),
  Qi = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  lu = Symbol.for("react.provider"),
  iu = Symbol.for("react.context"),
  Ki = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Gl = Symbol.for("react.suspense_list"),
  Yi = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  ou = Symbol.for("react.offscreen"),
  $o = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($o && e[$o]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  kl;
function xn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function Nl(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function Lc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case It:
      return "Fragment";
    case Ft:
      return "Portal";
    case Yl:
      return "Profiler";
    case Qi:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case iu:
        return (e.displayName || "Context") + ".Consumer";
      case lu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ki:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Yi:
        return (
          (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Mc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === Qi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function su(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rc(e) {
  var t = su(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Rc(e));
}
function uu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = su(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ao(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function au(e, t) {
  (t = t.checked), t != null && Wi(e, "checked", t, !1);
}
function Jl(e, t) {
  au(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Kt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ho(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {
    initialValue: ft(n),
  };
}
function cu(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function du(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? du(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  fu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function (e) {
  Fc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nn[t] = Nn[e]);
  });
});
function pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nn.hasOwnProperty(e) && Nn[e])
    ? ("" + t).trim()
    : t + "px";
}
function mu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = pu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ic = B(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ni(e, t) {
  if (t) {
    if (Ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function ri(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var li = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  Yt = null,
  Xt = null;
function Wo(e) {
  if ((e = Jn(e))) {
    if (typeof ii != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = ol(t)), ii(e.stateNode, e.type, t));
  }
}
function hu(e) {
  Yt ? (Xt ? Xt.push(e) : (Xt = [e])) : (Yt = e);
}
function vu() {
  if (Yt) {
    var e = Yt,
      t = Xt;
    if (((Xt = Yt = null), Wo(e), t)) for (e = 0; e < t.length; e++) Wo(t[e]);
  }
}
function yu(e, t) {
  return e(t);
}
function gu() {}
var jl = !1;
function xu(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return yu(e, t, n);
  } finally {
    (jl = !1), (Yt !== null || Xt !== null) && (gu(), vu());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var oi = !1;
if (Ke)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    oi = !1;
  }
function Oc(e, t, n, r, l, i, o, s, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var jn = !1,
  Mr = null,
  Rr = !1,
  si = null,
  Dc = {
    onError: function (e) {
      (jn = !0), (Mr = e);
    },
  };
function Uc(e, t, n, r, l, i, o, s, a) {
  (jn = !1), (Mr = null), Oc.apply(Dc, arguments);
}
function $c(e, t, n, r, l, i, o, s, a) {
  if ((Uc.apply(this, arguments), jn)) {
    if (jn) {
      var d = Mr;
      (jn = !1), (Mr = null);
    } else throw Error(g(198));
    Rr || ((Rr = !0), (si = d));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qo(e) {
  if (Mt(e) !== e) throw Error(g(188));
}
function Ac(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Qo(l), e;
        if (i === r) return Qo(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function ku(e) {
  return (e = Ac(e)), e !== null ? Su(e) : null;
}
function Su(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Su(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nu = ge.unstable_scheduleCallback,
  Ko = ge.unstable_cancelCallback,
  Bc = ge.unstable_shouldYield,
  Hc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Vc = ge.unstable_getCurrentPriorityLevel,
  Gi = ge.unstable_ImmediatePriority,
  ju = ge.unstable_UserBlockingPriority,
  Fr = ge.unstable_NormalPriority,
  Wc = ge.unstable_LowPriority,
  Eu = ge.unstable_IdlePriority,
  nl = null,
  $e = null;
function Qc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Xc,
  Kc = Math.log,
  Yc = Math.LN2;
function Xc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
}
var or = 64,
  sr = 4194304;
function kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = kn(s)) : ((i &= o), i !== 0 && (r = kn(i)));
  } else (o = n & ~l), o !== 0 ? (r = kn(o)) : i !== 0 && (r = kn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Gc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Re(i),
      s = 1 << o,
      a = l[o];
    a === -1
      ? (!(s & n) || s & r) && (l[o] = Gc(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ui(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cu() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function qc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Zi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function _u(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pu,
  qi,
  zu,
  Tu,
  Lu,
  ai = !1,
  ur = [],
  lt = null,
  it = null,
  ot = null,
  In = new Map(),
  On = new Map(),
  et = [],
  Jc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      In.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      On.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && qi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return In.set(i, pn(In.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), On.set(i, pn(On.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Mu(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wu(n)), t !== null)) {
          (e.blockedOn = t),
            Lu(e.priority, function () {
              zu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (li = r), n.target.dispatchEvent(r), (li = null);
    } else return (t = Jn(n)), t !== null && qi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xo(e, t, n) {
  kr(e) && n.delete(t);
}
function ed() {
  (ai = !1),
    lt !== null && kr(lt) && (lt = null),
    it !== null && kr(it) && (it = null),
    ot !== null && kr(ot) && (ot = null),
    In.forEach(Xo),
    On.forEach(Xo);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, ed)));
}
function Dn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ur.length) {
    mn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && mn(lt, e),
      it !== null && mn(it, e),
      ot !== null && mn(ot, e),
      In.forEach(t),
      On.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Mu(n), n.blockedOn === null && et.shift();
}
var Gt = Ze.ReactCurrentBatchConfig,
  Or = !0;
function td(e, t, n, r) {
  var l = R,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (R = 1), Ji(e, t, n, r);
  } finally {
    (R = l), (Gt.transition = i);
  }
}
function nd(e, t, n, r) {
  var l = R,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (R = 4), Ji(e, t, n, r);
  } finally {
    (R = l), (Gt.transition = i);
  }
}
function Ji(e, t, n, r) {
  if (Or) {
    var l = ci(e, t, n, r);
    if (l === null) Il(e, t, r, Dr, n), Yo(e, r);
    else if (bc(l, e, t, n, r)) r.stopPropagation();
    else if ((Yo(e, r), t & 4 && -1 < Jc.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jn(l);
        if (
          (i !== null && Pu(i),
          (i = ci(e, t, n, r)),
          i === null && Il(e, t, r, Dr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Dr = null;
function ci(e, t, n, r) {
  if (((Dr = null), (e = Xi(r)), (e = kt(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dr = e), null;
}
function Ru(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vc()) {
        case Gi:
          return 1;
        case ju:
          return 4;
        case Fr:
        case Wc:
          return 16;
        case Eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  bi = null,
  Sr = null;
function Fu() {
  if (Sr) return Sr;
  var e,
    t = bi,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function Go() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : Go),
      (this.isPropagationStopped = Go),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eo = we(sn),
  qn = B({}, sn, {
    view: 0,
    detail: 0,
  }),
  rd = we(qn),
  Cl,
  _l,
  hn,
  rl = B({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((Cl = e.screenX - hn.screenX), (_l = e.screenY - hn.screenY))
              : (_l = Cl = 0),
            (hn = e)),
          Cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _l;
    },
  }),
  Zo = we(rl),
  ld = B({}, rl, {
    dataTransfer: 0,
  }),
  id = we(ld),
  od = B({}, qn, {
    relatedTarget: 0,
  }),
  Pl = we(od),
  sd = B({}, sn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  ud = we(sd),
  ad = B({}, sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cd = we(ad),
  dd = B({}, sn, {
    data: 0,
  }),
  qo = we(dd),
  fd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  pd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  md = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = md[e]) ? !!t[e] : !1;
}
function to() {
  return hd;
}
var vd = B({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = fd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yd = we(vd),
  gd = B({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jo = we(gd),
  xd = B({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to,
  }),
  wd = we(xd),
  kd = B({}, sn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Sd = we(kd),
  Nd = B({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jd = we(Nd),
  Ed = [9, 13, 27, 32],
  no = Ke && "CompositionEvent" in window,
  En = null;
Ke && "documentMode" in document && (En = document.documentMode);
var Cd = Ke && "TextEvent" in window && !En,
  Iu = Ke && (!no || (En && 8 < En && 11 >= En)),
  bo = " ",
  es = !1;
function Ou(e, t) {
  switch (e) {
    case "keyup":
      return Ed.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Du(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ot = !1;
function _d(e, t) {
  switch (e) {
    case "compositionend":
      return Du(t);
    case "keypress":
      return t.which !== 32 ? null : ((es = !0), bo);
    case "textInput":
      return (e = t.data), e === bo && es ? null : e;
    default:
      return null;
  }
}
function Pd(e, t) {
  if (Ot)
    return e === "compositionend" || (!no && Ou(e, t))
      ? ((e = Fu()), (Sr = bi = nt = null), (Ot = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zd[e.type] : t === "textarea";
}
function Uu(e, t, n, r) {
  hu(r),
    (t = Ur(t, "onChange")),
    0 < t.length &&
      ((n = new eo("onChange", "change", null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var Cn = null,
  Un = null;
function Td(e) {
  Gu(e, 0);
}
function ll(e) {
  var t = $t(e);
  if (uu(t)) return e;
}
function Ld(e, t) {
  if (e === "change") return t;
}
var $u = !1;
if (Ke) {
  var zl;
  if (Ke) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var ns = document.createElement("div");
      ns.setAttribute("oninput", "return;"),
        (Tl = typeof ns.oninput == "function");
    }
    zl = Tl;
  } else zl = !1;
  $u = zl && (!document.documentMode || 9 < document.documentMode);
}
function rs() {
  Cn && (Cn.detachEvent("onpropertychange", Au), (Un = Cn = null));
}
function Au(e) {
  if (e.propertyName === "value" && ll(Un)) {
    var t = [];
    Uu(t, Un, e, Xi(e)), xu(Td, t);
  }
}
function Md(e, t, n) {
  e === "focusin"
    ? (rs(), (Cn = t), (Un = n), Cn.attachEvent("onpropertychange", Au))
    : e === "focusout" && rs();
}
function Rd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Un);
}
function Fd(e, t) {
  if (e === "click") return ll(t);
}
function Id(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Od(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : Od;
function $n(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function ls(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function is(e, t) {
  var n = ls(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ls(n);
  }
}
function Bu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Bu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hu() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function ro(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dd(e) {
  var t = Hu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Bu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ro(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = is(n, i));
        var o = is(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ud = Ke && "documentMode" in document && 11 >= document.documentMode,
  Dt = null,
  di = null,
  _n = null,
  fi = !1;
function os(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fi ||
    Dt == null ||
    Dt !== Lr(r) ||
    ((r = Dt),
    "selectionStart" in r && ro(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_n && $n(_n, r)) ||
      ((_n = r),
      (r = Ur(di, "onSelect")),
      0 < r.length &&
        ((t = new eo("onSelect", "select", null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = Dt))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Ll = {},
  Vu = {};
Ke &&
  ((Vu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function il(e) {
  if (Ll[e]) return Ll[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vu) return (Ll[e] = t[n]);
  return e;
}
var Wu = il("animationend"),
  Qu = il("animationiteration"),
  Ku = il("animationstart"),
  Yu = il("transitionend"),
  Xu = new Map(),
  ss =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  Xu.set(e, t), Lt(t, [e]);
}
for (var Ml = 0; Ml < ss.length; Ml++) {
  var Rl = ss[Ml],
    $d = Rl.toLowerCase(),
    Ad = Rl[0].toUpperCase() + Rl.slice(1);
  mt($d, "on" + Ad);
}
mt(Wu, "onAnimationEnd");
mt(Qu, "onAnimationIteration");
mt(Ku, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Yu, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function us(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $c(r, t, void 0, e), (e.currentTarget = null);
}
function Gu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            d = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          us(l, s, d), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (d = s.currentTarget),
            (s = s.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          us(l, s, d), (i = a);
        }
    }
  }
  if (Rr) throw ((e = si), (Rr = !1), (si = null), e);
}
function I(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zu(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), Zu(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      ru.forEach(function (n) {
        n !== "selectionchange" && (Bd.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Fl("selectionchange", !1, t));
  }
}
function Zu(e, t, n, r) {
  switch (Ru(t)) {
    case 1:
      var l = td;
      break;
    case 4:
      l = nd;
      break;
    default:
      l = Ji;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: l,
          })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, {
          passive: l,
        })
      : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = kt(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  xu(function () {
    var d = i,
      v = Xi(n),
      h = [];
    e: {
      var m = Xu.get(e);
      if (m !== void 0) {
        var x = eo,
          w = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = yd;
            break;
          case "focusin":
            (w = "focus"), (x = Pl);
            break;
          case "focusout":
            (w = "blur"), (x = Pl);
            break;
          case "beforeblur":
          case "afterblur":
            x = Pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Zo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = id;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = wd;
            break;
          case Wu:
          case Qu:
          case Ku:
            x = ud;
            break;
          case Yu:
            x = Sd;
            break;
          case "scroll":
            x = rd;
            break;
          case "wheel":
            x = jd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = cd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Jo;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              f !== null && ((y = Fn(c, f)), y != null && k.push(Bn(c, y, p)))),
            D)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new x(m, w, null, n, v)),
          h.push({
            event: m,
            listeners: k,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== li &&
            (w = n.relatedTarget || n.fromElement) &&
            (kt(w) || w[Ye]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = d),
              (w = w ? kt(w) : null),
              w !== null &&
                ((D = Mt(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((k = Zo),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Jo),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (D = x == null ? m : $t(x)),
            (p = w == null ? m : $t(w)),
            (m = new k(y, c + "leave", x, n, v)),
            (m.target = D),
            (m.relatedTarget = p),
            (y = null),
            kt(v) === d &&
              ((k = new k(f, c + "enter", w, n, v)),
              (k.target = p),
              (k.relatedTarget = D),
              (y = k)),
            (D = y),
            x && w)
          )
            t: {
              for (k = x, f = w, c = 0, p = k; p; p = Rt(p)) c++;
              for (p = 0, y = f; y; y = Rt(y)) p++;
              for (; 0 < c - p; ) (k = Rt(k)), c--;
              for (; 0 < p - c; ) (f = Rt(f)), p--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Rt(k)), (f = Rt(f));
              }
              k = null;
            }
          else k = null;
          x !== null && as(h, m, x, k, !1),
            w !== null && D !== null && as(h, D, w, k, !0);
        }
      }
      e: {
        if (
          ((m = d ? $t(d) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var N = Ld;
        else if (ts(m))
          if ($u) N = Id;
          else {
            N = Rd;
            var E = Md;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = Fd);
        if (N && (N = N(e, d))) {
          Uu(h, N, n, v);
          break e;
        }
        E && E(e, m, d),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            bl(m, "number", m.value);
      }
      switch (((E = d ? $t(d) : window), e)) {
        case "focusin":
          (ts(E) || E.contentEditable === "true") &&
            ((Dt = E), (di = d), (_n = null));
          break;
        case "focusout":
          _n = di = Dt = null;
          break;
        case "mousedown":
          fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fi = !1), os(h, n, v);
          break;
        case "selectionchange":
          if (Ud) break;
        case "keydown":
        case "keyup":
          os(h, n, v);
      }
      var C;
      if (no)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Ot
          ? Ou(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Iu &&
          n.locale !== "ko" &&
          (Ot || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Ot && (C = Fu())
            : ((nt = v),
              (bi = "value" in nt ? nt.value : nt.textContent),
              (Ot = !0))),
        (E = Ur(d, _)),
        0 < E.length &&
          ((_ = new qo(_, e, null, n, v)),
          h.push({
            event: _,
            listeners: E,
          }),
          C ? (_.data = C) : ((C = Du(n)), C !== null && (_.data = C)))),
        (C = Cd ? _d(e, n) : Pd(e, n)) &&
          ((d = Ur(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new qo("onBeforeInput", "beforeinput", null, n, v)),
            h.push({
              event: v,
              listeners: d,
            }),
            (v.data = C)));
    }
    Gu(h, t);
  });
}
function Bn(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Fn(e, n)),
      i != null && r.unshift(Bn(e, i, l)),
      (i = Fn(e, t)),
      i != null && r.push(Bn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function as(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      d = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      d !== null &&
      ((s = d),
      l
        ? ((a = Fn(n, i)), a != null && o.unshift(Bn(n, a, s)))
        : l || ((a = Fn(n, i)), a != null && o.push(Bn(n, a, s)))),
      (n = n.return);
  }
  o.length !== 0 &&
    e.push({
      event: t,
      listeners: o,
    });
}
var Hd = /\r\n?/g,
  Vd = /\u0000|\uFFFD/g;
function cs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hd,
      `
`
    )
    .replace(Vd, "");
}
function fr(e, t, n) {
  if (((t = cs(t)), cs(e) !== t && n)) throw Error(g(425));
}
function $r() {}
var pi = null,
  mi = null;
function hi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ds = typeof Promise == "function" ? Promise : void 0,
  Qd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ds < "u"
      ? function (e) {
          return ds.resolve(null).then(e).catch(Kd);
        }
      : vi;
function Kd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ol(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Dn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Dn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + un,
  Hn = "__reactProps$" + un,
  Ye = "__reactContainer$" + un,
  yi = "__reactEvents$" + un,
  Yd = "__reactListeners$" + un,
  Xd = "__reactHandles$" + un;
function kt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fs(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = fs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function ol(e) {
  return e[Hn] || null;
}
var gi = [],
  At = -1;
function ht(e) {
  return {
    current: e,
  };
}
function O(e) {
  0 > At || ((e.current = gi[At]), (gi[At] = null), At--);
}
function F(e, t) {
  At++, (gi[At] = e.current), (e.current = t);
}
var pt = {},
  le = ht(pt),
  de = ht(!1),
  Ct = pt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  O(de), O(le);
}
function ps(e, t, n) {
  if (le.current !== pt) throw Error(g(168));
  F(le, t), F(de, n);
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Mc(e) || "Unknown", l));
  return B({}, n, r);
}
function Br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (Ct = le.current),
    F(le, e),
    F(de, de.current),
    !0
  );
}
function ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = qu(e, t, Ct)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      O(de),
      O(le),
      F(le, e))
    : O(de),
    F(de, n);
}
var He = null,
  sl = !1,
  Dl = !1;
function Ju(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Gd(e) {
  (sl = !0), Ju(e);
}
function vt() {
  if (!Dl && He !== null) {
    Dl = !0;
    var e = 0,
      t = R;
    try {
      var n = He;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (sl = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), Nu(Gi, vt), l);
    } finally {
      (R = t), (Dl = !1);
    }
  }
  return null;
}
var Bt = [],
  Ht = 0,
  Hr = null,
  Vr = 0,
  Se = [],
  Ne = 0,
  _t = null,
  Ve = 1,
  We = "";
function xt(e, t) {
  (Bt[Ht++] = Vr), (Bt[Ht++] = Hr), (Hr = e), (Vr = t);
}
function bu(e, t, n) {
  (Se[Ne++] = Ve), (Se[Ne++] = We), (Se[Ne++] = _t), (_t = e);
  var r = Ve;
  e = We;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Re(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (We = i + e);
  } else (Ve = (1 << i) | (n << l) | r), (We = e);
}
function lo(e) {
  e.return !== null && (xt(e, 1), bu(e, 1, 0));
}
function io(e) {
  for (; e === Hr; )
    (Hr = Bt[--Ht]), (Bt[Ht] = null), (Vr = Bt[--Ht]), (Bt[Ht] = null);
  for (; e === _t; )
    (_t = Se[--Ne]),
      (Se[Ne] = null),
      (We = Se[--Ne]),
      (Se[Ne] = null),
      (Ve = Se[--Ne]),
      (Se[Ne] = null);
}
var ye = null,
  ve = null,
  U = !1,
  Me = null;
function ea(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              _t !== null
                ? {
                    id: Ve,
                    overflow: We,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wi(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!hs(e, t)) {
        if (xi(e)) throw Error(g(418));
        t = st(n.nextSibling);
        var r = ye;
        t && hs(e, t)
          ? ea(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (xi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function pr(e) {
  if (e !== ye) return !1;
  if (!U) return vs(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (xi(e)) throw (ta(), Error(g(418)));
    for (; t; ) ea(e, t), (t = st(t.nextSibling));
  }
  if ((vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ta() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function en() {
  (ve = ye = null), (U = !1);
}
function oo(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var Zd = Ze.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ys(e) {
  var t = e._init;
  return t(e._payload);
}
function na(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = Wl(p, f.mode, y)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, y) {
    var N = p.type;
    return N === It
      ? v(f, c, p.props.children, y, p.key)
      : c !== null &&
        (c.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Je &&
            ys(N) === c.type))
      ? ((y = l(c, p.props)), (y.ref = vn(f, c, p)), (y.return = f), y)
      : ((y = Tr(p.type, p.key, p.props, null, f.mode, y)),
        (y.ref = vn(f, c, p)),
        (y.return = f),
        y);
  }
  function d(f, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Ql(p, f.mode, y)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, y, N) {
    return c === null || c.tag !== 7
      ? ((c = Et(p, f.mode, y, N)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Wl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case rr:
          return (
            (p = Tr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = vn(f, null, c)),
            (p.return = f),
            p
          );
        case Ft:
          return (c = Ql(c, f.mode, p)), (c.return = f), c;
        case Je:
          var y = c._init;
          return h(f, y(c._payload), p);
      }
      if (wn(c) || dn(c))
        return (c = Et(c, f.mode, p, null)), (c.return = f), c;
      mr(f, c);
    }
    return null;
  }
  function m(f, c, p, y) {
    var N = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : s(f, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case rr:
          return p.key === N ? a(f, c, p, y) : null;
        case Ft:
          return p.key === N ? d(f, c, p, y) : null;
        case Je:
          return (N = p._init), m(f, c, N(p._payload), y);
      }
      if (wn(p) || dn(p)) return N !== null ? null : v(f, c, p, y, null);
      mr(f, p);
    }
    return null;
  }
  function x(f, c, p, y, N) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(p) || null), s(c, f, "" + y, N);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case rr:
          return (f = f.get(y.key === null ? p : y.key) || null), a(c, f, y, N);
        case Ft:
          return (f = f.get(y.key === null ? p : y.key) || null), d(c, f, y, N);
        case Je:
          var E = y._init;
          return x(f, c, p, E(y._payload), N);
      }
      if (wn(y) || dn(y)) return (f = f.get(p) || null), v(c, f, y, N, null);
      mr(c, y);
    }
    return null;
  }
  function w(f, c, p, y) {
    for (
      var N = null, E = null, C = c, _ = (c = 0), V = null;
      C !== null && _ < p.length;
      _++
    ) {
      C.index > _ ? ((V = C), (C = null)) : (V = C.sibling);
      var L = m(f, C, p[_], y);
      if (L === null) {
        C === null && (C = V);
        break;
      }
      e && C && L.alternate === null && t(f, C),
        (c = i(L, c, _)),
        E === null ? (N = L) : (E.sibling = L),
        (E = L),
        (C = V);
    }
    if (_ === p.length) return n(f, C), U && xt(f, _), N;
    if (C === null) {
      for (; _ < p.length; _++)
        (C = h(f, p[_], y)),
          C !== null &&
            ((c = i(C, c, _)), E === null ? (N = C) : (E.sibling = C), (E = C));
      return U && xt(f, _), N;
    }
    for (C = r(f, C); _ < p.length; _++)
      (V = x(C, f, _, p[_], y)),
        V !== null &&
          (e && V.alternate !== null && C.delete(V.key === null ? _ : V.key),
          (c = i(V, c, _)),
          E === null ? (N = V) : (E.sibling = V),
          (E = V));
    return (
      e &&
        C.forEach(function (Pe) {
          return t(f, Pe);
        }),
      U && xt(f, _),
      N
    );
  }
  function k(f, c, p, y) {
    var N = dn(p);
    if (typeof N != "function") throw Error(g(150));
    if (((p = N.call(p)), p == null)) throw Error(g(151));
    for (
      var E = (N = null), C = c, _ = (c = 0), V = null, L = p.next();
      C !== null && !L.done;
      _++, L = p.next()
    ) {
      C.index > _ ? ((V = C), (C = null)) : (V = C.sibling);
      var Pe = m(f, C, L.value, y);
      if (Pe === null) {
        C === null && (C = V);
        break;
      }
      e && C && Pe.alternate === null && t(f, C),
        (c = i(Pe, c, _)),
        E === null ? (N = Pe) : (E.sibling = Pe),
        (E = Pe),
        (C = V);
    }
    if (L.done) return n(f, C), U && xt(f, _), N;
    if (C === null) {
      for (; !L.done; _++, L = p.next())
        (L = h(f, L.value, y)),
          L !== null &&
            ((c = i(L, c, _)), E === null ? (N = L) : (E.sibling = L), (E = L));
      return U && xt(f, _), N;
    }
    for (C = r(f, C); !L.done; _++, L = p.next())
      (L = x(C, f, _, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? _ : L.key),
          (c = i(L, c, _)),
          E === null ? (N = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        C.forEach(function (an) {
          return t(f, an);
        }),
      U && xt(f, _),
      N
    );
  }
  function D(f, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === It &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case rr:
          e: {
            for (var N = p.key, E = c; E !== null; ) {
              if (E.key === N) {
                if (((N = p.type), N === It)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = l(E, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Je &&
                    ys(N) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = l(E, p.props)),
                    (c.ref = vn(f, E, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            p.type === It
              ? ((c = Et(p.props.children, f.mode, y, p.key)),
                (c.return = f),
                (f = c))
              : ((y = Tr(p.type, p.key, p.props, null, f.mode, y)),
                (y.ref = vn(f, c, p)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Ft:
          e: {
            for (E = p.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Ql(p, f.mode, y)), (c.return = f), (f = c);
          }
          return o(f);
        case Je:
          return (E = p._init), D(f, c, E(p._payload), y);
      }
      if (wn(p)) return w(f, c, p, y);
      if (dn(p)) return k(f, c, p, y);
      mr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Wl(p, f.mode, y)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return D;
}
var tn = na(!0),
  ra = na(!1),
  Wr = ht(null),
  Qr = null,
  Vt = null,
  so = null;
function uo() {
  so = Vt = Qr = null;
}
function ao(e) {
  var t = Wr.current;
  O(Wr), (e._currentValue = t);
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zt(e, t) {
  (Qr = e),
    (so = Vt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (so !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Vt === null)
    ) {
      if (Qr === null) throw Error(g(308));
      (Vt = e),
        (Qr.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Vt = Vt.next = e;
  return t;
}
var St = null;
function co(e) {
  St === null ? (St = [e]) : St.push(e);
}
function la(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), co(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function fo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function ia(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), co(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
  }
}
function gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Kr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      d = a.next;
    (a.next = null), o === null ? (i = d) : (o.next = d), (o = a);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (s = v.lastBaseUpdate),
      s !== o &&
        (s === null ? (v.firstBaseUpdate = d) : (s.next = d),
        (v.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = d = a = null), (s = i);
    do {
      var m = s.lane,
        x = s.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            k = s;
          switch (((m = t), (x = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(x, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (m = typeof w == "function" ? w.call(x, h, m) : w),
                m == null)
              )
                break e;
              h = B({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          v === null ? ((d = v = x), (a = h)) : (v = v.next = x),
          (o |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  Ae = ht(bn),
  Vn = ht(bn),
  Wn = ht(bn);
function Nt(e) {
  if (e === bn) throw Error(g(174));
  return e;
}
function po(e, t) {
  switch ((F(Wn, t), F(Vn, e), F(Ae, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ti(t, e));
  }
  O(Ae), F(Ae, t);
}
function nn() {
  O(Ae), O(Vn), O(Wn);
}
function oa(e) {
  Nt(Wn.current);
  var t = Nt(Ae.current),
    n = ti(t, e.type);
  t !== n && (F(Vn, e), F(Ae, n));
}
function mo(e) {
  Vn.current === e && (O(Ae), O(Vn));
}
var $ = ht(0);
function Yr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ul = [];
function ho() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Er = Ze.ReactCurrentDispatcher,
  $l = Ze.ReactCurrentBatchConfig,
  Pt = 0,
  A = null,
  Y = null,
  Z = null,
  Xr = !1,
  Pn = !1,
  Qn = 0,
  qd = 0;
function te() {
  throw Error(g(321));
}
function vo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function yo(e, t, n, r, l, i) {
  if (
    ((Pt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Er.current = e === null || e.memoizedState === null ? tf : nf),
    (e = n(r, l)),
    Pn)
  ) {
    i = 0;
    do {
      if (((Pn = !1), (Qn = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (Er.current = rf),
        (e = n(r, l));
    } while (Pn);
  }
  if (
    ((Er.current = Gr),
    (t = Y !== null && Y.next !== null),
    (Pt = 0),
    (Z = Y = A = null),
    (Xr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function go() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(g(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      d = i;
    do {
      var v = d.lane;
      if ((Pt & v) === v)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (o = r)) : (a = a.next = h),
          (A.lanes |= v),
          (zt |= v);
      }
      d = d.next;
    } while (d !== null && d !== i);
    a === null ? (o = r) : (a.next = s),
      Ie(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ie(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function sa() {}
function ua(e, t) {
  var n = A,
    r = _e(),
    l = t(),
    i = !Ie(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    xo(da.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, ca.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(g(349));
    Pt & 30 || aa(n, t, l);
  }
  return l;
}
function aa(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = A.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ca(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), fa(t) && pa(e);
}
function da(e, t, n) {
  return n(function () {
    fa(t) && pa(e);
  });
}
function fa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function pa(e) {
  var t = Xe(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function ws(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ef.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = A.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ma() {
  return _e().memoizedState;
}
function Cr(e, t, n, r) {
  var l = De();
  (A.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ul(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && vo(r, o.deps))) {
      l.memoizedState = Yn(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Yn(1 | t, n, i, r));
}
function ks(e, t) {
  return Cr(8390656, 8, e, t);
}
function xo(e, t) {
  return ul(2048, 8, e, t);
}
function ha(e, t) {
  return ul(4, 2, e, t);
}
function va(e, t) {
  return ul(4, 4, e, t);
}
function ya(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ga(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ul(4, 4, ya.bind(null, t, e), n)
  );
}
function wo() {}
function xa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ka(e, t, n) {
  return Pt & 21
    ? (Ie(n, t) || ((n = Cu()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function Jd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), ($l.transition = r);
  }
}
function Sa() {
  return _e().memoizedState;
}
function bd(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Na(e))
  )
    ja(t, n);
  else if (((n = la(e, t, n, r)), n !== null)) {
    var l = oe();
    Fe(n, e, r, l), Ea(n, t, r);
  }
}
function ef(e, t, n) {
  var r = ct(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Na(e)) ja(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ie(s, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), co(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = la(e, t, l, r)),
      n !== null && ((l = oe()), Fe(n, e, r, l), Ea(n, t, r));
  }
}
function Na(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function ja(e, t) {
  Pn = Xr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ea(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
  }
}
var Gr = {
    readContext: Ce,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  tf = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
    useEffect: ks,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Cr(4194308, 4, ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Cr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Cr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = bd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: ws,
    useDebugValue: wo,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = ws(!1),
        t = e[0];
      return (e = Jd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = De();
      if (U) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(g(349));
        Pt & 30 || aa(r, t, n);
      }
      l.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t,
      };
      return (
        (l.queue = i),
        ks(da.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yn(9, ca.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = q.identifierPrefix;
      if (U) {
        var n = We,
          r = Ve;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nf = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: xo,
    useImperativeHandle: ga,
    useInsertionEffect: ha,
    useLayoutEffect: va,
    useMemo: wa,
    useReducer: Al,
    useRef: ma,
    useState: function () {
      return Al(Kn);
    },
    useDebugValue: wo,
    useDeferredValue: function (e) {
      var t = _e();
      return ka(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Kn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: ua,
    useId: Sa,
    unstable_isNewReconciler: !1,
  },
  rf = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: xo,
    useImperativeHandle: ga,
    useInsertionEffect: ha,
    useLayoutEffect: va,
    useMemo: wa,
    useReducer: Bl,
    useRef: ma,
    useState: function () {
      return Bl(Kn);
    },
    useDebugValue: wo,
    useDeferredValue: function (e) {
      var t = _e();
      return Y === null ? (t.memoizedState = e) : ka(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: ua,
    useId: Sa,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ct(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ut(e, i, l)),
      t !== null && (Fe(t, e, l, r), jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ct(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ut(e, i, l)),
      t !== null && (Fe(t, e, l, r), jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Fe(t, e, r, n), jr(t, e, r));
  },
};
function Ss(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, i)
      : !0
  );
}
function Ca(e, t, n) {
  var r = !1,
    l = pt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ce(i))
      : ((l = fe(t) ? Ct : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bt(e, l) : pt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), fo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ce(i))
    : ((i = fe(t) ? Ct : le.current), (l.context = bt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Si(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Kr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Lc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null,
  };
}
function Hl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lf = typeof WeakMap == "function" ? WeakMap : Map;
function _a(e, t, n) {
  (n = Qe(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      qr || ((qr = !0), (Fi = r)), ji(e, t);
    }),
    n
  );
}
function Pa(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ji(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ji(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = xf.bind(null, e, t, n)), t.then(e, e));
}
function Es(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var of = Ze.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? ra(t, null, n, r) : tn(t, e.child, n, r);
}
function _s(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Zt(t, l),
    (r = yo(e, t, n, r, i, l)),
    (n = go()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && n && lo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Ps(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Po(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), za(e, t, i, r, l))
      : ((e = Tr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function za(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($n(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Ei(e, t, n, r, l);
}
function Ta(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        F(Qt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Qt, me),
          (me |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        F(Qt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Qt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function La(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ei(e, t, n, r, l) {
  var i = fe(n) ? Ct : le.current;
  return (
    (i = bt(t, i)),
    Zt(t, l),
    (n = yo(e, t, n, r, i, l)),
    (r = go()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && r && lo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function zs(e, t, n, r, l) {
  if (fe(n)) {
    var i = !0;
    Br(t);
  } else i = !1;
  if ((Zt(t, l), t.stateNode === null))
    _r(e, t), Ca(t, n, r), Ni(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ce(d))
      : ((d = fe(n) ? Ct : le.current), (d = bt(t, d)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || a !== d) && Ns(t, o, r, d)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      Kr(t, r, o, l),
      (a = t.memoizedState),
      s !== r || m !== a || de.current || be
        ? (typeof v == "function" && (Si(t, n, v, r), (a = t.memoizedState)),
          (s = be || Ss(t, n, s, r, m, a, d))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = d),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ia(e, t),
      (s = t.memoizedProps),
      (d = t.type === t.elementType ? s : Te(t.type, s)),
      (o.props = d),
      (h = t.pendingProps),
      (m = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ce(a))
        : ((a = fe(n) ? Ct : le.current), (a = bt(t, a)));
    var x = n.getDerivedStateFromProps;
    (v =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== h || m !== a) && Ns(t, o, r, a)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      Kr(t, r, o, l);
    var w = t.memoizedState;
    s !== h || m !== w || de.current || be
      ? (typeof x == "function" && (Si(t, n, x, r), (w = t.memoizedState)),
        (d = be || Ss(t, n, d, r, m, w, a) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = a),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ci(e, t, n, r, i, l);
}
function Ci(e, t, n, r, l, i) {
  La(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ms(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (of.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tn(t, e.child, null, i)), (t.child = tn(t, null, s, i)))
      : ie(e, t, s, i),
    (t.memoizedState = r.state),
    l && ms(t, n, !0),
    t.child
  );
}
function Ma(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ps(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ps(e, t.context, !1),
    po(e, t.containerInfo);
}
function Ts(e, t, n, r, l) {
  return en(), oo(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var _i = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function Pi(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F($, l & 1),
    e === null)
  )
    return (
      wi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = {
                mode: "hidden",
                children: o,
              }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = fl(o, r, 0, null)),
              (e = Et(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pi(n)),
              (t.memoizedState = _i),
              e)
            : ko(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return sf(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var a = {
      mode: "hidden",
      children: r.children,
    };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = dt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = dt(s, i)) : ((i = Et(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Pi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = _i),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, {
      mode: "visible",
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ko(e, t) {
  return (
    (t = fl(
      {
        mode: "visible",
        children: t,
      },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && oo(r),
    tn(t, e.child, null, n),
    (e = ko(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hl(Error(g(422)))), hr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = fl(
          {
            mode: "visible",
            children: r.children,
          },
          l,
          0,
          null
        )),
        (i = Et(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, o),
        (t.child.memoizedState = Pi(o)),
        (t.memoizedState = _i),
        i);
  if (!(t.mode & 1)) return hr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(g(419))), (r = Hl(i, r, void 0)), hr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), ce || s)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Fe(r, e, l, -1));
    }
    return _o(), (r = Hl(Error(g(421)))), hr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = st(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Me = null),
      e !== null &&
        ((Se[Ne++] = Ve),
        (Se[Ne++] = We),
        (Se[Ne++] = _t),
        (Ve = e.id),
        (We = e.overflow),
        (_t = t)),
      (t = ko(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Vl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ls(e, n, t);
        else if (e.tag === 19) Ls(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Yr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Vl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Vl(t, !0, n, null, i);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ma(t), en();
      break;
    case 5:
      oa(t);
      break;
    case 1:
      fe(t.type) && Br(t);
      break;
    case 4:
      po(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ra(e, t, n)
          : (F($, $.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      F($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ta(e, t, n);
  }
  return Ge(e, t, n);
}
var Ia, zi, Oa, Da;
Ia = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zi = function () {};
Oa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Ae.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ql(e, l)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, {
          value: void 0,
        })),
          (r = B({}, r, {
            value: void 0,
          })),
          (i = []);
        break;
      case "textarea":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    ni(n, r);
    var o;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var s = l[d];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Mn.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((s = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== s && (a != null || s != null))
      )
        if (d === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(d, n)), (n = a);
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(d, a))
            : d === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(d, "" + a)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Mn.hasOwnProperty(d)
                ? (a != null && d === "onScroll" && I("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(d, a));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Da = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function af(e, t, n) {
  var r = t.pendingProps;
  switch ((io(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return fe(t.type) && Ar(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        O(de),
        O(le),
        ho(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (Di(Me), (Me = null)))),
        zi(e, t),
        ne(t),
        null
      );
    case 5:
      mo(t);
      var l = Nt(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Oa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ne(t), null;
        }
        if (((e = Nt(Ae.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Hn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sn.length; l++) I(Sn[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Ao(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = {
                wasMultiple: !!i.multiple,
              }),
                I("invalid", r);
              break;
            case "textarea":
              Ho(r, i), I("invalid", r);
          }
          ni(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Mn.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Bo(r, i, !0);
              break;
            case "textarea":
              lr(r), Vo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = du(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, {
                    is: r.is,
                  }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Hn] = r),
            Ia(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ri(n, r)), n)) {
              case "dialog":
                I("cancel", e), I("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sn.length; l++) I(Sn[l], e);
                l = r;
                break;
              case "source":
                I("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (l = r);
                break;
              case "details":
                I("toggle", e), (l = r);
                break;
              case "input":
                Ao(e, r), (l = ql(e, r)), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (l = B({}, r, {
                    value: void 0,
                  })),
                  I("invalid", e);
                break;
              case "textarea":
                Ho(e, r), (l = ei(e, r)), I("invalid", e);
                break;
              default:
                l = r;
            }
            ni(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? mu(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && fu(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Rn(e, a)
                    : typeof a == "number" && Rn(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Mn.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && I("scroll", e)
                      : a != null && Wi(e, i, a, o));
              }
            switch (n) {
              case "input":
                lr(e), Bo(e, r, !1);
                break;
              case "textarea":
                lr(e), Vo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Kt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Da(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = Nt(Wn.current)), Nt(Ae.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (O($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          ta(), en(), (t.flags |= 98560), (i = !1);
        else if (((i = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Ue] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Me !== null && (Di(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : _o())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        nn(), zi(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return ao(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Ar(), ne(t), null;
    case 19:
      if ((O($), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Yr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > ln &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          F($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Co(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function cf(e, t) {
  switch ((io(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Ar(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        O(de),
        O(le),
        ho(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mo(t), null;
    case 13:
      if ((O($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return O($), null;
    case 4:
      return nn(), null;
    case 10:
      return ao(t.type._context), null;
    case 22:
    case 23:
      return Co(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  df = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Ti(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Ms = !1;
function ff(e, t) {
  if (((pi = Or), (e = Hu()), ro(e))) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            d = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (m = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++d === l && (s = o),
                m === i && ++v === r && (a = o),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = x;
          }
          n =
            s === -1 || a === -1
              ? null
              : {
                  start: s,
                  end: a,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    mi = {
      focusedElem: e,
      selectionRange: n,
    },
      Or = !1,
      S = t;
    S !== null;

  )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Te(t.type, k),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          H(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = Ms), (Ms = !1), w;
}
function zn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ti(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Li(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ua(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ua(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Hn], delete t[yi], delete t[Yd], delete t[Xd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $a(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $a(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var J = null,
  Le = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Aa(e, t, n), (n = n.sibling);
}
function Aa(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Wt(n, t);
    case 6:
      var r = J,
        l = Le;
      (J = null),
        qe(e, t, n),
        (J = r),
        (Le = l),
        J !== null &&
          (Le
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode));
      break;
    case 18:
      J !== null &&
        (Le
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ol(e.parentNode, n)
              : e.nodeType === 1 && Ol(e, n),
            Dn(e))
          : Ol(J, n.stateNode));
      break;
    case 4:
      (r = J),
        (l = Le),
        (J = n.stateNode.containerInfo),
        (Le = !0),
        qe(e, t, n),
        (J = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ti(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          H(n, t, s);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), qe(e, t, n), (re = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Fs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new df()),
      t.forEach(function (r) {
        var l = kf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (J = s.stateNode), (Le = !1);
              break e;
            case 3:
              (J = s.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (J = s.stateNode.containerInfo), (Le = !0);
              break e;
          }
          s = s.return;
        }
        if (J === null) throw Error(g(160));
        Aa(i, o, l), (J = null), (Le = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (d) {
        H(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ba(t, e), (t = t.sibling);
}
function Ba(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Oe(e), r & 4)) {
        try {
          zn(3, e, e.return), cl(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          zn(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Oe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && au(l, i),
              ri(s, o);
            var d = ri(s, i);
            for (o = 0; o < a.length; o += 2) {
              var v = a[o],
                h = a[o + 1];
              v === "style"
                ? mu(l, h)
                : v === "dangerouslySetInnerHTML"
                ? fu(l, h)
                : v === "children"
                ? Rn(l, h)
                : Wi(l, v, h, d);
            }
            switch (s) {
              case "input":
                Jl(l, i);
                break;
              case "textarea":
                cu(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Kt(l, !!i.multiple, x, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Kt(l, !!i.multiple, i.defaultValue, !0)
                      : Kt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Hn] = i;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dn(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      ze(t, e), Oe(e);
      break;
    case 13:
      ze(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (jo = Q())),
        r & 4 && Fs(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (d = re) || v), ze(t, e), (re = d)) : ze(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zn(4, m, m.return);
                  break;
                case 1:
                  Wt(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Wt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Os(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (S = x)) : Os(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = pu("display", o)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Oe(e), r & 4 && Fs(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($a(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Rs(e);
          Ri(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Rs(e);
          Mi(e, s, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pf(e, t, n) {
  (S = e), Ha(e);
}
function Ha(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || re;
        s = vr;
        var d = re;
        if (((vr = o), (re = a) && !d))
          for (S = l; S !== null; )
            (o = S),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ds(l)
                : a !== null
                ? ((a.return = o), (S = a))
                : Ds(l);
        for (; i !== null; ) (S = i), Ha(i), (i = i.sibling);
        (S = l), (vr = s), (re = d);
      }
      Is(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Is(e);
  }
}
function Is(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && xs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xs(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Dn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        re || (t.flags & 512 && Li(t));
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Os(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Ds(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (a) {
            H(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(t, l, a);
            }
          }
          var i = t.return;
          try {
            Li(t);
          } catch (a) {
            H(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Li(t);
          } catch (a) {
            H(t, o, a);
          }
      }
    } catch (a) {
      H(t, t.return, a);
    }
    if (t === e) {
      S = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (S = s);
      break;
    }
    S = t.return;
  }
}
var mf = Math.ceil,
  Zr = Ze.ReactCurrentDispatcher,
  So = Ze.ReactCurrentOwner,
  Ee = Ze.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  K = null,
  b = 0,
  me = 0,
  Qt = ht(0),
  X = 0,
  Xn = null,
  zt = 0,
  dl = 0,
  No = 0,
  Tn = null,
  ae = null,
  jo = 0,
  ln = 1 / 0,
  Be = null,
  qr = !1,
  Fi = null,
  at = null,
  yr = !1,
  rt = null,
  Jr = 0,
  Ln = 0,
  Ii = null,
  Pr = -1,
  zr = 0;
function oe() {
  return M & 6 ? Q() : Pr !== -1 ? Pr : (Pr = Q());
}
function ct(e) {
  return e.mode & 1
    ? M & 2 && b !== 0
      ? b & -b
      : Zd.transition !== null
      ? (zr === 0 && (zr = Cu()), zr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ru(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Ii = null), Error(g(185)));
  Zn(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (dl |= n), X === 4 && tt(e, b)),
      pe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((ln = Q() + 500), sl && vt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Zc(e, t);
  var r = Ir(e, e === q ? b : 0);
  if (r === 0)
    n !== null && Ko(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ko(n), t === 1))
      e.tag === 0 ? Gd(Us.bind(null, e)) : Ju(Us.bind(null, e)),
        Qd(function () {
          !(M & 6) && vt();
        }),
        (n = null);
    else {
      switch (_u(r)) {
        case 1:
          n = Gi;
          break;
        case 4:
          n = ju;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = Eu;
          break;
        default:
          n = Fr;
      }
      n = Za(n, Va.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Va(e, t) {
  if (((Pr = -1), (zr = 0), M & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === q ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Qa();
    (q !== e || b !== t) && ((Be = null), (ln = Q() + 500), jt(e, t));
    do
      try {
        yf();
        break;
      } catch (s) {
        Wa(e, s);
      }
    while (!0);
    uo(),
      (Zr.current = i),
      (M = l),
      K !== null ? (t = 0) : ((q = null), (b = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ui(e)), l !== 0 && ((r = l), (t = Oi(e, l)))), t === 1)
    )
      throw ((n = Xn), jt(e, 0), tt(e, r), pe(e, Q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hf(l) &&
          ((t = br(e, r)),
          t === 2 && ((i = ui(e)), i !== 0 && ((r = i), (t = Oi(e, i)))),
          t === 1))
      )
        throw ((n = Xn), jt(e, 0), tt(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          wt(e, ae, Be);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = jo + 500 - Q()), 10 < t))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(wt.bind(null, e, ae, Be), t);
            break;
          }
          wt(e, ae, Be);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * mf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vi(wt.bind(null, e, ae, Be), r);
            break;
          }
          wt(e, ae, Be);
          break;
        case 5:
          wt(e, ae, Be);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Va.bind(null, e) : null;
}
function Oi(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Di(t)),
    e
  );
}
function Di(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function hf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~No,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Us(e) {
  if (M & 6) throw Error(g(327));
  qt();
  var t = Ir(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && ((t = r), (n = Oi(e, r)));
  }
  if (n === 1) throw ((n = Xn), jt(e, 0), tt(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ae, Be),
    pe(e, Q()),
    null
  );
}
function Eo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((ln = Q() + 500), sl && vt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(M & 6) && qt();
  var t = M;
  M |= 1;
  var n = Ee.transition,
    r = R;
  try {
    if (((Ee.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ee.transition = n), (M = t), !(M & 6) && vt();
  }
}
function Co() {
  (me = Qt.current), O(Qt);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((io(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          nn(), O(de), O(le), ho();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          O($);
          break;
        case 19:
          O($);
          break;
        case 10:
          ao(r.type._context);
          break;
        case 22:
        case 23:
          Co();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = dt(e.current, null)),
    (b = me = t),
    (X = 0),
    (Xn = null),
    (No = dl = zt = 0),
    (ae = Tn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Wa(e, t) {
  do {
    var n = K;
    try {
      if ((uo(), (Er.current = Gr), Xr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((Pt = 0),
        (Z = Y = A = null),
        (Pn = !1),
        (Qn = 0),
        (So.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Xn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = b),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            v = s,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var x = Es(o);
          if (x !== null) {
            (x.flags &= -257),
              Cs(x, o, s, i, t),
              x.mode & 1 && js(i, d, t),
              (t = x),
              (a = d);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(a), (t.updateQueue = k);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              js(i, d, t), _o();
              break e;
            }
            a = Error(g(426));
          }
        } else if (U && s.mode & 1) {
          var D = Es(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Cs(D, o, s, i, t),
              oo(rn(a, s));
            break e;
          }
        }
        (i = a = rn(a, s)),
          X !== 4 && (X = 2),
          Tn === null ? (Tn = [i]) : Tn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = _a(i, a, t);
              gs(i, f);
              break e;
            case 1:
              s = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (at === null || !at.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Pa(i, s, t);
                gs(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ya(n);
    } catch (N) {
      (t = N), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qa() {
  var e = Zr.current;
  return (Zr.current = Gr), e === null ? Gr : e;
}
function _o() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(zt & 268435455) && !(dl & 268435455)) || tt(q, b);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = Qa();
  (q !== e || b !== t) && ((Be = null), jt(e, t));
  do
    try {
      vf();
      break;
    } catch (l) {
      Wa(e, l);
    }
  while (!0);
  if ((uo(), (M = n), (Zr.current = r), K !== null)) throw Error(g(261));
  return (q = null), (b = 0), X;
}
function vf() {
  for (; K !== null; ) Ka(K);
}
function yf() {
  for (; K !== null && !Bc(); ) Ka(K);
}
function Ka(e) {
  var t = Ga(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ya(e) : (K = t),
    (So.current = null);
}
function Ya(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = af(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = R,
    l = Ee.transition;
  try {
    (Ee.transition = null), (R = 1), gf(e, t, n, r);
  } finally {
    (Ee.transition = l), (R = r);
  }
  return null;
}
function gf(e, t, n, r) {
  do qt();
  while (rt !== null);
  if (M & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (qc(e, i),
    e === q && ((K = q = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      Za(Fr, function () {
        return qt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ee.transition), (Ee.transition = null);
    var o = R;
    R = 1;
    var s = M;
    (M |= 4),
      (So.current = null),
      ff(e, n),
      Ba(n, e),
      Dd(mi),
      (Or = !!pi),
      (mi = pi = null),
      (e.current = n),
      pf(n),
      Hc(),
      (M = s),
      (R = o),
      (Ee.transition = i);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (rt = e), (Jr = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    Qc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]),
        r(l.value, {
          componentStack: l.stack,
          digest: l.digest,
        });
  if (qr) throw ((qr = !1), (e = Fi), (Fi = null), e);
  return (
    Jr & 1 && e.tag !== 0 && qt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ii ? Ln++ : ((Ln = 0), (Ii = e))) : (Ln = 0),
    vt(),
    null
  );
}
function qt() {
  if (rt !== null) {
    var e = _u(Jr),
      t = Ee.transition,
      n = R;
    try {
      if (((Ee.transition = null), (R = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (Jr = 0), M & 6)) throw Error(g(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var d = s[a];
                for (S = d; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        x = v.return;
                      if ((Ua(v), v === d)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (S = m);
                        break;
                      }
                      S = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          o = S;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (S = p);
          else
            e: for (o = c; S !== null; ) {
              if (((s = S), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, s);
                  }
                } catch (N) {
                  H(s, s.return, N);
                }
              if (s === o) {
                S = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (S = y);
                break e;
              }
              S = s.return;
            }
        }
        if (
          ((M = l), vt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ee.transition = t);
    }
  }
  return !1;
}
function $s(e, t, n) {
  (t = rn(n, t)),
    (t = _a(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = oe()),
    e !== null && (Zn(e, 1, t), pe(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) $s(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $s(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Pa(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = oe()),
            t !== null && (Zn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (b & n) === n &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - jo)
        ? jt(e, 0)
        : (No |= n)),
    pe(e, t);
}
function Xa(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = oe();
  (e = Xe(e, t)), e !== null && (Zn(e, t, n), pe(e, n));
}
function wf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xa(e, n);
}
function kf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), Xa(e, n);
}
var Ga;
Ga = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), uf(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && bu(t, Vr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _r(e, t), (e = t.pendingProps);
      var l = bt(t, le.current);
      Zt(t, n), (l = yo(null, t, r, e, l, n));
      var i = go();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((i = !0), Br(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fo(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ni(t, r, e, n),
            (t = Ci(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && lo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nf(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Ei(null, t, r, e, n);
            break e;
          case 1:
            t = zs(null, t, r, e, n);
            break e;
          case 11:
            t = _s(null, t, r, e, n);
            break e;
          case 14:
            t = Ps(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ei(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        zs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ma(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ia(e, t),
          Kr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = rn(Error(g(423)), t)), (t = Ts(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(g(424)), t)), (t = Ts(e, t, r, n, l));
            break e;
          } else
            for (
              ve = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Me = null,
                n = ra(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        oa(t),
        e === null && wi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        hi(r, l) ? (o = null) : i !== null && hi(r, i) && (t.flags |= 32),
        La(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && wi(t), null;
    case 13:
      return Ra(e, t, n);
    case 4:
      return (
        po(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        _s(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          F(Wr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Qe(-1, n & -n)), (a.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (d.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ki(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  ki(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = Ce(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Ps(e, t, r, l, n)
      );
    case 15:
      return za(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        _r(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), Br(t)) : (e = !1),
        Zt(t, n),
        Ca(t, r, l),
        Ni(t, r, l, n),
        Ci(null, t, r, !0, e, n)
      );
    case 19:
      return Fa(e, t, n);
    case 22:
      return Ta(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Za(e, t) {
  return Nu(e, t);
}
function Sf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new Sf(e, t, n, r);
}
function Po(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nf(e) {
  if (typeof e == "function") return Po(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ki)) return 11;
    if (e === Yi) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Po(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case It:
        return Et(n.children, l, i, t);
      case Qi:
        (o = 8), (l |= 8);
        break;
      case Yl:
        return (
          (e = je(12, n, t, l | 2)), (e.elementType = Yl), (e.lanes = i), e
        );
      case Xl:
        return (e = je(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Gl:
        return (e = je(19, n, t, l)), (e.elementType = Gl), (e.lanes = i), e;
      case ou:
        return fl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case lu:
              o = 10;
              break e;
            case iu:
              o = 9;
              break e;
            case Ki:
              o = 11;
              break e;
            case Yi:
              o = 14;
              break e;
            case Je:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Et(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = ou),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function Wl(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jf(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function zo(e, t, n, r, l, i, o, s, a) {
  return (
    (e = new jf(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fo(i),
    e
  );
}
function Ef(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qa(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return qu(e, n, t);
  }
  return t;
}
function Ja(e, t, n, r, l, i, o, s, a) {
  return (
    (e = zo(n, r, !0, e, l, i, o, s, a)),
    (e.context = qa(null)),
    (n = e.current),
    (r = oe()),
    (l = ct(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    ut(n, i, l),
    (e.current.lanes = l),
    Zn(e, l, r),
    pe(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = ct(l);
  return (
    (n = qa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, o)),
    e !== null && (Fe(e, l, o, i), jr(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function As(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function To(e, t) {
  As(e, t), (e = e.alternate) && As(e, t);
}
function Cf() {
  return null;
}
var ba =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lo(e) {
  this._internalRoot = e;
}
ml.prototype.render = Lo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = Lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      pl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tu();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Mu(e);
  }
};
function Mo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bs() {}
function _f(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = el(o);
        i.call(d);
      };
    }
    var o = Ja(t, r, e, 0, null, !1, !1, "", Bs);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var d = el(a);
      s.call(d);
    };
  }
  var a = zo(e, 0, !1, null, null, !1, !1, "", Bs);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      pl(t, a, n, r);
    }),
    a
  );
}
function vl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = el(o);
        s.call(a);
      };
    }
    pl(t, o, e, l);
  } else o = _f(n, t, e, l, r);
  return el(o);
}
Pu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (Zi(t, n | 1), pe(t, Q()), !(M & 6) && ((ln = Q() + 500), vt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = oe();
          Fe(r, e, 1, l);
        }
      }),
        To(e, 1);
  }
};
qi = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = oe();
      Fe(t, e, 134217728, n);
    }
    To(e, 134217728);
  }
};
zu = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = oe();
      Fe(n, e, t, r);
    }
    To(e, t);
  }
};
Tu = function () {
  return R;
};
Lu = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(g(90));
            uu(r), Jl(r, l);
          }
        }
      }
      break;
    case "textarea":
      cu(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
  }
};
yu = Eo;
gu = Tt;
var Pf = {
    usingClientEntryPoint: !1,
    Events: [Jn, $t, ol, hu, vu, Eo],
  },
  gn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  zf = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ku(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Cf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (nl = gr.inject(zf)), ($e = gr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mo(t)) throw Error(g(200));
  return Ef(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!Mo(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = ba;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = zo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Lo(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = ku(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Tt(e);
};
xe.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!Mo(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = ba;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ja(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
xe.render = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Tt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Eo;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return vl(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function ec() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec);
    } catch (e) {
      console.error(e);
    }
}
ec(), (eu.exports = xe);
var Tf = eu.exports,
  tc,
  Hs = Tf;
(tc = Hs.createRoot), Hs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ke = (e, t) => {
    const n = he.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: s = "",
          children: a,
          ...d
        },
        v
      ) =>
        he.createElement(
          "svg",
          {
            ref: v,
            ...Lf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(l) : i,
            className: ["lucide", `lucide-${Mf(e)}`, s].join(" "),
            ...d,
          },
          [
            ...t.map(([h, m]) => he.createElement(h, m)),
            ...(Array.isArray(a) ? a : [a]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = ke("AlertCircle", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ke("ArrowRight", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "m12 5 7 7-7 7",
      key: "xquz4c",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = ke("Building2", [
  [
    "path",
    {
      d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
      key: "1b4qmf",
    },
  ],
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
      key: "i71pzd",
    },
  ],
  [
    "path",
    {
      d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
      key: "10jefs",
    },
  ],
  [
    "path",
    {
      d: "M10 6h4",
      key: "1itunk",
    },
  ],
  [
    "path",
    {
      d: "M10 10h4",
      key: "tcdvrf",
    },
  ],
  [
    "path",
    {
      d: "M10 14h4",
      key: "kelpxr",
    },
  ],
  [
    "path",
    {
      d: "M10 18h4",
      key: "1ulq68",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = ke("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  [
    "path",
    {
      d: "M9 22v-4h6v4",
      key: "r93iot",
    },
  ],
  [
    "path",
    {
      d: "M8 6h.01",
      key: "1dz90k",
    },
  ],
  [
    "path",
    {
      d: "M16 6h.01",
      key: "1x0f13",
    },
  ],
  [
    "path",
    {
      d: "M12 6h.01",
      key: "1vi96p",
    },
  ],
  [
    "path",
    {
      d: "M12 10h.01",
      key: "1nrarc",
    },
  ],
  [
    "path",
    {
      d: "M12 14h.01",
      key: "1etili",
    },
  ],
  [
    "path",
    {
      d: "M16 10h.01",
      key: "1m94wz",
    },
  ],
  [
    "path",
    {
      d: "M16 14h.01",
      key: "1gbofw",
    },
  ],
  [
    "path",
    {
      d: "M8 10h.01",
      key: "19clt8",
    },
  ],
  [
    "path",
    {
      d: "M8 14h.01",
      key: "6423bh",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = ke("Calculator", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      key: "1nb95v",
    },
  ],
  [
    "line",
    {
      x1: "8",
      x2: "16",
      y1: "6",
      y2: "6",
      key: "x4nwl0",
    },
  ],
  [
    "line",
    {
      x1: "16",
      x2: "16",
      y1: "14",
      y2: "18",
      key: "wjye3r",
    },
  ],
  [
    "path",
    {
      d: "M16 10h.01",
      key: "1m94wz",
    },
  ],
  [
    "path",
    {
      d: "M12 10h.01",
      key: "1nrarc",
    },
  ],
  [
    "path",
    {
      d: "M8 10h.01",
      key: "19clt8",
    },
  ],
  [
    "path",
    {
      d: "M12 14h.01",
      key: "1etili",
    },
  ],
  [
    "path",
    {
      d: "M8 14h.01",
      key: "6423bh",
    },
  ],
  [
    "path",
    {
      d: "M12 18h.01",
      key: "mhygvu",
    },
  ],
  [
    "path",
    {
      d: "M8 18h.01",
      key: "lrp35t",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = ke("ChevronDown", [
  [
    "path",
    {
      d: "m6 9 6 6 6-6",
      key: "qrunsl",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = ke("ChevronUp", [
  [
    "path",
    {
      d: "m18 15-6-6-6 6",
      key: "153udz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = ke("CreditCard", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "5",
      rx: "2",
      key: "ynyp8z",
    },
  ],
  [
    "line",
    {
      x1: "2",
      x2: "22",
      y1: "10",
      y2: "10",
      key: "1b3vmo",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = ke("DollarSign", [
  [
    "line",
    {
      x1: "12",
      x2: "12",
      y1: "2",
      y2: "22",
      key: "7eqyqh",
    },
  ],
  [
    "path",
    {
      d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      key: "1b0p4s",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = ke("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  [
    "path",
    {
      d: "M14 2v4a2 2 0 0 0 2 2h4",
      key: "tnqrlb",
    },
  ],
  [
    "path",
    {
      d: "M10 9H8",
      key: "b1mrlr",
    },
  ],
  [
    "path",
    {
      d: "M16 13H8",
      key: "t4e002",
    },
  ],
  [
    "path",
    {
      d: "M16 17H8",
      key: "z1uh3a",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = ke("HelpCircle", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
      key: "1u773s",
    },
  ],
  [
    "path",
    {
      d: "M12 17h.01",
      key: "p32p05",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = ke("Mail", [
  [
    "rect",
    {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2",
      key: "18n3k1",
    },
  ],
  [
    "path",
    {
      d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
      key: "1ocrg3",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = ke("Phone", [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ]),
  Qf = () =>
    u.jsx("header", {
      className: "bg-white shadow-sm sticky top-0 z-10",
      children: u.jsxs("div", {
        className:
          "container mx-auto px-4 py-4 flex justify-between items-center",
        children: [
          u.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              u.jsx(nc, {
                className: "h-8 w-8 text-blue-600",
              }),
              u.jsx("span", {
                className: "font-semibold text-xl text-slate-800",
                children: "National Bank of Hungary",
              }),
            ],
          }),
          u.jsxs("nav", {
            className: "hidden md:flex space-x-6",
            children: [
              u.jsx("a", {
                href: "#calculator",
                className:
                  "text-slate-600 hover:text-blue-600 transition-colors duration-200",
                children: "Calculator",
              }),
              u.jsx("a", {
                href: "#process",
                className:
                  "text-slate-600 hover:text-blue-600 transition-colors duration-200",
                children: "Transfer Process",
              }),
              u.jsx("a", {
                href: "#faq",
                className:
                  "text-slate-600 hover:text-blue-600 transition-colors duration-200",
                children: "FAQ",
              }),
              u.jsx("a", {
                href: "#contact",
                className:
                  "text-slate-600 hover:text-blue-600 transition-colors duration-200",
                children: "Contact",
              }),
            ],
          }),
          u.jsx("button", {
            className: "md:hidden",
            children: u.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6 text-slate-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: u.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16",
              }),
            }),
          }),
        ],
      }),
    }),
  Kf = () =>
    u.jsx("section", {
      className:
        "bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24",
      children: u.jsx("div", {
        className: "container mx-auto px-4",
        children: u.jsxs("div", {
          className: "max-w-3xl mx-auto text-center",
          children: [
            u.jsx("div", {
              className: "flex justify-center mb-6",
              children: u.jsx("div", {
                className: "bg-white/10 p-3 rounded-full",
                children: u.jsx(Rf, {
                  className: "h-10 w-10 text-amber-300",
                }),
              }),
            }),
            u.jsx("h1", {
              className: "text-3xl md:text-4xl font-bold mb-6 leading-tight",
              children: "Intermediary Bank Fee Notice",
            }),
            u.jsxs("div", {
              className: "bg-white/10 p-6 rounded-lg backdrop-blur-sm",
              children: [
                u.jsx("p", {
                  className: "text-lg mb-4",
                  children:
                    "A $200 intermediary bank fee has not been paid from your wallet. This fee was charged by a third-party bank, not by the National Bank of Hungary (MNB).",
                }),
                u.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row justify-center gap-4 mt-8",
                  children: [
                    u.jsx("button", {
                      className:
                        "bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1",
                      children: "Calculate Your Transfer",
                    }),
                    u.jsx("button", {
                      className:
                        "bg-transparent border border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200",
                      children: "Contact Support",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Yf = () => (
    he.useState("8400"),
    he.useState("3005436.00"),
    he.useState(200),
    he.useState(!0),
    u.jsx("section", {
      id: "calculator",
      className: "py-16 bg-white",
      children: u.jsx("div", {
        className: "container mx-auto px-4",
        children: u.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center mb-8",
              children: [
                u.jsx(Of, {
                  className: "h-8 w-8 text-blue-600 mr-3",
                }),
                u.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-slate-800",
                  children: "Transfer Details",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "bg-slate-50 rounded-lg p-6 md:p-8 shadow-sm border border-slate-100",
              children: [
                u.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-8",
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-semibold text-slate-700 mb-4",
                          children: "Transfer Information",
                        }),
                        u.jsxs("div", {
                          className: "mb-4",
                          children: [
                            u.jsx("label", {
                              htmlFor: "original-amount",
                              className:
                                "block text-sm font-medium text-slate-600 mb-1",
                              children: "Transfer Amount",
                            }),
                            u.jsx("div", {
                              className: "flex items-center space-x-2",
                              children: u.jsx("input", {
                                type: "text",
                                id: "original-amount",
                                value: "$8,400 USD",
                                readOnly: !0,
                                className:
                                  "w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50",
                              }),
                            }),
                            u.jsx("p", {
                              className: "text-sm text-slate-500 mt-1",
                              children: "Equivalent to 3,005,436.00 HUF",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "bg-white rounded-lg p-6 border border-slate-200",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-semibold text-slate-700 mb-4",
                          children: "Fee Summary",
                        }),
                        u.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex justify-between items-center pb-3 border-b border-slate-100",
                              children: [
                                u.jsx("span", {
                                  className: "text-slate-600",
                                  children: "Transfer Amount:",
                                }),
                                u.jsxs("div", {
                                  className: "text-right",
                                  children: [
                                    u.jsx("span", {
                                      className:
                                        "font-semibold text-slate-800 block",
                                      children: "$8,400.00 USD",
                                    }),
                                    u.jsx("span", {
                                      className: "text-sm text-slate-500",
                                      children: "3,005,436.00 HUF",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "flex justify-between items-center pb-3 border-b border-slate-100",
                              children: [
                                u.jsx("span", {
                                  className: "text-slate-600",
                                  children: "Processing Fee:",
                                }),
                                u.jsxs("div", {
                                  className: "text-right",
                                  children: [
                                    u.jsx("span", {
                                      className: "font-semibold text-amber-600",
                                      children: "$200.00 USD",
                                    }),
                                    u.jsx("span", {
                                      className: "text-sm text-slate-500 block",
                                      children: "(Paid separately)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "flex justify-between items-center pt-2",
                              children: [
                                u.jsx("span", {
                                  className: "text-slate-700 font-medium",
                                  children: "Recipient Receives:",
                                }),
                                u.jsxs("div", {
                                  className: "text-right",
                                  children: [
                                    u.jsx("span", {
                                      className:
                                        "font-bold text-lg text-blue-700",
                                      children: "3,005,436.00 HUF",
                                    }),
                                    u.jsx("span", {
                                      className: "text-sm text-slate-500 block",
                                      children: "Full amount",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("div", {
                  className:
                    "mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md",
                  children: u.jsxs("p", {
                    className: "text-amber-800 text-sm",
                    children: [
                      u.jsx("strong", {
                        children: "Important:",
                      }),
                      " The $200 processing fee must be paid separately and cannot be deducted from the transfer amount. Expected processing time is 2-3 business days.",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    })
  ),
  Xf = () =>
    u.jsx("section", {
      id: "process",
      className: "py-16 bg-slate-50",
      children: u.jsx("div", {
        className: "container mx-auto px-4",
        children: u.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            u.jsx("h2", {
              className:
                "text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12",
              children: "Understanding the Transfer Process",
            }),
            u.jsxs("div", {
              className: "relative",
              children: [
                u.jsx("div", {
                  className:
                    "hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 z-0",
                }),
                u.jsxs("div", {
                  className: "space-y-12 md:space-y-24 relative z-10",
                  children: [
                    u.jsxs("div", {
                      className: "flex flex-col md:flex-row items-center",
                      children: [
                        u.jsx("div", {
                          className:
                            "md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right",
                          children: u.jsxs("div", {
                            className:
                              "bg-white p-6 rounded-lg shadow-sm border border-slate-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                            children: [
                              u.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-slate-800 mb-3",
                                children: "Your Bank (Sender)",
                              }),
                              u.jsx("p", {
                                className: "text-slate-600",
                                children:
                                  "You initiate a transfer of 3,005,436.00 HUF ($8,400 USD) from your local bank to an account at the National Bank of Hungary.",
                              }),
                            ],
                          }),
                        }),
                        u.jsx("div", {
                          className:
                            "flex items-center justify-center md:w-8 md:h-8 bg-blue-600 rounded-full border-4 border-white shadow z-20",
                          children: u.jsx(If, {
                            className: "h-4 w-4 text-white",
                          }),
                        }),
                        u.jsx("div", {
                          className: "md:w-1/2 md:pl-12 hidden md:block",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex flex-col md:flex-row items-center",
                      children: [
                        u.jsx("div", {
                          className:
                            "md:w-1/2 mb-6 md:mb-0 md:pr-12 hidden md:block",
                        }),
                        u.jsx("div", {
                          className:
                            "flex items-center justify-center md:w-8 md:h-8 bg-blue-600 rounded-full border-4 border-white shadow z-20",
                          children: u.jsx(Ff, {
                            className: "h-4 w-4 text-white",
                          }),
                        }),
                        u.jsx("div", {
                          className:
                            "md:w-1/2 md:pl-12 text-center md:text-left",
                          children: u.jsxs("div", {
                            className:
                              "bg-white p-6 rounded-lg shadow-sm border border-slate-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                            children: [
                              u.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-slate-800 mb-3",
                                children: "Intermediary Bank",
                              }),
                              u.jsx("p", {
                                className: "text-slate-600",
                                children:
                                  "The intermediary bank facilitates the transfer between banks that don't have a direct relationship. A separate $200 processing fee is required.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex flex-col md:flex-row items-center",
                      children: [
                        u.jsx("div", {
                          className:
                            "md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right",
                          children: u.jsxs("div", {
                            className:
                              "bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                            children: [
                              u.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-amber-800 mb-3",
                                children: "$200 Processing Fee",
                              }),
                              u.jsx("p", {
                                className: "text-amber-700",
                                children:
                                  "The $200 processing fee must be paid separately to the intermediary bank and cannot be deducted from the transfer amount.",
                              }),
                            ],
                          }),
                        }),
                        u.jsx("div", {
                          className:
                            "flex items-center justify-center md:w-8 md:h-8 bg-amber-500 rounded-full border-4 border-white shadow z-20",
                          children: u.jsx(Af, {
                            className: "h-4 w-4 text-white",
                          }),
                        }),
                        u.jsx("div", {
                          className: "md:w-1/2 md:pl-12 hidden md:block",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex flex-col md:flex-row items-center",
                      children: [
                        u.jsx("div", {
                          className:
                            "md:w-1/2 mb-6 md:mb-0 md:pr-12 hidden md:block",
                        }),
                        u.jsx("div", {
                          className:
                            "flex items-center justify-center md:w-8 md:h-8 bg-blue-600 rounded-full border-4 border-white shadow z-20",
                          children: u.jsx($f, {
                            className: "h-4 w-4 text-white",
                          }),
                        }),
                        u.jsx("div", {
                          className:
                            "md:w-1/2 md:pl-12 text-center md:text-left",
                          children: u.jsxs("div", {
                            className:
                              "bg-white p-6 rounded-lg shadow-sm border border-slate-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                            children: [
                              u.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-slate-800 mb-3",
                                children: "National Bank of Hungary (Receiver)",
                              }),
                              u.jsx("p", {
                                className: "text-slate-600",
                                children:
                                  "The full amount of 3,005,436.00 HUF will be received and credited to the destination account within 2-3 business days.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "mt-16 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100",
              children: [
                u.jsx("h3", {
                  className: "text-xl font-bold text-slate-800 mb-4",
                  children: "Important Transfer Information",
                }),
                u.jsx("p", {
                  className: "text-slate-600 mb-4",
                  children:
                    "Please note the following key details about your international transfer:",
                }),
                u.jsxs("ul", {
                  className: "space-y-2 text-slate-600 mb-6",
                  children: [
                    u.jsxs("li", {
                      className: "flex items-start",
                      children: [
                        u.jsx("span", {
                          className: "text-blue-600 mr-2",
                          children: "•",
                        }),
                        u.jsx("span", {
                          children:
                            "Full transfer amount (3,005,436.00 HUF) will be received by the beneficiary",
                        }),
                      ],
                    }),
                    u.jsxs("li", {
                      className: "flex items-start",
                      children: [
                        u.jsx("span", {
                          className: "text-blue-600 mr-2",
                          children: "•",
                        }),
                        u.jsx("span", {
                          children:
                            "$200 processing fee must be paid separately",
                        }),
                      ],
                    }),
                    u.jsxs("li", {
                      className: "flex items-start",
                      children: [
                        u.jsx("span", {
                          className: "text-blue-600 mr-2",
                          children: "•",
                        }),
                        u.jsx("span", {
                          children: "Processing time: 2-3 business days",
                        }),
                      ],
                    }),
                    u.jsxs("li", {
                      className: "flex items-start",
                      children: [
                        u.jsx("span", {
                          className: "text-blue-600 mr-2",
                          children: "•",
                        }),
                        u.jsx("span", {
                          children:
                            "Both transfer amount and fee must be paid in the same currency",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "bg-slate-50 p-4 rounded-md",
                  children: u.jsxs("p", {
                    className: "text-slate-700 text-sm",
                    children: [
                      u.jsx("strong", {
                        children: "Important:",
                      }),
                      " Please ensure you arrange for separate payment of the $200 processing fee to complete the transfer.",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Gf = [
    {
      question: "Why was I charged a $200 intermediary bank fee?",
      answer:
        "Intermediary banks are required when there's no direct connection between your sending bank and the National Bank of Hungary. These banks charge for their services, which include transfer processing, routing, currency conversion, and compliance verification.",
    },
    {
      question: "Can I get the intermediary bank fee refunded?",
      answer:
        "Unfortunately, intermediary bank fees cannot be refunded as they are charged by third-party banks that are not under the control of the National Bank of Hungary. These fees are standard practice in international banking.",
    },
    {
      question: "How can I avoid intermediary bank fees in the future?",
      answer:
        "To minimize or avoid intermediary bank fees, you can: 1) Choose 'OUR' as the fee option when making a transfer, which means you pay all fees upfront, 2) Use banks with direct relationships to reduce the number of intermediaries, or 3) Consider alternative transfer methods like digital payment services for smaller amounts.",
    },
    {
      question: "Why wasn't I informed about this fee beforehand?",
      answer:
        "Your sending bank should provide information about potential intermediary fees, though sometimes these are not fully detailed. International transfers often involve multiple banks, and each may apply their own fees according to their fee schedule.",
    },
    {
      question: "Is the $200 fee a fixed amount for all transfers?",
      answer:
        "No, intermediary bank fees can vary based on several factors including the amount being transferred, the currency pair involved, the specific banks in the transfer chain, and the countries involved. The $200 fee is specific to your transaction.",
    },
    {
      question: "Who receives the intermediary bank fee?",
      answer:
        "The intermediary bank fee is received by the correspondent bank(s) that processed your international transfer. These are third-party banks that facilitate the movement of funds between banks that don't have a direct relationship with each other.",
    },
  ],
  Zf = ({ question: e, answer: t, isOpen: n, toggleOpen: r }) =>
    u.jsxs("div", {
      className: "border-b border-slate-200 last:border-0",
      children: [
        u.jsxs("button", {
          className:
            "flex justify-between items-center w-full py-4 text-left focus:outline-none",
          onClick: r,
          children: [
            u.jsx("span", {
              className: "font-medium text-slate-800",
              children: e,
            }),
            n
              ? u.jsx(Uf, {
                  className: "h-5 w-5 text-slate-500",
                })
              : u.jsx(Df, {
                  className: "h-5 w-5 text-slate-500",
                }),
          ],
        }),
        u.jsx("div", {
          className: `overflow-hidden transition-all duration-300 ${
            n ? "max-h-96 pb-4" : "max-h-0"
          }`,
          children: u.jsx("p", {
            className: "text-slate-600",
            children: t,
          }),
        }),
      ],
    }),
  qf = () => {
    const [e, t] = he.useState(0),
      n = (r) => {
        t(e === r ? null : r);
      };
    return u.jsx("section", {
      id: "faq",
      className: "py-16 bg-white",
      children: u.jsx("div", {
        className: "container mx-auto px-4",
        children: u.jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center mb-10",
              children: [
                u.jsx(Hf, {
                  className: "h-8 w-8 text-blue-600 mr-3",
                }),
                u.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-slate-800",
                  children: "Frequently Asked Questions",
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "bg-white rounded-lg shadow-sm border border-slate-100 divide-y divide-slate-200",
              children: Gf.map((r, l) =>
                u.jsx(
                  Zf,
                  {
                    question: r.question,
                    answer: r.answer,
                    isOpen: e === l,
                    toggleOpen: () => n(l),
                  },
                  l
                )
              ),
            }),
            u.jsxs("div", {
              className: "mt-10 text-center",
              children: [
                u.jsx("p", {
                  className: "text-slate-600 mb-4",
                  children:
                    "Still have questions about your international transfer?",
                }),
                u.jsxs("a", {
                  href: "#contact",
                  className:
                    "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium",
                  children: [
                    "Contact our support team",
                    u.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-4 w-4 ml-1",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: u.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M14 5l7 7m0 0l-7 7m7-7H3",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Jf = () => {
    const [e, t] = he.useState({
        name: "",
        email: "",
        reference: "",
        message: "",
      }),
      [n, r] = he.useState("idle"),
      l = (o) => {
        const { name: s, value: a } = o.target;
        t((d) => ({
          ...d,
          [s]: a,
        }));
      },
      i = (o) => {
        o.preventDefault(),
          r("submitting"),
          setTimeout(() => {
            r("success"),
              t({
                name: "",
                email: "",
                reference: "",
                message: "",
              });
          }, 1500);
      };
    return u.jsx("section", {
      id: "contact",
      className: "py-16 bg-slate-50",
      children: u.jsx("div", {
        className: "container mx-auto px-4",
        children: u.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            u.jsx("h2", {
              className:
                "text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12",
              children: "Contact Our International Payments Team",
            }),
            u.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                u.jsx("div", {
                  children: u.jsxs("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-slate-100 p-6 md:p-8 h-full",
                    children: [
                      u.jsx("h3", {
                        className: "text-xl font-semibold text-slate-800 mb-6",
                        children: "Get In Touch",
                      }),
                      u.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              u.jsx("div", {
                                className: "flex-shrink-0 mt-1",
                                children: u.jsx(Vf, {
                                  className: "h-5 w-5 text-blue-600",
                                }),
                              }),
                              u.jsxs("div", {
                                className: "ml-3",
                                children: [
                                  u.jsx("h4", {
                                    className:
                                      "text-sm font-medium text-slate-700",
                                    children: "Email",
                                  }),
                                  u.jsx("p", {
                                    className: "text-slate-600 mt-1",
                                    children: "Mariaanton@accountant.com",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              u.jsx("div", {
                                className: "flex-shrink-0 mt-1",
                                children: u.jsx(Wf, {
                                  className: "h-5 w-5 text-blue-600",
                                }),
                              }),
                              u.jsxs("div", {
                                className: "ml-3",
                                children: [
                                  u.jsx("h4", {
                                    className:
                                      "text-sm font-medium text-slate-700",
                                    children: "WhatsApp",
                                  }),
                                  u.jsx("p", {
                                    className: "text-slate-600 mt-1",
                                    children: "+40 721 393 850",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              u.jsx("div", {
                                className: "flex-shrink-0 mt-1",
                                children: u.jsx(Bf, {
                                  className: "h-5 w-5 text-blue-600",
                                }),
                              }),
                              u.jsxs("div", {
                                className: "ml-3",
                                children: [
                                  u.jsx("h4", {
                                    className:
                                      "text-sm font-medium text-slate-700",
                                    children: "Reference Numbers",
                                  }),
                                  u.jsx("p", {
                                    className: "text-slate-600 mt-1",
                                    children:
                                      "Please include your transfer reference number in all communications",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className:
                          "mt-8 p-4 bg-blue-50 rounded-md border border-blue-100",
                        children: u.jsxs("p", {
                          className: "text-sm text-blue-800",
                          children: [
                            u.jsx("strong", {
                              children: "Business Hours:",
                            }),
                            " Monday to Friday, 9:00 AM - 5:00 PM CET",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                u.jsx("div", {
                  children: u.jsxs("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-slate-100 p-6 md:p-8",
                    children: [
                      u.jsx("h3", {
                        className: "text-xl font-semibold text-slate-800 mb-6",
                        children: "Send Us a Message",
                      }),
                      u.jsxs("form", {
                        onSubmit: i,
                        children: [
                          u.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "name",
                                    className:
                                      "block text-sm font-medium text-slate-700 mb-1",
                                    children: "Full Name",
                                  }),
                                  u.jsx("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    value: e.name,
                                    onChange: l,
                                    required: !0,
                                    className:
                                      "w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "email",
                                    className:
                                      "block text-sm font-medium text-slate-700 mb-1",
                                    children: "Email Address",
                                  }),
                                  u.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    value: e.email,
                                    onChange: l,
                                    required: !0,
                                    className:
                                      "w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "reference",
                                    className:
                                      "block text-sm font-medium text-slate-700 mb-1",
                                    children: "Transfer Reference Number",
                                  }),
                                  u.jsx("input", {
                                    type: "text",
                                    id: "reference",
                                    name: "reference",
                                    value: e.reference,
                                    onChange: l,
                                    className:
                                      "w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "message",
                                    className:
                                      "block text-sm font-medium text-slate-700 mb-1",
                                    children: "Your Message",
                                  }),
                                  u.jsx("textarea", {
                                    id: "message",
                                    name: "message",
                                    value: e.message,
                                    onChange: l,
                                    rows: 4,
                                    required: !0,
                                    className:
                                      "w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className: "mt-6",
                            children: u.jsx("button", {
                              type: "submit",
                              disabled: n === "submitting",
                              className: `w-full py-3 px-4 rounded-md font-medium text-white transition-colors duration-200 ${
                                n === "submitting"
                                  ? "bg-blue-400"
                                  : "bg-blue-600 hover:bg-blue-700"
                              }`,
                              children:
                                n === "submitting"
                                  ? "Sending..."
                                  : "Send Message",
                            }),
                          }),
                          n === "success" &&
                            u.jsx("div", {
                              className:
                                "mt-4 p-3 bg-green-50 text-green-800 rounded-md border border-green-100",
                              children:
                                "Thank you for your message. We will respond as soon as possible.",
                            }),
                          n === "error" &&
                            u.jsx("div", {
                              className:
                                "mt-4 p-3 bg-red-50 text-red-800 rounded-md border border-red-100",
                              children:
                                "There was an error sending your message. Please try again later.",
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  bf = () => {
    const e = new Date().getFullYear();
    return u.jsx("footer", {
      className: "bg-slate-900 text-white pt-12 pb-8",
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          u.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8 mb-8",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsxs("div", {
                    className: "flex items-center space-x-2 mb-4",
                    children: [
                      u.jsx(nc, {
                        className: "h-6 w-6 text-blue-400",
                      }),
                      u.jsx("span", {
                        className: "font-semibold text-lg",
                        children: "National Bank of Hungary",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    className: "text-slate-400 text-sm mb-4",
                    children:
                      "Supporting international transfers with transparency and trust",
                  }),
                  u.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-slate-400 hover:text-white transition-colors duration-200",
                        children: u.jsx("svg", {
                          className: "h-5 w-5",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: u.jsx("path", {
                            d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
                          }),
                        }),
                      }),
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-slate-400 hover:text-white transition-colors duration-200",
                        children: u.jsx("svg", {
                          className: "h-5 w-5",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: u.jsx("path", {
                            d: "M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.090-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",
                          }),
                        }),
                      }),
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-slate-400 hover:text-white transition-colors duration-200",
                        children: u.jsx("svg", {
                          className: "h-5 w-5",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: u.jsx("path", {
                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h4", {
                    className: "text-lg font-semibold mb-4",
                    children: "Quick Links",
                  }),
                  u.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Banking Services",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Exchange Rates",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "International Transfers",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Online Banking",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h4", {
                    className: "text-lg font-semibold mb-4",
                    children: "Support",
                  }),
                  u.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "FAQ",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Contact Us",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Dispute Resolution",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Fee Schedule",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h4", {
                    className: "text-lg font-semibold mb-4",
                    children: "Legal",
                  }),
                  u.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Terms & Conditions",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Privacy Policy",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Cookie Policy",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#",
                          className:
                            "text-slate-400 hover:text-white transition-colors duration-200",
                          children: "Compliance",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "pt-8 border-t border-slate-800 text-center",
            children: u.jsxs("p", {
              className: "text-slate-500 text-sm",
              children: [
                "© ",
                e,
                " National Bank of Hungary. All rights reserved.",
              ],
            }),
          }),
        ],
      }),
    });
  };
function ep() {
  return u.jsxs("div", {
    className: "min-h-screen bg-slate-50 flex flex-col",
    children: [
      u.jsx(Qf, {}),
      u.jsxs("main", {
        className: "flex-grow",
        children: [
          u.jsx(Kf, {}),
          u.jsx(Yf, {}),
          u.jsx(Xf, {}),
          u.jsx(qf, {}),
          u.jsx(Jf, {}),
        ],
      }),
      u.jsx(bf, {}),
    ],
  });
}
tc(document.getElementById("root")).render(
  u.jsx(he.StrictMode, {
    children: u.jsx(ep, {}),
  })
);
