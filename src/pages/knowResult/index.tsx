import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import exhibitionKnowDara from "../../data/exhibition_know_data.json";
import questions from "../../data/knowQuestions.json";
import { getBestQuestionResult } from "../../utils/functionUtils";
import "./index.scss";

/**
 * 展馆闯关结果页面
 */
export default () => {

  const maxKnowListLength  = exhibitionKnowDara.length;

  //第一步：获取doKnow页面传递过来的selectKey
  //const [selectKey, setSelectKey] = useState<number>(1);
  const keyFromStore = Taro.getStorageSync("selectKey");
  // 第一步：从doKnow页面获取答案
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  //第二步：需要先改得分方法 第三步：当passValue=knowResultScore>=60 ? "闯关成功" || "闯关失败"

  // 第二步：获取测试结果
  const knowResultScore = getBestQuestionResult(answerList, questions);
  const [passValue, setPassValue] = useState<string>("闯关失败");
  const [storeColor, setStoreColor] = useState<string>("#e69a48");
  const [valueColor, setValueColor] = useState<string>("#e69a48");

  // 第三步：
  //页面加载前
  useEffect(() => {
    //根据测试结果返回不同的结论
    if (knowResultScore >= 60) {
      setPassValue("闯关成功");
    } else {
      setPassValue("闯关失败");
      setStoreColor("#8a0b0a");
      setValueColor("#8a0b0a");
    }
  }, []);

  return (
    <View className="knowResultPage">
      <View className="at-row">
        <View className="at-col at-article__h1 title">
          <AtButton
            className="enterBtn"
            onClick={() => {
              Taro.setStorageSync("selectKey", knowResultScore>=60?(keyFromStore+1):keyFromStore);
              Taro.reLaunch({
                url: "/pages/know/index",
              });
              // Taro.showToast({
              //   title: `${keyFromStore}`,
              //   icon: "error",
              //   duration: 2000,
              // });
            }}
          >
            返回
          </AtButton>
        </View>
        <View className="at-col at-article__h1 title">答题解析</View>
        <View className="at-col at-article__h1 title">
          {knowResultScore >= 60 && keyFromStore < maxKnowListLength-1 ?(
            <AtButton
              className="enterBtn"
              onClick={() => {
                Taro.setStorageSync("selectKey", (keyFromStore + 1));
                Taro.reLaunch({
                  url: "/pages/doKnow/index",
                });
              }}
            >
              下一关
            </AtButton>
          ):(<View></View>)}
        </View>
      </View>

      <View style={{ color: storeColor }} className="at-article__h2 subTitle">
        {knowResultScore}
      </View>
      <View style={{ color: valueColor }} className="at-article__h2 subTitle">
        {passValue}
      </View>
      {/*解析列表*/}
      <View className="answerDetailView">
        {questions.map((question, index) => {
          const userAnswer = answerList[index];
          const correctOption = question.options.find((opt) => opt.score > 0);

          return (
            <View key={index} className="questionItemView">
              <View className="questionTitle">
                {index + 1}.{question.title}
              </View>
              {question.options.map((option) => {
                let backgroundColor = "";
                let color = "";
                if (option.key === userAnswer) {
                  backgroundColor = option.score > 0 ? "#bfd9d0" : "#dbbfbc";
                  color = option.score > 0 ? "#317a61" : "#8a0b0a";
                } else if (option.key === correctOption?.key) {
                  backgroundColor = "#bfd9d0";
                  color = "#317a61";
                }

                return (
                  <View
                    key={option.key}
                    style={{ backgroundColor: backgroundColor, color: color }}
                    className="questionSelects"
                  >
                    <View className="questionSelectItem">
                      {option.key}：{option.value}
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
      <GlobalFooter />
    </View>
  );
};
