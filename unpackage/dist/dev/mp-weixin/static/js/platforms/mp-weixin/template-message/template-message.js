global.webpackJsonp([4],{171:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),s("form",{staticClass:"page-body",attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.submitForm}},[s("view",{staticClass:"page-section-title"},[t._v("点击提交，发送示例模板消息")]),t._v(" "),s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("购买地点")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:t.formData.address,name:"address"}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("购买时间")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:t.formData.time,name:"time"}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("物品名称")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:t.formData.name,name:"name"}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("交易单号")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:t.formData.serial,name:"serial"}})])])]),t._v(" "),s("view",{staticClass:"btn-area"},[s("button",{attrs:{size:"40",formType:"submit",loading:t.loading}},[t._v("点我提交")])],1)])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},265:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(s(1)),i=n(s(90));function n(t){return t&&t.__esModule?t:{default:t}}s(0).default;new a.default(i.default).$mount(),e.default={config:{navigationBarTitleText:"模板消息"}}},353:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(s(4)),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},n=s(6),l=r(s(3));function r(t){return t&&t.__esModule?t:{default:t}}var u=s(0).default;e.default={data:function(){return{title:"templateMessage",formData:{address:"T.I.T 造舰厂",time:"2017.01.09",name:"帝国歼星舰",serial:"123456789"},loading:!1}},methods:i({},(0,n.mapActions)(["getUserOpenId"]),{submitForm:function(){var t,e=(t=a.default.mark(function t(e){var s,i,n,l=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.target.formId,i=e.target.value,console.log("form_id is:",s),this.loading=!0,t.prev=4,t.next=7,this.getUserOpenId();case 7:n=t.sent,console.log("openid:::::"+n),u.request({url:"https://www.example.com/templateMessage",method:"POST",data:{form_id:s,openid:n,formData:i},success:function(t){console.log("submit form success",t),u.showToast({title:"发送成功",icon:"success"}),l.loading=!1}}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),this.loading=!1,console.log("submit form fail, errMsg is:",t.t0);case 16:case"end":return t.stop()}},t,this,[[4,12]])}),function(){var e=t.apply(this,arguments);return new Promise(function(t,s){return function a(i,n){try{var l=e[i](n),r=l.value}catch(t){return void s(t)}if(!l.done)return Promise.resolve(r).then(function(t){a("next",t)},function(t){a("throw",t)});t(r)}("next")})});return function(t){return e.apply(this,arguments)}}()}),components:{pageHead:l.default}}},431:function(t,e){},90:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(353),i=s.n(a),n=s(171),l=!1;var r=function(t){l||s(431)},u=s(2)(i.a,n.a,r,null,null);u.options.__file="..\\..\\..\\WWW\\newsfile\\myApp\\platforms\\mp-weixin\\template-message\\template-message.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] template-message.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports}},[265]);
//# sourceMappingURL=../../../../../.sourcemap/platforms/mp-weixin/template-message/template-message.js.map