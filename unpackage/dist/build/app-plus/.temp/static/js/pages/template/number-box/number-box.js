global.webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "uni-numbox"
  }, [_c('view', {
    staticClass: "uni-numbox-minus",
    class: {
      'uni-numbox-disabled': _vm.disableSubtract
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.subtract
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "uni-numbox-value",
    attrs: {
      "type": "number",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "blur": _vm.handleBlur,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "uni-numbox-plus",
    class: {
      'uni-numbox-disabled': _vm.disableAdd
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("+")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page"
  }, [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('text', {
    staticClass: "item-title"
  }, [_vm._v("默认")]), _vm._v(" "), _c('number-box', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('text', {
    staticClass: "item-title"
  }, [_vm._v("限定最小值和最大值（0~9）")]), _vm._v(" "), _c('number-box', {
    attrs: {
      "min": 0,
      "max": 9,
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('text', {
    staticClass: "item-title"
  }, [_vm._v("设定步长值（步长10）")]), _vm._v(" "), _c('number-box', {
    attrs: {
      "step": 10,
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('text', {
    staticClass: "item-title"
  }, [_vm._v("在行内")]), _vm._v(" "), _c('view', {
    staticClass: "inline-item"
  }, [_c('text', {
    staticClass: "item-label"
  }, [_vm._v("购买数量：")]), _vm._v(" "), _c('number-box', {
    attrs: {
      "mpcomid": '4'
    }
  })], 1)]), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('text', {
    staticClass: "item-title"
  }, [_vm._v("在表单中")]), _vm._v(" "), _c('view', {
    staticClass: "uni-input-group"
  }, [_c('view', {
    staticClass: "uni-input-row"
  }, [_c('label', [_vm._v("数字框一")]), _vm._v(" "), _c('number-box', {
    attrs: {
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "uni-input-row"
  }, [_c('label', [_vm._v("数字框二")]), _vm._v(" "), _c('number-box', {
    attrs: {
      "mpcomid": '6'
    }
  })], 1)])])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _numberBox = __webpack_require__(84);var _numberBox2 = _interopRequireDefault(_numberBox);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_numberBox2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "数字输入框" } };

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =







{
	name: 'number-box',
	props: {
		value: {
			type: Number,
			default: 0 },

		min: {
			type: Number,
			default: -Infinity },

		max: {
			type: Number,
			default: Infinity },

		step: {
			type: Number,
			default: 1 } },


	computed: {
		disableSubtract: function disableSubtract() {
			return this.value <= this.min;
		},
		disableAdd: function disableAdd() {
			return this.value >= this.max;
		} },

	onUnload: function onUnload() {
		this.value = 0,
		this.step = 1,
		this.max = Infinity,
		this.min = -Infinity;
	},
	methods: {
		subtract: function subtract(evt) {
			this._handleStep('subtract');
		},
		add: function add(evt) {
			this._handleStep('add');
		},
		_handleStep: function _handleStep(type) {
			var value = this.value;
			if (type === 'subtract') {
				value -= this.step;
			} else if (type === 'add') {
				value += this.step;
			}
			if (value < this.min || value > this.max) {
				return;
			}
			this.value = value;
		},
		handleBlur: function handleBlur(evt) {
			var value = evt.detail.value;
			if (!value) {
				this.value = 0;
				return;
			}
			value = +value;
			if (value > this.max) {
				value = this.max;
			} else if (value < this.min) {
				value = this.min;
			}
			this.value = value;
		} } };

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });





































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);
var _numberBox = __webpack_require__(96);var _numberBox2 = _interopRequireDefault(_numberBox);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'number-box' };

	},
	components: {
		pageHead: _pageHead2.default,
		numberBox: _numberBox2.default } };

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_798e7c50_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_number_box_vue__ = __webpack_require__(162);
function injectStyle (ssrContext) {
  __webpack_require__(432)
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
  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_798e7c50_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_number_box_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_0cf8e6fd_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_number_box_vue__ = __webpack_require__(103);
function injectStyle (ssrContext) {
  __webpack_require__(372)
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
  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_HBuilderX_plugins_uniapp_lib_uni_loader_js_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_number_box_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_0cf8e6fd_hasScoped_false_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_number_box_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[265]);