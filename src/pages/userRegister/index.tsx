import {Button, Form, Input, Label, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, {Component} from "react";
import { postUserLogin } from "../../utils/functionUtils";
import "./index.scss";

/**
 * 登录页面
 */
interface State {
  showAccountAlter: String,
  showPassAlter: String,
  showCheckPassAlter: String,
  userPassword: String,
  userCheckPassword: String
}
export default class UserRegisterPage extends Component<{},State> {
  state : State = {
    showAccountAlter: 'none',
    showPassAlter: 'none',
    showCheckPassAlter: 'none',
    userPassword: '',
    userCheckPassword: ''
  }

  // 提交表单
  formSubmit = (e) => {
    if(this.state.showAccountAlter != "none" || this.state.showPassAlter != "none" || this.state.showCheckPassAlter != "none"){
      Taro.showToast({
        title: "请满足校验条件",
        icon: "error",
      });
      return;
    }
    // console.log("form submit",e);
    const userAccount = e.detail.value.userAccount;
    const userPassword = e.detail.value.userPassword;
    const checkPassword = e.detail.value.checkPassword;
    console.log("调用接口前",userAccount,userPassword,checkPassword);
    //调用后端登录接口
    Taro.request({
      url:"http://127.0.0.1:8101/api/user/register",
      method:"POST",
      data: {
        userAccount: userAccount,
        userPassword: userPassword,
        checkPassword: checkPassword,
      }
    }).then((res:any)=>{
      // console.log("success",userAccount,userPassword,checkPassword);
      //成功后跳转到登录
      if(res.data.data){
        postUserLogin(userAccount, userPassword);
      }else {
        Taro.showToast({
          title: res.data.message,
          icon: "none",
        });
      }
    }).catch(()=>{
      console.log("注册失败！");
    });
  };


  accountLoseFocus = (e) =>{
    this.setState({
      showAccountAlter: e.currentTarget.cursor < 4 ?'block':'none'
    })
  };
  passLoseFocus = (e) =>{
    this.setState({
      showPassAlter: e.currentTarget.cursor < 8 ?'block':'none',
      userPassword: e.currentTarget.value
    })
    if(this.state.userPassword === this.state.userCheckPassword){
      this.setState({
        showCheckPassAlter: 'none'
      })
    }
  };
  checkPassLoseFocus = (e) =>{
    this.setState({
      showCheckPassAlter: e.currentTarget.cursor<8 || e.currentTarget.value != this.state.userPassword ? 'block' : 'none',
      userCheckPassword: e.currentTarget.value
    })
  };
  naviToLogin = () =>{
    Taro.redirectTo({
      url: "/pages/index/index",
    });
  }
  render() {
    return (
      <View className="userRegisterPage">
        <View className="register-title at-article__h1">创建账户</View>
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
          <View className="input-group">
            <Label className="input-column-name" for="checkPassword">*确认密码</Label>
            <Input className="input-column" password type="text" name="checkPassword" placeholder="确认密码"  onBlur={this.checkPassLoseFocus} />
            <Label className="input-column-alter" style={{display: this.state.showCheckPassAlter}}>两次输入不一致</Label>
          </View>
          <Button className="btn-register" formType="submit">注册</Button>
        </Form>
        <View className="footer-register">
          <View className="register-footer-info">已经有账户？<View className="to-navigator" onClick={this.naviToLogin}>去登录</View></View>
        </View>
      </View>
    );
  }
}




