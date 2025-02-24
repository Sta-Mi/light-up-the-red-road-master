import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton, AtCountdown, AtProgress, AtRadio, AtTag } from "taro-ui";
import { useEffect, useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/knowQuestions.json";
import "./index.scss";

/**
 * 答题闯关页面
 */
export default () => {
  //第一步：获取当前是哪个展馆的答题->获取不同的题库(获取know页面跳转到当前页的selectKey)
  //第二步：编写样式
  //第三步：实现写题
  // 当前题目序号（从 1 开始）
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}. ${option.value}`, value: option.key };
  });
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  // 回答列表
  const [answerList] = useState<string[]>([]);
  //页面加载前
  useEffect(() => {
    //获取当前题目和选项
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);

  }, [current]);

  // 计时器
  const onTimeUp = () => {
    Taro.showToast({
      title: "时间到",
      icon: "error",
      duration: 2000,
    });
    //直接答案解析页面
    // 传递答案
    Taro.setStorageSync("answerList", answerList);
    // 跳转到结果页面
    Taro.navigateTo({
      url: "/pages/knowResult/index",
    });
  };

  return (
    //<View>
    //<Text>当前的 key 是: {selectKey}</Text>
    //</View>
    <View className="doKnowPage">
      <View className="at-article__h1 title">红色展馆知识闯关</View>
      <View className="progressView">
        <View className="progressTimeView">
          <View className="progressText">
            {current}/{questions.length}
          </View>
          <AtCountdown
            isShowHour={false}
            minutes={5}
            seconds={0}
            className="progressTime"
            onTimeUp={onTimeUp}
          />
        </View>

        <AtProgress
          percent={parseInt(current + "0")}
          strokeWidth={10}
          color="#FFFFFF"
          status="progress"
          className="progressBar"
        ></AtProgress>
      </View>
      <View className="questionView">
        <View className="questionTitle">
          <AtTag className="questionType">单选</AtTag>
          <View className="at-article__h2 subTitle">
            {currentQuestion.title}
          </View>
        </View>
        <View className="options-wrapper">
          <AtRadio
            className="optionItem"
            options={questionOptions}
            value={currentAnswer}
            onClick={(value) => {
              setCurrentAnswer(value);
              // 记录回答
              answerList[current - 1] = value;
            }}
          />
        </View>
        {current < questions.length && (
          <AtButton
            type="primary"
            className="controlBtn"
            disabled={!currentAnswer}
            onClick={() => setCurrent(current + 1)}
          >
            下一题
          </AtButton>
        )}
        {current == questions.length && (
          <AtButton
            type="primary"
            className="controlBtn"
            disabled={!currentAnswer}
            onClick={() => {
              // 传递答案
              Taro.setStorageSync("answerList", answerList);
              // 跳转到结果页面
              Taro.navigateTo({
                url: "/pages/knowResult/index",
              });
            }}
          >
            提交答案
          </AtButton>
        )}
        {current > 1 && (
          <AtButton
            className="controlBtn"
            onClick={() => setCurrent(current - 1)}
          >
            上一题
          </AtButton>
        )}
      </View>
      <GlobalFooter />
    </View>
  );
};
