export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/know/index",
    "pages/doKnow/index",
    "pages/knowResult/index",
    "pages/exhibition/index",
    "pages/exhibitionDetail/index",
    "pages/poi/index",
    "pages/inputtips/index",
    "pages/my/index",
    "pages/userRegister/index",
    "pages/redLearn/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "红途",
    navigationBarTextStyle: "black",
  },
  networkTimeout:{
    "request": 6000
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  requiredPrivateInfos: ["chooseLocation", "getLocation"]
});
