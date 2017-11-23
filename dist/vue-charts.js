(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-charts"] = factory();
	else
		root["vue-charts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        beginzero: {
            type: Boolean,
            default: function _default() {
                return true;
            }
        },
        datalabel: {
            type: String,
            default: function _default() {
                return 'My dataset';
            }
        },
        labels: {
            type: Array,
            default: function _default() {
                return ['first', 'second', 'third', 'fourth'];
            }
        },
        data: {
            type: Array,
            default: function _default() {
                return [40, 60, 45, 70];
            }
        },
        width: {
            type: Number,
            default: function _default() {
                return null;
            }
        },
        height: {
            type: Number,
            default: function _default() {
                return null;
            }
        },
        bordercolor: {
            default: function _default() {
                return "rgba(75,192,192,1)";
            }
        },
        backgroundcolor: {
            default: function _default() {
                return "rgba(75,192,192,0.4)";
            }
        },
        scalesdisplay: {
            type: Boolean,
            default: function _default() {
                return true;
            }
        },
        target: {
            type: String,
            default: function _default() {
                return null;
            }
        },
        datasets: {
            type: Array,
            default: function _default() {
                return null;
            }
        },
        option: {
            type: Object,
            default: function _default() {
                return null;
            }
        },
        bind: {
            type: Boolean,
            default: function _default() {
                return false;
            }
        }
    },
    data: function data() {
        return {
            isDatasetsOverride: false,
            isOptionOverride: false,
            type: null,
            canvas: null,
            context: null,
            chart: null,
            chart_data: {
                labels: this.labels,
                datasets: this.datasets
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        display: this.scalesdisplay,
                        ticks: {
                            beginAtZero: this.beginzero
                        }
                    }]
                }
            }
        };
    },

    watch: {
        data: {
            handler: function handler(val, oldVal) {
                if (!this.isDatasetsOverride && this.bind) {
                    this.chart_data.datasets[0].data = this.data;
                    this.renderChart();
                }
            },
            deep: true
        },
        labels: {
            handler: function handler(val, oldVal) {
                if (this.bind) {
                    this.chart_data.labels = val;
                    this.renderChart();
                }
            },
            deep: true
        },
        datasets: {
            handler: function handler(val, oldVal) {
                var _this = this;

                if (this.isDatasetsOverride && this.bind) {
                    this.cleanChart();
                    this.chart_data.datasets = val;
                    this.sleep(5).then(function () {
                        _this.renderChart();
                    });
                }
            },
            deep: true
        }
    },
    methods: {
        sleep: function sleep(time) {
            return new Promise(function (resolve) {
                return setTimeout(resolve, time);
            });
        },
        setDatasets: function setDatasets() {
            this.chart_data.datasets = this.datasets;
        },
        setOption: function setOption() {
            this.options = this.option;
        },
        initTargetCanvas: function initTargetCanvas() {
            if (this.target == null) {
                this.canvas = this.$refs.canvas;
                this.context = this.$refs.canvas.getContext('2d');
                this.renderChart();
            } else {
                this.canvas = document.getElementById(this.target);
                this.context = document.getElementById(this.target).getContext('2d');
                if (typeof datasets == 'undefined') window.datasets = [];
                if (typeof datasets[this.target] == 'undefined') window.datasets[this.target] = [];
                this.appendChart();
            }
        },
        cleanChart: function cleanChart() {
            if (this.chart != null) this.chart.destroy();
        },
        checkOverride: function checkOverride() {
            if (this.datasets != null) {
                this.setDatasets();
                this.isDatasetsOverride = true;
                // console.log('override the datasets');
            }
            if (this.option != null) {
                this.setOption();
                this.isOptionOverride = true;
                // console.log('override the datasets');
            }
        },
        renderChart: function renderChart() {
            // console.log('renderChart');
            this.cleanChart();
            this.chart = new Chart(this.context, {
                type: this.type,
                data: this.chart_data,
                options: this.options
            });
        },
        appendChart: function appendChart() {
            // console.log('appendChart');
            window.datasets[this.target].push(this.chart_data.datasets[0]);
            this.chart_data.datasets = window.datasets[this.target];
            if (document.getElementById(this.target).getAttribute("count") == this.chart_data.datasets.length) {
                this.renderChart();
            }
        },
        checkSize: function checkSize() {
            if ((this.width == null || this.height == null) && !this.isOptionOverride) {
                this.options.responsive = true;
                this.options.maintainAspectRatio = true;
            }
        }
    },
    mounted: function mounted() {
        this.checkOverride();
        this.checkSize();
        this.initTargetCanvas();
    },
    beforeDestroy: function beforeDestroy() {
        this.cleanChart();
        // console.log('Line Chart Before Destroy');
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    data: function data() {
        return {
            type: 'bar',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    type: 'bar',
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    borderWidth: 1,
                    data: this.data
                }]
            }
        };
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    props: {
        backgroundcolor: {
            default: function _default() {
                return ["#FF6384", "#36A2EB", "#FFCE56", "#00A600"];
            }
        },
        hoverbackgroundcolor: {
            default: function _default() {
                return ["#FF6384", "#36A2EB", "#FFCE56", "#00A600"];
            }
        },
        bordercolor: {
            default: function _default() {
                return "#fff";
            }
        },
        hoverbordercolor: {
            default: function _default() {
                return "";
            }
        }
    },
    data: function data() {
        return {
            type: 'doughnut',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    hoverBackgroundColor: this.hoverbackgroundcolor,
                    hoverBorderColor: this.hoverbackgroundcolor,
                    data: this.data
                }]
            },
            options: {
                scale: {
                    reverse: true,
                    ticks: {
                        beginAtZero: this.beginzero
                    }
                }
            }
        };
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    data: function data() {
        return {
            type: 'horizontalBar',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    type: 'horizontalBar',
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    borderWidth: 1,
                    data: this.data
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: false
                    }],
                    xAxes: [{
                        stacked: true
                    }]
                }
            }
        };
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    props: {
        beginzero: {
            type: Boolean,
            default: false
        },
        fill: {
            type: Boolean,
            default: false
        },
        linetension: {
            type: Number,
            default: function _default() {
                return 0.2;
            }
        },
        pointbordercolor: {
            type: String,
            default: function _default() {
                return "rgba(75,192,192,1)";
            }
        },
        pointbackgroundcolor: {
            type: String,
            default: function _default() {
                return "#fff";
            }
        },
        pointhoverbackgroundcolor: {
            type: String,
            default: function _default() {
                return "rgba(75,192,192,1)";
            }
        },
        pointhoverbordercolor: {
            type: String,
            default: function _default() {
                return "rgba(220,220,220,1)";
            }
        },
        pointborderwidth: {
            type: Number,
            default: function _default() {
                return 1;
            }
        },
        pointhoverborderwidth: {
            type: Number,
            default: function _default() {
                return 2;
            }
        }
    },
    data: function data() {
        return {
            type: 'line',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    type: 'line',
                    label: this.datalabel,
                    fill: this.fill,
                    lineTension: this.linetension,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: this.pointbordercolor,
                    pointBackgroundColor: this.pointbackgroundcolor,
                    pointBorderWidth: this.pointborderwidth,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: this.pointhoverbackgroundcolor,
                    pointHoverBorderColor: this.pointhoverbordercolor,
                    pointHoverBorderWidth: this.pointhoverborderwidth,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.data,
                    spanGaps: false
                }]
            }
        };
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    props: {
        backgroundcolor: {
            default: function _default() {
                return ["#FF6384", "#36A2EB", "#FFCE56", "#00A600"];
            }
        },
        hoverbackgroundcolor: {
            default: function _default() {
                return ["#FF6384", "#36A2EB", "#FFCE56", "#00A600"];
            }
        },
        bordercolor: {
            default: function _default() {
                return "#fff";
            }
        },
        hoverbordercolor: {
            default: function _default() {
                return "";
            }
        }
    },
    data: function data() {
        return {
            type: 'pie',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    hoverBackgroundColor: this.hoverbackgroundcolor,
                    hoverBorderColor: this.hoverbackgroundcolor,
                    data: this.data
                }]
            },
            options: {
                scale: {
                    reverse: true,
                    ticks: {
                        beginAtZero: this.beginzero
                    }
                }
            }
        };
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    props: {
        hoverbackgroundcolor: {
            default: function _default() {
                return "rgba(75,192,192,0.6)";
            }
        },
        hoverbordercolor: {
            default: function _default() {
                return "rgba(179,181,198,1)";
            }
        }
    },
    data: function data() {
        return {
            type: 'polarArea',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    hoverBackgroundColor: this.hoverbackgroundcolor,
                    hoverBorderColor: this.hoverbackgroundcolor,
                    data: this.data
                }]
            }
        };
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    mixins: [VueCharts.core.default],
    props: {
        pointbordercolor: {
            default: function _default() {
                return "#fff";
            }
        },
        pointbackgroundcolor: {
            default: function _default() {
                return "rgba(179,181,198,1)";
            }
        }
    },
    data: function data() {
        return {
            type: 'radar',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    pointBackgroundColor: this.pointbackgroundcolor,
                    pointBorderColor: this.pointbordercolor,
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: this.data
                }]
            },
            options: {
                scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: this.beginzero
                    }
                }
            }
        };
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Chart === "undefined") throw "ChartJS is undefined";
// 4 kb here
window.VueCharts = {};

VueCharts.core = __webpack_require__(0);

VueCharts.install = function (Vue) {
    Vue.component('chartjs-line', __webpack_require__(4));
    Vue.component('chartjs-bar', __webpack_require__(1));
    Vue.component('chartjs-horizontal-bar', __webpack_require__(3));
    Vue.component('chartjs-radar', __webpack_require__(7));
    Vue.component('chartjs-polar-area', __webpack_require__(6));
    Vue.component('chartjs-pie', __webpack_require__(5));
    Vue.component('chartjs-doughnut', __webpack_require__(2));
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.target) ? _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-charts.js.map