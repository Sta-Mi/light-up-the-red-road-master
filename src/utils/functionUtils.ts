/**
 * 获取最佳题目评分结果
 * @param answerList
 * @param questions
 */
import Taro from "@tarojs/taro";

export function getBestQuestionResult(answerList, questions) {
  let totalScore = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const userAnswer = answerList[i];
    const option = question.options.find(opt => opt.key === userAnswer);
    if (option) {
      totalScore += option.score;
    }
  }

  return totalScore;
}

export function postUserLogin(userAccount: string, userPassword: string) {
  Taro.request({
    url:"http://127.0.0.1:8101/api/user/login",
    method:"POST",
    data: {
      userAccount: userAccount,
      userPassword: userPassword,
    }
  }).then((res:any)=>{
    console.log(res);
    //成功后跳转到主页
    if(res.data.data){
      Taro.redirectTo({
        url: "/pages/my/index",
      });
    }else {
      Taro.showToast({
        title: res.data.message,
        icon: "none",
      });
    }
  }).catch(()=>{
    console.log("登录失败！");
  });
}
