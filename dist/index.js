let Ae = "en", $e = {};
function Je(t, r) {
  Ae = t, $e = r;
}
function qe(t, r, n) {
  var i;
  return ((i = $e[Ae]) == null ? void 0 : i[t]) ?? t;
}
const Qe = {
  "plugin.loaded": "图表插件已加载",
  "plugin.unloaded": "图表插件已卸载",
  "command.insertChart": "插入图表",
  "command.insertChart.description": "在当前块下方插入图表",
  "toolbar.chart": "图表",
  "toolbar.refresh": "刷新数据",
  "toolbar.fullscreen": "全屏",
  "toolbar.exitFullscreen": "退出全屏",
  "toolbar.dataCount": "数据数量",
  "status.loading": "加载图表...",
  "status.zoom": "缩放",
  "error.loadFailed": "加载失败",
  "error.blockNotFound": "无法加载块数据",
  "error.noData": "无数据",
  "action.retry": "重试",
  "menu.generateChart": "生成图表"
};

// ---------- 工具函数：获取插件基础路径 ----------
function getPluginBasePath() {
    console.log('🔍 开始获取插件基础路径...');
    
    // 方法1: 使用错误堆栈方式获取当前脚本路径
    try {
        const error = new Error();
        console.log('📋 错误堆栈:', error.stack);
        
        if (error.stack) {
            const stackLines = error.stack.split('\n');
            console.log('📝 堆栈行数:', stackLines.length);
            
            for (let i = 0; i < stackLines.length; i++) {
                const line = stackLines[i];
                console.log(`📄 第${i+1}行堆栈:`, line);
                
                // 匹配包含插件名称的堆栈行
                if (line.includes('orca-echart') || line.includes('index.js')) {
                    console.log('✅ 找到匹配的堆栈行:', line);
                    
                    // 提取URL
                    const urlMatch = line.match(/(https?:\/\/[^\s\)]+|file:\/\/[^\s\)]+)/);
                    if (urlMatch && urlMatch[0]) {
                        let url = urlMatch[0];
                        console.log('🔗 提取到的URL:', url);
                        
                        // 清理URL（去掉行号和列号）
                        url = url.replace(/:\d+:\d+$/, '');
                        url = url.replace(/:\d+$/, '');
                        console.log('🧹 清理后的URL:', url);
                        
                        // 返回URL的目录部分
                        const dirPath = url.substring(0, url.lastIndexOf('/'));
                        console.log('📁 最终目录路径:', dirPath);
                        return dirPath;
                    }
                }
            }
        }
    } catch (e) {
        console.error('❌ 错误堆栈获取路径失败:', e);
    }
    
    // 方法2: 从脚本标签获取（备用方案）
    try {
        console.log('🔄 尝试从脚本标签获取路径...');
        const scripts = document.querySelectorAll('script');
        console.log('📊 找到脚本标签数量:', scripts.length);
        
        for (const script of scripts) {
            const src = script.src;
            console.log('🔗 脚本src:', src);
            
            if (src.includes('orca-echart')) {
                console.log('✅ 找到匹配的脚本标签:', src);
                const dirPath = src.substring(0, src.lastIndexOf('/'));
                console.log('📁 最终目录路径:', dirPath);
                return dirPath;
            }
        }
    } catch (e) {
        console.error('❌ 脚本标签获取路径失败:', e);
    }
    
    // 方法3: 硬编码路径（最后备用方案）
    console.log('⚠️ 使用硬编码路径作为最后备用方案');
    return `file:///C:/Users/MJ/Documents/orca/plugins/orca-echart/dist`;
}

// 获取插件路径并设置配置
const pluginPath = getPluginBasePath() + '/';
console.log('📌 最终插件路径:', pluginPath);

// 动态加载 ECharts
function loadECharts() {
  return new Promise((resolve, reject) => {
    if (window.echarts) {
      console.log('✅ ECharts 已加载，版本:', window.echarts.version);
      resolve(window.echarts);
      return;
    }
    
    // 使用本地插件目录下的 ECharts 文件
    const echartsPath = `${pluginPath}echarts.min.js`;
    
    console.log('🔄 正在从本地加载 ECharts...', echartsPath);
    
    const script = document.createElement('script');
    script.src = echartsPath;
    script.async = true;
    
    script.onload = () => {
      console.log('✅ ECharts 加载成功，版本:', window.echarts.version);
      resolve(window.echarts);
    };
    
    script.onerror = (error) => {
      console.error('❌ ECharts 加载失败:', error);
      reject(new Error(`Failed to load ECharts from ${echartsPath}`));
    };
    
    document.head.appendChild(script);
  });
}
var Oe = { exports: {} };
const Ze = React;
var Ft = {}, _e;
function tr() {
  if (_e) return Ft;
  _e = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var t = Ze, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), d = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), b = Symbol.iterator, x = "@@iterator";
    function y(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = b && e[b] || e[x];
      return typeof s == "function" ? s : null;
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var s = arguments.length, g = new Array(s > 1 ? s - 1 : 0), R = 1; R < s; R++)
          g[R - 1] = arguments[R];
        _("error", e, g);
      }
    }
    function _(e, s, g) {
      {
        var R = j.ReactDebugCurrentFrame, $ = R.getStackAddendum();
        $ !== "" && (s += "%s", g = g.concat([$]));
        var B = g.map(function(S) {
          return String(S);
        });
        B.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, B);
      }
    }
    var L = !1, ot = !1, Ut = !1, Gt = !1, ft = !1, Vt;
    Vt = Symbol.for("react.module.reference");
    function ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || ft || e === i || e === p || e === m || Gt || e === k || L || ot || Ut || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === f || e.$$typeof === h || e.$$typeof === d || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Vt || e.getModuleId !== void 0));
    }
    function Kt(e, s, g) {
      var R = e.displayName;
      if (R)
        return R;
      var $ = s.displayName || s.name || "";
      return $ !== "" ? g + "(" + $ + ")" : g;
    }
    function $t(e) {
      return e.displayName || "Context";
    }
    function et(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var s = e;
            return $t(s) + ".Consumer";
          case h:
            var g = e;
            return $t(g._context) + ".Provider";
          case u:
            return Kt(e, e.render, "ForwardRef");
          case f:
            var R = e.displayName || null;
            return R !== null ? R : et(e.type) || "Memo";
          case M: {
            var $ = e, B = $._payload, S = $._init;
            try {
              return et(S(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var it = Object.assign, dt = 0, D, Jt, ae, se, ce, le, de;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ot() {
      {
        if (dt === 0) {
          D = console.log, Jt = console.info, ae = console.warn, se = console.error, ce = console.group, le = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        dt++;
      }
    }
    function he() {
      {
        if (dt--, dt === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, e, {
              value: D
            }),
            info: it({}, e, {
              value: Jt
            }),
            warn: it({}, e, {
              value: ae
            }),
            error: it({}, e, {
              value: se
            }),
            group: it({}, e, {
              value: ce
            }),
            groupCollapsed: it({}, e, {
              value: le
            }),
            groupEnd: it({}, e, {
              value: de
            })
          });
        }
        dt < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gt = j.ReactCurrentDispatcher, Bt;
    function mt(e, s, g) {
      {
        if (Bt === void 0)
          try {
            throw Error();
          } catch ($) {
            var R = $.stack.trim().match(/\n( *(at )?)/);
            Bt = R && R[1] || "";
          }
        return `
` + Bt + e;
      }
    }
    var Lt = !1, bt;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      bt = new vt();
    }
    function at(e, s) {
      if (!e || Lt)
        return "";
      {
        var g = bt.get(e);
        if (g !== void 0)
          return g;
      }
      var R;
      Lt = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = gt.current, gt.current = null, Ot();
      try {
        if (s) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (J) {
              R = J;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (J) {
              R = J;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            R = J;
          }
          e();
        }
      } catch (J) {
        if (J && R && typeof J.stack == "string") {
          for (var N = J.stack.split(`
`), V = R.stack.split(`
`), W = N.length - 1, Y = V.length - 1; W >= 1 && Y >= 0 && N[W] !== V[Y]; )
            Y--;
          for (; W >= 1 && Y >= 0; W--, Y--)
            if (N[W] !== V[Y]) {
              if (W !== 1 || Y !== 1)
                do
                  if (W--, Y--, Y < 0 || N[W] !== V[Y]) {
                    var tt = `
` + N[W].replace(" at new ", " at ");
                    return e.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", e.displayName)), typeof e == "function" && bt.set(e, tt), tt;
                  }
                while (W >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        Lt = !1, gt.current = B, he(), Error.prepareStackTrace = $;
      }
      var Tt = e ? e.displayName || e.name : "", Ct = Tt ? mt(Tt) : "";
      return typeof e == "function" && bt.set(e, Ct), Ct;
    }
    function st(e, s, g) {
      return at(e, !1);
    }
    function Pt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function xt(e, s, g) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return at(e, Pt(e));
      if (typeof e == "string")
        return mt(e);
      switch (e) {
        case p:
          return mt("Suspense");
        case m:
          return mt("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return st(e.render);
          case f:
            return xt(e.type, s, g);
          case M: {
            var R = e, $ = R._payload, B = R._init;
            try {
              return xt(B($), s, g);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Rt = {}, ut = j.ReactDebugCurrentFrame;
    function yt(e) {
      if (e) {
        var s = e._owner, g = xt(e.type, e._source, s ? s.type : null);
        ut.setExtraStackFrame(g);
      } else
        ut.setExtraStackFrame(null);
    }
    function qt(e, s, g, R, $) {
      {
        var B = Function.call.bind(K);
        for (var S in e)
          if (B(e, S)) {
            var N = void 0;
            try {
              if (typeof e[S] != "function") {
                var V = Error((R || "React class") + ": " + g + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              N = e[S](s, S, R, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              N = W;
            }
            N && !(N instanceof Error) && (yt($), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", g, S, typeof N), yt(null)), N instanceof Error && !(N.message in Rt) && (Rt[N.message] = !0, yt($), C("Failed %s type: %s", g, N.message), yt(null));
          }
      }
    }
    var jt = Array.isArray;
    function It(e) {
      return jt(e);
    }
    function fe(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, g = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return g;
      }
    }
    function z(e) {
      try {
        return O(e), !1;
      } catch {
        return !0;
      }
    }
    function O(e) {
      return "" + e;
    }
    function Dt(e) {
      if (z(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fe(e)), O(e);
    }
    var pt = j.ReactCurrentOwner, zt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Zt;
    function Nt(e) {
      if (K.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ge(e) {
      if (K.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function pe(e, s) {
      typeof e.ref == "string" && pt.current;
    }
    function me(e, s) {
      {
        var g = function() {
          Qt || (Qt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        g.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function be(e, s) {
      {
        var g = function() {
          Zt || (Zt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        g.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var ve = function(e, s, g, R, $, B, S) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: g,
        props: S,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function xe(e, s, g, R, $) {
      {
        var B, S = {}, N = null, V = null;
        g !== void 0 && (Dt(g), N = "" + g), ge(s) && (Dt(s.key), N = "" + s.key), Nt(s) && (V = s.ref, pe(s, $));
        for (B in s)
          K.call(s, B) && !zt.hasOwnProperty(B) && (S[B] = s[B]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (B in W)
            S[B] === void 0 && (S[B] = W[B]);
        }
        if (N || V) {
          var Y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          N && me(S, Y), V && be(S, Y);
        }
        return ve(e, N, V, $, R, pt.current, S);
      }
    }
    var Wt = j.ReactCurrentOwner, te = j.ReactDebugCurrentFrame;
    function ct(e) {
      if (e) {
        var s = e._owner, g = xt(e.type, e._source, s ? s.type : null);
        te.setExtraStackFrame(g);
      } else
        te.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function Mt(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function _t() {
      {
        if (Wt.current) {
          var e = et(Wt.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ye(e) {
      return "";
    }
    var a = {};
    function c(e) {
      {
        var s = _t();
        if (!s) {
          var g = typeof e == "string" ? e : e.displayName || e.name;
          g && (s = `

Check the top-level render call using <` + g + ">.");
        }
        return s;
      }
    }
    function v(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var g = c(s);
        if (a[g])
          return;
        a[g] = !0;
        var R = "";
        e && e._owner && e._owner !== Wt.current && (R = " It was passed a child from " + et(e._owner.type) + "."), ct(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, R), ct(null);
      }
    }
    function E(e, s) {
      {
        if (typeof e != "object")
          return;
        if (It(e))
          for (var g = 0; g < e.length; g++) {
            var R = e[g];
            Mt(R) && v(R, s);
          }
        else if (Mt(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var $ = y(e);
          if (typeof $ == "function" && $ !== e.entries)
            for (var B = $.call(e), S; !(S = B.next()).done; )
              Mt(S.value) && v(S.value, s);
        }
      }
    }
    function F(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var g;
        if (typeof s == "function")
          g = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === f))
          g = s.propTypes;
        else
          return;
        if (g) {
          var R = et(s);
          qt(g, e.props, "prop", R, e);
        } else if (s.PropTypes !== void 0 && !wt) {
          wt = !0;
          var $ = et(s);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function A(e) {
      {
        for (var s = Object.keys(e.props), g = 0; g < s.length; g++) {
          var R = s[g];
          if (R !== "children" && R !== "key") {
            ct(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), ct(null);
            break;
          }
        }
        e.ref !== null && (ct(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var X = {};
    function G(e, s, g, R, $, B) {
      {
        var S = ie(e);
        if (!S) {
          var N = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = ye();
          V ? N += V : N += _t();
          var W;
          e === null ? W = "null" : It(e) ? W = "array" : e !== void 0 && e.$$typeof === r ? (W = "<" + (et(e.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, N);
        }
        var Y = xe(e, s, g, $, B);
        if (Y == null)
          return Y;
        if (S) {
          var tt = s.children;
          if (tt !== void 0)
            if (R)
              if (It(tt)) {
                for (var Tt = 0; Tt < tt.length; Tt++)
                  E(tt[Tt], e);
                Object.freeze && Object.freeze(tt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              E(tt, e);
        }
        if (K.call(s, "key")) {
          var Ct = et(e), J = Object.keys(s).filter(function(Ke) {
            return Ke !== "key";
          }), we = J.length > 0 ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!X[Ct + we]) {
            var Ve = J.length > 0 ? "{" + J.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, Ct, Ve, Ct), X[Ct + we] = !0;
          }
        }
        return e === o ? A(Y) : F(Y), Y;
      }
    }
    function lt(e, s, g) {
      return G(e, s, g, !0);
    }
    function Z(e, s, g) {
      return G(e, s, g, !1);
    }
    var ht = Z, St = lt;
    Ft.Fragment = o, Ft.jsx = ht, Ft.jsxs = St;
  }(), Ft;
}
Oe.exports = tr();
var w = Oe.exports;
function Be(t) {
  return t.aliases && t.aliases.length > 0 ? t.aliases[0] : t.text ? t.text : t.content && t.content.length > 0 ? t.content.map((r) => r.t === "t" && typeof r.v == "string" || typeof r.v == "string" ? r.v : "").join("").trim() : "";
}
async function Le(t, r = 0, n, o, i = /* @__PURE__ */ new Set(), l, h) {
  if (l != null && l.cancelled)
    return console.log(`[MindMap] Operation cancelled at block ${t}`), null;
  if (i.has(t))
    return console.warn(`[MindMap] Cycle detected: block ${t} already visited`), null;
  if (n !== void 0 && r >= n)
    return console.log(`[MindMap] Max depth ${n} reached at block ${t}`), null;
  i.add(t), h && h(i.size);
  let d = orca.state.blocks[t];
  if (!d)
    try {
      if (d = await orca.invokeBackend("get-block", t), l != null && l.cancelled)
        return console.log(`[MindMap] Operation cancelled after loading block ${t}`), null;
    } catch (m) {
      return console.error(`[MindMap] Failed to load block ${t}:`, m), null;
    }
  if (!d)
    return console.warn(`[MindMap] Block ${t} not found`), null;
  const u = Be(d), p = {
    id: t,
    content: u,
    children: [],
    depth: r
  };
  if (d.children && d.children.length > 0) {
    const m = o !== void 0 ? d.children.slice(0, o) : d.children;
    for (const f of m) {
      if (l != null && l.cancelled)
        return console.log(`[MindMap] Operation cancelled while processing children of ${t}`), p;
      const M = await Le(
        f,
        r + 1,
        n,
        o,
        i,
        // Pass the same visited set to detect cycles across the entire tree
        l,
        // Pass cancellation token through recursion
        h
        // Pass progress callback through recursion
      );
      M && p.children.push(M);
    }
  }
  return p;
}
async function er(t, r = 0, n, o, i = /* @__PURE__ */ new Set(), l, h) {
  let d = !1, u;
  async function p(f, M, k) {
    if (l != null && l.cancelled || k.has(f))
      return null;
    if (n !== void 0 && M >= n)
      return d = !0, u = "maxDepth", null;
    k.add(f), h && h(k.size);
    let b = orca.state.blocks[f];
    if (!b)
      try {
        if (b = await orca.invokeBackend("get-block", f), l != null && l.cancelled)
          return null;
      } catch {
        return null;
      }
    if (!b)
      return null;
    const x = Be(b), y = {
      id: f,
      content: x,
      children: [],
      depth: M
    };
    if (b.children && b.children.length > 0) {
      o !== void 0 && b.children.length > o && (d = !0, u = "maxChildren");
      const j = o !== void 0 ? b.children.slice(0, o) : b.children;
      for (const C of j) {
        if (l != null && l.cancelled)
          return y;
        const _ = await p(
          C,
          M + 1,
          k
        );
        _ && y.children.push(_);
      }
    }
    return y;
  }
  return {
    node: await p(t, r, i),
    wasTruncated: d,
    truncationReason: u
  };
}
const I = {
  isAbstract(t) {
    return typeof t.start == "number" && typeof t.end == "number";
  }
};
var T;
(function(t) {
  t.right = "right", t.left = "left", t.standard = "standard", t.upward = "upward", t.downward = "downward", t.rightBottomIndented = "right-bottom-indented", t.rightTopIndented = "right-top-indented", t.leftTopIndented = "left-top-indented", t.leftBottomIndented = "left-bottom-indented";
})(T || (T = {}));
var Q;
(function(t) {
  t.logic = "logic", t.indented = "indented", t.fishBone = "fish-bone";
})(Q || (Q = {}));
function Ce(t) {
  return t.origin.layout ? t.origin.layout : I.isAbstract(t.origin) ? ir(Ce(t.parent)) : t.parent ? Ce(t.parent) : null;
}
const oe = (t) => t === T.rightBottomIndented || t === T.rightTopIndented || t === T.leftBottomIndented || t === T.leftTopIndented, rr = (t) => t === T.right || t === T.left || t === T.downward || t === T.upward, je = (t) => t === T.standard, kt = (t) => t === T.right || t === T.left || t === T.standard || oe(t), nr = (t) => t === T.right || t === T.left || t === T.standard, Pe = (t) => t === T.leftTopIndented || t === T.rightTopIndented || t === T.upward, Ie = (t) => t === T.left || t === T.leftTopIndented || t === T.leftBottomIndented, or = (t) => t === T.right || t === T.rightTopIndented || t === T.rightBottomIndented, Me = (t) => oe(t) ? Q.indented : (je(t) || rr(t), Q.logic), ir = (t) => oe(t) ? or(t) ? T.right : T.left : t;
class Xt {
  constructor(r, n, o, i) {
    this.x = 0, this.y = 0, this.vGap = 0, this.hGap = 0, this.width = 0, this.height = 0, this.depth = 0, this.children = [], this.left = !1, this.up = !1;
    const l = n.getHorizontalGap(r, i), h = n.getVerticalGap(r, i);
    this.origin = r, this.width = n.getWidth(r), this.height = n.getHeight(r), this.x = this.y = 0, i && (this.parent = i);
    const d = Ce(this);
    this.layout = d && d !== T.standard ? d : o.rootLayoutType;
    const u = n.getVerticalConnectingPosition(r, i);
    u && (this.verticalConnectingPosition = u), this.addGap(l, h);
  }
  isRoot() {
    return this.depth === 0;
  }
  addGap(r, n) {
    const o = this;
    o.hGap += r, o.vGap += n, o.width += 2 * r, o.height += 2 * n;
  }
  eachNode(r) {
    De(this, r);
  }
  getBoundingBox() {
    const r = {
      left: Number.MAX_VALUE,
      top: Number.MAX_VALUE,
      right: Number.MIN_VALUE,
      bottom: Number.MIN_VALUE,
      width: 0,
      height: 0
    };
    return this.eachNode((n) => {
      r.left = Math.min(r.left, n.x), r.top = Math.min(r.top, n.y), r.right = Math.max(r.right, n.x + n.width), r.bottom = Math.max(r.bottom, n.y + n.height);
    }), r.width = r.right - r.left, r.height = r.bottom - r.top, r;
  }
  translate(r = 0, n = 0) {
    this.eachNode((o) => {
      o.x += r, o.y += n;
    });
  }
  right2left() {
    const r = this, n = r.getBoundingBox();
    r.eachNode((o) => {
      o.x = o.x - (o.x - n.left) * 2 - o.width, o.left = !0;
    }), r.translate(n.width, 0);
  }
  down2up() {
    const r = this, n = r.getBoundingBox();
    r.eachNode((o) => {
      o.y = o.y - (o.y - n.top) * 2 - o.height, o.up = !0;
    }), r.translate(0, n.height);
  }
}
function De(t, r) {
  var n;
  (n = t.children) == null || n.forEach((o) => {
    De(o, r);
  }), r(t);
}
class ar {
  constructor(r, n, o, i, l, h, d, u, p, m) {
    this.left = r, this.right = n, this.top = o, this.bottom = i, this.width = l, this.height = h, this.rootX = d, this.rootY = u, this.rootWidth = p, this.rootHeight = m;
  }
}
function sr(t) {
  return {
    left: t.top,
    right: t.bottom,
    top: t.left,
    bottom: t.right,
    width: t.height,
    height: t.width,
    rootX: t.rootY,
    rootY: t.rootX,
    rootWidth: t.rootHeight,
    rootHeight: t.rootWidth
  };
}
var Se;
(function(t) {
  t.middle = "middle", t.bottom = "bottom";
})(Se || (Se = {}));
class Et {
  constructor(r, n, o, i, l) {
    this.width = r, this.height = n, this.y = o, this.children = i, this.childrenCount = i.length, this.x = 0, this.preliminary = 0, this.modifier = 0, this.shift = 0, this.change = 0, this.tl = null, this.tr = null, this.el = null, this.er = null, this.msel = 0, this.mser = 0, this.origin = l;
  }
}
const Ne = (t) => {
  var r;
  return t.children ? (r = t.children) == null ? void 0 : r.filter((n) => n instanceof Xt ? !I.isAbstract(n.origin) : n instanceof Et ? !I.isAbstract(n.origin.origin) : !I.isAbstract(n)) : [];
}, ze = (t, r) => {
  const n = t.children.indexOf(r);
  return t.children.find((o) => {
    if (o instanceof Xt)
      return I.isAbstract(o.origin) && o.origin.end === n;
    if (o instanceof Et && t instanceof Et) {
      if (I.isAbstract(o.origin.origin)) {
        const { end: i } = Ht(o.origin.origin, t.origin);
        return i === n;
      }
      return !1;
    }
    return I.isAbstract(o) && o.end === n;
  });
}, cr = (t, r) => {
  const n = t.children.indexOf(r);
  return t.children.find((o) => {
    if (o instanceof Xt)
      return I.isAbstract(o.origin) && o.origin.start === n;
    if (o instanceof Et && t instanceof Et) {
      if (I.isAbstract(o.origin.origin)) {
        const { start: i } = Ht(o.origin.origin, t.origin);
        return i === n;
      }
      return !1;
    }
    return I.isAbstract(o) && o.start === n;
  });
}, Ht = (t, r) => {
  let n = t.start, o = t.end;
  if (je(r.layout)) {
    const i = r.origin.rightNodeCount;
    n >= i && (o -= i, n -= i);
  }
  return { start: n, end: o };
};
function ee(t, r, n) {
  t.children[r].modifier += n;
}
function lr(t) {
  return t.childrenCount === 0 ? null : t.children[0];
}
function We(t) {
  let r = Ne(t);
  return t.childrenCount === 0 ? null : r[r.length - 1];
}
function dr(t, r) {
  if (I.isAbstract(t.children[r].origin.origin))
    return;
  let n = t.children[r - 1], o = t.children[r], i = n.modifier + n.preliminary + n.width, l = o.modifier + o.preliminary, h = 0, d = t, u = t;
  for (; n || o; ) {
    if (n) {
      let m = h + n.modifier + n.preliminary + n.width;
      m > i && (i = m), i = Ye(d, n, i, h), d = n, h = n.modifier + h, n = We(n);
    }
    if (o) {
      let m = o.modifier + o.preliminary;
      m < l && (l = m), l = fr(u, o, l), u = o, o = lr(o);
    }
  }
  const p = i - l;
  p > 0 && ee(t, r, p);
}
function ur(t) {
  const r = t.children[0];
  let n = r.preliminary + r.modifier;
  const o = Ne(t), i = o[o.length - 1];
  let l = i.modifier + i.preliminary + i.width;
  r.origin.blackNode && r.origin.blackNode.rootX > r.origin.blackNode.left && (n = n + (r.origin.blackNode.rootX - r.origin.blackNode.left)), i.origin.blackNode && i.origin.blackNode.rootX + i.origin.blackNode.rootWidth < i.origin.blackNode.right && (l = l - (i.origin.blackNode.right - (i.origin.blackNode.rootX + i.origin.blackNode.rootWidth))), r.origin.verticalConnectingPosition && i.origin.verticalConnectingPosition && (n = n + r.width - r.origin.vGap, l = l - i.origin.vGap);
  let h = t.width / 2;
  t.origin.verticalConnectingPosition && (h = t.width - t.origin.vGap);
  const d = (n + l) / 2 - h;
  d > 0 ? t.preliminary = d : t.children.forEach((u, p) => {
    ee(t, p, Math.abs(d));
  });
}
function ke(t) {
  if (t.childrenCount !== 0) {
    ke(t.children[0]);
    for (let r = 1; r < t.childrenCount; r++) {
      const n = t.children.find((o) => {
        let i = null;
        if (I.isAbstract(o.origin.origin)) {
          let { end: l } = Ht(o.origin.origin, t.origin);
          i = l;
        }
        return i === r - 1;
      });
      n && hr(t, n), ke(t.children[r]), dr(t, r);
    }
    ur(t);
  }
}
function Fe(t, r) {
  r += t.modifier, t.x = t.preliminary + r;
  for (let n = 0; n < t.childrenCount; n++)
    Fe(t.children[n], r);
}
function hr(t, r, n) {
  const { start: o, end: i } = Ht(r.origin.origin, t.origin), l = t.children.indexOf(r), h = t.children[o];
  let d = t.children[i];
  const u = h.modifier;
  let p = d.modifier + d.preliminary + d.width, m = d.modifier, f = t;
  for (t.children[l].modifier = h.modifier; d.childrenCount; ) {
    f = d;
    const b = We(d);
    d = b || d;
    let x = m + d.modifier + d.preliminary + d.width;
    p = Ye(f, d, p, m), m += d.modifier, x > p && (p = x);
  }
  const M = r.origin.blackNode ? r.origin.blackNode.rootX * 2 + r.origin.blackNode.rootWidth : r.width, k = p - u;
  if (k > M) {
    const b = (k - M) / 2;
    ee(t, l, b);
  } else {
    const b = (M - k) / 2;
    for (let x = o; x < i + 1; x++)
      ee(t, x, b);
  }
}
function Ye(t, r, n, o) {
  const i = ze(t, r);
  return i ? Math.max(i.modifier + i.width + o, n) : n;
}
function fr(t, r, n) {
  const o = cr(t, r);
  return o ? Math.min(o.modifier + o.preliminary, n) : n;
}
function gr(t) {
  ke(t), Fe(t, 0);
}
function Ee(t, r = 0) {
  t.x = r, t.children.forEach((n) => {
    if (I.isAbstract(n.origin)) {
      let o = 0;
      for (let i = n.origin.start; i <= n.origin.end; i++) {
        const l = t.children[i].getBoundingBox();
        o = Math.max(l.width, o);
      }
      Ee(n, t.x + t.width / 2 + o);
    } else
      Ee(n, t.x + t.width / 2);
  });
}
function pr(t, r) {
  let n = t.y + t.height, o = null;
  i(t);
  function i(l) {
    l.children.forEach((h, d) => {
      const u = l.children.find((m) => I.isAbstract(m.origin) && m.origin.end === d - 1);
      if (u) {
        const m = o != null && o.origin.isCollapsed ? r.getExtendHeight(h.origin) : 0;
        n = mr(l, u) + m;
      }
      if (I.isAbstract(h.origin))
        return;
      let p = n + h.vGap;
      o && !nr(o.layout) && o.origin.children.length > 0 && (o.origin.isCollapsed ? p = p + r.getExtendHeight(h.origin) : p = p + r.getIndentedCrossLevelGap()), h.y = p, o = h, n = h.y + h.height, i(h);
    });
  }
}
function mr(t, r) {
  const n = r.origin, o = t.children.indexOf(r), i = t.children[n.start], l = t.children[n.end];
  t.children[o].y = i.y;
  const h = i.y;
  let d = l.y + l.height, u = l, p = t;
  for (; u != null && u.children.length; ) {
    p = u;
    const k = Ne(p);
    u = k[k.length - 1];
    const b = ze(p, u);
    d = b ? Math.max(b.y + b.height, u.y + u.height) : u.y + u.height;
  }
  const m = d - h, f = r.blackNode ? r.blackNode.height : r.height, M = r.blackNode ? r.blackNode.rootY * 2 + r.blackNode.rootHeight : r.height;
  if (M > m) {
    const k = (M - m) / 2;
    for (let b = n.start; b <= n.end; b++)
      t.children[b].eachNode((x) => {
        x.y += k;
      });
  } else {
    const k = (m - M) / 2;
    t.children[o].y += k;
  }
  return Math.max(r.y + f, i.y + m);
}
function Xe(t, r, n) {
  n ? r.y = t.x : r.x = t.x, t.children.forEach((o, i) => {
    Xe(o, r.children[i], n);
  });
}
function He(t, r, n = 0) {
  var o, i;
  if (r) {
    if (I.isAbstract(t.origin)) {
      const { start: l, end: h } = Ht(t.origin, t.parent);
      for (let d = l; d <= h; d++) {
        const u = (o = t.parent) == null ? void 0 : o.children[d].getBoundingBox().right;
        n = Math.max(u, n);
      }
    }
    t.x = n, n += t.width;
  } else {
    if (I.isAbstract(t.origin))
      for (let l = t.origin.start; l <= t.origin.end; l++) {
        const h = (i = t.parent) == null ? void 0 : i.children[l].getBoundingBox().bottom;
        n = Math.max(h, n);
      }
    t.y = n, n += t.height;
  }
  t.children.forEach((l) => {
    He(l, r, n);
  });
}
const Ue = (t, r) => {
  const n = [];
  return t.children.forEach((o) => {
    n.push(Ue(o, r));
  }), r ? (t.blackNode && (t.blackNode = sr(t.blackNode)), new Et(t.height, t.width, t.x, n, t)) : new Et(t.width, t.height, t.y, n, t);
};
class br {
  constructor() {
  }
  layout(r, n, o, i, l = !1, h) {
    const d = [], u = [], p = this.buildLayoutNode(r, o, i, d, h);
    switch (d.filter((f) => f.origin.children.length > 0).forEach((f) => {
      const M = f.layout, k = i.toTop || kt(i.rootLayoutType) && Pe(M), b = i.toLeft || !kt(i.rootLayoutType) && Ie(M), x = kt(M), y = this.layout(f.origin, Me(M), o, { toTop: k, toLeft: b, rootLayoutType: i.rootLayoutType }, x, f.parent);
      !i.toTop && k && n !== Q.indented && y.down2up(), !i.toLeft && b && y.right2left();
      const j = y.getBoundingBox();
      f.width = j.width, f.height = j.height, f.blackNode = new ar(j.left, j.right, j.top, j.bottom, j.width, j.height, y.x, y.y, y.width, y.height), u.push(y);
    }), n) {
      case Q.indented:
        Ee(p), pr(p, o);
        break;
      case Q.fishBone:
        break;
      case Q.logic:
      default:
        He(p, l);
        const f = Ue(p, l);
        gr(f), Xe(f, p, l);
        break;
    }
    const m = [];
    return d.filter((f) => f.origin.children.length > 0).forEach((f, M) => {
      if (f.parent) {
        const k = u[M];
        k.parent = f.parent;
        let b, x;
        kt(f.parent.layout) ? (b = k.x, x = 0) : (b = 0, x = k.y), k.translate(f.x - b, f.y - x);
        const j = f.parent.children.indexOf(f), C = f.parent.children[j];
        f.parent.children[j] = Object.assign(C, k);
        const _ = m.find((L) => L.parent === f.parent && !I.isAbstract(f.origin));
        _ ? (_.offsetX < b && (_.offsetX = b), _.offsetX < x && (_.offsetX = x)) : I.isAbstract(f.origin) || m.push({ parent: f.parent, offsetX: b, offsetY: x });
      }
    }), m.forEach((f) => {
      f.parent.children.forEach((M) => M.translate(f.offsetX, f.offsetY));
    }), p;
  }
  buildLayoutNode(r, n, o, i, l) {
    const h = new Xt(r, n, o, l);
    if (!h.origin.isCollapsed) {
      const d = [h];
      let u;
      for (; u = d.pop(); )
        if (!u.origin.isCollapsed) {
          const p = u.origin.children, m = p ? p.length : 0;
          if (u.children = [], p && m)
            for (let f = 0; f < m; f++) {
              const M = new Xt(p[f], n, o, u);
              u.children.push(M), M.depth = u.depth + 1, (u.layout !== M.layout && (Me(u.layout) !== Me(M.layout) || kt(u.layout) !== kt(M.layout)) || I.isAbstract(M.origin)) && !M.origin.isCollapsed ? i.push(M) : d.push(M);
            }
        }
    }
    return h;
  }
}
class vr {
  static layout(r, n, o) {
    const i = new br();
    if (je(o)) {
      const f = r.children.length, M = [], k = [], b = { ...r };
      for (let C = 0; C < f; C++) {
        const _ = r.children[C];
        if (I.isAbstract(_) && _.end < r.rightNodeCount) {
          M.push(_);
          continue;
        }
        if (I.isAbstract(_) && _.start >= r.rightNodeCount) {
          k.push(_);
          continue;
        }
        C < r.rightNodeCount ? M.push(_) : k.push(_);
      }
      b.children = M;
      const x = i.layout(b, Q.logic, n, { toLeft: !1, toTop: !1, rootLayoutType: o }, !0);
      b.children = k;
      const y = i.layout(b, Q.logic, n, { toLeft: !0, toTop: !1, rootLayoutType: o }, !0);
      y.right2left(), x.translate(y.x - x.x, y.y - x.y);
      const j = x.children.filter((C) => I.isAbstract(C.origin));
      return x.children = x.children.filter((C) => !I.isAbstract(C.origin)), y.children.forEach((C) => {
        x.children.push(C), C.parent = x;
      }), x.children = x.children.concat(j), x.x = y.x, x.origin = r, x;
    }
    const l = oe(o), h = l ? Q.indented : Q.logic, d = l ? !0 : kt(o), u = Pe(o), p = Ie(o), m = i.layout(r, h, n, { toTop: u, toLeft: p, rootLayoutType: o }, d);
    return u && m.down2up(), p && m.right2left(), m;
  }
}
const Ge = {
  minNodeWidth: 200,
  maxNodeWidth: 600,
  minNodeHeight: 48,
  nodeGapY: 15,
  // 垂直间距（上下）：15px
  levelGapX: 100,
  // 水平间距（左右）：保持 100
  nodePaddingX: 16,
  nodePaddingY: 12,
  lineHeight: 1.5
};
function xr(t, r, n, o) {
  const l = o && o > 0 ? o : (() => {
    const d = t.length, u = Math.min(
      Math.max(d * 8.5 + r.nodePaddingX * 2 + 32, r.minNodeWidth),
      r.maxNodeWidth
    );
    return Math.round(u);
  })(), h = n && n > 0 ? n : 80;
  return {
    width: l,
    height: Math.round(h)
  };
}
function yr(t) {
  return {
    standard: T.standard,
    // 标准布局：左右分布
    right: T.right,
    // 右侧布局：所有节点在右侧
    left: T.left,
    // 左侧布局：所有节点在左侧
    upward: T.upward,
    // 向上布局：树形向上
    downward: T.downward
    // 向下布局：树形向下
  }[t];
}
function wr(t, r, n = Ge, o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = "right") {
  const h = [], d = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  function p(b) {
    const x = o.get(b.id), y = i.get(b.id), j = xr(b.content, n, x, y);
    d.set(b, j);
    const C = r.has(b.id), _ = {
      children: C ? [] : b.children.map((L) => p(L)),
      isCollapsed: C,
      rightNodeCount: 0,
      _mindMapNode: b
      // Store reference directly
    };
    return u.set(_, b), _;
  }
  const m = p(t), f = {
    getHeight: (b) => {
      const x = u.get(b);
      if (x) {
        const y = d.get(x);
        if (y)
          return y.height;
      }
      return n.minNodeHeight;
    },
    getWidth: (b) => {
      const x = u.get(b);
      if (x) {
        const y = d.get(x);
        if (y)
          return y.width;
      }
      return n.minNodeWidth;
    },
    getHorizontalGap: () => n.levelGapX,
    getVerticalGap: () => n.nodeGapY,
    getVerticalConnectingPosition: () => "middle",
    getExtendHeight: () => 0,
    getIndentedCrossLevelGap: () => 0
  }, M = vr.layout(
    m,
    f,
    yr(l)
    // Use the selected layout type
  );
  function k(b, x) {
    const y = x._mindMapNode;
    if (!y) {
      console.error("[LayoutV2] Failed to find MindMapNode for OriginNode");
      return;
    }
    const j = d.get(y) || {
      width: n.minNodeWidth,
      height: n.minNodeHeight
    };
    h.push({
      node: y,
      x: b.x,
      y: b.y,
      width: j.width,
      height: j.height,
      collapsed: r.has(y.id) && y.children.length > 0
    }), !r.has(y.id) && b.children && b.children.length > 0 && b.children.forEach((C, _) => {
      _ < x.children.length && k(C, x.children[_]);
    });
  }
  return k(M, m), h;
}
const { useState: H, useEffect: rt, useCallback: U, useRef: nt, useMemo: At, memo: Mr } = window.React, Cr = Mr(function({
  pos: r,
  nodeColor: n,
  panelId: o,
  onToggleCollapse: i,
  onNodeClick: l,
  onHeightMeasured: h,
  onWidthMeasured: d
}) {
  const u = r.node.children && r.node.children.length > 0, p = nt(null), m = nt(0), f = nt(0), M = nt(!1);
  return rt(() => {
    const k = p.current;
    if (!k) return;
    M.current = !1, m.current = 0, f.current = 0, (() => {
      const y = k.offsetHeight, j = k.offsetWidth;
      if (y > 0 && j > 0) {
        const C = M.current ? 2 : 0;
        Math.abs(y - m.current) > C && (m.current = y, M.current = !0, h(r.node.id, y)), Math.abs(j - f.current) > C && (f.current = j, d(r.node.id, j));
      }
    })();
    const x = new ResizeObserver((y) => {
      const j = y[0];
      if (!j) return;
      const C = j.contentRect.height, _ = j.contentRect.width;
      C > 0 && _ > 0 && (Math.abs(C - m.current) > 2 && (m.current = C, h(r.node.id, C)), Math.abs(_ - f.current) > 2 && (f.current = _, d(r.node.id, _)));
    });
    return x.observe(k), () => {
      x.disconnect();
    };
  }, [r.node.id, r.collapsed, h, d]), /* @__PURE__ */ w.jsxs(
    "div",
    {
      ref: p,
      className: "mindmap-node-container",
      style: {
        left: Math.round(r.x),
        top: Math.round(r.y),
        // 移除固定高度，让内容自然撑开
        minHeight: Math.round(r.height)
      },
      children: [
        /* @__PURE__ */ w.jsx(orca.components.BlockPreviewPopup, { blockId: r.node.id, children: /* @__PURE__ */ w.jsxs(
          "div",
          {
            className: "mindmap-node-content",
            style: {
              borderColor: n
            },
            onClick: (k) => {
              k.stopPropagation(), l(r.node.id, k);
            },
            children: [
              u && /* @__PURE__ */ w.jsx(
                "button",
                {
                  type: "button",
                  className: "mindmap-collapse-btn",
                  onClick: (k) => {
                    k.stopPropagation(), i(r.node.id);
                  },
                  style: {
                    backgroundColor: n,
                    borderColor: n,
                    color: "#fff"
                  },
                  children: r.collapsed ? "+" : "-"
                }
              ),
              /* @__PURE__ */ w.jsx(
                "div",
                {
                  className: "mindmap-node-content-inner",
                  style: {
                    paddingLeft: u ? 32 : 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12
                  },
                  children: /* @__PURE__ */ w.jsx(
                    orca.components.Block,
                    {
                      panelId: o,
                      blockId: r.node.id,
                      blockLevel: r.node.depth,
                      indentLevel: 0,
                      renderingMode: "simple"
                    }
                  )
                }
              )
            ]
          }
        ) }),
        r.collapsed && u && /* @__PURE__ */ w.jsxs("div", { className: "mindmap-child-count", children: [
          "+",
          r.node.children.length
        ] })
      ]
    },
    `node-${r.node.id}`
  );
}, (t, r) => t.pos.node.id === r.pos.node.id && t.pos.x === r.pos.x && t.pos.y === r.pos.y && t.pos.width === r.pos.width && t.pos.height === r.pos.height && t.pos.collapsed === r.pos.collapsed && t.nodeColor === r.nodeColor && t.panelId === r.panelId);
// 图表模块组件
function ChartModule(t) {
  const { rootBlockId: r, panelId: i, blockId: l, rndId: h, blockLevel: d, indentLevel: u, renderingMode: p } = t, [m, f] = H(!0), [b, x] = H(null), [y, j] = H(null), [ft, Vt] = H(!1), [D, Jt] = H({ width: 0, height: 0 }), [chartType, setChartType] = H("bar"), [chart, setChart] = H(null), chartRef = nt(null), Pt = nt(null), [tagName, setTagName] = H("电影"), [xAxisField, setXAxisField] = H("tags"), [availableFields, setAvailableFields] = H([]), [fieldTypes, setFieldTypes] = H({}), selectRef = nt(null);
  
  // 加载和处理数据
  rt(() => {
    const a = { cancelled: !1 };
    async function c() {
      f(!0), x(null);
      try {
        // 获取指定标签的数据
        const chartData = await getTagChartData(tagName);
        j(chartData);
      } catch (E) {
        if (a.cancelled)
          return;
        console.error("[Chart] Error loading data:", E), x(E.message || "加载失败");
      } finally {
        a.cancelled || f(!1);
      }
    }
    return c(), () => {
      a.cancelled = !0, console.log("[Chart] Cleanup: cancellation token set");
    };
  }, [r, tagName]);
  
  // 获取指定标签的数据并转换为图表数据格式
  async function getTagChartData(tag) {
    try {
      // 使用get-blocks-with-tags API查询带有指定标签的块
      const tagBlocks = await orca.invokeBackend("get-blocks-with-tags", [tag]);
      
      console.log(`找到 ${tagBlocks.length} 个带有"${tag}"标签的块`);
      
      // 解析标签数据
      const tagData = parseTagBlocks(tagBlocks, tag);
      
      // 从原始块数据中提取所有可用字段和类型信息
      const { fields, fieldTypes: extractedFieldTypes } = extractFieldsFromBlocks(tagBlocks, tag);
      setAvailableFields(fields);
      setFieldTypes(extractedFieldTypes);
      
      // 如果当前选择的字段不在可用字段中，切换到第一个可用字段
      if (!fields.includes(xAxisField)) {
        setXAxisField(fields[0] || "tags");
      }
      
      // 转换为ECharts所需格式
      return convertToChartData(tagData, tag, xAxisField, extractedFieldTypes);
    } catch (error) {
      console.error(`获取${tag}数据失败:`, error);
      // 失败时返回默认数据
      return getDefaultChartData();
    }
  }
  
  // 从原始块数据中提取可用字段和类型信息
  function extractFieldsFromBlocks(blocks, tag) {
    const fields = new Set();
    const fieldTypes = {};
    
    blocks.forEach(block => {
      if (block.refs && block.refs.length > 0) {
        block.refs.forEach(ref => {
          if (ref.alias === tag && ref.data && ref.data.length > 0) {
            // 遍历ref.data，提取所有name字段和类型信息
            ref.data.forEach(dataItem => {
              if (dataItem.name) {
                fields.add(dataItem.name);
                
                // 提取字段类型信息
                fieldTypes[dataItem.name] = {
                  type: dataItem.type,
                  subType: dataItem.typeArgs?.subType || null
                };
              }
            });
          }
        });
      }
    });
    
    const result = Array.from(fields);
    console.log(`从块数据中提取到可用字段: ${result.join(", ")}`);
    console.log(`字段类型信息: ${JSON.stringify(fieldTypes)}`);
    return { fields: result, fieldTypes };
  }
  
  // 解析标签块数据
  function parseTagBlocks(blocks, tag) {
    const tagItems = [];
    
    blocks.forEach(block => {
      // 遍历每个块的refs，查找带有指定标签的数据
      if (block.refs && block.refs.length > 0) {
        block.refs.forEach(ref => {
          if (ref.alias === tag && ref.data && ref.data.length > 0) {
            // 提取标签数据
            const tagItem = {
              id: block.id,
              title: block.text ? block.text.replace(new RegExp(`#${tag}\\n`, "g"), "").trim() : `未知${tag}`,
              created: new Date(block.created),
              modified: new Date(block.modified),
              data: {}
            };
            
            // 提取data中的字段
            ref.data.forEach(dataItem => {
              tagItem.data[dataItem.name] = dataItem.value;
            });
            
            tagItems.push(tagItem);
          }
        });
      }
    });
    
    console.log(`解析出 ${tagItems.length} 个${tag}数据`);
    return tagItems;
  }
  
  // 将标签数据转换为图表数据格式
  function convertToChartData(tagItems, tag, xAxisField, fieldTypes = {}) {
    // 根据选择的x轴字段分组统计数据
    const fieldCounts = {};
    
    tagItems.forEach(item => {
      // 从item.data中获取当前字段的值
      const fieldValue = item.data[xAxisField];
      
      if (fieldValue !== undefined && fieldValue !== null) {
        if (Array.isArray(fieldValue)) {
          // 处理数组类型（如tags），每个值都统计一次
          fieldValue.forEach(value => {
            fieldCounts[value] = (fieldCounts[value] || 0) + 1;
          });
        } else if (fieldTypes[xAxisField]?.subType === "date") {
          // 处理日期类型字段，将ISO日期格式化为年份（YYYY）
          try {
            const date = new Date(fieldValue);
            const year = date.getFullYear().toString(); // 格式化为YYYY字符串
            fieldCounts[year] = (fieldCounts[year] || 0) + 1;
          } catch (e) {
            console.error(`日期格式化失败: ${fieldValue}`, e);
            // 格式化失败时，直接使用原始值
            fieldCounts[fieldValue] = (fieldCounts[fieldValue] || 0) + 1;
          }
        } else {
          // 处理其他类型的字段，直接使用值作为键
          fieldCounts[fieldValue] = (fieldCounts[fieldValue] || 0) + 1;
        }
      }
    });
    
    // 如果没有数据，返回默认值
    if (Object.keys(fieldCounts).length === 0) {
      return {
        labels: ['无数据'],
        datasets: [{
          label: `${tag}${xAxisField}统计`,
          data: [0],
          backgroundColor: ['#22c55e80'],
          borderColor: ['#22c55e'],
          borderWidth: 1
        }]
      };
    }
    
    // 转换为ECharts所需格式
    return {
      labels: Object.keys(fieldCounts), // X轴标签：字段值
      datasets: [{
        label: `${tag}${xAxisField}统计`, // 图表标题
        data: Object.values(fieldCounts), // Y轴数据：统计数量
        backgroundColor: ['#22c55e80', '#a855f780', '#eab30880', '#ec489980', '#06b6d480', '#f9731680', '#3b82f680', '#ef444480'],
        borderColor: ['#22c55e', '#a855f7', '#eab308', '#ec4899', '#06b6d4', '#f97316', '#3b82f6', '#ef4444'],
        borderWidth: 1
      }]
    };
  }
  
  // 原始默认数据，作为备用
  function getDefaultChartData() {
    return {
      labels: ['示例1', '示例2', '示例3', '示例4', '示例5'],
      datasets: [{
        label: "默认数据集",
        data: [65, 59, 80, 81, 56],
        backgroundColor: ['#22c55e80', '#a855f780', '#eab30880', '#ec489980', '#06b6d480'],
        borderColor: ['#22c55e', '#a855f7', '#eab308', '#ec4899', '#06b6d4'],
        borderWidth: 1
      }]
    };
  }
  
  // 简化X轴字段选择器，避免React渲染问题
  // 移除getFieldOptions函数，直接在JSX中硬编码选项
  
  // 生成随机颜色
  function getRandomColor(index) {
    const colors = [
      '#22c55e', // 绿色
      '#a855f7', // 紫色
      '#eab308', // 黄色
      '#ec4899', // 粉色
      '#06b6d4', // 青色
      '#f97316', // 橙色
      '#3b82f6', // 蓝色
      '#ef4444'  // 红色
    ];
    return colors[index % colors.length];
  }
  
  // 渲染图表
  rt(() => {
    if (!y || !chartRef.current) return;
    
    async function renderChart() {
      try {
        // 加载 ECharts
        const echarts = await loadECharts();
        
        // 销毁现有图表
        if (chart) {
          chart.dispose();
        }
        
        // 创建新图表实例，优化渲染质量
        const chartInstance = echarts.init(chartRef.current, null, {
          renderer: 'canvas', // 可以根据需要切换为 'svg'
          devicePixelRatio: window.devicePixelRatio || 1, // 适配高DPI屏幕
          width: chartRef.current.offsetWidth, // 确保实际宽度正确
          height: chartRef.current.offsetHeight // 确保实际高度正确
        });
        
        // 转换数据格式为 ECharts 所需格式
        const echartsOption = convertToEChartsOption(y, chartType);
        
        // 优化渲染配置
        const optimizedOption = {
          ...echartsOption,
          // 添加渲染优化配置
          animation: false, // 关闭动画可以提高渲染性能和清晰度
          animationDuration: 0,
          animationEasing: 'linear',
          animationDelay: 0,
          animationDurationUpdate: 0,
          animationEasingUpdate: 'linear',
          animationDelayUpdate: 0,
          // 优化文本渲染
          textStyle: {
            ...echartsOption.textStyle,
            fontFamily: 'Arial, sans-serif',
            fontSize: 12
          },
          // 优化坐标轴
          xAxis: echartsOption.xAxis ? {
            ...echartsOption.xAxis,
            axisLabel: {
              ...echartsOption.xAxis.axisLabel,
              fontSize: 11
            },
            axisLine: {
              lineStyle: {
                ...(echartsOption.xAxis.axisLine?.lineStyle || {}),
                width: 1
              }
            }
          } : undefined,
          yAxis: echartsOption.yAxis ? {
            ...echartsOption.yAxis,
            axisLabel: {
              ...echartsOption.yAxis.axisLabel,
              fontSize: 11
            },
            axisLine: {
              lineStyle: {
                ...(echartsOption.yAxis.axisLine?.lineStyle || {}),
                width: 1
              }
            }
          } : undefined,
          // 优化系列配置
          series: echartsOption.series.map(series => ({
            ...series,
            lineStyle: {
              ...series.lineStyle,
              width: 2 // 增加线宽，提高清晰度
            },
            itemStyle: {
              ...series.itemStyle,
              borderWidth: 0 // 移除不必要的边框
            },
            emphasis: {
              ...series.emphasis,
              itemStyle: {
                ...series.emphasis?.itemStyle,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, 0.2)'
              }
            }
          }))
        };
        
        // 设置图表配置
        chartInstance.setOption(optimizedOption);
        
        setChart(chartInstance);
        
        // 监听窗口大小变化，自动调整图表大小
        const resizeHandler = () => chartInstance.resize();
        window.addEventListener('resize', resizeHandler);
        
        // 清理函数中移除事件监听
        return () => {
          window.removeEventListener('resize', resizeHandler);
        };
      } catch (error) {
        console.error("[Chart] Error rendering chart:", error);
        x("图表渲染失败");
      }
    }
    
    renderChart();
    
    // 清理函数
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [y, chartType]);
  
  // 将 Chart.js 数据格式转换为 ECharts 格式
  function convertToEChartsOption(chartData, chartType) {
    // 基础配置
    const baseOption = {
      title: {
        text: chartData.datasets[0].label,
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        bottom: 10
      },
      responsive: true
    };
    
    // 根据图表类型配置具体选项
    let chartOption;
    
    // 通用数据标签配置
    const labelConfig = {
      show: true,
      position: 'top',
      fontSize: 12,
      color: '#333',
      formatter: '{c}' // 显示数值
    };
    
    switch (chartType) {
      case 'bar':
        chartOption = {
          ...baseOption,
          xAxis: {
            type: 'category',
            data: chartData.labels
          },
          yAxis: {
            type: 'value',
            min: 0
          },
          series: [{
            name: chartData.datasets[0].label,
            type: 'bar',
            data: chartData.datasets[0].data,
            itemStyle: {
              color: function(params) {
                return chartData.datasets[0].backgroundColor[params.dataIndex].replace('80', 'FF');
              }
            },
            label: labelConfig // 添加数据标签
          }]
        };
        break;
        
      case 'line':
        chartOption = {
          ...baseOption,
          xAxis: {
            type: 'category',
            data: chartData.labels
          },
          yAxis: {
            type: 'value',
            min: 0
          },
          series: [{
            name: chartData.datasets[0].label,
            type: 'line',
            data: chartData.datasets[0].data,
            itemStyle: {
              color: chartData.datasets[0].borderColor[0]
            },
            areaStyle: {
              color: chartData.datasets[0].backgroundColor[0]
            },
            label: labelConfig, // 添加数据标签
            emphasis: {
              label: {
                show: true
              }
            }
          }]
        };
        break;
        
      case 'pie':
        chartOption = {
          ...baseOption,
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10
          },
          series: [{
            name: chartData.datasets[0].label,
            type: 'pie',
            radius: '50%',
            data: chartData.labels.map((label, index) => ({
              value: chartData.datasets[0].data[index],
              name: label
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            itemStyle: {
              color: function(params) {
                return chartData.datasets[0].backgroundColor[params.dataIndex].replace('80', 'FF');
              }
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}: {c} ({d}%)' // 显示名称、数值和百分比
            }
          }]
        };
        break;
        
      case 'doughnut':
        chartOption = {
          ...baseOption,
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [{
            name: chartData.datasets[0].label,
            type: 'pie',
            radius: ['40%', '70%'],
            data: chartData.labels.map((label, index) => ({
              value: chartData.datasets[0].data[index],
              name: label
            })),
            itemStyle: {
              color: function(params) {
                return chartData.datasets[0].backgroundColor[params.dataIndex].replace('80', 'FF');
              }
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}: {c} ({d}%)' // 显示名称、数值和百分比
            }
          }]
        };
        break;
        
      case 'radar':
        chartOption = {
          ...baseOption,
          radar: {
            indicator: chartData.labels.map(label => ({
              name: label,
              max: Math.max(...chartData.datasets[0].data) * 1.2
            }))
          },
          series: [{
            name: chartData.datasets[0].label,
            type: 'radar',
            data: [{
              value: chartData.datasets[0].data,
              name: chartData.datasets[0].label
            }],
            itemStyle: {
              color: chartData.datasets[0].borderColor[0]
            },
            areaStyle: {
              color: chartData.datasets[0].backgroundColor[0]
            },
            label: {
              show: true,
              formatter: '{c}' // 显示数值
            }
          }]
        };
        break;
        
      default:
        chartOption = baseOption;
    }
    
    return chartOption;
  }
  
  // 监听容器大小变化
  rt(() => {
    const a = Pt.current;
    if (!a) return;
    const c = new ResizeObserver((v) => {
      const E = v[0];
      if (!E) return;
      const { width: F, height: A } = E.contentRect;
      Jt({ width: F, height: A });
    });
    return c.observe(a), () => c.disconnect();
  }, []);
  
  // 使用原生DOM操作动态添加X轴字段选项
  rt(() => {
    // 等待组件渲染完成后执行
    setTimeout(() => {
      const selectElement = selectRef.current;
      if (!selectElement) return;
      
      // 清空现有选项
      selectElement.innerHTML = '';
      
      // 获取可用字段，确保是数组
      const fields = availableFields || [];
      
      // 如果没有字段，添加默认选项
      if (fields.length === 0) {
        const defaultOption = document.createElement('option');
        defaultOption.value = 'tags';
        defaultOption.textContent = 'tags';
        selectElement.appendChild(defaultOption);
      } else {
        // 添加所有提取的字段
        fields.forEach(field => {
          const option = document.createElement('option');
          option.value = field;
          option.textContent = field;
          selectElement.appendChild(option);
        });
      }
      
      // 设置当前选中值
      if (fields.includes(xAxisField)) {
        selectElement.value = xAxisField;
      } else if (fields.length > 0) {
        // 如果当前选中值不在可用字段中，切换到第一个可用字段
        selectElement.value = fields[0];
        setXAxisField(fields[0]);
      } else {
        // 如果没有字段，使用默认值
        selectElement.value = 'tags';
        setXAxisField('tags');
      }
    }, 0);
  }, [availableFields, xAxisField]);
  
  // 刷新数据
  const te = U(() => {
    f(true);
    setTimeout(() => {
      const a = { cancelled: !1 };
      async function c() {
        try {
          // 获取指定标签的数据进行刷新
          const chartData = await getTagChartData(tagName);
          j(chartData);
        } catch (E) {
          if (a.cancelled)
            return;
          console.error("[Chart] Error refreshing data:", E), x(E.message || "加载失败");
        } finally {
          a.cancelled || f(!1);
        }
      }
      c();
    }, 100);
  }, [r, tagName, xAxisField]);
  
  // 切换全屏
  const _t = U(() => {
    Vt((a) => !a);
  }, []);
  
  // 加载状态
  if (m)
    return /* @__PURE__ */ w.jsxs("div", { className: "chart-container loading", children: [
      /* @__PURE__ */ w.jsx("div", { className: "chart-loading-spinner" }),
      /* @__PURE__ */ w.jsx("div", { className: "chart-loading-text", children: "加载图表..." })
    ] });
  
  // 错误状态
  if (b)
    return /* @__PURE__ */ w.jsxs("div", { className: "chart-container error", children: [
      /* @__PURE__ */ w.jsx("div", { className: "chart-error-message", children: b }),
      /* @__PURE__ */ w.jsx(
        "button",
        {
          onClick: te,
          className: "chart-error-button",
          children: "重试"
        }
      )
    ] });
  
  // 无数据状态
  if (!y)
    return /* @__PURE__ */ w.jsx("div", { className: "chart-container empty", children: "无数据" });
  
  // 渲染图表界面
  return /* @__PURE__ */ w.jsxs("div", { className: `chart-container ${ft ? "fullscreen" : ""}`, children: [
    /* @__PURE__ */ w.jsxs("div", { className: "chart-toolbar", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "chart-toolbar-left", children: [
        /* @__PURE__ */ w.jsx("i", { className: "ti ti-chart-bar chart-toolbar-icon" }),
        /* @__PURE__ */ w.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px"
          },
          children: [
            /* @__PURE__ */ w.jsx("input", {
              type: "text",
              value: tagName,
              onChange: (a) => setTagName(a.target.value),
              placeholder: "输入标签名称",
              style: {
                padding: "4px 8px",
                border: "1px solid var(--orca-color-border)",
                borderRadius: "4px",
                backgroundColor: "var(--orca-color-bg-1)",
                color: "var(--orca-color-text-1)",
                fontSize: "12px",
                outline: "none",
                width: "120px"
              },
              onKeyPress: (a) => {
                if (a.key === "Enter") {
                  te(); // 按回车触发刷新
                }
              }
            }),
            /* @__PURE__ */ w.jsx(
              "button",
              {
                onClick: te,
                title: "搜索",
                className: "chart-toolbar-button",
                children: /* @__PURE__ */ w.jsx("i", { className: "ti ti-search" })
              }
            )
          ]
        }),
        /* @__PURE__ */ w.jsxs("span", { className: "chart-toolbar-data-count", children: [
          y.labels.length,
          " 个数据项"
        ] })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "chart-toolbar-right", children: [
        /* @__PURE__ */ w.jsxs(
          "select",
          {
            ref: selectRef,
            value: xAxisField,
            onChange: (a) => {
              setXAxisField(a.target.value);
              te(); // 切换字段后自动刷新数据
            },
            title: "选择X轴字段",
            className: "chart-type-selector",
            children: []
          }
        ),
        /* @__PURE__ */ w.jsxs(
          "select",
          {
            value: chartType,
            onChange: (a) => setChartType(a.target.value),
            title: "切换图表类型",
            className: "chart-type-selector",
            children: [
              /* @__PURE__ */ w.jsx("option", { value: "bar", children: "柱状图" }),
              /* @__PURE__ */ w.jsx("option", { value: "line", children: "折线图" }),
              /* @__PURE__ */ w.jsx("option", { value: "pie", children: "饼图" }),
              /* @__PURE__ */ w.jsx("option", { value: "doughnut", children: "环形图" }),
              /* @__PURE__ */ w.jsx("option", { value: "radar", children: "雷达图" })
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            onClick: te,
            title: "刷新数据",
            className: "chart-toolbar-button",
            children: /* @__PURE__ */ w.jsx("i", { className: "ti ti-reload" })
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            onClick: _t,
            title: ft ? "退出全屏" : "全屏 (F)",
            className: "chart-toolbar-button",
            children: /* @__PURE__ */ w.jsx("i", { className: ft ? "ti ti-arrows-minimize" : "ti ti-arrows-maximize" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ w.jsx(
      "div",
      {
        ref: Pt,
        className: "chart-viewport",
        children: /* @__PURE__ */ w.jsx(
          "div",
          {
            className: "chart-canvas-container",
            style: {
              width: "100%",
              height: "calc(100% - 60px)"
            },
            children: /* @__PURE__ */ w.jsx("canvas", { ref: chartRef, className: "chart-canvas" })
          }
        )
      }
    ),
    /* @__PURE__ */ w.jsxs("div", { className: "chart-status-bar", children: [
      /* @__PURE__ */ w.jsx("span", { children: "💡 提示: 点击刷新按钮更新数据，选择不同图表类型查看效果" }),
      /* @__PURE__ */ w.jsxs("span", { children: [
        "图表类型: ",
        getChartTypeName(chartType)
      ] })
    ] })
  ] });
  
  // 获取图表类型的中文名称
  function getChartTypeName(type) {
    const typeNames = {
      bar: "柱状图",
      line: "折线图",
      pie: "饼图",
      doughnut: "环形图",
      radar: "雷达图"
    };
    return typeNames[type] || type;
  }
  
  return /* @__PURE__ */ w.jsx(
    orca.components.BlockShell,
    {
      panelId: i,
      blockId: l,
      rndId: h,
      blockLevel: d,
      indentLevel: u,
      renderingMode: p,
      contentAttrs: { contentEditable: !1 },
      editable: !1,
      selfFoldable: !0,
      contentJsx: ye,
      childrenJsx: null
    }
  );
}

// 主面板组件 - 模块化大窗口
function mainPanel(t) {
  const { rootBlockId: r, panelId: i, blockId: l, rndId: h, blockLevel: d, indentLevel: u, renderingMode: p } = t;
  
  // 直接渲染ChartModule，保持原来的窗口逻辑
  return /* @__PURE__ */ w.jsx(ChartModule, {
    rootBlockId: r,
    panelId: i,
    blockId: l,
    rndId: h,
    blockLevel: d,
    indentLevel: u,
    renderingMode: p
  });
}
async function Te(t, r) {
  if (!t || !t.anchor)
    return console.warn("[Chart] No valid cursor position"), null;
  const n = orca.state.blocks[t.anchor.blockId];
  if (!n)
    return console.warn("[Chart] Current block not found"), null;
  const o = {
    type: "chart-plugin.chart",
    rootBlockId: n.id,
    ...r
    // Spread optional chart configuration
  };
  try {
    return await orca.commands.invokeEditorCommand(
      "core.editor.insertBlock",
      null,
      // panelId (null = current panel)
      n,
      // reference block
      "after",
      // position (insert after current block)
      null,
      // content (no text content for chart blocks)
      o
      // repr data (custom configuration)
    );
  } catch (i) {
    return console.error("[Chart] Error inserting chart block:", i), orca.notify("error", "插入图表失败"), null;
  }
}
const Er = '.chart-container{width:100%;height:80vh;min-height:360px;max-height:none;position:relative;background-color:var(--orca-color-bg-1);border:1px solid var(--orca-color-border);border-radius:4px;display:flex;flex-direction:column}.chart-container.fullscreen{height:100vh;max-height:none;min-height:100vh;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;background-color:transparent;border:none;border-radius:0;padding-top:40px}.chart-container.loading,.chart-container.error,.chart-container.empty{display:flex;align-items:center;justify-content:center}.chart-toolbar{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background-color:var(--orca-color-bg-2);border-bottom:1px solid var(--orca-color-border);border-top-left-radius:4px;border-top-right-radius:4px;flex-shrink:0}.chart-container.fullscreen .chart-toolbar{border-top-left-radius:0;border-top-right-radius:0;padding:12px 20px}.chart-toolbar-left{display:flex;align-items:center;gap:8px}.chart-toolbar-icon{font-size:18px;color:var(--orca-color-primary-5)}.chart-toolbar-title{font-weight:600;color:var(--orca-color-text-1)}.chart-toolbar-data-count{font-size:12px;color:var(--orca-color-text-2);margin-left:8px}.chart-toolbar-right{display:flex;align-items:center;gap:4px}.chart-type-selector{padding:4px 8px;background-color:var(--orca-color-bg-1);border:1px solid var(--orca-color-border);border-radius:4px;color:var(--orca-color-text-1);cursor:pointer;font-size:12px;transition:background-color .2s ease;outline:none;margin-right:4px}.chart-type-selector:hover{background-color:var(--orca-color-bg-2)}.chart-type-selector:focus{border-color:var(--orca-color-primary-5)}.chart-toolbar-button{padding:4px 8px;background-color:transparent;border:1px solid var(--orca-color-border);border-radius:4px;color:var(--orca-color-text-1);cursor:pointer;font-size:12px;display:flex;align-items:center;gap:4px;transition:background-color .2s ease;white-space:nowrap}.chart-toolbar-button:hover{background-color:var(--orca-color-bg-1)}.chart-toolbar-button:active{background-color:var(--orca-color-bg-2)}.chart-toolbar-button:has(>i:only-child){padding:6px;min-width:32px;justify-content:center}.chart-toolbar-button i{font-size:16px}.chart-viewport{flex:1;overflow:hidden;position:relative;background-color:var(--orca-color-bg-2);outline:none}.chart-container.fullscreen .chart-viewport{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background-color:#33333385}@media (prefers-color-scheme: light){.chart-container.fullscreen .chart-viewport{background-color:#f2f2f2bf}}@media (prefers-color-scheme: dark){.chart-container.fullscreen .chart-viewport{background-color:#33333385}}.chart-canvas-container{width:100%;height:100%;position:relative}.chart-canvas{width:100%;height:100%;display:block}.chart-status-bar{display:flex;align-items:center;justify-content:space-between;padding:8px 16px;background-color:var(--orca-color-bg-2);border-top:1px solid var(--orca-color-border);border-bottom-left-radius:4px;border-bottom-right-radius:4px;font-size:12px;color:var(--orca-color-text-2);flex-shrink:0}.chart-container.fullscreen .chart-status-bar{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:8px 20px}.chart-loading-spinner{display:inline-block;width:24px;height:24px;border:3px solid var(--orca-color-border);border-top-color:var(--orca-color-primary-5);border-radius:50%;animation:chart-spin .8s linear infinite;margin-bottom:12px}@keyframes chart-spin{to{transform:rotate(360deg)}}.chart-loading-text{color:var(--orca-color-text-2);font-size:14px}.chart-error-message{color:var(--orca-color-dangerous-5);margin-bottom:16px;font-size:14px}.chart-error-button{padding:8px 16px;background-color:var(--orca-color-primary-5);color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:14px;transition:opacity .2s ease}.chart-error-button:hover{opacity:.9}.chart-error-button:active{opacity:.8}.chart-empty{padding:40px;text-align:center;color:var(--orca-color-text-2);font-size:14px}.chart-hidden{display:none}.chart-visible{display:block}';
let P;
const q = "chart-plugin.chart", Yt = "chart-plugin.insertChart", re = "chart-plugin.insertChart", ne = "chart-plugin.insertChart", Re = "chart-plugin-styles";
function Rr() {
  if (!document.getElementById(Re)) {
    const t = document.createElement("style");
    t.id = Re, t.textContent = Er, document.head.appendChild(t), console.log(`[${P}] Styles injected`);
  }
}
async function jr(t) {
  P = t, Je(orca.state.locale, { "zh-CN": Qe }), console.log(qe("plugin.loaded")), console.log(`${P} loaded.`), Rr(), orca.renderers.registerBlock(
    q,
    !1,
    // Not editable (custom interactive component)
    mainPanel,
    [],
    // No asset fields
    !1
    // Don't use children
  ), console.log(`[${P}] Block renderer registered: ${q}`), orca.converters.registerBlock("plain", q, (r, n) => {
    const o = n == null ? void 0 : n.rootBlockId;
    if (!o) return "Chart";
    const i = orca.state.blocks[o];
    if (!i) return "Chart";
    const h = [`Chart: ${i.text || "Untitled"}`];
    if (i.children && i.children.length > 0) {
      const d = (u, p = "  ") => {
        const m = orca.state.blocks[u];
        m && (h.push(`${p}- ${m.text || ""}`), m.children && m.children.length > 0 && m.children.forEach((f) => {
          d(f, p + "  ");
        }));
      };
      i.children.forEach((u) => d(u));
    }
    return h.join(`
`);
  }), console.log(`[${P}] Plain converter registered: ${q}`), orca.converters.registerBlock("html", q, (r, n) => {
    const o = n == null ? void 0 : n.rootBlockId;
    if (!o) return '<div class="chart-block">Chart</div>';
    const i = orca.state.blocks[o];
    if (!i) return '<div class="chart-block">Chart</div>';
    const l = i.text || "Untitled";
    let h = '<div class="chart-block">';
    if (h += `<div class="chart-root"><strong>� Chart:</strong> ${l}</div>`, i.children && i.children.length > 0) {
      const d = (u) => {
        const p = orca.state.blocks[u];
        if (!p) return "";
        let m = `<li>${p.text || ""}</li>`;
        return p.children && p.children.length > 0 && (m = `<li>${p.text || ""}<ul>`, p.children.forEach((f) => {
          m += d(f);
        }), m += "</ul></li>"), m;
      };
      h += '<ul class="chart-tree">', i.children.forEach((u) => {
        h += d(u);
      }), h += "</ul>";
    }
    return h += "</div>", h;
  }), console.log(`[${P}] HTML converter registered: ${q}`), orca.converters.registerBlock("markdown", q, (r, n) => {
    const o = n == null ? void 0 : n.rootBlockId;
    if (!o) return "**Chart**";
    const i = orca.state.blocks[o];
    if (!i) return "**Chart**";
    const h = [`## � Chart: ${i.text || "Untitled"}`, ""];
    if (i.children && i.children.length > 0) {
      const d = (u, p = 0) => {
        const m = orca.state.blocks[u];
        if (!m) return;
        const f = "  ".repeat(p);
        h.push(`${f}- ${m.text || ""}`), m.children && m.children.length > 0 && m.children.forEach((M) => {
          d(M, p + 1);
        });
      };
      i.children.forEach((u) => d(u));
    }
    return h.join(`
`);
  }), console.log(`[${P}] Markdown converter registered: ${q}`), orca.commands.registerEditorCommand(
    Yt,
    async ([, , r]) => ({ ret: await Te(r), undoArgs: null }),
    () => {
    },
    {
      label: "插入图表",
      hasArgs: !1,
      noFocusNeeded: !1
    }
  ), console.log(`[${P}] Editor command registered: ${Yt}`), orca.slashCommands.registerSlashCommand(re, {
    icon: "ti ti-chart-bar",
    group: "Insert",
    title: "插入图表",
    command: Yt
  }), console.log(`[${P}] Slash command registered: ${re}`), orca.blockMenuCommands.registerBlockMenuCommand(ne, {
    worksOnMultipleBlocks: !1,
    render: (r, n, o) => window.React.createElement(orca.components.MenuText, {
      preIcon: "ti ti-chart-bar",
      title: "生成图表",
      onClick: async () => {
        o(), await Te({
          anchor: { blockId: r }
        });
      }
    })
  }), console.log(`[${P}] Block menu command registered: ${ne}`);
}
async function Nr() {
  console.log(`${P} unloading...`);
  try {
    orca.blockMenuCommands.unregisterBlockMenuCommand(ne), console.log(`[${P}] Block menu command unregistered: ${ne}`);
  } catch (t) {
    console.error(`[${P}] Error unregistering block menu command:`, t);
  }
  try {
    orca.slashCommands.unregisterSlashCommand(re), console.log(`[${P}] Slash command unregistered: ${re}`);
  } catch (t) {
    console.error(`[${P}] Error unregistering slash command:`, t);
  }
  try {
    orca.commands.unregisterEditorCommand(Yt), console.log(`[${P}] Editor command unregistered: ${Yt}`);
  } catch (t) {
    console.error(`[${P}] Error unregistering editor command:`, t);
  }
  try {
    orca.renderers.unregisterBlock(q), console.log(`[${P}] Block renderer unregistered: ${q}`);
  } catch (t) {
    console.error(`[${P}] Error unregistering block renderer:`, t);
  }
  try {
    orca.converters.unregisterBlock("plain", q), orca.converters.unregisterBlock("html", q), orca.converters.unregisterBlock("markdown", q), console.log(`[${P}] All converters unregistered: ${q}`);
  } catch (t) {
    console.error(`[${P}] Error unregistering converters:`, t);
  }
  try {
    const t = document.getElementById(Re);
    t && (t.remove(), console.log(`[${P}] Styles removed`));
  } catch (t) {
    console.error(`[${P}] Error removing styles:`, t);
  }
  console.log(`${P} unloaded.`);
}
export {
  jr as load,
  Nr as unload
};
