import { Button, Form, Input, Label, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { postUserLogin } from "../../utils/functionUtils";
import "./index.scss";

/**
 * 登录页面
 */
interface State {
  showAccountAlter: String,
  showPassAlter: String,
}
export default class UserLoginPage extends Component<{},State> {
  state : State = {
    showAccountAlter: 'none',
    showPassAlter: 'none',
  }

  // 提交表单
  formSubmit = (e) => {
    if(this.state.showAccountAlter != "none" || this.state.showPassAlter != "none"){
      Taro.showToast({
        title: "请满足校验条件",
        icon: "error",
      });
      return;
    }
    // console.log("form submit",e);
    const userAccount = e.detail.value.userAccount;
    const userPassword = e.detail.value.userPassword;
    console.log("调用接口前",userAccount,userPassword);
    //调用后端登录接口
    postUserLogin(userAccount, userPassword);
  };


  accountLoseFocus = (e) =>{
    this.setState({
      showAccountAlter: e.currentTarget.cursor < 4 ?'block':'none'
    })
  };
  passLoseFocus = (e) =>{
    this.setState({
      showPassAlter: e.currentTarget.cursor < 8 ?'block':'none',
    })
  };

  naviToRegister = () =>{
    Taro.redirectTo({
      url: "/pages/userRegister/index",
    });
  }

  render() {
    return (
      <View className="userLoginPage">
        <View className="register-title at-article__h1">登录</View>
        <Form className="registrationForm" onSubmit={this.formSubmit}>
          <View className="input-group">
            <Label className="input-column-name" for="userAccount">*用户名</Label>
            <Input className="input-column" type="text" name="userAccount" placeholder="输入用户名"  onBlur={this.accountLoseFocus} />
            <Label className="input-column-alter" style={{display: this.state.showAccountAlter}}>至少4个字符</Label>
          </View>
          <View className="input-group">
            <Label className="input-column-name" for="userPassword">*密码</Label>
            <Input className="input-column" password type="text" name="userPassword" placeholder="输入密码"  onBlur={this.passLoseFocus} />
            <Label className="input-column-alter" style={{display: this.state.showPassAlter}}>至少8个字符</Label>
          </View>
          <Button className="btn-register" formType="submit">登录</Button>
        </Form>
        <View className="footer-register">
          <View className="register-footer-info">没有账户？<View className="to-navigator" onClick={this.naviToRegister}>去注册</View></View>
        </View>
      </View>
    );
  }
}
