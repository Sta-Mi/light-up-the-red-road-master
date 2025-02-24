import { View, Image, RichText  } from "@tarojs/components";
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import exhibitionTotalData from "../../data/exhibition_total_data.json";
import "./index.scss";

/**
 * 展馆详情页(需要ID->使用存储的方式)
 */
interface State {
  exhibitionItem: any,
  // nodes: any,
}
export default class PoiPage extends Component<{}, State> {
  $instance = Taro.getCurrentInstance();
  state : State = {
    exhibitionItem: {},
    // nodes: [],
  }


  // 页面初始加载时
  componentDidMount() {
    if(this.$instance.router?.params){
      const id = this.$instance.router?.params.exhibitionId;
      //根据id调用后端接口获取数据
      const exhibitionItem=exhibitionTotalData.filter(item => item.id === Number(id));
      if(exhibitionItem){
        console.log(exhibitionItem);
      }
      this.setState({
        exhibitionItem:exhibitionItem[0],
        // nodes: [{
        //   name: 'div',
        //   attrs: {
        //     class: 'profile_class',
        //     style: 'font-size: 60px; color: red;'
        //   },
        //   children: [{
        //     type: 'text',
        //     // text: '测试',
        //     text: exhibitionItem[0].exhibitionProfile,
        //   }]
        // }]
      })
    }
  }
  render() {
  return (
    <View className="exhibitionDetail">
      <Image className="exhibitionImage" src={this.state.exhibitionItem.exhibitionImage} />
      <View className="at-article__h1 title">{this.state.exhibitionItem.exhibitionName}</View>
      <View className="info-view info">
      </View>
      <View className="info-view profile">
        {/*<RichText nodes={this.state.nodes} />*/}
        <RichText nodes={this.state.exhibitionItem.exhibitionProfile} />
      </View>
      <View className="info-view video"></View>
    </View>
  );
  }
};


