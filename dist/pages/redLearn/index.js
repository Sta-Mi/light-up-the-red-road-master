"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/redLearn/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/redLearn/index!./src/pages/redLearn/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/redLearn/index!./src/pages/redLearn/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_learn_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/learn_data.json */ "./src/data/learn_data.json");
/* harmony import */ var _components_GlobalFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GlobalFooter */ "./src/components/GlobalFooter/index.tsx");
/* harmony import */ var _components_GlobalMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GlobalMenu */ "./src/components/GlobalMenu/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









/**
 * 红色研学
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var redLearnData = _data_learn_data_json__WEBPACK_IMPORTED_MODULE_2__;
  console.log(redLearnData);

  // 状态：当前选中的标签
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];

  // 标签页的选项
  var tabList = [{
    title: '信息'
  }, {
    title: '专栏'
  }];

  //处理专栏内容
  var handleZhanLanClick = function handleZhanLanClick(id) {
    console.log(id); //todo 详细的markdown文档页
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: "redLearnPage",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabs, {
      current: current,
      tabList: tabList,
      onClick: function onClick(value) {
        return setCurrent(value);
      } // 切换标签时更新状态
      ,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabsPane, {
        current: current,
        index: 0,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "info-card",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtList, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u5171\u4EA7\u515A\u5BA3\u8A00",
              note: "\u9A6C\u514B\u601D\u548C\u6069\u683C\u65AF\u4E3A\u5171\u4EA7\u4E3B\u4E49\u8005\u540C\u76DF\u8D77\u8349",
              thumb: "path_to_image.jpg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u5173\u4E8E\u8D39\u5C14\u5DF4\u54C8\u7684\u63D0\u7EB2",
              note: "\u8BE5\u6587\u6279\u5224\u4E86\u8D39\u5C14\u5DF4\u54C8\u65E7\u552F\u7269\u4E3B\u4E49\u89C2\u70B9",
              thumb: "path_to_image.jpg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u793E\u4F1A\u4E3B\u4E49\u4ECE\u7A7A\u60F3\u5230\u79D1\u5B66\u7684\u53D1\u5C55",
              note: "\u6069\u683C\u65AF\u7684\u4E00\u90E8\u79D1\u5B66\u793E\u4F1A\u4E3B\u4E49\u8457\u4F5C",
              thumb: "path_to_image.jpg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u53CD\u675C\u6797\u8BBA",
              note: "\u6069\u683C\u65AF\u6279\u5224\u6B27\u6839\xB7\u675C\u6797\u5728\u54F2\u5B66\u3001\u7ECF\u6D4E\u5B66\u4E0A\u7684\u7406\u8BBA",
              thumb: "path_to_image.jpg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u54E5\u8FBE\u7EB2\u9886\u6279\u5224",
              note: "\u9A6C\u514B\u601D\u6279\u5224\u6027\u7684\u793E\u4F1A\u653F\u6CBB\u6587\u7AE0",
              thumb: "path_to_image.jpg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u653F\u6CBB\u7ECF\u6D4E\u5B66\u6279\u5224",
              note: "\u9A6C\u514B\u601D\u7684\u7ECF\u6D4E\u5B66\u7406\u8BBA\u8457\u4F5C",
              thumb: "path_to_image.jpg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
              title: "\u8D44\u672C\u8BBA",
              note: "\u9A6C\u514B\u601D\u7684\u7ECF\u6D4E\u5B66\u5DE8\u4F5C",
              thumb: "path_to_image.jpg"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabsPane, {
        current: current,
        index: 1,
        children: redLearnData.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "zhuanlan-card",
            onClick: function onClick() {
              return handleZhanLanClick(item.id);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "card-header",
              children: ["\u8FFD\u5BFB\u9769\u547D\u5723\u5730", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
                children: "\u611F\u609F\u7EA2\u8272\u7CBE\u795E"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "card-description",
              children: item.learnTitle
            })]
          }, item.id);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_GlobalFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_GlobalMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
});

/***/ }),

/***/ "./src/pages/redLearn/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/redLearn/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_redLearn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/redLearn/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/redLearn/index!./src/pages/redLearn/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_redLearn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/redLearn/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_redLearn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/data/learn_data.json":
/*!**********************************!*\
  !*** ./src/data/learn_data.json ***!
  \**********************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"learnTitle":"汉口新四军军部旧址纪念馆一铁血征程留迹处，英魂浩气永传扬"},{"id":2,"learnTitle":"武汉中共中央旧址纪念馆一重温历史峥嵘岁月"},{"id":3,"learnTitle":"武汉革命博物馆--峥嵘岁月铸辉煌，风雨兼程树丰碑"},{"id":4,"learnTitle":"八路军武汉办事处旧址纪念馆--风云岁月忆沧桑，铁血丹心谱乐章"},{"id":5,"learnTitle":"辛亥革命博物馆--革命精神永不灭 红色谱系代代传"},{"id":6,"learnTitle":"八七会议会址纪念馆--红色旗帜指方向，笃行不怠践使命"},{"id":7,"learnTitle":"武汉二七纪念馆--传承红色基因，弘扬二七精神"},{"id":8,"learnTitle":"中山舰博物馆--一代名舰，舰证中山魂"},{"id":9,"learnTitle":"中共五大会址纪念馆一往昔峥嵘岁月稠"},{"id":10,"learnTitle":"江汉关博物馆--一关览武汉，一馆品百年"}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/redLearn/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map