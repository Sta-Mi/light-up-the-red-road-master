import {Image, View} from "@tarojs/components";
import {AtTabs, AtTabsPane} from "taro-ui";
import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";
import "./index.scss";
import exhibitionTotalData from "../../data/exhibition_total_data.json";
import knowImage from "../../assets/know.jpg";
import exhibition5 from "../../assets/5.jpeg";
import exhibition2 from "../../assets/2.jpeg";
import exhibition3 from "../../assets/3.jpeg";
import exhibition4 from "../../assets/4.jpeg";
import exhibition6 from "../../assets/6.jpeg";
import exhibition1 from "../../assets/1.jpeg";
import exhibition7 from "../../assets/7.jpeg";
import exhibition8 from "../../assets/8.jpg";
import ExhibitionSwiper from "../../components/ExhibitionSwiper";
import ExhibitionListByCategory from "../../components/ExhibitionListByFilter";
import GlobalMenu from "../../components/GlobalMenu";


/**
 * 展馆首页
 */
export default () => {
  const [current, setCurrent] = useState(0);

  const handleClick = (value) => {
    setCurrent(value);
  };
  const tabList = [{ title: "推荐" }, { title: "类别" }, { title: "时期" }];
  const [banner, setBanner] = useState([
    exhibition5,
    exhibition4,
    exhibition3,
    exhibition2,
    exhibition1,
  ]);
  type Video = {
    id: number;
    exhibitionId: number;
    videoName: string;
    videoContent: string;
  };
  type Exhibition = {
    id: number;
    exhibitionName: string;
    categoryId: number;
    eraIdList: number[];
    exhibitionImage: string;
    exhibitionAddress: string;
    exhibitionStartTime: string;
    exhibitionFinishTime: string;
    exhibitionNote: string;
    exhibitionProfile: string;
    videoList: Video[];
  };
  const [dataList, setDataList] = useState<Exhibition[]>([]);
  useEffect(() => {
    setBanner([
      exhibition5,
      exhibition6,
      exhibition7,
      exhibition8,
      exhibition4,
    ]);
    setDataList(exhibitionTotalData);
    // setDataList([
    //   {
    //     id: 1,
    //     exhibitionName: "展馆1",
    //     categoryId: 1,
    //     eraIdList: [1, 2],
    //     exhibitionImage:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk12jZMVtPDUvA_kFCiHJViauVmNSstlK8zSksY8A1iCiZ1uNzRaEAVCT0AOTlen7rpAU&usqp=CAU",
    //     exhibitionAddress: "地址1",
    //     exhibitionStartTime: "09:00",
    //     exhibitionFinishTime: "18:00",
    //     exhibitionNote: "周二至周五",
    //     exhibitionProfile: "展馆简介",
    //     videoList: [
    //       {
    //         id: 1,
    //         exhibitionId: 1,
    //         videoName: "展馆1的视频1",
    //         videoContent: "视频1连接",
    //       },
    //       {
    //         id: 2,
    //         exhibitionId: 1,
    //         videoName: "展馆1的视频2",
    //         videoContent: "视频2连接",
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     exhibitionName: "展馆2",
    //     categoryId: 2,
    //     eraIdList: [2, 3],
    //     exhibitionImage:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk12jZMVtPDUvA_kFCiHJViauVmNSstlK8zSksY8A1iCiZ1uNzRaEAVCT0AOTlen7rpAU&usqp=CAU",
    //     exhibitionAddress: "地址2",
    //     exhibitionStartTime: "",
    //     exhibitionFinishTime: "",
    //     exhibitionNote: "全天",
    //     exhibitionProfile: "展馆简介",
    //     videoList: [
    //       {
    //         id: 3,
    //         exhibitionId: 2,
    //         videoName: "展馆2的视频1",
    //         videoContent: "视频3连接",
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     exhibitionName: "湖北省雷锋纪念馆",
    //     categoryId: 3,
    //     eraIdList: [4],
    //     exhibitionImage:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk12jZMVtPDUvA_kFCiHJViauVmNSstlK8zSksY8A1iCiZ1uNzRaEAVCT0AOTlen7rpAU&usqp=CAU",
    //     exhibitionAddress: "地址3",
    //     exhibitionStartTime: "",
    //     exhibitionFinishTime: "",
    //     exhibitionNote: "全天",
    //     exhibitionProfile: "展馆简介",
    //     videoList: [
    //       {
    //         id: 4,
    //         exhibitionId: 3,
    //         videoName: "展馆3的视频1",
    //         videoContent: "视频4连接",
    //       },
    //     ],
    //   },
    //   // Add more items as needed
    // ]);
  }, [dataList]);
  return (
    <View>
      <View className="exhibitionPage">
      <AtTabs
        current={current}
        tabList={tabList}
        onClick={handleClick.bind(this)}
        className="exhibitionTabPage"
      >
        {/*推荐*/}
        <AtTabsPane current={current} index={0} className="tabItem">
          <View
            style="padding: 10px;background-color: #f3f3f3;text-align:inherit;"
            className="tabItem_1"
          >
            <ExhibitionSwiper banner={banner} tabKey={0} />
            <Image
              className="knowImage"
              src={knowImage}
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/know/index",
                });
              }}
            />
            <ExhibitionListByCategory dataList={dataList} tabKey={0} />
          </View>
        </AtTabsPane>
        {/*类别*/}
        <AtTabsPane current={current} index={1}>
          <View
            style="padding: 10px;background-color: #f3f3f3;text-align: inherit;"
            className="tabItem_2"
          >
            <ExhibitionSwiper banner={banner} tabKey={1} />
            <Image
              className="knowImage"
              src={knowImage}
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/know/index",
                });
              }}
            />
            <ExhibitionListByCategory dataList={dataList} tabKey={1} />
          </View>
        </AtTabsPane>
        {/*时期*/}
        <AtTabsPane current={current} index={2}>
          <View
            style="padding: 10px;background-color: #f3f3f3;text-align: inherit;"
            className="tabItem_3"
          >
            <ExhibitionSwiper banner={banner} tabKey={2} />
            <Image
              className="knowImage"
              src={knowImage}
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/know/index",
                });
              }}
            />
            <ExhibitionListByCategory dataList={dataList} tabKey={2} />
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
      <GlobalMenu />
    </View>
  );
};
