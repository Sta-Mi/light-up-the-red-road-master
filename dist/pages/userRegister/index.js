"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/userRegister/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/userRegister/index!./src/pages/userRegister/index.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/userRegister/index!./src/pages/userRegister/index.tsx ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserRegisterPage; }
/* harmony export */ });
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functionUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functionUtils */ "./src/utils/functionUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);











/**
 * 登录页面
 */

var UserRegisterPage = /*#__PURE__*/function (_Component) {
  function UserRegisterPage() {
    var _this;
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, UserRegisterPage);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, UserRegisterPage, [].concat(args));
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "state", {
      showAccountAlter: 'none',
      showPassAlter: 'none',
      showCheckPassAlter: 'none',
      userPassword: '',
      userCheckPassword: ''
    });
    // 提交表单
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "formSubmit", function (e) {
      if (_this.state.showAccountAlter != "none" || _this.state.showPassAlter != "none" || _this.state.showCheckPassAlter != "none") {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: "请满足校验条件",
          icon: "error"
        });
        return;
      }
      // console.log("form submit",e);
      var userAccount = e.detail.value.userAccount;
      var userPassword = e.detail.value.userPassword;
      var checkPassword = e.detail.value.checkPassword;
      console.log("调用接口前", userAccount, userPassword, checkPassword);
      //调用后端登录接口
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: "http://127.0.0.1:8101/api/user/register",
        method: "POST",
        data: {
          userAccount: userAccount,
          userPassword: userPassword,
          checkPassword: checkPassword
        }
      }).then(function (res) {
        // console.log("success",userAccount,userPassword,checkPassword);
        //成功后跳转到登录
        if (res.data.data) {
          (0,_utils_functionUtils__WEBPACK_IMPORTED_MODULE_2__.postUserLogin)(userAccount, userPassword);
        } else {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
            title: res.data.message,
            icon: "none"
          });
        }
      }).catch(function () {
        console.log("注册失败！");
      });
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "accountLoseFocus", function (e) {
      _this.setState({
        showAccountAlter: e.currentTarget.cursor < 4 ? 'block' : 'none'
      });
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "passLoseFocus", function (e) {
      _this.setState({
        showPassAlter: e.currentTarget.cursor < 8 ? 'block' : 'none',
        userPassword: e.currentTarget.value
      });
      if (_this.state.userPassword === _this.state.userCheckPassword) {
        _this.setState({
          showCheckPassAlter: 'none'
        });
      }
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "checkPassLoseFocus", function (e) {
      _this.setState({
        showCheckPassAlter: e.currentTarget.cursor < 8 || e.currentTarget.value != _this.state.userPassword ? 'block' : 'none',
        userCheckPassword: e.currentTarget.value
      });
    });
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "naviToLogin", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().redirectTo({
        url: "/pages/index/index"
      });
    });
    return _this;
  }
  (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__["default"])(UserRegisterPage, _Component);
  return (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(UserRegisterPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "userRegisterPage",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "register-title at-article__h1",
          children: "\u521B\u5EFA\u8D26\u6237"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Form, {
          className: "registrationForm",
          onSubmit: this.formSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "input-group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Label, {
              className: "input-column-name",
              for: "userAccount",
              children: "*\u7528\u6237\u540D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
              className: "input-column",
              type: "text",
              name: "userAccount",
              placeholder: "\u8F93\u5165\u7528\u6237\u540D",
              onBlur: this.accountLoseFocus
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Label, {
              className: "input-column-alter",
              style: {
                display: this.state.showAccountAlter
              },
              children: "\u81F3\u5C114\u4E2A\u5B57\u7B26"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "input-group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Label, {
              className: "input-column-name",
              for: "userPassword",
              children: "*\u5BC6\u7801"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
              className: "input-column",
              password: true,
              type: "text",
              name: "userPassword",
              placeholder: "\u8F93\u5165\u5BC6\u7801",
              onBlur: this.passLoseFocus
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Label, {
              className: "input-column-alter",
              style: {
                display: this.state.showPassAlter
              },
              children: "\u81F3\u5C118\u4E2A\u5B57\u7B26"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "input-group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Label, {
              className: "input-column-name",
              for: "checkPassword",
              children: "*\u786E\u8BA4\u5BC6\u7801"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
              className: "input-column",
              password: true,
              type: "text",
              name: "checkPassword",
              placeholder: "\u786E\u8BA4\u5BC6\u7801",
              onBlur: this.checkPassLoseFocus
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Label, {
              className: "input-column-alter",
              style: {
                display: this.state.showCheckPassAlter
              },
              children: "\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
            className: "btn-register",
            formType: "submit",
            children: "\u6CE8\u518C"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "footer-register",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "register-footer-info",
            children: ["\u5DF2\u7ECF\u6709\u8D26\u6237\uFF1F", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "to-navigator",
              onClick: this.naviToLogin,
              children: "\u53BB\u767B\u5F55"
            })]
          })
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./src/pages/userRegister/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/userRegister/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_userRegister_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/userRegister/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/userRegister/index!./src/pages/userRegister/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_userRegister_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/userRegister/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_userRegister_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/userRegister/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map