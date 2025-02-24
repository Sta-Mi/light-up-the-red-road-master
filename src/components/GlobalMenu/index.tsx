import {Image, View} from "@tarojs/components";
import {AtTabBar} from "taro-ui";
import React, {Component} from "react";
import logo from "../../assets/logo.jpg";
import menuExhibition from "../../assets/menu-exhibition.png";
import menuOnExhibition from "../../assets/menu-on-exhibition.png";
import menuMe from "../../assets/menu-me.png";
import menuOnMe from "../../assets/menu-on-me.png";
import menuKnow from "../../assets/menu-know.png";
import menuOnKnow from "../../assets/menu-on-know.png";
import menuRedPath from "../../assets/menu-red-path.png";
import menuOnRedPath from "../../assets/menu-on-red-path.png";
import menuKnowledge from "../../assets/menu-knowledge.png";
import menuOnKnowledge from "../../assets/menu-on-knowledge.png";
import "./index.scss";
import Taro from "@tarojs/taro";


/**
 * 全局菜单组件
 */
interface State {
  openMenuList: boolean,
  current: number,
  maskDisplay: string,

}
export default class GlobalMenu extends Component<{}, State> {
  state : State = {
    openMenuList: false,
    current: -1,
    maskDisplay: 'none'
  };

  // 显示 or 关闭弹窗
  showMenuList=()=>{
    this.setState({
      openMenuList: this.state.openMenuList ? false : true,
      maskDisplay: 'block'
    });
  }

  //跳转页面
  naviToPage = (e)=>{
    console.log(e);//从0开始
    //获取点击的current-更新current-根据对应的current跳转到不同页面
    if(e === 0){
      Taro.redirectTo({
        url: "/pages/exhibition/index",
      });
    }
    else if(e === 1){
      Taro.redirectTo({
        url: "/pages/know/index",
      });
    }
    else if(e === 2){
      Taro.redirectTo({
        url: "/pages/poi/index",
      });
    }else if(e === 3){
      Taro.redirectTo({
        url: "/pages/redLearn/index",
      });
    }else {
      Taro.redirectTo({
        url: "/pages/my/index",
      });
    }
    this.setState({
      openMenuList: false
    })
  }

  //隐藏蒙层 todo 公用方法
  hideMaskAndDetailInfo = () =>{
    this.setState({
      maskDisplay: 'none',
      openMenuList: false
    })
  }

  render() {
    return (
      <View className="globalMenu">
        <View className="mask" style={{ display: this.state.maskDisplay }} onClick={this.hideMaskAndDetailInfo}></View>
        <View className="menu_content">
          <Image
            style={{ width: '46px', height: '46px' }}
            className="menu_image"
            mode="scaleToFill"
            src={logo}
            onClick={this.showMenuList}
          />
          <View className="float_menu_list" style={{display:this.state.openMenuList?"block":"none"}}>
            <AtTabBar
              tabList={[
                { title: '展馆', image: menuExhibition, selectedImage: menuOnExhibition },
                { title: '关卡', image: menuKnow ,selectedImage: menuOnKnow},
                { title: '路线', image: menuRedPath, selectedImage: menuOnRedPath},
                { title: '知识', image: menuKnowledge,selectedImage: menuOnKnowledge},
                { title: '活动', image: menuMe,selectedImage: menuOnMe}
              ]}
              onClick={this.naviToPage.bind(this)}
              current={this.state.current}
            />
          </View>
        </View>
      </View>
    );
  }
};
