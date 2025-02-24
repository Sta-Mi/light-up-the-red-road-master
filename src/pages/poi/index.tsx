import { Image, Input, Map, View } from "@tarojs/components";
import { AtAccordion, AtList, AtListItem } from 'taro-ui';
import Taro from "@tarojs/taro";
import React, { Component } from "react";
import amapFile from "../../libs/amap-wx";
import config from "../../libs/config";
import markerChecked from "../../assets/marker_checked.png";
import markerUnChecked from "../../assets/marker.png";
import getUserLocationIcon from "../../assets/get-location.png";
import exhibitionTotalData from "../../data/exhibition_total_data.json";
import redPathData from "../../data/red_path_data.json";
import onmarkerIdByUser from "../../data/onmarkerIdByUser.json";
import "./index.scss";
import GlobalMenu from "../../components/GlobalMenu";


//全局wx
let myAmapFun;
//蒙层全局ID
//let currentId=-1;


let markersData : any[];

interface State {
  markers: any[],
  poisData: any[],
  latitude: number,
  longitude: number,
  textData: {},
  currentId: number,
  city: string,
  scale: number,
  distanceFromMe: number,
  exhibitionImage: string,
  exhibitionName: string,
  exhibitionAddress: string,
  exhibitionNote: string,
  exhibitionTime: string,
  bottomDistance: string,
  maskDisplay: string,
  detailInfoDisplay: string,
  isSearch: boolean,
  polyline: any[],
  openAccordion: boolean
}
export default class PoiPage extends Component<{}, State>  {
  $instance = Taro.getCurrentInstance();
  state : State = {
    markers: [],
    poisData: [],
    latitude: 0,
    longitude: 0,
    textData: {},
    currentId: -1,
    city: '',
    scale: 5,
    distanceFromMe: 0,
    exhibitionImage: '',
    exhibitionName: '',
    exhibitionAddress: '',
    exhibitionNote: '',
    exhibitionTime: '',
    bottomDistance: '97px',
    maskDisplay: 'none',
    detailInfoDisplay: 'none',
    isSearch: false,
    polyline: [],
    openAccordion: false
  };

  //初始化
  componentWillMount = () => {
    // 初始化高德地图
    const key = config.Config.key;
    myAmapFun = new amapFile.AMapWX({key: key});

  }


  // 页面初始加载时
  componentDidMount() {
    let that = this;

    //A->B
    const simplifiedExhibitions = exhibitionTotalData.map(item => {
      return {
        id: item.id,
        exhibitionName: item.exhibitionName,
        latitude: item.exhibitionLatitude,
        longitude: item.exhibitionLongitude
      };
    });
    markersData = simplifiedExhibitions;

    markersData.forEach(marker=> {
      if(onmarkerIdByUser.includes(marker.id)){
        //表示当前用户的这个标记点已经打过卡了
        marker.iconPath = markerChecked;
      }else{
        marker.iconPath = markerUnChecked;
      }
      marker.height = 22;
      marker.width = 22;
      marker.callout = {
        content: '📷' + marker.exhibitionName, // 显示POI名称和展馆图片 B
        color: '#000000',
        fontSize: 14,
        borderRadius: 10,
        bgColor: '#ffffff',
        padding: 10,
        display: 'ALWAYS', // 气泡始终显示 todo1.获取地图缩放的scale 2.当scale>=16时再显示
        textAlign: 'center'
      };
    });

    //绘制线路
    that.portraitPath('');

    //获取查询字符串
    //因为inputtips的bindSearch()函数传递了路由参数
    const paramsFromInputtips = this.$instance.router?.params;
    if (paramsFromInputtips&&paramsFromInputtips.searchKeywords) {
      console.log('执行了')
      that.searchMarkerShowPoiList(paramsFromInputtips);
    }


  }


  // 点击标记后触发事件
  makertap = (e) => {
    let that = this;
    const id = e.markerId;
    that.setState({
      currentId: id,
    },()=>{
      that.changeMarkerColor();
    });
  };
  // Map组件错误时
  onmakerError = (e) => {
    console.error(e);
    Taro.showToast({
      title: '地图加载出错',
      icon: 'error'
    })
  };

  // 获取用户位置
  getUserLocation = () =>{
    let that = this;
    Taro.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setState({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        // todo 更新用户最新的位置(参数：经度，纬度，用户id)
      },
      fail: function(){
        Taro.showToast({
          title: '请打开定位',
          icon: 'error'
        })
      }
    })
  }

  // 根据用户点击后弹出弹框
  changeMarkerColor = ()=> {
    let that = this;
    //i是exhibitionid
    const exhibitionItem = exhibitionTotalData.filter(item => item.id == that.state.currentId)[0];
    that.changeSelectMarker(true);
    that.setState(
      {
        markers: markersData,
        exhibitionImage: exhibitionItem.exhibitionImage,
        exhibitionName: exhibitionItem.exhibitionName,
        exhibitionAddress: exhibitionItem.exhibitionAddress,
        exhibitionNote: exhibitionItem.exhibitionNote,
        exhibitionTime: exhibitionItem.exhibitionStartTime + ' - ' + exhibitionItem.exhibitionFinishTime,
        bottomDistance: '156px',
        maskDisplay: 'block',
        detailInfoDisplay: 'flex',
      }
    );
  }

  //将id=i的marker样式改为选中状态 or 未选中状态
  changeSelectMarker = (isSelectStatus) => {
    let that = this;
    markersData.forEach(marker => {
      if (marker.id === that.state.currentId && isSelectStatus) {
        // Change marker to selected state
        marker.callout = {
          content: '📷' + marker.exhibitionName,
          color: '#000000',
          fontSize: 20,
          borderRadius: 10,
          borderWidth: 3,
          bgColor: '#ffffff',
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        };
      } else {
        // Change marker to unselected state
        marker.callout = {
          content: '📷' + marker.exhibitionName,
          color: '#000000',
          fontSize: 14,
          borderRadius: 10,
          borderWidth: -1,
          bgColor: '#ffffff',
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        };
      }
    });
  }


  //点击搜索框进行搜索
  bindInput = (e) => {
    const { latitude, longitude } = e.currentTarget.dataset;
    let url = '/pages/inputtips/index';

    if (latitude && longitude) {
      url += `?lonlat=${longitude},${latitude}`;
    }

    Taro.redirectTo({
      url
    });
  }

  // 从搜索页面返回后，如果在exhibitionTotal中找到了，则弹出周边展馆列表 + 选中状态
  searchMarkerShowPoiList= (paramsFromInputtips) =>{
    let searchMarkerId = -1;
    let that = this;
    //todo 根据传递过来的keywords 查询总数组的name===keywords得到唯一一个对象，传入i执行changeMarkerColor()效果类似，只不过底下是列表
    const exhibitionSecrchItem = exhibitionTotalData.filter(item=>{
      if(item.exhibitionName === paramsFromInputtips.searchKeywords){
        that.setState({
          currentId: item.id, //用于点击蒙层时，知道更改哪个marker的样式
        });
        searchMarkerId = item.id;
        return item;
      }
      return false;
    })

    if (exhibitionSecrchItem.length!=0) {

      //执行获取周边信息
      let params = {
        querykeywords: paramsFromInputtips.searchKeywords,
        success: function (data) {
          // 更新中心点，选中状态，显示列表
          that.changeSelectMarker( true);
          if(data.poisData.length===0){
            that.setState({
              isSearch: false,
              bottomDistance: "156px",
              exhibitionImage: exhibitionSecrchItem[0].exhibitionImage,
              exhibitionName: exhibitionSecrchItem[0].exhibitionName,
              exhibitionAddress: exhibitionSecrchItem[0].exhibitionAddress,
              exhibitionNote: exhibitionSecrchItem[0].exhibitionNote,
              exhibitionTime: exhibitionSecrchItem[0].exhibitionStartTime + ' - ' + exhibitionSecrchItem[0].exhibitionFinishTime,
            })
          }else {
            that.setState({
              poisData: data.poisData,
              isSearch: true,
              bottomDistance: "52vh",
            })
          }
          that.setState({
            scale: 16,
            markers: markersData,
            latitude: exhibitionSecrchItem[0].exhibitionLatitude,
            longitude: exhibitionSecrchItem[0].exhibitionLongitude,
            maskDisplay: "block",
            detailInfoDisplay: "flex",
          });
          console.log("当前周边景点是：",data.poisData);
        },
        fail: function (info) {
          console.log("poi函数中获取失败：",info);
        },
      };
      myAmapFun.getPoiAround(params);
    } else {
      Taro.showToast({
        title: "待收录",
        icon: "error",
      });
    }
  }

  //隐藏弹窗和蒙层+ 更改marker为未选中状态
  hideMaskAndDetailInfo = () =>{
    let that = this;
    that.changeSelectMarker(false); //更改marker为未选中状态
    that.setState({
      bottomDistance: '97px',
      maskDisplay: 'none',
      detailInfoDisplay: 'none',
      markers: markersData, //！！！！注意更新绑定到视图中的map的marker，样式才能改变！！！
      isSearch: false,
    })
  }


  //绘制路线图
  portraitPath = (pathName:string)=>{
    let that = this;
    let waypoints: string = '';
    let destination: string ='';
    if(pathName != ''){
      redPathData.filter(item => item.pathName === pathName).map(item => {
        let pathExhibitionIdList = item.pathExhibitionIdList;
        pathExhibitionIdList.map((item, index) => {
          let xiabiao = item-1;
          if(index === pathExhibitionIdList.length - 1){
            //最后一项
            destination += `${exhibitionTotalData[xiabiao].exhibitionLongitude},${exhibitionTotalData[xiabiao].exhibitionLatitude}`;
          }else {
            waypoints += `${exhibitionTotalData[xiabiao].exhibitionLongitude},${exhibitionTotalData[xiabiao].exhibitionLatitude};`;
          }
        })
      });
      myAmapFun.getDrivingRoute({
        origin: `${this.state.longitude},${this.state.latitude}`,// 起点我的定位

        waypoints: waypoints,// 途径点
        destination: destination,//终点
        success: function(data){
          let points : any[] = [];
          if(data.paths && data.paths[0] && data.paths[0].steps){
            let steps = data.paths[0].steps;
            for(let i = 0; i < steps.length; i++){
              let poLen = steps[i].polyline.split(';');
              for(let j = 0;j < poLen.length; j++){
                points.push({
                  longitude: poLen[j].split(',')[0],
                  latitude: poLen[j].split(',')[1]
                });
              }
            }
          }
          let mid = parseInt((points.length / 2).toString());
          that.setState({
            polyline: [{
              points: points,
              color: "#ff0000",
              width: 6
            }],
            longitude: points[mid].longitude,
            latitude: points[mid].latitude,
            markers: markersData
          });

        },
        fail: function(info){
          console.log("getDrivingRoute函数报错：",info);
        }
      })
    }else {
      //获取用户当前位置
      that.getUserLocation();
      that.setState({
        markers: markersData
      })
    }
  }

  //显示下拉列表
  showPathNames = () =>{
    if(this.state.openAccordion){
      this.setState({
        openAccordion: false
      })
    }else {
      this.setState({
        openAccordion: true
      })
      //更改样式

    }
  }

  //获取点击的pathName
  getPathName = (e) =>{
    let that = this;
    let pathName = e._relatedInfo.anchorTargetText;
    console.log(e._relatedInfo.anchorTargetText);
    //传递给函数重新加载地图
    //
    //绘制线路
    that.portraitPath(pathName);
    //自动关闭
    that.setState({
      openAccordion: false
    })
  }

  render() {
    return (
      <View>
        <View className="poiPage">
        {/*搜索框*/}
        <View className="section">
          <Input
            className="section_input"
            data-city={this.state.city}
            data-longitude={this.state.longitude}
            data-latitude={this.state.latitude}
            // onTouchStart={this.bindInput.bind(this)}
            onClick={this.bindInput.bind(this)}
            placeholder="搜索"
          />
        </View>
        {/*研学路线*/}
        <View className="top_float_box">
          <AtAccordion
            open={this.state.openAccordion}
            onClick={this.showPathNames.bind(this)}
            title='研学之路'
          >
            <AtList hasBorder={false}>
              {redPathData.length > 0 ? (
                redPathData.map(item => (
                  <AtListItem
                    key={item.id} // 确保每个项都有唯一的 key
                    onClick={this.getPathName} // 传递路径名称
                    title={item.pathName}
                    arrow='right'
                    thumb={item.pathImageUrl} // 假设 imageUrl 是数组对象中的属性
                  />
                ))
              ) : (
                <AtListItem title='没有可用的路径' />
              )}
            </AtList>
          </AtAccordion>
        </View>
        {/*地图 and 蒙层*/}
        <View className="map_container">
          <View className="mask" style={{ display: this.state.maskDisplay }} onClick={this.hideMaskAndDetailInfo}></View>

          <Map
            className="map"
            id="map"
            longitude={this.state.longitude}
            latitude={this.state.latitude}
            scale={this.state.scale}
            showLocation
            markers={this.state.markers}
            polyline={this.state.polyline}
            onMarkerTap={this.makertap.bind(this)}
            onError={this.onmakerError.bind(this)}
          />
        </View>
        {/*定位图标 and marker卡片 or marker周边景点列表*/}
        <View className="bottom_float_box">
          <Image
            style={{ width: '27px', height: '27px', bottom: this.state.bottomDistance }}
            className="get_location_icon"
            mode="scaleToFill"
            src={getUserLocationIcon}
            onClick={this.getUserLocation}
          />

          <View style={{ display: this.state.detailInfoDisplay }}>
            {this.state.isSearch ? (
              <View className="detail_info search_view">
                {this.state.poisData.map((item, index) => (
                  <View key={index} className="search_item">
                    <View className="bottom_content">
                      <View className="content_header">
                        <View className="info_title">{//@ts-ignore
                          item.name}</View>
                        <View className="info_address">{//@ts-ignore
                          item.type}</View>
                        <View className="info_note">{//@ts-ignore
                          item.tel}</View>
                        <View className="info_distance">{//@ts-ignore
                          (item.distance / 1000).toFixed(2)}km</View>
                      </View>
                      <View className="content_footer">
                        <View>{//@ts-ignore
                          item.address}</View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View className="detail_info">
                <View className="image_container">
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    className="exhibition_image"
                    mode="scaleToFill"
                    src={this.state.exhibitionImage}
                  />
                </View>
                <View className="bottom_content">
                  <View className="content_header">
                    <View className="info_title">{this.state.exhibitionName}</View>
                    <View className="info_note">{this.state.exhibitionNote}</View>
                    <View className="info_distance">{this.state.exhibitionTime}</View>
                  </View>
                  <View className="content_footer">
                    <View>{this.state.exhibitionAddress}</View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
        <GlobalMenu />
      </View>
    );
  }
}
