/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_vue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/vue.js */ "./src/vue.js");

const vm = new _src_vue_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: "#app",
    data: {
        user: {
            name: "daoxin",
            age: "28"
        },
        textStr: "vue 响应式的text指令",
        htmlStr: "vue 响应式的<span style='color:#bb0'>html</span>指令",
        modelStr: "daoxin",
        arr: [1, 2, 3],
        href:"http://www.liuhangbiao.com"

    },
    methods: {
        handleClick: function () {
            this.user.name = "my name is daoxin"
            this.arr.push(Math.floor(Math.random()*10))
        }
    }
})

/***/ }),

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/*! exports provided: arrayMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMethods", function() { return arrayMethods; });
// 获取Array的原型链
const arrayProto = Array.prototype;
// 重新创建一个含有对应原型的对象,在下面称为新Array
const arrayMethods = Object.create(arrayProto);
// 处理7个数组变异方法
['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice'].forEach(ele => {
    //修改新Array的对应的方法
    arrayMethods[ele] = function () {
        // 执行数组的原生方法,完成其需要完成的内容
        arrayProto[ele].call(this, ...arguments)
        // 获取Observer对象
        const ob = this.__ob__
        // 更新视图
        ob.dep.notify()
    }
})


/***/ }),

/***/ "./src/compile.js":
/*!************************!*\
  !*** ./src/compile.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Complie; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

class Complie {
    constructor(el, vm) {
        this.el = this.isNodeElement(el) ? el : document.querySelector(el);
        this.vm = vm;
        // 1、将所有的dom对象放到fragement文档碎片中,防止回流
        const fragments = this.nodeTofragments(this.el)
        // 2、编译模板
        this.complie(fragments)
        // 3、追加子元素到根元素
        this.el.appendChild(fragments)
    }
    complie(fragments) {
        //获取所有节点
        const nodes = fragments.childNodes;
        [...nodes].forEach(ele => {
            if (this.isNodeElement(ele)) {
                //1. 编译元素节点
                this.complieElement(ele)
            } else {
                //编译文本节点
                this.complieText(ele)
            }
            //如果有子节点,循环遍历,编译指令
            if (ele.childNodes && ele.childNodes.length) {
                this.complie(ele)
            }
        })
    }
    complieElement(node) {
        //1.获取所有的属性
        const attrs = node.attributes;
        //2.筛选出是属性的
        [...attrs].forEach(attr => {
            //attr是一个对象,name是属性名,value是属性值
            const {
                name,
                value
            } = attr
            //判断是否含有v-开头
            if (name.startsWith("v-")) {
                //将指令分离
                const [, directive] = name.split("-") //text,html,on:click
                const [dirName, paramName] = directive.split(":") //处理on:click或bind:name的情况 on,click
                //编译模板
                _utils__WEBPACK_IMPORTED_MODULE_0__["complieUtils"][dirName](node, value, this.vm, paramName)
                //删除属性
                node.removeAttribute(name)
            } else if (name.startsWith("@")) {
                // 如果是事件处理 @click='handleClick'
                let [, paramName] = name.split('@');
                _utils__WEBPACK_IMPORTED_MODULE_0__["complieUtils"]['on'](node, value, this.vm, paramName);
                node.removeAttribute('@' + paramName);
            } else if (name.startsWith(":")) {
                // 如果是事件处理 :href='...'
                let [, paramName] = name.split(':');
                _utils__WEBPACK_IMPORTED_MODULE_0__["complieUtils"]['bind'](node, value, this.vm, paramName);
                node.removeAttribute(':' + paramName);
            }
        })

    }
    complieText(node) {
        //1.获取所有的文本内容
        const text = node.textContent
        //匹配{{}}
        if (/\{\{(.+?)\}\}/.test(text)) {
            //编译模板
            _utils__WEBPACK_IMPORTED_MODULE_0__["complieUtils"]['text'](node, text, this.vm)
        }
    }
    nodeTofragments(el) {
        //获取文档中的dom节点,将dom节点加到文档碎片中
        const f = document.createDocumentFragment()
        let firstChild;
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild)
        }
        return f
    }
    isNodeElement(el) {
        //判断是否是元素还是文本
        return el.nodeType === 1;
    }
}

/***/ }),

/***/ "./src/dep.js":
/*!********************!*\
  !*** ./src/dep.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dep; });
// 订阅者收集器
class Dep {
    constructor() {
        //管理的watcher的数组
        this.subs = []
    }
    addSubs(watcher) {
        //添加watcher
        this.subs.push(watcher)
    }
    notify() {
        //通知watcher更新dom
        this.subs.forEach(w => w.update())
    }
}

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/array.js");
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dep */ "./src/dep.js");


class Observer {
  constructor(data) {
    //用于对数组进行处理,存放数组的观察者watcher
    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_1__["default"]() 
    if (Array.isArray(data)) {
      //如果是数组,使用数组的变异方法
      data.__proto__ = _array__WEBPACK_IMPORTED_MODULE_0__["arrayMethods"]
      //把数组数据添加 __ob__ 一个Observer,当使用数组变异方法时,可以更新视图
      data.__ob__ = this
      //给数组的每一项添加数据劫持(setter/getter处理)
      this.observerArray(data)
    } else {
      //非数组数据添加数据劫持(setter/getter处理)
      this.walk(data)
    }
  }
  walk(data) {
    //数据劫持
    if (data && typeof data === "object") {
      for (const key in data) {
        //绑定
        this.defineReactive(data, key, data[key])
      }
    }
  }
  //循环遍历数组,为数组每一项设置setter/getter
  observerArray(items) {
    for (let i = 0; i < items.length; i++) {
      this.observer(items[i])
    }
  }
  observer(data) {
    //如果是数组,择创建一个新的Observer
    if (Array.isArray(data)) {
      //创建新的Obserber,主要目的是为了实现数组变异方法,更新视图
      let ob = new Observer(data)
      //返回Obserber
      return ob
    }else{
      this.walk(data)
    }
  }
  //数据劫持,设置 setter/getteer
defineReactive(data, key, value) {
  let arrayOb = this.observer(value)
  //创建订阅者/收集依赖
  const dep = new _dep__WEBPACK_IMPORTED_MODULE_1__["default"]()
  //setter和getter处理
  Object.defineProperty(data, key, {
    //可枚举的
    enumerable: true,
    //可修改的
    configurable: false,
    get() {
      //当 Dep 有 watcher 时, 添加 watcher
      _dep__WEBPACK_IMPORTED_MODULE_1__["default"].target && dep.addSubs(_dep__WEBPACK_IMPORTED_MODULE_1__["default"].target)
      //如果是数组,则添加上数组的观察者
      _dep__WEBPACK_IMPORTED_MODULE_1__["default"].target && arrayOb && arrayOb.dep.addSubs(_dep__WEBPACK_IMPORTED_MODULE_1__["default"].target) 
      return value
    },
    set: (newVal) => {
      //新旧数据不相等时更改
      if (value !== newVal) {
        //为新设置的数据添加setter/getter
        arrayOb = this.observer(newVal);
        value = newVal
        //通知 dep 数据发送了变化
        dep.notify()
      }
    }
  })
}
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: complieUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complieUtils", function() { return complieUtils; });
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ "./src/watcher.js");

const complieUtils = {
    //通过表达式, vm获取data中的值, person.name
    getValue(expr, vm) {
        return expr.split(".").reduce((data, currentVal) => {
            return data[currentVal]
        }, vm.$data)
    },
    //通过表达式,vm,输入框的值,实现设置值,input中v-model双向数据绑定
    setVal(expr, vm, inputVal) {
        expr.split(".").reduce((data, currentVal) => {
            data[currentVal] = inputVal
        }, vm.$data)
    },
    //获取值
    getContentVal(expr, vm) {
        //解析{{}}的形式
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getValue(args[1], vm)
        })
    },
    //处理text指令
    text(node, expr, vm) {
        let value;
        if (/\{\{.+?\}\}/.test(expr)) {
            //处理 {{}}
            value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                //绑定观察者/更新函数
                new _watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, args[1], () => {
                    //第二个参数,传入回调函数
                    this.updater.updaterText(node, this.getContentVal(expr, vm))
                })
                return this.getValue(args[1], vm)
            })
        } else {
            //v-text
            new _watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, expr, (newVal) => {
                this.updater.updaterText(node, newVal)
            })
            //获取到value值
            value = this.getValue(expr, vm)
        }
        //调用更新函数
        this.updater.updaterText(node, value)
    },
    //处理html指令
    html(node, expr, vm) {
        const value = this.getValue(expr, vm)
        //绑定watcher
        new _watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, expr, (newVal) => {
            this.updater.updaterHtml(node, newVal)
        })
        //更新dom元素的操作
        this.updater.updaterHtml(node, value)
    },
    //处理model指令
    model(node, expr, vm) {
        const value = this.getValue(expr, vm)
        //绑定watcher
        new _watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, expr, (newVal) => {
            this.updater.updaterModel(node, newVal)
        })
        //双向数据绑定
        node.addEventListener("input", (e) => {
            //设值方法
            this.setVal(expr, vm, e.target.value)
        })
        this.updater.updaterModel(node, value)
    },
    //on指令
    on(node, expr, vm, paramName) {
        //获取methods中的方法
        let fn = vm.$options.methods && vm.$options.methods[expr]
        //为dom节点绑定相应的事件
        node.addEventListener(paramName, fn.bind(vm), false)
    },
    //bind绑定
    bind(node, expr, vm, paramName) {
        // v-bind:href='xxx' => href='xxx'
        const value = this.getValue(expr, vm)
        //设置属性
        this.updater.updaterAttr(node, paramName, value)
    },

    //更新dom元素的方法
    updater: {
        //更新文本
        updaterText(node, value) {
            node.textContent = value
        },
        //更新html
        updaterHtml(node, value) {
            node.innerHTML = value
        },
        //更新输入框内容
        updaterModel(node, value) {
            node.value = value
        },
        //更新属性
        updaterAttr(node, key, value) {
            node.setAttribute(key, value);
        }
    }
}

/***/ }),

/***/ "./src/vue.js":
/*!********************!*\
  !*** ./src/vue.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vue; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/observer.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compile */ "./src/compile.js");


class Vue {
    constructor(options) {
        //获取模板
        this.$el = options.el;
        //获取data中的数据
        this.$data = options.data;
        //将对象中的属性存起来,以便后续使用
        this.$options = options
        //1.数据劫持,设置setter/getter
        new _observer__WEBPACK_IMPORTED_MODULE_0__["default"](this.$data)
        //2.编译模板,解析指令
        new _compile__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, this)
        if (this.$el) { //如果有模板
            //代理this
            this.proxyData(this.$data)
        }
    }
    proxyData(data) {
        for (const key in data) {
            //将当前的数据放到全局指向中
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newVal) {
                    data[key] = newVal
                }
            })
        }
    }
}

/***/ }),

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ "./src/dep.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


class Watcher {
    constructor(vm, expr, cb) {
        //当前的vue实例
        this.vm = vm;
        //表达式
        this.expr = expr;
        //回调函数,更新dom
        this.cb = cb
        //获取旧的数据,此时获取旧值的时候,Dep.target会绑定上当前的this
        this.oldVal = this.getOldVal()
    }
    getOldVal() {
        //将当前的watcher绑定起来
        _dep__WEBPACK_IMPORTED_MODULE_0__["default"].target = this
        //获取旧数据
        const oldVal = _utils__WEBPACK_IMPORTED_MODULE_1__["complieUtils"].getValue(this.expr, this.vm)
        //绑定完成后,将绑定的置空,防止多次绑定
        _dep__WEBPACK_IMPORTED_MODULE_0__["default"].target = null
        return oldVal
    }
    update() {
        //更新函数
        const newVal = _utils__WEBPACK_IMPORTED_MODULE_1__["complieUtils"].getValue(this.expr, this.vm)
        if (newVal !== this.oldVal || Array.isArray(newVal)) {
            //条用更新在compile中创建watcher时传入的回调函数
            this.cb(newVal)
        }
    }
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map