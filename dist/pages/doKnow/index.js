"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/doKnow/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/doKnow/index!./src/pages/doKnow/index.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/doKnow/index!./src/pages/doKnow/index.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GlobalFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GlobalFooter */ "./src/components/GlobalFooter/index.tsx");
/* harmony import */ var _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/knowQuestions.json */ "./src/data/knowQuestions.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









/**
 * 答题闯关页面
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //第一步：获取当前是哪个展馆的答题->获取不同的题库(获取know页面跳转到当前页的selectKey)
  //第二步：编写样式
  //第三步：实现写题
  // 当前题目序号（从 1 开始）
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  // 当前题目
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_4__[0]),
    _useState4 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    currentQuestion = _useState4[0],
    setCurrentQuestion = _useState4[1];
  var questionOptions = currentQuestion.options.map(function (option) {
    return {
      label: "".concat(option.key, ". ").concat(option.value),
      value: option.key
    };
  });
  // 当前答案
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
    _useState6 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    currentAnswer = _useState6[0],
    setCurrentAnswer = _useState6[1];
  // 回答列表
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState8 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 1),
    answerList = _useState8[0];
  //页面加载前
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    //获取当前题目和选项
    setCurrentQuestion(_data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_4__[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  // 计时器
  var onTimeUp = function onTimeUp() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
      title: "时间到",
      icon: "error",
      duration: 2000
    });
    //直接答案解析页面
    // 传递答案
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("answerList", answerList);
    // 跳转到结果页面
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: "/pages/knowResult/index"
    });
  };
  return (
    /*#__PURE__*/
    //<View>
    //<Text>当前的 key 是: {selectKey}</Text>
    //</View>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "doKnowPage",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "at-article__h1 title",
        children: "\u7EA2\u8272\u5C55\u9986\u77E5\u8BC6\u95EF\u5173"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "progressView",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "progressTimeView",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "progressText",
            children: [current, "/", _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_4__.length]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtCountdown, {
            isShowHour: false,
            minutes: 5,
            seconds: 0,
            className: "progressTime",
            onTimeUp: onTimeUp
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtProgress, {
          percent: parseInt(current + "0"),
          strokeWidth: 10,
          color: "#FFFFFF",
          status: "progress",
          className: "progressBar"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "questionView",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "questionTitle",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtTag, {
            className: "questionType",
            children: "\u5355\u9009"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "at-article__h2 subTitle",
            children: currentQuestion.title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "options-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtRadio, {
            className: "optionItem",
            options: questionOptions,
            value: currentAnswer,
            onClick: function onClick(value) {
              setCurrentAnswer(value);
              // 记录回答
              answerList[current - 1] = value;
            }
          })
        }), current < _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_4__.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtButton, {
          type: "primary",
          className: "controlBtn",
          disabled: !currentAnswer,
          onClick: function onClick() {
            return setCurrent(current + 1);
          },
          children: "\u4E0B\u4E00\u9898"
        }), current == _data_knowQuestions_json__WEBPACK_IMPORTED_MODULE_4__.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtButton, {
          type: "primary",
          className: "controlBtn",
          disabled: !currentAnswer,
          onClick: function onClick() {
            // 传递答案
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("answerList", answerList);
            // 跳转到结果页面
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: "/pages/knowResult/index"
            });
          },
          children: "\u63D0\u4EA4\u7B54\u6848"
        }), current > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtButton, {
          className: "controlBtn",
          onClick: function onClick() {
            return setCurrent(current - 1);
          },
          children: "\u4E0A\u4E00\u9898"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_GlobalFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    })
  );
});

/***/ }),

/***/ "./src/pages/doKnow/index.tsx":
/*!************************************!*\
  !*** ./src/pages/doKnow/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_doKnow_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/doKnow/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/doKnow/index!./src/pages/doKnow/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_doKnow_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/doKnow/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_doKnow_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/doKnow/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map