import {Image, Input, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { Component } from "react";
import amapFile from "../../libs/amap-wx";
import config from "../../libs/config";
import returnIcon from "../../assets/arrow_s_line_left.png";
import "./index.scss";


let lonlat;
let city;
class InputtipsPage extends Component {
  $instance = Taro.getCurrentInstance();
  state = {
    tips: [],
    isFocus: true
  };

  componentDidMount() {
    //因为poi的bindInput()函数传递了路由参数
    const paramsFromPoi = this.$instance.router?.params;
    lonlat = paramsFromPoi?.lonlat;
    console.log("搜索页面加载时instance.router.params：",paramsFromPoi);
    console.log("搜索页面加载时，是否获取到了lonlat和cicy：",lonlat);
  }

  bindInput = (e) => {
    let that = this;
    const keywords = e.target.value;
    const key = config.Config.key;
    const myAmapFun = new amapFile.AMapWX({ key });

    myAmapFun.getInputtips({
      keywords: keywords,
      location: lonlat,
      city: city,
      success: (data) => {
        console.log("搜索页面data：",data);
        if (data && data.tips) {
          that.setState({
            tips: data.tips
          });
        }
      }
    });
  };

  bindSearch = (e) => {
    const keywords = e.currentTarget.dataset.keywords;
    const locationArray = e.currentTarget.dataset.location.split(',');
    const keywordsLongitude = parseFloat(locationArray[0]);
    const keywordsLatitude = parseFloat(locationArray[1]);
    const url = `/pages/poi/index?searchKeywords=${keywords}&searchLatitude=${keywordsLatitude}&searchLongitude=${keywordsLongitude}`;

    console.log("搜索页面URL:",url);
    // Taro.setStorageSync("keywords",keywords);
    // Taro.setStorageSync("latitude",keywordsLatitude);
    // Taro.setStorageSync("longitude",keywordsLongitude);

    Taro.navigateTo({
      url
      // url: "/pages/poi/index",
    });
  };

  redirectToPoiPage = () =>{
    Taro.redirectTo({
      url: '/pages/poi/index',
    })
  };

  render() {
    const { tips } = this.state;

    return (

      <View className="section">
        <Image
          style={{ width: '27px', height: '27px'}}
          className="redirect_to_poi_page"
          mode="scaleToFill"
          src={returnIcon}
          onClick={this.redirectToPoiPage}
        />
        <Input
          className="section-input"
          onInput={this.bindInput.bind(this)}
          placeholder="搜索"
          focus
        />
        {tips.map(({location, name}) => (
          <View
            key={name}
            data-keywords={name}
            data-location={location}
            className="text_box"
            onClick={this.bindSearch.bind(this)}
          >
            {name}
          </View>
        ))}
      </View>
    );
  }
}

export default InputtipsPage;
