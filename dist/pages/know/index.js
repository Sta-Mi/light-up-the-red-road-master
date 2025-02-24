"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/know/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/know/index!./src/pages/know/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/know/index!./src/pages/know/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _assets_huizhang_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/huizhang.png */ "./src/assets/huizhang.png");
/* harmony import */ var _assets_on_select_huizhang_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/on-select-huizhang.jpg */ "./src/assets/on-select-huizhang.jpg");
/* harmony import */ var _data_exhibition_know_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/exhibition_know_data.json */ "./src/data/exhibition_know_data.json");
/* harmony import */ var _components_GlobalFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/GlobalFooter */ "./src/components/GlobalFooter/index.tsx");
/* harmony import */ var _components_GlobalMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/GlobalMenu */ "./src/components/GlobalMenu/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











/**
 * 展馆闯关
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //获取数据（调用api）
  var maxKnowListLength = _data_exhibition_know_data_json__WEBPACK_IMPORTED_MODULE_4__.length;
  var exhibitionKnowData = _data_exhibition_know_data_json__WEBPACK_IMPORTED_MODULE_4__;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    selectKey = _useState2[0],
    setSelectKey = _useState2[1];
  //const [isComplete, setIsComplete] = useState(false);
  var keyFromStore = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("selectKey"); //从knowResult页面中获取到selectKey

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    //本页面的selectKey值
    if (keyFromStore) {
      setSelectKey(keyFromStore);
    } else {
      keyFromStore = 0;
    }
  }, []);
  var handleClick = function handleClick(key) {
    /*假设key=0，selectKey = 0
    * 1. 当knowResultScore>=60表示闯关成功，接受到knowResult的参数keyFromStore===1
    *   则key 0 2 3不能点击(无法跳转，点击0提示已经闯关成功，点击1跳转，点击23提示完成前置闯关),
    * 2. 当knowResultScore<60时，接收到的knowResult的参数为仍为keyFromStore===0
    *   表示闯关失败，则key 1 2 3 不能点击(点击0跳转，点击1提示完成前置闯关，点击23提示完成前置闯关)，
    *
    * */
    if (key === keyFromStore) {
      setSelectKey(key);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("selectKey", key); //往doKnow页面传递，用于knowResult接受selectKey
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: "/pages/doKnow/index"
      });
    } else if (key > keyFromStore) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "请先完成前置闯关",
        icon: "error"
      });
    } else if (key < keyFromStore) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "已经闯关成功，继续加油",
        icon: "success"
      });
    } else {
      console.log("数组下标溢出");
    }
  };
  var getIconSerialStyle = function getIconSerialStyle(key) {
    //当selectKey=3时候，红色：key=1，key=2，key=3，key=4
    //当selectKey=1时候，红色：key=1,key=2
    if (key <= selectKey) {
      return {
        backgroundColor: '#de1f1a',
        color: "white"
      };
    }
    return {};
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "indexPage",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "at-article__h1 title",
      children: "\u5C55\u9986\u95EF\u5173"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "at-article__h2 subTitle",
      children: "\u70B9\u51FB\u5C55\u9986\u5373\u53EF\u53C2\u4E0E\u5C55\u9986\u7B54\u9898"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "knowView",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "knowTitle",
        children: "\u2014\u2014\u2014\u2014 \u9009\u62E9\u5173\u53E3\u95EF\u5173 \u2014\u2014\u2014\u2014"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "knowInfo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "infoTotal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "infoNumber",
            children: maxKnowListLength
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "infoText",
            children: "\u5173\u53E3\u603B\u6570"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "infoTotal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "infoNumber",
            children: selectKey
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "infoText",
            children: "\u6210\u529F\u901A\u5173"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "at-row at-row--wrap iconView",
        children: exhibitionKnowData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "at-col at-col-4 iconItem",
            onClick: function onClick() {
              return handleClick(index);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
              className: "iconImage",
              src: index < selectKey ? _assets_on_select_huizhang_jpg__WEBPACK_IMPORTED_MODULE_3__ : _assets_huizhang_png__WEBPACK_IMPORTED_MODULE_2__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "iconTitle",
              children: item.knowTitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "iconSerial",
              style: getIconSerialStyle(index),
              children: ["\u7B2C", item.id, "\u5173"]
            })]
          }, index);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_GlobalFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_GlobalMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
  });
});

/***/ }),

/***/ "./src/pages/know/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/know/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_know_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/know/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/know/index!./src/pages/know/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_know_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/know/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_know_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/huizhang.png":
/*!*********************************!*\
  !*** ./src/assets/huizhang.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/huizhang.png";

/***/ }),

/***/ "./src/assets/on-select-huizhang.jpg":
/*!*******************************************!*\
  !*** ./src/assets/on-select-huizhang.jpg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/on-select-huizhang.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/know/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map