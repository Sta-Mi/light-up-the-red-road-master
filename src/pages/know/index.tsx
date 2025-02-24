import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";
import {Image, View} from "@tarojs/components";
import huiZhang from "../../assets/huizhang.png";
import onSelectHuiZhang from "../../assets/on-select-huizhang.jpg";
import exhibitionKnowDara from "../../data/exhibition_know_data.json";
import GlobalFooter from "../../components/GlobalFooter";
import "./index.scss";
import GlobalMenu from "../../components/GlobalMenu";


/**
 * 展馆闯关
 */
export default () => {
  //获取数据（调用api）
  const maxKnowListLength = exhibitionKnowDara.length;
  const exhibitionKnowData = exhibitionKnowDara;

  const [selectKey, setSelectKey] = useState<number>(0);
  //const [isComplete, setIsComplete] = useState(false);
  let keyFromStore = Taro.getStorageSync("selectKey");//从knowResult页面中获取到selectKey

  useEffect(() => {
    //本页面的selectKey值
    if (keyFromStore) {
      setSelectKey(keyFromStore);
    }else {
      keyFromStore = 0;
    }
  }, []);
  const handleClick = (key: number) => {
    /*假设key=0，selectKey = 0
    * 1. 当knowResultScore>=60表示闯关成功，接受到knowResult的参数keyFromStore===1
    *   则key 0 2 3不能点击(无法跳转，点击0提示已经闯关成功，点击1跳转，点击23提示完成前置闯关),
    * 2. 当knowResultScore<60时，接收到的knowResult的参数为仍为keyFromStore===0
    *   表示闯关失败，则key 1 2 3 不能点击(点击0跳转，点击1提示完成前置闯关，点击23提示完成前置闯关)，
    *
    * */
    if(key === keyFromStore){
      setSelectKey(key);
      Taro.setStorageSync("selectKey", key);//往doKnow页面传递，用于knowResult接受selectKey
      Taro.navigateTo({
        url: "/pages/doKnow/index",
      });
    }else if(key > keyFromStore){
      Taro.showToast({
        title: "请先完成前置闯关",
        icon: "error",
      });
    }else if(key < keyFromStore){
      Taro.showToast({
        title: "已经闯关成功，继续加油",
        icon: "success",
      });
    }else {
      console.log("数组下标溢出");
    }


  };

  const getIconSerialStyle = (key) => {
    //当selectKey=3时候，红色：key=1，key=2，key=3，key=4
    //当selectKey=1时候，红色：key=1,key=2
    if (key<=selectKey) {
      return {
        backgroundColor: '#de1f1a',
        color: "white",
      };
    }
    return {};
  };

  return (
    <View className="indexPage">
      <View className="at-article__h1 title">展馆闯关</View>
      <View className="at-article__h2 subTitle">点击展馆即可参与展馆答题</View>
      <View className="knowView">
        <View className="knowTitle">———— 选择关口闯关 ————</View>
        <View className="knowInfo">
          <View className="infoTotal">
            <View className="infoNumber">{maxKnowListLength}</View>
            <View className="infoText">关口总数</View>
          </View>
          <View className="infoTotal">
            <View className="infoNumber">{selectKey}</View>
            <View className="infoText">成功通关</View>
          </View>
        </View>
        <View className="at-row at-row--wrap iconView">
          {exhibitionKnowData.map((item, index) => (
            <View
              key={index}
              className="at-col at-col-4 iconItem"
              onClick={() => handleClick(index)}
            >
              <Image className="iconImage" src={index<selectKey ? onSelectHuiZhang :huiZhang} />
              <View className="iconTitle">{item.knowTitle}</View>
              <View className="iconSerial" style={getIconSerialStyle(index)}>
                第{item.id}关
              </View>
            </View>
          ))}
        </View>
      </View>
      <GlobalFooter />
      <GlobalMenu />
    </View>
  );
};
