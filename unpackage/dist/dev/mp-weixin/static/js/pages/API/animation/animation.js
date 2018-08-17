global.webpackJsonp([81],{10:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n(272),i=n.n(e),o=n(121),s=!1;var r=function(t){s||n(381)},u=n(2)(i.a,o.a,r,null,null);u.options.__file="..\\..\\..\\WWW\\newsfile\\myApp\\pages\\API\\animation\\animation.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] animation.vue: functional components are not supported with templates, they should use render functions."),a.default=u.exports},121:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("view",{staticClass:"animation-element-wrapper"},[n("view",{staticClass:"animation-element",attrs:{animation:t.animationData}})]),t._v(" "),n("scroll-view",{staticClass:"animation-buttons",attrs:{"scroll-y":"true"}},[n("button",{staticClass:"animation-button",attrs:{eventid:"0"},on:{tap:t.rotate}},[t._v("旋转")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"1"},on:{tap:t.scale}},[t._v("缩放")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"2"},on:{tap:t.translate}},[t._v("移动")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"3"},on:{tap:t.skew}},[t._v("倾斜")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"4"},on:{tap:t.rotateAndScale}},[t._v("旋转并缩放")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"5"},on:{tap:t.rotateThenScale}},[t._v("旋转后缩放")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"6"},on:{tap:t.all}},[t._v("同时展示全部")]),t._v(" "),n("button",{staticClass:"animation-button",attrs:{eventid:"7"},on:{tap:t.allInQueue}},[t._v("顺序展示全部")]),t._v(" "),n("button",{staticClass:"animation-button animation-button-reset",attrs:{eventid:"8"},on:{tap:t.reset}},[t._v("还原")])],1)],1)])],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},185:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(n(1)),i=o(n(10));function o(t){return t&&t.__esModule?t:{default:t}}n(0).default;new e.default(i.default).$mount(),a.default={config:{navigationBarTitleText:"创建动画"}}},272:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,i=n(3),o=(e=i)&&e.__esModule?e:{default:e};var s=n(0).default;a.default={data:function(){return{title:"createAnimation",animationData:""}},onUnload:function(){this.animationData=""},onLoad:function(){this.animation=s.createAnimation()},methods:{rotate:function(){this.animation.rotate(720*Math.random()-360).step(),this.animationData=this.animation.export()},scale:function(){this.animation.scale(2*Math.random()).step(),this.animationData=this.animation.export()},translate:function(){this.animation.translate(100*Math.random()-50,100*Math.random()-50).step(),this.animationData=this.animation.export()},skew:function(){this.animation.skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},rotateAndScale:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).step(),this.animationData=this.animation.export()},rotateThenScale:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step(),this.animationData=this.animation.export()},all:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).translate(100*Math.random()-50,100*Math.random()-50).skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},allInQueue:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step().translate(100*Math.random()-50,100*Math.random()-50).step().skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},reset:function(){this.animation.rotate(0,0).scale(1).translate(0,0).skew(0,0).step({duration:0}),this.animationData=this.animation.export()}},components:{pageHead:o.default}}},381:function(t,a){}},[185]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/animation/animation.js.map