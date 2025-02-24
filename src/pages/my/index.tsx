import { View, Image, Text, Input, Button } from '@tarojs/components';
import {AtDivider, AtModal} from "taro-ui";
import Taro from "@tarojs/taro";
import React, { useState } from 'react';
import "./index.scss";
import GlobalMenu from "../../components/GlobalMenu";


export default () => {
  const [isShowPop, setIsShowPop] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('/default/avatar.png'); // Replace with your default avatar URL
  const [nickName, setNickName] = useState('');
  const [neironglan, setNeironglan] = useState([
    // Replace with your content array
    { icon: '/img/icon1.png', text: '点赞' },
    { icon: '/img/icon2.png', text: '打卡' },
    { icon: '/img/icon2.png', text: '徽章' },
  ]);

  const showPopup = () => setIsShowPop(true);
  const closePopup = () => setIsShowPop(false);
  const getAvatarUrl = (e)=>{
    setAvatarUrl(e.detail.avatarUrl);
    console.log(e.detail);
  }
  const getNickName =(e)=>{
    setNickName(e.detail.nickName);
    console.log(e.detail);
  }
  const getClickIndex =(index)=>{
    console.log("点击的哪一项",index);
  }
  const submitGetUser = () => {
    console.log('User submitted', { avatarUrl, nickName });
    closePopup();
  };
  const tips = () => {
    Taro.showToast({
      title: '功能仍在开发中，敬请期待~',
    })
  };

  return (
    <View className="myPage">
      <View className="head">
        <View className="wx-user_title">
          <View className="wx-avatar">
            <Image
              src={avatarUrl}
              mode="aspectFill"
              className="wx-avatar-image"
              onClick={showPopup}
            />
          </View>
          <View className="wx-nickname">
            <Text onClick={showPopup}>{nickName || '点击设置昵称'}</Text>
          </View>
        </View>
      </View>

      <View className="news" onClick={tips}>
        <View className="items-new">
          <Image className="items-img" src="/img/new.png" />
          <View className="item-font">收藏记录</View>
        </View>
      </View>

      <AtModal
        className="ul"
        confirmText='确认'
        isOpened={isShowPop}
        onClose={closePopup}
        onConfirm={submitGetUser}
      >
        <View className="ub-get_user">
          <Button openType="chooseAvatar" onChooseAvatar={getAvatarUrl}>
            <Image
              className="ub-get_user_image"
              src={avatarUrl}
              mode="aspectFit"
            />
          </Button>
            <View className="ub-get_user_image_tip">点击更换头像</View>
            <View className="ub-get_user_nickName_box">
              <Input
                className="ub-get_user_nickName"
                type="nickname"
                placeholder="请输入昵称"
                value={nickName}
                onNickNameReview={getNickName}
              />
            </View>
          {/*<View className="ub-button1" onClick={submitGetUser}>*/}
          {/*  确定*/}
          {/*</View>*/}
        </View>
      </AtModal>

      <View className="body">
        <View className="wxstyle">
          {neironglan.map((item, index) => (
            <View
              key={index}
              className="items"
              onClick={getClickIndex(index)}
              data-icon={item.icon}
              data-text={item.text}
            >
              <Image className="items-img" src={item.icon} />
              <View className="item-font">
                {item.text}
                <AtDivider  className="item-divider" />
              </View>
            </View>
          ))}
        </View>
      </View>
      {/*  菜单栏目*/}
      <GlobalMenu />
    </View>
  );
};
