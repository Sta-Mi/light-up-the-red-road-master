"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/knowResult/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/knowResult/index!./src/pages/knowResult/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/knowResult/index!./src/pages/knowResult/index.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GlobalFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GlobalFooter */ "./src/components/GlobalFooter/index.tsx");
/* harmony import */ var _data_exhibition_know_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/exhibition_know_data.json */ "./src/data/exhibition_know_data.json");
/* harmony import */ var _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/knowQuestions.json */ "./src/data/knowQuestions.json");
/* harmony import */ var _utils_functionUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/functionUtils */ "./src/utils/functionUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











/**
 * 展馆闯关结果页面
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var maxKnowListLength = _data_exhibition_know_data_json__WEBPACK_IMPORTED_MODULE_4__.length;

  //第一步：获取doKnow页面传递过来的selectKey
  //const [selectKey, setSelectKey] = useState<number>(1);
  var keyFromStore = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("selectKey");
  // 第一步：从doKnow页面获取答案
  var answerList = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000
    });
  }
  //第二步：需要先改得分方法 第三步：当passValue=knowResultScore>=60 ? "闯关成功" || "闯关失败"

  // 第二步：获取测试结果
  var knowResultScore = (0,_utils_functionUtils__WEBPACK_IMPORTED_MODULE_6__.getBestQuestionResult)(answerList, _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_5__);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("闯关失败"),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    passValue = _useState2[0],
    setPassValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#e69a48"),
    _useState4 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    storeColor = _useState4[0],
    setStoreColor = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#e69a48"),
    _useState6 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    valueColor = _useState6[0],
    setValueColor = _useState6[1];

  // 第三步：
  //页面加载前
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    //根据测试结果返回不同的结论
    if (knowResultScore >= 60) {
      setPassValue("闯关成功");
    } else {
      setPassValue("闯关失败");
      setStoreColor("#8a0b0a");
      setValueColor("#8a0b0a");
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "knowResultPage",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "at-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "at-col at-article__h1 title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtButton, {
          className: "enterBtn",
          onClick: function onClick() {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("selectKey", knowResultScore >= 60 ? keyFromStore + 1 : keyFromStore);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
              url: "/pages/know/index"
            });
            // Taro.showToast({
            //   title: `${keyFromStore}`,
            //   icon: "error",
            //   duration: 2000,
            // });
          },
          children: "\u8FD4\u56DE"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "at-col at-article__h1 title",
        children: "\u7B54\u9898\u89E3\u6790"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "at-col at-article__h1 title",
        children: knowResultScore >= 60 && keyFromStore < maxKnowListLength - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtButton, {
          className: "enterBtn",
          onClick: function onClick() {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("selectKey", keyFromStore + 1);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
              url: "/pages/doKnow/index"
            });
          },
          children: "\u4E0B\u4E00\u5173"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      style: {
        color: storeColor
      },
      className: "at-article__h2 subTitle",
      children: knowResultScore
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      style: {
        color: valueColor
      },
      className: "at-article__h2 subTitle",
      children: passValue
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "answerDetailView",
      children: _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_5__.map(function (question, index) {
        var userAnswer = answerList[index];
        var correctOption = question.options.find(function (opt) {
          return opt.score > 0;
        });
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "questionItemView",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "questionTitle",
            children: [index + 1, ".", question.title]
          }), question.options.map(function (option) {
            var backgroundColor = "";
            var color = "";
            if (option.key === userAnswer) {
              backgroundColor = option.score > 0 ? "#bfd9d0" : "#dbbfbc";
              color = option.score > 0 ? "#317a61" : "#8a0b0a";
            } else if (option.key === (correctOption === null || correctOption === void 0 ? void 0 : correctOption.key)) {
              backgroundColor = "#bfd9d0";
              color = "#317a61";
            }
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              style: {
                backgroundColor: backgroundColor,
                color: color
              },
              className: "questionSelects",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: "questionSelectItem",
                children: [option.key, "\uFF1A", option.value]
              })
            }, option.key);
          })]
        }, index);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_GlobalFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
});

/***/ }),

/***/ "./src/pages/knowResult/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/knowResult/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_knowResult_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/knowResult/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/knowResult/index!./src/pages/knowResult/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_knowResult_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/knowResult/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_knowResult_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/knowResult/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map