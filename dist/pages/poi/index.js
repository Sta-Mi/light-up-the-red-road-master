"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/poi/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/poi/index!./src/pages/poi/index.tsx":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/poi/index!./src/pages/poi/index.tsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PoiPage; }
/* harmony export */ });
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_amap_wx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/amap-wx */ "./src/libs/amap-wx.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/config */ "./src/libs/config.js");
/* harmony import */ var _assets_marker_checked_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/marker_checked.png */ "./src/assets/marker_checked.png");
/* harmony import */ var _assets_marker_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/marker.png */ "./src/assets/marker.png");
/* harmony import */ var _assets_get_location_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/get-location.png */ "./src/assets/get-location.png");
/* harmony import */ var _data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/exhibition_total_data.json */ "./src/data/exhibition_total_data.json");
/* harmony import */ var _data_red_path_data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/red_path_data.json */ "./src/data/red_path_data.json");
/* harmony import */ var _data_onmarkerIdByUser_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/onmarkerIdByUser.json */ "./src/data/onmarkerIdByUser.json");
/* harmony import */ var _components_GlobalMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/GlobalMenu */ "./src/components/GlobalMenu/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);




















//全局wx

var myAmapFun;
//蒙层全局ID
//let currentId=-1;

var markersData;
var PoiPage = /*#__PURE__*/function (_Component) {
  function PoiPage() {
    var _this;
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, PoiPage);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, PoiPage, [].concat(args));
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "$instance", _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance());
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "state", {
      markers: [],
      poisData: [],
      latitude: 0,
      longitude: 0,
      textData: {},
      currentId: -1,
      city: '',
      scale: 5,
      distanceFromMe: 0,
      exhibitionImage: '',
      exhibitionName: '',
      exhibitionAddress: '',
      exhibitionNote: '',
      exhibitionTime: '',
      bottomDistance: '97px',
      maskDisplay: 'none',
      detailInfoDisplay: 'none',
      isSearch: false,
      polyline: [],
      openAccordion: false
    });
    //初始化
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "componentWillMount", function () {
      // 初始化高德地图
      var key = _libs_config__WEBPACK_IMPORTED_MODULE_4__.Config.key;
      myAmapFun = new _libs_amap_wx__WEBPACK_IMPORTED_MODULE_3__.AMapWX({
        key: key
      });
    });
    // 点击标记后触发事件
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "makertap", function (e) {
      var that = _this;
      var id = e.markerId;
      that.setState({
        currentId: id
      }, function () {
        that.changeMarkerColor();
      });
    });
    // Map组件错误时
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "onmakerError", function (e) {
      console.error(e);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '地图加载出错',
        icon: 'error'
      });
    });
    // 获取用户位置
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "getUserLocation", function () {
      var that = _this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getLocation({
        type: 'gcj02',
        success: function success(res) {
          that.setState({
            latitude: res.latitude,
            longitude: res.longitude
          });
          // todo 更新用户最新的位置(参数：经度，纬度，用户id)
        },
        fail: function fail() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '请打开定位',
            icon: 'error'
          });
        }
      });
    });
    // 根据用户点击后弹出弹框
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "changeMarkerColor", function () {
      var that = _this;
      //i是exhibitionid
      var exhibitionItem = _data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__.filter(function (item) {
        return item.id == that.state.currentId;
      })[0];
      that.changeSelectMarker(true);
      that.setState({
        markers: markersData,
        exhibitionImage: exhibitionItem.exhibitionImage,
        exhibitionName: exhibitionItem.exhibitionName,
        exhibitionAddress: exhibitionItem.exhibitionAddress,
        exhibitionNote: exhibitionItem.exhibitionNote,
        exhibitionTime: exhibitionItem.exhibitionStartTime + ' - ' + exhibitionItem.exhibitionFinishTime,
        bottomDistance: '156px',
        maskDisplay: 'block',
        detailInfoDisplay: 'flex'
      });
    });
    //将id=i的marker样式改为选中状态 or 未选中状态
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "changeSelectMarker", function (isSelectStatus) {
      var that = _this;
      markersData.forEach(function (marker) {
        if (marker.id === that.state.currentId && isSelectStatus) {
          // Change marker to selected state
          marker.callout = {
            content: '📷' + marker.exhibitionName,
            color: '#000000',
            fontSize: 20,
            borderRadius: 10,
            borderWidth: 3,
            bgColor: '#ffffff',
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center'
          };
        } else {
          // Change marker to unselected state
          marker.callout = {
            content: '📷' + marker.exhibitionName,
            color: '#000000',
            fontSize: 14,
            borderRadius: 10,
            borderWidth: -1,
            bgColor: '#ffffff',
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center'
          };
        }
      });
    });
    //点击搜索框进行搜索
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "bindInput", function (e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
        latitude = _e$currentTarget$data.latitude,
        longitude = _e$currentTarget$data.longitude;
      var url = '/pages/inputtips/index';
      if (latitude && longitude) {
        url += "?lonlat=".concat(longitude, ",").concat(latitude);
      }
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().redirectTo({
        url: url
      });
    });
    // 从搜索页面返回后，如果在exhibitionTotal中找到了，则弹出周边展馆列表 + 选中状态
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "searchMarkerShowPoiList", function (paramsFromInputtips) {
      var searchMarkerId = -1;
      var that = _this;
      //todo 根据传递过来的keywords 查询总数组的name===keywords得到唯一一个对象，传入i执行changeMarkerColor()效果类似，只不过底下是列表
      var exhibitionSecrchItem = _data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__.filter(function (item) {
        if (item.exhibitionName === paramsFromInputtips.searchKeywords) {
          that.setState({
            currentId: item.id //用于点击蒙层时，知道更改哪个marker的样式
          });
          searchMarkerId = item.id;
          return item;
        }
        return false;
      });
      if (exhibitionSecrchItem.length != 0) {
        //执行获取周边信息
        var params = {
          querykeywords: paramsFromInputtips.searchKeywords,
          success: function success(data) {
            // 更新中心点，选中状态，显示列表
            that.changeSelectMarker(true);
            if (data.poisData.length === 0) {
              that.setState({
                isSearch: false,
                bottomDistance: "156px",
                exhibitionImage: exhibitionSecrchItem[0].exhibitionImage,
                exhibitionName: exhibitionSecrchItem[0].exhibitionName,
                exhibitionAddress: exhibitionSecrchItem[0].exhibitionAddress,
                exhibitionNote: exhibitionSecrchItem[0].exhibitionNote,
                exhibitionTime: exhibitionSecrchItem[0].exhibitionStartTime + ' - ' + exhibitionSecrchItem[0].exhibitionFinishTime
              });
            } else {
              that.setState({
                poisData: data.poisData,
                isSearch: true,
                bottomDistance: "52vh"
              });
            }
            that.setState({
              scale: 16,
              markers: markersData,
              latitude: exhibitionSecrchItem[0].exhibitionLatitude,
              longitude: exhibitionSecrchItem[0].exhibitionLongitude,
              maskDisplay: "block",
              detailInfoDisplay: "flex"
            });
            console.log("当前周边景点是：", data.poisData);
          },
          fail: function fail(info) {
            console.log("poi函数中获取失败：", info);
          }
        };
        myAmapFun.getPoiAround(params);
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "待收录",
          icon: "error"
        });
      }
    });
    //隐藏弹窗和蒙层+ 更改marker为未选中状态
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "hideMaskAndDetailInfo", function () {
      var that = _this;
      that.changeSelectMarker(false); //更改marker为未选中状态
      that.setState({
        bottomDistance: '97px',
        maskDisplay: 'none',
        detailInfoDisplay: 'none',
        markers: markersData,
        //！！！！注意更新绑定到视图中的map的marker，样式才能改变！！！
        isSearch: false
      });
    });
    //绘制路线图
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "portraitPath", function (pathName) {
      var that = _this;
      var waypoints = '';
      var destination = '';
      if (pathName != '') {
        _data_red_path_data_json__WEBPACK_IMPORTED_MODULE_9__.filter(function (item) {
          return item.pathName === pathName;
        }).map(function (item) {
          var pathExhibitionIdList = item.pathExhibitionIdList;
          pathExhibitionIdList.map(function (item, index) {
            var xiabiao = item - 1;
            if (index === pathExhibitionIdList.length - 1) {
              //最后一项
              destination += "".concat(_data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__[xiabiao].exhibitionLongitude, ",").concat(_data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__[xiabiao].exhibitionLatitude);
            } else {
              waypoints += "".concat(_data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__[xiabiao].exhibitionLongitude, ",").concat(_data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__[xiabiao].exhibitionLatitude, ";");
            }
          });
        });
        myAmapFun.getDrivingRoute({
          origin: "".concat(_this.state.longitude, ",").concat(_this.state.latitude),
          // 起点我的定位

          waypoints: waypoints,
          // 途径点
          destination: destination,
          //终点
          success: function success(data) {
            var points = [];
            if (data.paths && data.paths[0] && data.paths[0].steps) {
              var steps = data.paths[0].steps;
              for (var i = 0; i < steps.length; i++) {
                var poLen = steps[i].polyline.split(';');
                for (var j = 0; j < poLen.length; j++) {
                  points.push({
                    longitude: poLen[j].split(',')[0],
                    latitude: poLen[j].split(',')[1]
                  });
                }
              }
            }
            var mid = parseInt((points.length / 2).toString());
            that.setState({
              polyline: [{
                points: points,
                color: "#ff0000",
                width: 6
              }],
              longitude: points[mid].longitude,
              latitude: points[mid].latitude,
              markers: markersData
            });
          },
          fail: function fail(info) {
            console.log("getDrivingRoute函数报错：", info);
          }
        });
      } else {
        //获取用户当前位置
        that.getUserLocation();
        that.setState({
          markers: markersData
        });
      }
    });
    //显示下拉列表
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "showPathNames", function () {
      if (_this.state.openAccordion) {
        _this.setState({
          openAccordion: false
        });
      } else {
        _this.setState({
          openAccordion: true
        });
        //更改样式
      }
    });
    //获取点击的pathName
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "getPathName", function (e) {
      var that = _this;
      var pathName = e._relatedInfo.anchorTargetText;
      console.log(e._relatedInfo.anchorTargetText);
      //传递给函数重新加载地图
      //
      //绘制线路
      that.portraitPath(pathName);
      //自动关闭
      that.setState({
        openAccordion: false
      });
    });
    return _this;
  }
  (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_16__["default"])(PoiPage, _Component);
  return (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_17__["default"])(PoiPage, [{
    key: "componentDidMount",
    value:
    // 页面初始加载时
    function componentDidMount() {
      var _this$$instance$route;
      var that = this;

      //A->B
      var simplifiedExhibitions = _data_exhibition_total_data_json__WEBPACK_IMPORTED_MODULE_8__.map(function (item) {
        return {
          id: item.id,
          exhibitionName: item.exhibitionName,
          latitude: item.exhibitionLatitude,
          longitude: item.exhibitionLongitude
        };
      });
      markersData = simplifiedExhibitions;
      markersData.forEach(function (marker) {
        if (_data_onmarkerIdByUser_json__WEBPACK_IMPORTED_MODULE_10__.includes(marker.id)) {
          //表示当前用户的这个标记点已经打过卡了
          marker.iconPath = _assets_marker_checked_png__WEBPACK_IMPORTED_MODULE_5__;
        } else {
          marker.iconPath = _assets_marker_png__WEBPACK_IMPORTED_MODULE_6__;
        }
        marker.height = 22;
        marker.width = 22;
        marker.callout = {
          content: '📷' + marker.exhibitionName,
          // 显示POI名称和展馆图片 B
          color: '#000000',
          fontSize: 14,
          borderRadius: 10,
          bgColor: '#ffffff',
          padding: 10,
          display: 'ALWAYS',
          // 气泡始终显示 todo1.获取地图缩放的scale 2.当scale>=16时再显示
          textAlign: 'center'
        };
      });

      //绘制线路
      that.portraitPath('');

      //获取查询字符串
      //因为inputtips的bindSearch()函数传递了路由参数
      var paramsFromInputtips = (_this$$instance$route = this.$instance.router) === null || _this$$instance$route === void 0 ? void 0 : _this$$instance$route.params;
      if (paramsFromInputtips && paramsFromInputtips.searchKeywords) {
        console.log('执行了');
        that.searchMarkerShowPoiList(paramsFromInputtips);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: "poiPage",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Input, {
              className: "section_input",
              "data-city": this.state.city,
              "data-longitude": this.state.longitude,
              "data-latitude": this.state.latitude
              // onTouchStart={this.bindInput.bind(this)}
              ,
              onClick: this.bindInput.bind(this),
              placeholder: "\u641C\u7D22"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "top_float_box",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtAccordion, {
              open: this.state.openAccordion,
              onClick: this.showPathNames.bind(this),
              title: "\u7814\u5B66\u4E4B\u8DEF",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtList, {
                hasBorder: false,
                children: _data_red_path_data_json__WEBPACK_IMPORTED_MODULE_9__.length > 0 ? _data_red_path_data_json__WEBPACK_IMPORTED_MODULE_9__.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
                    // 确保每个项都有唯一的 key
                    onClick: _this2.getPathName // 传递路径名称
                    ,
                    title: item.pathName,
                    arrow: "right",
                    thumb: item.pathImageUrl // 假设 imageUrl 是数组对象中的属性
                  }, item.id);
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtListItem, {
                  title: "\u6CA1\u6709\u53EF\u7528\u7684\u8DEF\u5F84"
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "map_container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "mask",
              style: {
                display: this.state.maskDisplay
              },
              onClick: this.hideMaskAndDetailInfo
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Map, {
              className: "map",
              id: "map",
              longitude: this.state.longitude,
              latitude: this.state.latitude,
              scale: this.state.scale,
              showLocation: true,
              markers: this.state.markers,
              polyline: this.state.polyline,
              onMarkerTap: this.makertap.bind(this),
              onError: this.onmakerError.bind(this)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "bottom_float_box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Image, {
              style: {
                width: '27px',
                height: '27px',
                bottom: this.state.bottomDistance
              },
              className: "get_location_icon",
              mode: "scaleToFill",
              src: _assets_get_location_png__WEBPACK_IMPORTED_MODULE_7__,
              onClick: this.getUserLocation
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              style: {
                display: this.state.detailInfoDisplay
              },
              children: this.state.isSearch ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                className: "detail_info search_view",
                children: this.state.poisData.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                    className: "search_item",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                      className: "bottom_content",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                        className: "content_header",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                          className: "info_title",
                          children:
                          //@ts-ignore
                          item.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                          className: "info_address",
                          children:
                          //@ts-ignore
                          item.type
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                          className: "info_note",
                          children:
                          //@ts-ignore
                          item.tel
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                          className: "info_distance",
                          children: [
                          //@ts-ignore
                          (item.distance / 1000).toFixed(2), "km"]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                        className: "content_footer",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                          children:
                          //@ts-ignore
                          item.address
                        })
                      })]
                    })
                  }, index);
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                className: "detail_info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                  className: "image_container",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Image, {
                    style: {
                      width: '100%',
                      height: '100%'
                    },
                    className: "exhibition_image",
                    mode: "scaleToFill",
                    src: this.state.exhibitionImage
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                  className: "bottom_content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                    className: "content_header",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                      className: "info_title",
                      children: this.state.exhibitionName
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                      className: "info_note",
                      children: this.state.exhibitionNote
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                      className: "info_distance",
                      children: this.state.exhibitionTime
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                    className: "content_footer",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                      children: this.state.exhibitionAddress
                    })
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_GlobalMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {})]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);


/***/ }),

/***/ "./src/pages/poi/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/poi/index.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_poi_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/poi/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/poi/index!./src/pages/poi/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_poi_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/poi/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_poi_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/get-location.png":
/*!*************************************!*\
  !*** ./src/assets/get-location.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/get-location.png";

/***/ }),

/***/ "./src/assets/marker.png":
/*!*******************************!*\
  !*** ./src/assets/marker.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/marker.png";

/***/ }),

/***/ "./src/assets/marker_checked.png":
/*!***************************************!*\
  !*** ./src/assets/marker_checked.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/marker_checked.png";

/***/ }),

/***/ "./src/data/onmarkerIdByUser.json":
/*!****************************************!*\
  !*** ./src/data/onmarkerIdByUser.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = [3];

/***/ }),

/***/ "./src/data/red_path_data.json":
/*!*************************************!*\
  !*** ./src/data/red_path_data.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"pathName":"二七革命","pathExhibitionIdList":[1,3,2],"pathImageUrl":"../../assets/wei-ren-zu-ji.jpg"},{"id":2,"pathName":"伟大足迹","pathExhibitionIdList":[1,2],"pathImageUrl":"../../assets/wei-ren-zu-ji.jpg"},{"id":3,"pathName":"建军策源","pathExhibitionIdList":[3,2],"pathImageUrl":"../../assets/jian-jun-ce-yuan.jpg"},{"id":4,"pathName":"革命烽火","pathExhibitionIdList":[1,3],"pathImageUrl":"../../assets/ge-ming-lie-huo.png"}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/poi/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map