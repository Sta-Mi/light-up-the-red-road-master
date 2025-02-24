(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/GlobalFooter/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/GlobalFooter/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



/**
 * 全局底部栏组件
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "globalFooter",
    children: "\u4F5C\u8005\uFF1A\u70B9\u4EAE\u7EA2\u9014\u56E2\u961F"
  });
});

/***/ }),

/***/ "./src/components/GlobalMenu/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/GlobalMenu/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GlobalMenu; }
/* harmony export */ });
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.jpg */ "./src/assets/logo.jpg");
/* harmony import */ var _assets_menu_exhibition_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/menu-exhibition.png */ "./src/assets/menu-exhibition.png");
/* harmony import */ var _assets_menu_on_exhibition_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/menu-on-exhibition.png */ "./src/assets/menu-on-exhibition.png");
/* harmony import */ var _assets_menu_me_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/menu-me.png */ "./src/assets/menu-me.png");
/* harmony import */ var _assets_menu_on_me_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/menu-on-me.png */ "./src/assets/menu-on-me.png");
/* harmony import */ var _assets_menu_know_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/menu-know.png */ "./src/assets/menu-know.png");
/* harmony import */ var _assets_menu_on_know_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/menu-on-know.png */ "./src/assets/menu-on-know.png");
/* harmony import */ var _assets_menu_red_path_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/menu-red-path.png */ "./src/assets/menu-red-path.png");
/* harmony import */ var _assets_menu_on_red_path_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/menu-on-red-path.png */ "./src/assets/menu-on-red-path.png");
/* harmony import */ var _assets_menu_knowledge_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/menu-knowledge.png */ "./src/assets/menu-knowledge.png");
/* harmony import */ var _assets_menu_on_knowledge_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/menu-on-knowledge.png */ "./src/assets/menu-on-knowledge.png");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);






















/**
 * 全局菜单组件
 */

var GlobalMenu = /*#__PURE__*/function (_Component) {
  function GlobalMenu() {
    var _this;
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this, GlobalMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this, GlobalMenu, [].concat(args));
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "state", {
      openMenuList: false,
      current: -1,
      maskDisplay: 'none'
    });
    // 显示 or 关闭弹窗
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "showMenuList", function () {
      _this.setState({
        openMenuList: _this.state.openMenuList ? false : true,
        maskDisplay: 'block'
      });
    });
    //跳转页面
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "naviToPage", function (e) {
      console.log(e); //从0开始
      //获取点击的current-更新current-根据对应的current跳转到不同页面
      if (e === 0) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default().redirectTo({
          url: "/pages/exhibition/index"
        });
      } else if (e === 1) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default().redirectTo({
          url: "/pages/know/index"
        });
      } else if (e === 2) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default().redirectTo({
          url: "/pages/poi/index"
        });
      } else if (e === 3) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default().redirectTo({
          url: "/pages/redLearn/index"
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default().redirectTo({
          url: "/pages/my/index"
        });
      }
      _this.setState({
        openMenuList: false
      });
    });
    //隐藏蒙层 todo 公用方法
    (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this, "hideMaskAndDetailInfo", function () {
      _this.setState({
        maskDisplay: 'none',
        openMenuList: false
      });
    });
    return _this;
  }
  (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_18__["default"])(GlobalMenu, _Component);
  return (0,E_dianlianghongtu_dianlianghongtu_hongtu_test_mini_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(GlobalMenu, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_20__.View, {
        className: "globalMenu",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_20__.View, {
          className: "mask",
          style: {
            display: this.state.maskDisplay
          },
          onClick: this.hideMaskAndDetailInfo
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_20__.View, {
          className: "menu_content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_20__.Image, {
            style: {
              width: '46px',
              height: '46px'
            },
            className: "menu_image",
            mode: "scaleToFill",
            src: _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__,
            onClick: this.showMenuList
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_20__.View, {
            className: "float_menu_list",
            style: {
              display: this.state.openMenuList ? "block" : "none"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtTabBar, {
              tabList: [{
                title: '展馆',
                image: _assets_menu_exhibition_png__WEBPACK_IMPORTED_MODULE_3__,
                selectedImage: _assets_menu_on_exhibition_png__WEBPACK_IMPORTED_MODULE_4__
              }, {
                title: '关卡',
                image: _assets_menu_know_png__WEBPACK_IMPORTED_MODULE_7__,
                selectedImage: _assets_menu_on_know_png__WEBPACK_IMPORTED_MODULE_8__
              }, {
                title: '路线',
                image: _assets_menu_red_path_png__WEBPACK_IMPORTED_MODULE_9__,
                selectedImage: _assets_menu_on_red_path_png__WEBPACK_IMPORTED_MODULE_10__
              }, {
                title: '知识',
                image: _assets_menu_knowledge_png__WEBPACK_IMPORTED_MODULE_11__,
                selectedImage: _assets_menu_on_knowledge_png__WEBPACK_IMPORTED_MODULE_12__
              }, {
                title: '活动',
                image: _assets_menu_me_png__WEBPACK_IMPORTED_MODULE_5__,
                selectedImage: _assets_menu_on_me_png__WEBPACK_IMPORTED_MODULE_6__
              }],
              onClick: this.naviToPage.bind(this),
              current: this.state.current
            })
          })]
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

;

/***/ }),

/***/ "./src/libs/amap-wx.js":
/*!*****************************!*\
  !*** ./src/libs/amap-wx.js ***!
  \*****************************/
/***/ (function(module) {

function AMapWX(a) {
  this.key = a.key, this.requestConfig = {
    key: a.key,
    s: "rsx",
    platform: "WXJS",
    appname: a.key,
    sdkversion: "1.2.0",
    logversion: "2.0"
  };
}
AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({
    type: "gcj02",
    success: function success(a) {
      var c = a.longitude + "," + a.latitude;
      wx.setStorage({
        key: "userLocation",
        data: c
      }), b(c);
    },
    fail: function fail(c) {
      wx.getStorage({
        key: "userLocation",
        success: function success(a) {
          a.data && b(a.data);
        }
      }), a.fail({
        errCode: "0",
        errMsg: c.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;
    wx.request({
      url: "https://restapi.amap.com/v3/geocode/regeo",
      data: {
        key: b.key,
        location: c,
        extensions: "all",
        s: d.s,
        platform: d.platform,
        appname: b.key,
        sdkversion: d.sdkversion,
        logversion: d.logversion
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        var d, e, f, g, h, i, j, k, l;
        b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{
          iconPath: a.iconPath,
          width: a.iconWidth,
          height: a.iconHeight,
          name: f,
          desc: g,
          longitude: h,
          latitude: i,
          id: 0,
          regeocodeData: d
        }], a.success(l)) : a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }
  var b = this;
  a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";
    a.type && "forecast" == a.type && (e = "all"), wx.request({
      url: "https://restapi.amap.com/v3/weather/weatherInfo",
      data: {
        key: b.key,
        city: d,
        extensions: e,
        s: c.s,
        platform: c.platform,
        appname: b.key,
        sdkversion: c.sdkversion,
        logversion: c.logversion
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        function c(a) {
          var b = {
            city: {
              text: "城市",
              data: a.city
            },
            weather: {
              text: "天气",
              data: a.weather
            },
            temperature: {
              text: "温度",
              data: a.temperature
            },
            winddirection: {
              text: "风向",
              data: a.winddirection + "风"
            },
            windpower: {
              text: "风力",
              data: a.windpower + "级"
            },
            humidity: {
              text: "湿度",
              data: a.humidity + "%"
            }
          };
          return b;
        }
        var d, e;
        b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({
          forecast: b.data.forecasts[0]
        }) : a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }
  function e(e) {
    wx.request({
      url: "https://restapi.amap.com/v3/geocode/regeo",
      data: {
        key: b.key,
        location: e,
        extensions: "all",
        s: c.s,
        platform: c.platform,
        appname: b.key,
        sdkversion: c.sdkversion,
        logversion: c.logversion
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        var c, e;
        b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }
  var b = this,
    c = b.requestConfig;
  a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = {
      key: b.key,
      location: d,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
    a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({
      url: "https://restapi.amap.com/v3/place/around",
      data: e,
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        var c, d, e, f;
        if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({
              latitude: parseFloat(b.pois[d].location.split(",")[1]),
              longitude: parseFloat(b.pois[d].location.split(",")[0]),
              iconPath: e,
              width: 22,
              height: 32,
              id: d,
              name: b.pois[d].name,
              address: b.pois[d].address
            });
            f = {
              markers: c,
              poisData: b.pois
            }, a.success(f);
          }
        } else a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }
  var b = this,
    c = b.requestConfig;
  a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);
    var e = d + c.join("&");
    a.success({
      url: e
    });
  }
  var e,
    b = this,
    c = [],
    d = "https://restapi.amap.com/v3/staticmap?";
  c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
    c = b.requestConfig,
    d = {
      key: b.key,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
  a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({
    url: "https://restapi.amap.com/v3/assistant/inputtips",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.tips && a.success({
        tips: b.data.tips
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
    c = b.requestConfig,
    d = {
      key: b.key,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({
    url: "https://restapi.amap.com/v3/direction/driving",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.route && a.success({
        paths: b.data.route.paths,
        taxi_cost: b.data.route.taxi_cost || ""
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
    c = b.requestConfig,
    d = {
      key: b.key,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({
    url: "https://restapi.amap.com/v3/direction/walking",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.route && a.success({
        paths: b.data.route.paths
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
    c = b.requestConfig,
    d = {
      key: b.key,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({
    url: "https://restapi.amap.com/v3/direction/transit/integrated",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;
        a.success({
          distance: c.distance || "",
          taxi_cost: c.taxi_cost || "",
          transits: c.transits
        });
      }
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
    c = b.requestConfig,
    d = {
      key: b.key,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({
    url: "https://restapi.amap.com/v4/direction/bicycling",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.data && a.success({
        paths: b.data.data.paths
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, module.exports.AMapWX = AMapWX;

/***/ }),

/***/ "./src/libs/config.js":
/*!****************************!*\
  !*** ./src/libs/config.js ***!
  \****************************/
/***/ (function(module) {

var config = {
  key: '046ca5a0dcebf1bf180221740230d25f'
};
module.exports.Config = config;

/***/ }),

/***/ "./src/utils/functionUtils.ts":
/*!************************************!*\
  !*** ./src/utils/functionUtils.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBestQuestionResult: function() { return /* binding */ getBestQuestionResult; },
/* harmony export */   postUserLogin: function() { return /* binding */ postUserLogin; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 获取最佳题目评分结果
 * @param answerList
 * @param questions
 */

function getBestQuestionResult(answerList, questions) {
  var totalScore = 0;
  var _loop = function _loop() {
    var question = questions[i];
    var userAnswer = answerList[i];
    var option = question.options.find(function (opt) {
      return opt.key === userAnswer;
    });
    if (option) {
      totalScore += option.score;
    }
  };
  for (var i = 0; i < questions.length; i++) {
    _loop();
  }
  return totalScore;
}
function postUserLogin(userAccount, userPassword) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "http://127.0.0.1:8101/api/user/login",
    method: "POST",
    data: {
      userAccount: userAccount,
      userPassword: userPassword
    }
  }).then(function (res) {
    console.log(res);
    //成功后跳转到主页
    if (res.data.data) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().redirectTo({
        url: "/pages/my/index"
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: res.data.message,
        icon: "none"
      });
    }
  }).catch(function () {
    console.log("登录失败！");
  });
}

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/logo.jpg";

/***/ }),

/***/ "./src/assets/menu-exhibition.png":
/*!****************************************!*\
  !*** ./src/assets/menu-exhibition.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-exhibition.png";

/***/ }),

/***/ "./src/assets/menu-know.png":
/*!**********************************!*\
  !*** ./src/assets/menu-know.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-know.png";

/***/ }),

/***/ "./src/assets/menu-knowledge.png":
/*!***************************************!*\
  !*** ./src/assets/menu-knowledge.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-knowledge.png";

/***/ }),

/***/ "./src/assets/menu-me.png":
/*!********************************!*\
  !*** ./src/assets/menu-me.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-me.png";

/***/ }),

/***/ "./src/assets/menu-on-exhibition.png":
/*!*******************************************!*\
  !*** ./src/assets/menu-on-exhibition.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-on-exhibition.png";

/***/ }),

/***/ "./src/assets/menu-on-know.png":
/*!*************************************!*\
  !*** ./src/assets/menu-on-know.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-on-know.png";

/***/ }),

/***/ "./src/assets/menu-on-knowledge.png":
/*!******************************************!*\
  !*** ./src/assets/menu-on-knowledge.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-on-knowledge.png";

/***/ }),

/***/ "./src/assets/menu-on-me.png":
/*!***********************************!*\
  !*** ./src/assets/menu-on-me.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-on-me.png";

/***/ }),

/***/ "./src/assets/menu-on-red-path.png":
/*!*****************************************!*\
  !*** ./src/assets/menu-on-red-path.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-on-red-path.png";

/***/ }),

/***/ "./src/assets/menu-red-path.png":
/*!**************************************!*\
  !*** ./src/assets/menu-red-path.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/menu-red-path.png";

/***/ }),

/***/ "./src/data/exhibition_know_data.json":
/*!********************************************!*\
  !*** ./src/data/exhibition_know_data.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"knowTitle":"中国劳动组合"},{"id":2,"knowTitle":"武汉二七纪念馆"},{"id":3,"knowTitle":"弘扬“劳动精神”"},{"id":4,"knowTitle":"劳模精神劳动精神"},{"id":5,"knowTitle":"郑州二七纪念馆"},{"id":6,"knowTitle":"长辛店二七纪念馆"},{"id":7,"knowTitle":"顾正红纪念馆"},{"id":8,"knowTitle":"第一次全国劳动大会旧址"},{"id":9,"knowTitle":"“两路”精神纪念馆"},{"id":10,"knowTitle":"中国一汽红旗文化展馆"}]');

/***/ }),

/***/ "./src/data/exhibition_total_data.json":
/*!*********************************************!*\
  !*** ./src/data/exhibition_total_data.json ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"exhibitionName":"胡耀邦故居","categoryId":4,"eraIdList":[1,2,3],"exhibitionImage":"../../assets/1.jpeg","principalTel":"0731-83165999","exhibitionAddress":"浏阳市中和镇苍坊旅游区内(东侧)","subscribeWay":"微信预约，关注公众号“苍坊旅游区”","exhibitionProfile":"<p style=\\"text-indent:2em;\\"><strong>胡耀邦故居位</strong>于湖南省浏阳市中和镇苍坊村敏溪河畔，始建于清朝咸丰年间，房屋坐北朝南，土木结构，小青瓦顶，为典型的清末浏阳农村居民建筑。<strong>2012年1月</strong>，胡耀邦故里旅游景区获批国家AAAA级景区。<strong>2013年</strong>列入第七批全国重点文物保护单位。<strong>2016年12月</strong>，胡耀邦故居被列入《全国红色旅游经典景区名录》。<strong>2020年12月</strong>，被评定为第四批国家一级博物馆。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周日","exhibitionLongitude":113.879840742,"exhibitionLatitude":28.081694203,"videoList":[]},{"id":2,"exhibitionName":"湖南雷锋纪念馆","categoryId":2,"eraIdList":[1,2],"exhibitionImage":"../../assets/2.jpeg","principalTel":"0731-88107959","exhibitionAddress":"望城区雷锋街道正兴路42号","subscribeWay":"微信预约，关注公众号“湖南雷锋纪念馆”","exhibitionProfile":"<p style=\\"text-indent:2em;\\"><strong>湖南雷锋纪念馆</strong>是党员干部学习雷锋精神、开展党性教育的重要平台。馆区占地面积<strong>104000</strong>平方米，建筑面积约20000平方米，主要包括雷锋故居、雷锋生平事迹陈列馆、长沙国防人防教育馆、长沙好人馆等场馆。</p><p>\\t\\t生平事迹陈列馆分为“<strong>平凡的人生</strong>”“<strong>伟大的精神</strong>”“<strong>永远的榜样</strong>”等3个部分，客观真实展示了雷锋同志平凡而伟大的一生，突出了雷锋同志的成长历程及雷锋精神在雷锋家乡的起源和传承。于2012年成立雷锋精神宣讲团，现有讲师12名，有丰富的现场教学经验，先后打造了<strong>《新时代 雷锋与我们同行》《深刻解读雷锋“钉子精神”》《穿越时空的青春记忆——雷锋日记解读》</strong>等精品党课，社会反响良好。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周日","exhibitionLongitude":112.844558059,"exhibitionLatitude":28.203487702,"videoList":[]},{"id":3,"exhibitionName":"湖南党史纪念馆","categoryId":2,"eraIdList":[1,2,3],"exhibitionImage":"../../assets/3.jpeg","principalTel":"0731-83165999","exhibitionAddress":"望城区雷锋街道振兴路43号","subscribeWay":"景点预约","exhibitionProfile":"<p style=\\\\\\"text-indent:2em;\\\\\\">为更好地保存和发扬湖南的光荣党史，<strong>湖南党史陈列馆</strong>设计为一座大型省级综合性展览馆，于2011年12月开工建设。功能主要包括<strong>陈列展览、宣传教育、资料文物存储、研究培训等方面。</strong></p><p class=\\"ql-align-justify\\">\\t\\t由于<strong>紧邻雷锋纪念馆</strong>，建成后的湖南党史陈列馆将与其形成湖南爱国主义教育的\\"<strong>大本营</strong>\\"。湖南党史陈列馆紧邻长沙市雷锋纪念馆，建筑面积<strong>15000</strong>平方米，展厅面积<strong>6000</strong>平方米，总投资<strong>1.5</strong>亿元，计划在2013年毛主席诞辰120周年之际开馆。</p><p class=\\"ql-align-justify\\">\\t\\t陈列馆将重点展示<strong>中共湖南地方组织的发展历程</strong>和<strong>湖南党史军史人物的光辉业绩</strong>，展现党在湖南领导人民进行革命、建设和改革所取得的辉煌成就和宝贵经验。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周日","exhibitionLongitude":112.838604904,"exhibitionLatitude":28.206588401,"videoList":[]},{"id":4,"exhibitionName":"杨开慧纪念馆","categoryId":2,"eraIdList":[1],"exhibitionImage":"../../assets/4.jpeg","principalTel":"15538520101","exhibitionAddress":"长沙县开慧镇开慧村178号","subscribeWay":"微信预约，关注公众号“骄杨”","exhibitionProfile":"<p class=\\"ql-align-justify\\" style=\\"text-indent:2em;\\"><strong>杨开慧纪念馆</strong>位于长沙县开慧镇，成立于1966 年，占地约126亩，建筑面积9600平方米，由杨开慧故居、杨开慧烈士陵园、杨开慧生平业绩陈列馆、杨公庙等四部分组成。</p><p>\\t\\t生平业绩陈列馆分为三层：<strong>一楼</strong>为杨开慧烈士生平业绩陈列展，<strong>二楼</strong>为杨昌济生平业绩陈列展、毛岸英生平业绩陈列展、红色家风陈列展，<strong>三楼</strong>为多媒体室，可容纳140人上课。</p><p style=\\"text-indent:2em;\\"><strong>纪念馆开发了《绚丽霞光》《红色家风代代传》《热土忠魂》</strong>等系列微党课和现场教学<strong>《一门三烈》</strong>，社会反响良好。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周日","exhibitionLongitude":113.205071819,"exhibitionLatitude":28.590929952,"videoList":[]},{"id":5,"exhibitionName":"秋收起义文家市会师纪念馆","categoryId":2,"eraIdList":[1],"exhibitionImage":"../../assets/5.jpeg","principalTel":"0731-83768005","exhibitionAddress":"浏阳市文家市镇人民路34号","subscribeWay":"微信预约，关注公众号“秋收红”","exhibitionProfile":"<p class=\\"ql-align-justify\\" style=\\"text-indent:2em;\\"><strong>秋收起义文家市会师纪念馆</strong>有<strong>教学培训区</strong>（秋收起义会师旧址、秋收起义陈列馆、积谷仓、秋收广场、“光辉起点”红旗雕塑、“星火燎原”、红源宾馆）、<strong>红色拓展区</strong>（湘赣边秋收起义研学旅行基地）、<strong>农耕文化区</strong>（里仁屋场、田间课堂实践基地及周边民宿）、<strong>规划建设的军事体验区</strong>（高升岭红军主题公园、红军战地医院等）。</p><p>\\t\\t陈列馆建筑面积<strong>6957</strong>平方米，围绕“光辉起点”主题，设置为“<strong>序厅、高举新旗帜、开辟新道路、创建新军队、苦难辉煌”</strong>等五个部分，充分展示秋收起义红色文化底蕴。</p><p>\\t\\t纪念馆注重培养本土实践型讲师，同时外聘名师，建立专兼结合的师资库，高质量打造了《文家市的抉择》《实事求是——秋收起义的精髓》《毛泽东与秋收起义》等一批核心课程，取得较好的社会反响。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周日","exhibitionLongitude":113.927197452,"exhibitionLatitude":28.046403411,"videoList":[]},{"id":6,"exhibitionName":"八路军武汉办事处旧址纪念馆","categoryId":2,"eraIdList":[1],"exhibitionImage":"../../assets/6.jpeg","principalTel":"027-82735576","exhibitionAddress":"江岸区长春街57号（武汉市江岸区长春街与大连路交汇处的西北角）","subscribeWay":"电话预约","exhibitionProfile":"<p style=\\"text-indent:2em;\\"><strong>八路军武汉办事处旧址纪念馆</strong>是为了纪念和缅怀<strong>周恩来、董必武等老一辈无产阶级革命家的丰功伟绩</strong>。<strong>1977年</strong>，湖北省委、省人民政府，武汉市委、市人民政府做出筹办复原“八路军武汉办事处旧址”和“周恩来同志抗战初期在武汉”陈列馆的决定。<strong>1978年初</strong>，筹建工作正式启动。<strong>1979年3月5日</strong>，开馆，叶剑英为纪念馆题写了馆标。<strong>2020年10月</strong>，国家文物局和湖北省、武汉市文旅部门组织对旧址进行了全面修缮。<strong>2021年5月16日</strong>，闭馆修缮的八路军武汉办事处旧址以全新的面貌重新对公众开放。<strong>截至2019年末</strong>，八路军武汉办事处旧址纪念馆馆藏文物有4742件（套），珍贵文物383件（套）。</p><p>\\t\\t八路军武汉办事处旧址纪念馆为<strong>湖北省文物保护单位</strong>、<strong>爱国主义教育基地</strong>、<strong>国家三级博物馆</strong>。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周三闭馆","exhibitionLongitude":114.30395140879948,"exhibitionLatitude":30.608549362310136,"videoList":[]},{"id":7,"exhibitionName":"刘少奇同志纪念馆","categoryId":2,"eraIdList":[1,2],"exhibitionImage":"../../assets/7.jpeg","principalTel":"0731-87094027","exhibitionAddress":"宁乡市花明楼镇安源路30号","subscribeWay":"微信预约，关注公众号“花明楼景区”","exhibitionProfile":"<p style=\\"text-indent:2em;\\"><strong>刘少奇同志纪念馆</strong>占地面积1300亩，主要包括<strong>刘少奇同志故居</strong>、<strong>刘少奇故里门楼广场</strong>、<strong>铜像广场</strong>、<strong>生平业绩陈列馆</strong>、<strong>刘少奇工运历程专题馆</strong>、<strong>刘少奇文物保护中心</strong>、<strong>刘少奇母校炭子冲学校旧址</strong>，点缀以花明楼、修养亭、万德鼎、刘少奇同志坐过的飞机、一叶湖、柳叶湖、安湖塘山水太极图、炭子冲民俗文化村等景观。</p><p>\\t\\t纪念馆是刘少奇同志文物资料收藏研究中心和思想宣传阵地，深入挖掘刘少奇同志的品质，整合优质红色资源，推出“六个一”主题活动——敬献一个花篮、重温一次入党誓词、参观一个展览、聆听一堂党课、阅读一本修养、召开一次专题讨论，致力于让党员干部学习刘少奇同志的<strong>“五个光辉榜样”</strong>，教育引导广大党员干部<strong>明确理想信念，筑牢信仰之基，补足精神之钙</strong>。</p>","exhibitionStartTime":"09:00","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周日","exhibitionLongitude":112.63899765067896,"exhibitionLatitude":28.04187063378104,"videoList":[]},{"id":8,"exhibitionName":"湖北省博物馆","categoryId":1,"eraIdList":[3,4],"exhibitionImage":"../../assets/8.jpg","principalTel":"027-88516352","exhibitionAddress":"湖北省武汉市武昌区东湖路160号","subscribeWay":"微信预约，关注公众号“湖北省博物馆”","exhibitionProfile":"<p class=\\"ql-align-justify\\">\\t<strong>湖北省博物馆</strong>筹备处成立于1953年，其前身可追溯至1928年<strong>湖北省立公共科学实验馆</strong>，1963年定名湖北省博物馆。1989年，湖北省文物考古研究所从湖北省博物馆分出后成立独立机构。2002年，湖北省博物馆、湖北省文物考古研究所合署办公。2023年2月，湖北省博物馆与湖北省文物考古研究院分开独立运行，2023年8月，湖北省文物交流信息中心、省工艺美术研究所整体并入湖北省博物馆。</p><p class=\\"ql-align-justify\\">\\t湖北省博物馆作为<strong>荆楚文化的渊薮殿堂</strong>、<strong>中央与地方共建国家级重点博物馆</strong>，是2018年中印元首外交的“ 国家文化客厅”。 湖北省博物馆现有藏品46万余件 ( 套 ) ， 其中国家一级 文 物 1 0 9 5 件 ( 套 ) ，共有“十大镇馆之宝”。此外，还拥有国家级非物质文化遗产项目1项，省级非物质文化遗产项目5项，区级非物质文化遗产项目1项，馆藏曾侯乙编钟入选第五批中国档案文献遗产名录。</p><p class=\\"ql-align-justify\\">\\t湖北省博物馆形成了<strong>“四馆三中心两基地”的布局</strong>，总建筑面积达12 .5万平方米、展览面积达3. 8万平方米，位居全国博物馆前列。</p><p class=\\"ql-align-justify\\">\\t先后举办曾侯乙等数十个基本陈列，以及意大利乌菲齐博物馆珍品展等近200 个特展，多次荣获全国博物馆十大陈列展览精品奖等国家级奖项。是全国爱国主义教育示范基地、全国科普教育基地、全国首个海峡两岸考古教学交流基地、国家5A级旅游景区、国家级文明旅游示范单位，出土木漆器保护国家文物局重点科研基地、全国古籍重点保护单位，是中国博物馆协会常务理事单位、乐器专业委员会主任委员单位、中国-意大利博物馆联盟中方主席单位、湖北省博物馆协会、湖北省工艺美术学会理事长单位。</p>","exhibitionStartTime":"08:30","exhibitionFinishTime":"17:00","exhibitionNote":"周一至周五","exhibitionLongitude":114.35991473579422,"exhibitionLatitude":30.5638205646031,"videoList":[]}]');

/***/ }),

/***/ "./src/data/knowQuestions.json":
/*!*************************************!*\
  !*** ./src/data/knowQuestions.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"options":[{"score":0,"value":"遵义会议","key":"A"},{"score":10,"value":"八七会议","key":"B"},{"score":0,"value":"中共六大","key":"C"},{"score":0,"value":"洛川会议","key":"D"}],"title":"中国共产党确定实行土地革命和武装起义方针的会议是?"},{"options":[{"score":10,"value":"江西瑞金","key":"A"},{"score":0,"value":"湖北武汉","key":"B"},{"score":0,"value":"河北石家庄","key":"C"},{"score":0,"value":"辽宁沈阳","key":"D"}],"title":"中华苏维埃共和国临时中央政府成立，首府在哪?"},{"options":[{"score":0,"value":"平型关大捷","key":"A"},{"score":0,"value":"孟良战役","key":"B"},{"score":10,"value":"百团大战","key":"C"}],"title":"八路军总部在华北发动了一次大规模的对日进攻战役，此战役被称为"},{"options":[{"score":10,"value":"延安自然科学院","key":"A"},{"score":0,"value":"自然科学研究会","key":"B"},{"score":0,"value":"马列学院","key":"C"}],"title":"中国共产党历史上第一个培养科学技术人才的阵地是1940年8月创办的什么学院?"},{"options":[{"score":0,"value":"洛川会议","key":"A"},{"score":0,"value":"八七会议","key":"B"},{"score":0,"value":"遵义会议","key":"C"},{"score":10,"value":"三湾改编","key":"D"}],"title":"什么会议后将党的支部建在连上,是党领导和建设新型人民军队的重要开端?"},{"options":[{"score":0,"value":"湘鄂西革命根据地","key":"A"},{"score":10,"value":"井冈山革命根据地","key":"B"},{"score":0,"value":"闽西革命根据地","key":"C"},{"score":0,"value":"鄂豫皖革命根据地","key":"D"}],"title":"大革命失败后，中国共产党创建的第一个农村革命根据地是?"},{"options":[{"score":10,"value":"晋察冀","key":"A"},{"score":0,"value":"晋冀豫","key":"B"},{"score":0,"value":"晋西北","key":"C"},{"score":0,"value":"豫皖北","key":"D"}],"title":"什么抗日根据地是中国共产党领导的八路军在抗日战争时期创建的第一个敌后根据地"},{"options":[{"score":10,"value":"《井冈山土地法》","key":"A"},{"score":0,"value":"《兴国土地法》","key":"B"},{"score":0,"value":"《中华苏维埃共和国土地法》","key":"C"},{"score":0,"value":"《中国土地法大纲》","key":"D"}],"title":"1928年底，我党历史上制定的第一个土地法是?"},{"options":[{"score":0,"value":"广东","key":"A"},{"score":0,"value":"广西","key":"B"},{"score":10,"value":"湖南","key":"C"},{"score":0,"value":"江西","key":"D"}],"title":"什么农民运动成为北阀战争时期全国农民运动的中心"},{"options":[{"score":0,"value":"华东战区","key":"A"},{"score":0,"value":"华东军区","key":"B"},{"score":10,"value":"华北战区","key":"C"},{"score":0,"value":"华北军区","key":"D"}],"title":"1948年5.20日,晋冀鲁豫和晋察冀军区正式合并成立?"}]');

/***/ })

}]);
//# sourceMappingURL=common.js.map