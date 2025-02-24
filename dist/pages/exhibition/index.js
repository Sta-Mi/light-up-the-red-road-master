"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/exhibition/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exhibition/index!./src/pages/exhibition/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exhibition/index!./src/pages/exhibition/index.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/exhibition_total_data.json */ "./src/data/exhibition_total_data.json");
/* harmony import */ var _assets_know_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/know.jpg */ "./src/assets/know.jpg");
/* harmony import */ var _assets_5_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/5.jpeg */ "./src/assets/5.jpeg");
/* harmony import */ var _assets_2_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/2.jpeg */ "./src/assets/2.jpeg");
/* harmony import */ var _assets_3_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/3.jpeg */ "./src/assets/3.jpeg");
/* harmony import */ var _assets_4_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/4.jpeg */ "./src/assets/4.jpeg");
/* harmony import */ var _assets_6_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/6.jpeg */ "./src/assets/6.jpeg");
/* harmony import */ var _assets_1_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/1.jpeg */ "./src/assets/1.jpeg");
/* harmony import */ var _assets_7_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/7.jpeg */ "./src/assets/7.jpeg");
/* harmony import */ var _assets_8_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/8.jpg */ "./src/assets/8.jpg");
/* harmony import */ var _components_ExhibitionSwiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ExhibitionSwiper */ "./src/components/ExhibitionSwiper/index.tsx");
/* harmony import */ var _components_ExhibitionListByFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ExhibitionListByFilter */ "./src/components/ExhibitionListByFilter/index.tsx");
/* harmony import */ var _components_GlobalMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/GlobalMenu */ "./src/components/GlobalMenu/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);

var _this = undefined;



















/**
 * 展馆首页
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var handleClick = function handleClick(value) {
    setCurrent(value);
  };
  var tabList = [{
    title: "推荐"
  }, {
    title: "类别"
  }, {
    title: "时期"
  }];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([_assets_5_jpeg__WEBPACK_IMPORTED_MODULE_5__, _assets_4_jpeg__WEBPACK_IMPORTED_MODULE_8__, _assets_3_jpeg__WEBPACK_IMPORTED_MODULE_7__, _assets_2_jpeg__WEBPACK_IMPORTED_MODULE_6__, _assets_1_jpeg__WEBPACK_IMPORTED_MODULE_10__]),
    _useState4 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState3, 2),
    banner = _useState4[0],
    setBanner = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState6 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState5, 2),
    dataList = _useState6[0],
    setDataList = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setBanner([_assets_5_jpeg__WEBPACK_IMPORTED_MODULE_5__, _assets_6_jpeg__WEBPACK_IMPORTED_MODULE_9__, _assets_7_jpeg__WEBPACK_IMPORTED_MODULE_11__, _assets_8_jpg__WEBPACK_IMPORTED_MODULE_12__, _assets_4_jpeg__WEBPACK_IMPORTED_MODULE_8__]);
    setDataList(_data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_3__);
    // setDataList([
    //   {
    //     id: 1,
    //     exhibitionName: "展馆1",
    //     categoryId: 1,
    //     eraIdList: [1, 2],
    //     exhibitionImage:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk12jZMVtPDUvA_kFCiHJViauVmNSstlK8zSksY8A1iCiZ1uNzRaEAVCT0AOTlen7rpAU&usqp=CAU",
    //     exhibitionAddress: "地址1",
    //     exhibitionStartTime: "09:00",
    //     exhibitionFinishTime: "18:00",
    //     exhibitionNote: "周二至周五",
    //     exhibitionProfile: "展馆简介",
    //     videoList: [
    //       {
    //         id: 1,
    //         exhibitionId: 1,
    //         videoName: "展馆1的视频1",
    //         videoContent: "视频1连接",
    //       },
    //       {
    //         id: 2,
    //         exhibitionId: 1,
    //         videoName: "展馆1的视频2",
    //         videoContent: "视频2连接",
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     exhibitionName: "展馆2",
    //     categoryId: 2,
    //     eraIdList: [2, 3],
    //     exhibitionImage:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk12jZMVtPDUvA_kFCiHJViauVmNSstlK8zSksY8A1iCiZ1uNzRaEAVCT0AOTlen7rpAU&usqp=CAU",
    //     exhibitionAddress: "地址2",
    //     exhibitionStartTime: "",
    //     exhibitionFinishTime: "",
    //     exhibitionNote: "全天",
    //     exhibitionProfile: "展馆简介",
    //     videoList: [
    //       {
    //         id: 3,
    //         exhibitionId: 2,
    //         videoName: "展馆2的视频1",
    //         videoContent: "视频3连接",
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     exhibitionName: "湖北省雷锋纪念馆",
    //     categoryId: 3,
    //     eraIdList: [4],
    //     exhibitionImage:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk12jZMVtPDUvA_kFCiHJViauVmNSstlK8zSksY8A1iCiZ1uNzRaEAVCT0AOTlen7rpAU&usqp=CAU",
    //     exhibitionAddress: "地址3",
    //     exhibitionStartTime: "",
    //     exhibitionFinishTime: "",
    //     exhibitionNote: "全天",
    //     exhibitionProfile: "展馆简介",
    //     videoList: [
    //       {
    //         id: 4,
    //         exhibitionId: 3,
    //         videoName: "展馆3的视频1",
    //         videoContent: "视频4连接",
    //       },
    //     ],
    //   },
    //   // Add more items as needed
    // ]);
  }, [dataList]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
      className: "exhibitionPage",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabs, {
        current: current,
        tabList: tabList,
        onClick: handleClick.bind(_this),
        className: "exhibitionTabPage",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabsPane, {
          current: current,
          index: 0,
          className: "tabItem",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            style: "padding: 10px;background-color: #f3f3f3;text-align:inherit;",
            className: "tabItem_1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ExhibitionSwiper__WEBPACK_IMPORTED_MODULE_13__["default"], {
              banner: banner,
              tabKey: 0
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Image, {
              className: "knowImage",
              src: _assets_know_jpg__WEBPACK_IMPORTED_MODULE_4__,
              onClick: function onClick() {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                  url: "/pages/know/index"
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ExhibitionListByFilter__WEBPACK_IMPORTED_MODULE_14__["default"], {
              dataList: dataList,
              tabKey: 0
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabsPane, {
          current: current,
          index: 1,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            style: "padding: 10px;background-color: #f3f3f3;text-align: inherit;",
            className: "tabItem_2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ExhibitionSwiper__WEBPACK_IMPORTED_MODULE_13__["default"], {
              banner: banner,
              tabKey: 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Image, {
              className: "knowImage",
              src: _assets_know_jpg__WEBPACK_IMPORTED_MODULE_4__,
              onClick: function onClick() {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                  url: "/pages/know/index"
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ExhibitionListByFilter__WEBPACK_IMPORTED_MODULE_14__["default"], {
              dataList: dataList,
              tabKey: 1
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabsPane, {
          current: current,
          index: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            style: "padding: 10px;background-color: #f3f3f3;text-align: inherit;",
            className: "tabItem_3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ExhibitionSwiper__WEBPACK_IMPORTED_MODULE_13__["default"], {
              banner: banner,
              tabKey: 2
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Image, {
              className: "knowImage",
              src: _assets_know_jpg__WEBPACK_IMPORTED_MODULE_4__,
              onClick: function onClick() {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                  url: "/pages/know/index"
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ExhibitionListByFilter__WEBPACK_IMPORTED_MODULE_14__["default"], {
              dataList: dataList,
              tabKey: 2
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_GlobalMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {})]
  });
});

/***/ }),

/***/ "./src/components/ExhibitionListByFilter/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/ExhibitionListByFilter/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExhibitionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ExhibitionList */ "./src/components/ExhibitionList/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);

var _this = undefined;






/**
 * 根据传递过来的tabKey进行数据过滤
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var dataList = _ref.dataList,
    tabKey = _ref.tabKey;
  var exhibitionEra = [{
    title: "新民主主义革命时期"
  }, {
    title: "社会主义革命和建设时期"
  }, {
    title: "改革开放和社会主义现代化建设时期"
  }, {
    title: "中国特色社会主义新时代"
  }, {
    title: "其他"
  }];
  var exhibitionCategory = [{
    title: "革命博物馆"
  }, {
    title: "纪念馆"
  }, {
    title: "烈士陵园"
  }, {
    title: "旧址"
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    tabList = _useState2[0],
    setTabList = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    //参数含义：二级tab行名称
    if (tabKey === 1) {
      setTabList(exhibitionCategory);
    } else if (tabKey === 2) {
      setTabList(exhibitionEra);
    } else {
      setTabList([]);
    }
  }, [tabList]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState4 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    current = _useState4[0],
    setCurrent = _useState4[1];
  var handleClick = function handleClick(value) {
    setCurrent(value);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "exhibitionListByCategory",
    children: tabList.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ExhibitionList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      dataList: dataList,
      tabKey: tabKey,
      filterKey: 0
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabs, {
      current: current,
      scroll: true,
      tabList: tabList,
      onClick: handleClick.bind(_this),
      children: tabList && tabList.map(function (tabName, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabsPane, {
          current: current,
          index: index,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            style: "background-color: #f3f3f3;text-align: inherit;",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ExhibitionList__WEBPACK_IMPORTED_MODULE_2__["default"], {
              dataList: dataList,
              tabKey: tabKey,
              filterKey: index + 1
            })
          })
        });
      })
    })
  });
});

/***/ }),

/***/ "./src/components/ExhibitionList/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ExhibitionList/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






/**
 * 根据传递过来的tabKey进行数据过滤
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var dataList = _ref.dataList,
    tabKey = _ref.tabKey,
    filterKey = _ref.filterKey;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    dataListByFilter = _useState2[0],
    setDataListByFilter = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    //category=1的展馆列表->即对dataList进行过滤->赋值给dataListByFilter
    if (tabKey === 1 && filterKey !== 0) {
      //分类：分类ID=选中的ID
      setDataListByFilter(dataList.filter(function (item) {
        return item.categoryId === filterKey;
      }));
    } else if (tabKey === 2 && filterKey !== 0) {
      //时期：时期ID列表包括选中的时期ID即可
      setDataListByFilter(dataList.filter(function (item) {
        return item.eraIdList.includes(filterKey);
      }));
    } else {
      //推荐(filterKey===0)
      setDataListByFilter(dataList);
    }
  }, [dataListByFilter]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "exhibitionList",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtList, {
      className: "listView",
      children: dataListByFilter && dataListByFilter.map(function (data) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "detail_info",
          onClick: function onClick() {
            // Taro.setStorageSync("exhibitionId",data.id);
            // Taro.setStorageSync("dataList",dataList);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/exhibitionDetail/index?exhibitionId=" + data.id
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "image_container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
              style: {
                width: '100%',
                height: '100%'
              },
              className: "exhibition_image",
              mode: "scaleToFill",
              src: data.exhibitionImage
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "bottom_content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "content_header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
                className: "info_title",
                children: data.exhibitionName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
                className: "info_address",
                children: data.exhibitionAddress
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
                className: "info_note",
                children: data.exhibitionNote
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
                className: "info_distance",
                children: "".concat(data.exhibitionStartTime, " - ").concat(data.exhibitionFinishTime)
              })]
            })
          })]
        });
      })
    })
  });
});

/***/ }),

/***/ "./src/components/ExhibitionSwiper/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/ExhibitionSwiper/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



/**
 * 展馆轮播图组件(获取父组件传递过来的dataList(点击tab后传递tabKey->调用后端接口->获取dataList)->进行展示))
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var banner = _ref.banner,
    tabKey = _ref.tabKey;
  var autoplay = true;
  var indicatorDots = true;
  var circular = true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
      className: "test-h exhibitionSwiper",
      indicatorColor: "#999",
      indicatorActiveColor: "#de1f1a",
      circular: circular,
      indicatorDots: indicatorDots,
      autoplay: autoplay,
      children: banner && banner.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.SwiperItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Image, {
            className: "swiper-img",
            src: item
          })
        }, index);
      })
    })
  });
});

/***/ }),

/***/ "./src/pages/exhibition/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/exhibition/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exhibition_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exhibition/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exhibition/index!./src/pages/exhibition/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exhibition_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/exhibition/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exhibition_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/1.jpeg":
/*!***************************!*\
  !*** ./src/assets/1.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1.jpeg";

/***/ }),

/***/ "./src/assets/2.jpeg":
/*!***************************!*\
  !*** ./src/assets/2.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2.jpeg";

/***/ }),

/***/ "./src/assets/3.jpeg":
/*!***************************!*\
  !*** ./src/assets/3.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3.jpeg";

/***/ }),

/***/ "./src/assets/4.jpeg":
/*!***************************!*\
  !*** ./src/assets/4.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/4.jpeg";

/***/ }),

/***/ "./src/assets/5.jpeg":
/*!***************************!*\
  !*** ./src/assets/5.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5.jpeg";

/***/ }),

/***/ "./src/assets/6.jpeg":
/*!***************************!*\
  !*** ./src/assets/6.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6.jpeg";

/***/ }),

/***/ "./src/assets/7.jpeg":
/*!***************************!*\
  !*** ./src/assets/7.jpeg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7.jpeg";

/***/ }),

/***/ "./src/assets/8.jpg":
/*!**************************!*\
  !*** ./src/assets/8.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/8.jpg";

/***/ }),

/***/ "./src/assets/know.jpg":
/*!*****************************!*\
  !*** ./src/assets/know.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/know.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/exhibition/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map