!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,e,r){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=19)}([function(t,e,r){"use strict";e["default"]={props:{beginzero:{type:Boolean,"default":function(){return!0}},datalabel:{type:String,"default":function(){return"My dataset"}},labels:{type:Array,"default":function(){return["first","second","third","fourth"]}},data:{type:Array,"default":function(){return[40,60,45,70]}},width:{type:Number,"default":function(){return null}},height:{type:Number,"default":function(){return null}},bordercolor:{"default":function(){return"rgba(75,192,192,1)"}},backgroundcolor:{"default":function(){return"rgba(75,192,192,0.4)"}},scalesdisplay:{type:Boolean,"default":function(){return!0}},target:{type:String,"default":function(){return null}}},data:function(){return{type:null,datasets:null,canvas:null,context:null,chart:null,chart_data:{labels:this.labels,datasets:this.datasets},options:{responsive:!1,maintainAspectRatio:!1,scales:{yAxes:[{display:this.scalesdisplay,ticks:{beginAtZero:this.beginzero}}]}}}},watch:{data:function(t){this.renderChart()},labels:function(t){this.renderChart()}},methods:{setDatasets:function(t){this.datasets=t},initTargetCanvas:function(){null==this.target?(this.canvas=this.$refs.canvas,this.context=this.$refs.canvas.getContext("2d"),this.renderChart()):(this.canvas=document.getElementById(this.target),this.context=document.getElementById(this.target).getContext("2d"),"undefined"==typeof datasets&&(window.datasets=[]),"undefined"==typeof datasets[this.target]&&(window.datasets[this.target]=[]),this.appendChart())},cleanChart:function(){null!=this.chart&&this.chart.destroy()},renderChart:function(){this.cleanChart(),this.chart=new Chart(this.context,{type:this.type,data:this.chart_data,options:this.options})},appendChart:function(){window.datasets[this.target].push(this.chart_data.datasets[0]),this.chart_data.datasets=window.datasets[this.target]},checkSize:function(){null!=this.width&&null!=this.height||(this.options.responsive=!0,this.options.maintainAspectRatio=!0)}},mounted:function(){this.checkSize(),this.initTargetCanvas()},beforeDestroy:function(){this.cleanChart()}}},function(t,e,r){var o,n;o=r(7);var a=r(18);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,r){var o,n;o=r(8);var a=r(14);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,r){var o,n;o=r(9);var a=r(16);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,r){var o,n;o=r(10);var a=r(17);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,r){var o,n;o=r(11);var a=r(13);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,r){var o,n;o=r(12);var a=r(15);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,r){"use strict";e["default"]={mixins:[vue_charts["default"]],data:function(){return{type:"bar",chart_data:{labels:this.labels,datasets:[{label:this.datalabel,backgroundColor:this.backgroundcolor,borderColor:this.bordercolor,borderWidth:1,data:this.data}]}}}}},function(t,e,r){"use strict";e["default"]={mixins:[vue_charts["default"]],props:{backgroundcolor:{"default":function(){return["#FF6384","#36A2EB","#FFCE56","#00A600"]}},hoverbackgroundcolor:{"default":function(){return["#FF6384","#36A2EB","#FFCE56","#00A600"]}},bordercolor:{"default":function(){return"#fff"}},hoverbordercolor:{"default":function(){return""}}},data:function(){return{type:"doughnut",chart_data:{labels:this.labels,datasets:[{label:this.datalabel,backgroundColor:this.backgroundcolor,borderColor:this.bordercolor,hoverBackgroundColor:this.hoverbackgroundcolor,hoverBorderColor:this.hoverbackgroundcolor,data:this.data}]}}}}},function(t,e,r){"use strict";e["default"]={mixins:[vue_charts["default"]],props:{beginzero:{type:Boolean,"default":!1},fill:{type:Boolean,"default":!1},linetension:{type:Number,"default":function(){return.2}},pointbordercolor:{type:String,"default":function(){return"rgba(75,192,192,1)"}},pointbackgroundcolor:{type:String,"default":function(){return"#fff"}}},data:function(){return{type:"line",chart_data:{labels:this.labels,datasets:[{label:this.datalabel,fill:this.fill,lineTension:this.linetension,backgroundColor:this.backgroundcolor,borderColor:this.bordercolor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:this.pointbordercolor,pointBackgroundColor:this.pointbackgroundcolor,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.data,spanGaps:!1}]}}}}},function(t,e,r){"use strict";e["default"]={mixins:[vue_charts["default"]],props:{backgroundcolor:{"default":function(){return["#FF6384","#36A2EB","#FFCE56","#00A600"]}},hoverbackgroundcolor:{"default":function(){return["#FF6384","#36A2EB","#FFCE56","#00A600"]}},bordercolor:{"default":function(){return"#fff"}},hoverbordercolor:{"default":function(){return""}}},data:function(){return{type:"pie",chart_data:{labels:this.labels,datasets:[{label:this.datalabel,backgroundColor:this.backgroundcolor,borderColor:this.bordercolor,hoverBackgroundColor:this.hoverbackgroundcolor,hoverBorderColor:this.hoverbackgroundcolor,data:this.data}]}}}}},function(t,e,r){"use strict";e["default"]={mixins:[vue_charts["default"]],props:{hoverbackgroundcolor:{"default":function(){return"rgba(75,192,192,0.6)"}},hoverbordercolor:{"default":function(){return"rgba(179,181,198,1)"}}},data:function(){return{type:"polarArea",chart_data:{labels:this.labels,datasets:[{label:this.datalabel,backgroundColor:this.backgroundcolor,borderColor:this.bordercolor,hoverBackgroundColor:this.hoverbackgroundcolor,hoverBorderColor:this.hoverbackgroundcolor,data:this.data}]}}}}},function(t,e,r){"use strict";e["default"]={mixins:[vue_charts["default"]],props:{pointbordercolor:{"default":function(){return"#fff"}},pointbackgroundcolor:{"default":function(){return"rgba(179,181,198,1)"}}},data:function(){return{type:"radar",chart_data:{labels:this.labels,datasets:[{label:this.datalabel,backgroundColor:this.backgroundcolor,borderColor:this.bordercolor,pointBackgroundColor:this.pointbackgroundcolor,pointBorderColor:this.pointbordercolor,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:this.data}]},options:{scale:{reverse:!1,ticks:{beginAtZero:this.beginzero}}}}}}},function(module,exports){module.exports={render:function(){with(this)return _h("canvas",{ref:"canvas",attrs:{width:width,height:height}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("canvas",{ref:"canvas",attrs:{width:width,height:height}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("canvas",{ref:"canvas",attrs:{width:width,height:height}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return target?_e():_h("canvas",{ref:"canvas",attrs:{width:width,height:height}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("canvas",{ref:"canvas",attrs:{width:width,height:height}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",[target?_e():_h("canvas",{ref:"canvas",attrs:{width:width,height:height}})])},staticRenderFns:[]}},function(t,e,r){if("undefined"==typeof Chart)throw"ChartJS is undefined";window.vue_charts=r(0),window.chartjs_line=r(3),window.chartjs_bar=r(1),window.chartjs_radar=r(6),window.chartjs_polar_area=r(5),window.chartjs_pie=r(4),window.chartjs_doughnut=r(2)}]);