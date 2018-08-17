global.webpackJsonp([62],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "page-body"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("扫码结果")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-cell"
  }, [_c('view', {
    staticClass: "uni-input"
  }, [_vm._v(_vm._s(_vm.result))])])]), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "tap": _vm.scanCode
    }
  }, [_vm._v("扫一扫")])], 1)])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _scanCode = __webpack_require__(33);var _scanCode2 = _interopRequireDefault(_scanCode);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_scanCode2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "扫码" } };

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
















var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'scanCode',
			result: '' };

	},
	onUnload: function onUnload() {
		this.result = '';
	},
	methods: {
		scanCode: function scanCode() {
			var that = this;
			uni.scanCode({
				success: function success(res) {
					that.result = res.result;
				},
				fail: function fail(res) {} });

		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scan_code_vue__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scan_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scan_code_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_390850a8_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_scan_code_vue__ = __webpack_require__(130);
function injectStyle (ssrContext) {
  __webpack_require__(400)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_scan_code_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_390850a8_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_scan_code_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 400:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[214]);