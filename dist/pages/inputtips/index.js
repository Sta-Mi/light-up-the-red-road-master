"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/inputtips/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/inputtips/index!./src/pages/inputtips/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/inputtips/index!./src/pages/inputtips/index.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_amap_wx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/amap-wx */ "./src/libs/amap-wx.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/config */ "./src/libs/config.js");
/* harmony import */ var _assets_arrow_s_line_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrow_s_line_left.png */ "./src/assets/arrow_s_line_left.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);













var lonlat;
var city;
var InputtipsPage = /*#__PURE__*/function (_Component) {
  function InputtipsPage() {
    var _this;
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, InputtipsPage);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, InputtipsPage, [].concat(args));
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "$instance", _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentInstance());
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "state", {
      tips: [],
      isFocus: true
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "bindInput", function (e) {
      var that = _this;
      var keywords = e.target.value;
      var key = _libs_config__WEBPACK_IMPORTED_MODULE_3__.Config.key;
      var myAmapFun = new _libs_amap_wx__WEBPACK_IMPORTED_MODULE_2__.AMapWX({
        key: key
      });
      myAmapFun.getInputtips({
        keywords: keywords,
        location: lonlat,
        city: city,
        success: function success(data) {
          console.log("搜索页面data：", data);
          if (data && data.tips) {
            that.setState({
              tips: data.tips
            });
          }
        }
      });
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "bindSearch", function (e) {
      var keywords = e.currentTarget.dataset.keywords;
      var locationArray = e.currentTarget.dataset.location.split(',');
      var keywordsLongitude = parseFloat(locationArray[0]);
      var keywordsLatitude = parseFloat(locationArray[1]);
      var url = "/pages/poi/index?searchKeywords=".concat(keywords, "&searchLatitude=").concat(keywordsLatitude, "&searchLongitude=").concat(keywordsLongitude);
      console.log("搜索页面URL:", url);
      // Taro.setStorageSync("keywords",keywords);
      // Taro.setStorageSync("latitude",keywordsLatitude);
      // Taro.setStorageSync("longitude",keywordsLongitude);

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: url
        // url: "/pages/poi/index",
      });
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "redirectToPoiPage", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().redirectTo({
        url: '/pages/poi/index'
      });
    });
    return _this;
  }
  (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__["default"])(InputtipsPage, _Component);
  return (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(InputtipsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$$instance$route;
      //因为poi的bindInput()函数传递了路由参数
      var paramsFromPoi = (_this$$instance$route = this.$instance.router) === null || _this$$instance$route === void 0 ? void 0 : _this$$instance$route.params;
      lonlat = paramsFromPoi === null || paramsFromPoi === void 0 ? void 0 : paramsFromPoi.lonlat;
      console.log("搜索页面加载时instance.router.params：", paramsFromPoi);
      console.log("搜索页面加载时，是否获取到了lonlat和cicy：", lonlat);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var tips = this.state.tips;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
          style: {
            width: '27px',
            height: '27px'
          },
          className: "redirect_to_poi_page",
          mode: "scaleToFill",
          src: _assets_arrow_s_line_left_png__WEBPACK_IMPORTED_MODULE_4__,
          onClick: this.redirectToPoiPage
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Input, {
          className: "section-input",
          onInput: this.bindInput.bind(this),
          placeholder: "\u641C\u7D22",
          focus: true
        }), tips.map(function (_ref) {
          var location = _ref.location,
            name = _ref.name;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            "data-keywords": name,
            "data-location": location,
            className: "text_box",
            onClick: _this2.bindSearch.bind(_this2),
            children: name
          }, name);
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
/* harmony default export */ __webpack_exports__["default"] = (InputtipsPage);

/***/ }),

/***/ "./src/pages/inputtips/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/inputtips/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_inputtips_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/inputtips/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/inputtips/index!./src/pages/inputtips/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_inputtips_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/inputtips/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_inputtips_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/arrow_s_line_left.png":
/*!******************************************!*\
  !*** ./src/assets/arrow_s_line_left.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/arrow_s_line_left.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/inputtips/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map